export const __rspack_esm_ids = [638310]
export const __webpack_modules__ = {
  GTpx(e, t, s) {
    var i = s("zTeN"),
      n = s("SPnB"),
      o = s("Ghh3"),
      a = s("OWtl"),
      r = s("rvFo"),
      l = s("g2p6")
    let c = (0, i.RD)(a.u, ({ scope: e }) => {
      let t = e.get(l.Sk),
        s = e.get(n.chatGptAuthenticatedUserId$)
      return {
        enabled: e.get(n.f4) && null != t,
        queryKey: d({ accountId: t, userId: s }),
        queryFn: async ({ signal: i }) => {
          if (e.get(l.Sk) !== t || e.get(n.chatGptAuthenticatedUserId$) !== s)
            throw Error("Account changed before loading personalization")
          return o.Request.safeGet("/user_system_messages", { signal: i })
        },
        staleTime: r.D.ONE_MINUTE,
      }
    })
    function d({ accountId: e, userId: t }) {
      return ["chatgpt-user-context", e, t]
    }
    ;((0, i.aP)(a.u, ({ scope: e }) => ({
      mutationKey: ["update-chatgpt-user-context"],
      mutationFn: async (t) => {
        let s = e.get(l.Sk),
          i = e.get(n.chatGptAuthenticatedUserId$),
          a = e.query.snapshot(c)
        if ((await a.cancel(), e.get(l.Sk) !== s || e.get(n.chatGptAuthenticatedUserId$) !== i))
          throw Error("Account changed before saving personalization")
        let r = await o.Request.safePatch("/user_system_messages", { requestBody: t })
        a.setData(r)
      },
    })),
      s.d(t, {}, { Pm: d, gM: c }))
  },
  RRpo(e, t, s) {
    let i = (0, s("Qgfj").YK)({
      creatorMicro: {
        id: "codexMicro.deviceName.creatorMicro",
        defaultMessage: "Creator Micro",
        description: "Product name for the Creator Micro keyboard",
      },
    })
    s.d(t, {}, { b: i })
  },
  Zi7y(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      o = s("iNGw"),
      a = s.n(o),
      r = s("zTeN"),
      l = s("oyxz"),
      c = s("g2p6"),
      d = s("bqtn"),
      u = s("bVeK"),
      g = s("OWtl"),
      p = s("AWNZ"),
      m = s("QyE3"),
      f = s("QmOp")
    let h = (0, r.un)(g.u, ({ scope: e }) => {
      let t = f.g.getVoiceExtraOptions(e)
      if (0 === t.length) return null
      let { modelSlug: s } = f.g.resolveVoiceOption$(e, "wingman"),
        i = t.map((t) => ({ slug: t.modelSlug, label: f.g.wingmanDisplayName(e, t.modelSlug) }))
      return {
        modelSlug: s,
        label: f.g.wingmanDisplayName(e, s),
        labelCounts: a()(i, "label"),
        options: [{ slug: "", label: f.g.wingmanDisplayName(e, "") }, ...i],
      }
    })
    function v(e) {
      let t,
        s = (0, n.c)(6),
        { label: o, modelSlug: a, showModelSlug: r } = e
      if ("" === a) {
        let e
        return (
          s[0] !== o
            ? ((e = (0, i.jsx)(l.A, {
                id: "settings.chatGpt.voice.defaultModel",
                defaultMessage: "{model} (default)",
                description:
                  "Automatic voice model option. The model value is the configured model name, such as Live; default distinguishes automatic selection from choosing a specific model with the same name.",
                values: { model: o },
              })),
              (s[0] = o),
              (s[1] = e))
            : (e = s[1]),
          e
        )
      }
      return (
        s[2] !== o || s[3] !== a || s[4] !== r
          ? ((t = r
              ? (0, i.jsx)(l.A, {
                  id: "settings.chatGpt.voice.duplicateModelLabel",
                  defaultMessage: "{model} ({slug})",
                  description:
                    "Option and selected value in the Voice settings Model dropdown when different models share a display name. The model placeholder is the shared display name, such as Live. The slug is the exact model identifier and must remain untranslated so users can distinguish the choices. Selecting an option chooses that model; automatic selection is labeled separately as default.",
                  values: { model: o, slug: a },
                })
              : o),
            (s[2] = o),
            (s[3] = a),
            (s[4] = r),
            (s[5] = t))
          : (t = s[5]),
        t
      )
    }
    s.d(
      t,
      {},
      {
        ConfiguredBidiModelSetting: function () {
          let e,
            t,
            s,
            o,
            a,
            b = (0, n.c)(20),
            y = (0, r.gh)(g.u),
            x = (0, r.Ul)(h),
            { data: w } = (0, r.Ul)(c.s6)
          if (null == x) return null
          b[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, {
                id: "settings.chatGpt.voice.model",
                defaultMessage: "Model",
                description: "Label for ChatGPT voice model selection",
              })),
              (b[0] = e))
            : (e = b[0])
          let M = null == w,
            _ = x.labelCounts[x.label] > 1
          if (
            (b[1] !== x.label || b[2] !== x.modelSlug || b[3] !== _
              ? ((t = (0, i.jsx)(v, { label: x.label, modelSlug: x.modelSlug, showModelSlug: _ })),
                (b[1] = x.label),
                (b[2] = x.modelSlug),
                (b[3] = _),
                (b[4] = t))
              : (t = b[4]),
            b[5] !== M || b[6] !== t
              ? ((s = (0, i.jsx)(m.vg, { disabled: M, children: t })), (b[5] = M), (b[6] = t), (b[7] = s))
              : (s = b[7]),
            b[8] !== y || b[9] !== x.labelCounts || b[10] !== x.modelSlug || b[11] !== x.options)
          ) {
            let e
            ;(b[13] !== y || b[14] !== x.labelCounts || b[15] !== x.modelSlug
              ? ((e = (e) => {
                  let { slug: t, label: s } = e
                  return (0, i.jsx)(
                    d.ms.Item,
                    {
                      RightIcon: x.modelSlug === t ? u.ALZ : void 0,
                      onSelect: () => {
                        f.g.setLocalModelSlug(y, t)
                      },
                      children: (0, i.jsx)(v, { label: s, modelSlug: t, showModelSlug: x.labelCounts[s] > 1 }),
                    },
                    t,
                  )
                }),
                (b[13] = y),
                (b[14] = x.labelCounts),
                (b[15] = x.modelSlug),
                (b[16] = e))
              : (e = b[16]),
              (o = x.options.map(e)),
              (b[8] = y),
              (b[9] = x.labelCounts),
              (b[10] = x.modelSlug),
              (b[11] = x.options),
              (b[12] = o))
          } else o = b[12]
          return (
            b[17] !== s || b[18] !== o
              ? ((a = (0, i.jsx)(p.ic, {
                  label: e,
                  control: (0, i.jsx)(d.Ab, { align: "end", triggerButton: s, children: o }),
                })),
                (b[17] = s),
                (b[18] = o),
                (b[19] = a))
              : (a = b[19]),
            a
          )
        },
      },
    )
  },
  t6Ln(e, t, s) {
    s.d(
      t,
      {},
      {
        g: function (e) {
          return "wm" === e
        },
      },
    )
  },
  QmOp(e, t, s) {
    s.d(t, { i: () => j, g: () => P })
    var i = s("zTeN"),
      n = s("HZfM"),
      o = s("ASxG"),
      a = s("SPnB"),
      r = s("x4uR"),
      l = s("u4MG"),
      c = s("wVX4"),
      d = s("GTpx"),
      u = s("g2p6"),
      g = s("gyrn"),
      p = s("nlNF"),
      m = s("OWtl"),
      f = s("JYRT"),
      h = s("OMIV"),
      v = s("S9GT")
    s("RlOk")
    var b = s("BKxs"),
      y = s("hOYb")
    let x = (0, i.vP)(m.u, !1),
      w = (0, i.vP)(m.u, !1)
    var M = s("aWDT"),
      _ = s("t6Ln")
    let T = "2438435464",
      A = "no_auth_bidi_enabled",
      C = o.object({
        rollout_policy: o
          .enum(["unavailable", "available_opt_in", "available_default"])
          .optional()
          .catch(void 0),
        rollout_version: o
          .number()
          .optional()
          .catch(void 0),
        home_takeover_enabled: o
          .boolean()
          .optional()
          .catch(void 0),
        home_takeover_animation_enabled: o
          .boolean()
          .optional()
          .catch(void 0),
        voice_model_picker_available: o
          .boolean()
          .optional()
          .catch(void 0),
        incall_voice_model_picker_available: o
          .boolean()
          .optional()
          .catch(void 0),
        incall_banner_enabled: o
          .boolean()
          .optional()
          .catch(void 0),
        unavailable_upsell_policy: o
          .string()
          .optional()
          .catch(void 0),
        wingman_model_name: o
          .string()
          .optional()
          .catch(void 0),
        wingman_model_picker_default_display_name: o
          .string()
          .optional()
          .catch(void 0),
        wingman_model_picker_alternative_options: o
          .array(o.object({ display_name: o.string().optional(), slug: o.string() }))
          .optional()
          .catch(void 0),
        projects_enabled: o
          .boolean()
          .optional()
          .catch(void 0),
      }),
      k = ["wingman", "advanced", "standard"],
      S = (0, i.T1)(m.u, (e, { scope: t }) => t),
      j = (0, i.un)(m.u, ({ scope: e }) => {
        let t,
          s = P.policyResolvedVoice$(e)
        return !P.isWingmanUnsupportedContext(e) && (null != t ? "wingman" === t : "wingman" === s)
      }),
      P = new (class {
        readPolicyConfig(e) {
          let t = C.safeParse(e.get(f.X, "2688454279")?.value ?? {})
          return t.success ? t.data : {}
        }
        shouldShowWingmanComingSoon(e, t) {
          if ("vp" !== t) return !1
          let s = this.readPolicyConfig(e)
          return "unavailable" === s.rollout_policy && "coming_soon" === s.unavailable_upsell_policy
        }
        wingmanModelName(e) {
          return this.readPolicyConfig(e).wingman_model_name || "GPT Live 1"
        }
        wingmanDisplayName(e, t) {
          let s = this.readPolicyConfig(e)
          return null == t || 0 === t.length
            ? s.wingman_model_picker_default_display_name || "Live"
            : this.getWingmanAlternativeOptions(e).find(({ slug: e }) => e === t)?.display_name || t
        }
        policyVersion(e) {
          let t = this.readPolicyConfig(e).rollout_version
          return "number" == typeof t && Number.isInteger(t) && t >= 0 ? t : void 0
        }
        isInCallVoiceModelPickerAvailable(e) {
          return !!this.readPolicyConfig(e).incall_voice_model_picker_available
        }
        normalizeFeatherTransportOnlyVoiceMode(e, t) {
          return e.get(w) && "standard" === t ? "advanced" : t
        }
        legacyResolvedVoice$(e) {
          return e.get(d.gM).data?.disabled_tools?.includes("advanced_voice") ? "standard" : "advanced"
        }
        legacyResolvedVoice(e) {
          return this.legacyResolvedVoice$(e.get(S, void 0))
        }
        policyResolvedVoice$(e, { disableNoAuthBidiExposureLog: t } = {}) {
          var s
          let i,
            n = this.readPolicyConfig(e),
            o = n.rollout_policy
          if (null == e.get(a.chatGptAuthenticatedUserId$))
            return !this.isWingmanUnsupportedContext(e) &&
              "available_default" === o &&
              e
                .get(h.M9)
                ?.getLayer(T, { disableExposureLog: t ?? !0 })
                .get(A, !1)
              ? "wingman"
              : void 0
          if (e.get(v.b)) return "wingman"
          let r = ((s = e), (i = s.get(u.s6).data?.voiceMode), k.find((e) => e === i)),
            l = e.get(u.s6).data?.voiceModePolicyVersion,
            c = n.rollout_version
          return "unavailable" === o
            ? "wingman" === r
              ? "advanced"
              : this.normalizeFeatherTransportOnlyVoiceMode(e, r)
            : "available_opt_in" === o
              ? this.normalizeFeatherTransportOnlyVoiceMode(e, r)
              : "available_default" === o
                ? "standard" === r || (null != l && "number" == typeof c && l >= c)
                  ? this.normalizeFeatherTransportOnlyVoiceMode(e, r)
                  : "wingman"
                : this.normalizeFeatherTransportOnlyVoiceMode(e, "wingman" === r ? "advanced" : r)
        }
        policyResolvedVoice(e, t = {}) {
          return this.policyResolvedVoice$(e.get(S, void 0), t)
        }
        isWmOptionAvailable(e) {
          if (e.get(v.b)) return !0
          let t = this.readPolicyConfig(e).rollout_policy
          return "available_opt_in" === t || "available_default" === t
        }
        isNoAuthBidiEnabled(e, { disableNoAuthBidiExposureLog: t = !1 } = {}) {
          return (
            null == e.get(a.chatGptAuthenticatedUserId$) &&
            "wingman" === this.policyResolvedVoice(e, { disableNoAuthBidiExposureLog: t })
          )
        }
        exposeNoAuthBidiExperiment(e) {
          e.get(h.M9)?.getLayer(T).get(A, !1)
        }
        isNoAuthBidiComposerEnabled(e, { disableNoAuthBidiExposureLog: t = !1 } = {}) {
          return (
            this.isNoAuthBidiEnabled(e, { disableNoAuthBidiExposureLog: t }) &&
            !!e.get(h.M9)?.getLayer(T, { disableExposureLog: t }).get("no_auth_bidi_composer_enabled", !1)
          )
        }
        getWingmanAlternativeOptions(e) {
          return this.readPolicyConfig(e).wingman_model_picker_alternative_options ?? []
        }
        getBaseVoiceOptions(e) {
          return this.isWmOptionAvailable(e)
            ? k.map((e) => ({ modelSlug: "", voiceModel: e }))
            : [
                { modelSlug: "", voiceModel: "advanced" },
                { modelSlug: "", voiceModel: "standard" },
              ]
        }
        getVoiceExtraOptions(e) {
          return this.isWmOptionAvailable(e)
            ? this.getWingmanAlternativeOptions(e).map(({ slug: e }) => ({ modelSlug: e, voiceModel: "wingman" }))
            : []
        }
        getVoiceOptions(e) {
          return [...this.getBaseVoiceOptions(e), ...this.getVoiceExtraOptions(e)]
        }
        resolveVoiceOption$(e, t) {
          let s = e.get(b.s0),
            i = this.getVoiceOptions(e)
          return (
            i.find((e) => e.voiceModel === t && e.modelSlug === s) ??
            i.find((e) => e.voiceModel === t && 0 === e.modelSlug.length) ?? { modelSlug: "", voiceModel: t }
          )
        }
        setLocalModelSlug(e, t) {
          e.set(b.s0, t)
        }
        tcLoggingEnabled(e) {
          return e.get(x)
        }
        voicePath(e, t, s) {
          let i = "/realtime"
          return "wm" === this.sessionType(e, s) ? `${i}/wm` : `${i}/vp${"standard" === t ? "s" : ""}`
        }
        isWingmanUnsupportedContext(e, t) {
          var s
          let i,
            o = void 0 === t ? (0, M.H2)(e) : t
          return (
            (null != o && !this.isBidiProjectContextEnabled(e, o)) ||
            ((s = e), null != (i = s.get(p.x2)?.pathname) && null != (0, n.B6)("/scheduled", i))
          )
        }
        isBidiProjectContextEnabled(e, t) {
          return (void 0 === t ? G(e, (0, M.H2)(e)) : G(e, t)) && !0 === this.readPolicyConfig(e).projects_enabled
        }
        sessionType(e, t) {
          return this.sessionType$(e.get(S, void 0), t)
        }
        sessionType$(e, t) {
          if (this.isWingmanUnsupportedContext(e, t)) return "vp"
          let s = (0, h.ie)(e, "2860872286"),
            i = e.get(w)
          if (s || i) return "wm"
          let n = this.policyResolvedVoice$(e)
          if ("standard" === n || "advanced" === n);
          else if ("wingman" === n) return "wm"
          return "vp"
        }
        isStandardVoiceSelected(e) {
          return this.isStandardVoiceSelected$(e.get(S, void 0))
        }
        isStandardVoiceSelected$(e) {
          let t = this.policyResolvedVoice$(e)
          return t
            ? "standard" === t
            : "standard" === this.normalizeFeatherTransportOnlyVoiceMode(e, this.legacyResolvedVoice$(e))
        }
        shouldDisableProjectMove(e) {
          return e.get(S, void 0).get(y.H3) && (0, _.g)(this.sessionType(e))
        }
        normalizeVoiceModeForUnsupportedContext(e, t, s = !1) {
          return (s || this.isWingmanUnsupportedContext(e)) && "wingman" === t ? "advanced" : t
        }
        requestedVoiceMode(e, t, s) {
          let i,
            n = null != s && !this.isBidiProjectContextEnabled(e, s),
            o = this.policyResolvedVoice(e)
          return (
            o && (i = o),
            (i = i ?? t ?? (this.isStandardVoiceSelected(e) ? "standard" : "advanced")),
            (i = this.normalizeFeatherTransportOnlyVoiceMode(e, i)),
            this.normalizeVoiceModeForUnsupportedContext(e, i, n)
          )
        }
        reportedVoiceMode(e, { voiceMode: t, sessionType: s = this.sessionType(e), reason: i, voiceBackend: n }) {
          if ("userIgnoredMicrophonePrompt" === i || "userDeniedMicrophonePrompt" === i) return "no-microphone"
          let o = k.find((e) => e === n)
          return o || ((0, _.g)(s) ? "wingman" : (t ?? "(unknown)"))
        }
        speakingListeningTrigger(e) {
          return "vp" === this.sessionType(e) ? "server" : "energy"
        }
      })()
    function G(e, t) {
      if (null == t || !(0, l.w7)(t)) return !1
      let s = e.get(r.jf, t).data
      return (
        null != s &&
        (null == s.gizmo.gizmo_snorlax_type ||
          ("locked_chats" === s.gizmo.gizmo_snorlax_type && e.get(g.cz)?.projectId === t)) &&
        !(0, c.wZ)(s)
      )
    }
  },
  S5NB(e, t, s) {
    let i = (0, s("Qgfj").YK)({
      title: {
        id: "restricted.cloudComputer.title",
        defaultMessage: "Cloud computer",
        description: "Title of cloud computer settings",
      },
      cookies: {
        id: "restricted.cloudComputer.cookies",
        defaultMessage: "ChatGPT Work cookies",
        description: "Cookies managed by ChatGPT Work, separate from the user’s dot’s cookies",
      },
      cookiesDescription: {
        id: "restricted.cloudComputer.cookies.description",
        defaultMessage: "Manage cookies used by ChatGPT Work",
        description: "Description of the cookie manager for ChatGPT Work in the cloud",
      },
      approvalsDescription: {
        id: "restricted.cloudComputer.approvals.description",
        defaultMessage: "Choose whether ChatGPT Work asks before opening websites. Applies only to ChatGPT Work.",
        description: "Explains that cloud website approval settings affect ChatGPT Work, not the user's dot",
      },
      approvals: {
        id: "restricted.cloudComputer.approvals",
        defaultMessage: "ChatGPT Work website approvals",
        description: "Website approvals apply only to ChatGPT Work in the cloud",
      },
    })
    s.d(t, {}, { P: i })
  },
  uxIz(e, t, s) {
    let i = (0, s("Qgfj").YK)({
      title: {
        id: "restricted.passwords.title",
        defaultMessage: "Passwords",
        description:
          "Title of the settings section for saved website passwords, distinct from the user's ChatGPT login password",
      },
      search: {
        id: "restricted.passwords.search",
        defaultMessage: "Search passwords",
        description: "Placeholder and accessible label for filtering saved passwords by website or account label",
      },
    })
    s.d(t, {}, { $: "1675852838", N: i })
  },
  Y6nA(e, t, s) {
    s.d(t, { G: () => g })
    var i = s("WLmQ"),
      n = s("Qgfj"),
      o = s("EZRW")
    let a = (0, n.YK)({
      title: {
        id: "settings.nav.rosalind",
        defaultMessage: "GPT-Rosalind",
        description: "Title for the GPT-Rosalind plugin settings section",
      },
    })
    var r = s("S5NB"),
      l = s("uxIz"),
      c = s("qaaZ")
    let d = (0, n.zR)({
        id: "settings.nav.general-settings",
        defaultMessage: "General",
        description: "Title for general settings section",
      }),
      u = (0, n.YK)({
        family: d,
        billing: {
          id: "settings.nav.billing",
          defaultMessage: "Billing",
          description:
            "Navigation title for personal ChatGPT subscription, payment methods, invoices, and wallet settings",
        },
        agreements: {
          id: "workspaceAgreements.title",
          defaultMessage: "Agreements",
          description: "Title of the workspace agreements page",
        },
        age: {
          id: "settings.chatGpt.age.title",
          defaultMessage: "Age",
          description: "Title of the Age detail page within ChatGPT Account settings",
        },
        account: {
          id: "settings.nav.account",
          defaultMessage: "Account",
          description: "Title for ChatGPT account settings section",
        },
        "parental-controls": {
          id: "settings.nav.parental-controls",
          defaultMessage: "Parental controls",
          description: "Title for ChatGPT settings showing family members linked through parental controls",
        },
        "trusted-contact": {
          id: "settingsModal.trustedContacts.sectionTitle",
          defaultMessage: "Trusted contact",
          description: "Title for Trusted contact settings",
        },
        safety: {
          id: "settings.nav.safetyAndWellbeing",
          defaultMessage: "Safety & wellbeing",
          description: "Title for ChatGPT safety and wellbeing settings, including time management",
        },
        "time-management": {
          id: "settings.nav.time-management",
          defaultMessage: "Time management",
          description: "Title for ChatGPT time management settings, including the teen's Quiet Hours schedule",
        },
        appearance: {
          id: "settings.nav.appearance",
          defaultMessage: "Appearance",
          description: "Title for appearance settings section",
        },
        voice: { id: "settings.nav.voice", defaultMessage: "Voice", description: "Title for voice settings section" },
        storage: {
          id: "settings.nav.storage",
          defaultMessage: "Storage",
          description: "Title for ChatGPT library storage settings section",
        },
        pets: {
          id: "settings.nav.miniAndPets",
          defaultMessage: "Mini & Pets",
          description:
            "Title for settings for Mini, the floating compact panel, and its optional pets; use approved localized terminology",
        },
        chatGptPets: {
          id: "settings.nav.pets.v2",
          defaultMessage: "Pets",
          description:
            "Title for ChatGPT Work settings for choosing, creating, or uploading a collectible pet character",
        },
        "general-settings": d,
        notifications: {
          id: "settings.nav.notifications",
          defaultMessage: "Notifications",
          description: "Title for notifications settings section",
        },
        import: {
          id: "settings.nav.import.v2",
          defaultMessage: "Import",
          description:
            "Title for the import settings section. In French, use the infinitive verb 'Importer', not the noun 'Importation'.",
        },
        profile: { id: "settings.nav.profile", defaultMessage: "Profile", description: "Title for profile section" },
        security: {
          id: "settings.nav.security",
          defaultMessage: "Security",
          description: "Title for ChatGPT security settings section",
        },
        "keyboard-shortcuts": {
          id: "settings.nav.keyboard-shortcuts",
          defaultMessage: "Keyboard shortcuts",
          description: "Title for keyboard shortcuts settings section",
        },
        "codex-micro": {
          id: "settings.nav.codex-micro",
          defaultMessage: "Codex Micro",
          description: "Title for Codex Micro settings section",
        },
        appshots: {
          id: "settings.nav.appshots",
          defaultMessage: "Appshots",
          description:
            "Navigation title for settings that configure Appshots, Codex captures of the frontmost app window",
        },
        agent: {
          id: "settings.nav.agent",
          defaultMessage: "Configuration",
          description: "Title for configuration settings section",
        },
        "work-settings": {
          id: "settings.nav.workPreferences",
          defaultMessage: "Work preferences",
          description: "Navigation title for saved account preferences for Work",
        },
        "git-settings": {
          id: "settings.nav.git-settings",
          defaultMessage: "Git",
          description: "Title for git settings section",
        },
        "ads-controls": {
          id: "settings.nav.ads-controls",
          defaultMessage: "Ads controls",
          description: "Navigation title for ChatGPT advertising preferences and history",
        },
        "archived-chats": {
          id: "settings.nav.archived-chats",
          defaultMessage: "Archived chats",
          description: "Title for archived chats settings section",
        },
        "data-controls": {
          id: "settings.nav.chatGptDataControls",
          defaultMessage: "Data controls",
          description: "Title for shared data controls when ChatGPT settings are available",
        },
        chatGptSecurity: {
          id: "settings.nav.chatGptSecurity",
          defaultMessage: "Security and login",
          description: "Title for ChatGPT security and login settings section",
        },
        chatGptKeyboard: {
          id: "settings.nav.chatGptKeyboard",
          defaultMessage: "Keyboard",
          description: "Title for ChatGPT keyboard settings section",
        },
        chatGptRemotes: {
          id: "settings.nav.chatGptRemotes",
          defaultMessage: "Remotes",
          description: "Title for ChatGPT remote computer settings section",
        },
        chatGptInternalSettings: {
          id: "settings.nav.chatGptInternalSettings",
          defaultMessage: "Employee Only",
          description: "Title for employee-only ChatGPT settings section",
        },
        "code-review": {
          id: "settings.nav.codeReview",
          defaultMessage: "Code Review",
          description: "Title for the Code Review settings section",
        },
        "usage-code-review": {
          id: "settings.nav.codeReviewAnalytics",
          defaultMessage: "Code review analytics",
          description:
            "Settings navigation and command menu label for code review usage analytics, distinct from code review configuration",
        },
        "cloud-settings": {
          id: "settings.nav.cloudSettings",
          defaultMessage: "Cloud preferences",
          description: "Title for cloud settings section",
        },
        "codex-cloud": {
          id: "settings.nav.codexCloud",
          defaultMessage: "Codex Cloud",
          description: "Settings for Codex Cloud environments and the personal vault",
        },
        legacyCodexCloud: {
          id: "settings.nav.legacyCodexCloud",
          defaultMessage: "Legacy Codex Cloud",
          description: "Settings for the legacy Codex Cloud environment system",
        },
        "cloud-environments": {
          id: "settings.nav.cloudEnvironments",
          defaultMessage: "Cloud environments",
          description: "Title for cloud environments settings section",
        },
        personalization: {
          id: "settings.nav.personalization",
          defaultMessage: "Personalization",
          description: "Title for personalization settings section",
        },
        chronicle: {
          id: "settings.nav.chronicle",
          defaultMessage: "Computer history",
          description: "Title for Computer history settings section",
        },
        usage: {
          id: "settings.nav.usage",
          defaultMessage: "Usage & billing",
          description: "Title for usage and billing settings section",
        },
        enterpriseUsage: {
          id: "settings.nav.enterpriseUsage",
          defaultMessage: "Usage",
          description: "Title for the enterprise usage settings section when analytics has its own section",
        },
        analytics: {
          id: "settings.nav.analytics",
          defaultMessage: "Analytics",
          description: "Title for the usage analytics settings section",
        },
        "consumer-view": {
          id: "settings.nav.consumerView",
          defaultMessage: "Consumer analytics (internal)",
          description:
            "Settings navigation label for a restricted consumer usage dashboard used solely for OpenAI internal testing",
        },
        debug: { id: "settings.nav.debug", defaultMessage: "Debug", description: "Title for debug settings section" },
        "computer-use": {
          id: "settings.nav.computer-use",
          defaultMessage: "Computer use",
          description: "Title for computer use settings section",
        },
        "browser-use": {
          id: "settings.nav.browser-use",
          defaultMessage: "Browser",
          description: "Title for in-app browser settings section",
        },
        extension: {
          id: "settings.nav.namedBrowserExtension",
          defaultMessage: "{browserName} extension",
          description:
            "Title for browser extension settings; browserName is the browser's brand name, such as Chrome, Edge, or Brave",
        },
        browserExtension: {
          id: "settings.nav.browser-extension",
          defaultMessage: "Browser extension",
          description: "Title for browser extension settings when the current browser cannot be identified",
        },
        "local-environments": {
          id: "settings.nav.local-environments",
          defaultMessage: "Environments",
          description: "Title for environments settings section",
        },
        worktrees: {
          id: "settings.nav.worktrees.v2",
          defaultMessage: "Worktrees",
          description:
            "Title for worktrees settings section. Keep 'Worktrees' in English in all locales; it is a product term.",
        },
        environments: {
          id: "settings.nav.environments",
          defaultMessage: "Cloud Environments",
          description: "Title for environments settings section",
        },
        "mcp-settings": {
          id: "settings.nav.mcp-settings",
          defaultMessage: "MCP servers",
          description: "Title for MCP servers settings section",
        },
        gateways: {
          id: "settings.nav.gateways",
          defaultMessage: "Model Providers",
          description: "Navigation label for desktop model gateway settings",
        },
        "hooks-settings": {
          id: "settings.nav.hooks-settings",
          defaultMessage: "Hooks",
          description: "Title for hooks settings section",
        },
        connections: {
          id: "settings.nav.connections",
          defaultMessage: "Connections",
          description: "Title for connections settings section",
        },
        "plugins-settings": {
          id: "settings.nav.plugins-settings",
          defaultMessage: "Plugins",
          description: "Title for plugins settings section",
        },
        "file-type-handlers": {
          id: "settings.nav.file-type-handlers",
          defaultMessage: "File viewers",
          description: "Title for choosing what opens each file type in Codex",
        },
        "skills-settings": {
          id: "settings.nav.skills-settings",
          defaultMessage: "Skills",
          description: "Title for skills settings section",
        },
      })
    function g(e, t = !1, s = !1) {
      if ("rosalind" === e) return a.title
      if ("extension" === e) {
        let e = (0, o.e)()
        return null != e ? { ...u.extension, values: { browserName: i.Yp[e].shortDisplayName } } : u.browserExtension
      }
      if ("usage" === e && t) return u.enterpriseUsage
      if ("passwords" === e) return l.N.title
      if ("cloud-computer" === e) return r.P.title
      if ("teams" === e) return c.T.title
      if (s) {
        if ("usage" === e) return u.enterpriseUsage
        if ("connections" === e) return u.chatGptRemotes
        if ("debug" === e) return u.chatGptInternalSettings
        if ("keyboard-shortcuts" === e) return u.chatGptKeyboard
        if ("security" === e) return u.chatGptSecurity
      }
      return "cloud-environments" === e ? u.legacyCodexCloud : u[e]
    }
  },
  AWNZ(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      o = s("on57"),
      a = s("zd8w"),
      r = s("HZfM"),
      l = s("bVeK")
    function c(e) {
      return e.preventDefault()
    }
    function d(e) {
      let t,
        s,
        a,
        r,
        l,
        c,
        d,
        u = (0, n.c)(24),
        {
          label: g,
          labelId: p,
          labelSizing: m,
          labelWeight: f,
          description: h,
          descriptionId: v,
          icon: b,
          variant: y,
          verticalAlignment: x,
        } = e,
        w = "start" === x ? "items-start" : "items-center",
        M = "grow" === (void 0 === m ? "grow" : m) && "flex-1"
      ;(u[0] !== w || u[1] !== M
        ? ((t = (0, o.A)("flex min-w-0 gap-3", w, M)), (u[0] = w), (u[1] = M), (u[2] = t))
        : (t = u[2]),
        u[3] !== b
          ? ((s = null != b ? (0, i.jsx)("span", { className: "flex shrink-0", children: b }) : null),
            (u[3] = b),
            (u[4] = s))
          : (s = u[4]))
      let _ = "featured" === y && "text-base",
        T = "recommendation" === y && "text-[13px] leading-[18.571429px]",
        A = "featured" !== y && "recommendation" !== y && "text-sm",
        C = "nested" !== y && "medium" === (void 0 === f ? "medium" : f) && "font-medium"
      return (
        u[5] !== C || u[6] !== _ || u[7] !== T || u[8] !== A
          ? ((a = (0, o.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              _,
              T,
              A,
              C,
            )),
            (u[5] = C),
            (u[6] = _),
            (u[7] = T),
            (u[8] = A),
            (u[9] = a))
          : (a = u[9]),
        u[10] !== g || u[11] !== p || u[12] !== a
          ? ((r = (0, i.jsx)("div", { id: p, className: a, children: g })),
            (u[10] = g),
            (u[11] = p),
            (u[12] = a),
            (u[13] = r))
          : (r = u[13]),
        u[14] !== h || u[15] !== v
          ? ((l = h
              ? (0, i.jsx)("div", {
                  id: v,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: h,
                })
              : null),
            (u[14] = h),
            (u[15] = v),
            (u[16] = l))
          : (l = u[16]),
        u[17] !== r || u[18] !== l
          ? ((c = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [r, l] })),
            (u[17] = r),
            (u[18] = l),
            (u[19] = c))
          : (c = u[19]),
        u[20] !== c || u[21] !== t || u[22] !== s
          ? ((d = (0, i.jsxs)("div", { className: t, children: [s, c] })),
            (u[20] = c),
            (u[21] = t),
            (u[22] = s),
            (u[23] = d))
          : (d = u[23]),
        d
      )
    }
    s.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            s,
            a,
            r,
            l,
            c,
            d = (0, n.c)(18),
            { children: u, compactLabelInset: g, label: p, valueAlignment: m, variant: f } = e,
            h = void 0 === g || g,
            v = void 0 === m ? "start" : m,
            b = void 0 === f ? "default" : f,
            y =
              "compact" === b
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            d[0] !== y ? ((t = (0, o.A)("grid items-center", y)), (d[0] = y), (d[1] = t)) : (t = d[1]),
            d[2] !== h || d[3] !== b
              ? ((s = (0, o.A)(
                  "min-w-0",
                  "compact" === b
                    ? (0, o.A)("flex items-center pe-2 text-start", h && "ps-1")
                    : "text-sm text-secondary",
                )),
                (d[2] = h),
                (d[3] = b),
                (d[4] = s))
              : (s = d[4]),
            d[5] !== p || d[6] !== s
              ? ((a = (0, i.jsx)("div", { className: s, children: p })), (d[5] = p), (d[6] = s), (d[7] = a))
              : (a = d[7]),
            d[8] !== v || d[9] !== b
              ? ((r = (0, o.A)(
                  "min-w-0",
                  "compact" === b
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, o.A)("break-words whitespace-normal text-sm text-default", "end" === v && "text-end"),
                )),
                (d[8] = v),
                (d[9] = b),
                (d[10] = r))
              : (r = d[10]),
            d[11] !== u || d[12] !== r
              ? ((l = (0, i.jsx)("div", { className: r, children: u })), (d[11] = u), (d[12] = r), (d[13] = l))
              : (l = d[13]),
            d[14] !== t || d[15] !== a || d[16] !== l
              ? ((c = (0, i.jsxs)("div", { className: t, children: [a, l] })),
                (d[14] = t),
                (d[15] = a),
                (d[16] = l),
                (d[17] = c))
              : (c = d[17]),
            c
          )
        },
        ic: function (e) {
          let t,
            s,
            r,
            l,
            c = (0, n.c)(35),
            {
              label: u,
              labelSizing: g,
              labelWeight: p,
              layout: m,
              description: f,
              control: h,
              controlSizing: v,
              icon: b,
              className: y,
              id: x,
              inset: w,
              size: M,
              variant: _,
              verticalAlignment: T,
            } = e,
            A = void 0 === g ? "grow" : g,
            C = void 0 === p ? "medium" : p,
            k = void 0 === m ? "default" : m,
            S = void 0 === v ? "minimum" : v,
            j = void 0 === w || w,
            P = void 0 === M ? "default" : M,
            G = void 0 === _ ? "default" : _,
            N = void 0 === T ? "center" : T,
            V = (0, a.useId)(),
            z = null != u || null != f || null != b,
            W = "function" == typeof h,
            R = W && null != u ? `${V}-label` : void 0,
            O = W && f ? `${V}-description` : void 0,
            I = j && ("split" !== k || "default" !== G) && "px-4",
            E = j && "nested" === G && "group-data-[density=form]/settings:px-5",
            D =
              "stacked" === G &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            U =
              "nested" === G &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            $ = "stacked" !== G && ("start" === N ? "items-start" : "items-center"),
            B = "split" === k && "default" === G && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            c[0] !== y ||
            c[1] !== k ||
            c[2] !== P ||
            c[3] !== E ||
            c[4] !== D ||
            c[5] !== U ||
            c[6] !== $ ||
            c[7] !== B ||
            c[8] !== I ||
            c[9] !== G
              ? ((t = (0, o.A)(
                  "@container/settings-row",
                  I,
                  E,
                  D,
                  U,
                  $,
                  B,
                  "default" === k &&
                    ("default" === G || "featured" === G || "recommendation" === G) &&
                    (0, o.A)(
                      "flex justify-between",
                      "featured" === G && (0, o.A)("gap-6", "compact" === P ? "min-h-11 py-2" : "py-4"),
                      "featured" !== G && ("compact" === P ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === G && "dark:bg-secondary-ghost-hover",
                  y,
                )),
                (c[0] = y),
                (c[1] = k),
                (c[2] = P),
                (c[3] = E),
                (c[4] = D),
                (c[5] = U),
                (c[6] = $),
                (c[7] = B),
                (c[8] = I),
                (c[9] = G),
                (c[10] = t))
              : (t = c[10]),
            c[11] !== f ||
            c[12] !== O ||
            c[13] !== z ||
            c[14] !== b ||
            c[15] !== u ||
            c[16] !== R ||
            c[17] !== A ||
            c[18] !== C ||
            c[19] !== G ||
            c[20] !== N
              ? ((s = z
                  ? (0, i.jsx)(d, {
                      label: u,
                      labelId: R,
                      labelSizing: A,
                      labelWeight: C,
                      description: f,
                      descriptionId: O,
                      icon: b,
                      variant: G,
                      verticalAlignment: N,
                    })
                  : null),
                (c[11] = f),
                (c[12] = O),
                (c[13] = z),
                (c[14] = b),
                (c[15] = u),
                (c[16] = R),
                (c[17] = A),
                (c[18] = C),
                (c[19] = G),
                (c[20] = N),
                (c[21] = s))
              : (s = c[21]),
            c[22] !== h || c[23] !== S || c[24] !== O || c[25] !== W || c[26] !== R || c[27] !== k || c[28] !== G
              ? ((r =
                  null != h && !1 !== h
                    ? (0, i.jsx)("div", {
                        className: (0, o.A)(
                          "stacked" === G && "w-full",
                          "nested" === G && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === k &&
                            "default" === G &&
                            (0, o.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === S && "w-full",
                            ),
                          "default" === k &&
                            ("default" === G || "featured" === G || "recommendation" === G) &&
                            (0, o.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === S ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === S && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: W ? h({ "aria-labelledby": R, "aria-describedby": O }) : h,
                      })
                    : null),
                (c[22] = h),
                (c[23] = S),
                (c[24] = O),
                (c[25] = W),
                (c[26] = R),
                (c[27] = k),
                (c[28] = G),
                (c[29] = r))
              : (r = c[29]),
            c[30] !== x || c[31] !== t || c[32] !== s || c[33] !== r
              ? ((l = (0, i.jsxs)("div", { id: x, className: t, children: [s, r] })),
                (c[30] = x),
                (c[31] = t),
                (c[32] = s),
                (c[33] = r),
                (c[34] = l))
              : (l = c[34]),
            l
          )
        },
        jj: function (e) {
          let t,
            s = (0, n.c)(2),
            { children: o } = e
          return (
            s[0] !== o
              ? ((t = (0, i.jsx)("span", { className: "text-xs text-secondary", children: o })), (s[0] = o), (s[1] = t))
              : (t = s[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            s,
            a,
            l,
            u,
            g,
            p,
            m,
            f,
            h,
            v,
            b,
            y,
            x,
            w,
            M,
            _,
            T,
            A,
            C,
            k,
            S,
            j,
            P = (0, n.c)(54)
          P[0] !== e
            ? (({
                actions: t,
                actionsPlacement: v,
                ariaControls: s,
                ariaExpanded: a,
                ariaLabel: l,
                className: u,
                description: g,
                disabled: p,
                edgeRounding: b,
                icon: m,
                label: h,
                size: y,
                trailing: w,
                variant: x,
                ...f
              } = e),
              (P[0] = e),
              (P[1] = t),
              (P[2] = s),
              (P[3] = a),
              (P[4] = l),
              (P[5] = u),
              (P[6] = g),
              (P[7] = p),
              (P[8] = m),
              (P[9] = f),
              (P[10] = h),
              (P[11] = v),
              (P[12] = b),
              (P[13] = y),
              (P[14] = x),
              (P[15] = w))
            : ((t = P[1]),
              (s = P[2]),
              (a = P[3]),
              (l = P[4]),
              (u = P[5]),
              (g = P[6]),
              (p = P[7]),
              (m = P[8]),
              (f = P[9]),
              (h = P[10]),
              (v = P[11]),
              (b = P[12]),
              (y = P[13]),
              (x = P[14]),
              (w = P[15]))
          let G = void 0 === b ? "row" : b,
            N = void 0 === y ? "default" : y,
            V = void 0 === x ? "default" : x,
            z = "before-trailing" === (void 0 === v ? "end" : v) && !p && null != t && null != w,
            W = z ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          P[16] !== u || P[17] !== z || P[18] !== N || P[19] !== W || P[20] !== V
            ? ((M = (0, o.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                W,
                "empty" === V
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, o.A)(
                      "px-4 text-start",
                      "nested" === V && "min-h-10 py-0.5",
                      "nested" !== V && ("large" === N ? "py-4" : "py-3"),
                      z && "gap-2",
                      !z && ("nested" === V ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (P[16] = u),
              (P[17] = z),
              (P[18] = N),
              (P[19] = W),
              (P[20] = V),
              (P[21] = M))
            : (M = P[21])
          let R = M
          ;(P[22] !== g || P[23] !== m || P[24] !== h || P[25] !== V
            ? ((_ =
                "empty" === V
                  ? (0, i.jsxs)(i.Fragment, { children: [m, h] })
                  : (0, i.jsx)(d, { label: h, description: g, icon: m, variant: V, verticalAlignment: "center" })),
              (P[22] = g),
              (P[23] = m),
              (P[24] = h),
              (P[25] = V),
              (P[26] = _))
            : (_ = P[26]),
            P[27] !== w
              ? ((T =
                  null != w
                    ? (0, i.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: w })
                    : null),
                (P[27] = w),
                (P[28] = T))
              : (T = P[28]),
            P[29] !== _ || P[30] !== T
              ? ((A = (0, i.jsxs)(i.Fragment, { children: [_, T] })), (P[29] = _), (P[30] = T), (P[31] = A))
              : (A = P[31]))
          let O = A,
            I = z ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            E = "row" === G && "first:rounded-t-2xl last:rounded-b-2xl",
            D = "recommendation" === V && "dark:bg-secondary-ghost-hover",
            U = !p && "hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover",
            $ =
              !p &&
              "recommendation" === V &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            P[32] !== I || P[33] !== E || P[34] !== D || P[35] !== U || P[36] !== $
              ? ((C = (0, o.A)("group w-full items-center", I, E, D, U, $)),
                (P[32] = I),
                (P[33] = E),
                (P[34] = D),
                (P[35] = U),
                (P[36] = $),
                (P[37] = C))
              : (C = P[37]),
            P[38] !== s || P[39] !== a || P[40] !== l || P[41] !== O || P[42] !== p || P[43] !== f || P[44] !== R
              ? ((k =
                  null != f.to
                    ? (0, i.jsx)(r.N_, {
                        ...f,
                        className: R,
                        "aria-controls": s,
                        "aria-expanded": a,
                        "aria-label": l,
                        "aria-disabled": p || void 0,
                        tabIndex: p ? -1 : void 0,
                        onClick: p ? c : f.onClick,
                        children: O,
                      })
                    : (0, i.jsx)("button", {
                        ...f,
                        className: R,
                        "aria-controls": s,
                        "aria-expanded": a,
                        "aria-label": l,
                        disabled: p,
                        type: "button",
                        children: O,
                      })),
                (P[38] = s),
                (P[39] = a),
                (P[40] = l),
                (P[41] = O),
                (P[42] = p),
                (P[43] = f),
                (P[44] = R),
                (P[45] = k))
              : (k = P[45]),
            P[46] !== t || P[47] !== p || P[48] !== z
              ? ((S =
                  p || null == t
                    ? null
                    : (0, i.jsx)("div", {
                        className: (0, o.A)(
                          "flex shrink-0 items-center gap-1",
                          z ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (P[46] = t),
                (P[47] = p),
                (P[48] = z),
                (P[49] = S))
              : (S = P[49]),
            P[50] !== C || P[51] !== k || P[52] !== S
              ? ((j = (0, i.jsxs)("div", { className: C, children: [k, S] })),
                (P[50] = C),
                (P[51] = k),
                (P[52] = S),
                (P[53] = j))
              : (j = P[53]),
            j
          )
        },
        kf: function (e) {
          let t,
            s = (0, n.c)(2),
            { children: o } = e
          return (
            s[0] !== o
              ? ((t = (0, i.jsx)("span", { className: "text-tertiary", children: o })), (s[0] = o), (s[1] = t))
              : (t = s[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            s,
            a,
            r,
            c,
            d,
            u,
            g,
            p,
            m,
            f = (0, n.c)(43),
            {
              id: h,
              ariaLabel: v,
              autoFocus: b,
              checked: y,
              description: x,
              highlightSelected: w,
              indicator: M,
              label: _,
              name: T,
              onChange: A,
              onClick: C,
              value: k,
              variant: S,
            } = e,
            j = void 0 === w || w,
            P = void 0 === M ? "radio" : M,
            G = void 0 === S ? "default" : S
          ;(f[0] !== y || f[1] !== x || f[2] !== j || f[3] !== P || f[4] !== G
            ? ((t = (0, o.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === G &&
                  (0, o.A)(
                    "gap-3 px-4 py-3 hover:bg-secondary-ghost-hover",
                    null != x ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === G && y && j && "radio" === P && "bg-background-neutral-soft-alpha",
                "form" === G && "items-center gap-4 px-4 py-4 hover:bg-secondary-ghost-hover",
                "inline" === G && "items-center gap-2",
                "checkmark" === P && "after:ms-7",
              )),
              (f[0] = y),
              (f[1] = x),
              (f[2] = j),
              (f[3] = P),
              (f[4] = G),
              (f[5] = t))
            : (t = f[5]),
            f[6] !== v || f[7] !== h
              ? ((s = (0, i.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": v,
                  htmlFor: h,
                })),
                (f[6] = v),
                (f[7] = h),
                (f[8] = s))
              : (s = f[8]),
            f[9] !== P || f[10] !== G
              ? ((a = (0, o.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === P
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, o.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === G ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (f[9] = P),
                (f[10] = G),
                (f[11] = a))
              : (a = f[11]))
          let N = null != x ? `${h}-description` : void 0
          ;(f[12] !== v ||
          f[13] !== b ||
          f[14] !== y ||
          f[15] !== h ||
          f[16] !== T ||
          f[17] !== A ||
          f[18] !== C ||
          f[19] !== a ||
          f[20] !== N ||
          f[21] !== k
            ? ((r = (0, i.jsx)("input", {
                id: h,
                className: a,
                "aria-label": v,
                "aria-describedby": N,
                autoFocus: b,
                type: "radio",
                name: T,
                value: k,
                checked: y,
                onChange: A,
                onClick: C,
              })),
              (f[12] = v),
              (f[13] = b),
              (f[14] = y),
              (f[15] = h),
              (f[16] = T),
              (f[17] = A),
              (f[18] = C),
              (f[19] = a),
              (f[20] = N),
              (f[21] = k),
              (f[22] = r))
            : (r = f[22]),
            f[23] !== y || f[24] !== P
              ? ((c = "checkmark" === P ? (0, i.jsx)(l.ALZ, { className: (0, o.A)(!y && "invisible") }) : null),
                (f[23] = y),
                (f[24] = P),
                (f[25] = c))
              : (c = f[25]))
          let V = "default" === G ? "text-sm font-medium" : "text-base"
          return (
            f[26] !== V ? ((d = (0, o.A)("text-default", V)), (f[26] = V), (f[27] = d)) : (d = f[27]),
            f[28] !== _ || f[29] !== d
              ? ((u = (0, i.jsx)("span", { className: d, children: _ })), (f[28] = _), (f[29] = d), (f[30] = u))
              : (u = f[30]),
            f[31] !== x || f[32] !== h
              ? ((g =
                  null != x
                    ? (0, i.jsx)("span", {
                        id: `${h}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: x,
                      })
                    : null),
                (f[31] = x),
                (f[32] = h),
                (f[33] = g))
              : (g = f[33]),
            f[34] !== u || f[35] !== g
              ? ((p = (0, i.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, g],
                })),
                (f[34] = u),
                (f[35] = g),
                (f[36] = p))
              : (p = f[36]),
            f[37] !== p || f[38] !== t || f[39] !== s || f[40] !== r || f[41] !== c
              ? ((m = (0, i.jsxs)("div", { className: t, children: [s, r, c, p] })),
                (f[37] = p),
                (f[38] = t),
                (f[39] = s),
                (f[40] = r),
                (f[41] = c),
                (f[42] = m))
              : (m = f[42]),
            m
          )
        },
      },
    )
  },
  QyE3(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      o = s("on57"),
      a = s("oyxz"),
      r = s("RRpo"),
      l = s("Sm6l"),
      c = s("Yakm"),
      d = s("Y6nA")
    function u(e) {
      let t,
        s,
        o = (0, n.c)(7),
        { codexMicroDeviceModel: l, showChatGptDataControlsLabel: c, showUsageOnlyLabel: u, slug: g } = e,
        p = void 0 !== c && c,
        m = void 0 !== u && u
      if ("codex-micro" === g && "creator-micro-v2" === (void 0 === l ? null : l)) {
        let e
        return (
          o[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(a.A, { ...r.b.creatorMicro })), (o[0] = e))
            : (e = o[0]),
          e
        )
      }
      return (
        o[1] !== p || o[2] !== m || o[3] !== g
          ? ((t = (0, d.G)(g, m, p)), (o[1] = p), (o[2] = m), (o[3] = g), (o[4] = t))
          : (t = o[4]),
        o[5] !== t ? ((s = (0, i.jsx)(a.A, { ...t })), (o[5] = t), (o[6] = s)) : (s = o[6]),
        s
      )
    }
    s.d(
      t,
      {},
      {
        gl: u,
        s: function (e) {
          let t = (0, n.c)(62),
            { showChatGptDataControlsLabel: s, slug: o } = e
          if (
            void 0 !== s &&
            s &&
            [
              "browser-use",
              "connections",
              "data-controls",
              "debug",
              "keyboard-shortcuts",
              "security",
              "usage",
            ].includes(o)
          ) {
            let e, s
            return (
              t[0] !== o ? ((e = (0, d.G)(o, !1, !0)), (t[0] = o), (t[1] = e)) : (e = t[1]),
              t[2] !== e ? ((s = (0, i.jsx)(a.A, { ...e })), (t[2] = e), (t[3] = s)) : (s = t[3]),
              s
            )
          }
          switch (o) {
            case "rosalind":
            case "passwords":
            case "cloud-computer":
            case "age":
            case "agreements":
            case "billing":
            case "extension": {
              let e, s
              return (
                t[4] !== o ? ((e = (0, d.G)(o)), (t[4] = o), (t[5] = e)) : (e = t[5]),
                t[6] !== e ? ((s = (0, i.jsx)(a.A, { ...e })), (t[6] = e), (t[7] = s)) : (s = t[7]),
                s
              )
            }
            case "account": {
              let e
              return (
                t[8] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.account",
                      defaultMessage: "Account",
                      description: "Title for ChatGPT account settings section",
                    })),
                    (t[8] = e))
                  : (e = t[8]),
                e
              )
            }
            case "appshots": {
              let e
              return (
                t[9] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.appshots",
                      defaultMessage: "Appshots",
                      description:
                        "Page title for settings that configure Appshots, Codex captures of the frontmost app window",
                    })),
                    (t[9] = e))
                  : (e = t[9]),
                e
              )
            }
            case "appearance": {
              let e
              return (
                t[10] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.appearance",
                      defaultMessage: "Appearance",
                      description: "Title for appearance settings section",
                    })),
                    (t[10] = e))
                  : (e = t[10]),
                e
              )
            }
            case "voice": {
              let e
              return (
                t[11] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.voice",
                      defaultMessage: "Voice",
                      description: "Title for voice settings section",
                    })),
                    (t[11] = e))
                  : (e = t[11]),
                e
              )
            }
            case "storage": {
              let e
              return (
                t[12] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.storage",
                      defaultMessage: "Storage",
                      description: "Title for ChatGPT storage settings section",
                    })),
                    (t[12] = e))
                  : (e = t[12]),
                e
              )
            }
            case "family":
            case "parental-controls":
            case "trusted-contact":
            case "safety":
            case "time-management":
            case "pets": {
              let e, s
              return (
                t[13] !== o ? ((e = (0, d.G)(o)), (t[13] = o), (t[14] = e)) : (e = t[14]),
                t[15] !== e ? ((s = (0, i.jsx)(a.A, { ...e })), (t[15] = e), (t[16] = s)) : (s = t[16]),
                s
              )
            }
            case "general-settings": {
              let e
              return (
                t[17] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.general-settings",
                      defaultMessage: "General",
                      description: "Title for general settings section",
                    })),
                    (t[17] = e))
                  : (e = t[17]),
                e
              )
            }
            case "notifications": {
              let e
              return (
                t[18] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.notifications",
                      defaultMessage: "Notifications",
                      description: "Title for notifications settings section",
                    })),
                    (t[18] = e))
                  : (e = t[18]),
                e
              )
            }
            case "import": {
              let e
              return (
                t[19] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.import.v2",
                      defaultMessage: "Import",
                      description:
                        "Title for the import settings section. In French, use the infinitive verb 'Importer', not the noun 'Importation'.",
                    })),
                    (t[19] = e))
                  : (e = t[19]),
                e
              )
            }
            case "profile": {
              let e
              return (
                t[20] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.profile",
                      defaultMessage: "Profile",
                      description: "Title for profile section",
                    })),
                    (t[20] = e))
                  : (e = t[20]),
                e
              )
            }
            case "security": {
              let e
              return (
                t[21] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.security",
                      defaultMessage: "Security and login",
                      description: "Title for ChatGPT security settings section",
                    })),
                    (t[21] = e))
                  : (e = t[21]),
                e
              )
            }
            case "keyboard-shortcuts": {
              let e
              return (
                t[22] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.keyboard-shortcuts",
                      defaultMessage: "Keyboard shortcuts",
                      description: "Title for keyboard shortcuts settings section",
                    })),
                    (t[22] = e))
                  : (e = t[22]),
                e
              )
            }
            case "codex-micro": {
              let e
              return (
                t[23] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.codex-micro",
                      defaultMessage: "Codex Micro",
                      description: "Title for Codex Micro settings section",
                    })),
                    (t[23] = e))
                  : (e = t[23]),
                e
              )
            }
            case "agent": {
              let e
              return (
                t[24] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.agent",
                      defaultMessage: "Configuration",
                      description: "Title for configuration settings section",
                    })),
                    (t[24] = e))
                  : (e = t[24]),
                e
              )
            }
            case "work-settings": {
              let e
              return (
                t[25] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(u, { slug: "work-settings" })), (t[25] = e))
                  : (e = t[25]),
                e
              )
            }
            case "git-settings": {
              let e
              return (
                t[26] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.git-settings",
                      defaultMessage: "Git",
                      description: "Title for git settings section",
                    })),
                    (t[26] = e))
                  : (e = t[26]),
                e
              )
            }
            case "ads-controls": {
              let e
              return (
                t[27] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(u, { slug: "ads-controls" })), (t[27] = e))
                  : (e = t[27]),
                e
              )
            }
            case "data-controls":
            case "archived-chats": {
              let e
              return (t[28] !== o ? ((e = (0, i.jsx)(u, { slug: o })), (t[28] = o), (t[29] = e)) : (e = t[29]), e)
            }
            case "usage-code-review": {
              let e
              return (
                t[30] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.codeReview",
                      defaultMessage: "Code review",
                      description: "Title for code review settings section",
                    })),
                    (t[30] = e))
                  : (e = t[30]),
                e
              )
            }
            case "code-review": {
              let e
              return (
                t[31] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(u, { slug: "code-review" })), (t[31] = e))
                  : (e = t[31]),
                e
              )
            }
            case "cloud-settings": {
              let e
              return (
                t[32] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.cloudSettings",
                      defaultMessage: "Cloud preferences",
                      description: "Title for cloud settings section",
                    })),
                    (t[32] = e))
                  : (e = t[32]),
                e
              )
            }
            case "codex-cloud":
            case "cloud-environments": {
              let e, s
              return (
                t[33] !== o ? ((e = (0, d.G)(o)), (t[33] = o), (t[34] = e)) : (e = t[34]),
                t[35] !== e ? ((s = (0, i.jsx)(a.A, { ...e })), (t[35] = e), (t[36] = s)) : (s = t[36]),
                s
              )
            }
            case "personalization": {
              let e
              return (
                t[37] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.personalization",
                      defaultMessage: "Personalization",
                      description: "Title for personalization settings section",
                    })),
                    (t[37] = e))
                  : (e = t[37]),
                e
              )
            }
            case "chronicle": {
              let e
              return (
                t[38] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.chronicle",
                      defaultMessage: "Computer history",
                      description: "Title for Computer history settings section",
                    })),
                    (t[38] = e))
                  : (e = t[38]),
                e
              )
            }
            case "usage": {
              let e
              return (
                t[39] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.usage",
                      defaultMessage: "Usage & billing",
                      description: "Title for usage and billing settings section",
                    })),
                    (t[39] = e))
                  : (e = t[39]),
                e
              )
            }
            case "analytics": {
              let e
              return (
                t[40] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.analytics",
                      defaultMessage: "Analytics",
                      description: "Title for the usage analytics settings section",
                    })),
                    (t[40] = e))
                  : (e = t[40]),
                e
              )
            }
            case "consumer-view": {
              let e
              return (
                t[41] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.consumerView",
                      defaultMessage: "Consumer analytics (internal)",
                      description:
                        "Page title for a restricted consumer usage dashboard used solely for OpenAI internal testing",
                    })),
                    (t[41] = e))
                  : (e = t[41]),
                e
              )
            }
            case "debug": {
              let e
              return (
                t[42] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.debug",
                      defaultMessage: "Debug",
                      description: "Title for debug settings section",
                    })),
                    (t[42] = e))
                  : (e = t[42]),
                e
              )
            }
            case "computer-use": {
              let e
              return (
                t[43] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "computerUse.label",
                      defaultMessage: "Computer use",
                      description: "Label for the Computer Use feature",
                    })),
                    (t[43] = e))
                  : (e = t[43]),
                e
              )
            }
            case "browser-use": {
              let e
              return (
                t[44] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.browser-use",
                      defaultMessage: "Browser",
                      description: "Title for in-app browser settings section",
                    })),
                    (t[44] = e))
                  : (e = t[44]),
                e
              )
            }
            case "local-environments": {
              let e
              return (
                t[45] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.local-environments",
                      defaultMessage: "Environments",
                      description: "Title for environments settings section",
                    })),
                    (t[45] = e))
                  : (e = t[45]),
                e
              )
            }
            case "worktrees": {
              let e
              return (
                t[46] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.worktrees.v2",
                      defaultMessage: "Worktrees",
                      description:
                        "Title for worktrees settings section. Keep 'Worktrees' in English in all locales; it is a product term.",
                    })),
                    (t[46] = e))
                  : (e = t[46]),
                e
              )
            }
            case "environments": {
              let e
              return (
                t[47] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.environments",
                      defaultMessage: "Cloud Environments",
                      description: "Title for environments settings section",
                    })),
                    (t[47] = e))
                  : (e = t[47]),
                e
              )
            }
            case "gateways": {
              let e
              return (
                t[48] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.gateways",
                      defaultMessage: "Model Providers",
                      description: "Title for desktop model gateway settings",
                    })),
                    (t[48] = e))
                  : (e = t[48]),
                e
              )
            }
            case "mcp-settings": {
              let e
              return (
                t[49] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.mcp-settings",
                      defaultMessage: "MCP servers",
                      description: "Title for MCP servers settings section",
                    })),
                    (t[49] = e))
                  : (e = t[49]),
                e
              )
            }
            case "hooks-settings": {
              let e
              return (
                t[50] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.hooks-settings",
                      defaultMessage: "Hooks",
                      description: "Title for hooks settings section",
                    })),
                    (t[50] = e))
                  : (e = t[50]),
                e
              )
            }
            case "connections": {
              let e
              return (
                t[51] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.connections",
                      defaultMessage: "Connections",
                      description: "Title for connections settings section",
                    })),
                    (t[51] = e))
                  : (e = t[51]),
                e
              )
            }
            case "plugins-settings": {
              let e
              return (
                t[52] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.plugins-settings",
                      defaultMessage: "Plugins",
                      description: "Title for plugins settings section",
                    })),
                    (t[52] = e))
                  : (e = t[52]),
                e
              )
            }
            case "file-type-handlers": {
              let e, s
              return (
                t[53] !== o ? ((e = (0, d.G)(o)), (t[53] = o), (t[54] = e)) : (e = t[54]),
                t[55] !== e ? ((s = (0, i.jsx)(a.A, { ...e })), (t[55] = e), (t[56] = s)) : (s = t[56]),
                s
              )
            }
            case "skills-settings": {
              let e
              return (
                t[57] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(a.A, {
                      id: "settings.section.skills-settings",
                      defaultMessage: "Skills",
                      description: "Title for skills settings section",
                    })),
                    (t[57] = e))
                  : (e = t[57]),
                e
              )
            }
            case "teams": {
              let e, s
              return (
                t[58] !== o ? ((e = (0, d.G)(o)), (t[58] = o), (t[59] = e)) : (e = t[59]),
                t[60] !== e ? ((s = (0, i.jsx)(a.A, { ...e })), (t[60] = e), (t[61] = s)) : (s = t[61]),
                s
              )
            }
          }
        },
        vg: function (e) {
          let t,
            s,
            a,
            r,
            d,
            u,
            g,
            p,
            m,
            f,
            h,
            v,
            b,
            y,
            x = (0, n.c)(29)
          x[0] !== e
            ? (({
                children: s,
                className: a,
                contentClassName: r,
                chevronClassName: t,
                leadingVisual: d,
                color: g,
                size: p,
                ...u
              } = e),
              (x[0] = e),
              (x[1] = t),
              (x[2] = s),
              (x[3] = a),
              (x[4] = r),
              (x[5] = d),
              (x[6] = u),
              (x[7] = g),
              (x[8] = p))
            : ((t = x[1]), (s = x[2]), (a = x[3]), (r = x[4]), (d = x[5]), (u = x[6]), (g = x[7]), (p = x[8]))
          let w = void 0 === g ? "outline" : g,
            M = void 0 === p ? "toolbar" : p,
            _ =
              "toolbar" === M &&
              (null != d ? "pe-3 ps-[calc((var(--spacing-token-button-composer)-var(--spacing)*5)/2-1px)]" : "px-3")
          return (
            x[9] !== a || x[10] !== _
              ? ((m = (0, o.A)("max-w-full justify-between", _, a)), (x[9] = a), (x[10] = _), (x[11] = m))
              : (m = x[11]),
            x[12] !== r
              ? ((f = (0, o.A)("flex min-w-0 flex-1 items-center gap-1.5", r)), (x[12] = r), (x[13] = f))
              : (f = x[13]),
            x[14] !== s || x[15] !== d || x[16] !== f
              ? ((h = (0, i.jsxs)("span", { className: f, children: [d, s] })),
                (x[14] = s),
                (x[15] = d),
                (x[16] = f),
                (x[17] = h))
              : (h = x[17]),
            x[18] !== t
              ? ((v = (0, o.A)("icon-2xs shrink-0 text-tertiary", t)), (x[18] = t), (x[19] = v))
              : (v = x[19]),
            x[20] !== v ? ((b = (0, i.jsx)(c.A, { className: v })), (x[20] = v), (x[21] = b)) : (b = x[21]),
            x[22] !== w || x[23] !== u || x[24] !== M || x[25] !== m || x[26] !== h || x[27] !== b
              ? ((y = (0, i.jsxs)(l.$, { color: w, size: M, className: m, ...u, children: [h, b] })),
                (x[22] = w),
                (x[23] = u),
                (x[24] = M),
                (x[25] = m),
                (x[26] = h),
                (x[27] = b),
                (x[28] = y))
              : (y = x[28]),
            y
          )
        },
      },
    )
  },
  S9GT(e, t, s) {
    var i = s("zTeN"),
      n = s("OWtl")
    s("OMIV")
    let o = (0, i.un)(n.u, ({ get: e }) => !1)
    s.d(t, {}, { b: o })
  },
  RlOk(e, t, s) {
    var i,
      n = s("Mwrm"),
      o = s("zTeN"),
      a = s("OWtl"),
      r =
        (((i = {}).IgnoredMicrophonePrompt = "userIgnoredMicrophonePrompt"),
        (i.DeniedMicrophonePrompt = "userDeniedMicrophonePrompt"),
        (i.LimitReached = "limitReached"),
        (i.HangupTool = "hangupTool"),
        (i.UserAbort = "userAbort"),
        (i.UserRequest = "userRequest"),
        (i.NetworkDisconnected = "networkDisconnected"),
        (i.UserNavigatedAway = "userNavigatedAway"),
        (i.UserSwitchedToStandard = "userSwitchedToStandard"),
        (i.Failed = "failed"),
        (i.ElectronAppMinimized = "electron-app-minimized"),
        i)
    let l = (0, o.vP)(a.u, () => ({})),
      c = (0, o.vP)(a.u, () => [])
    s.d(
      t,
      {},
      {
        OX: l,
        c9: function (e, t, s) {
          e.set(l, (e) =>
            (0, n.jM)(e, (e) => {
              let i = "function" == typeof s ? s(e[t]) : s
              void 0 === i ? delete e[t] : (e[t] = i)
            }),
          )
        },
        hj: r,
        l4: c,
      },
    )
  },
  BKxs(e, t, s) {
    s.d(t, { cs: () => c, Lu: () => l, b$: () => u, HJ: () => g, PU: () => p, ET: () => a, s0: () => r })
    var i = s("kpIY"),
      n = s("Nwp9")
    function o(e, t, s) {
      return (0, n.m3)(e, t, {
        coerceStoredValue: (e) => (null == e ? t : s?.coerceStoredValue != null ? s.coerceStoredValue(e) : e),
      })
    }
    let a = (0, n.m3)("oai/apps/voiceLastUsed", null)
    ;(0, n.m3)("jump-to-shade", null)
    let r = o("oai/apps/voiceModelSlug", "")
    ;(o("voiceDuckingControl", "volume"), (0, n.m3)("voiceDuckingDecibels", -10, { coerceStoredValue: g }))
    let l = o("voiceErleInformedDuckingEnabled", !0),
      c = (0, n.m3)("voiceErleConfiguredDuckingDepthDb", 8, {
        coerceStoredValue: function (e) {
          let t = "string" == typeof e && "" !== e.trim() ? Number(e) : e
          return "number" == typeof t && Number.isFinite(t) ? Math.max(1, Math.min(60, Math.trunc(t))) : 8
        },
      })
    function d(e) {
      return "none" === e || "asr" === e || "volume" === e
    }
    function u() {
      let e = (0, i.TB)("voiceDuckingControl")
      if ("server_transcription" === e || "microphone" === e)
        return d(e) ? e : "server_transcription" === e ? "asr" : "volume"
      return d(e) ? e : void 0
    }
    function g(e) {
      return "number" == typeof e && Number.isFinite(e) ? Math.min(0, Math.max(-60, Math.round(e))) : -10
    }
    function p() {
      let e = (0, i.TB)("voiceDuckingDecibels")
      return null == e ? void 0 : g(e)
    }
  },
}
//# sourceMappingURL=638310.4a63bc921c.js.map
