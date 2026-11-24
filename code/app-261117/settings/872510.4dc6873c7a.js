export const __rspack_esm_ids = [872510]
export const __webpack_modules__ = {
  cQed(e, t, s) {
    s.d(t, { VD: () => m, az: () => g, N5: () => u, hX: () => r, $Z: () => p, sl: () => c, ul: () => i })
    let n = new Set(["resource.invoke", "offline_access"])
    function i(e) {
      return !n.has(e)
    }
    let a = {
        id: "signInWithChatGPTConsent.resourcePermission.identity",
        defaultMessage: "Identity",
        description:
          "Label for identity permissions requested or granted by a third-party app. Covers the openid, profile, and email OAuth scopes.",
      },
      o = {
        id: "signInWithChatGPTConsent.resourcePermission.chatgptAllowance",
        defaultMessage: "ChatGPT plan",
        description:
          "Label explaining that a third-party app can consume the user's ChatGPT plan allowance for API requests.",
      },
      r = {
        openid: a,
        profile: a,
        email: a,
        "resource.invoke": {
          id: "signInWithChatGPTConsent.resourcePermission.resourceInvoke",
          defaultMessage: "Resource actions",
          description: "Label for permission to invoke an OAuth resource, requested or granted by a third-party app.",
        },
        "chatgpt.plugins.invoke": {
          id: "signInWithChatGPTConsent.resourcePermission.chatgptPlugins",
          defaultMessage: "Connected apps",
          description:
            "Label for permission to invoke the user's connected ChatGPT apps, requested or granted by a third-party app.",
        },
        "chatpass.enable.request": o,
        "chatgpt.tokens.use.obo": o,
        "chatpass.enable.request.direct": o,
        "chatgpt.tokens.use.direct": o,
        "ads.admin.all.read": {
          id: "signInWithChatGPTConsent.resourcePermission.adsRead",
          defaultMessage: "View ad account data",
          description:
            "Permission label for viewing ad account data, requested or granted by a third-party app. Used in developer registration, user consent and settings, and granted-access emails; does not imply write access.",
        },
        "ads.admin.all.write": {
          id: "signInWithChatGPTConsent.resourcePermission.adsWrite",
          defaultMessage: "Manage ad account data",
          description:
            "Permission label for changing ad account data, requested or granted by a third-party app. Used in developer registration, user consent and settings, and granted-access emails.",
        },
        offline_access: {
          id: "signInWithChatGPTConsent.resourcePermission.offlineAccess",
          defaultMessage: "Stay connected to your ChatGPT account",
          description: "Label for offline access requested or granted by a third-party app.",
        },
      }
    function c(e) {
      return r[e]
    }
    let l = {
        id: "signInWithChatGPTConsent.resourcePermission.identity.description",
        defaultMessage: "Basic information including your name, email, and profile picture.",
        description:
          "Description beneath the shared identity permission title in SIWC consent and linked-app settings. The openid, profile, and email scopes share this one description.",
      },
      d = {
        id: "oauthConsentChoices.planLimits",
        defaultMessage: "Allow {appName} to consume usage from your ChatGPT Plan's limits.",
        description:
          "Description beneath the ChatPass permission title in SIWC consent and linked-app settings. {appName} is the requesting third-party app display name, such as Acme. The app's usage counts toward the user's ChatGPT plan limits.",
      },
      u = {
        openid: l,
        profile: l,
        email: l,
        "resource.invoke": void 0,
        "chatgpt.plugins.invoke": {
          id: "signInWithChatGPTConsent.resourcePermission.chatgptPlugins.description",
          defaultMessage:
            "{appName} will be able to use apps you\u2019ve connected to ChatGPT to work on your requests.",
          description:
            "Description beneath the connected-app permission title in SIWC consent and linked-app settings. {appName} is the requesting third-party app display name, such as Acme; ChatGPT is a product name.",
        },
        "chatpass.enable.request": d,
        "chatgpt.tokens.use.obo": d,
        "chatpass.enable.request.direct": d,
        "chatgpt.tokens.use.direct": d,
        "ads.admin.all.read": {
          id: "signInWithChatGPTConsent.adsReadDescription",
          defaultMessage: "Read information in your Ads accounts.",
          description: "Explains the required permission to read Ads Manager data",
        },
        "ads.admin.all.write": {
          id: "signInWithChatGPTConsent.adsWriteDescription",
          defaultMessage: "Make changes in your Ads accounts.",
          description: "Explains the required permission to modify Ads Manager data",
        },
        offline_access: {
          id: "signInWithChatGPTConsent.adsOfflineDescription",
          defaultMessage: "Keep this connection active when you\u2019re not using the app.",
          description:
            "Description beneath the offline-access permission title in SIWC consent and linked-app settings. Explains that the app can keep the connection active without requiring repeated sign-in.",
        },
      }
    function p(e) {
      return u[e]
    }
    let h = u["chatpass.enable.request"],
      g = {
        openid: {
          id: "signInWithChatGPTConsent.identityDescription",
          defaultMessage: "Confirm your identity to sign in.",
          description: "Explains the OpenID permission without implying profile or email access",
        },
        profile: {
          id: "signInWithChatGPTConsent.profileDescription",
          defaultMessage: "View your basic profile information.",
          description: "Explains the OAuth profile permission",
        },
        email: {
          id: "signInWithChatGPTConsent.emailDescription",
          defaultMessage: "View your email address.",
          description: "Explains the OAuth email permission",
        },
        "resource.invoke": {
          id: "signInWithChatGPTConsent.resourceInvokeDescription",
          defaultMessage: "Use the requested service on your behalf.",
          description: "Explains permission to invoke the requested OAuth resource",
        },
        "chatpass.enable.request": h,
        "chatgpt.tokens.use.obo": h,
        "chatpass.enable.request.direct": h,
        "chatgpt.tokens.use.direct": h,
        "ads.admin.all.read": u["ads.admin.all.read"],
        "ads.admin.all.write": u["ads.admin.all.write"],
        offline_access: u.offline_access,
      },
      m = {
        signInTitle: {
          id: "signInWithChatGPTConsent.unformattedTitle.generic",
          defaultMessage: "Sign in to {originatorDisplayName} with ChatGPT",
          description:
            "Title for the the third party app selection page. originatorDisplayName is the display name of the 3rd party app that the user is signing in to with their ChatGPT account.",
        },
        preparingSignIn: {
          id: "sitesConnectorConsent.preparingSignIn",
          defaultMessage: "Preparing sign-in\u2026",
          description: "Status before the Site's connector eligibility is known",
        },
        signInUnavailable: {
          id: "sitesConnectorConsent.signInUnavailable",
          defaultMessage: "We couldn\u2019t load the permissions for this sign-in. Refresh this page to try again.",
          description: "Sign-in cannot continue without valid protected permission disclosures",
        },
        signInFailed: {
          id: "sitesConnectorConsent.signInFailed",
          defaultMessage: "We couldn\u2019t complete sign-in. Please try again.",
          description: "An unsuccessful identity-only Site sign-in can be retried explicitly",
        },
        title: {
          id: "sitesConnectorConsent.title",
          defaultMessage: "Connect ChatGPT and {appName}",
          description: "Title of the Site connector consent page",
        },
        allow: {
          id: "sitesConnectorConsent.allowThisSiteApps",
          defaultMessage: "Allow this site to use connected apps",
          description: "Connector-level consent heading; this site is the requesting site named in the page title",
        },
        description: {
          id: "sitesConnectorConsent.siteAppsDescription",
          defaultMessage:
            "{appName} can read information or take actions on your behalf in apps you\u2019ve connected to ChatGPT.",
          description: "Explains the Site's access to selected connected apps",
        },
        readOnlyDescription: {
          id: "sitesConnectorConsent.readOnlyDescription",
          defaultMessage: "{appName} can read information in apps you\u2019ve connected to ChatGPT.",
          description: "Disclosure when the Site requests only read access to connected apps",
        },
        read: {
          id: "sitesConnectorConsent.read",
          defaultMessage: "Read data from {connectorName}",
          description: "Read-only permission granted for a selected connector",
        },
        readWrite: {
          id: "sitesConnectorConsent.readWrite",
          defaultMessage: "Read and write data in {connectorName}",
          description:
            "Permission disclosure on the Site connector consent page. Allowing this connected app lets the site read and modify data on the user's behalf. The connectorName placeholder is the connected app's name.",
        },
        readAccess: {
          id: "sitesConnectorConsent.readAccess",
          defaultMessage: "Read",
          description: "Permission menu choice allowing a site to read a connected app",
        },
        writeAccess: {
          id: "sitesConnectorConsent.writeAccess",
          defaultMessage: "Write",
          description: "Short write-access label; the menu explains whether this includes read access",
        },
        readWriteAccess: {
          id: "sitesConnectorConsent.readWriteAccess",
          defaultMessage: "Read and write",
          description: "Permission menu choice allowing a site to read and change a connected app",
        },
        offAccess: {
          id: "sitesConnectorConsent.offAccess",
          defaultMessage: "Off",
          description: "Permission menu choice withholding access to a connected app",
        },
        readAccessDescription: {
          id: "sitesConnectorConsent.siteReadAccessDescription",
          defaultMessage: "This site can view information from this app.",
          description: "Explanation below the read-only permission menu option; this site is named in the page title",
        },
        readWriteAccessDescription: {
          id: "sitesConnectorConsent.siteReadWriteAccessDescription",
          defaultMessage: "This site can view information and take actions in this app on your behalf.",
          description:
            "Explanation below the read and write permission menu option; this site is named in the page title",
        },
        writeAccessDescription: {
          id: "sitesConnectorConsent.siteWriteAccessDescription",
          defaultMessage: "This site can take actions in this app on your behalf.",
          description:
            "Explanation below an existing write-only permission option; this site is named in the page title",
        },
        offAccessDescription: {
          id: "sitesConnectorConsent.siteOffAccessDescription",
          defaultMessage: "This site can\u2019t access this app.",
          description: "Explanation below the option to disable a connected app; this site is named in the page title",
        },
        manage: {
          id: "sitesConnectorConsent.manage",
          defaultMessage: "Manage",
          description: "Expand the connected app list to review and change permissions",
        },
        installed: {
          id: "sitesConnectorConsent.installed",
          defaultMessage: "Installed",
          description: "Heading above apps already connected to ChatGPT",
        },
        recommended: {
          id: "sitesConnectorConsent.recommended",
          defaultMessage: "Recommended",
          description: "Heading above requested apps that are not connected to ChatGPT",
        },
        unavailableApps: {
          id: "sitesConnectorConsent.unavailableApps",
          defaultMessage: "Unavailable",
          description: "Heading above requested apps that cannot be used for this sign-in",
        },
        manageMoreApps: {
          id: "sitesConnectorConsent.manageMoreApps",
          defaultMessage: "Manage {count} more apps",
          description: "Accessible label for the compact app icon grid that expands the installed apps",
        },
        connectedAppsDescription: {
          id: "sitesConnectorConsent.thisSiteConnectedAppsDescription",
          defaultMessage:
            "This site will be able to use apps you\u2019ve connected to ChatGPT to work on your requests.",
          description: "Explains why the site named in the page title requests access to connected apps",
        },
        expandedDescription: {
          id: "sitesConnectorConsent.expandedDescription",
          defaultMessage:
            "{appName} can read information and take actions in apps you\u2019ve connected to ChatGPT, based on the access you choose below.",
          description: "Disclosure above the expanded per-app consent controls",
        },
        defaultAccessDescription: {
          id: "sitesConnectorConsent.siteDefaultAccessDescription",
          defaultMessage: "Default access requested by this site.",
          description: "Screen reader explanation of the requested-access badge; this site is named in the page title",
        },
        defaultAccess: {
          id: "sitesConnectorConsent.defaultAccess",
          defaultMessage: "Default",
          description: "Badge marking the access requested by the site, independent of the current selection",
        },
        manageApp: {
          id: "sitesConnectorConsent.manageApp",
          defaultMessage: "Manage {connectorName} access",
          description: "Accessible name of a connected app icon that expands the permissions list",
        },
        access: {
          id: "sitesConnectorConsent.access",
          defaultMessage: "Access for {connectorName}",
          description: "Accessible label for the connected app permission dropdown",
        },
        viewConnectorActions: {
          id: "sitesConnectorConsent.viewConnectorActions",
          defaultMessage: "View actions for {connectorName}, {accountName}",
          description: "Accessible label for the connected account text that expands its current actions",
        },
        readActions: {
          id: "sitesConnectorConsent.readActions",
          defaultMessage: "Read actions",
          description: "Heading above the current read actions for a connected app",
        },
        writeActions: {
          id: "sitesConnectorConsent.writeActions",
          defaultMessage: "Write actions",
          description: "Heading above the current write actions for a connected app",
        },
        futureActions: {
          id: "sitesConnectorConsent.futureActions",
          defaultMessage: "Your choices apply to current and future actions of each type.",
          description: "Explain that read and write consent covers each capability, including future eligible actions",
        },
        account: {
          id: "sitesConnectorConsent.account",
          defaultMessage: "Account for {connectorName}",
          description: "Label for the connector's provider account selector",
        },
        chooseAccount: {
          id: "sitesConnectorConsent.chooseAccount",
          defaultMessage: "Choose an account",
          description: "Requires an explicit provider account choice before allowing a connector",
        },
        unavailable: {
          id: "sitesConnectorConsent.unavailable",
          defaultMessage: "This connected app is not available for this sign-in.",
          description: "Explains why a connector cannot be selected",
        },
        installLink: {
          id: "sitesConnectorConsent.installInWorkspace",
          defaultMessage: "Install {connectorName} in {workspaceName}",
          description: "Tooltip and accessible label for the connector installation action",
        },
        install: {
          id: "sitesConnectorConsent.install",
          defaultMessage: "Install",
          description: "Visible action to install a connected app in ChatGPT",
        },
        selectedWorkspace: {
          id: "sitesConnectorConsent.selectedWorkspace",
          defaultMessage: "your selected workspace",
          description: "Fallback when the selected workspace has no display name",
        },
        installRequired: {
          id: "sitesConnectorConsent.installRequired",
          defaultMessage: "Install a connected app to enable access",
          description: "Explains the disabled main switch when apps need installation",
        },
        refresh: {
          id: "sitesConnectorConsent.refresh",
          defaultMessage: "Refresh connected apps",
          description: "Reload the current connector eligibility after installation",
        },
        loading: {
          id: "sitesConnectorConsent.loading",
          defaultMessage: "Loading connected apps\u2026",
          description: "Status while reading or refreshing connector eligibility",
        },
        requestId: {
          id: "sitesConnectorConsent.requestId",
          defaultMessage: "Request ID: {requestId}",
          description: "Request identifier for troubleshooting a failed Site consent request",
        },
        failed: {
          id: "sitesConnectorConsent.failed",
          defaultMessage: "We couldn't load your connected apps. Refresh this page, or continue without this feature.",
          description: "A failed catalog read does not imply that the user has no connectors",
        },
        continue: {
          id: "sitesConnectorConsent.continueLabel",
          defaultMessage: "Continue",
          description: "Complete sign-in with the reviewed connector choices",
        },
        without: {
          id: "sitesConnectorConsent.without",
          defaultMessage: "Continue without connector access",
          description: "Complete this sign-in without issuing connector credentials",
        },
        trust: {
          id: "sitesConnectorConsent.connectionManagement",
          defaultMessage: "You can manage this connection anytime in ChatGPT settings.",
          description: "Settings guidance below connector consent",
        },
        sessionOnly: {
          id: "sitesConnectorConsent.sessionOnlyAccess",
          defaultMessage:
            "This signs you in without connector access for this session. It does not change this site\u2019s saved connector access on your other devices.",
          description: "Declining connectors is session-local, not an app-wide revocation",
        },
        sharedApproval: {
          id: "sitesConnectorConsent.sharedAccess",
          defaultMessage:
            "These changes apply to this site\u2019s connector access across your browsers and devices. Changes take effect shortly. Your connected accounts stay connected to ChatGPT.",
          description:
            "Explain that editing the app's saved approval affects existing sessions without disconnecting provider accounts",
        },
        cancel: {
          id: "sitesConnectorConsent.cancel",
          defaultMessage: "Cancel",
          description: "Cancel this Site sign-in without changing connector access",
        },
      }
  },
  WXto(e, t, s) {
    var n = s("QosV"),
      i = s("qmMi"),
      a = s("zd8w"),
      o = s("UOa8"),
      r = s("YitN"),
      c = s("Kwur"),
      l = s("OAko"),
      d = s("laUo"),
      u = s("smwl"),
      p = s("jdiu"),
      h = s("eFxf"),
      g = s("OWtl"),
      m = s("hZax"),
      f = s("UR81"),
      y = s("LjYy")
    let x = "3909937021",
      v = "1014047933",
      C = (0, i.vU)(g.u, (e) => ({
        queryKey: ["usage-limits-page-configs", e],
        queryFn: ({ signal: e }) => c.Request.safeGet("/pageConfigs/usage_limits", { signal: e }),
        staleTime: 3e4,
      })),
      b = (0, i.vU)(g.u, ({ accountId: e, userId: t }) => ({
        queryKey: ["student-codex-credit-enrollment", e, t],
        queryFn: ({ signal: e }) =>
          c.Request.safePost("/students/refresh_enrollment_status", {
            requestBody: { campaign_id: "student_codex_credits" },
            signal: e,
          }),
        staleTime: 6e4,
        retry: !1,
      }))
    function _({ authMethod: e, plan: t, statsigClient: s }) {
      let n = "chatgpt" === e && w(t) && null != s && (0, h.fV)(s, t)
      return { hasPlanCreditAccess: "chatgpt" === e && ((0, d.IH)(t) || n), isFreeOrGoCreditPurchaseEnabled: n }
    }
    function j({ identityReady: e, isStatsigLoading: t, isCurrentPersonalAccount: s, hasPlanCreditAccess: n }) {
      return !1
    }
    function A({
      authMethod: e,
      hasCreditBalance: t = !1,
      hasEnabledAutoReload: s = !1,
      isPersonalAccount: n = !1,
      plan: i,
      isFreeOrGoCreditPurchaseEnabled: a = !1,
      hasStudentCreditAccess: o = !1,
      isEnterpriseUsageSettingsEnabled: r = !1,
      isConsumerUsageAnalyticsEnabled: c = !1,
      isBusinessUsageDashboardEnabled: l = !1,
      canPurchaseBusinessCredits: u = !1,
      isBusinessWorkspaceOwner: p = !1,
    }) {
      let h = "chatgpt" === e,
        g = h && w(i) && a,
        m = h && ((0, d.IH)(i) || g || (n && o)),
        y = w(i),
        x = (0, f.uz)(i),
        v = m || (h && (0, f.Hw)(i) && (u || p)) || (h && ((y && t) || (n && s)))
      return {
        canManageCreditSettings: m,
        canViewCreditSettings: v,
        isUsageSettingsVisible:
          v || (h && y) || (h && (y || (0, f.Hw)(i)) && c) || (h && (0, f.Hw)(i) && l) || (h && x && r),
      }
    }
    function w(e) {
      return e === y.x.FREE || e === y.x.GO
    }
    s.d(
      t,
      {},
      {
        AH: function (e, t) {
          let s,
            c,
            d,
            h,
            g,
            y,
            k,
            M,
            P = (0, n.c)(27),
            { accountId: I, userId: G, authMethod: S, isLoading: T } = (0, o.As)(),
            N = (0, i.Ul)(null),
            E = "chatgpt" === S,
            L = (0, m.AS)(),
            D = (0, m.Zj)(x),
            R = (0, m.DR)(x),
            q = (0, m.XR)(),
            { data: O, isLoading: U, hasEverErrored: K } = (0, l.YL)(),
            { data: F, isLoading: H } = (0, r.Us)(),
            V =
              E &&
              O?.id === I &&
              O?.structure === "workspace" &&
              "account-owner" === O.account_user_role &&
              (0, f.Hw)(O.plan_type),
            W = E && !q && (0, p.b0)({ accountId: I, currentAccount: O, statsigClient: L }),
            z = O?.plan_type ?? (!U || K ? F?.plan : void 0)
          P[0] !== E || P[1] !== z ? ((s = E && (0, f.Hw)(z)), (P[0] = E), (P[1] = z), (P[2] = s)) : (s = P[2])
          let B = s,
            Z = (0, m.Zj)(!!B && v),
            Y = (0, m.DR)(B ? v : x)
          P[3] !== z ? ((c = w(z)), (P[3] = z), (P[4] = c)) : (c = P[4])
          let Q = c
          P[5] !== z ? ((d = (0, f.uz)(z)), (P[5] = z), (P[6] = d)) : (d = P[6])
          let $ = d,
            { hasPlanCreditAccess: X, isFreeOrGoCreditPurchaseEnabled: J } = _({
              authMethod: S,
              plan: z,
              statsigClient: q ? null : L,
            }),
            ee = O?.structure === "personal" && O.id === I
          !1 !== P[7] ? ((h = { enabled: !1 }), (P[7] = !1), (P[8] = h)) : (h = P[8])
          let { data: et, isLoading: es } = (0, i._U)(C, I ?? null, h),
            en = j({
              identityReady: E && !T && null != G,
              isStatsigLoading: q,
              isCurrentPersonalAccount: ee,
              hasPlanCreditAccess: X,
            }),
            ei = en && "usage" === t,
            ea = I ?? null,
            eo = G ?? null
          P[9] !== ea || P[10] !== eo
            ? ((g = { accountId: ea, userId: eo }), (P[9] = ea), (P[10] = eo), (P[11] = g))
            : (g = P[11])
          let { data: er, isPending: ec } = (0, i._U)(b, g, { enabled: ei }),
            el = en && er?.metadata?.enrollment_step === "enrolled",
            ed = X || el,
            eu = E && ee && !ed
          P[12] !== eu ? ((y = { enabled: eu }), (P[12] = eu), (P[13] = y)) : (y = P[13])
          let { data: ep, isLoading: eh } = (0, u.q7)(y),
            [eg, em] = (0, a.useState)(null),
            ef = eu && ep?.isEnabled === !0,
            ey = "usage" === t && eu && (ef || eg === I) ? I : null
          eg !== ey && em(ey)
          let ex = ef || null != ey,
            ev = E && $ && D,
            eC = E && !q && !("isNoop" in L),
            eb = B && !q && Z,
            e_ = E && U && !K,
            ej = E && Q && q,
            eA = E && $ && (q || R)
          P[14] !== E || P[15] !== Q || P[16] !== q || P[17] !== z
            ? ((k = E && (Q || (0, f.Hw)(z)) && q), (P[14] = E), (P[15] = Q), (P[16] = q), (P[17] = z), (P[18] = k))
            : (k = P[18])
          let ew = k,
            ek = B && (q || Y),
            eM = A({
              authMethod: S,
              hasCreditBalance: void 0 !== e && e,
              hasEnabledAutoReload: ex,
              isPersonalAccount: ee,
              plan: z,
              isFreeOrGoCreditPurchaseEnabled: J,
              hasStudentCreditAccess: el,
              isEnterpriseUsageSettingsEnabled: ev,
              isConsumerUsageAnalyticsEnabled: eC,
              isBusinessUsageDashboardEnabled: eb,
              canPurchaseBusinessCredits: W,
              isBusinessWorkspaceOwner: V,
            }),
            eP = !0 === N || eM.isUsageSettingsVisible || !1,
            eI = ex ? ep : void 0,
            eG = T || (E && H) || e_ || ej || eA || ew || ek || (ei && ec) || (eu && eh && !eP)
          return (
            P[19] !== W || P[20] !== V || P[21] !== eP || P[22] !== z || P[23] !== eI || P[24] !== eG || P[25] !== eM
              ? ((M = {
                  autoReloadSettings: eI,
                  ...eM,
                  canPurchaseBusinessCredits: W,
                  isBusinessWorkspaceOwner: V,
                  isUsageSettingsVisible: eP,
                  isUsageSettingsAccessLoading: eG,
                  plan: z,
                }),
                (P[19] = W),
                (P[20] = V),
                (P[21] = eP),
                (P[22] = z),
                (P[23] = eI),
                (P[24] = eG),
                (P[25] = eM),
                (P[26] = M))
              : (M = P[26]),
            M
          )
        },
        E2: j,
        M7: w,
        MQ: _,
        fQ: b,
        jJ: A,
        t$: C,
      },
    )
  },
  toKG(e, t, s) {
    s.d(
      t,
      {},
      {
        N: function (e) {
          return new URL("/codex/desktop-session", e?.trim() || "https://chatgpt.com").toString()
        },
      },
    )
  },
  yoKM(e, t, s) {
    s.d(t, { ChatGptSecuritySettings: () => sl })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("irkb"),
      o = s("T0Rc"),
      r = s("xSOA"),
      c = s("qmMi"),
      l = s("zd8w"),
      d = s("oyxz"),
      u = s("Ywss"),
      p = s("QdUF"),
      h = s("UOa8"),
      g = s("YJm0"),
      m = s("g2p6"),
      f = s("OAko"),
      y = s("bVeK"),
      x = s("Bbed"),
      v = s("RNul"),
      C = s("jxU8"),
      b = s("pO0d"),
      _ = s("BSnr"),
      j = s("b8kl"),
      A = s("QyE3"),
      w = s("ZEx5"),
      k = s("hZax"),
      M = s("rvFo"),
      P = s("SPnB"),
      I = s("Kwur"),
      G = s("CtUD"),
      S = s("gyrn"),
      T = s("QmkR"),
      N = s("OWtl"),
      E = s("eShZ"),
      L = s("Sm6l"),
      D = s("ZtSy"),
      R = s("ReGc"),
      q = s("toKG"),
      O = s("AWNZ"),
      U = s("U4Xt"),
      K = s("LLN1")
    function F(e) {
      let t,
        s,
        a,
        o,
        r,
        c = (0, i.c)(20),
        {
          status: l,
          isError: u,
          onRetryStatus: p,
          onCreate: h,
          onChange: g,
          onReset: m,
          isRequestingReset: f,
          resetReauthError: y,
          resetActionError: x,
          nativeResetAccountCheck: v,
          onCancelNativeReset: C,
        } = e,
        b = l?.pin_reset_status === "in_progress"
      c[0] !== y
        ? ((t = y
            ? (0, n.jsx)("p", {
                role: "alert",
                className: "mt-3 text-sm text-danger",
                children: (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.accountPin.reauthFailed",
                  defaultMessage: "Couldn\u2019t verify your account to reset this PIN. Please try again.",
                }),
              })
            : null),
          (c[0] = y),
          (c[1] = t))
        : (t = c[1])
      let _ = t
      c[2] !== b || c[3] !== u || c[4] !== f || c[5] !== g || c[6] !== h || c[7] !== m || c[8] !== p || c[9] !== l
        ? ((s =
            null == l || u
              ? (0, n.jsx)(K.mK, { isError: u, onRetry: p })
              : (0, n.jsxs)(w.t, {
                  children: [
                    b &&
                      (0, n.jsx)("p", {
                        role: "status",
                        className: "p-3 text-sm",
                        children: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.accountPin.resetInProgress",
                          defaultMessage:
                            "Deleting your locked chats. You can leave this page and return to create a new PIN when deletion is complete.",
                        }),
                      }),
                    !b &&
                      !l.has_pin &&
                      (0, n.jsx)(O.ic, {
                        label: (0, n.jsx)(d.A, { ...U.L.createPinLabel }),
                        description: (0, n.jsx)(d.A, { ...U.L.createPinDescription }),
                        control: (e) =>
                          (0, n.jsx)(L.$, {
                            ...e,
                            size: "toolbar",
                            color: "secondary",
                            onClick: h,
                            children: (0, n.jsx)(d.A, { ...U.L.createPinButton }),
                          }),
                      }),
                    !b &&
                      l.has_pin &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          "failed" === l.pin_reset_status &&
                            (0, n.jsx)("p", {
                              role: "alert",
                              className: "p-3 text-sm",
                              children: (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.accountPin.resetIncomplete",
                                defaultMessage:
                                  "We couldn\u2019t delete all your locked chats. Reset your PIN again to finish deleting them.",
                              }),
                            }),
                          (0, n.jsx)(O.ic, {
                            description: (0, n.jsx)(d.A, {
                              id: "settings.security.changePin.help",
                              defaultMessage: "Choose a new PIN for your locked chats",
                            }),
                            label: (0, n.jsx)(d.A, { ...U.L.changePinLabel }),
                            control: (e) =>
                              (0, n.jsx)(L.$, {
                                ...e,
                                size: "toolbar",
                                color: "secondary",
                                onClick: g,
                                disabled: "failed" === l.pin_reset_status,
                                children: (0, n.jsx)(d.A, { ...U.L.changePinButton }),
                              }),
                          }),
                          (0, n.jsx)(O.ic, {
                            label: (0, n.jsx)(d.A, { ...U.L.resetPinLabel }),
                            description: (0, n.jsx)(d.A, { ...U.L.resetPinDescription }),
                            control: (e) =>
                              (0, n.jsx)(L.$, {
                                ...e,
                                size: "toolbar",
                                color: "danger",
                                disabled: f,
                                loading: f,
                                onClick: m,
                                children: (0, n.jsx)(d.A, { ...U.L.resetPinButton }),
                              }),
                          }),
                        ],
                      }),
                  ],
                })),
          (c[2] = b),
          (c[3] = u),
          (c[4] = f),
          (c[5] = g),
          (c[6] = h),
          (c[7] = m),
          (c[8] = p),
          (c[9] = l),
          (c[10] = s))
        : (s = c[10])
      let j = x ? null : _
      return (
        c[11] !== v || c[12] !== C
          ? ((a = v
              ? (0, n.jsxs)("div", {
                  className: "mt-4 flex flex-col items-start gap-3 text-sm text-secondary",
                  children: [
                    (0, n.jsx)("p", {
                      children: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.accountPin.nativeResetAccountCheck",
                        defaultMessage:
                          "Before resetting, check that the selected ChatGPT account in your browser is the account whose locked chats you want to delete. The browser may be signed in to a different account.",
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex gap-2",
                      children: [
                        (0, n.jsx)(H, {}),
                        (0, n.jsx)(L.$, {
                          size: "toolbar",
                          color: "ghost",
                          onClick: C,
                          children: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.accountPin.cancelBrowserReset",
                            defaultMessage: "Cancel",
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : null),
            (c[11] = v),
            (c[12] = C),
            (c[13] = a))
          : (a = c[13]),
        c[14] !== a ? ((o = (0, n.jsx)(n.Fragment, { children: a })), (c[14] = a), (c[15] = o)) : (o = c[15]),
        c[16] !== s || c[17] !== j || c[18] !== o
          ? ((r = (0, n.jsxs)(n.Fragment, { children: [s, j, o, null] })),
            (c[16] = s),
            (c[17] = j),
            (c[18] = o),
            (c[19] = r))
          : (r = c[19]),
        r
      )
    }
    function H() {
      let e,
        t,
        s,
        a = (0, i.c)(5),
        { data: o } = (0, c.Ul)(R.a)
      return null == o
        ? null
        : (a[0] !== o.chatGptDesktopAuthOrigin
            ? ((e = new URL("/settings/security?view=account-pin", (0, q.N)(o.chatGptDesktopAuthOrigin)).toString()),
              (a[0] = o.chatGptDesktopAuthOrigin),
              (a[1] = e))
            : (e = a[1]),
          a[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.accountPin.openBrowser",
                defaultMessage: "Open Account PIN in browser",
              })),
              (a[2] = t))
            : (t = a[2]),
          a[3] !== e
            ? ((s = (0, n.jsx)(D.G, { initiator: "open_in_browser_bridge", href: e, children: t })),
              (a[3] = e),
              (a[4] = s))
            : (s = a[4]),
          s)
    }
    var V = s("wcTT"),
      W = s("i7nV"),
      z = s("KG2G")
    let B = /^[0-9]{4}$/,
      Z = new WeakMap()
    function Y(e) {
      return "invalid_pin" === e.errorCode || "pin_locked" === e.errorCode
    }
    function Q(e) {
      let t,
        r,
        p,
        g,
        m,
        f,
        y,
        x,
        v,
        C,
        b,
        _,
        j,
        A,
        w,
        k,
        L,
        D,
        R,
        q,
        O,
        H,
        Q,
        X,
        J,
        ee,
        et,
        es,
        en,
        ei,
        ea,
        eo,
        er,
        ec,
        el,
        ed = (0, i.c)(152),
        { accountId: eu, onBack: ep } = e,
        eh = (0, c.gh)(N.u),
        eg = (0, h.As)().userId,
        [em, ef] = (0, u.ok)(),
        ey = em.get(z.Aj),
        ex = (0, a.jE)()
      ed[0] !== eu ? ((t = (0, W.v)(eu)), (ed[0] = eu), (ed[1] = t)) : (t = ed[1])
      let ev = t,
        eC = ev.queryKey
      ed[2] !== ev
        ? ((r = {
            ...ev,
            staleTime: M.D.ONE_MINUTE,
            refetchOnWindowFocus: "always",
            refetchOnMount: "always",
            refetchInterval: $,
            retry: !1,
          }),
          (ed[2] = ev),
          (ed[3] = r))
        : (r = ed[3])
      let { data: eb, isError: e_, refetch: ej } = (0, o.I)(r)
      ed[4] !== eu || ed[5] !== ex
        ? ((p = function () {
            return Z.get(ex)?.get(eu) ?? 0
          }),
          (ed[4] = eu),
          (ed[5] = ex),
          (ed[6] = p))
        : (p = ed[6])
      let eA = p
      ed[7] !== eu || ed[8] !== ex || ed[9] !== eh
        ? ((g = function () {
            eh.get(P.chatGptAuthenticatedAccountId$) === eu && (0, S.L7)(eh)
            let e = Z.get(ex) ?? new Map()
            ;(e.set(eu, (e.get(eu) ?? 0) + 1), Z.set(ex, e))
          }),
          (ed[7] = eu),
          (ed[8] = ex),
          (ed[9] = eh),
          (ed[10] = g))
        : (g = ed[10])
      let ew = g,
        [ek, eM] = (0, l.useState)(null),
        [eP, eI] = (0, l.useState)(null),
        [eG, eS] = (0, l.useState)(""),
        [eT, eN] = (0, l.useState)(""),
        [eE, eL] = (0, l.useState)(""),
        [eD, eR] = (0, l.useState)(null),
        [eq, eO] = (0, l.useState)(null),
        [eU, eK] = (0, l.useState)(!1),
        [eF, eH] = (0, l.useState)(!1),
        [eV, eW] = (0, l.useState)(!1),
        ez = (0, l.useRef)(null),
        eB = eu + ":" + (eg ?? ""),
        eZ = (0, l.useRef)(eB),
        eY = (0, l.useRef)(0),
        eQ = (0, l.useRef)(null)
      ;(ed[11] !== eB
        ? ((m = () => (
            (eZ.current = eB),
            () => {
              ;((eZ.current = null), (eY.current = eY.current + 1), (eQ.current = null))
            }
          )),
          (f = [eB]),
          (ed[11] = eB),
          (ed[12] = m),
          (ed[13] = f))
        : ((m = ed[12]), (f = ed[13])),
        (0, l.useEffect)(m, f),
        ed[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = function (e) {
              return eZ.current === e.identity && eY.current === e.generation
            }),
            (ed[14] = y))
          : (y = ed[14]))
      let e$ = y
      ed[15] !== eB
        ? ((x = function (e) {
            if (null != eQ.current && e$(eQ.current)) return null
            let t = { kind: e, identity: eB, generation: eY.current }
            return ((eQ.current = t), eI(t), t)
          }),
          (ed[15] = eB),
          (ed[16] = x))
        : (x = ed[16])
      let eX = x
      ed[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (e) {
            eQ.current === e && ((eQ.current = null), e$(e) && eI(null))
          }),
          (ed[17] = v))
        : (v = ed[17])
      let eJ = v
      ed[18] !== ey || ed[19] !== ef
        ? ((C = function () {
            ;((eY.current = eY.current + 1),
              (eQ.current = null),
              null != ez.current && (ez.current.promise = null),
              eM(null),
              eI(null),
              eS(""),
              eN(""),
              eL(""),
              eO(null),
              eK(!1),
              eH(!1),
              eR(null),
              eW(!1),
              null != ey && ef((e) => (0, z.bZ)(e, ey), { replace: !0 }))
          }),
          (ed[18] = ey),
          (ed[19] = ef),
          (ed[20] = C))
        : (C = ed[20])
      let e1 = C
      ed[21] !== e1
        ? ((b = () => {
            new URLSearchParams(window.location.search).has(z.Aj) || e1()
          }),
          (ed[21] = e1),
          (ed[22] = b))
        : (b = ed[22])
      let e0 = (0, l.useEffectEvent)(b)
      ;(ed[23] !== ey || ed[24] !== e0 ? ((_ = () => {}), (ed[23] = ey), (ed[24] = e0), (ed[25] = _)) : (_ = ed[25]),
        ed[26] !== ey || ed[27] !== eB ? ((j = [ey, eB]), (ed[26] = ey), (ed[27] = eB), (ed[28] = j)) : (j = ed[28]),
        (0, l.useEffect)(_, j),
        ed[29] !== ej || ed[30] !== eh
          ? ((A = function (e) {
              eS("")
              let t = e instanceof E.FetchError ? e.errorCode : null
              "invalid_pin" === t || "pin_locked" === t
                ? ((0, G.J)(eh, "invalid_pin" === t ? "WRONG_PIN" : "LOCKOUT"),
                  eR("invalid_pin" === t ? "incorrect" : "locked"),
                  ej())
                : ((0, G.J)(eh, "FAILURE"), eR("failed"))
            }),
            (ed[29] = ej),
            (ed[30] = eh),
            (ed[31] = A))
          : (A = ed[31]))
      let e2 = A
      ed[32] !== ex || ed[33] !== eC
        ? ((w = function (e, t) {
            ;(ex.setQueryData(eC, (s) => (t?.has_pin === e ? t : null == s ? { has_pin: e } : { ...s, has_pin: e })),
              ex.invalidateQueries({ queryKey: eC }))
          }),
          (ed[32] = ex),
          (ed[33] = eC),
          (ed[34] = w))
        : (w = ed[34])
      let e3 = w
      ed[35] !== eu ||
      ed[36] !== e1 ||
      ed[37] !== ex ||
      ed[38] !== ew ||
      ed[39] !== e3 ||
      ed[40] !== eh ||
      ed[41] !== eX ||
      ed[42] !== eC ||
      ed[43] !== ek
        ? ((k = async function (e, t) {
            let s = eX("create")
            if (null != s) {
              try {
                let n = await I.Request.safePost("/locked_chats/unlock", {
                  additionalHeaders: { "ChatGPT-Account-ID": eu },
                  requestBody: { pin: e, pin_confirmation: t },
                })
                ;("create-confirm" === ek && (0, G.J)(eh, "SETUP_SUCCEEDED"),
                  ew(),
                  e$(s) ? (e1(), e3(!0, n)) : ex.invalidateQueries({ queryKey: eC }))
              } catch {
                e$(s) && ((0, G.J)(eh, "FAILURE"), eL(""), eR("failed"))
              }
              eJ(s)
            }
          }),
          (ed[35] = eu),
          (ed[36] = e1),
          (ed[37] = ex),
          (ed[38] = ew),
          (ed[39] = e3),
          (ed[40] = eh),
          (ed[41] = eX),
          (ed[42] = eC),
          (ed[43] = ek),
          (ed[44] = k))
        : (k = ed[44])
      let e4 = k
      ed[45] !== eu || ed[46] !== e2 || ed[47] !== eX
        ? ((L = async function (e) {
            let t = eX("verify")
            if (null != t) {
              try {
                ;(await I.Request.safePost("/locked_chats/unlock", {
                  additionalHeaders: { "ChatGPT-Account-ID": eu },
                  requestBody: { pin: e },
                  isExpectedError: Y,
                }),
                  e$(t) && (eR(null), eM("change-new")))
              } catch (e) {
                e$(t) && e2(e)
              }
              eJ(t)
            }
          }),
          (ed[45] = eu),
          (ed[46] = e2),
          (ed[47] = eX),
          (ed[48] = L))
        : (L = ed[48])
      let e5 = L
      ed[49] !== eu ||
      ed[50] !== e1 ||
      ed[51] !== e2 ||
      ed[52] !== ex ||
      ed[53] !== ew ||
      ed[54] !== e3 ||
      ed[55] !== eh ||
      ed[56] !== eX ||
      ed[57] !== eC
        ? ((D = async function (e, t) {
            let s = eX("change")
            if (null != s) {
              try {
                let n = await I.Request.safePost("/locked_chats/pin/change", {
                  additionalHeaders: { "ChatGPT-Account-ID": eu },
                  requestBody: { current_pin: e, new_pin: t },
                  isExpectedError: Y,
                })
                ;((0, G.J)(eh, "CHANGE_PIN_SUCCEEDED"),
                  ew(),
                  e$(s) ? (e1(), e3(!0, n)) : ex.invalidateQueries({ queryKey: eC }))
              } catch (e) {
                e$(s) && (eN(""), eL(""), eM("change-current"), e2(e))
              }
              eJ(s)
            }
          }),
          (ed[49] = eu),
          (ed[50] = e1),
          (ed[51] = e2),
          (ed[52] = ex),
          (ed[53] = ew),
          (ed[54] = e3),
          (ed[55] = eh),
          (ed[56] = eX),
          (ed[57] = eC),
          (ed[58] = D))
        : (D = ed[58])
      let e6 = D
      ed[59] !== eu || ed[60] !== eX || ed[61] !== eg
        ? ((R = async function () {
            if (null == eg) return void eK(!0)
            let e = eX("challenge")
            if (null != e) {
              try {
                let { reauth_challenge: t } = await I.Request.safePost("/locked_chats/pin/reset/challenge", {
                  additionalHeaders: { "ChatGPT-Account-ID": eu },
                })
                if (e$(e)) {
                  let { beginAccountPinResetReauth: n } = await (async function () {
                    return s.e(616432).then(s.bind(s, "HarU"))
                  })()
                  e$(e) &&
                    !(await n({ accountId: eu, userId: eg, challenge: t, isCurrent: () => e$(e) })) &&
                    e$(e) &&
                    eK(!0)
                }
              } catch {
                e$(e) && eK(!0)
              }
              eJ(e)
            }
          }),
          (ed[59] = eu),
          (ed[60] = eX),
          (ed[61] = eg),
          (ed[62] = R))
        : (R = ed[62])
      let e9 = R
      ed[63] !== eu ||
      ed[64] !== e1 ||
      ed[65] !== eA ||
      ed[66] !== ex ||
      ed[67] !== ew ||
      ed[68] !== e3 ||
      ed[69] !== eh ||
      ed[70] !== eX ||
      ed[71] !== eC
        ? ((q = async function (e) {
            let t = eX("reset")
            if (null == t) return
            let s = eA()
            try {
              let n,
                i = await I.Request.safePost("/locked_chats/pin/reset", {
                  additionalHeaders: {
                    "ChatGPT-Account-ID": eu,
                    "x-openai-locked-chats-pin-reset-challenge": e,
                    Prefer: "respond-async",
                  },
                }).catch(async (e) => {
                  if (
                    e instanceof E.FetchError &&
                    e.status >= 400 &&
                    e.status < 500 &&
                    "pin_reset_in_progress" !== e.errorCode
                  )
                    throw e
                  let t = await I.Request.safeGet("/locked_chats/status", {
                    additionalHeaders: { "ChatGPT-Account-ID": eu },
                  })
                  if (!t.has_pin || "in_progress" === t.pin_reset_status) return t
                  throw e
                })
              ;((0, G.J)(eh, "RESET_SUCCEEDED"), null != i.project_id && (0, T.tA)(eh, eu, i.project_id))
              let a = eA() === s
              if (!a) {
                let e = eA()
                try {
                  let t = await I.Request.safeGet("/locked_chats/status", {
                    additionalHeaders: { "ChatGPT-Account-ID": eu },
                  })
                  eA() === e && (n = t)
                } catch {}
              }
              let o = n ?? i,
                r = a || n?.has_pin === !1 || n?.pin_reset_status === "in_progress"
              ;(r
                ? (ew(), e3(o.has_pin, o))
                : (null != n && ex.setQueryData(eC, n), ex.invalidateQueries({ queryKey: eC })),
                e$(t) && (e1(), r && !o.has_pin && eM("reset-new")))
            } catch {
              e$(t) && ((0, G.J)(eh, "FAILURE"), eO(null), eH(!0))
            }
            eJ(t)
          }),
          (ed[63] = eu),
          (ed[64] = e1),
          (ed[65] = eA),
          (ed[66] = ex),
          (ed[67] = ew),
          (ed[68] = e3),
          (ed[69] = eh),
          (ed[70] = eX),
          (ed[71] = eC),
          (ed[72] = q))
        : (q = ed[72])
      let e7 = q
      ;(ed[73] !== eu || ed[74] !== ey || ed[75] !== eB || ed[76] !== ef || ed[77] !== eg
        ? ((O = () => {}),
          (H = [eu, ey, eB, ef, eg]),
          (ed[73] = eu),
          (ed[74] = ey),
          (ed[75] = eB),
          (ed[76] = ef),
          (ed[77] = eg),
          (ed[78] = O),
          (ed[79] = H))
        : ((O = ed[78]), (H = ed[79])),
        (0, l.useEffect)(O, H))
      let e8 = eP?.identity === eB ? eP.kind : null,
        te = null != e8 && "challenge" !== e8,
        tt = eb?.pin_lockout_retry_after_seconds ?? 0,
        ts = tt > 0 || "locked" === eD,
        tn = "change-current" === ek,
        ti = "create" === ek || "change-new" === ek || "reset-new" === ek,
        ta = "create-confirm" === ek || "change-confirm" === ek || "reset-confirm" === ek
      ;(ed[80] !== eE || ed[81] !== ta || ed[82] !== eG || ed[83] !== tn || ed[84] !== eT
        ? ((Q = eT),
          tn ? (Q = eG) : ta && (Q = eE),
          (ed[80] = eE),
          (ed[81] = ta),
          (ed[82] = eG),
          (ed[83] = tn),
          (ed[84] = eT),
          (ed[85] = Q))
        : (Q = ed[85]),
        ed[86] !== e6 ||
        ed[87] !== ta ||
        ed[88] !== e4 ||
        ed[89] !== eG ||
        ed[90] !== tn ||
        ed[91] !== ti ||
        ed[92] !== Q ||
        ed[93] !== te ||
        ed[94] !== ts ||
        ed[95] !== eT ||
        ed[96] !== ek ||
        ed[97] !== e5
          ? ((X = function (e) {
              let t = void 0 === e ? Q : e
              if (!te && (!ts || !tn)) {
                if (!B.test(t)) return void eR("invalid")
                ;(eR(null),
                  tn
                    ? e5(t)
                    : ti
                      ? (eN(t),
                        eL(""),
                        "create" === ek
                          ? eM("create-confirm")
                          : "change-new" === ek
                            ? eM("change-confirm")
                            : eM("reset-confirm"))
                      : ta && (t !== eT ? (eL(""), eR("mismatch")) : "change-confirm" === ek ? e6(eG, eT) : e4(eT, t)))
              }
            }),
            (ed[86] = e6),
            (ed[87] = ta),
            (ed[88] = e4),
            (ed[89] = eG),
            (ed[90] = tn),
            (ed[91] = ti),
            (ed[92] = Q),
            (ed[93] = te),
            (ed[94] = ts),
            (ed[95] = eT),
            (ed[96] = ek),
            (ed[97] = e5),
            (ed[98] = X))
          : (X = ed[98]))
      let to = X
      ;(ed[99] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = (0, n.jsx)(d.A, { ...U.L.title })),
          (ee = (0, n.jsx)(d.A, {
            id: "settingsModal.accountPin.description",
            defaultMessage: "Use your account PIN to protect your locked chats across devices.",
          })),
          (ed[99] = J),
          (ed[100] = ee))
        : ((J = ed[99]), (ee = ed[100])),
        ed[101] !== e1 || ed[102] !== ep
          ? ((et = () => {
              ;(e1(), ep())
            }),
            (ed[101] = e1),
            (ed[102] = ep),
            (ed[103] = et))
          : (et = ed[103]),
        ed[104] !== ej ? ((es = () => void ej()), (ed[104] = ej), (ed[105] = es)) : (es = ed[105]),
        ed[106] !== e1 || ed[107] !== eh
          ? ((en = () => {
              ;((0, G.J)(eh, "FEATURE_ENTRY"), (0, G.J)(eh, "SETUP_STARTED"), e1(), eM("create"))
            }),
            (ei = () => {
              ;((0, G.J)(eh, "FEATURE_ENTRY"), (0, G.J)(eh, "CHANGE_PIN_STARTED"), e1(), eM("change-current"))
            }),
            (ed[106] = e1),
            (ed[107] = eh),
            (ed[108] = en),
            (ed[109] = ei))
          : ((en = ed[108]), (ei = ed[109])),
        ed[110] !== e1 || ed[111] !== e9 || ed[112] !== eh
          ? ((ea = () => {
              ;((0, G.J)(eh, "FEATURE_ENTRY"), (0, G.J)(eh, "RESET_STARTED"), e1(), eW(!0))
            }),
            (ed[110] = e1),
            (ed[111] = e9),
            (ed[112] = eh),
            (ed[113] = ea))
          : (ea = ed[113]))
      let tr = "challenge" === e8,
        tc = "reset-warning" === ek && (null != eq || eF)
      ed[114] !== e8 || ed[115] !== e9 || ed[116] !== eF || ed[117] !== eq || ed[118] !== e7
        ? ((eo = () => {
            "reset" !== e8 && "challenge" !== e8 && (null != eq ? e7(eq) : eF && (eK(!1), e9()))
          }),
          (ed[114] = e8),
          (ed[115] = e9),
          (ed[116] = eF),
          (ed[117] = eq),
          (ed[118] = e7),
          (ed[119] = eo))
        : (eo = ed[119])
      let tl = "reset" === e8 || "challenge" === e8
      return (
        ed[120] !== e1 ||
        ed[121] !== e_ ||
        ed[122] !== eV ||
        ed[123] !== eF ||
        ed[124] !== eU ||
        ed[125] !== eb ||
        ed[126] !== es ||
        ed[127] !== en ||
        ed[128] !== ei ||
        ed[129] !== ea ||
        ed[130] !== tr ||
        ed[131] !== tc ||
        ed[132] !== eo ||
        ed[133] !== tl
          ? ((er = (0, n.jsx)(F, {
              status: eb,
              isError: e_,
              onRetryStatus: es,
              onCreate: en,
              onChange: ei,
              onReset: ea,
              isRequestingReset: tr,
              resetReauthError: eU,
              resetActionError: eF,
              nativeResetAccountCheck: eV,
              onCancelNativeReset: e1,
              showResetWarning: tc,
              onConfirmReset: eo,
              onCancelReset: e1,
              isResetPending: tl,
            })),
            (ed[120] = e1),
            (ed[121] = e_),
            (ed[122] = eV),
            (ed[123] = eF),
            (ed[124] = eU),
            (ed[125] = eb),
            (ed[126] = es),
            (ed[127] = en),
            (ed[128] = ei),
            (ed[129] = ea),
            (ed[130] = tr),
            (ed[131] = tc),
            (ed[132] = eo),
            (ed[133] = tl),
            (ed[134] = er))
          : (er = ed[134]),
        ed[135] !== e1 ||
        ed[136] !== eE ||
        ed[137] !== eG ||
        ed[138] !== eD ||
        ed[139] !== te ||
        ed[140] !== tt ||
        ed[141] !== eT ||
        ed[142] !== ej ||
        ed[143] !== eh ||
        ed[144] !== eB ||
        ed[145] !== ek ||
        ed[146] !== to
          ? ((ec =
              null != ek
                ? (0, n.jsx)(V.d, {
                    step: ek,
                    currentPin: eG,
                    nextPin: eT,
                    confirmation: eE,
                    error: eD,
                    lockedFor: tt,
                    isPending: te,
                    onCurrentPinChange: eS,
                    onNextPinChange: eN,
                    onConfirmationChange: eL,
                    onClearError: () => eR(null),
                    onLockoutExpired: () => {
                      let e = { identity: eB, generation: eY.current }
                      ej().then((t) => {
                        let { data: s, isError: n } = t
                        e$(e) && (n ? eR("failed") : (s?.pin_lockout_retry_after_seconds ?? 0) <= 0 && eR(null))
                      })
                    },
                    onSubmit: to,
                    onClose: () => {
                      ;((0, G.J)(eh, "CANCELLED"), e1())
                    },
                  })
                : null),
            (ed[135] = e1),
            (ed[136] = eE),
            (ed[137] = eG),
            (ed[138] = eD),
            (ed[139] = te),
            (ed[140] = tt),
            (ed[141] = eT),
            (ed[142] = ej),
            (ed[143] = eh),
            (ed[144] = eB),
            (ed[145] = ek),
            (ed[146] = to),
            (ed[147] = ec))
          : (ec = ed[147]),
        ed[148] !== et || ed[149] !== er || ed[150] !== ec
          ? ((el = (0, n.jsxs)(K.kU, { title: J, subtitle: ee, onBack: et, children: [er, ec] })),
            (ed[148] = et),
            (ed[149] = er),
            (ed[150] = ec),
            (ed[151] = el))
          : (el = ed[151]),
        el
      )
    }
    function $(e) {
      return e.state.data?.pin_reset_status === "in_progress" && 5e3
    }
    var X = s("I3rA"),
      J = s("TjgH"),
      ee = s("aQvR"),
      et = s("HOLv"),
      es = s("VWTw"),
      en = s("FBm3"),
      ei = s("cE8H"),
      ea = s("SGsN"),
      eo = s("F0xz"),
      er = s("vw1R"),
      ec = s("Qgfj")
    let el = (0, ec.YK)({
        updateFailed: {
          id: "settingsModal.lockdownModeUpdateFailed",
          defaultMessage: "We couldn't update lockdown mode. Try again.",
        },
        enabled: { id: "settingsModal.lockdownModeEnabledToast", defaultMessage: "Lockdown mode turned on" },
        disabled: { id: "settingsModal.lockdownModeDisabledToast", defaultMessage: "Lockdown mode turned off" },
      }),
      ed = (0, x._)(async () => (await s.e(376586).then(s.bind(s, "SdCT"))).LockdownConfirmation),
      eu = (0, c.un)(
        N.u,
        ({ get: e }) => {
          let t = e(P.m0),
            s = e(m.Sk),
            n = e(P.chatGptAuthenticatedUserId$)
          return "allowed" === t.status &&
            "plan" in t &&
            !(0, er.o)(e(P.PO).plan) &&
            s === t.accountId &&
            s === e(P.chatGptAuthenticatedAccountId$) &&
            null != n
            ? { accountId: s, userId: n }
            : null
        },
        { isEqual: (e, t) => e?.accountId === t?.accountId && e?.userId === t?.userId },
      ),
      ep = (0, c.un)(
        N.u,
        ({ get: e }) => {
          let { data: t, isLoading: s } = e(m.s6)
          return { isLoading: s, lockdownModeEnabled: t?.lockdownModeEnabled === !0 }
        },
        { isEqual: (e, t) => e.isLoading === t.isLoading && e.lockdownModeEnabled === t.lockdownModeEnabled },
      )
    function eh(e) {
      let t,
        s = (0, i.c)(3),
        { accountId: a } = e,
        o = (0, c.Ul)(eu)
      return (
        s[0] !== o || s[1] !== a
          ? ((t = o?.accountId === a ? (0, n.jsx)(eg, { account: o }, JSON.stringify(o)) : null),
            (s[0] = o),
            (s[1] = a),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function eg(e) {
      let t,
        s,
        a,
        o,
        u,
        p,
        h,
        g,
        f,
        y,
        x,
        v,
        C,
        b,
        _ = (0, i.c)(42),
        { account: j } = e,
        A = (0, c.gh)(N.u),
        { isLoading: w, lockdownModeEnabled: k } = (0, c.Ul)(ep),
        [M, P] = (0, l.useState)(!1),
        G = (0, l.useRef)(null)
      if (
        (_[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => () => {
              G.current?.abort()
            }),
            (s = []),
            (_[0] = t),
            (_[1] = s))
          : ((t = _[0]), (s = _[1])),
        (0, l.useEffect)(t, s),
        _[2] !== j.accountId)
      ) {
        var S
        ;((a = {
          mutationKey: ["chatgpt-security-mode", (S = j.accountId)],
          scope: { id: `chatgpt-security-mode:${S}` },
        }),
          (_[2] = j.accountId),
          (_[3] = a))
      } else a = _[3]
      let T = a
      _[4] !== T.mutationKey
        ? ((o = { exact: !0, mutationKey: T.mutationKey }), (_[4] = T.mutationKey), (_[5] = o))
        : (o = _[5])
      let E = (0, ei.l)(o) > 0
      _[6] !== j.accountId ? ((u = (0, en.dI)(j.accountId)), (_[6] = j.accountId), (_[7] = u)) : (u = _[7])
      let L = u.protection.queryKey
      _[8] !== j.accountId || _[9] !== j.userId || _[10] !== L || _[11] !== A
        ? ((p = () => {
            let e = A.get(eu),
              t = A.queryClient.getQueryState(L)
            return (
              e?.userId === j.userId &&
              e.accountId === j.accountId &&
              t?.status === "success" &&
              t.data?.aas_eligible === !0
            )
          }),
          (_[8] = j.accountId),
          (_[9] = j.userId),
          (_[10] = L),
          (_[11] = A),
          (_[12] = p))
        : (p = _[12])
      let D = p
      ;(_[13] !== j.accountId || _[14] !== j.userId || _[15] !== D || _[16] !== A
        ? ((h = async (e) => {
            let { controller: t, enabled: s } = e
            if (t.signal.aborted) return
            let i = A.query.snapshot(m.s6)
            if ((await i.cancel(), t.signal.aborted)) return
            let a = i.getData()?.lockdownModeEnabled
            if (!D()) return
            s && i.setData(ev)
            let o = () => {
              ;(s &&
                i.setData((e) => (null != a && e?.lockdownModeEnabled === !0 ? { ...e, lockdownModeEnabled: a } : e)),
                i.invalidate({ refetchType: "none" }))
            }
            t.signal.addEventListener("abort", o, { once: !0 })
            let r = await I.Request.safePatch("/settings/account_user_setting", {
              additionalHeaders: { "ChatGPT-Account-ID": j.accountId },
              parameters: { query: { feature: "lockdown_mode_enabled", value: s } },
              signal: t.signal,
            }).then(ex, ey)
            if ((t.signal.removeEventListener("abort", o), r || o(), t.signal.aborted)) {
              let e = A.get(eu)
              e?.accountId === j.accountId && e.userId === j.userId && (await i.invalidate({ refetchType: "all" }))
              return
            }
            if (!r) {
              if ((await i.invalidate({ refetchType: "all" }), t.signal.aborted)) return
              A.get(ea.Id).danger((0, n.jsx)(d.A, { ...el.updateFailed }), {
                errorAnalytics: { toastId: "settings.mutationFn.updateFailed" },
              })
              return
            }
            ;(s || i.setData(ef),
              await i.invalidate(),
              t.signal.aborted ||
                A.get(ea.Id).success(s ? (0, n.jsx)(d.A, { ...el.enabled }) : (0, n.jsx)(d.A, { ...el.disabled })))
          }),
          (_[13] = j.accountId),
          (_[14] = j.userId),
          (_[15] = D),
          (_[16] = A),
          (_[17] = h))
        : (h = _[17]),
        _[18] !== T || _[19] !== h
          ? ((g = { ...T, mutationFn: h }), (_[18] = T), (_[19] = h), (_[20] = g))
          : (g = _[20]))
      let R = (0, r.n)(g)
      _[21] !== j.accountId ||
      _[22] !== j.userId ||
      _[23] !== D ||
      _[24] !== T.mutationKey ||
      _[25] !== A ||
      _[26] !== R
        ? ((f = (e) => {
            if (null != G.current || A.queryClient.isMutating({ exact: !0, mutationKey: T.mutationKey }) > 0 || !D())
              return
            let t = new AbortController()
            G.current = t
            let s = A.watch((e) => {
              let s = e.get(eu)
              ;(s?.accountId !== j.accountId || s.userId !== j.userId) && t.abort()
            })
            P(!1)
            let n = () => {
              ;(s(), (G.current = null))
            }
            R.mutateAsync({ controller: t, enabled: e }).then(n, n)
          }),
          (_[21] = j.accountId),
          (_[22] = j.userId),
          (_[23] = D),
          (_[24] = T.mutationKey),
          (_[25] = A),
          (_[26] = R),
          (_[27] = f))
        : (f = _[27])
      let q = f
      return (
        _[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, n.jsx)(d.A, { id: "settingsModal.lockdownMode", defaultMessage: "Lockdown mode" })), (_[28] = y))
          : (y = _[28]),
        _[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, n.jsx)(d.A, {
              id: "settingsModal.lockdownModeDescription",
              defaultMessage:
                "Helps protect sensitive data from prompt-injection attacks by limiting features that can connect to the web or external services. <link>Learn more</link>",
              values: { link: em },
            })),
            (_[29] = x))
          : (x = _[29]),
        _[30] !== w || _[31] !== k || _[32] !== q || _[33] !== E
          ? ((v = (0, n.jsx)(O.ic, {
              id: "lockdown-mode",
              label: y,
              description: x,
              control: (e) =>
                (0, n.jsx)(eo.l, {
                  ...e,
                  checked: k,
                  disabled: w || E,
                  onChange: (e) => {
                    e ? P(!0) : q(!1)
                  },
                }),
            })),
            (_[30] = w),
            (_[31] = k),
            (_[32] = q),
            (_[33] = E),
            (_[34] = v))
          : (v = _[34]),
        _[35] !== M || _[36] !== q || _[37] !== E
          ? ((C = M ? (0, n.jsx)(ed, { isPending: E, onConfirm: () => q(!0), onClose: () => P(!1) }) : null),
            (_[35] = M),
            (_[36] = q),
            (_[37] = E),
            (_[38] = C))
          : (C = _[38]),
        _[39] !== v || _[40] !== C
          ? ((b = (0, n.jsxs)(n.Fragment, { children: [v, C] })), (_[39] = v), (_[40] = C), (_[41] = b))
          : (b = _[41]),
        b
      )
    }
    function em(e) {
      return (0, n.jsx)(D.G, {
        appearance: "secondary",
        initiator: "open_in_browser_bridge",
        href: "https://help.openai.com/en/articles/20001061-lockdown-mode",
        children: e,
      })
    }
    function ef(e) {
      return null == e ? e : { ...e, lockdownModeEnabled: !1 }
    }
    function ey() {
      return !1
    }
    function ex() {
      return !0
    }
    function ev(e) {
      return null == e ? e : { ...e, lockdownModeEnabled: !0 }
    }
    var eC = s("h4GZ")
    function eb(e) {
      let t,
        s,
        a,
        o,
        r,
        c = (0, i.c)(12),
        { onClose: l, onRetry: u } = e
      c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, n.jsx)(d.A, { id: "settings.chatGpt.security.closeError", defaultMessage: "Close" })), (c[0] = t))
        : (t = c[0])
      let p = t
      ;(c[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, n.jsx)(d.A, {
            id: "settings.chatGpt.security.reauthError",
            defaultMessage: "Couldn\u2019t verify your identity",
          })),
          (c[1] = s))
        : (s = c[1]),
        c[2] !== u
          ? ((a =
              null == u
                ? p
                : (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.reauthError.tryAgain",
                    defaultMessage: "Try again",
                  })),
            (c[2] = u),
            (c[3] = a))
          : (a = c[3]))
      let h = null == u,
        g = u ?? l
      return (
        c[4] !== u
          ? ((o =
              null == u
                ? (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.reauthError.description",
                    defaultMessage: "Close this message and try again",
                  })
                : (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.reauthError.retryDescription",
                    defaultMessage: "Try again to continue verification",
                  })),
            (c[4] = u),
            (c[5] = o))
          : (o = c[5]),
        c[6] !== l || c[7] !== a || c[8] !== h || c[9] !== g || c[10] !== o
          ? ((r = (0, n.jsx)(K.i$, {
              title: s,
              confirmLabel: a,
              cancelLabel: p,
              confirmColor: "primary",
              informational: h,
              isPending: !1,
              onConfirm: g,
              onClose: l,
              children: o,
            })),
            (c[6] = l),
            (c[7] = a),
            (c[8] = h),
            (c[9] = g),
            (c[10] = o),
            (c[11] = r))
          : (r = c[11]),
        r
      )
    }
    function e_(e) {
      let t,
        s,
        a,
        r,
        c,
        l = (0, i.c)(8),
        { accountId: u, onManage: p } = e
      l[0] !== u ? ((t = (0, en.dI)(u)), (l[0] = u), (l[1] = t)) : (t = l[1])
      let { data: h, isSuccess: g } = (0, o.I)(t.protection)
      return g && h.advanced_protection_mode_enabled
        ? (l[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.advancedProtection.banner.enabled",
                defaultMessage: "Advanced account security enabled",
              })),
              (l[2] = s))
            : (s = l[2]),
          l[3] !== p
            ? ((a = (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.advancedProtection.banner.description",
                defaultMessage:
                  "Helps keep your account safe by requiring stronger sign-in methods. <manage>Manage</manage>",
                values: {
                  manage: (e) =>
                    (0, n.jsx)("button", {
                      className: "cursor-interaction border-0 bg-transparent p-0 text-link-primary hover:underline",
                      type: "button",
                      onClick: p,
                      children: e,
                    }),
                },
              })),
              (l[3] = p),
              (l[4] = a))
            : (a = l[4]),
          l[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)(et.I, { className: "shrink-0 text-info", asset: X.p })), (l[5] = r))
            : (r = l[5]),
          l[6] !== a
            ? ((c = (0, n.jsx)(w.t, {
                className: "select-none",
                variant: "recommendation",
                children: (0, n.jsx)(O.ic, {
                  variant: "recommendation",
                  label: s,
                  description: a,
                  control: r,
                  controlSizing: "content",
                }),
              })),
              (l[6] = a),
              (l[7] = c))
            : (c = l[7]),
          c)
        : null
    }
    function ej(e) {
      let t,
        s,
        a,
        r,
        c,
        l,
        u,
        p,
        h,
        g = (0, i.c)(26),
        { accountId: m, onOpenAdvancedProtection: x } = e,
        { data: v } = (0, f.oV)(),
        C = v?.accounts?.find((e) => {
          let { id: t } = e
          return t === m
        })
      g[0] !== m ? ((t = (0, en.dI)(m)), (g[0] = m), (g[1] = t)) : (t = g[1])
      let { data: j } = (0, o.I)(t.cyber)
      g[2] !== m ? ((s = (0, en.dI)(m)), (g[2] = m), (g[3] = s)) : (s = g[3])
      let { data: A, isSuccess: k } = (0, o.I)(s.protection),
        M = A?.advanced_protection_mode_enabled === !0
      g[4] !== k || g[5] !== A ? ((a = (0, es.dA)(A, k)), (g[4] = k), (g[5] = A), (g[6] = a)) : (a = g[6])
      let P = a,
        I = (0, es.p2)(j?.tac1_enabled === !0, C?.plan_type)
      return P || I
        ? (g[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)(_.X.Header, {
                title: (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.advancedSecurity",
                  defaultMessage: "Advanced security",
                }),
              })),
              (g[7] = r))
            : (r = g[7]),
          g[8] !== M || g[9] !== x || g[10] !== P
            ? ((c =
                P && M
                  ? (0, n.jsx)(b.kk, {
                      edgeRounding: "surface",
                      entry: es.Z9.advanced,
                      description: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.advancedProtection.enabled",
                        defaultMessage: "Advanced account security is enabled",
                      }),
                      onClick: x,
                      trailing: (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.advancedProtection.manageNative",
                            defaultMessage: "Manage",
                          }),
                          (0, n.jsx)(y.uM3, {}),
                        ],
                      }),
                    })
                  : null),
              (g[8] = M),
              (g[9] = x),
              (g[10] = P),
              (g[11] = c))
            : (c = g[11]),
          g[12] !== M || g[13] !== P
            ? ((l =
                P && !M
                  ? (0, n.jsx)(b.GC, {
                      entry: es.Z9.advanced,
                      description: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.advancedProtection.description",
                        defaultMessage:
                          "Use stronger sign-in protections and additional safeguards to help prevent unauthorized access to your account",
                      }),
                      control: (0, n.jsx)(D.G, {
                        initiator: "open_in_browser_bridge",
                        href: "/advanced-account-security",
                        children: (0, n.jsxs)("span", {
                          className: "flex shrink-0 items-center gap-2",
                          children: [
                            (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.enroll",
                              defaultMessage: "Enroll",
                            }),
                            (0, n.jsx)(y.uM3, {}),
                          ],
                        }),
                      }),
                    })
                  : null),
              (g[12] = M),
              (g[13] = P),
              (g[14] = l))
            : (l = g[14]),
          g[15] !== m || g[16] !== k || g[17] !== A
            ? ((u = k && !0 === A.aas_eligible ? (0, n.jsx)(eh, { accountId: m }) : null),
              (g[15] = m),
              (g[16] = k),
              (g[17] = A),
              (g[18] = u))
            : (u = g[18]),
          g[19] !== I
            ? ((p = I
                ? (0, n.jsx)(D.G, {
                    className:
                      "block w-full cursor-interaction hover:bg-secondary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                    initiator: "open_in_browser_bridge",
                    href: "https://chatgpt.com/cyber",
                    children: (0, n.jsx)(b.GC, {
                      entry: es.Z9.cyber,
                      description: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.cyber.description",
                        defaultMessage: "Check your eligibility for Daybreak access",
                      }),
                      control: (0, n.jsx)(ee.g, { size: 16, href: "https://chatgpt.com/cyber" }),
                      controlSizing: "content",
                    }),
                  })
                : null),
              (g[19] = I),
              (g[20] = p))
            : (p = g[20]),
          g[21] !== c || g[22] !== l || g[23] !== u || g[24] !== p
            ? ((h = (0, n.jsxs)(_.X, {
                className: "select-none",
                children: [r, (0, n.jsx)(_.X.Content, { children: (0, n.jsxs)(w.t, { children: [c, l, u, p] }) })],
              })),
              (g[21] = c),
              (g[22] = l),
              (g[23] = u),
              (g[24] = p),
              (g[25] = h))
            : (h = g[25]),
          h)
        : null
    }
    function eA(e) {
      let t,
        s,
        c,
        u,
        h,
        g,
        m,
        f,
        x,
        v,
        C,
        _,
        j,
        A,
        k,
        M,
        P,
        G,
        S,
        T,
        N,
        R,
        q,
        U,
        F = (0, i.c)(70),
        {
          accountId: H,
          disableConfirmationRequested: V,
          onBack: W,
          onClearDisableConfirmation: z,
          onRequestDisableConfirmation: B,
        } = e,
        Z = (0, a.jE)(),
        Y = (0, l.useRef)(null),
        Q = (0, l.useRef)(!1)
      F[0] !== H ? ((t = (0, en.dI)(H)), (F[0] = H), (F[1] = t)) : (t = F[1])
      let { data: $, isError: X, refetch: ee } = (0, o.I)(t.protection)
      ;(F[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = () => (
            (Q.current = !0),
            () => {
              ;((Q.current = !1), Y.current?.abort())
            }
          )),
          (c = []),
          (F[2] = s),
          (F[3] = c))
        : ((s = F[2]), (c = F[3])),
        (0, l.useEffect)(s, c),
        F[4] !== H ? ((u = (e) => (0, eC.nc)(H, e)), (F[4] = H), (F[5] = u)) : (u = F[5]),
        F[6] !== B
          ? ((h = (e) => {
              Q.current && ("ready" === e ? B() : "object" == typeof e && window.location.assign(e.redirectUrl))
            }),
            (F[6] = B),
            (F[7] = h))
          : (h = F[7]),
        F[8] !== u || F[9] !== h
          ? ((g = { mutationFn: u, onSuccess: h }), (F[8] = u), (F[9] = h), (F[10] = g))
          : (g = F[10]))
      let et = (0, r.n)(g)
      ;(F[11] !== H ? ((m = () => (0, eC.a9)(H)), (F[11] = H), (F[12] = m)) : (m = F[12]),
        F[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (e) => {
              Q.current && "object" == typeof e && window.location.assign(e.redirectUrl)
            }),
            (F[13] = f))
          : (f = F[13]),
        F[14] !== m ? ((x = { mutationFn: m, onSuccess: f }), (F[14] = m), (F[15] = x)) : (x = F[15]))
      let ei = (0, r.n)(x)
      ;(F[16] !== H
        ? ((v = async () => {
            let e = await (0, p.loadBrowserChatGptAuth)()
            if (!Q.current) return "cancelled"
            if (e?.accountId !== H || !(0, eC.m)(e.accessToken)) return "reauth_required"
            let t = new AbortController()
            Y.current = t
            try {
              return (
                await I.Request.safePost("/accounts/security_settings/advanced_protection_mode/disable", {
                  additionalHeaders: { "ChatGPT-Account-ID": H },
                  signal: t.signal,
                }),
                t.signal.aborted ? "cancelled" : "disabled"
              )
            } catch (e) {
              if (t.signal.aborted) return "cancelled"
              throw e
            }
          }),
          (F[16] = H),
          (F[17] = v))
        : (v = F[17]),
        F[18] !== H || F[19] !== W || F[20] !== et || F[21] !== Z
          ? ((C = (e) => {
              if (!Q.current) return
              if ("reauth_required" === e) return void et.mutate(!0)
              if ("disabled" !== e || Y.current?.signal.aborted === !0) return
              let t = (0, en.dI)(H)
              ;(Promise.all([
                Z.invalidateQueries({ queryKey: t.protection.queryKey, refetchType: "all" }),
                Z.invalidateQueries({ queryKey: t.mfa.queryKey, refetchType: "all" }),
                Z.invalidateQueries({ queryKey: t.addPassword.queryKey, refetchType: "all" }),
                Z.invalidateQueries({ queryKey: t.changePassword.queryKey, refetchType: "all" }),
              ]),
                (Y.current = null),
                W())
            }),
            (F[18] = H),
            (F[19] = W),
            (F[20] = et),
            (F[21] = Z),
            (F[22] = C))
          : (C = F[22]))
      let ea = (0, r.n)({
          mutationFn: v,
          onSuccess: C,
          onError: (e) => {
            !Q.current ||
              (Y.current?.signal.aborted !== !0 &&
                ((Y.current = null),
                e instanceof E.FetchError &&
                  (401 === e.status || "reauth_required" === e.errorCode) &&
                  (ea.reset(), et.mutate(!0))))
          },
        }),
        eo = et.isPending || ei.isPending || ea.isPending,
        er = et.isError || "failed" === et.data || ei.isError || "failed" === ei.data,
        ec = $?.advanced_protection_mode_enabled === !0,
        el = null != $ && !X
      return (
        F[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.advancedProtection.title",
              defaultMessage: "Advanced account security",
            })),
            (F[23] = _))
          : (_ = F[23]),
        F[24] !== ec
          ? ((j = ec
              ? (0, n.jsxs)(J.E, {
                  className: "select-none",
                  variant: "neutral",
                  children: [
                    (0, n.jsx)(y._ah, { className: "text-info" }),
                    (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.advancedProtection.enabledBadge",
                      defaultMessage: "Enabled",
                    }),
                  ],
                })
              : null),
            (F[24] = ec),
            (F[25] = j))
          : (j = F[25]),
        F[26] !== j
          ? ((A = (0, n.jsxs)("span", {
              className: "flex flex-wrap items-start justify-between gap-4",
              children: [_, j],
            })),
            (F[26] = j),
            (F[27] = A))
          : (A = F[27]),
        F[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, n.jsx)("p", {
              children: (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.advancedProtection.detailDescription",
                defaultMessage:
                  "Advanced account security helps keep your account safe by requiring stronger sign-in methods like passkeys or hardware security keys",
              }),
            })),
            (F[28] = k))
          : (k = F[28]),
        F[29] !== el || F[30] !== ec
          ? ((M =
              el && ec
                ? (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.advancedProtection.includedDescription",
                        defaultMessage: "The following protections are included with advanced account security:",
                      }),
                      (0, n.jsxs)("ul", {
                        className: "list-disc ps-5",
                        children: [
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.included.disableEmailSmsCodes",
                              defaultMessage: "Disable email and SMS sign-in codes",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.included.disablePasswordSignIn",
                              defaultMessage: "Disable password sign-in",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.included.disableEmailRecovery",
                              defaultMessage: "Disable email account recovery",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.included.disableModelTraining",
                              defaultMessage: "Disable model training",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.included.enableEmailLoginAlerts",
                              defaultMessage: "Enable email alerts for login attempts",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.included.enableShorterSessions",
                              defaultMessage: "Enable shorter active sessions",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
            (F[29] = el),
            (F[30] = ec),
            (F[31] = M))
          : (M = F[31]),
        F[32] !== M
          ? ((P = (0, n.jsxs)("div", {
              className: "flex flex-col gap-5 text-sm leading-6 text-wrap select-none",
              children: [k, M],
            })),
            (F[32] = M),
            (F[33] = P))
          : (P = F[33]),
        F[34] !== el || F[35] !== X || F[36] !== ee
          ? ((G = el ? null : (0, n.jsx)(K.mK, { isError: X, onRetry: () => void ee() })),
            (F[34] = el),
            (F[35] = X),
            (F[36] = ee),
            (F[37] = G))
          : (G = F[37]),
        F[38] !== el || F[39] !== ec || F[40] !== $
          ? ((S =
              el && !ec
                ? (0, n.jsx)(w.t, {
                    children: (0, n.jsx)(O.ic, {
                      label: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.advancedProtection.notEnrolled",
                        defaultMessage: "Advanced account security isn\u2019t enabled",
                      }),
                      description: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.advancedProtection.description",
                        defaultMessage:
                          "Use stronger sign-in protections and additional safeguards to help prevent unauthorized access to your account",
                      }),
                      control:
                        !0 === $.aas_eligible
                          ? (0, n.jsx)(D.G, {
                              initiator: "open_in_browser_bridge",
                              href: "/advanced-account-security",
                              children: (0, n.jsxs)("span", {
                                className: "flex shrink-0 items-center gap-2",
                                children: [
                                  (0, n.jsx)(d.A, {
                                    id: "settings.chatGpt.security.advancedProtection.enroll",
                                    defaultMessage: "Enroll",
                                  }),
                                  (0, n.jsx)(y.uM3, {}),
                                ],
                              }),
                            })
                          : null,
                    }),
                  })
                : null),
            (F[38] = el),
            (F[39] = ec),
            (F[40] = $),
            (F[41] = S))
          : (S = F[41]),
        F[42] !== ea || F[43] !== el || F[44] !== ec || F[45] !== eo || F[46] !== et || F[47] !== ei
          ? ((T =
              el && ec
                ? (0, n.jsxs)(w.t, {
                    children: [
                      (0, n.jsx)(b.GC, {
                        entry: es.Z9.recoveryKeys,
                        description: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.advancedProtection.recoveryKeys.description",
                          defaultMessage:
                            "Recovery keys help you regain access to your account if you lose your sign-in methods. Keep them stored somewhere safe. If you lose your recovery keys or think someone else has them, you can replace them here. Replacing them will invalidate the old keys.",
                        }),
                        controlSizing: "content",
                        control: (0, n.jsx)(L.$, {
                          color: "secondary",
                          size: "toolbar",
                          disabled: eo,
                          onClick: () => ei.mutate(),
                          children: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.advancedProtection.recoveryKeys.replace",
                            defaultMessage: "Replace recovery keys",
                          }),
                        }),
                      }),
                      (0, n.jsx)(b.GC, {
                        entry: es.Z9.disable,
                        description: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.advancedProtection.disable.description",
                          defaultMessage:
                            "This removes additional protections. Once disabled, you'll use standard sign-in and account recovery methods.",
                        }),
                        controlSizing: "content",
                        control: (0, n.jsx)(L.$, {
                          color: "danger",
                          size: "toolbar",
                          disabled: eo,
                          onClick: () => {
                            ;(ea.reset(), et.mutate(!1))
                          },
                          children: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.advancedProtection.disable.button",
                            defaultMessage: "Disable",
                          }),
                        }),
                      }),
                    ],
                  })
                : null),
            (F[42] = ea),
            (F[43] = el),
            (F[44] = ec),
            (F[45] = eo),
            (F[46] = et),
            (F[47] = ei),
            (F[48] = T))
          : (T = F[48]),
        F[49] !== W || F[50] !== A || F[51] !== P || F[52] !== G || F[53] !== S || F[54] !== T
          ? ((N = (0, n.jsxs)(K.kU, { onBack: W, title: A, subtitle: P, children: [G, S, T] })),
            (F[49] = W),
            (F[50] = A),
            (F[51] = P),
            (F[52] = G),
            (F[53] = S),
            (F[54] = T),
            (F[55] = N))
          : (N = F[55]),
        F[56] !== ea || F[57] !== V || F[58] !== ec || F[59] !== z || F[60] !== et.isPending
          ? ((R =
              V && ec
                ? (0, n.jsx)(K.i$, {
                    title: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.advancedProtection.disable.confirmation.title",
                      defaultMessage: "Disable advanced account security?",
                    }),
                    confirmLabel: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.advancedProtection.disable.button",
                      defaultMessage: "Disable",
                    }),
                    onConfirm: () => ea.mutate(),
                    onClose: z,
                    isPending: ea.isPending || et.isPending,
                    isError: ea.isError,
                    errorMessage:
                      ea.error instanceof E.FetchError && "sensitive_action_cooldown" === ea.error.errorCode
                        ? (ea.error.diagnosticError?.message ?? ea.error.message)
                        : void 0,
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.advancedProtection.disable.confirmation.description",
                      defaultMessage:
                        "Disabling advanced account security will restore standard sign-in and account recovery methods, remove recovery keys, and stop requiring your passkeys or security keys at sign-in",
                    }),
                  })
                : null),
            (F[56] = ea),
            (F[57] = V),
            (F[58] = ec),
            (F[59] = z),
            (F[60] = et.isPending),
            (F[61] = R))
          : (R = F[61]),
        F[62] !== et || F[63] !== er || F[64] !== ei
          ? ((q = er
              ? (0, n.jsx)(eb, {
                  onClose: () => {
                    ;(et.reset(), ei.reset())
                  },
                })
              : null),
            (F[62] = et),
            (F[63] = er),
            (F[64] = ei),
            (F[65] = q))
          : (q = F[65]),
        F[66] !== N || F[67] !== R || F[68] !== q
          ? ((U = (0, n.jsxs)(n.Fragment, { children: [N, R, q] })), (F[66] = N), (F[67] = R), (F[68] = q), (F[69] = U))
          : (U = F[69]),
        U
      )
    }
    var ew = s("slpy"),
      ek = s("pHWQ"),
      eM = s("ESTr")
    let eP = (0, eM.a)({
      name: "key-badge-lock-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.25, y: 2.25, width: 21.324219, height: 20.987305 },
        visualBounds: { x: 2.25, y: 2.25, width: 21.324219, height: 20.987305 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.25, y: 2.25, width: 21.324219, height: 20.987305 },
        center: { x: 12.91211, y: 12.743653 },
        insets: { top: 2.25, right: 0.425781, bottom: 0.762695, left: 2.25 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 12.91211, y: 12.743653 },
          foreground: { x: 12.91211, y: 12.743653 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M19 12.75C20.7344 12.75 22.1406 14.1562 22.1406 15.8906V16.124C22.9757 16.4192 23.5742 17.2142 23.5742 18.1504V21.0869C23.5742 22.2742 22.6121 23.2372 21.4248 23.2373H16.5752C15.3879 23.2372 14.4248 22.2742 14.4248 21.0869V18.1504C14.4248 17.2142 15.0242 16.4193 15.8594 16.124V15.8906C15.8594 14.1562 17.2655 12.75 19 12.75ZM16.5752 17.5C16.2163 17.5001 15.9248 17.7915 15.9248 18.1504V21.0869C15.9248 21.4458 16.2163 21.7372 16.5752 21.7373H21.4248C21.7837 21.7372 22.0742 21.4458 22.0742 21.0869V18.1504C22.0742 17.7915 21.7837 17.5001 21.4248 17.5H16.5752ZM19 14.25C18.094 14.25 17.3594 14.9846 17.3594 15.8906V16H20.6406V15.8906C20.6406 14.9846 19.906 14.25 19 14.25Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M14.6475 2.25C18.5699 2.25026 21.7498 5.43005 21.75 9.35254C21.75 9.76673 21.4142 10.1025 21 10.1025C20.5858 10.1025 20.25 9.76674 20.25 9.35254C20.2498 6.35506 17.8958 3.90698 14.9355 3.75684L14.6475 3.75C11.5531 3.75 9.04416 6.25839 9.04395 9.35254C9.04395 9.87285 9.1148 10.3765 9.24707 10.8535C9.34106 11.193 9.25402 11.5699 8.99121 11.833L3.96973 16.8555C3.82917 16.996 3.75011 17.187 3.75 17.3857V20.25H6.61426L6.76074 20.2354C6.90501 20.2065 7.03896 20.1358 7.14453 20.0303L8.07324 19.1016V17.5439C8.07324 16.9917 8.52096 16.5439 9.07324 16.5439H10.6309L12.165 15.0088C12.4577 14.7159 12.9326 14.7154 13.2256 15.0078C13.5184 15.3005 13.519 15.7754 13.2266 16.0684L11.5449 17.751C11.3574 17.9385 11.1031 18.0439 10.8379 18.0439H9.57324V19.3086C9.57323 19.5738 9.4678 19.8281 9.28027 20.0156L8.20508 21.0908C7.78326 21.5126 7.2109 21.7499 6.61426 21.75H3.25C2.69771 21.75 2.25 21.3023 2.25 20.75V17.3857C2.25016 16.7892 2.48736 16.2167 2.90918 15.7949L7.72949 10.9717C7.60799 10.4512 7.54395 9.90893 7.54395 9.35254C7.54419 5.42981 10.7249 2.25 14.6475 2.25Z" fill="currentColor"/>',
    })
    var eI = s("X1mr"),
      eG = s("mp9y"),
      eS = s("c0c0"),
      eT = s("ZL1D"),
      eN = s("fZLW")
    function eE(e) {
      let t,
        s,
        a,
        r,
        c,
        u,
        p,
        h,
        g,
        m,
        f,
        y,
        x,
        v = (0, i.c)(46),
        {
          accountId: C,
          activeTrustedDeviceCount: j,
          pending: A,
          showLoading: k,
          onAction: M,
          onOpenAdvancedProtection: P,
        } = e,
        [I, G] = (0, l.useState)(null)
      v[0] !== C ? ((t = (0, en.dI)(C)), (v[0] = C), (v[1] = t)) : (t = v[1])
      let { data: S, isError: T, refetch: N } = (0, o.I)(t.mfa)
      v[2] !== C ? ((s = (0, en.dI)(C)), (v[2] = C), (v[3] = s)) : (s = v[3])
      let { data: E } = (0, o.I)(s.protection),
        D = E?.advanced_protection_mode_enabled === !0,
        R = null == E || D
      if (void 0 === S || T) {
        let e, t
        return void 0 === k || k || T
          ? (v[4] !== N ? ((e = () => void N()), (v[4] = N), (v[5] = e)) : (e = v[5]),
            v[6] !== T || v[7] !== e
              ? ((t = (0, n.jsx)(K.mK, { isError: T, onRetry: e })), (v[6] = T), (v[7] = e), (v[8] = t))
              : (t = v[8]),
            t)
          : null
      }
      v[9] !== S ? ((a = (0, eS.L)(S)), (v[9] = S), (v[10] = a)) : (a = v[10])
      let { showPush: q, showSms: U } = a,
        F = S.factors.sms[0]?.metadata?.phone_number,
        H = S.factors.totp.length > 0,
        V = S.factors.totp[0]?.id
      ;(v[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, n.jsx)(d.A, {
            id: "settings.chatGpt.security.mfa.authenticatorDescription",
            defaultMessage: "Use one-time codes from an authenticator app",
          })),
          (v[11] = r))
        : (r = v[11]),
        v[12] !== H || v[13] !== V
          ? ((c = { factor: "totp", enabled: H, id: V, entry: eS.f.totp, description: r }),
            (v[12] = H),
            (v[13] = V),
            (v[14] = c))
          : (c = v[14]),
        v[15] !== j || v[16] !== S.factors.push_auth || v[17] !== q
          ? ((u = q
              ? [
                  {
                    factor: "push_auth",
                    enabled: null != S.factors.push_auth,
                    id: S.factors.push_auth?.id,
                    entry: eS.f.push_auth,
                    description: (0, n.jsxs)("span", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.mfa.pushDescription",
                          defaultMessage: "Approve log-ins with a push sent to your trusted device",
                        }),
                        null != S.factors.push_auth && 0 === j
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                " ",
                                (0, n.jsxs)("span", {
                                  className: "inline-flex items-center gap-1.5 text-warning select-none",
                                  role: "status",
                                  children: [
                                    (0, n.jsx)(et.I, { asset: ek.m }),
                                    (0, n.jsx)(d.A, {
                                      id: "settings.chatGpt.security.mfa.pushNoTrustedDevices",
                                      defaultMessage:
                                        "No active trusted devices \u2014 we\u2019ll email you a code instead",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  },
                ]
              : []),
            (v[15] = j),
            (v[16] = S.factors.push_auth),
            (v[17] = q),
            (v[18] = u))
          : (u = v[18]),
        v[19] !== S.factors.sms[0]?.id ||
        v[20] !== S.factors.sms[0]?.metadata?.verified_channels?.[0] ||
        v[21] !== S.factors.sms.length ||
        v[22] !== U ||
        v[23] !== F
          ? ((p = U
              ? [
                  {
                    factor: "sms",
                    enabled: S.factors.sms.length > 0,
                    id: S.factors.sms[0]?.id,
                    entry: eS.f.sms,
                    description:
                      S.factors.sms.length > 0
                        ? (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.mfa.smsEnabledDescription",
                                defaultMessage:
                                  "Get 6-digit verification codes by {channel, select, whatsapp {WhatsApp} other {text}}",
                                values: { channel: S.factors.sms[0]?.metadata?.verified_channels?.[0] ?? "sms" },
                              }),
                              F
                                ? (0, n.jsx)("div", {
                                    className: "select-text",
                                    children: (0, n.jsx)("bdi", { dir: "ltr", children: F }),
                                  })
                                : null,
                            ],
                          })
                        : (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.mfa.smsDescription",
                            defaultMessage:
                              "Get 6-digit verification codes by SMS or WhatsApp based on your country code",
                          }),
                  },
                ]
              : []),
            (v[19] = S.factors.sms[0]?.id),
            (v[20] = S.factors.sms[0]?.metadata?.verified_channels?.[0]),
            (v[21] = S.factors.sms.length),
            (v[22] = U),
            (v[23] = F),
            (v[24] = p))
          : (p = v[24]),
        v[25] !== p || v[26] !== c || v[27] !== u
          ? ((h = [c, ...u, ...p]), (v[25] = p), (v[26] = c), (v[27] = u), (v[28] = h))
          : (h = v[28]))
      let W = h
      v[29] !== W ? ((g = W.filter(eD)), (v[29] = W), (v[30] = g)) : (g = v[30])
      let z = g.length + +(S.factors.passkeys.length > 0)
      return (
        v[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)(b.ek, {
              entry: eS.f.group,
              children: (0, n.jsx)(_.X.Header, { title: (0, n.jsx)(d.A, { ...eS.f.group.title }) }),
            })),
            (v[31] = m))
          : (m = v[31]),
        v[32] !== R || v[33] !== z
          ? ((f =
              1 !== z || R
                ? null
                : (0, n.jsx)(w.t, {
                    variant: "boxed",
                    children: (0, n.jsx)("div", {
                      className: "bg-primary-soft-alpha select-none",
                      children: (0, n.jsx)(O.ic, {
                        label: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.mfa.addAnother",
                          defaultMessage: "Add another method to prevent lockouts",
                        }),
                        control: (0, n.jsx)(et.I, { asset: eP }),
                      }),
                    }),
                  })),
            (v[32] = R),
            (v[33] = z),
            (v[34] = f))
          : (f = v[34]),
        v[35] !== R || v[36] !== D || v[37] !== I || v[38] !== W || v[39] !== M || v[40] !== P || v[41] !== A
          ? ((y = (0, n.jsx)(w.t, {
              children: W.map((e) => {
                let { factor: t, enabled: s, id: i, entry: a, description: o } = e
                return (0, n.jsx)(
                  b.GC,
                  {
                    entry: a,
                    description: o,
                    control: (e) => {
                      let a = (0, n.jsx)(eo.l, {
                        ...e,
                        checked: s,
                        disabled: R || A,
                        focusableWhenDisabled: D,
                        onClick: D ? () => G(t) : void 0,
                        onChange: (e) => {
                          e
                            ? M({ action: "enable", factor: t })
                            : null != i && M({ action: "disable", factor: t, factorId: i })
                        },
                      })
                      return D
                        ? (0, n.jsxs)(ew.m.Root, {
                            interactive: !0,
                            open: I === t,
                            onOpenChange: (e) => {
                              G((s) => (e ? t : s === t ? null : s))
                            },
                            children: [
                              (0, n.jsx)(ew.m.Trigger, { onClick: eL, children: a }),
                              (0, n.jsx)(ew.m.Content, {
                                children: (0, n.jsx)(d.A, {
                                  id: "settings.chatGpt.security.mfa.disabledByAdvancedProtection",
                                  defaultMessage:
                                    "This setting is disabled because you have Advanced Account Security enabled. <manageLink>Manage Advanced Account Security</manageLink>",
                                  values: {
                                    manageLink: (e) =>
                                      (0, n.jsx)(L.$, {
                                        className: "inline-flex max-w-full underline underline-offset-2",
                                        color: "ghostMuted",
                                        size: "inline",
                                        onClick: P,
                                        children: (0, n.jsx)("span", {
                                          className: "min-w-0 text-start break-words whitespace-normal",
                                          children: e,
                                        }),
                                      }),
                                  },
                                }),
                              }),
                            ],
                          })
                        : a
                    },
                  },
                  t,
                )
              }),
            })),
            (v[35] = R),
            (v[36] = D),
            (v[37] = I),
            (v[38] = W),
            (v[39] = M),
            (v[40] = P),
            (v[41] = A),
            (v[42] = y))
          : (y = v[42]),
        v[43] !== f || v[44] !== y
          ? ((x = (0, n.jsxs)(_.X, {
              children: [m, (0, n.jsxs)(_.X.Content, { className: "gap-4", children: [f, y] })],
            })),
            (v[43] = f),
            (v[44] = y),
            (v[45] = x))
          : (x = v[45]),
        x
      )
    }
    function eL(e) {
      return e.preventDefault()
    }
    function eD(e) {
      let { enabled: t } = e
      return t
    }
    function eR(e) {
      let t,
        s,
        a = (0, i.c)(24),
        { accountId: r, action: c, onClose: l } = e,
        d = (0, h.As)()
      a[0] !== r ? ((t = (0, en.dI)(r)), (a[0] = r), (a[1] = t)) : (t = a[1])
      let { data: u } = (0, o.I)(t.mfa)
      if ("disable" === c.action) {
        let e,
          t,
          s,
          i,
          o,
          d,
          p = u?.factors.passkeys
        if ("push_auth" === c.factor) {
          let e
          ;(a[2] !== u
            ? ((e = u?.factors.push_auth == null ? void 0 : [u.factors.push_auth]), (a[2] = u), (a[3] = e))
            : (e = a[3]),
            (p = e))
        } else "passkey" !== c.factor && (p = u?.factors[c.factor])
        if (a[4] !== r || a[5] !== c || a[6] !== p) {
          o = Symbol.for("react.early_return_sentinel")
          e: {
            let n = p?.find((e) => {
              let { id: t } = e
              return t === c.factorId
            })
            if (null == n) {
              o = null
              break e
            }
            ;((e = eG.J),
              (t = r),
              (s = c),
              (i =
                "passkey" === c.factor
                  ? n.metadata?.factor_name?.trim() || n.metadata?.authenticator_name?.trim()
                  : void 0))
          }
          ;((a[4] = r), (a[5] = c), (a[6] = p), (a[7] = e), (a[8] = t), (a[9] = s), (a[10] = i), (a[11] = o))
        } else ((e = a[7]), (t = a[8]), (s = a[9]), (i = a[10]), (o = a[11]))
        return o !== Symbol.for("react.early_return_sentinel")
          ? o
          : (a[12] !== e || a[13] !== l || a[14] !== t || a[15] !== s || a[16] !== i
              ? ((d = (0, n.jsx)(e, { accountId: t, action: s, passkeyName: i, onClose: l })),
                (a[12] = e),
                (a[13] = l),
                (a[14] = t),
                (a[15] = s),
                (a[16] = i),
                (a[17] = d))
              : (d = a[17]),
            d)
      }
      return (
        a[18] !== r || a[19] !== c.actionAttemptId || a[20] !== c.factor || a[21] !== d || a[22] !== l
          ? ((s =
              "passkey" === c.factor
                ? (0, n.jsx)(eq, { accountId: r, actionAttemptId: c.actionAttemptId })
                : (0, n.jsx)(
                    eG.M,
                    { accountId: r, factor: c.factor, email: d.email ?? "", onClose: l },
                    `${r}:${c.factor}`,
                  )),
            (a[18] = r),
            (a[19] = c.actionAttemptId),
            (a[20] = c.factor),
            (a[21] = d),
            (a[22] = l),
            (a[23] = s))
          : (s = a[23]),
        s
      )
    }
    function eq(e) {
      let t,
        s,
        a,
        r,
        d,
        u = (0, i.c)(13),
        { accountId: p, actionAttemptId: h } = e,
        g = (0, c.gh)(N.u)
      u[0] !== p
        ? ((t = {
            queryKey: ["chatgpt-security", p, "passkey-enrollment-token"],
            queryFn: (e) => {
              let { signal: t } = e
              return en.IN.safePost("/accounts/mfa/user/request_mfa_token_in_house", {
                additionalHeaders: { "ChatGPT-Account-ID": p },
                signal: t,
              })
            },
            staleTime: 1 / 0,
            gcTime: 0,
            retry: !1,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
          }),
          (u[0] = p),
          (u[1] = t))
        : (t = u[1])
      let { data: m, isError: f, refetch: y } = (0, o.I)(t),
        x = m?.state_token,
        v = m?.mfa_request_id
      return (
        u[2] !== h || u[3] !== v || u[4] !== g || u[5] !== x
          ? ((s = () => {
              if (null == x) return
              let e = new URL("/passkey-enroll", (0, eI.WF)().auth.loginWebUrl)
              ;(e.searchParams.set("origin_app_name", "ChatGPT"), e.searchParams.set("mfa_token", x))
              let t = (0, eN.Z)()
              ;("string" == typeof t && e.searchParams.set("redirect_path", `${t}?view=passkeys`),
                (0, eT.fY)(g, h, v),
                window.location.assign(e.toString()))
            }),
            (a = [h, v, g, x]),
            (u[2] = h),
            (u[3] = v),
            (u[4] = g),
            (u[5] = x),
            (u[6] = s),
            (u[7] = a))
          : ((s = u[6]), (a = u[7])),
        (0, l.useEffect)(s, a),
        u[8] !== y ? ((r = () => void y()), (u[8] = y), (u[9] = r)) : (r = u[9]),
        u[10] !== f || u[11] !== r
          ? ((d = (0, n.jsx)(K.mK, { isError: f, onRetry: r })), (u[10] = f), (u[11] = r), (u[12] = d))
          : (d = u[12]),
        d
      )
    }
    var eO = s("pQJN")
    function eU(e) {
      let t,
        s,
        a,
        o,
        l,
        u,
        p = (0, i.c)(19),
        { accountId: h } = e,
        g = (0, c.gh)(N.u),
        f = (0, c._U)(eO.q, h),
        { data: y } = (0, c.Ul)(m.s6)
      p[0] !== h || p[1] !== g
        ? ((t = async (e, t) => {
            ;(await I.Request.safePatch("/settings/account_user_setting", {
              additionalHeaders: { "ChatGPT-Account-ID": h },
              parameters: { query: { feature: e, value: t } },
            }),
              await g.query.snapshot(m.s6).invalidate())
          }),
          (p[0] = h),
          (p[1] = g),
          (p[2] = t))
        : (t = p[2])
      let x = t
      p[3] !== x
        ? ((s = {
            mutationFn: (e) => {
              let { feature: t, value: s } = e
              return x(t, s)
            },
          }),
          (p[3] = x),
          (p[4] = s))
        : (s = p[4])
      let v = (0, r.n)(s)
      return (
        p[5] !== y || p[6] !== v || p[7] !== f.csp
          ? ((a = f.csp
              ? (0, n.jsxs)(_.X, {
                  children: [
                    (0, n.jsx)(_.X.Header, {
                      title: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.apps.title",
                        defaultMessage: "App security",
                      }),
                    }),
                    (0, n.jsx)(_.X.Content, {
                      children: (0, n.jsx)(w.t, {
                        children: (0, n.jsx)(b.ek, {
                          entry: eO.J.csp,
                          children: (0, n.jsx)(O.ic, {
                            id: "developer-mode",
                            label: (0, n.jsx)(b.Ct, { title: eO.J.csp.title }),
                            description: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.apps.enforceCsp.description",
                              defaultMessage:
                                "When enabled, custom apps without a declared CSP get the same restricted default CSP they would in production instead of unrestricted network access. <link>Learn more</link>",
                              values: { link: eK },
                            }),
                            control: (e) =>
                              (0, n.jsx)(eo.l, {
                                ...e,
                                checked: y?.connectorEnforceCspInDevMode === !0,
                                disabled: null == y || v.isPending,
                                onChange: (e) => v.mutate({ feature: "connector_enforce_csp_in_dev_mode", value: e }),
                              }),
                          }),
                        }),
                      }),
                    }),
                  ],
                })
              : null),
            (p[5] = y),
            (p[6] = v),
            (p[7] = f.csp),
            (p[8] = a))
          : (a = p[8]),
        p[9] !== y || p[10] !== v || p[11] !== f.deviceCode
          ? ((o = f.deviceCode
              ? (0, n.jsx)(w.t, {
                  children: (0, n.jsx)(b.GC, {
                    entry: eO.J.deviceCode,
                    description: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.deviceCode.codexAndOffice.description",
                      defaultMessage:
                        "Use device codes to sign in to Codex in remote or headless environments, or to ChatGPT in Excel, PowerPoint, and Word through your browser. Exercise caution, as device codes can be phished. Never share a device code.",
                    }),
                    control: (e) =>
                      (0, n.jsx)(eo.l, {
                        ...e,
                        checked: y?.enableDeviceCodeAuth === !0,
                        disabled: null == y || v.isPending,
                        onChange: (e) => v.mutate({ feature: "enable_device_code_auth", value: e }),
                      }),
                  }),
                })
              : null),
            (p[9] = y),
            (p[10] = v),
            (p[11] = f.deviceCode),
            (p[12] = o))
          : (o = p[12]),
        p[13] !== v.isError
          ? ((l = v.isError
              ? (0, n.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.updateError",
                    defaultMessage: "Could not update security settings",
                  }),
                })
              : null),
            (p[13] = v.isError),
            (p[14] = l))
          : (l = p[14]),
        p[15] !== a || p[16] !== o || p[17] !== l
          ? ((u = (0, n.jsxs)(n.Fragment, { children: [a, o, l] })), (p[15] = a), (p[16] = o), (p[17] = l), (p[18] = u))
          : (u = p[18]),
        u
      )
    }
    function eK(e) {
      return (0, n.jsx)(
        D.G,
        {
          appearance: "secondary",
          initiator: "open_in_browser_bridge",
          href: "https://developers.openai.com/apps-sdk/build/mcp-server#content-security-policy-csp",
          children: e,
        },
        "learn-more",
      )
    }
    var eF = s("tzt8"),
      eH = s("AzPI"),
      eV = s("HDjn"),
      eW = s("cQed"),
      ez = s("yWtz"),
      eB = s("Wf1j"),
      eZ = s("GK7D"),
      eY = s("okCa"),
      eQ = s("PkPj"),
      e$ = s("BrP7"),
      eX = s("WXto"),
      eJ = s("gPv1"),
      e1 = s("yGJW")
    function e0(e) {
      let t,
        s,
        c,
        u,
        p,
        h,
        g,
        m,
        f,
        y,
        x,
        v,
        C,
        b,
        _ = (0, i.c)(67),
        {
          app: j,
          accountId: A,
          isIdentityOnly: w,
          resourceGrant: k,
          successFocusRef: M,
          workspaceName: P,
          isPersonalWorkspace: I,
          onDisconnected: G,
          onDisconnectingChange: S,
        } = e,
        T = (0, eB.A)(),
        N = (0, l.useRef)(null),
        D = (0, a.jE)(),
        R = k?.disconnect_target ?? j.disconnect_target,
        [q, O] = (0, l.useState)(null)
      ;(_[0] !== A ? ((t = (0, en.dI)(A)), (_[0] = A), (_[1] = t)) : (t = _[1]),
        _[2] !== t.linkedApps
          ? (({ staleTime: c, ...s } = t.linkedApps), (_[2] = t.linkedApps), (_[3] = s), (_[4] = c))
          : ((s = _[3]), (c = _[4])),
        _[5] !== w || _[6] !== s || _[7] !== c
          ? ((u = { ...s, staleTime: c, enabled: w, refetchOnMount: "always" }),
            (_[5] = w),
            (_[6] = s),
            (_[7] = c),
            (_[8] = u))
          : (u = _[8]),
        (0, o.I)(u),
        _[9] !== A || _[10] !== j
          ? ((p = (e) =>
              en.IN.safePost("/client_applications/{client_id}/permissions/revoke", {
                additionalHeaders: { "ChatGPT-Account-ID": A },
                expectedErrorStatuses: [404, 409],
                parameters: { path: { client_id: j.id } },
                requestBody: { target: e },
              })),
            (_[9] = A),
            (_[10] = j),
            (_[11] = p))
          : (p = _[11]),
        _[12] !== A || _[13] !== j || _[14] !== G || _[15] !== S || _[16] !== s || _[17] !== D || _[18] !== k
          ? ((h = async () => {
              ;(await D.cancelQueries({ queryKey: s.queryKey }),
                D.removeQueries({ queryKey: ["chatgpt-security", A, "linked-app-permissions", j.id] }),
                O(null),
                null == k && G(),
                S(!1),
                D.invalidateQueries({ queryKey: s.queryKey }))
            }),
            (_[12] = A),
            (_[13] = j),
            (_[14] = G),
            (_[15] = S),
            (_[16] = s),
            (_[17] = D),
            (_[18] = k),
            (_[19] = h))
          : (h = _[19]),
        _[20] !== s || _[21] !== D
          ? ((g = async (e) => {
              e instanceof E.FetchError &&
                409 === e.status &&
                (await D.cancelQueries({ queryKey: s.queryKey }), await D.invalidateQueries({ queryKey: s.queryKey }))
            }),
            (_[20] = s),
            (_[21] = D),
            (_[22] = g))
          : (g = _[22]),
        _[23] !== p || _[24] !== h || _[25] !== g
          ? ((m = { mutationFn: p, retry: !1, onSuccess: h, onError: g }),
            (_[23] = p),
            (_[24] = h),
            (_[25] = g),
            (_[26] = m))
          : (m = _[26]))
      let U = (0, r.n)(m),
        F = U.error instanceof E.FetchError && 409 === U.error.status,
        H = R?.type === "user_grant" || R?.type === "workspace_grant"
      if ((!H || w) && !(null != q && (U.isPending || U.isError))) return (null != q && O(null), null)
      if (k?.resource === "chatgpt_plan" && I) {
        let e
        ;(_[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.plan.personalConfirmTitle",
              defaultMessage: "Remove ChatGPT plan access from your personal workspace?",
            })),
            (_[27] = e))
          : (e = _[27]),
          (f = e))
      } else if (k?.resource === "chatgpt_plan" && P) {
        let e
        ;(_[28] !== P
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.plan.workspaceConfirmTitle",
              defaultMessage: "Remove ChatGPT plan access from {workspaceName}?",
              values: { workspaceName: P },
            })),
            (_[28] = P),
            (_[29] = e))
          : (e = _[29]),
          (f = e))
      } else if (k?.resource === "chatgpt_plan") {
        let e
        ;(_[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.plan.confirmTitle",
              defaultMessage: "Remove ChatGPT plan access from this workspace?",
            })),
            (_[30] = e))
          : (e = _[30]),
          (f = e))
      } else if (k?.resource === "ads") {
        let e
        ;(_[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.ads.confirmTitle",
              defaultMessage: "Remove Ads Manager access?",
            })),
            (_[31] = e))
          : (e = _[31]),
          (f = e))
      } else if (q?.type === "workspace_grant") {
        let e
        ;(_[32] !== j.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.workspaceConfirmTitle",
              defaultMessage: "Disconnect {name} from this workspace?",
              values: { name: j.name },
            })),
            (_[32] = j.name),
            (_[33] = e))
          : (e = _[33]),
          (f = e))
      } else {
        let e
        ;(_[34] !== j.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.confirmTitle",
              defaultMessage: "Disconnect {name}?",
              values: { name: j.name },
            })),
            (_[34] = j.name),
            (_[35] = e))
          : (e = _[35]),
          (f = e))
      }
      if (F) {
        let e
        ;(_[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.reviewConnection",
              defaultMessage: "Review connection",
            })),
            (_[36] = e))
          : (e = _[36]),
          (y = e))
      } else if (null != k) {
        let e
        ;(_[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.removeAccess",
              defaultMessage: "Remove access",
            })),
            (_[37] = e))
          : (e = _[37]),
          (y = e))
      } else {
        let e
        ;(_[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.confirm",
              defaultMessage: "Disconnect",
            })),
            (_[38] = e))
          : (e = _[38]),
          (y = e))
      }
      if (k?.resource === "chatgpt_plan") {
        let e
        ;(_[39] !== j.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.plan.confirmDescription",
              defaultMessage:
                "{name} will no longer be able to use your ChatGPT plan in this workspace. Its other access will stay connected.",
              values: { name: j.name },
            })),
            (_[39] = j.name),
            (_[40] = e))
          : (e = _[40]),
          (x = e))
      } else if (k?.resource === "ads") {
        let e
        ;(_[41] !== j.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.ads.confirmDescription",
              defaultMessage:
                "{name} will no longer be able to view or manage your Ads Manager data. Its other access will stay connected.",
              values: { name: j.name },
            })),
            (_[41] = j.name),
            (_[42] = e))
          : (e = _[42]),
          (x = e))
      } else if (q?.type === "workspace_grant") {
        let e
        ;(_[43] !== j.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.workspaceConfirmDescription.v2",
              defaultMessage:
                "{name} will lose access to this workspace. Connections in your other workspaces will stay active. {name} may retain information you\u2019ve already shared.",
              values: { name: j.name },
            })),
            (_[43] = j.name),
            (_[44] = e))
          : (e = _[44]),
          (x = e))
      } else {
        let e
        ;(_[45] !== j.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.disconnectConfirmDescription",
              defaultMessage:
                "This removes your login connection to {name}. It may still keep information you\u2019ve already shared.",
              values: { name: j.name },
            })),
            (_[45] = j.name),
            (_[46] = e))
          : (e = _[46]),
          (x = e))
      }
      return (
        _[47] !== j || _[48] !== U || _[49] !== H || _[50] !== T || _[51] !== k || _[52] !== R
          ? ((v =
              null != k
                ? (0, n.jsx)(L.$, {
                    ref: N,
                    type: "button",
                    color: "dangerOutline",
                    size: "toolbar",
                    disabled: U.isSuccess,
                    "aria-label":
                      "chatgpt_plan" === k.resource
                        ? T.formatMessage({
                            id: "settings.chatGpt.security.linkedApps.resource.plan.removeAccess",
                            defaultMessage: "Remove ChatGPT plan access",
                          })
                        : T.formatMessage({
                            id: "settings.chatGpt.security.linkedApps.resource.ads.removeAccess",
                            defaultMessage: "Remove Ads Manager access",
                          }),
                    onClick: () => {
                      ;(U.reset(), H && O({ ...R }))
                    },
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.resource.removeAccess",
                      defaultMessage: "Remove access",
                    }),
                  })
                : (0, n.jsx)(e2, {
                    app: j,
                    onDisconnect: () => {
                      H && null != R && (U.reset(), O({ ...R }))
                    },
                  })),
            (_[47] = j),
            (_[48] = U),
            (_[49] = H),
            (_[50] = T),
            (_[51] = k),
            (_[52] = R),
            (_[53] = v))
          : (v = _[53]),
        _[54] !== x ||
        _[55] !== y ||
        _[56] !== q ||
        _[57] !== f ||
        _[58] !== U ||
        _[59] !== F ||
        _[60] !== S ||
        _[61] !== k ||
        _[62] !== M
          ? ((C =
              null != q
                ? (0, n.jsx)(K.i$, {
                    title: null != k ? (0, n.jsx)("span", { className: "block pe-8", children: f }) : f,
                    confirmLabel: y,
                    onConfirm: () => {
                      if (F) {
                        ;(O(null), S(!1))
                        return
                      }
                      ;(S(!0, null != k), U.mutate(q))
                    },
                    onClose: () => {
                      ;(O(null), S(!1))
                    },
                    onCloseAutoFocus:
                      null != k
                        ? (e) => {
                            e.preventDefault()
                            let t = N.current
                            t?.isConnected && !t.disabled ? t.focus() : M?.current?.focus()
                          }
                        : void 0,
                    isPending: U.isPending,
                    isError: U.isError,
                    informational: F,
                    errorMessage: F
                      ? (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.linkedApps.connection.changed",
                          defaultMessage:
                            "This connection changed. Review its current access before disconnecting again",
                        })
                      : void 0,
                    children: x,
                  })
                : null),
            (_[54] = x),
            (_[55] = y),
            (_[56] = q),
            (_[57] = f),
            (_[58] = U),
            (_[59] = F),
            (_[60] = S),
            (_[61] = k),
            (_[62] = M),
            (_[63] = C))
          : (C = _[63]),
        _[64] !== v || _[65] !== C
          ? ((b = (0, n.jsxs)(n.Fragment, { children: [v, C] })), (_[64] = v), (_[65] = C), (_[66] = b))
          : (b = _[66]),
        b
      )
    }
    function e2(e) {
      let t,
        s,
        a,
        o,
        r,
        c,
        l = (0, i.c)(12),
        { app: u, onDisconnect: p } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(_.X.Header, {
              title: (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.linkedApps.connection.title",
                defaultMessage: "Manage login connection",
              }),
            })),
            (l[0] = t))
          : (t = l[0]),
        l[1] !== u.disconnect_target?.type || l[2] !== u.name
          ? ((s =
              u.disconnect_target?.type === "workspace_grant"
                ? (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.connection.workspaceDisconnectLabel",
                    defaultMessage: "Disconnect {name} from this workspace",
                    values: { name: u.name },
                  })
                : (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.connection.disconnectLabel",
                    defaultMessage: "Disconnect {name}",
                    values: { name: u.name },
                  })),
            (a =
              u.disconnect_target?.type === "workspace_grant"
                ? (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.connection.workspaceDescription.v2",
                    defaultMessage:
                      "{name} will lose access to this workspace. Connections in your other workspaces will stay active.",
                    values: { name: u.name },
                  })
                : (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.connection.disconnectDescription",
                    defaultMessage: "This removes your login connection to {name}",
                    values: { name: u.name },
                  })),
            (l[1] = u.disconnect_target?.type),
            (l[2] = u.name),
            (l[3] = s),
            (l[4] = a))
          : ((s = l[3]), (a = l[4])),
        l[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.disconnect",
              defaultMessage: "Disconnect",
            })),
            (l[5] = o))
          : (o = l[5]),
        l[6] !== p
          ? ((r = (0, n.jsx)(L.$, { color: "danger", size: "toolbar", onClick: p, children: o })),
            (l[6] = p),
            (l[7] = r))
          : (r = l[7]),
        l[8] !== s || l[9] !== a || l[10] !== r
          ? ((c = (0, n.jsxs)(_.X, {
              children: [
                t,
                (0, n.jsx)(_.X.Content, {
                  children: (0, n.jsx)(w.t, {
                    children: (0, n.jsx)(O.ic, {
                      className: "max-sm:flex-col max-sm:items-stretch",
                      label: s,
                      description: a,
                      control: r,
                    }),
                  }),
                }),
              ],
            })),
            (l[8] = s),
            (l[9] = a),
            (l[10] = r),
            (l[11] = c))
          : (c = l[11]),
        c
      )
    }
    var e3 = s("SJoA"),
      e4 = s("S2r0"),
      e5 = s("fxCc"),
      e6 = s("on57"),
      e9 = s("hPoZ"),
      e7 = s("hOO0"),
      e8 = s("u2dk"),
      te = s("HUHI"),
      tt = s("FpcZ"),
      ts = s("FvYa"),
      tn = s("JNtf"),
      ti = s("mUDD"),
      ta = s("WzdM"),
      to = s("kK7d"),
      tr = s("a6Zv")
    function tc(e) {
      let t,
        s,
        c,
        u,
        p,
        h,
        g,
        m,
        x,
        C,
        b,
        j,
        A,
        k,
        P,
        I,
        G,
        S,
        T,
        N,
        D,
        R,
        q,
        U,
        K,
        F,
        H,
        V = (0, i.c)(78),
        { app: W, accountId: z, groupTitle: B } = e,
        Z = (0, eB.A)(),
        Y = (0, a.jE)(),
        { data: Q, isLoading: $ } = (0, f.YL)(),
        [X, J] = (0, l.useState)(!1)
      V[0] !== z || V[1] !== W.id
        ? ((t = (0, e4.j)({
            queryKey: ["chatgpt-security", z, "linked-app-permissions", W.id],
            queryFn: (e) => {
              let { signal: t } = e
              return en.IN.safeGet("/client_applications/{client_id}/permissions", {
                additionalHeaders: { "ChatGPT-Account-ID": z },
                expectedErrorStatuses: [404, 409],
                parameters: { path: { client_id: W.id } },
                signal: t,
              })
            },
            staleTime: M.D.ONE_MINUTE,
            retry: !1,
          })),
          (V[0] = z),
          (V[1] = W.id),
          (V[2] = t))
        : (t = V[2])
      let ee = t
      ;(V[3] !== z || V[4] !== W.id
        ? ((s = (e) =>
            en.IN.safePost("/client_applications/{client_id}/permissions/revoke", {
              additionalHeaders: { "ChatGPT-Account-ID": z },
              expectedErrorStatuses: [404, 409],
              parameters: { path: { client_id: W.id } },
              requestBody: { target: e },
            })),
          (V[3] = z),
          (V[4] = W.id),
          (V[5] = s))
        : (s = V[5]),
        V[6] !== ee || V[7] !== Y
          ? ((c = () => Y.cancelQueries({ queryKey: ee.queryKey, exact: !0 })),
            (u = async (e, t) => {
              ;(await Y.cancelQueries({ queryKey: ee.queryKey, exact: !0 }),
                Y.setQueryData(ee.queryKey, e),
                ("plugins" === t.type || 0 === e.connector_ids.length) && J(!1))
            }),
            (p = async (e) => {
              e instanceof E.FetchError &&
                409 === e.status &&
                (await Y.cancelQueries({ queryKey: ee.queryKey, exact: !0 }),
                await Y.fetchQuery({ ...ee, staleTime: 0 }).catch(td))
            }),
            (V[6] = ee),
            (V[7] = Y),
            (V[8] = c),
            (V[9] = u),
            (V[10] = p))
          : ((c = V[8]), (u = V[9]), (p = V[10])),
        V[11] !== s || V[12] !== c || V[13] !== u || V[14] !== p
          ? ((h = { mutationFn: s, retry: !1, onMutate: c, onSuccess: u, onError: p }),
            (V[11] = s),
            (V[12] = c),
            (V[13] = u),
            (V[14] = p),
            (V[15] = h))
          : (h = V[15]))
      let { mutate: et, isPending: es, error: ei, variables: ea, reset: eo } = (0, r.n)(h),
        er = !es
      V[16] !== ee || V[17] !== er
        ? ((g = { ...ee, staleTime: M.D.ONE_MINUTE, enabled: er, refetchOnMount: "always" }),
          (V[16] = ee),
          (V[17] = er),
          (V[18] = g))
        : (g = V[18])
      let { data: ec, error: el, isFetching: ed, refetch: eu } = (0, o.I)(g)
      V[19] !== ec?.connector_ids
        ? ((m = ec?.connector_ids ?? []), (V[19] = ec?.connector_ids), (V[20] = m))
        : (m = V[20])
      let ep = Q?.id === z
      V[21] !== z || V[22] !== ep || V[23] !== m
        ? ((x = (0, tt.getHostedAppsContentQueriesOptions)({
            accountId: z,
            appIds: m,
            enabled: ep,
            productContext: "chatgpt",
          })),
          (V[21] = z),
          (V[22] = ep),
          (V[23] = m),
          (V[24] = x))
        : (x = V[24])
      let { data: eh, isPending: eg, isFetching: em } = (0, e5.E)(x),
        ef = ec?.connector_ids.map((e) =>
          eh?.find((t) => {
            let { id: s } = t
            return (0, e7.$)(s) === (0, e7.$)(e)
          }),
        ),
        ey =
          ec?.connector_ids.map((e, t) => ({
            queryKey: ["chatgpt-security", z, "connector-metadata", e],
            queryFn: (t) => {
              let { signal: s } = t
              return to.CodexRequest.safeGet("/aip/connectors/{connector_id}", {
                surface: "settings",
                additionalHeaders: { ...(0, ta.A)("chatgpt"), "ChatGPT-Account-ID": z },
                expectedErrorStatuses: [404],
                parameters: { path: { connector_id: e }, query: { include_actions: !1 } },
                signal: s,
              })
            },
            enabled: Q?.id === z && !eg && ef?.[t] == null,
            staleTime: M.D.FIVE_MINUTES,
            retry: !1,
          })) ?? []
      V[25] !== ey ? ((C = { queries: ey }), (V[25] = ey), (V[26] = C)) : (C = V[26])
      let ex = (0, e5.E)(C),
        ev = ec?.connector_ids.map((e, t) => {
          let s = ef?.[t] ?? ex[t]?.data,
            i = ex[t]?.data,
            a = ef?.[t]?.icon_url ?? i?.icon_assets?.["256_square"] ?? i?.logo_url,
            o = ef?.[t]?.icon_dark_url ?? i?.icon_dark_assets?.["256_square"] ?? i?.logo_url_dark
          return {
            id: e,
            name: s?.name,
            logoUrl: a,
            logoDarkUrl: o,
            isNameLoading: s?.name == null && ($ || em || ex[t]?.isFetching === !0),
            isLogoMetadataLoading: !a?.trim() && !o?.trim() && ($ || em || ex[t]?.isFetching === !0),
            icon: (0, n.jsx)("span", {
              className:
                "flex size-8 shrink-0 items-center justify-center rounded-lg border border-default select-none",
              "aria-hidden": !0,
              children: (0, n.jsx)(ts.R, {
                alt: "",
                knownAppId: e,
                logoUrl: tf(a),
                logoDarkUrl: tf(o),
                size: 20,
                fallback: (0, n.jsx)(y.HUG, {}),
              }),
            }),
          }
        }),
        eC = ev?.slice(0, 3) ?? [],
        eb = es || ed || null != el
      V[27] !== ed || V[28] !== es || V[29] !== el || V[30] !== eu
        ? ((b =
            null == el
              ? null
              : (0, n.jsxs)("div", {
                  role: "alert",
                  className: "flex flex-col items-start gap-3 text-sm text-secondary",
                  children: [
                    el instanceof E.FetchError && 404 === el.status
                      ? (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.linkedApps.connectedApps.unavailable",
                          defaultMessage: "Connected app access is unavailable",
                        })
                      : (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.linkedApps.connectedApps.loadError",
                          defaultMessage: "Couldn\u2019t load connected app access. Please try again",
                        }),
                    (0, n.jsx)(L.$, {
                      color: "secondary",
                      size: "toolbar",
                      disabled: es || ed,
                      loading: ed,
                      onClick: () => void eu(),
                      children: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.linkedApps.connectedApps.retry",
                        defaultMessage: "Retry",
                      }),
                    }),
                  ],
                })),
          (V[27] = ed),
          (V[28] = es),
          (V[29] = el),
          (V[30] = eu),
          (V[31] = b))
        : (b = V[31])
      let e_ = b
      if (ec?.connector_ids.length === 0 && null == el) return null
      V[32] !== e_ || V[33] !== ec
        ? ((j =
            e_ ??
            (null == ec
              ? (0, n.jsxs)("span", {
                  role: "status",
                  className: "flex items-center gap-2",
                  children: [
                    (0, n.jsx)(v.y, {}),
                    (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.connectedApps.loading",
                      defaultMessage: "Loading connected app access\u2026",
                    }),
                  ],
                })
              : null)),
          (V[32] = e_),
          (V[33] = ec),
          (V[34] = j))
        : (j = V[34])
      let ej = eb || null == ec
      ;(V[35] !== eo
        ? ((A = () => {
            ;(eo(), J(!0))
          }),
          (V[35] = eo),
          (V[36] = A))
        : (A = V[36]),
        V[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connectedApps.manage",
              defaultMessage: "Manage",
            })),
            (V[37] = k))
          : (k = V[37]),
        V[38] !== ej || V[39] !== A
          ? ((P = (0, n.jsx)(L.$, { color: "secondary", size: "toolbar", disabled: ej, onClick: A, children: k })),
            (V[38] = ej),
            (V[39] = A),
            (V[40] = P))
          : (P = V[40]))
      let eA = (0, n.jsx)(ty, {
          app: W,
          description: j,
          control: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(tu, { previewConnectors: eC }, JSON.stringify([z, ...eC.map(tl)])), P],
          }),
        }),
        ew =
          null == B
            ? eA
            : (0, n.jsxs)(_.X, {
                children: [
                  (0, n.jsx)(_.X.Header, { title: B }),
                  (0, n.jsx)(_.X.Content, { children: (0, n.jsx)(w.t, { children: eA }) }),
                ],
              }),
        ek = tn.lG
      ;(V[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = { "aria-describedby": void 0 }), (V[41] = I))
        : (I = V[41]),
        V[42] !== es
          ? ((G = (e) => {
              es || J(e)
            }),
            (V[42] = es),
            (V[43] = G))
          : (G = V[43]))
      let eM = ti.R4
      ;(V[44] !== eb || V[45] !== et || V[46] !== ec
        ? ((S = (e) => {
            ;(e.preventDefault(), eb || null == ec || et({ type: "plugins" }))
          }),
          (V[44] = eb),
          (V[45] = et),
          (V[46] = ec),
          (V[47] = S))
        : (S = V[47]),
        V[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, n.jsx)(ti.OO, {
              children: (0, n.jsx)(ti.c7, {
                title: (0, n.jsx)(tn.L3, {
                  className: "select-none",
                  children: (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.connectedApps.manageTitle",
                    defaultMessage: "Connected Apps",
                  }),
                }),
              }),
            })),
            (V[48] = T))
          : (T = V[48]))
      let eP = ti.OO
      V[49] !== ei
        ? ((N =
            null != ei
              ? (0, n.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children:
                    ei instanceof E.FetchError && 409 === ei.status
                      ? (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.linkedApps.connectedApps.conflict",
                          defaultMessage: "Connected app access changed. Review the current access and try again",
                        })
                      : (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.linkedApps.connectedApps.removeError",
                          defaultMessage: "Couldn\u2019t remove access. Please try again",
                        }),
                })
              : null),
          (V[49] = ei),
          (V[50] = N))
        : (N = V[50])
      let eI = w.t,
        eG = ev?.map((e) => {
          let { id: t, name: s, isNameLoading: i, icon: a } = e
          return (0, n.jsx)(
            O.ic,
            {
              className: "max-sm:flex-col max-sm:items-stretch",
              icon: a,
              label: (0, n.jsx)("span", {
                className: "break-words",
                children: i
                  ? (0, n.jsxs)("span", {
                      role: "status",
                      className: "flex items-center gap-2",
                      children: [
                        (0, n.jsx)(v.y, {}),
                        (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.linkedApps.connectedApps.loadingName",
                          defaultMessage: "Loading app\u2026",
                        }),
                      ],
                    })
                  : (s ??
                    (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.connectedApps.nameUnavailable",
                      defaultMessage: "App name unavailable",
                    })),
              }),
              control: (0, n.jsx)(L.$, {
                type: "button",
                color: "ghost",
                size: "icon",
                disabled: eb || i,
                loading: es && ea?.type === "connector" && ea.connector_id === t,
                "aria-label":
                  null == s
                    ? Z.formatMessage({
                        id: "settings.chatGpt.security.linkedApps.connectedApps.removeUnavailableLabel",
                        defaultMessage: "Remove access to this app",
                      })
                    : Z.formatMessage(
                        {
                          id: "settings.chatGpt.security.linkedApps.connectedApps.removeLabel",
                          defaultMessage: "Remove access to {name}",
                        },
                        { name: s },
                      ),
                onClick: () => {
                  eb || i || et({ type: "connector", connector_id: t })
                },
                children: es && ea?.type === "connector" && ea.connector_id === t ? null : (0, n.jsx)(y.cSG, {}),
              }),
            },
            t,
          )
        })
      ;(V[51] !== eI || V[52] !== eG
        ? ((D = (0, n.jsx)(eI, { children: eG })), (V[51] = eI), (V[52] = eG), (V[53] = D))
        : (D = V[53]),
        V[54] !== eP || V[55] !== e_ || V[56] !== N || V[57] !== D
          ? ((R = (0, n.jsxs)(eP, { children: [e_, N, D] })),
            (V[54] = eP),
            (V[55] = e_),
            (V[56] = N),
            (V[57] = D),
            (V[58] = R))
          : (R = V[58]))
      let eS = eb || null == ec,
        eT = es && ea?.type === "plugins"
      return (
        V[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connectedApps.removeAll",
              defaultMessage: "Remove all access",
            })),
            (V[59] = q))
          : (q = V[59]),
        V[60] !== eS || V[61] !== eT
          ? ((U = (0, n.jsx)(ti.OO, {
              children: (0, n.jsx)(ti.Es, {
                expandSingleButton: !1,
                children: (0, n.jsx)(L.$, { type: "submit", color: "danger", disabled: eS, loading: eT, children: q }),
              }),
            })),
            (V[60] = eS),
            (V[61] = eT),
            (V[62] = U))
          : (U = V[62]),
        V[63] !== eM || V[64] !== S || V[65] !== T || V[66] !== R || V[67] !== U
          ? ((K = (0, n.jsxs)(eM, { as: "form", size: "viewport", onSubmit: S, children: [T, R, U] })),
            (V[63] = eM),
            (V[64] = S),
            (V[65] = T),
            (V[66] = R),
            (V[67] = U),
            (V[68] = K))
          : (K = V[68]),
        V[69] !== ek || V[70] !== X || V[71] !== I || V[72] !== G || V[73] !== K
          ? ((F = (0, n.jsx)(ek, { open: X, contentProps: I, onOpenChange: G, children: K })),
            (V[69] = ek),
            (V[70] = X),
            (V[71] = I),
            (V[72] = G),
            (V[73] = K),
            (V[74] = F))
          : (F = V[74]),
        V[75] !== ew || V[76] !== F
          ? ((H = (0, n.jsxs)(n.Fragment, { children: [ew, F] })), (V[75] = ew), (V[76] = F), (V[77] = H))
          : (H = V[77]),
        H
      )
    }
    function tl(e) {
      let { id: t, logoUrl: s, logoDarkUrl: n } = e
      return [t, s, n]
    }
    function td() {}
    function tu(e) {
      let t,
        s = (0, i.c)(4),
        { previewConnectors: a } = e,
        o = !0 === (0, tr.Y)(),
        r = o ? "dark" : "light"
      return (
        s[0] !== o || s[1] !== a || s[2] !== r
          ? ((t = (0, n.jsx)(tp, { previewConnectors: a, isDarkTheme: o }, r)),
            (s[0] = o),
            (s[1] = a),
            (s[2] = r),
            (s[3] = t))
          : (t = s[3]),
        t
      )
    }
    function tp(e) {
      let t,
        s,
        a,
        o,
        r,
        c = (0, i.c)(10),
        { previewConnectors: d, isDarkTheme: u } = e,
        p = (0, eB.A)()
      c[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (c[0] = t)) : (t = c[0])
      let [h, g] = (0, l.useState)(t)
      c[1] !== u
        ? ((s = (e) => {
            let { id: t, icon: s, isLogoMetadataLoading: n, logoUrl: i, logoDarkUrl: a } = e,
              o = null != (0, e9.N6)(t, 20),
              r = u ? a?.trim() || i?.trim() : i?.trim() || a?.trim(),
              c = o ? null : (0, e8.kk)(r)
            return {
              id: t,
              icon: s,
              isLogoMetadataLoading: n && !o,
              logoRequest: c,
              directLogoUrl: o || null == r || null != c ? null : tf(r),
            }
          }),
          (c[1] = u),
          (c[2] = s))
        : (s = c[2])
      let m = d.map(s),
        f = (0, e5.E)({ queries: m.flatMap(tm) }),
        y = m.map((e, t) => ({
          ...e,
          imageUrl: null == e.logoRequest ? e.directLogoUrl : f[m.slice(0, t).filter(tg).length]?.data,
        })),
        x =
          y.some((e) => {
            let { id: t, isLogoMetadataLoading: s, imageUrl: n } = e
            return s || (null != n && h[t] !== n)
          }) || f.some(th),
        C = x
          ? (0, n.jsx)("span", {
              role: "status",
              "aria-label": p.formatMessage({
                id: "settings.chatGpt.security.linkedApps.connectedApps.loadingLogos",
                defaultMessage: "Loading connected app logos",
              }),
              children: (0, n.jsx)(v.y, {}),
            })
          : null,
        b = (0, e6.A)("flex items-center gap-2", x && "pointer-events-none absolute inset-0 opacity-0")
      c[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (e) => {
            let { id: t, icon: s, imageUrl: i } = e,
              a = () => {
                null != i && g((e) => ({ ...e, [t]: i }))
              }
            return (0, n.jsx)("span", { onLoadCapture: a, onErrorCapture: a, children: s }, t)
          }),
          (c[3] = a))
        : (a = c[3])
      let _ = y.map(a)
      return (
        c[4] !== b || c[5] !== _
          ? ((o = (0, n.jsx)("div", { className: b, "aria-hidden": !0, children: _ })),
            (c[4] = b),
            (c[5] = _),
            (c[6] = o))
          : (o = c[6]),
        c[7] !== o || c[8] !== C
          ? ((r = (0, n.jsxs)("div", { className: "relative max-sm:hidden", children: [C, o] })),
            (c[7] = o),
            (c[8] = C),
            (c[9] = r))
          : (r = c[9]),
        r
      )
    }
    function th(e) {
      let { isPending: t } = e
      return t
    }
    function tg(e) {
      let { logoRequest: t } = e
      return null != t
    }
    function tm(e) {
      let { logoRequest: t } = e
      return null == t ? [] : [(0, te.xd)(t)]
    }
    function tf(e) {
      let t = e?.trim()
      return t?.startsWith("/") ? new URL(t, "https://chatgpt.com").href : t
    }
    function ty(e) {
      let t,
        s,
        a,
        o = (0, i.c)(7),
        { app: r, description: c, control: l } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(d.A, { ...(0, eW.sl)("chatgpt.plugins.invoke") })), (o[0] = t))
          : (t = o[0]),
        o[1] !== r || o[2] !== c
          ? ((s = c ?? (0, n.jsx)(d.A, { ...(0, eW.$Z)("chatgpt.plugins.invoke"), values: { appName: r.name } })),
            (o[1] = r),
            (o[2] = c),
            (o[3] = s))
          : (s = o[3]),
        o[4] !== l || o[5] !== s
          ? ((a = (0, n.jsx)(O.ic, {
              className: "max-sm:flex-col max-sm:items-stretch",
              label: t,
              description: s,
              control: l,
            })),
            (o[4] = l),
            (o[5] = s),
            (o[6] = a))
          : (a = o[6]),
        a
      )
    }
    let tx = new Map(Object.entries(eW.hX)),
      tv = new Map(Object.entries(eW.N5)),
      tC = new Set(["openid", "profile", "email"]),
      tb = new Set([
        "chatgpt.tokens.use.obo",
        "chatgpt.tokens.use.direct",
        "chatpass.enable.request",
        "chatpass.enable.request.direct",
      ])
    function t_(e) {
      let t,
        s,
        p,
        h,
        g,
        m,
        f,
        y,
        x,
        v,
        C,
        b,
        _,
        j,
        A,
        k,
        M,
        P,
        I,
        G,
        S,
        T = (0, i.c)(107),
        { accountId: N, onBack: E } = e,
        D = (0, eB.A)(),
        R = (0, u.zy)(),
        q = (0, u.Zp)(),
        [U] = (0, u.ok)(),
        F = (0, a.jE)(),
        H = (0, c.Ul)(e1.YV)
      ;(T[0] !== N ? ((t = (0, en.dI)(N)), (T[0] = N), (T[1] = t)) : (t = T[1]),
        T[2] !== t.linkedApps
          ? (({ staleTime: p, ...s } = t.linkedApps), (T[2] = t.linkedApps), (T[3] = s), (T[4] = p))
          : ((s = T[3]), (p = T[4])),
        T[5] !== s || T[6] !== p
          ? ((h = { ...s, staleTime: p, refetchOnWindowFocus: "always" }), (T[5] = s), (T[6] = p), (T[7] = h))
          : (h = T[7]))
      let { data: V, isError: W, isFetching: z, refetch: B } = (0, o.I)(h)
      T[8] !== U ? ((g = U.get("client_id")), (T[8] = U), (T[9] = g)) : (g = T[9])
      let Z = g
      T[10] !== R.hash || T[11] !== R.pathname || T[12] !== R.state || T[13] !== q || T[14] !== U
        ? ((m = (e) => {
            let t = new URLSearchParams(U)
            ;(null == e ? t.delete("client_id") : t.set("client_id", e),
              q(
                { pathname: R.pathname, search: 0 === t.size ? "" : `?${t.toString()}`, hash: R.hash },
                { replace: !0, state: R.state },
              ))
          }),
          (T[10] = R.hash),
          (T[11] = R.pathname),
          (T[12] = R.state),
          (T[13] = q),
          (T[14] = U),
          (T[15] = m))
        : (m = T[15])
      let Y = m,
        [Q, $] = (0, l.useState)(null),
        [X, J] = (0, l.useState)(!1),
        ee = (0, l.useRef)(null),
        es = (0, l.useRef)(null),
        [ei, ea] = (0, l.useState)(""),
        [eo, er] = (0, l.useState)(null)
      T[16] !== V?.third_party_items || T[17] !== X || T[18] !== Z || T[19] !== Q
        ? ((f =
            (X ? Q : null) ??
            V?.third_party_items?.find((e) => {
              let { id: t } = e
              return t === Z
            }) ??
            Q),
          (T[16] = V?.third_party_items),
          (T[17] = X),
          (T[18] = Z),
          (T[19] = Q),
          (T[20] = f))
        : (f = T[20])
      let ec = f
      T[21] !== ec?.scopes ? ((y = ec?.scopes?.some(tP) ?? !1), (T[21] = ec?.scopes), (T[22] = y)) : (y = T[22])
      let el = y
      ;(T[23] !== N
        ? ((x = (e) =>
            en.IN.safeDelete("/client_applications/{client_id}", {
              additionalHeaders: { "ChatGPT-Account-ID": N },
              parameters: { path: { client_id: e } },
            })),
          (T[23] = N),
          (T[24] = x))
        : (x = T[24]),
        T[25] !== s || T[26] !== F
          ? ((v = async (e, t) => {
              ;(await F.cancelQueries({ queryKey: s.queryKey }),
                F.setQueryData(s.queryKey, (e) => (null == e ? e : { ...e, items: e.items.filter((e) => e.id !== t) })),
                er(null),
                await F.invalidateQueries({ queryKey: s.queryKey }))
            }),
            (T[25] = s),
            (T[26] = F),
            (T[27] = v))
          : (v = T[27]),
        T[28] !== x || T[29] !== v
          ? ((C = { mutationFn: x, onSuccess: v }), (T[28] = x), (T[29] = v), (T[30] = C))
          : (C = T[30]))
      let ed = (0, r.n)(C),
        eu = V?.third_party_items?.filter(tM),
        ep = V?.third_party_items?.filter(tk)
      T[31] !== U ? ((b = U.get("tab")), (T[31] = U), (T[32] = b)) : (b = T[32])
      let eh = b,
        eg = "apps" === eh || "sites" === eh ? eh : "all",
        em = { apps: ep, sites: eu },
        ef = "all" === eg || z || W || em[eg]?.length ? eg : "all",
        ey = null == ec && ((null != eh && "all" === eg) || (!z && !W && null != V && eg !== ef))
      ;(T[33] !== R.hash || T[34] !== R.pathname || T[35] !== R.state || T[36] !== q || T[37] !== U || T[38] !== ey
        ? ((_ = () => {
            if (
              (es.current?.isConnected === !1 &&
                ee.current?.querySelector('[role="tab"][aria-selected="true"]')?.focus(),
              !ey)
            )
              return
            let e = new URLSearchParams(U)
            ;(e.delete("tab"),
              q(
                { pathname: R.pathname, search: 0 === e.size ? "" : `?${e.toString()}`, hash: R.hash },
                { replace: !0, state: R.state },
              ))
          }),
          (T[33] = R.hash),
          (T[34] = R.pathname),
          (T[35] = R.state),
          (T[36] = q),
          (T[37] = U),
          (T[38] = ey),
          (T[39] = _))
        : (_ = T[39]),
        T[40] !== ef ||
        T[41] !== R.hash ||
        T[42] !== R.pathname ||
        T[43] !== R.state ||
        T[44] !== q ||
        T[45] !== U ||
        T[46] !== ey
          ? ((j = [ef, R.hash, R.pathname, R.state, q, U, ey]),
            (T[40] = ef),
            (T[41] = R.hash),
            (T[42] = R.pathname),
            (T[43] = R.state),
            (T[44] = q),
            (T[45] = U),
            (T[46] = ey),
            (T[47] = j))
          : (j = T[47]),
        (0, l.useLayoutEffect)(_, j))
      let ex = ei.trim().toLocaleLowerCase(D.locale),
        ev = ei.trim().toLowerCase(),
        eC = ("all" === ef ? V?.third_party_items : em[ef])?.filter(
          (e) => e.name.toLocaleLowerCase(D.locale).includes(ex) || tI(e)?.toLowerCase().includes(ev),
        ),
        eb = V?.items.filter((e) => "all" === ef && e.name.toLocaleLowerCase(D.locale).includes(ex))
      if (null == V) {
        let e, t
        ;(T[48] !== B ? ((e = () => void B()), (T[48] = B), (T[49] = e)) : (e = T[49]),
          T[50] !== W || T[51] !== e
            ? ((t = (0, n.jsx)(K.mK, { isError: W, onRetry: e })), (T[50] = W), (T[51] = e), (T[52] = t))
            : (t = T[52]),
          (A = t))
      } else if (null != ec) {
        let e, t, s, i
        ;(T[53] !== Y ? ((e = () => Y(null)), (T[53] = Y), (T[54] = e)) : (e = T[54]),
          T[55] !== ec
            ? ((t = (e, t) => {
                ;($(e ? ec : null), J(e && !!t))
              }),
              (T[55] = ec),
              (T[56] = t))
            : (t = T[56]),
          T[57] !== N || T[58] !== e || T[59] !== t
            ? ((s = { accountId: N, onDisconnected: e, onDisconnectingChange: t }),
              (T[57] = N),
              (T[58] = e),
              (T[59] = t),
              (T[60] = s))
            : (s = T[60]),
          T[61] !== el || T[62] !== ec || T[63] !== s
            ? ((i = (0, n.jsx)(tG, { app: ec, hasIdentity: el, management: s }, ec.id)),
              (T[61] = el),
              (T[62] = ec),
              (T[63] = s),
              (T[64] = i))
            : (i = T[64]),
          (A = i))
      } else if (0 !== V.items.length || V.third_party_items?.length) {
        let e, t, s, i, a, o, r
        ;(T[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (e) => {
              es.current = "tab" === e.target.getAttribute("role") ? e.target : null
            }),
            (t = () => {
              es.current = null
            }),
            (T[66] = e),
            (T[67] = t))
          : ((e = T[66]), (t = T[67])),
          T[68] !== R.hash || T[69] !== R.pathname || T[70] !== R.state || T[71] !== q || T[72] !== U
            ? ((s = (e) => {
                let t = new URLSearchParams(U)
                ;("all" === e ? t.delete("tab") : t.set("tab", e),
                  q(
                    { pathname: R.pathname, search: 0 === t.size ? "" : `?${t.toString()}`, hash: R.hash },
                    { replace: !0, state: R.state },
                  ))
              }),
              (T[68] = R.hash),
              (T[69] = R.pathname),
              (T[70] = R.state),
              (T[71] = q),
              (T[72] = U),
              (T[73] = s))
            : (s = T[73]),
          T[74] !== D
            ? ((i = D.formatMessage({
                id: "settings.chatGpt.security.linkedApps.tabs.appsAndSites",
                defaultMessage: "Connected apps and sites",
              })),
              (T[74] = D),
              (T[75] = i))
            : (i = T[75]),
          T[76] !== D
            ? ((a = D.formatMessage({
                id: "settings.chatGpt.security.linkedApps.search.appsAndSites",
                defaultMessage: "Search apps and sites",
              })),
              (T[76] = D),
              (T[77] = a))
            : (a = T[77]),
          T[78] !== D
            ? ((o = D.formatMessage({
                id: "settings.chatGpt.security.linkedApps.searchPlaceholder",
                defaultMessage: "Search",
              })),
              (T[78] = D),
              (T[79] = o))
            : (o = T[79]),
          T[80] !== ei || T[81] !== a || T[82] !== o
            ? ((r = (0, n.jsx)(eY.s, {
                id: "linked-apps-search",
                className: "w-full",
                variant: "toolbar",
                inputRole: "searchbox",
                label: a,
                placeholder: o,
                searchQuery: ei,
                onSearchQueryChange: ea,
              })),
              (T[80] = ei),
              (T[81] = a),
              (T[82] = o),
              (T[83] = r))
            : (r = T[83]),
          (A = (0, n.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [
              (0, n.jsx)(eQ.uC, {
                inset: !1,
                children: (0, n.jsxs)("div", {
                  className: "flex w-full flex-wrap items-center justify-between gap-4",
                  onFocusCapture: e,
                  onBlurCapture: t,
                  children: [
                    (0, n.jsx)(e$.t, {
                      tabListRef: ee,
                      variant: "toolbar",
                      scrollable: !0,
                      selectedKey: ef,
                      onSelect: s,
                      ariaLabel: i,
                      tabs: [
                        {
                          key: "all",
                          name: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.allWithCount",
                            defaultMessage: "All <count>{total, number}</count>",
                            values: { total: V.items.length + (V.third_party_items?.length ?? 0), count: tw },
                          }),
                        },
                        {
                          key: "apps",
                          name: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.thirdPartyWithCount",
                            defaultMessage: "Apps <count>{total, number}</count>",
                            values: { total: ep?.length ?? 0, count: tA },
                          }),
                        },
                        {
                          key: "sites",
                          name: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.sitesWithCount",
                            defaultMessage: "Sites <count>{total, number}</count>",
                            values: { total: eu?.length ?? 0, count: tj },
                          }),
                        },
                      ].filter((e) => {
                        let { key: t } = e
                        return "all" === t || t === ef || em[t]?.length
                      }),
                    }),
                    r,
                  ],
                }),
              }),
              (eC?.length ?? 0) + (eb?.length ?? 0) === 0
                ? (0, n.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.noMatches.appsOrSites",
                      defaultMessage: "No apps or sites found",
                    }),
                  })
                : (0, n.jsxs)(w.t, {
                    children: [
                      eC?.map((e) => {
                        let t = e.description?.trim()
                        return (0, n.jsx)(
                          O.kG,
                          {
                            edgeRounding: "surface",
                            icon: (0, n.jsx)(e3.y, { app: e }),
                            label: (0, n.jsx)("span", { className: "block truncate select-text", children: e.name }),
                            description: t
                              ? (0, n.jsx)("span", { className: "block truncate select-text", children: t })
                              : void 0,
                            onClick: (t) => {
                              let s = t.currentTarget.ownerDocument.getSelection()
                              ;(0 !== t.detail &&
                                s?.isCollapsed === !1 &&
                                (t.currentTarget.contains(s.anchorNode) || t.currentTarget.contains(s.focusNode))) ||
                                (Y(e.id), B())
                            },
                            trailing: (0, n.jsx)(et.I, { asset: ez.R }),
                          },
                          e.id,
                        )
                      }),
                      eb?.map((e) =>
                        (0, n.jsx)(
                          O.ic,
                          {
                            icon: (0, n.jsx)(e3.O, { app: e }),
                            label: (0, n.jsx)("span", { className: "select-text", children: e.name }),
                            description: (0, n.jsx)(tq, { type: e.type }),
                            control: (0, n.jsx)(L.$, {
                              color: "danger",
                              size: "toolbar",
                              onClick: () => {
                                ;(ed.reset(), er(e))
                              },
                              children: (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.linkedApps.disconnect",
                                defaultMessage: "Disconnect",
                              }),
                            }),
                          },
                          e.id,
                        ),
                      ),
                    ],
                  }),
            ],
          })))
      } else {
        let e
        ;(T[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.linkedApps.empty",
                defaultMessage:
                  "You haven\u2019t used ChatGPT to sign into any websites or apps yet. Once you do, they\u2019ll show up here.",
              }),
            })),
            (T[65] = e))
          : (e = T[65]),
          (A = e))
      }
      return (
        T[84] !== ec
          ? ((k =
              null != ec
                ? void 0
                : (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.signInWithChatGpt.title",
                    defaultMessage: "Sign in with ChatGPT",
                  })),
            (T[84] = ec),
            (T[85] = k))
          : (k = T[85]),
        T[86] !== E || T[87] !== ec || T[88] !== Y
          ? ((M =
              null == ec
                ? E
                : () => {
                    ;(Y(null), $(null), J(!1))
                  }),
            (T[86] = E),
            (T[87] = ec),
            (T[88] = Y),
            (T[89] = M))
          : (M = T[89]),
        T[90] !== ec
          ? ((P =
              null == ec
                ? (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.description",
                    defaultMessage:
                      "Review other apps and sites you\u2019ve signed in to with ChatGPT, and manage what they can access",
                  })
                : void 0),
            (T[90] = ec),
            (T[91] = P))
          : (P = T[91]),
        T[92] !== V || T[93] !== W || T[94] !== B
          ? ((I = null != V && W ? (0, n.jsx)(K.mK, { isError: !0, onRetry: () => void B() }) : null),
            (T[92] = V),
            (T[93] = W),
            (T[94] = B),
            (T[95] = I))
          : (I = T[95]),
        T[96] !== ed || T[97] !== eo || T[98] !== H
          ? ((G =
              null == eo
                ? null
                : (0, n.jsx)(K.i$, {
                    title: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.disconnectTitle",
                      defaultMessage: "Disconnect {name}?",
                      values: { name: eo.name },
                    }),
                    confirmLabel: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.disconnect",
                      defaultMessage: "Disconnect",
                    }),
                    onConfirm: () => {
                      ;(H.logProductEvent(eV.CodexAccountSettingsConnectedAppDisconnectConfirmed, {
                        applicationId: eo.id,
                        applicationType: eo.type,
                      }),
                        ed.mutate(eo.id))
                    },
                    onClose: () => er(null),
                    isPending: ed.isPending,
                    isError: ed.isError,
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.removeSignInConnectionDescription.v2",
                      defaultMessage:
                        "Disconnecting ends {name}\u2019s access through ChatGPT. It may still keep information you\u2019ve already shared, such as your name or email.",
                      values: { name: eo.name },
                    }),
                  })),
            (T[96] = ed),
            (T[97] = eo),
            (T[98] = H),
            (T[99] = G))
          : (G = T[99]),
        T[100] !== A || T[101] !== k || T[102] !== M || T[103] !== P || T[104] !== I || T[105] !== G
          ? ((S = (0, n.jsxs)(K.kU, { title: k, onBack: M, subtitle: P, children: [I, A, G] })),
            (T[100] = A),
            (T[101] = k),
            (T[102] = M),
            (T[103] = P),
            (T[104] = I),
            (T[105] = G),
            (T[106] = S))
          : (S = T[106]),
        S
      )
    }
    function tj(e) {
      return (0, n.jsx)("span", { className: "text-tertiary", children: e })
    }
    function tA(e) {
      return (0, n.jsx)("span", { className: "text-tertiary", children: e })
    }
    function tw(e) {
      return (0, n.jsx)("span", { className: "text-tertiary", children: e })
    }
    function tk(e) {
      let { client_app_type: t } = e
      return "codex_generated_site" !== t
    }
    function tM(e) {
      let { client_app_type: t } = e
      return "codex_generated_site" === t
    }
    function tP(e) {
      return tC.has(e)
    }
    function tI(e) {
      try {
        let t = new URL(e.client_uri ?? "")
        return "https:" === t.protocol || "http:" === t.protocol ? t.href : null
      } catch {
        return null
      }
    }
    function tG(e) {
      let t,
        s,
        a,
        o,
        r,
        c,
        u,
        p,
        h,
        g,
        m,
        f = (0, i.c)(47),
        { app: y, hasIdentity: x, management: v } = e,
        C = (0, l.useRef)(null)
      f[0] !== y.scopes || f[1] !== x
        ? ((t = x && !!y.scopes?.every(tD)), (f[0] = y.scopes), (f[1] = x), (f[2] = t))
        : (t = f[2])
      let b = t
      f[3] !== y.scopes || f[4] !== v
        ? ((s = null != v && y.scopes?.some(tL)), (f[3] = y.scopes), (f[4] = v), (f[5] = s))
        : (s = f[5])
      let j = s
      f[6] !== y.scopes || f[7] !== v
        ? ((a = null != v && y.scopes?.includes("chatgpt.plugins.invoke")), (f[6] = y.scopes), (f[7] = v), (f[8] = a))
        : (a = f[8])
      let A = a
      if (f[9] !== y || f[10] !== x || f[11] !== v || f[12] !== j || f[13] !== A) {
        let e,
          t,
          s,
          i,
          a,
          l = ["ads.admin.all.read", "ads.admin.all.write"].filter((e) => y.scopes?.includes(e))
        ;((o = l.length > 0),
          f[19] !== y.resource_grants
            ? ((e = y.resource_grants?.find(tE)), (f[19] = y.resource_grants), (f[20] = e))
            : (e = f[20]))
        let h = e
        f[21] !== y.resource_grants
          ? ((t = y.resource_grants?.find(tN)), (f[21] = y.resource_grants), (f[22] = t))
          : (t = f[22])
        let g = t,
          m = y.disconnect_target
        ;(f[23] !== y.resource_grants || f[24] !== m
          ? ((s =
              m?.type === "workspace_grant" &&
              !y.resource_grants?.some((e) => {
                let { disconnect_target: t } = e
                return (
                  "workspace_grant" === t.type &&
                  t.workspace_id === m.workspace_id &&
                  t.authorization_transaction_id === m.authorization_transaction_id
                )
              })),
            (f[23] = y.resource_grants),
            (f[24] = m),
            (f[25] = s))
          : (s = f[25]),
          (c = s))
        let b = y.scopes?.filter(eW.ul)
        ;((r = b?.length !== y.scopes?.length),
          (u = new Map(
            b
              ?.filter(
                (e) =>
                  (null == v || "offline_access" !== e) &&
                  (!x || !tC.has(e)) &&
                  (!j || !tb.has(e)) &&
                  (!A || "chatgpt.plugins.invoke" !== e) &&
                  !l.some((t) => t === e),
              )
              .map(tT),
          )),
          f[26] !== y ? ((i = tI(y)), (f[26] = y), (f[27] = i)) : (i = f[27]))
        let k = i,
          M = null == y.linked_at ? null : Date.parse(y.linked_at)
        f[28] !== y.name
          ? ((a = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.sharedWith",
              defaultMessage: "Shared with {name}",
              values: { name: y.name },
            })),
            (f[28] = y.name),
            (f[29] = a))
          : (a = f[29])
        let P = a
        ;((p =
          x || null != v || o
            ? (0, n.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex min-w-0 items-center gap-4",
                    children: [
                      (0, n.jsx)(e3.y, { app: y, size: "detail", borderless: !0 }),
                      (0, n.jsx)("div", {
                        className: "min-w-0 flex-1",
                        children: (0, n.jsx)(eZ.z, {
                          variant: "settings",
                          subtitleClassName: "flex flex-col gap-1 text-sm",
                          title: (0, n.jsx)("span", {
                            ref: C,
                            tabIndex: -1,
                            className: "select-text",
                            children: y.name,
                          }),
                          subtitle:
                            null == k && (null == M || Number.isNaN(M))
                              ? void 0
                              : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    null == k
                                      ? null
                                      : (0, n.jsx)("span", { className: "break-all select-text", children: k }),
                                    null == M || Number.isNaN(M)
                                      ? null
                                      : (0, n.jsx)(d.A, {
                                          id: "settings.chatGpt.security.linkedApps.connectedOn",
                                          defaultMessage: "Connected on {timestamp, date, long}",
                                          values: { timestamp: M },
                                        }),
                                  ],
                                }),
                        }),
                      }),
                    ],
                  }),
                  x || j || o
                    ? (0, n.jsxs)(_.X, {
                        children: [
                          (0, n.jsx)(_.X.Header, { title: (0, n.jsx)("h2", { children: P }) }),
                          (0, n.jsxs)(_.X.Content, {
                            className: "gap-4",
                            children: [
                              x
                                ? (0, n.jsx)(w.t, {
                                    children: (0, n.jsx)(O.ic, {
                                      label: (0, n.jsx)("h3", {
                                        children: (0, n.jsx)(d.A, { ...(0, eW.sl)("openid") }),
                                      }),
                                      description: (0, n.jsx)(d.A, { ...(0, eW.$Z)("openid") }),
                                      control: null,
                                    }),
                                  })
                                : null,
                              j
                                ? (0, n.jsx)(w.t, {
                                    children: (0, n.jsx)(tR, {
                                      app: y,
                                      successFocusRef: C,
                                      resourceGrant: h,
                                      management: v,
                                    }),
                                  })
                                : null,
                              o || (null != g && null != v)
                                ? (0, n.jsxs)(w.t, {
                                    children: [
                                      null != g && null != v
                                        ? (0, n.jsx)(O.ic, {
                                            className: "max-sm:flex-col max-sm:items-stretch",
                                            label: (0, n.jsx)("h3", {
                                              children: (0, n.jsx)(d.A, {
                                                id: "settings.chatGpt.security.linkedApps.resource.ads.title",
                                                defaultMessage: "Ads Manager",
                                              }),
                                            }),
                                            description: (0, n.jsx)(d.A, {
                                              id: "settings.chatGpt.security.linkedApps.resource.ads.scope",
                                              defaultMessage: "Your Ads accounts",
                                            }),
                                            control: (0, n.jsx)(
                                              e0,
                                              {
                                                app: y,
                                                accountId: v.accountId,
                                                isIdentityOnly: !1,
                                                resourceGrant: g,
                                                successFocusRef: C,
                                                onDisconnected: v.onDisconnected,
                                                onDisconnectingChange: v.onDisconnectingChange,
                                              },
                                              g.disconnect_target.authorization_transaction_id,
                                            ),
                                          })
                                        : null,
                                      l.map(tS),
                                    ],
                                  })
                                : null,
                              A && null != v
                                ? (0, n.jsx)(w.t, { children: (0, n.jsx)(tc, { app: y, accountId: v.accountId }) })
                                : null,
                            ],
                          }),
                        ],
                      })
                    : null,
                  x || j || o || !A || null == v
                    ? null
                    : (0, n.jsx)(tc, { app: y, accountId: v.accountId, groupTitle: P }),
                ],
              })
            : (null != k || (null != M && !Number.isNaN(M))) &&
              (0, n.jsxs)(_.X, {
                children: [
                  (0, n.jsx)(_.X.Header, {
                    title: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.details",
                      defaultMessage: "Details",
                    }),
                  }),
                  (0, n.jsxs)(_.X.Content, {
                    children: [
                      null == k
                        ? null
                        : (0, n.jsx)(w.t, {
                            children: (0, n.jsx)(O.ic, {
                              description: (0, n.jsx)(d.A, {
                                id: "settings.security.linkedAppWebsite.help",
                                defaultMessage: "Visit the website associated with this app",
                              }),
                              label: (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.linkedApps.website",
                                defaultMessage: "Website",
                              }),
                              control: (0, n.jsx)("span", { className: "break-all select-text", children: k }),
                              controlSizing: "grow",
                            }),
                          }),
                      null == M || Number.isNaN(M)
                        ? null
                        : (0, n.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.linkedApps.linkedAt",
                              defaultMessage: "Linked on {timestamp, date, medium} at {timestamp, time, short}",
                              values: { timestamp: M },
                            }),
                          }),
                    ],
                  }),
                ],
              })),
          (f[9] = y),
          (f[10] = x),
          (f[11] = v),
          (f[12] = j),
          (f[13] = A),
          (f[14] = o),
          (f[15] = r),
          (f[16] = c),
          (f[17] = u),
          (f[18] = p))
      } else ((o = f[14]), (r = f[15]), (c = f[16]), (u = f[17]), (p = f[18]))
      return (
        f[30] !== y.name || f[31] !== o || f[32] !== r || f[33] !== x || f[34] !== u || f[35] !== j || f[36] !== A
          ? ((h =
              ((!r && !x && !j && !A && !o) || u.size > 0) &&
              (0, n.jsxs)(_.X, {
                children: [
                  (0, n.jsx)(_.X.Header, {
                    title: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.permissions",
                      defaultMessage: "Permissions",
                    }),
                  }),
                  (0, n.jsx)(_.X.Content, {
                    children:
                      u.size > 0
                        ? (0, n.jsx)("div", {
                            role: "list",
                            children: (0, n.jsx)(w.t, {
                              children: Array.from(u, (e) => {
                                let [t, s] = e
                                return (0, n.jsx)(
                                  "div",
                                  {
                                    role: "listitem",
                                    children: (0, n.jsx)(O.ic, {
                                      label: "string" == typeof s ? s : (0, n.jsx)(d.A, { ...s.title }),
                                      description:
                                        "string" != typeof s && null != s.description
                                          ? (0, n.jsx)(d.A, { ...s.description, values: { appName: y.name } })
                                          : void 0,
                                      control: null,
                                    }),
                                  },
                                  t,
                                )
                              }),
                            }),
                          })
                        : (0, n.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.linkedApps.noPermissions",
                              defaultMessage: "No permissions granted",
                            }),
                          }),
                  }),
                ],
              })),
            (f[30] = y.name),
            (f[31] = o),
            (f[32] = r),
            (f[33] = x),
            (f[34] = u),
            (f[35] = j),
            (f[36] = A),
            (f[37] = h))
          : (h = f[37]),
        f[38] !== y || f[39] !== c || f[40] !== b || f[41] !== v
          ? ((g =
              null != v && (!y.resource_grants?.length || c)
                ? (0, n.jsx)(e0, {
                    app: y,
                    accountId: v.accountId,
                    isIdentityOnly: b,
                    onDisconnected: v.onDisconnected,
                    onDisconnectingChange: v.onDisconnectingChange,
                  })
                : null),
            (f[38] = y),
            (f[39] = c),
            (f[40] = b),
            (f[41] = v),
            (f[42] = g))
          : (g = f[42]),
        f[43] !== p || f[44] !== h || f[45] !== g
          ? ((m = (0, n.jsxs)(n.Fragment, { children: [p, h, g] })), (f[43] = p), (f[44] = h), (f[45] = g), (f[46] = m))
          : (m = f[46]),
        m
      )
    }
    function tS(e) {
      return (0, n.jsx)(
        O.ic,
        {
          label: (0, n.jsx)(d.A, { ...(0, eW.sl)(e) }),
          description: (0, n.jsx)(d.A, { ...(0, eW.$Z)(e) }),
          control: null,
        },
        e,
      )
    }
    function tT(e) {
      let t = tx.get(e)
      return [t?.id ?? `scope:${e}`, null == t ? e : { title: t, description: tv.get(e) }]
    }
    function tN(e) {
      let { resource: t } = e
      return "ads" === t
    }
    function tE(e) {
      let { resource: t } = e
      return "chatgpt_plan" === t
    }
    function tL(e) {
      return tb.has(e)
    }
    function tD(e) {
      return tC.has(e) || "offline_access" === e
    }
    function tR(e) {
      let t,
        s,
        a,
        o,
        r,
        l,
        p,
        h,
        g,
        m,
        y = (0, i.c)(31),
        { app: x, resourceGrant: v, successFocusRef: C, management: b } = e,
        { data: _ } = (0, f.oV)()
      y[0] !== _?.accounts || y[1] !== b?.accountId
        ? ((t = _?.accounts?.find((e) => {
            let { id: t } = e
            return t === b?.accountId
          })),
          (y[0] = _?.accounts),
          (y[1] = b?.accountId),
          (y[2] = t))
        : (t = y[2])
      let j = t,
        A = (0, u.Zp)(),
        { data: w } = (0, c.Ul)(eJ.Ix),
        { isUsageSettingsVisible: k, isUsageSettingsAccessLoading: M } = (0, eX.AH)(w?.credits?.balance != null)
      return (
        y[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)("h3", { children: (0, n.jsx)(d.A, { ...(0, eW.sl)("chatpass.enable.request") }) })),
            (y[3] = s))
          : (s = y[3]),
        y[4] !== j?.name || y[5] !== j?.structure || y[6] !== v
          ? ((a =
              null != v
                ? (0, n.jsx)("p", {
                    className: "mb-1",
                    children:
                      j?.structure === "personal"
                        ? (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.resource.plan.personalWorkspace",
                            defaultMessage: "Personal workspace",
                          })
                        : j?.name ||
                          (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.resource.plan.currentWorkspace",
                            defaultMessage: "This workspace",
                          }),
                  })
                : null),
            (y[4] = j?.name),
            (y[5] = j?.structure),
            (y[6] = v),
            (y[7] = a))
          : (a = y[7]),
        y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, eW.$Z)("chatpass.enable.request")), (y[8] = o))
          : (o = y[8]),
        y[9] !== x.name
          ? ((r = (0, n.jsx)(d.A, { ...o, values: { appName: x.name } })), (y[9] = x.name), (y[10] = r))
          : (r = y[10]),
        y[11] !== a || y[12] !== r
          ? ((l = (0, n.jsxs)(n.Fragment, { children: [a, r] })), (y[11] = a), (y[12] = r), (y[13] = l))
          : (l = y[13]),
        y[14] !== M || y[15] !== k || y[16] !== A
          ? ((p =
              k && !M
                ? (0, n.jsx)(L.$, {
                    color: "secondary",
                    size: "toolbar",
                    onClick: () => void A("/settings/usage"),
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.plan.manageUsage",
                      defaultMessage: "Manage usage",
                    }),
                  })
                : null),
            (y[14] = M),
            (y[15] = k),
            (y[16] = A),
            (y[17] = p))
          : (p = y[17]),
        y[18] !== j?.name || y[19] !== j?.structure || y[20] !== x || y[21] !== b || y[22] !== v || y[23] !== C
          ? ((h =
              null != v && null != b
                ? (0, n.jsx)(
                    e0,
                    {
                      app: x,
                      accountId: b.accountId,
                      isIdentityOnly: !1,
                      resourceGrant: v,
                      successFocusRef: C,
                      workspaceName: j?.name,
                      isPersonalWorkspace: j?.structure === "personal",
                      onDisconnected: b.onDisconnected,
                      onDisconnectingChange: b.onDisconnectingChange,
                    },
                    v.disconnect_target.authorization_transaction_id,
                  )
                : null),
            (y[18] = j?.name),
            (y[19] = j?.structure),
            (y[20] = x),
            (y[21] = b),
            (y[22] = v),
            (y[23] = C),
            (y[24] = h))
          : (h = y[24]),
        y[25] !== p || y[26] !== h
          ? ((g = (0, n.jsxs)("div", { className: "flex flex-col items-end gap-2", children: [p, h] })),
            (y[25] = p),
            (y[26] = h),
            (y[27] = g))
          : (g = y[27]),
        y[28] !== l || y[29] !== g
          ? ((m = (0, n.jsx)(O.ic, {
              className: "max-sm:flex-col max-sm:items-stretch",
              label: s,
              description: l,
              control: g,
            })),
            (y[28] = l),
            (y[29] = g),
            (y[30] = m))
          : (m = y[30]),
        m
      )
    }
    function tq(e) {
      let t = (0, i.c)(5),
        { type: s } = e
      switch (s) {
        case "codex_cli": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.linkedApps.codexDescription",
                  defaultMessage: "Allow Codex CLI to use models from the API",
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        }
        case "apple": {
          let e
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.linkedApps.appleDescription",
                  defaultMessage:
                    "Get personalized ChatGPT responses and Plus benefits when using Siri and Writing Tools",
                })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "kakao_talk": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.linkedApps.kakaoDescription",
                  defaultMessage: "ChatGPT in KakaoTalk",
                })),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        }
        case "viber": {
          let e
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.linkedApps.viberDescription",
                  defaultMessage: "ChatGPT in Viber",
                })),
                (t[3] = e))
              : (e = t[3]),
            e
          )
        }
        case "oai_apps": {
          let e
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.linkedApps.signedIn",
                  defaultMessage: "Signed in with ChatGPT",
                })),
                (t[4] = e))
              : (e = t[4]),
            e
          )
        }
      }
    }
    var tO = s("h5qp")
    function tU(e) {
      let t,
        s,
        a,
        c,
        l,
        u,
        p,
        h,
        g,
        m,
        f,
        x = (0, i.c)(27),
        { accountId: v, passkeyCount: C, onOpenPasskeys: j } = e
      x[0] !== v ? ((t = (0, en.dI)(v)), (x[0] = v), (x[1] = t)) : (t = x[1])
      let { data: A, isSuccess: k } = (0, o.I)(t.changePassword)
      x[2] !== v ? ((s = (0, en.dI)(v)), (x[2] = v), (x[3] = s)) : (s = x[3])
      let { data: M, isSuccess: P } = (0, o.I)(s.addPassword)
      x[4] !== v ? ((a = (0, en.dI)(v)), (x[4] = v), (x[5] = a)) : (a = x[5])
      let { data: I, isSuccess: G } = (0, o.I)(a.protection)
      x[6] === Symbol.for("react.memo_cache_sentinel") ? ((c = { mutationFn: eC.Fz }), (x[6] = c)) : (c = x[6])
      let S = (0, r.n)(c),
        T = I?.advanced_protection_mode_enabled === !0,
        N = k ? !0 === A.eligible : void 0,
        E = P ? !0 === M.eligible : void 0
      x[7] !== N || x[8] !== E ? ((l = (0, tO.gE)(N, E)), (x[7] = N), (x[8] = E), (x[9] = l)) : (l = x[9])
      let L = l
      return null == L && null == C
        ? null
        : (x[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, n.jsx)(_.X.Header, {
                title: (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.loginMethods.title",
                  defaultMessage: "How you log in",
                }),
              })),
              (x[10] = u))
            : (u = x[10]),
          x[11] !== j || x[12] !== C
            ? ((p =
                null != C
                  ? (0, n.jsx)(b.kk, {
                      className: "select-none",
                      edgeRounding: "surface",
                      entry: tO.B4.passkeys,
                      description: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.passkeys.description",
                        defaultMessage: "Use a phishing-resistant alternative to passwords",
                      }),
                      onClick: j,
                      trailing: (0, n.jsxs)(n.Fragment, {
                        children: [
                          0 === C
                            ? (0, n.jsx)(d.A, { id: "settings.chatGpt.security.passkeys.add", defaultMessage: "Add" })
                            : C,
                          (0, n.jsx)(y.uM3, {}),
                        ],
                      }),
                    })
                  : null),
              (x[11] = j),
              (x[12] = C),
              (x[13] = p))
            : (p = x[13]),
          x[14] !== L || x[15] !== T || x[16] !== S || x[17] !== G
            ? ((h =
                null != L
                  ? (0, n.jsx)(b.kk, {
                      className: "select-none",
                      edgeRounding: "surface",
                      entry: tO.B4.password,
                      description: T
                        ? (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.password.advancedProtectionDescription",
                            defaultMessage: "Password sign-in is disabled while Advanced account security is enabled",
                          })
                        : (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.password.description",
                            defaultMessage: "Manage the password you use to log in",
                          }),
                      disabled: !G || T || S.isPending || (S.isSuccess && "failed" !== S.data),
                      onClick: () => S.mutate(L, { onSuccess: tK }),
                      trailing: (0, n.jsxs)(n.Fragment, {
                        children: [
                          T
                            ? (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.password.disabled",
                                defaultMessage: "Disabled",
                              })
                            : null,
                          T || "change" !== L
                            ? null
                            : (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.password.change",
                                defaultMessage: "Change",
                              }),
                          T || "add" !== L
                            ? null
                            : (0, n.jsx)(d.A, { id: "settings.chatGpt.security.password.add", defaultMessage: "Add" }),
                          (0, n.jsx)(y.uM3, {}),
                        ],
                      }),
                    })
                  : null),
              (x[14] = L),
              (x[15] = T),
              (x[16] = S),
              (x[17] = G),
              (x[18] = h))
            : (h = x[18]),
          x[19] !== h || x[20] !== p
            ? ((g = (0, n.jsxs)(_.X, {
                children: [u, (0, n.jsx)(_.X.Content, { children: (0, n.jsxs)(w.t, { children: [p, h] }) })],
              })),
              (x[19] = h),
              (x[20] = p),
              (x[21] = g))
            : (g = x[21]),
          x[22] !== S
            ? ((m = S.isError || "failed" === S.data ? (0, n.jsx)(eb, { onClose: () => S.reset() }) : null),
              (x[22] = S),
              (x[23] = m))
            : (m = x[23]),
          x[24] !== g || x[25] !== m
            ? ((f = (0, n.jsxs)(n.Fragment, { children: [g, m] })), (x[24] = g), (x[25] = m), (x[26] = f))
            : (f = x[26]),
          f)
    }
    function tK(e) {
      "failed" !== e && window.location.assign(e.redirectUrl)
    }
    let tF = (0, eM.a)({
      name: "ellipsis-horizontal-regular-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3, y: 10, width: 18, height: 4 },
        visualBounds: { x: 3, y: 10, width: 18, height: 4 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3, y: 10, width: 18, height: 4 },
        center: { x: 12, y: 12 },
        insets: { top: 10, right: 3, bottom: 10, left: 3 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z" fill="currentColor"/> <path d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z" fill="currentColor"/> <path d="M19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10Z" fill="currentColor"/>',
    })
    var tH = s("LKVs")
    let tV = (0, eM.a)({
      name: "security-key-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.700684, y: 0.947266, width: 13.339233, height: 13.338867 },
        visualBounds: { x: 1.700684, y: 0.947266, width: 13.339233, height: 13.338867 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.700684, y: 0.947266, width: 13.339233, height: 13.338867 },
        center: { x: 8.370301, y: 7.6167 },
        insets: { top: 0.947266, right: 0.960083, bottom: 1.713867, left: 1.700684 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.370301, y: 7.6167 }, foreground: { x: 8.370301, y: 7.6167 } },
      },
      capabilities: ["icon"],
      body: '<path d="M9.03975 1.49138C9.76546 0.765942 10.942 0.765844 11.6677 1.49138L14.4958 4.31951C15.2214 5.04515 15.2213 6.22169 14.4958 6.94744L9.12764 12.3156C8.49519 12.948 7.52094 13.0286 6.80049 12.5588L5.42256 13.9377C4.9572 14.4028 4.20233 14.4029 3.73702 13.9377L2.04952 12.2502C1.58441 11.7848 1.58441 11.03 2.04952 10.5646L3.42745 9.18572C2.95856 8.46541 3.03954 7.4916 3.67159 6.85955L9.03975 1.49138ZM2.7917 11.3068C2.7367 11.362 2.73683 11.4517 2.7917 11.507L4.4792 13.1955C4.53431 13.2505 4.62405 13.2501 4.6794 13.1955L6.02901 11.8449L4.14131 9.9572L2.7917 11.3068ZM10.9255 2.23357C10.6099 1.91808 10.0976 1.91818 9.78194 2.23357L4.41377 7.60174C4.09814 7.91738 4.0982 8.42961 4.41377 8.74529L7.2419 11.5734C7.55757 11.8891 8.06978 11.8891 8.38545 11.5734L13.7536 6.20525C14.069 5.88956 14.0692 5.37729 13.7536 5.0617L10.9255 2.23357Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var tW = s("MM0V"),
      tz = s("bqtn"),
      tB = s("zLIa")
    function tZ(e) {
      let t,
        s,
        a,
        r,
        c,
        u,
        p,
        h,
        g,
        m = (0, i.c)(35),
        { accountId: f, pending: y, onBack: x, onAction: v, onOrder: C } = e,
        _ = (0, eB.A)()
      m[0] !== f ? ((t = (0, en.dI)(f)), (m[0] = f), (m[1] = t)) : (t = m[1])
      let { data: j, isError: A, refetch: k } = (0, o.I)(t.mfa),
        [M, P] = (0, l.useState)(null),
        I = "function" == typeof PublicKeyCredential
      if (
        m[2] !== j ||
        m[3] !== _ ||
        m[4] !== A ||
        m[5] !== v ||
        m[6] !== x ||
        m[7] !== C ||
        m[8] !== y ||
        m[9] !== k
      ) {
        let e = j?.factors.passkeys.slice().sort(tY)
        ;((s = K.kU),
          (a = x),
          m[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.passkeys.listTitle",
                defaultMessage: "Passkeys & security keys",
              })),
              (c = (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.passkeys.listDescription",
                defaultMessage: "See all the active security keys and passkeys",
              })),
              (m[16] = r),
              (m[17] = c))
            : ((r = m[16]), (c = m[17])),
          m[18] !== j || m[19] !== _ || m[20] !== A || m[21] !== v || m[22] !== y
            ? ((u =
                null == j || A
                  ? void 0
                  : (0, n.jsx)(L.$, {
                      color: "primary",
                      size: "composerSmLabel",
                      disabled: y || !I,
                      "aria-label": _.formatMessage({
                        id: "settings.chatGpt.security.passkeys.addButton",
                        defaultMessage: "Add a passkey or security key",
                      }),
                      onClick: () => v({ action: "enable", factor: "passkey" }),
                      children: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.passkeys.addAction",
                        defaultMessage: "Add",
                      }),
                    })),
              (m[18] = j),
              (m[19] = _),
              (m[20] = A),
              (m[21] = v),
              (m[22] = y),
              (m[23] = u))
            : (u = m[23]),
          (p =
            null == j || A
              ? (0, n.jsx)(K.mK, { isError: A, onRetry: () => void k() })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    e?.length
                      ? (0, n.jsx)(w.t, {
                          children: e.map((e) => {
                            let t =
                                e.metadata?.factor_name?.trim() ||
                                e.metadata?.authenticator_name?.trim() ||
                                _.formatMessage({
                                  id: "settings.chatGpt.security.passkeys.fallback",
                                  defaultMessage: "Passkey",
                                }),
                              s = e.metadata?.create_time_seconds
                            return (0, n.jsx)(
                              O.ic,
                              {
                                label: t,
                                icon: (0, n.jsx)(et.I, {
                                  className: "text-secondary",
                                  asset: e.metadata?.is_security_key ? tV : tH.M,
                                }),
                                description:
                                  null == s
                                    ? void 0
                                    : (0, n.jsx)(d.A, {
                                        id: "settings.chatGpt.security.passkeys.added",
                                        defaultMessage: "Added: {timestamp, date, long}",
                                        values: { timestamp: 1e3 * s },
                                      }),
                                control: (0, n.jsxs)(tz.Ab, {
                                  triggerButton: (0, n.jsx)(L.$, {
                                    color: "ghost",
                                    size: "iconCircle",
                                    disabled: y,
                                    "aria-label": _.formatMessage(
                                      {
                                        id: "settings.chatGpt.security.passkeys.actions",
                                        defaultMessage: "Actions for {name}",
                                      },
                                      { name: t },
                                    ),
                                    children: (0, n.jsx)(et.I, { className: "text-secondary", asset: tF }),
                                  }),
                                  children: [
                                    (0, n.jsx)(tz.ms.Item, {
                                      onSelect: () => P(e),
                                      children: (0, n.jsx)(d.A, {
                                        id: "settings.chatGpt.security.passkeys.rename",
                                        defaultMessage: "Rename",
                                      }),
                                    }),
                                    (0, n.jsx)(tz.ms.Item, {
                                      tone: "danger",
                                      onSelect: () => v({ action: "disable", factor: "passkey", factorId: e.id }),
                                      children: (0, n.jsx)(d.A, {
                                        id: "settings.chatGpt.security.passkeys.delete",
                                        defaultMessage: "Delete",
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              e.id,
                            )
                          }),
                        })
                      : null,
                    I
                      ? null
                      : (0, n.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.passkeys.unsupported",
                            defaultMessage: "Your browser doesn\u2019t support passkeys",
                          }),
                        }),
                    null != C
                      ? (0, n.jsx)(b.ek, {
                          entry: es.Z9.yubikey,
                          children: (0, n.jsx)(tW.l, {
                            variant: "settings",
                            icon: (0, n.jsx)(et.I, { className: "text-secondary", asset: tV }),
                            title: (0, n.jsx)(d.A, { ...es.Z9.yubikey.title }),
                            content: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.passkeys.hardwareDescription",
                              defaultMessage: "Hardware security keys offer the strongest protection",
                            }),
                            customCtas: (0, n.jsx)(L.$, {
                              color: "outlineSurface",
                              size: "composer",
                              onClick: C,
                              children: (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.passkeys.order",
                                defaultMessage: "Order a YubiKey",
                              }),
                            }),
                          }),
                        })
                      : null,
                  ],
                })),
          (m[2] = j),
          (m[3] = _),
          (m[4] = A),
          (m[5] = v),
          (m[6] = x),
          (m[7] = C),
          (m[8] = y),
          (m[9] = k),
          (m[10] = s),
          (m[11] = a),
          (m[12] = r),
          (m[13] = c),
          (m[14] = u),
          (m[15] = p))
      } else ((s = m[10]), (a = m[11]), (r = m[12]), (c = m[13]), (u = m[14]), (p = m[15]))
      return (
        m[24] !== f || m[25] !== M
          ? ((h = null == M ? null : (0, n.jsx)(tQ, { accountId: f, passkey: M, onClose: () => P(null) }, M.id)),
            (m[24] = f),
            (m[25] = M),
            (m[26] = h))
          : (h = m[26]),
        m[27] !== s || m[28] !== a || m[29] !== r || m[30] !== c || m[31] !== u || m[32] !== p || m[33] !== h
          ? ((g = (0, n.jsxs)(s, { onBack: a, title: r, subtitle: c, action: u, children: [p, h] })),
            (m[27] = s),
            (m[28] = a),
            (m[29] = r),
            (m[30] = c),
            (m[31] = u),
            (m[32] = p),
            (m[33] = h),
            (m[34] = g))
          : (g = m[34]),
        g
      )
    }
    function tY(e, t) {
      return (t.metadata?.create_time_seconds ?? 0) - (e.metadata?.create_time_seconds ?? 0)
    }
    function tQ(e) {
      let t,
        s,
        o,
        c,
        u,
        p,
        h,
        g,
        m,
        f,
        y,
        x,
        v,
        C,
        b,
        _,
        j,
        A,
        w,
        k,
        M,
        P,
        I = (0, i.c)(57),
        { accountId: G, passkey: S, onClose: T } = e,
        N = (0, a.jE)(),
        E = S.metadata?.create_time_seconds
      I[0] !== S.metadata?.authenticator_name || I[1] !== S.metadata?.factor_name
        ? ((t = S.metadata?.factor_name?.trim() || S.metadata?.authenticator_name?.trim() || ""),
          (I[0] = S.metadata?.authenticator_name),
          (I[1] = S.metadata?.factor_name),
          (I[2] = t))
        : (t = I[2])
      let D = t,
        [R, q] = (0, l.useState)(D)
      ;(I[3] !== G || I[4] !== R || I[5] !== S.id
        ? ((s = () =>
            en.IN.safePost("/accounts/mfa/user/update_factor_name", {
              additionalHeaders: { "ChatGPT-Account-ID": G },
              requestBody: { factor_id: S.id, factor_name: R.trim() },
            })),
          (I[3] = G),
          (I[4] = R),
          (I[5] = S.id),
          (I[6] = s))
        : (s = I[6]),
        I[7] !== G || I[8] !== T || I[9] !== N
          ? ((o = async () => {
              ;(await N.invalidateQueries({ queryKey: (0, en.dI)(G).mfa.queryKey }), T())
            }),
            (I[7] = G),
            (I[8] = T),
            (I[9] = N),
            (I[10] = o))
          : (o = I[10]),
        I[11] !== s || I[12] !== o
          ? ((c = { mutationFn: s, onSuccess: o }), (I[11] = s), (I[12] = o), (I[13] = c))
          : (c = I[13]))
      let O = (0, r.n)(c)
      I[14] !== R || I[15] !== D || I[16] !== O.isPending
        ? ((u = R.trim().length > 0 && R.trim() !== D && R.trim().length <= 64 && !O.isPending),
          (I[14] = R),
          (I[15] = D),
          (I[16] = O.isPending),
          (I[17] = u))
        : (u = I[17])
      let U = u
      ;(I[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { "aria-describedby": void 0 }), (I[18] = p))
        : (p = I[18]),
        I[19] !== T || I[20] !== O.isPending
          ? ((h = (e) => {
              e || O.isPending || T()
            }),
            (I[19] = T),
            (I[20] = O.isPending),
            (I[21] = h))
          : (h = I[21]),
        I[22] !== U || I[23] !== O
          ? ((g = (e) => {
              ;(e.preventDefault(), U && O.mutate())
            }),
            (I[22] = U),
            (I[23] = O),
            (I[24] = g))
          : (g = I[24]),
        I[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)(ti.OO, {
              children: (0, n.jsx)(ti.c7, {
                title: (0, n.jsx)(tn.L3, {
                  children: (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.passkeys.renameTitle",
                    defaultMessage: "Rename security key",
                  }),
                }),
              }),
            })),
            (I[25] = m))
          : (m = I[25]),
        I[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)(d.A, { id: "settings.chatGpt.security.passkeys.name", defaultMessage: "Name" })),
            (I[26] = f))
          : (f = I[26]),
        I[27] === Symbol.for("react.memo_cache_sentinel") ? ((y = (e) => q(e.target.value)), (I[27] = y)) : (y = I[27]),
        I[28] !== R || I[29] !== O.isPending
          ? ((x = (0, n.jsxs)("label", {
              className: "flex flex-col gap-2 text-sm",
              children: [
                f,
                (0, n.jsx)(tB.pd, {
                  name: "passkey-name",
                  autoFocus: !0,
                  maxLength: 64,
                  value: R,
                  onChange: y,
                  disabled: O.isPending,
                }),
              ],
            })),
            (I[28] = R),
            (I[29] = O.isPending),
            (I[30] = x))
          : (x = I[30]),
        I[31] !== E
          ? ((v =
              null == E
                ? null
                : (0, n.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.passkeys.added",
                      defaultMessage: "Added: {timestamp, date, long}",
                      values: { timestamp: 1e3 * E },
                    }),
                  })),
            (I[31] = E),
            (I[32] = v))
          : (v = I[32]),
        I[33] !== O.isError
          ? ((C = O.isError
              ? (0, n.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.passkeys.renameError",
                    defaultMessage: "Failed to save passkey name",
                  }),
                })
              : null),
            (I[33] = O.isError),
            (I[34] = C))
          : (C = I[34]),
        I[35] !== x || I[36] !== v || I[37] !== C
          ? ((b = (0, n.jsxs)(ti.OO, { className: "gap-4", spacing: "large", children: [x, v, C] })),
            (I[35] = x),
            (I[36] = v),
            (I[37] = C),
            (I[38] = b))
          : (b = I[38]),
        I[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, n.jsx)(d.A, { id: "settings.chatGpt.security.cancel", defaultMessage: "Cancel" })), (I[39] = _))
          : (_ = I[39]),
        I[40] !== T || I[41] !== O.isPending
          ? ((j = (0, n.jsx)(L.$, {
              type: "button",
              color: "secondary",
              onClick: T,
              disabled: O.isPending,
              children: _,
            })),
            (I[40] = T),
            (I[41] = O.isPending),
            (I[42] = j))
          : (j = I[42]))
      let K = !U
      return (
        I[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, n.jsx)(d.A, { id: "settings.chatGpt.security.passkeys.save", defaultMessage: "Save" })),
            (I[43] = A))
          : (A = I[43]),
        I[44] !== O.isPending || I[45] !== K
          ? ((w = (0, n.jsx)(L.$, {
              type: "submit",
              color: "primary",
              disabled: K,
              loading: O.isPending,
              children: A,
            })),
            (I[44] = O.isPending),
            (I[45] = K),
            (I[46] = w))
          : (w = I[46]),
        I[47] !== j || I[48] !== w
          ? ((k = (0, n.jsx)(ti.OO, { spacing: "large", children: (0, n.jsxs)(ti.Es, { children: [j, w] }) })),
            (I[47] = j),
            (I[48] = w),
            (I[49] = k))
          : (k = I[49]),
        I[50] !== b || I[51] !== k || I[52] !== g
          ? ((M = (0, n.jsxs)(ti.R4, { as: "form", onSubmit: g, children: [m, b, k] })),
            (I[50] = b),
            (I[51] = k),
            (I[52] = g),
            (I[53] = M))
          : (M = I[53]),
        I[54] !== M || I[55] !== h
          ? ((P = (0, n.jsx)(tn.lG, { open: !0, contentProps: p, onOpenChange: h, children: M })),
            (I[54] = M),
            (I[55] = h),
            (I[56] = P))
          : (P = I[56]),
        P
      )
    }
    var t$ = s("vysM")
    s("RU3e")
    var tX = s("qTvt"),
      tJ = s("jWzm"),
      t1 = s("gSn1"),
      t0 = s("jKbW")
    let t2 = (0, ec.YK)({
      separator: {
        id: "codex.ui.bulletSeparator",
        defaultMessage: "\xb7",
        description: "Middle dot separator used between inline items",
      },
      loginTime: {
        id: "settings.chatGpt.security.sessions.loginTime",
        defaultMessage: "{timestamp, date, medium} at {timestamp, time, short}",
        description:
          "Last sign-in date and time within a device's details. Timestamp is epoch milliseconds; use the viewer's locale and timezone.",
      },
      lastSeen: {
        id: "settings.chatGpt.security.sessions.lastSeen",
        defaultMessage: "Last seen {timestamp, date, medium} at {timestamp, time, short}",
        description:
          "Optional date and time on a signed-out trusted device row in ChatGPT Active sessions settings. Timestamp is when the device registry last recorded seeing the device, not its exact logout time.",
      },
      unknownDevice: {
        id: "settings.chatGpt.security.sessions.unknownDevice",
        defaultMessage: "Unknown device",
        description:
          "Short device-name placeholder in ChatGPT Active sessions settings when no device name or model is available. Shown beneath the application title beside the operating system.",
      },
      unknownOS: {
        id: "settings.chatGpt.security.sessions.unknownOS",
        defaultMessage: "Unknown OS",
        description:
          "Short operating-system placeholder in ChatGPT Active sessions settings when the operating system is unavailable. Shown beside the device name beneath the application title. OS means operating system.",
      },
      unavailable: {
        id: "settings.chatGpt.security.sessions.unavailable",
        defaultMessage: "Session status unavailable",
        description:
          "Status shown when a device does not have an individually revocable session in Active sessions settings.",
      },
      siteNameUnavailable: {
        id: "settings.chatGpt.security.sessions.site.nameUnavailable",
        defaultMessage: "Site name unavailable",
        description:
          "Fallback heading for a Site session in ChatGPT Active sessions settings when its name is missing. A Site is a website built with ChatGPT. Helps the account owner identify access to their account; does not indicate that the Site is unsafe. Short label, no placeholders.",
      },
      siteDisclosureLabel: {
        id: "settings.chatGpt.security.sessions.site.disclosureLabel",
        defaultMessage: "ChatGPT Sites",
        description:
          "Short disclosure label for the sites signed in on one device in ChatGPT Active sessions. Selecting it expands or collapses the site list. ChatGPT Sites is the product name.",
      },
      siteCount: {
        id: "settings.chatGpt.security.sessions.site.count",
        defaultMessage: "{count, plural, one {# site} other {# sites}}",
        description:
          "Short badge beside the ChatGPT Sites disclosure in Active sessions settings. The count is the number of websites built with ChatGPT that the account is signed in to on this device.",
      },
      unknownApp: {
        id: "settings.chatGpt.security.sessions.unknownApp",
        defaultMessage: "Unknown app",
        description:
          "Short app-name placeholder in ChatGPT Active sessions settings when no application name is available. Shown as the session row title above the device and operating-system details.",
      },
      current: {
        id: "settings.chatGpt.security.sessions.current",
        defaultMessage: "Current session",
        description: "Badge identifying the device the user is currently using in Active sessions settings.",
      },
      signedOut: {
        id: "settings.chatGpt.security.sessions.signedOut",
        defaultMessage: "Signed out",
        description:
          "Badge identifying a remembered trusted device with no active session in ChatGPT Active sessions settings. It is informational, not an alert about unauthorized access.",
      },
      trusted: {
        id: "settings.chatGpt.security.sessions.trusted",
        defaultMessage: "Trusted device",
        description: "Badge identifying a trusted authentication device in Active sessions settings.",
      },
    })
    var t3 = "icon-PS1yxX"
    let t4 = {
        phone: { __html: (0, eM.l)(t0.f) },
        laptop: { __html: (0, eM.l)(tJ.g) },
        trusted: { __html: (0, eM.l)(t1.i) },
        signedOut: { __html: (0, eM.l)(ek.m) },
        chevronDown: { __html: (0, eM.l)(tX.K) },
      },
      t5 = new Map([
        ["macos", "macOS"],
        ["ios", "iOS"],
        ["ipados", "iPadOS"],
      ])
    function t6({ device: e, hasSession: t, signedOut: s = !1, action: i }) {
      let a,
        o = (0, eB.A)(),
        [r, c] = (0, l.useState)(!1),
        d = (0, l.useId)(),
        u = new Map(),
        p = []
      for (let t of e.app_sessions ?? []) {
        let e = t.client_name?.trim()
        "site" === t.client_type ? p.push(t) : e && u.set(e.toLowerCase(), e)
      }
      let h = e.platform?.trim() ?? "",
        g = h.toLowerCase(),
        m = t5.get(g) ?? h,
        f = ["ios", "ipados", "android"].includes(g),
        y = e.last_signed_in_city?.trim(),
        x = e.last_signed_in_region_code?.trim(),
        v = e.last_signed_in_country?.trim(),
        C = (y ? [y, x || v] : [x, v]).filter(Boolean).join(", ") || e.location?.trim(),
        b = [
          e.display_name?.trim() || e.device_model?.trim() || o.formatMessage(t2.unknownDevice),
          m && "other" !== g ? m : o.formatMessage(t2.unknownOS),
        ],
        _ = e.last_signed_in_timestamp_second
      return (
        null != _ &&
          Number.isFinite(_) &&
          _ > 0 &&
          (t || s) &&
          b.push(o.formatMessage(t ? t2.loginTime : t2.lastSeen, { timestamp: 1e3 * _ })),
        t && C && b.push(C),
        t || s || b.push(o.formatMessage(t2.unavailable)),
        e.is_current_device ? (a = "current") : e.is_trusted_device && (a = s ? "signedOut" : "trusted"),
        (0, n.jsxs)("div", {
          className: "row-doxw6j",
          children: [
            (0, n.jsx)("span", {
              className: t3,
              "aria-hidden": "true",
              dangerouslySetInnerHTML: f ? t4.phone : t4.laptop,
            }),
            (0, n.jsxs)("div", {
              className: "body-Fzy8zZ",
              children: [
                (0, n.jsxs)("div", {
                  className: "title-fjlFiD",
                  children: [
                    u.size > 0 && Array.from(u.values()).join(", "),
                    p.length > 0 &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          u.size > 0 && ", ",
                          (0, n.jsxs)("button", {
                            type: "button",
                            className: "siteToggle-DYZYgK",
                            "aria-expanded": r,
                            "aria-controls": r ? d : void 0,
                            onClick: () => c((e) => !e),
                            children: [
                              o.formatMessage(t2.siteDisclosureLabel),
                              " ",
                              (0, n.jsx)("span", {
                                className: "siteCount-bmoW9s",
                                children: o.formatMessage(t2.siteCount, { count: p.length }),
                              }),
                              (0, n.jsx)("span", {
                                className: t3,
                                "aria-hidden": "true",
                                dangerouslySetInnerHTML: t4.chevronDown,
                              }),
                            ],
                          }),
                        ],
                      }),
                    0 === u.size && 0 === p.length && o.formatMessage(t2.unknownApp),
                  ],
                }),
                p.length > 0 &&
                  r &&
                  (0, n.jsx)("ul", {
                    id: d,
                    className: "siteList-yrZUwi",
                    role: "list",
                    children: p.map((e, t) =>
                      (0, n.jsxs)(
                        "li",
                        {
                          className: "site-nHVo10",
                          children: [
                            (0, n.jsx)("span", {
                              children: e.client_name?.trim() || o.formatMessage(t2.siteNameUnavailable),
                            }),
                            e.client_uri?.trim() &&
                              (0, n.jsx)("span", { className: "uri-BQx3_J", children: e.client_uri }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                (0, n.jsx)("div", {
                  className: "details-zWpYbV",
                  children: b.map((e, t) =>
                    (0, n.jsxs)(
                      l.Fragment,
                      {
                        children: [
                          t > 0 &&
                            (0, n.jsxs)(n.Fragment, {
                              children: [
                                " ",
                                (0, n.jsx)("span", { "aria-hidden": "true", children: o.formatMessage(t2.separator) }),
                                " ",
                              ],
                            }),
                          (0, n.jsx)("span", { children: e }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            (a || null != i) &&
              (0, n.jsxs)("div", {
                className: "controls-YmDqjc",
                children: [
                  a &&
                    (0, n.jsxs)("span", {
                      className: "status-_x8kLH",
                      "data-status": a,
                      children: [
                        "current" !== a &&
                          (0, n.jsx)("span", { "aria-hidden": "true", dangerouslySetInnerHTML: t4[a] }),
                        o.formatMessage(t2[a]),
                      ],
                    }),
                  i,
                ],
              }),
          ],
        })
      )
    }
    var t9 = s("c2QW"),
      t7 = s("WIiH"),
      t8 = s("NOPk"),
      se = s("Lhm2")
    function st(e) {
      return (
        e.is_trusted_device &&
        e.can_untrust &&
        !e.is_current_device &&
        !(e.session_id ?? "").trim() &&
        (e.hashed_device_id ?? "").trim().length > 0
      )
    }
    function ss(e) {
      return null != e && e.trim().length > 0
    }
    let sn = {
      all: {
        title: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.allTitle",
          defaultMessage: "Log out of all devices?",
        }),
        description: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.allDescription",
          defaultMessage:
            "This will log you out of your account on all devices, including this one. You\u2019ll need to log in again on any device you want to use.",
        }),
        confirmLabel: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.allConfirm",
          defaultMessage: "Log out of all devices",
        }),
      },
      unavailable: {
        title: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.unavailableTitle",
          defaultMessage: "Can\u2019t log out",
        }),
        description: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.unavailableDescription",
          defaultMessage: "To remove this device, go back and select \u201CLog out all\u201D",
        }),
        confirmLabel: (0, n.jsx)(d.A, { id: "settings.chatGpt.security.sessions.gotIt", defaultMessage: "Got it" }),
      },
      trusted: {
        title: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.trustedTitle",
          defaultMessage: "Log out and remove trusted device?",
        }),
        description: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.trustedDescription",
          defaultMessage:
            "This will log out the device and remove it from your trusted devices. The device will no longer receive push notifications or be used to unlock your account.",
        }),
        confirmLabel: (0, n.jsx)(d.A, { id: "settings.chatGpt.security.sessions.logOut", defaultMessage: "Log out" }),
      },
      session: {
        title: (0, n.jsx)(d.A, { id: "settings.chatGpt.security.sessions.logoutTitle", defaultMessage: "Log out?" }),
        description: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.logoutDescription",
          defaultMessage:
            "This will immediately log out from your account. You\u2019ll need to log in again to access your account on that device.",
        }),
        confirmLabel: (0, n.jsx)(d.A, { id: "settings.chatGpt.security.sessions.logOut", defaultMessage: "Log out" }),
      },
      signedOut: {
        title: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.signedOutTitle",
          defaultMessage: "Remove trust from this device?",
        }),
        description: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.signedOutDescription",
          defaultMessage:
            "This device is already signed out. Removing trust means you\u2019ll need to verify it\u2019s you the next time you sign in on it.",
        }),
        confirmLabel: (0, n.jsx)(d.A, { id: "settings.chatGpt.security.sessions.remove", defaultMessage: "Remove" }),
      },
    }
    function si(e) {
      let t,
        s,
        g,
        m,
        f,
        y,
        x,
        v,
        C,
        b,
        _,
        j,
        A,
        k,
        M,
        P,
        I,
        G,
        S,
        T,
        D,
        R,
        q,
        U,
        F,
        H,
        V,
        W = (0, i.c)(95),
        { accountId: z, includeTrustedDevices: B, acknowledgeReview: Z, recommendationAttempt: Y, onBack: Q } = e,
        $ = void 0 !== B && B,
        X = void 0 !== Z && Z,
        J = (0, c.gh)(N.u),
        ee = (0, a.jE)(),
        { userId: et } = (0, h.As)(),
        es = (0, u.Zp)(),
        ei = (0, h.KD)()
      W[0] !== z ? ((t = ["chatgpt-security", z, "sessions"]), (W[0] = z), (W[1] = t)) : (t = W[1])
      let ea = t,
        eo = X ? (et ?? void 0) : void 0
      W[2] !== z || W[3] !== $ || W[4] !== eo
        ? ((s = (0, en.dI)(z, { includeTrustedDevices: $, sessionReviewUserId: eo })),
          (W[2] = z),
          (W[3] = $),
          (W[4] = eo),
          (W[5] = s))
        : (s = W[5])
      let er = s.sessions
      W[6] !== z || W[7] !== X || W[8] !== $ || W[9] !== er || W[10] !== et
        ? ((g = X ? ["chatgpt-security", z, "sessions", { includeTrustedDevices: $ }, et] : er.queryKey),
          (W[6] = z),
          (W[7] = X),
          (W[8] = $),
          (W[9] = er),
          (W[10] = et),
          (W[11] = g))
        : (g = W[11])
      let ec = !X || !!et,
        el = X ? "always" : er.refetchOnMount,
        ed = X ? 0 : er.staleTime
      W[12] !== er || W[13] !== g || W[14] !== ec || W[15] !== el || W[16] !== ed
        ? ((m = { ...er, queryKey: g, enabled: ec, refetchOnMount: el, staleTime: ed }),
          (W[12] = er),
          (W[13] = g),
          (W[14] = ec),
          (W[15] = el),
          (W[16] = ed),
          (W[17] = m))
        : (m = W[17])
      let { data: eu, isError: ep, isFetching: eh, isFetchedAfterMount: eg, isSuccess: em, refetch: ef } = (0, o.I)(m),
        ey = (0, l.useRef)(!1)
      W[18] !== ee || W[19] !== J
        ? ((f = {
            mutationFn: so,
            onSuccess: (e, t) => {
              ;(ee.invalidateQueries({ queryKey: (0, t$.m)(t.accountId, t.userId).queryKey }),
                (0, eT.gM)(J, t.recommendationAttempt))
            },
          }),
          (W[18] = ee),
          (W[19] = J),
          (W[20] = f))
        : (f = W[20])
      let ex = (0, r.n)(f)
      ;(W[21] !== z ||
      W[22] !== X ||
      W[23] !== eg ||
      W[24] !== eh ||
      W[25] !== em ||
      W[26] !== Y ||
      W[27] !== ex ||
      W[28] !== et
        ? ((y = () => {
            X &&
              et &&
              em &&
              !eh &&
              eg &&
              !ey.current &&
              ((ey.current = !0), ex.mutate({ accountId: z, userId: et, recommendationAttempt: Y }))
          }),
          (x = [X, z, et, Y, em, eh, eg, ex]),
          (W[21] = z),
          (W[22] = X),
          (W[23] = eg),
          (W[24] = eh),
          (W[25] = em),
          (W[26] = Y),
          (W[27] = ex),
          (W[28] = et),
          (W[29] = y),
          (W[30] = x))
        : ((y = W[29]), (x = W[30])),
        (0, l.useEffect)(y, x))
      let [ev, eC] = (0, l.useState)(null)
      W[31] !== eu || W[32] !== $
        ? ((v = null != eu && $ ? [...eu.devices.filter(sa), ...eu.devices.filter(st)] : (eu?.devices ?? [])),
          (W[31] = eu),
          (W[32] = $),
          (W[33] = v))
        : (v = W[33])
      let eb = v
      ;(W[34] !== z || W[35] !== $ || W[36] !== ee || W[37] !== J || W[38] !== ea
        ? ((C = async (e) => {
            if ("all" === e) {
              let e = { accountId: z, authSnapshot: (0, p.getBrowserChatGptAuthSnapshot)() }
              J.get(e1.YV).logProductEvent(t9.Rh, {
                location: t9.a4.ACCESS_LOGOUT_ACTION_LOCATION_SETTINGS_MODAL_LOG_OUT_ALL,
                logoutType: t9.vh.ACCESS_LOGOUT_TYPE_USER_INITIATED,
              })
              let t = (0, t8.TV)({
                logoutCaller: "settings_sessions",
                reasonV2: t9.Hf.ACCESS_LOGOUT_REASON_V2_INTENTIONAL_USER_INITIATED_MANUAL_LOGOUT,
                preLogoutUserId: e.authSnapshot?.userId,
                location: t9.a4.ACCESS_LOGOUT_ACTION_LOCATION_SETTINGS_MODAL_LOG_OUT_ALL,
              })
              return (
                (e.logoutEvent = t),
                (e.navigation = (0, se.lb)("settings_sessions", "manual_confirmed", t, { accountId: z })),
                await en.IN.safePost("/accounts/logout_all", { additionalHeaders: { "ChatGPT-Account-ID": z } }),
                await (0, t8.q9)(t),
                e
              )
            }
            if ($ && st(e)) {
              try {
                await en.IN.safePost("/accounts/trusted_devices/revoke", {
                  additionalHeaders: { "ChatGPT-Account-ID": z },
                  expectedErrorStatuses: [409],
                  requestBody: { device_id_hash: e.hashed_device_id },
                })
              } catch (e) {
                try {
                  await ee.invalidateQueries({ queryKey: ea })
                } catch {}
                throw e
              }
              await ee.invalidateQueries({ queryKey: ea })
            } else
              e.session_id?.trim() &&
                !e.is_current_device &&
                (await en.IN.safePost("/accounts/sessions/revoke", {
                  additionalHeaders: { "ChatGPT-Account-ID": z },
                  requestBody: { session_id: e.session_id },
                }),
                await ee.invalidateQueries({ queryKey: ea }))
            return null
          }),
          (W[34] = z),
          (W[35] = $),
          (W[36] = ee),
          (W[37] = J),
          (W[38] = ea),
          (W[39] = C))
        : (C = W[39]),
        W[40] !== es || W[41] !== ei
          ? ((b = (e, t) => {
              if (
                "all" !== t ||
                null == e ||
                !(function ({ accountId: e, authSnapshot: t }) {
                  if (null == t) return !1
                  let s = t.accountId,
                    n = t.accountUserId
                  if (!ss(e) || !ss(s) || !ss(n) || s !== e) return !1
                  let i = (0, p.getBrowserChatGptAuthSnapshot)()
                  return (
                    null != i &&
                    i.accountId === s &&
                    i.accountUserId === n &&
                    (null == t.userId || null == i.userId || i.userId === t.userId)
                  )
                })(e)
              )
                return
              let s = (0, se.W3)("/auth/logout", e.navigation, e.logoutEvent)
              ;((0, p.markBrowserChatGptSignedOut)(),
                es(s, { replace: !0, state: "complete-browser-logout" }),
                (0, t7.v)(ei))
            }),
            (W[40] = es),
            (W[41] = ei),
            (W[42] = b))
          : (b = W[42]),
        W[43] !== C || W[44] !== b
          ? ((_ = { mutationFn: C, onSuccess: b }), (W[43] = C), (W[44] = b), (W[45] = _))
          : (_ = W[45]))
      let e_ = (0, r.n)(_)
      W[46] !== ev || W[47] !== $
        ? ((j = null != ev && "all" !== ev && $ && st(ev)), (W[46] = ev), (W[47] = $), (W[48] = j))
        : (j = W[48])
      let ej = j
      W[49] !== ev || W[50] !== ej
        ? ((A = null != ev && "all" !== ev && !ev.session_id?.trim() && !ej), (W[49] = ev), (W[50] = ej), (W[51] = A))
        : (A = W[51])
      let eA = A,
        ew = "session"
      return (
        "all" === ev
          ? (ew = "all")
          : ej
            ? (ew = "signedOut")
            : eA
              ? (ew = "unavailable")
              : ev?.is_trusted_device && (ew = "trusted"),
        W[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.activeSessions",
              defaultMessage: "Active sessions",
            })),
            (W[52] = k))
          : (k = W[52]),
        W[53] !== $
          ? ((M = $
              ? (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.sessions.devicesDescriptionWithSignedOut",
                  defaultMessage:
                    "Review active sessions and devices remembered for future sign-ins. Trusted devices can receive security notifications, such as sign-in approvals. Signed-out devices can\u2019t receive these until you sign in again.",
                })
              : (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.sessions.devicesDescription",
                  defaultMessage:
                    "Review devices with active sessions. Trusted devices can receive security notifications, such as sign-in approvals.",
                })),
            (W[53] = $),
            (W[54] = M))
          : (M = W[54]),
        W[55] !== X || W[56] !== ex
          ? ((P =
              X && ex.isError
                ? (0, n.jsxs)("div", {
                    role: "alert",
                    className: "flex flex-col items-start gap-3 text-sm text-secondary",
                    children: [
                      (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.sessions.reviewError",
                        defaultMessage: "Couldn\u2019t mark this session review complete",
                      }),
                      (0, n.jsx)(L.$, {
                        color: "secondary",
                        size: "toolbar",
                        onClick: () => {
                          ex.variables && ex.mutate(ex.variables)
                        },
                        children: (0, n.jsx)(d.A, { id: "settings.chatGpt.security.retry", defaultMessage: "Retry" }),
                      }),
                    ],
                  })
                : null),
            (W[55] = X),
            (W[56] = ex),
            (W[57] = P))
          : (P = W[57]),
        W[58] !== eu || W[59] !== ep || W[60] !== ef
          ? ((I = null == eu || ep ? (0, n.jsx)(K.mK, { isError: ep, onRetry: () => void ef() }) : null),
            (W[58] = eu),
            (W[59] = ep),
            (W[60] = ef),
            (W[61] = I))
          : (I = W[61]),
        W[62] !== eu || W[63] !== eb || W[64] !== $ || W[65] !== ep || W[66] !== e_
          ? ((G =
              null != eu &&
              !ep &&
              (eb.length > 0
                ? (0, n.jsx)(w.t, {
                    children: eb.map((e) => {
                      let t = !!e.session_id?.trim(),
                        s = $ && st(e),
                        i = sn.session.confirmLabel
                      return (
                        s
                          ? (i = sn.signedOut.confirmLabel)
                          : t ||
                            e.is_current_device ||
                            (i = (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.sessions.info",
                              defaultMessage: "Info",
                            })),
                        (0, n.jsx)(
                          t6,
                          {
                            device: e,
                            hasSession: t,
                            signedOut: s,
                            action: (0, n.jsx)(L.$, {
                              color: "secondary",
                              size: "toolbar",
                              disabled: e.is_current_device,
                              onClick: () => {
                                ;(e_.reset(), eC(e))
                              },
                              children: i,
                            }),
                          },
                          e.render_id,
                        )
                      )
                    }),
                  })
                : (0, n.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.sessions.empty",
                      defaultMessage: "No active sessions",
                    }),
                  }))),
            (W[62] = eu),
            (W[63] = eb),
            (W[64] = $),
            (W[65] = ep),
            (W[66] = e_),
            (W[67] = G))
          : (G = W[67]),
        W[68] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.sessions.logOutAllLabel",
              defaultMessage: "Log out of all sessions",
            })),
            (W[68] = S))
          : (S = W[68]),
        W[69] !== $
          ? ((T = $
              ? (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.sessions.logOutAllDescriptionWithSignedOut",
                  defaultMessage:
                    "Log out everywhere and remove all devices from your account, including those already signed out. This may take up to 30 minutes.",
                })
              : (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.sessions.logOutAllDescription",
                  defaultMessage:
                    "Log out of all active sessions across all devices, including this session. This may take up to 30 minutes.",
                })),
            (W[69] = $),
            (W[70] = T))
          : (T = W[70]),
        W[71] !== e_
          ? ((D = () => {
              ;(e_.reset(), eC("all"))
            }),
            (W[71] = e_),
            (W[72] = D))
          : (D = W[72]),
        W[73] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.sessions.logOutAll",
              defaultMessage: "Log out all",
            })),
            (W[73] = R))
          : (R = W[73]),
        W[74] !== D
          ? ((q = (0, n.jsx)(L.$, { color: "danger", size: "toolbar", onClick: D, children: R })),
            (W[74] = D),
            (W[75] = q))
          : (q = W[75]),
        W[76] !== T || W[77] !== q
          ? ((U = (0, n.jsx)(w.t, { children: (0, n.jsx)(O.ic, { label: S, description: T, control: q }) })),
            (W[76] = T),
            (W[77] = q),
            (W[78] = U))
          : (U = W[78]),
        W[79] !== P || W[80] !== I || W[81] !== G || W[82] !== U
          ? ((F = (0, n.jsxs)("div", { className: "flex flex-col gap-8", children: [P, I, G, U] })),
            (W[79] = P),
            (W[80] = I),
            (W[81] = G),
            (W[82] = U),
            (W[83] = F))
          : (F = W[83]),
        W[84] !== ev || W[85] !== ew || W[86] !== $ || W[87] !== e_ || W[88] !== eA
          ? ((H =
              null == ev
                ? null
                : (0, n.jsx)(K.i$, {
                    title: sn[ew].title,
                    confirmLabel: sn[ew].confirmLabel,
                    informational: eA,
                    onConfirm: () =>
                      eA
                        ? eC(null)
                        : e_.mutate(ev, {
                            onSuccess: () => {
                              eC(null)
                            },
                            onError: (e, t) => {
                              "all" !== t && $ && st(t) && e instanceof E.FetchError && 409 === e.status && eC(null)
                            },
                          }),
                    onClose: () => eC(null),
                    isPending: e_.isPending,
                    isError: e_.isError,
                    children: sn[ew].description,
                  })),
            (W[84] = ev),
            (W[85] = ew),
            (W[86] = $),
            (W[87] = e_),
            (W[88] = eA),
            (W[89] = H))
          : (H = W[89]),
        W[90] !== Q || W[91] !== M || W[92] !== F || W[93] !== H
          ? ((V = (0, n.jsxs)(K.kU, { onBack: Q, title: k, subtitle: M, children: [F, H] })),
            (W[90] = Q),
            (W[91] = M),
            (W[92] = F),
            (W[93] = H),
            (W[94] = V))
          : (V = W[94]),
        V
      )
    }
    function sa(e) {
      return !st(e)
    }
    function so(e) {
      return I.Request.safePost("/accounts/security/session_review/acknowledge", {
        additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
        expectedIdentity: { accountId: e.accountId, userId: e.userId },
        retry: !1,
      })
    }
    ;(0, x._)(
      async function () {
        return () => null
      },
      {
        fallback: ({ isSubview: e, onBack: t }) =>
          e
            ? (0, n.jsx)(K.kU, {
                title: (0, n.jsx)(A.s, { slug: "security" }),
                onBack: t,
                children: (0, n.jsx)(K.mK, { isError: !1, onRetry: () => window.location.reload() }),
              })
            : null,
        errorFallback: ({ isSubview: e, onBack: t }) => {
          let s = (0, n.jsx)(K.mK, { isError: !0, onRetry: () => window.location.reload() })
          return e ? (0, n.jsx)(K.kU, { title: (0, n.jsx)(A.s, { slug: "security" }), onBack: t, children: s }) : null
        },
      },
    )
    let sr = (0, l.lazy)(async () => ({
        default: (await s.e(531205).then(s.bind(s, "EZyq"))).SecurityHistorySettings,
      })),
      sc = (0, l.lazy)(async () => ({ default: (await s.e(639537).then(s.bind(s, "vUVa"))).OrderYubikeyDialog }))
    function sl() {
      let e,
        t = (0, i.c)(2),
        s = (0, c.Ul)(m.Sk)
      return (
        t[0] !== s
          ? ((e = null == s ? (0, n.jsx)(v.y, {}) : (0, n.jsx)(sd, { accountId: s }, s)), (t[0] = s), (t[1] = e))
          : (e = t[1]),
        e
      )
    }
    function sd(e) {
      let t,
        s,
        m,
        f,
        x,
        P,
        I,
        G,
        S,
        T,
        N,
        E,
        L,
        D,
        R,
        q,
        O,
        F,
        H,
        V,
        W,
        B,
        Z,
        Y,
        $,
        X,
        J,
        ee,
        et,
        es,
        ei,
        ea,
        eo,
        er,
        ec,
        el,
        ed,
        eu,
        ep,
        eh,
        eg,
        em,
        ef,
        ey,
        ex,
        ev = (0, i.c)(210),
        { accountId: ew } = e,
        ek = (0, h.As)(),
        eM = (0, a.jE)(),
        eP = (0, u.zy)(),
        eI = (0, u.Zp)(),
        [eG, eS] = (0, u.ok)(),
        { data: eT } = (0, c._U)(g.t, ew),
        eN = (0, k.Zj)("3219370863")
      ev[0] !== ew || ev[1] !== eP.state || ev[2] !== eN
        ? (((t = (0, en.dI)(ew, { includeTrustedDevices: eN })).mfa.refetchOnMount = !(0, j.TK)(eP.state) || "always"),
          (ev[0] = ew),
          (ev[1] = eP.state),
          (ev[2] = eN),
          (ev[3] = t))
        : (t = ev[3])
      let { data: eL, isError: eD, refetch: eq } = (0, o.I)(t.mfa)
      ev[4] !== eL || ev[5] !== eG ? ((s = (0, eC.UC)(eG, eL)), (ev[4] = eL), (ev[5] = eG), (ev[6] = s)) : (s = ev[6])
      let eO = s,
        { data: eK, isSuccess: eH } = (0, o.I)(t.sessions)
      ev[7] !== eK?.devices || ev[8] !== eK?.devices.filter || ev[9] !== eH
        ? ((m = eH ? eK?.devices.filter(sh).length : void 0),
          (ev[7] = eK?.devices),
          (ev[8] = eK?.devices.filter),
          (ev[9] = eH),
          (ev[10] = m))
        : (m = ev[10])
      let eV = m
      ev[11] !== ew ? ((f = { accountId: ew }), (ev[11] = ew), (ev[12] = f)) : (f = ev[12])
      let eW = (0, c._U)(tO.kU, f),
        { data: ez, isSuccess: eB } = (0, c._U)(tO.J8, ew)
      ;(0, k.Zj)("2726095122")
      let eZ = eW.accountPin,
        eY = null != eT && !0 !== eT.account.is_fedramp_compliant_workspace,
        eQ = eW.linkedApps
      ev[13] !== eQ || ev[14] !== t.linkedApps
        ? ((x = { ...t.linkedApps, enabled: eQ, staleTime: M.D.ONE_MINUTE }),
          (ev[13] = eQ),
          (ev[14] = t.linkedApps),
          (ev[15] = x))
        : (x = ev[15])
      let { data: e$ } = (0, o.I)(x),
        eX = null != ek.email
      ev[16] !== eT?.features
        ? ((P = eT?.features?.includes("mfa")), (ev[16] = eT?.features), (ev[17] = P))
        : (P = ev[17])
      let eJ = !0 === P,
        e1 = eL?.mfa_enabled_v2 === !0
      ev[18] !== eX || ev[19] !== eJ || ev[20] !== e1
        ? ((I = (0, tO.uF)(eX, eJ, e1)), (ev[18] = eX), (ev[19] = eJ), (ev[20] = e1), (ev[21] = I))
        : (I = ev[21])
      let e0 = I,
        e2 = e0 && void 0 === eL && !eD
      ev[22] !== eG ? ((G = eG.get("view")), (ev[22] = eG), (ev[23] = G)) : (G = ev[23])
      let e3 = G
      ev[24] !== eP.state ? ((S = (0, j.TK)(eP.state)), (ev[24] = eP.state), (ev[25] = S)) : (S = ev[25])
      let e4 = S
      ;(ev[26] !== ew || ev[27] !== ek.userId || ev[28] !== e4 || ev[29] !== eM
        ? ((T = () => {
            e4 && ek.userId && eM.invalidateQueries({ queryKey: (0, t$.m)(ew, ek.userId).queryKey })
          }),
          (N = [ew, ek.userId, e4, eM]),
          (ev[26] = ew),
          (ev[27] = ek.userId),
          (ev[28] = e4),
          (ev[29] = eM),
          (ev[30] = T),
          (ev[31] = N))
        : ((T = ev[30]), (N = ev[31])),
        (0, l.useEffect)(T, N),
        ev[32] !== ew || ev[33] !== ek.userId || ev[34] !== eP.state || ev[35] !== eG || ev[36] !== eS || ev[37] !== e3
          ? ((E = () => {
              let e = ek.userId
              if (
                "advanced-protection" !== e3 ||
                "true" !== eG.get("apm_disable_confirm") ||
                eG.has("apm_account_id") ||
                null == e
              )
                return
              let t = !1
              return (
                (0, p.loadBrowserChatGptAuth)()
                  .then((s) => {
                    !t &&
                      null != s &&
                      s.accountId === ew &&
                      s.userId === e &&
                      (0, eC.m)(s.accessToken) &&
                      eS(
                        (e) => {
                          if (
                            "advanced-protection" !== e.get("view") ||
                            "true" !== e.get("apm_disable_confirm") ||
                            e.has("apm_account_id")
                          )
                            return e
                          let t = new URLSearchParams(e)
                          return (t.append("apm_account_id", ew), t)
                        },
                        { replace: !0, state: eP.state },
                      )
                  })
                  .catch(sp),
                () => {
                  t = !0
                }
              )
            }),
            (L = [ew, ek.userId, eP.state, eG, eS, e3]),
            (ev[32] = ew),
            (ev[33] = ek.userId),
            (ev[34] = eP.state),
            (ev[35] = eG),
            (ev[36] = eS),
            (ev[37] = e3),
            (ev[38] = E),
            (ev[39] = L))
          : ((E = ev[38]), (L = ev[39])),
        (0, l.useEffect)(E, L),
        ev[40] === Symbol.for("react.memo_cache_sentinel") ? ((D = { mutationFn: su }), (ev[40] = D)) : (D = ev[40]))
      let e5 = (0, r.n)(D),
        { mutate: e6, variables: e9 } = e5
      ev[41] !== ew ||
      ev[42] !== ek.userId ||
      ev[43] !== eP.hash ||
      ev[44] !== eP.pathname ||
      ev[45] !== eP.state ||
      ev[46] !== eI ||
      ev[47] !== eG ||
      ev[48] !== e3
        ? ((R = (e, t) => {
            if (null == e && (0, j.Qt)(eP.state)) return void eI(-1)
            let s = new URLSearchParams(eG)
            ;(null == e ? s.delete("view") : s.set("view", e),
              "account-pin" !== e && s.delete(z.Aj),
              "advanced-protection" !== e && (s.delete("apm_disable_confirm"), s.delete("apm_account_id")),
              "linked-apps" === e3 && "linked-apps" !== e && (s.delete("tab"), s.delete("client_id")),
              eI(
                { pathname: eP.pathname, search: 0 === s.size ? "" : `?${s.toString()}`, hash: eP.hash },
                {
                  replace: null == e,
                  state:
                    null == e
                      ? eP.state
                      : {
                          securitySubviewHasParent: !0,
                          securitySessionReviewIntent:
                            "sessions" === e && void 0 !== t && ek.userId
                              ? { accountId: ew, userId: ek.userId, recommendationAttempt: t ?? void 0 }
                              : void 0,
                        },
                },
              ))
          }),
          (ev[41] = ew),
          (ev[42] = ek.userId),
          (ev[43] = eP.hash),
          (ev[44] = eP.pathname),
          (ev[45] = eP.state),
          (ev[46] = eI),
          (ev[47] = eG),
          (ev[48] = e3),
          (ev[49] = R))
        : (R = ev[49])
      let e7 = R
      ev[50] !== ew || ev[51] !== eP.state || ev[52] !== eG || ev[53] !== eS
        ? ((q = () => {
            let e = new URLSearchParams(eG)
            ;(e.set("view", "advanced-protection"),
              e.set("apm_disable_confirm", "true"),
              e.set("apm_account_id", ew),
              eS(e, { replace: !0, state: eP.state }))
          }),
          (ev[50] = ew),
          (ev[51] = eP.state),
          (ev[52] = eG),
          (ev[53] = eS),
          (ev[54] = q))
        : (q = ev[54])
      let e8 = q
      ev[55] !== eP.state || ev[56] !== eG || ev[57] !== eS
        ? ((O = () => {
            let e = new URLSearchParams(eG)
            ;(e.delete("apm_disable_confirm"), e.delete("apm_account_id"), eS(e, { replace: !0, state: eP.state }))
          }),
          (ev[55] = eP.state),
          (ev[56] = eG),
          (ev[57] = eS),
          (ev[58] = O))
        : (O = ev[58])
      let te = O
      ev[59] !== eG || ev[60] !== e6 || ev[61] !== eS
        ? ((F = (e, t) => {
            let s = void 0 === t ? null : t
            e6(s ? { ...e, actionAttemptId: s.actionAttemptId } : e, {
              onSuccess: (e, t) => {
                if ("object" == typeof e) return void window.location.assign(e.redirectUrl)
                if ("ready" !== e) return
                let s = new URLSearchParams(eG)
                ;(s.set("action", t.action),
                  s.set("factor", t.factor),
                  void 0 !== t.actionAttemptId
                    ? s.set("action_attempt_id", t.actionAttemptId)
                    : s.delete("action_attempt_id"),
                  "disable" === t.action ? s.set("factor_id", t.factorId) : s.delete("factor_id"),
                  eS(s))
              },
            })
          }),
          (ev[59] = eG),
          (ev[60] = e6),
          (ev[61] = eS),
          (ev[62] = F))
        : (F = ev[62])
      let tt = F
      ev[63] !== eG || ev[64] !== eS
        ? ((H = () => {
            let e = new URLSearchParams(eG)
            ;(e.delete("action"),
              e.delete("factor"),
              e.delete("factor_id"),
              e.delete("action_attempt_id"),
              "passkey_created" === e.get("_tm") && e.delete("_tm"),
              eS(e, { replace: !0 }))
          }),
          (ev[63] = eG),
          (ev[64] = eS),
          (ev[65] = H))
        : (H = ev[65])
      let ts = H
      ;(ev[66] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = (0, n.jsx)(d.A, {
            id: "settings.overview.security",
            defaultMessage: "Manage how you sign in and which apps can access your account",
          })),
          (ev[66] = V))
        : (V = ev[66]),
        ev[67] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = (0, n.jsx)(A.s, { slug: "security" })), (ev[67] = W))
          : (W = ev[67]),
        ev[68] !== e7 ? ((B = () => e7("advanced-protection")), (ev[68] = e7), (ev[69] = B)) : (B = ev[69]),
        ev[70] !== ew || ev[71] !== B
          ? ((Z = (0, n.jsx)(e_, { accountId: ew, onManage: B })), (ev[70] = ew), (ev[71] = B), (ev[72] = Z))
          : (Z = ev[72]),
        ev[73] !== e2 || ev[74] !== eq
          ? ((Y = e2 ? (0, n.jsx)(K.mK, { isError: !1, onRetry: () => void eq() }) : null),
            (ev[73] = e2),
            (ev[74] = eq),
            (ev[75] = Y))
          : (Y = ev[75]))
      let tn = e0 && !eD ? eL?.factors.passkeys.length : void 0
      ;(ev[76] !== e7 ? (($ = () => e7("passkeys")), (ev[76] = e7), (ev[77] = $)) : ($ = ev[77]),
        ev[78] !== ew || ev[79] !== tn || ev[80] !== $
          ? ((X = (0, n.jsx)(tU, { accountId: ew, passkeyCount: tn, onOpenPasskeys: $ })),
            (ev[78] = ew),
            (ev[79] = tn),
            (ev[80] = $),
            (ev[81] = X))
          : (X = ev[81]),
        ev[82] !== e7 || ev[83] !== eZ
          ? ((J = eZ
              ? (0, n.jsx)(w.t, {
                  children: (0, n.jsx)(b.kk, {
                    edgeRounding: "surface",
                    entry: tO.B4.accountPin,
                    description: (0, n.jsx)(d.A, { ...U.L.rowDescription }),
                    onClick: () => e7("account-pin"),
                    trailing: (0, n.jsx)(y.uM3, {}),
                  }),
                })
              : null),
            (ev[82] = e7),
            (ev[83] = eZ),
            (ev[84] = J))
          : (J = ev[84]),
        ev[85] !== ew || ev[86] !== eV || ev[87] !== tt || ev[88] !== e7 || ev[89] !== e5.isPending || ev[90] !== e0
          ? ((ee = e0
              ? (0, n.jsx)(eE, {
                  accountId: ew,
                  activeTrustedDeviceCount: eV,
                  pending: e5.isPending,
                  showLoading: !1,
                  onAction: tt,
                  onOpenAdvancedProtection: () => e7("advanced-protection"),
                })
              : null),
            (ev[85] = ew),
            (ev[86] = eV),
            (ev[87] = tt),
            (ev[88] = e7),
            (ev[89] = e5.isPending),
            (ev[90] = e0),
            (ev[91] = ee))
          : (ee = ev[91]),
        ev[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((et = (0, n.jsx)(_.X.Header, {
              title: (0, n.jsx)(d.A, { id: "settings.chatGpt.security.sessions", defaultMessage: "Sessions" }),
            })),
            (ev[92] = et))
          : (et = ev[92]),
        ev[93] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.sessions.description",
              defaultMessage:
                "View all devices that have accessed your account. You can review active sessions, remove trusted devices, or use Log out all to end all sessions.",
            })),
            (ev[93] = es))
          : (es = ev[93]),
        ev[94] !== e7 ? ((ei = () => e7("sessions")), (ev[94] = e7), (ev[95] = ei)) : (ei = ev[95]))
      let ti = eK?.devices.length
      ;(ev[96] === Symbol.for("react.memo_cache_sentinel")
        ? ((ea = (0, n.jsx)(y.uM3, {})), (ev[96] = ea))
        : (ea = ev[96]),
        ev[97] !== ti
          ? ((eo = (0, n.jsxs)(n.Fragment, { children: [ti, ea] })), (ev[97] = ti), (ev[98] = eo))
          : (eo = ev[98]),
        ev[99] !== ei || ev[100] !== eo
          ? ((er = (0, n.jsx)(b.kk, {
              edgeRounding: "surface",
              entry: tO.B4.sessions,
              description: es,
              onClick: ei,
              trailing: eo,
            })),
            (ev[99] = ei),
            (ev[100] = eo),
            (ev[101] = er))
          : (er = ev[101]),
        ev[102] !== ez || ev[103] !== eB || ev[104] !== e7
          ? ((ec =
              eB && ez
                ? (0, n.jsx)(b.kk, {
                    ref: sm,
                    edgeRounding: "surface",
                    entry: tO.B4.history,
                    description: (0, n.jsx)(d.A, { ...eF.d.description }),
                    onClick: () => e7("history"),
                    trailing: (0, n.jsx)(y.uM3, {}),
                  })
                : null),
            (ev[102] = ez),
            (ev[103] = eB),
            (ev[104] = e7),
            (ev[105] = ec))
          : (ec = ev[105]),
        ev[106] !== er || ev[107] !== ec
          ? ((el = (0, n.jsxs)(_.X, {
              children: [et, (0, n.jsx)(_.X.Content, { children: (0, n.jsxs)(w.t, { children: [er, ec] }) })],
            })),
            (ev[106] = er),
            (ev[107] = ec),
            (ev[108] = el))
          : (el = ev[108]),
        ev[109] !== e$ || ev[110] !== eQ || ev[111] !== e7
          ? ((ed = eQ
              ? (0, n.jsxs)(_.X, {
                  children: [
                    (0, n.jsx)(_.X.Header, {
                      title: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.loginConnections.title",
                        defaultMessage: "Login connections",
                      }),
                    }),
                    (0, n.jsx)(_.X.Content, {
                      children: (0, n.jsx)(w.t, {
                        children: (0, n.jsx)(b.kk, {
                          edgeRounding: "surface",
                          entry: tO.B4.linkedApps,
                          description: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.description",
                            defaultMessage:
                              "Review other apps and sites you\u2019ve signed in to with ChatGPT, and manage what they can access",
                          }),
                          onClick: () => e7("linked-apps"),
                          trailing: (0, n.jsxs)(n.Fragment, {
                            children: [
                              null == e$ ? null : e$.items.length + (e$.third_party_items?.length ?? 0),
                              (0, n.jsx)(y.uM3, {}),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                })
              : null),
            (ev[109] = e$),
            (ev[110] = eQ),
            (ev[111] = e7),
            (ev[112] = ed))
          : (ed = ev[112]),
        ev[113] !== e7 ? ((eu = () => e7("advanced-protection")), (ev[113] = e7), (ev[114] = eu)) : (eu = ev[114]),
        ev[115] !== ew || ev[116] !== eu
          ? ((ep = (0, n.jsx)(ej, { accountId: ew, onOpenAdvancedProtection: eu })),
            (ev[115] = ew),
            (ev[116] = eu),
            (ev[117] = ep))
          : (ep = ev[117]),
        ev[118] !== ew ? ((eh = (0, n.jsx)(eU, { accountId: ew })), (ev[118] = ew), (ev[119] = eh)) : (eh = ev[119]),
        ev[120] !== Z ||
        ev[121] !== Y ||
        ev[122] !== X ||
        ev[123] !== J ||
        ev[124] !== ee ||
        ev[125] !== el ||
        ev[126] !== ed ||
        ev[127] !== ep ||
        ev[128] !== eh
          ? ((eg = (0, n.jsxs)(C.P, {
              overview: V,
              ref: sg,
              title: W,
              children: [Z, Y, null, X, null, J, ee, el, ed, ep, eh],
            })),
            (ev[120] = Z),
            (ev[121] = Y),
            (ev[122] = X),
            (ev[123] = J),
            (ev[124] = ee),
            (ev[125] = el),
            (ev[126] = ed),
            (ev[127] = ep),
            (ev[128] = eh),
            (ev[129] = eg))
          : (eg = ev[129]))
      let ta = eg
      if ("advanced-protection" === e3) {
        let e, t, s
        ;(ev[130] !== ew || ev[131] !== eG
          ? ((e = (0, eC.PW)(eG, ew)), (ev[130] = ew), (ev[131] = eG), (ev[132] = e))
          : (e = ev[132]),
          ev[133] !== e7 ? ((t = () => e7(null)), (ev[133] = e7), (ev[134] = t)) : (t = ev[134]),
          ev[135] !== ew || ev[136] !== te || ev[137] !== e8 || ev[138] !== e || ev[139] !== t
            ? ((s = (0, n.jsx)(eA, {
                accountId: ew,
                disableConfirmationRequested: e,
                onBack: t,
                onClearDisableConfirmation: te,
                onRequestDisableConfirmation: e8,
              })),
              (ev[135] = ew),
              (ev[136] = te),
              (ev[137] = e8),
              (ev[138] = e),
              (ev[139] = t),
              (ev[140] = s))
            : (s = ev[140]),
          (ta = s))
      } else if ("sessions" === e3) {
        let e,
          t,
          s,
          i,
          a = `${eN ? "trusted-devices" : "sessions"}:${ew}:${ek.userId}`
        ;(ev[141] !== ew || ev[142] !== ek.userId || ev[143] !== eP.state
          ? ((e = (0, j.z7)(eP.state, ew, ek.userId)),
            (ev[141] = ew),
            (ev[142] = ek.userId),
            (ev[143] = eP.state),
            (ev[144] = e))
          : (e = ev[144]),
          ev[145] !== ew || ev[146] !== ek.userId || ev[147] !== eP.state
            ? ((t = (0, j.x9)(eP.state, "securitySessionReviewIntent", ew, ek.userId)),
              (ev[145] = ew),
              (ev[146] = ek.userId),
              (ev[147] = eP.state),
              (ev[148] = t))
            : (t = ev[148]),
          ev[149] !== e7 ? ((s = () => e7(null)), (ev[149] = e7), (ev[150] = s)) : (s = ev[150]),
          ev[151] !== ew || ev[152] !== eN || ev[153] !== a || ev[154] !== e || ev[155] !== t || ev[156] !== s
            ? ((i = (0, n.jsx)(
                si,
                { accountId: ew, includeTrustedDevices: eN, acknowledgeReview: e, recommendationAttempt: t, onBack: s },
                a,
              )),
              (ev[151] = ew),
              (ev[152] = eN),
              (ev[153] = a),
              (ev[154] = e),
              (ev[155] = t),
              (ev[156] = s),
              (ev[157] = i))
            : (i = ev[157]),
          (ta = i))
      } else if ("biometric-factors" === e3) {
        let e
        ;(ev[158] !== ta
          ? ((e = (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(n.Fragment, { children: ta })] })),
            (ev[158] = ta),
            (ev[159] = e))
          : (e = ev[159]),
          (ta = e))
      } else if ("history" === e3) {
        let e, t, s
        ;(ev[160] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(v.y, {})), (ev[160] = e))
          : (e = ev[160]),
          ev[161] !== e7 ? ((t = () => e7(null)), (ev[161] = e7), (ev[162] = t)) : (t = ev[162]),
          ev[163] !== ew || ev[164] !== t
            ? ((s = (0, n.jsx)(l.Suspense, { fallback: e, children: (0, n.jsx)(sr, { accountId: ew, onBack: t }) })),
              (ev[163] = ew),
              (ev[164] = t),
              (ev[165] = s))
            : (s = ev[165]),
          (ta = s))
      } else if ("linked-apps" === e3 && eQ) {
        let e, t
        ;(ev[166] !== e7 ? ((e = () => e7(null)), (ev[166] = e7), (ev[167] = e)) : (e = ev[167]),
          ev[168] !== ew || ev[169] !== e
            ? ((t = (0, n.jsx)(t_, { accountId: ew, onBack: e })), (ev[168] = ew), (ev[169] = e), (ev[170] = t))
            : (t = ev[170]),
          (ta = t))
      } else if ("account-pin" === e3 && eZ) {
        let e, t
        ;(ev[171] !== e7 ? ((e = () => e7(null)), (ev[171] = e7), (ev[172] = e)) : (e = ev[172]),
          ev[173] !== ew || ev[174] !== e
            ? ((t = (0, n.jsx)(Q, { accountId: ew, onBack: e })), (ev[173] = ew), (ev[174] = e), (ev[175] = t))
            : (t = ev[175]),
          (ta = t))
      } else if (("passkeys" === e3 || "yubikey" === e3) && e0) {
        let e, t, s
        ;(ev[176] !== e7 || ev[177] !== eY
          ? ((e = eY ? () => e7("yubikey") : void 0), (ev[176] = e7), (ev[177] = eY), (ev[178] = e))
          : (e = ev[178]),
          ev[179] !== e7 ? ((t = () => e7(null)), (ev[179] = e7), (ev[180] = t)) : (t = ev[180]),
          ev[181] !== ew || ev[182] !== tt || ev[183] !== e5.isPending || ev[184] !== e || ev[185] !== t
            ? ((s = (0, n.jsx)(tZ, { accountId: ew, pending: e5.isPending, onAction: tt, onOrder: e, onBack: t })),
              (ev[181] = ew),
              (ev[182] = tt),
              (ev[183] = e5.isPending),
              (ev[184] = e),
              (ev[185] = t),
              (ev[186] = s))
            : (s = ev[186]),
          (ta = s))
      }
      return (
        ev[187] !== ew ||
        ev[188] !== eP.state ||
        ev[189] !== eI ||
        ev[190] !== eG ||
        ev[191] !== eS ||
        ev[192] !== e0 ||
        ev[193] !== eY ||
        ev[194] !== e3
          ? ((em =
              "yubikey" === e3 && e0 && eY
                ? (0, n.jsx)(l.Suspense, {
                    fallback: (0, n.jsx)(v.y, {}),
                    children: (0, n.jsx)(sc, {
                      accountId: ew,
                      onClose: () => {
                        if ((0, j.Qt)(eP.state)) eI(-1)
                        else {
                          let e = new URLSearchParams(eG)
                          ;(e.set("view", "passkeys"), eS(e, { replace: !0 }))
                        }
                      },
                    }),
                  })
                : null),
            (ev[187] = ew),
            (ev[188] = eP.state),
            (ev[189] = eI),
            (ev[190] = eG),
            (ev[191] = eS),
            (ev[192] = e0),
            (ev[193] = eY),
            (ev[194] = e3),
            (ev[195] = em))
          : (em = ev[195]),
        ev[196] !== tt || ev[197] !== e9 || ev[198] !== e5
          ? ((ef =
              e5.isError || "failed" === e5.data
                ? (0, n.jsx)(eb, {
                    onClose: () => e5.reset(),
                    onRetry: e9?.factor === "passkey" ? () => tt(e9) : void 0,
                  })
                : null),
            (ev[196] = tt),
            (ev[197] = e9),
            (ev[198] = e5),
            (ev[199] = ef))
          : (ef = ev[199]),
        ev[200] !== ew || ev[201] !== eO || ev[202] !== ts || ev[203] !== e0
          ? ((ey =
              eO && "complete" !== eO.action && (e0 || "enable" === eO.action)
                ? (0, n.jsx)(eR, { accountId: ew, action: eO, onClose: ts })
                : null),
            (ev[200] = ew),
            (ev[201] = eO),
            (ev[202] = ts),
            (ev[203] = e0),
            (ev[204] = ey))
          : (ey = ev[204]),
        ev[205] !== ta || ev[206] !== em || ev[207] !== ef || ev[208] !== ey
          ? ((ex = (0, n.jsxs)(n.Fragment, { children: [ta, em, ef, ey] })),
            (ev[205] = ta),
            (ev[206] = em),
            (ev[207] = ef),
            (ev[208] = ey),
            (ev[209] = ex))
          : (ex = ev[209]),
        ex
      )
    }
    function su(e) {
      return (0, eC._M)(e)
    }
    function sp() {}
    function sh(e) {
      return e.is_trusted_device && !st(e)
    }
    function sg(e) {
      return (0, eH.U)(e, "security_settings_page_viewed")
    }
    function sm(e) {
      return (0, eH.U)(e, "security_history_entrypoint_viewed")
    }
  },
  wcTT(e, t, s) {
    s.d(t, { d: () => m })
    var n = s("ABep"),
      i = s("QosV")
    let a = (0, s("ESTr").a)({
      name: "lock-light-28",
      canvas: {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        frame: { x: 0, y: 0, width: 28, height: 28 },
        inkBounds: { x: 3.83667, y: 2.669922, width: 20.327148, height: 22.660156 },
        visualBounds: { x: 3.83667, y: 2.669922, width: 20.327148, height: 22.660156 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.83667, y: 2.669922, width: 20.327148, height: 22.660156 },
        center: { x: 14.000244, y: 14 },
        insets: { top: 2.669922, right: 3.836182, bottom: 2.669922, left: 3.83667 },
        anchors: { frame: { x: 14, y: 14 }, ink: { x: 14.000244, y: 14 }, foreground: { x: 14.000244, y: 14 } },
      },
      capabilities: ["icon"],
      body: '<path d="M14.0007 14.3369C15.1031 14.3374 15.9968 15.2315 15.9968 16.334C15.9966 17.14 15.5176 17.8324 14.8298 18.1475V19.833C14.8298 20.2914 14.4582 20.6631 13.9998 20.6631C13.5415 20.663 13.1697 20.2913 13.1697 19.833V18.1465C12.4822 17.8312 12.0039 17.1396 12.0037 16.334C12.0037 15.2313 12.898 14.3369 14.0007 14.3369Z" fill="currentColor"/> <path d="M13.9998 2.66992C17.6796 2.67005 20.6636 5.65318 20.6638 9.33301V9.71777C22.6454 10.0215 24.1637 11.7334 24.1638 13.7998V21.2002C24.1637 23.481 22.3138 25.3301 20.033 25.3301H7.96655C5.68577 25.33 3.83678 23.481 3.83667 21.2002V13.7998C3.83677 11.7332 5.35485 10.0212 7.33667 9.71777V9.33301C7.33685 5.65321 10.32 2.6701 13.9998 2.66992ZM7.96655 11.3301C6.60256 11.3302 5.49693 12.4358 5.49683 13.7998V21.2002C5.49693 22.5642 6.60256 23.6698 7.96655 23.6699H20.033C21.397 23.6699 22.5036 22.5642 22.5037 21.2002V13.7998C22.5036 12.4358 21.397 11.3301 20.033 11.3301H7.96655ZM13.9998 4.33008C11.2367 4.33025 8.997 6.57 8.99683 9.33301V9.66992H19.0037V9.33301C19.0035 6.56997 16.7628 4.33021 13.9998 4.33008Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var o = s("zd8w"),
      r = s("oyxz"),
      c = s("Sm6l"),
      l = s("JNtf"),
      d = s("mUDD"),
      u = s("HOLv")
    function p(e) {
      let t,
        s,
        a,
        o,
        r,
        c = (0, i.c)(14),
        { id: l, value: d, readOnly: u, invalid: p, onChange: h } = e,
        g = p || void 0
      return (
        c[0] !== h
          ? ((t = (e) => {
              ;/^[0-9]{0,4}$/.test(e.target.value) && h(e.target.value)
            }),
            (c[0] = h),
            (c[1] = t))
          : (t = c[1]),
        c[2] !== l || c[3] !== u || c[4] !== g || c[5] !== t || c[6] !== d
          ? ((s = (0, n.jsx)("input", {
              id: l,
              className: "input-zHNXeN",
              type: "password",
              inputMode: "numeric",
              autoComplete: "off",
              "data-1p-ignore": !0,
              "data-lpignore": "true",
              spellCheck: !1,
              autoFocus: !0,
              maxLength: 4,
              value: d,
              readOnly: u,
              "aria-invalid": g,
              onChange: t,
            })),
            (c[2] = l),
            (c[3] = u),
            (c[4] = g),
            (c[5] = t),
            (c[6] = d),
            (c[7] = s))
          : (s = c[7]),
        c[8] === Symbol.for("react.memo_cache_sentinel") ? ((a = [0, 1, 2, 3]), (c[8] = a)) : (a = c[8]),
        c[9] !== d
          ? ((o = (0, n.jsx)("div", {
              className: "slots-NmOWqs",
              "aria-hidden": "true",
              children: a.map((e) =>
                (0, n.jsx)(
                  "span",
                  { className: "slot-aWR4ta", "data-active": e === Math.min(d.length, 3), "data-filled": e < d.length },
                  e,
                ),
              ),
            })),
            (c[9] = d),
            (c[10] = o))
          : (o = c[10]),
        c[11] !== s || c[12] !== o
          ? ((r = (0, n.jsxs)("div", { className: "field-FtMKoG", children: [s, o] })),
            (c[11] = s),
            (c[12] = o),
            (c[13] = r))
          : (r = c[13]),
        r
      )
    }
    var h = s("U4Xt"),
      g = s("LLN1")
    function m(e) {
      let t,
        s,
        m,
        f,
        y,
        x,
        v,
        C,
        b,
        _,
        j,
        A,
        w,
        k,
        M,
        P,
        I,
        G,
        S,
        T = (0, i.c)(97),
        {
          step: N,
          currentPin: E,
          nextPin: L,
          confirmation: D,
          error: R,
          lockedFor: q,
          isPending: O,
          onCurrentPinChange: U,
          onNextPinChange: K,
          onConfirmationChange: F,
          onClearError: H,
          onLockoutExpired: V,
          onSubmit: W,
          onClose: z,
          onForgotPin: B,
        } = e,
        [Z, Y] = (0, o.useState)(!1),
        Q = "change-current" === N || "unlock" === N,
        $ = "create-confirm" === N || "change-confirm" === N || "reset-confirm" === N,
        X = Q || $ || "create" === N || "change-new" === N || "reset-new" === N,
        J = q > 0 || "locked" === R,
        ee = (0, o.useEffectEvent)(V)
      if (
        (T[0] !== Q || T[1] !== J || T[2] !== q || T[3] !== ee || T[4] !== X
          ? ((t = () => {
              if (!X || !Q || !J) return
              let e = setTimeout(ee, 1e3 * (q || 60))
              return () => clearTimeout(e)
            }),
            (T[0] = Q),
            (T[1] = J),
            (T[2] = q),
            (T[3] = ee),
            (T[4] = X),
            (T[5] = t))
          : (t = T[5]),
        T[6] !== Q || T[7] !== J || T[8] !== q || T[9] !== X
          ? ((s = [X, Q, J, q]), (T[6] = Q), (T[7] = J), (T[8] = q), (T[9] = X), (T[10] = s))
          : (s = T[10]),
        (0, o.useEffect)(t, s),
        !X)
      )
        return null
      if (Z) {
        let e, t, s, i, a, o, c
        return (
          T[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(r.A, { id: "lockedChats.pin.closeSetupTitle", defaultMessage: "Close PIN setup?" })),
              (t = (0, n.jsx)(r.A, { id: "lockedChats.pin.continueSetup", defaultMessage: "Continue setup" })),
              (s = (0, n.jsx)(r.A, { id: "lockedChats.pin.closeSetup", defaultMessage: "Close" })),
              (T[11] = e),
              (T[12] = t),
              (T[13] = s))
            : ((e = T[11]), (t = T[12]), (s = T[13])),
          T[14] === Symbol.for("react.memo_cache_sentinel") ? ((i = () => Y(!1)), (T[14] = i)) : (i = T[14]),
          T[15] !== z
            ? ((a = () => {
                ;(Y(!1), z())
              }),
              (T[15] = z),
              (T[16] = a))
            : (a = T[16]),
          T[17] !== N
            ? ((o =
                "change-new" === N || "change-confirm" === N
                  ? (0, n.jsx)(r.A, {
                      id: "lockedChats.pin.closeChangeDescription",
                      defaultMessage:
                        "If you close setup now, your current PIN will stay active and no changes will be made",
                    })
                  : (0, n.jsx)(r.A, {
                      id: "lockedChats.pin.closeCreateDescription",
                      defaultMessage: "If you close setup now, your new PIN won\u2019t be saved",
                    })),
              (T[17] = N),
              (T[18] = o))
            : (o = T[18]),
          T[19] !== a || T[20] !== o
            ? ((c = (0, n.jsx)(g.i$, {
                title: e,
                cancelLabel: t,
                confirmLabel: s,
                confirmColor: "primary",
                isPending: !1,
                onClose: i,
                onConfirm: a,
                children: o,
              })),
              (T[19] = a),
              (T[20] = o),
              (T[21] = c))
            : (c = T[21]),
          c
        )
      }
      let et = L
      Q ? (et = E) : $ && (et = D)
      let es = h.L.newPinInput
      Q ? (es = h.L.currentPinInput) : $ && (es = h.L.confirmPinInput)
      let en = h.L.actionFailed
      if (
        ("invalid" === R
          ? (en = h.L.invalid)
          : "mismatch" === R
            ? (en = h.L.mismatch)
            : "incorrect" === R && (en = h.L.incorrect),
        Q && J)
      ) {
        let e
        ;(T[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, {
              id: "lockedChats.pin.blockedTitle",
              defaultMessage: "Too many incorrect attempts",
            })),
            (T[22] = e))
          : (e = T[22]),
          (m = e))
      } else if ("create" === N) {
        let e
        ;(T[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, { id: "lockedChats.pin.createTitle", defaultMessage: "Create account PIN" })),
            (T[23] = e))
          : (e = T[23]),
          (m = e))
      } else if ($) {
        let e
        ;(T[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, { id: "lockedChats.pin.confirmTitle", defaultMessage: "Confirm PIN" })), (T[24] = e))
          : (e = T[24]),
          (m = e))
      } else if ("unlock" === N) {
        let e
        ;(T[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, { ...h.L.unlockTitle })), (T[25] = e))
          : (e = T[25]),
          (m = e))
      } else if (Q) {
        let e
        ;(T[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, { ...h.L.currentPinTitle })), (T[26] = e))
          : (e = T[26]),
          (m = e))
      } else {
        let e
        ;(T[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, { ...h.L.createNewPinTitle })), (T[27] = e))
          : (e = T[27]),
          (m = e))
      }
      if (Q && J) {
        let e,
          t = Math.max(1, Math.ceil(q / 60))
        ;(T[28] !== t
          ? ((e = (0, n.jsx)("span", {
              role: "alert",
              children: (0, n.jsx)(r.A, {
                id: "lockedChats.pin.blockedDescription",
                defaultMessage: "You can try again in {minutes, plural, one {# minute} other {# minutes}}.",
                values: { minutes: t },
              }),
            })),
            (T[28] = t),
            (T[29] = e))
          : (e = T[29]),
          (f = e))
      } else if ("create" === N) {
        let e
        ;(T[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, {
              id: "lockedChats.pin.createDescriptionWithResetWarning",
              defaultMessage:
                "You\u2019ll use this PIN to access any of your locked chats. Keep this PIN somewhere safe. If you need to reset it later, all your locked chats will be permanently deleted.",
            })),
            (T[30] = e))
          : (e = T[30]),
          (f = e))
      } else if (!Q) {
        let e
        ;(T[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, {
              id: "lockedChats.pin.purpose",
              defaultMessage: "You\u2019ll use this PIN to access any of your locked chats.",
            })),
            (T[31] = e))
          : (e = T[31]),
          (f = e))
      }
      let ei = Q && !J ? "pinEntry" : "narrow"
      ;(T[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { "aria-describedby": void 0 }), (T[32] = y))
        : (y = T[32]),
        T[33] !== Q || T[34] !== O || T[35] !== z
          ? ((x = (e) => {
              e || O || (Q ? z() : Y(!0))
            }),
            (T[33] = Q),
            (T[34] = O),
            (T[35] = z),
            (T[36] = x))
          : (x = T[36]))
      let ea = Q ? "codeEntry" : "default"
      ;(T[37] !== W
        ? ((v = (e) => {
            ;(e.preventDefault(), W())
          }),
          (T[37] = W),
          (T[38] = v))
        : (v = T[38]),
        T[39] !== $ || T[40] !== Q || T[41] !== N
          ? ((C = Q || $ || "create" === N ? (0, n.jsx)(u.I, { asset: a }) : void 0),
            (T[39] = $),
            (T[40] = Q),
            (T[41] = N),
            (T[42] = C))
          : (C = T[42]),
        T[43] !== m
          ? ((b = (0, n.jsx)(l.L3, { className: "select-none", children: m })), (T[43] = m), (T[44] = b))
          : (b = T[44]),
        T[45] !== O || T[46] !== f || T[47] !== C || T[48] !== b
          ? ((_ = (0, n.jsx)(d.c7, {
              icon: C,
              iconClassName: "self-center",
              iconVariant: "outlinedCircle",
              iconLoading: O,
              subtitle: f,
              subtitleSize: "sm",
              subtitleTone: "secondary",
              title: b,
            })),
            (T[45] = O),
            (T[46] = f),
            (T[47] = C),
            (T[48] = b),
            (T[49] = _))
          : (_ = T[49]),
        T[50] !== $ ||
        T[51] !== Q ||
        T[52] !== R ||
        T[53] !== es ||
        T[54] !== et ||
        T[55] !== O ||
        T[56] !== J ||
        T[57] !== H ||
        T[58] !== F ||
        T[59] !== U ||
        T[60] !== K ||
        T[61] !== W ||
        T[62] !== N
          ? ((j =
              Q && J
                ? null
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("label", {
                        className: "sr-only",
                        htmlFor: "account-pin-input",
                        children: (0, n.jsx)(r.A, { ...es }),
                      }),
                      (0, n.jsx)(
                        p,
                        {
                          id: "account-pin-input",
                          value: et,
                          readOnly: O,
                          invalid: null != R,
                          onChange: (e) => {
                            ;(H(), Q ? U(e) : $ ? F(e) : K(e), 4 === e.length && W(e))
                          },
                        },
                        N,
                      ),
                    ],
                  })),
            (T[50] = $),
            (T[51] = Q),
            (T[52] = R),
            (T[53] = es),
            (T[54] = et),
            (T[55] = O),
            (T[56] = J),
            (T[57] = H),
            (T[58] = F),
            (T[59] = U),
            (T[60] = K),
            (T[61] = W),
            (T[62] = N),
            (T[63] = j))
          : (j = T[63]),
        T[64] !== Q || T[65] !== J || T[66] !== B
          ? ((A =
              Q && J && null != B
                ? (0, n.jsx)(c.$, {
                    className: "self-center",
                    type: "button",
                    color: "dangerOutline",
                    size: "medium",
                    onClick: B,
                    children: (0, n.jsx)(r.A, { id: "lockedChats.pin.reset", defaultMessage: "Reset PIN" }),
                  })
                : null),
            (T[64] = Q),
            (T[65] = J),
            (T[66] = B),
            (T[67] = A))
          : (A = T[67]),
        T[68] !== Q || T[69] !== R || T[70] !== J || T[71] !== V
          ? ((w =
              Q && J && "failed" === R
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("p", {
                        role: "alert",
                        className: "text-sm text-danger",
                        children: (0, n.jsx)(r.A, { ...h.L.actionFailed }),
                      }),
                      (0, n.jsx)(c.$, {
                        className: "self-center",
                        type: "button",
                        color: "secondary",
                        onClick: V,
                        children: (0, n.jsx)(r.A, {
                          id: "settings.chatGpt.security.accountPin.retryStatus",
                          defaultMessage: "Try again",
                        }),
                      }),
                    ],
                  })
                : null),
            (T[68] = Q),
            (T[69] = R),
            (T[70] = J),
            (T[71] = V),
            (T[72] = w))
          : (w = T[72]),
        T[73] !== Q || T[74] !== R || T[75] !== en || T[76] !== J
          ? ((k =
              null == R || (Q && J)
                ? null
                : (0, n.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: (0, n.jsx)(r.A, { ...en }),
                  })),
            (T[73] = Q),
            (T[74] = R),
            (T[75] = en),
            (T[76] = J),
            (T[77] = k))
          : (k = T[77]),
        T[78] !== _ || T[79] !== j || T[80] !== A || T[81] !== w || T[82] !== k
          ? ((M = (0, n.jsxs)(d.OO, { className: "gap-4 text-center", children: [_, j, A, w, k] })),
            (T[78] = _),
            (T[79] = j),
            (T[80] = A),
            (T[81] = w),
            (T[82] = k),
            (T[83] = M))
          : (M = T[83]))
      let eo = O || (Q && J)
      return (
        T[84] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, n.jsx)(r.A, { ...h.L.continue })), (T[84] = P))
          : (P = T[84]),
        T[85] !== eo
          ? ((I = (0, n.jsx)("button", {
              type: "submit",
              className: "sr-only",
              tabIndex: -1,
              disabled: eo,
              children: P,
            })),
            (T[85] = eo),
            (T[86] = I))
          : (I = T[86]),
        T[87] !== O || T[88] !== M || T[89] !== I || T[90] !== ea || T[91] !== v
          ? ((G = (0, n.jsxs)(d.R4, { as: "form", variant: ea, "aria-busy": O, onSubmit: v, children: [M, I] })),
            (T[87] = O),
            (T[88] = M),
            (T[89] = I),
            (T[90] = ea),
            (T[91] = v),
            (T[92] = G))
          : (G = T[92]),
        T[93] !== G || T[94] !== ei || T[95] !== x
          ? ((S = (0, n.jsx)(l.lG, {
              open: !0,
              size: ei,
              variant: "form",
              contentProps: y,
              onOpenChange: x,
              children: G,
            })),
            (T[93] = G),
            (T[94] = ei),
            (T[95] = x),
            (T[96] = S))
          : (S = T[96]),
        S
      )
    }
  },
  U4Xt(e, t, s) {
    var n = s("Qgfj")
    let i = (0, n.YK)({
        title: { id: "settingsModal.accountPin.title", defaultMessage: "Account PIN" },
        rowDescription: {
          id: "settingsModal.accountPin.rowDescription.access",
          defaultMessage: "Control how you access your locked chats.",
        },
        createPinLabel: { id: "settingsModal.accountPin.createPin.label", defaultMessage: "Create account PIN" },
        createPinDescription: {
          id: "settingsModal.accountPin.createPin.description.new_messages",
          defaultMessage:
            "Create a PIN to lock and hide the chats you choose. Once locked, new messages in that chat won\u2019t contribute to memory.",
        },
        createPinButton: { id: "settingsModal.accountPin.createPin.button", defaultMessage: "Create a PIN" },
        changePinLabel: { id: "settingsModal.accountPin.changePin.label", defaultMessage: "Change PIN" },
        changePinButton: { id: "settingsModal.accountPin.changePin.button", defaultMessage: "Change" },
        resetPinLabel: { id: "settingsModal.accountPin.resetPin.label", defaultMessage: "Reset PIN" },
        resetPinDescription: {
          id: "settingsModal.accountPin.resetPin.description",
          defaultMessage: "Only reset your PIN if you forgot your current one.",
        },
        resetPinButton: { id: "settingsModal.accountPin.resetPin.button", defaultMessage: "Reset" },
      }),
      a = (0, n.YK)({
        ...i,
        unlockTitle: { id: "lockedChats.pin.title", defaultMessage: "Enter PIN" },
        currentPinTitle: { id: "settingsModal.accountPin.currentPin.title", defaultMessage: "Current PIN" },
        createNewPinTitle: { id: "settingsModal.accountPin.createNewPin.title", defaultMessage: "Create new PIN" },
        resetWarningTitle: { id: "settingsModal.accountPin.resetWarning.title", defaultMessage: "Reset your PIN?" },
        resetWarningDescription: {
          id: "settingsModal.accountPin.resetWarning.description",
          defaultMessage:
            "Resetting your PIN lets you create a new PIN, but deletes all content protected by your previous PIN.",
        },
        resetWarningConfirm: {
          id: "settingsModal.accountPin.resetWarning.confirm",
          defaultMessage: "Reset PIN & Delete",
        },
        currentPinInput: { id: "settings.chatGpt.security.accountPin.currentPinInput", defaultMessage: "Current PIN" },
        confirmPinInput: {
          id: "settings.chatGpt.security.accountPin.confirmPinInput",
          defaultMessage: "Confirm new PIN",
        },
        newPinInput: { id: "settings.chatGpt.security.accountPin.newPinInput", defaultMessage: "New PIN" },
        invalid: { id: "settings.chatGpt.security.accountPin.invalid", defaultMessage: "Enter a four-digit PIN" },
        mismatch: {
          id: "settings.chatGpt.security.accountPin.mismatch",
          defaultMessage: "Those PINs do not match. Try again.",
        },
        incorrect: {
          id: "settings.chatGpt.security.accountPin.incorrect",
          defaultMessage: "That PIN is incorrect. Try again.",
        },
        actionFailed: {
          id: "settings.chatGpt.security.accountPin.actionFailed",
          defaultMessage: "Locked chats are temporarily unavailable. Try again.",
        },
        createSubmit: { id: "settings.chatGpt.security.accountPin.createSubmit", defaultMessage: "Create PIN" },
        changeSubmit: { id: "settings.chatGpt.security.accountPin.changeSubmit", defaultMessage: "Change PIN" },
        continue: { id: "settings.chatGpt.security.accountPin.continue", defaultMessage: "Continue" },
      })
    s.d(t, {}, { L: a })
  },
  i7nV(e, t, s) {
    var n = s("S2r0"),
      i = s("Kwur")
    s.d(
      t,
      {},
      {
        v: function (e) {
          return (0, n.j)({
            queryKey: ["chatgpt-security", e, "account-pin"],
            queryFn: ({ signal: t }) =>
              i.Request.safeGet("/locked_chats/status", { additionalHeaders: { "ChatGPT-Account-ID": e }, signal: t }),
            staleTime: 0,
            retry: !1,
          })
        },
      },
    )
  },
  KG2G(e, t, s) {
    let n = "account_pin_reset_reauth_state"
    s.d(
      t,
      {},
      {
        Aj: n,
        As: "codex.browser.pendingAccountPinReset",
        bZ: function (e, t) {
          if (e.get(n) !== t) return e
          let s = new URLSearchParams(e)
          return (s.delete(n), s)
        },
      },
    )
  },
  VWTw(e, t, s) {
    var n = s("Qgfj"),
      i = s("vw1R")
    let a = (0, n.YK)({
        advanced: {
          id: "settings.chatGpt.security.advancedProtection.title",
          defaultMessage: "Advanced account security",
        },
        cyber: { id: "settings.chatGpt.security.cyber.title", defaultMessage: "Daybreak" },
        recoveryKeys: {
          id: "settings.chatGpt.security.advancedProtection.recoveryKeys.title",
          defaultMessage: "Recovery keys",
        },
        disable: {
          id: "settings.chatGpt.security.advancedProtection.disable.title",
          defaultMessage: "Disable advanced account security",
        },
        yubikey: { id: "settings.chatGpt.security.passkeys.yubikey", defaultMessage: "Get a YubiKey bundle" },
      }),
      o = {
        advanced: { section: "security", id: "security-advanced-account-security", title: a.advanced },
        cyber: { section: "security", id: "security-daybreak", title: a.cyber },
        recoveryKeys: {
          section: "security",
          id: "security-recovery-keys",
          title: a.recoveryKeys,
          searchParams: { view: "advanced-protection" },
        },
        disable: {
          section: "security",
          id: "security-disable-advanced-account-security",
          title: a.disable,
          searchParams: { view: "advanced-protection" },
        },
        yubikey: { section: "security", id: "security-yubikey", title: a.yubikey, searchParams: { view: "passkeys" } },
      }
    s.d(
      t,
      {},
      {
        Z9: o,
        dA: function (e, t) {
          return t && null != e && (!0 === e.aas_eligible || !0 === e.advanced_protection_mode_enabled)
        },
        p2: function (e, t) {
          return e && null != t && !(0, i.o)(t)
        },
      },
    )
  },
  FBm3(e, t, s) {
    var n = s("Kwur"),
      i = s("rvFo")
    let a = new (s("kK7d").lw)({ getAdditionalHeaders: n.Zj })
    s.d(
      t,
      {},
      {
        IN: a,
        dI: function (e, { includeTrustedDevices: t = !1, sessionReviewUserId: s } = {}) {
          let n = { "ChatGPT-Account-ID": e }
          return {
            addPassword: {
              queryKey: ["chatgpt-security", e, "add-password-eligibility"],
              queryFn: ({ signal: e }) =>
                a.safeGet("/accounts/add_password/eligibility", { additionalHeaders: n, signal: e }),
              staleTime: i.D.ONE_MINUTE,
              retry: !1,
            },
            changePassword: {
              queryKey: ["chatgpt-security", e, "change-password-eligibility"],
              queryFn: ({ signal: e }) =>
                a.safeGet("/accounts/change_password/eligibility", { additionalHeaders: n, signal: e }),
              staleTime: i.D.ONE_MINUTE,
              retry: !1,
            },
            mfa: {
              queryKey: ["chatgpt-security", e, "mfa"],
              queryFn: ({ signal: e }) => a.safeGet("/accounts/mfa_info", { additionalHeaders: n, signal: e }),
              staleTime: i.D.ONE_MINUTE,
              retry: !1,
            },
            sessions: {
              queryKey: ["chatgpt-security", e, "sessions", { includeTrustedDevices: t }],
              queryFn: ({ signal: i }) =>
                a.safeGet("/accounts/sessions", {
                  additionalHeaders: n,
                  expectedIdentity: s ? { accountId: e, userId: s } : void 0,
                  parameters: { query: { include_trusted_devices: t || void 0 } },
                  signal: i,
                }),
              staleTime: i.D.ONE_MINUTE,
              retry: !1,
            },
            linkedApps: {
              queryKey: ["chatgpt-security", e, "linked-apps"],
              queryFn: ({ signal: e }) => a.safeGet("/client_applications", { additionalHeaders: n, signal: e }),
              staleTime: i.D.ONE_MINUTE,
              retry: !1,
            },
            cyber: {
              queryKey: ["chatgpt-security", e, "cyber"],
              queryFn: ({ signal: e }) => a.safeGet("/cyber_verification/status", { additionalHeaders: n, signal: e }),
              staleTime: i.D.ONE_MINUTE,
              retry: !1,
            },
            protection: {
              queryKey: ["chatgpt-security", e, "protection"],
              queryFn: ({ signal: e }) =>
                a.safeGet("/accounts/security_settings/info", { additionalHeaders: n, signal: e }),
              staleTime: i.D.ONE_MINUTE,
              refetchOnWindowFocus: "always",
              retry: !1,
            },
          }
        },
      },
    )
  },
  pQJN(e, t, s) {
    var n = s("qmMi"),
      i = s("Qgfj"),
      a = s("OAko"),
      o = s("OWtl"),
      r = s("JYRT")
    let c = (0, i.YK)({
        csp: { id: "settings.chatGpt.security.apps.enforceCsp.title", defaultMessage: "Enforce CSP for custom apps" },
        deviceCode: {
          id: "settings.chatGpt.security.deviceCode.codexAndOffice.label",
          defaultMessage: "Enable device code sign-in for Codex, Excel, PowerPoint, and Word",
        },
      }),
      l = {
        csp: { section: "security", id: "security-csp-for-custom-apps", title: c.csp },
        deviceCode: { section: "security", id: "security-device-code-sign-in", title: c.deviceCode },
      },
      d = (0, n.i1)(o.u, (e, { get: t }) => {
        let s = t(a.LI).data?.accounts?.find(({ id: t }) => t === e),
          n = t(r.X, "2562735250")
        return {
          csp: null != s && !s.is_fedramp_compliant_workspace && n?.get("enabled", !1) === !0,
          deviceCode: s?.structure === "personal",
        }
      })
    s.d(t, {}, { J: l, q: d })
  },
  tzt8(e, t, s) {
    let n = (0, s("Qgfj").YK)({
      title: { id: "chatgpt.settings.security.history.title", defaultMessage: "Security history" },
      description: {
        id: "chatgpt.settings.security.history.description",
        defaultMessage: "Review login activity and changes to your security settings.",
      },
    })
    s.d(t, {}, { d: n })
  },
  a7x6(e, t, s) {
    var n = s("rvFo"),
      i = s("eShZ"),
      a = s("FBm3"),
      o = s("AzPI")
    s.d(
      t,
      {},
      {
        P: function (e) {
          return {
            queryKey: ["chatgpt-security", e, "history"],
            queryFn: ({ pageParam: t, signal: s }) => {
              var n, r, c
              let l, d, u
              return (
                (n = e),
                (r = t),
                (c = s),
                (l = performance.now()),
                (d = null == r ? "initial" : "pagination"),
                (u = a.IN.safeGet("/accounts/user_events", {
                  additionalHeaders: { "ChatGPT-Account-ID": n },
                  signal: c,
                  parameters: { query: { limit: 20, cursor: r ?? void 0 } },
                }))
                  .then(
                    (e) => {
                      ;(0, o.f)("security_history_request_completed", {
                        phase: d,
                        outcome: c.aborted ? "cancelled" : "success",
                        duration_ms: performance.now() - l,
                        event_count: e.events.length,
                        visible_event_count: e.events.length,
                        has_next_page: null != e.next_cursor,
                      })
                    },
                    (e) => {
                      let t = {
                        phase: d,
                        outcome: c.aborted ? "cancelled" : "error",
                        duration_ms: performance.now() - l,
                      }
                      ;(e instanceof i.FetchError && null != e.responseStatus && (t.http_status = e.responseStatus),
                        (0, o.f)("security_history_request_completed", t))
                    },
                  )
                  .catch(() => {}),
                u
              )
            },
            initialPageParam: null,
            getNextPageParam: (e) => e.next_cursor ?? void 0,
            maxPages: 5,
            gcTime: 0,
            refetchOnMount: "always",
            staleTime: n.D.ONE_MINUTE,
            retry: !1,
          }
        },
        S: function (e) {
          return {
            queryKey: ["chatgpt-security", e, "history-availability"],
            queryFn: ({ signal: t }) =>
              (async function (e, t) {
                let s,
                  n = performance.now(),
                  r = { outcome: "scan_limit", request_count: 0 },
                  c = new Set()
                try {
                  for (let n = 0; n < 5; n += 1) {
                    r.request_count = n + 1
                    let i = await a.IN.safeGet("/accounts/user_events", {
                      additionalHeaders: { "ChatGPT-Account-ID": e },
                      signal: t,
                      parameters: { query: { limit: 20, cursor: s } },
                    })
                    if (i.events.length > 0) return ((r.outcome = "available"), !0)
                    if (null == i.next_cursor || c.has(i.next_cursor)) {
                      r.outcome = null == i.next_cursor ? "empty" : "repeated_cursor"
                      break
                    }
                    ;((s = i.next_cursor), c.add(s))
                  }
                  return !1
                } catch (e) {
                  throw (
                    (r.outcome = "error"),
                    e instanceof i.FetchError && null != e.responseStatus && (r.http_status = e.responseStatus),
                    e
                  )
                } finally {
                  ;(0, o.f)("security_history_availability_checked", {
                    ...r,
                    outcome: t.aborted ? "cancelled" : r.outcome,
                    duration_ms: performance.now() - n,
                  })
                }
              })(e, t),
            refetchOnMount: "always",
            staleTime: n.D.ONE_MINUTE,
            retry: !1,
          }
        },
      },
    )
  },
  AzPI(e, t, s) {
    s.d(t, {}, { U: function (e, t) {}, f: function (e, t = {}) {} })
  },
  SJoA(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("fMor"),
      o = s("plnw"),
      r = s("yfk0"),
      c = s("GCvj"),
      l = s("mqZc"),
      d = s("on57"),
      u = s("zd8w"),
      p = s("HOLv"),
      h = s("bVeK")
    let g = new Set([
      "assets.chatgpt.site",
      "auth-cdn.oaistatic.com",
      "cdn.openai.com",
      "cdn.oaistatic.com",
      "files.openai.com",
      "persistent.oaistatic.com",
    ])
    function m(e) {
      let t,
        s,
        a = (0, i.c)(6),
        { children: o, size: r, borderless: c } = e,
        l = !(void 0 !== c && c) && "border border-default",
        u = "detail" === (void 0 === r ? "list" : r) ? "size-12 rounded-xl" : "size-8 rounded-lg"
      return (
        a[0] !== l || a[1] !== u
          ? ((t = (0, d.A)("flex shrink-0 items-center justify-center select-none", l, u)),
            (a[0] = l),
            (a[1] = u),
            (a[2] = t))
          : (t = a[2]),
        a[3] !== o || a[4] !== t
          ? ((s = (0, n.jsx)("span", { className: t, "aria-hidden": !0, children: o })),
            (a[3] = o),
            (a[4] = t),
            (a[5] = s))
          : (s = a[5]),
        s
      )
    }
    s.d(
      t,
      {},
      {
        O: function (e) {
          let t,
            s,
            o = (0, i.c)(10),
            { app: r, borderless: c } = e,
            l = void 0 !== c && c
          switch (r.type) {
            case "apple": {
              let e
              ;(o[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(h.YEY, {})), (o[0] = e))
                : (e = o[0]),
                (t = e))
              break
            }
            case "codex_cli": {
              let e
              ;(o[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(p.I, { asset: a.E })), (o[1] = e))
                : (e = o[1]),
                (t = e))
              break
            }
            case "oai_apps": {
              let e
              ;(o[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(h.HUG, {})), (o[2] = e))
                : (e = o[2]),
                (t = e))
              break
            }
            case "kakao_talk":
            case "viber": {
              let e, s
              ;(o[3] !== r.name
                ? ((e = Array.from(r.name.trim())[0]?.toUpperCase()), (o[3] = r.name), (o[4] = e))
                : (e = o[4]),
                o[5] !== e
                  ? ((s = (0, n.jsx)("span", { className: "text-sm font-medium text-secondary", children: e })),
                    (o[5] = e),
                    (o[6] = s))
                  : (s = o[6]),
                (t = s))
            }
          }
          return (
            o[7] !== l || o[8] !== t
              ? ((s = (0, n.jsx)(m, { borderless: l, children: t })), (o[7] = l), (o[8] = t), (o[9] = s))
              : (s = o[9]),
            s
          )
        },
        y: function (e) {
          let t,
            s,
            a,
            h,
            f = (0, i.c)(23),
            { app: y, size: x, borderless: v } = e,
            C = void 0 === x ? "list" : x,
            b = void 0 !== v && v,
            _ = "codex_generated_site" === y.client_app_type,
            j = "ads" === y.client_app_type
          f[0] !== y.logo_uri
            ? ((t = (function (e) {
                if (null == e || "" === e.trim()) return null
                try {
                  let t = new URL(e.trim())
                  return "https:" === t.protocol && g.has(t.hostname) ? t.href : null
                } catch {
                  return null
                }
              })(y.logo_uri)),
              (f[0] = y.logo_uri),
              (f[1] = t))
            : (t = f[1])
          let A = t,
            [w, k] = (0, u.useState)(null),
            [M, P] = (0, u.useState)(null),
            I = null != A && M === A,
            G = null != A && w === A && !I
          if (_) {
            let e,
              t = "detail" === C ? l.g : c.t
            ;(f[2] !== t
              ? ((e = (0, n.jsx)(p.I, { className: "shrink-0", asset: t, focusable: "false" })), (f[2] = t), (f[3] = e))
              : (e = f[3]),
              (s = e))
          } else if (j) {
            let e,
              t = "detail" === C ? r.o : o.T
            ;(f[4] !== t
              ? ((e = (0, n.jsx)(p.I, { className: "shrink-0", asset: t, focusable: "false" })), (f[4] = t), (f[5] = e))
              : (e = f[5]),
              (s = e))
          } else {
            let e,
              t,
              i,
              a = "detail" === C ? "text-xl" : "text-sm"
            ;(f[6] !== a ? ((e = (0, d.A)("font-medium text-secondary", a)), (f[6] = a), (f[7] = e)) : (e = f[7]),
              f[8] !== y.name
                ? ((t = Array.from(y.name.trim())[0]?.toUpperCase()), (f[8] = y.name), (f[9] = t))
                : (t = f[9]),
              f[10] !== e || f[11] !== t
                ? ((i = (0, n.jsx)("span", { className: e, children: t })), (f[10] = e), (f[11] = t), (f[12] = i))
                : (i = f[12]),
              (s = i))
          }
          let S = !G && s
          return (
            f[13] !== I || f[14] !== G || f[15] !== A || f[16] !== C
              ? ((a =
                  null == A || I
                    ? null
                    : (0, n.jsx)(
                        "img",
                        {
                          className: (0, d.A)("detail" === C ? "size-10" : "size-6", "object-contain", !G && "hidden"),
                          alt: "",
                          src: A,
                          referrerPolicy: "no-referrer",
                          onLoad: () => {
                            ;(k(A), P(null))
                          },
                          onError: () => P(A),
                        },
                        A,
                      )),
                (f[13] = I),
                (f[14] = G),
                (f[15] = A),
                (f[16] = C),
                (f[17] = a))
              : (a = f[17]),
            f[18] !== b || f[19] !== C || f[20] !== S || f[21] !== a
              ? ((h = (0, n.jsxs)(m, { size: C, borderless: b, children: [S, a] })),
                (f[18] = b),
                (f[19] = C),
                (f[20] = S),
                (f[21] = a),
                (f[22] = h))
              : (h = f[22]),
            h
          )
        },
      },
    )
  },
  c0c0(e, t, s) {
    let n = (0, s("Qgfj").YK)({
        totp: { id: "settings.chatGpt.security.authenticator", defaultMessage: "Authenticator app" },
        push_auth: { id: "settings.chatGpt.security.mfa.push", defaultMessage: "Push notifications" },
        sms: { id: "settings.chatGpt.security.mfa.sms", defaultMessage: "Text message" },
        group: { id: "settings.chatGpt.security.mfa.title", defaultMessage: "Multi-factor authentication (MFA)" },
      }),
      i = {
        totp: { section: "security", id: "security-authenticator", title: n.totp },
        push_auth: { section: "security", id: "security-push", title: n.push_auth },
        sms: { section: "security", id: "security-text-message", title: n.sms },
        group: { section: "security", id: "security-multi-factor-authentication", title: n.group },
      }
    s.d(
      t,
      {},
      {
        L: function (e) {
          return { showPush: !0 === e.show_push_auth, showSms: !0 === e.show_sms }
        },
        f: i,
      },
    )
  },
  ZL1D(e, t, s) {
    var n = s("mBJV"),
      i = s("ASxG"),
      a = s("yGJW")
    n.crf.CHATGPT_SECURITY_RECOMMENDATION_SURFACE_SECURITY_SETTINGS
    let o = i.Ikc({
        recommendationId: i.k5n(["add_passkey", "add_sms_backup", "add_email", "review_sessions"]),
        decisionId: i.YjP().optional(),
        policyVersion: i.YjP().optional(),
        presentationId: i.uRe(),
        actionAttemptId: i.uRe(),
        position: i.aig().int().positive(),
        surface: i.k5n(n.crf),
      }),
      r = {
        add_passkey: "CHATGPT_SECURITY_RECOMMENDATION_TYPE_ADD_PASSKEY",
        add_sms_backup: "CHATGPT_SECURITY_RECOMMENDATION_TYPE_ADD_SMS_BACKUP",
        add_email: "CHATGPT_SECURITY_RECOMMENDATION_TYPE_ADD_EMAIL",
        review_sessions: "CHATGPT_SECURITY_RECOMMENDATION_TYPE_REVIEW_SESSIONS",
      }
    s.d(
      t,
      {},
      {
        Ce: o,
        fY: function (e, t, s) {
          if (t && s)
            try {
              ;(0, a.yy)(e, n.vKV, {
                stage: "CHATGPT_SECURITY_RECOMMENDATION_STAGE_ACTION_STARTED",
                actionAttemptId: t,
                mfaRequestId: s,
              })
            } catch {}
        },
        gM: function (e, t) {
          if (t) {
            var s = t.actionAttemptId
            try {
              ;(0, a.yy)(e, n.vKV, {
                decisionId: t.decisionId,
                policyVersion: t.policyVersion,
                presentationId: t.presentationId,
                actionAttemptId: s,
                recommendationType: r[t.recommendationId],
                stage: "CHATGPT_SECURITY_RECOMMENDATION_STAGE_ACTION_COMPLETED",
                surface: t.surface,
                position: t.position,
              })
            } catch {}
          }
        },
      },
    )
  },
  h5qp(e, t, s) {
    var n = s("qmMi"),
      i = s("Qgfj"),
      a = s("SPnB"),
      o = s("YJm0"),
      r = s("g2p6"),
      c = s("OAko"),
      l = s("OWtl"),
      d = s("jBHQ"),
      u = s("U4Xt"),
      p = s("VWTw"),
      h = s("FBm3"),
      g = s("pQJN"),
      m = s("tzt8"),
      f = s("a7x6"),
      y = s("c0c0")
    let x = (0, i.YK)({
        passkeys: {
          id: "settings.chatGpt.security.loginMethods.passkeys.title",
          defaultMessage: "Passkeys and security keys",
        },
        password: { id: "settings.chatGpt.security.password.title", defaultMessage: "Password" },
        sessions: { id: "settings.chatGpt.security.activeSessions", defaultMessage: "Active sessions" },
        linkedApps: {
          id: "settings.chatGpt.security.linkedApps.signInWithChatGpt.title",
          defaultMessage: "Sign in with ChatGPT",
        },
      }),
      v = {
        passkeys: { section: "security", id: "security-passkeys", title: x.passkeys },
        password: { section: "security", id: "security-password", title: x.password },
        sessions: { section: "security", id: "security-active-sessions", title: x.sessions },
        linkedApps: { section: "security", id: "security-linked-apps", title: x.linkedApps },
        history: { section: "security", id: "security-history", title: m.d.title },
        accountPin: { section: "security", id: "security-account-pin", title: u.L.title },
      },
      C = (0, n.vU)(l.u, f.S),
      b = (0, n.i1)(l.u, ({ accountId: e, search: t }, { get: s }) => {
        let n = t ? s(o.t, e, { enabled: !1 }).data : s(o.t, e).data
        return {
          accountPin: null != s(a.chatGptAuthenticatedUserId$) && s(d.P, "2726095122"),
          linkedApps: n?.account.is_fedramp_compliant_workspace === !1,
        }
      }),
      _ = (0, n.vU)(l.u, (e) => (0, h.dI)(e).mfa),
      j = (0, n.vU)(l.u, (e) => (0, h.dI)(e).changePassword),
      A = (0, n.vU)(l.u, (e) => (0, h.dI)(e).addPassword),
      w = (0, n.vU)(l.u, (e) => (0, h.dI)(e).protection),
      k = (0, n.vU)(l.u, (e) => (0, h.dI)(e).cyber)
    function M(e, t) {
      return !0 === e ? "change" : !1 === e && !0 === t ? "add" : null
    }
    function P(e, t, s) {
      return e && (t || s)
    }
    let I = (0, n.un)(l.u, ({ get: e }) => {
      let t = e(r.Sk)
      if (null == t) return []
      let s = [v.sessions],
        n = e(_, t, { enabled: !1 }),
        i = e(o.t, t, { enabled: !1 }).data
      if (n.isSuccess && P(null != e(a.PO).email, i?.features?.includes("mfa") === !0, !0 === n.data.mfa_enabled_v2)) {
        let { showPush: e, showSms: t } = (0, y.L)(n.data)
        ;(s.push(v.passkeys, y.f.group, y.f.totp),
          null != i && !0 !== i.account.is_fedramp_compliant_workspace && s.push(p.Z9.yubikey),
          e && s.push(y.f.push_auth),
          t && s.push(y.f.sms))
      }
      let l = e(j, t, { enabled: !1 }),
        d = e(A, t, { enabled: !1 })
      null != M(l.isSuccess ? !0 === l.data.eligible : void 0, d.isSuccess ? !0 === d.data.eligible : void 0) &&
        s.push(v.password)
      let u = e(b, { accountId: t, search: !0 }),
        h = e(w, t, { enabled: !1 })
      ;(0, p.dA)(h.data, h.isSuccess) &&
        (s.push(p.Z9.advanced),
        h.data?.advanced_protection_mode_enabled === !0 && s.push(p.Z9.recoveryKeys, p.Z9.disable))
      let m = e(k, t, { enabled: !1 }).data,
        f = e(c.LI).data?.accounts?.find(({ id: e }) => e === t)?.plan_type
      ;(0, p.p2)(m?.tac1_enabled === !0, f) && s.push(p.Z9.cyber)
      let x = e(g.q, t)
      ;(x.csp && s.push(g.J.csp), x.deviceCode && s.push(g.J.deviceCode))
      let I = e(C, t, { enabled: !1 })
      return (
        I.isSuccess && I.data && s.push(v.history),
        u.accountPin && s.push(v.accountPin),
        u.linkedApps && s.push(v.linkedApps),
        s
      )
    })
    s.d(t, {}, { B4: v, J8: C, gE: M, kU: b, uF: P, zo: I })
  },
  pO0d(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("oyxz"),
      o = s("Wf1j"),
      r = s("AWNZ"),
      c = s("DDOY")
    function l(e) {
      let t,
        s = (0, i.c)(2),
        { title: o } = e
      return (
        s[0] !== o
          ? ((t =
              "localizedText" in o ? (0, n.jsx)(n.Fragment, { children: o.localizedText }) : (0, n.jsx)(a.A, { ...o })),
            (s[0] = o),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    s.d(
      t,
      {},
      {
        Ct: l,
        GC: function (e) {
          let t,
            s,
            o,
            c,
            d,
            u,
            p,
            h,
            g,
            m = (0, i.c)(19)
          m[0] !== e
            ? (({ entry: s, anchored: d, description: t, renderLabel: c, ...o } = e),
              (m[0] = e),
              (m[1] = t),
              (m[2] = s),
              (m[3] = o),
              (m[4] = c),
              (m[5] = d))
            : ((t = m[1]), (s = m[2]), (o = m[3]), (c = m[4]), (d = m[5]))
          let f = void 0 === d || d
          m[6] !== s.title ? ((u = (0, n.jsx)(l, { title: s.title })), (m[6] = s.title), (m[7] = u)) : (u = m[7])
          let y = u,
            x = f ? s.id : void 0
          return (
            m[8] !== y || m[9] !== c ? ((p = null == c ? y : c(y)), (m[8] = y), (m[9] = c), (m[10] = p)) : (p = m[10]),
            m[11] !== t || m[12] !== s.description
              ? ((h = null == s.description ? t : (0, n.jsx)(a.A, { ...s.description })),
                (m[11] = t),
                (m[12] = s.description),
                (m[13] = h))
              : (h = m[13]),
            m[14] !== o || m[15] !== x || m[16] !== p || m[17] !== h
              ? ((g = (0, n.jsx)(r.ic, { ...o, searchAnchor: x, label: p, description: h })),
                (m[14] = o),
                (m[15] = x),
                (m[16] = p),
                (m[17] = h),
                (m[18] = g))
              : (g = m[18]),
            g
          )
        },
        ek: function (e) {
          let t,
            s,
            a = (0, i.c)(12),
            { entry: r, anchored: l, className: d, children: u } = e,
            p = void 0 === l || l,
            h = (0, o.A)(),
            g = p ? r.id : void 0,
            m = p ? r.id : void 0,
            f = p ? -1 : void 0,
            y = p ? "group" : void 0
          return (
            a[0] !== p || a[1] !== r || a[2] !== h
              ? ((t = p ? (0, c.hz)(h, r.title) : void 0), (a[0] = p), (a[1] = r), (a[2] = h), (a[3] = t))
              : (t = a[3]),
            a[4] !== u || a[5] !== d || a[6] !== g || a[7] !== m || a[8] !== f || a[9] !== y || a[10] !== t
              ? ((s = (0, n.jsx)("div", {
                  id: g,
                  "data-settings-search-entry": m,
                  tabIndex: f,
                  role: y,
                  "aria-label": t,
                  className: d,
                  children: u,
                })),
                (a[4] = u),
                (a[5] = d),
                (a[6] = g),
                (a[7] = m),
                (a[8] = f),
                (a[9] = y),
                (a[10] = t),
                (a[11] = s))
              : (s = a[11]),
            s
          )
        },
        iu: function (e) {
          let t,
            s,
            a,
            o = (0, i.c)(6)
          return (
            o[0] !== e ? (({ action: t, ...s } = e), (o[0] = e), (o[1] = t), (o[2] = s)) : ((t = o[1]), (s = o[2])),
            o[3] !== t || o[4] !== s
              ? ((a = (0, n.jsx)(r.ic, { ...s, control: t })), (o[3] = t), (o[4] = s), (o[5] = a))
              : (a = o[5]),
            a
          )
        },
        kk: function (e) {
          let t,
            s,
            o,
            c,
            d,
            u,
            p,
            h = (0, i.c)(15)
          h[0] !== e
            ? (({ entry: s, anchored: c, description: t, ...o } = e),
              (h[0] = e),
              (h[1] = t),
              (h[2] = s),
              (h[3] = o),
              (h[4] = c))
            : ((t = h[1]), (s = h[2]), (o = h[3]), (c = h[4]))
          let g = void 0 === c || c ? s.id : void 0
          return (
            h[5] !== s.title ? ((d = (0, n.jsx)(l, { title: s.title })), (h[5] = s.title), (h[6] = d)) : (d = h[6]),
            h[7] !== t || h[8] !== s.description
              ? ((u = null == s.description ? t : (0, n.jsx)(a.A, { ...s.description })),
                (h[7] = t),
                (h[8] = s.description),
                (h[9] = u))
              : (u = h[9]),
            h[10] !== o || h[11] !== g || h[12] !== d || h[13] !== u
              ? ((p = (0, n.jsx)(r.kG, { ...o, searchAnchor: g, label: d, description: u })),
                (h[10] = o),
                (h[11] = g),
                (h[12] = d),
                (h[13] = u),
                (h[14] = p))
              : (p = h[14]),
            p
          )
        },
      },
    )
  },
  BSnr(e, t, s) {
    s.d(t, { X: () => o })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("on57")
    let o = Object.assign(
      function (e) {
        let t,
          s,
          o = (0, i.c)(6),
          { children: r, id: c, className: l } = e
        return (
          o[0] !== l ? ((t = (0, a.A)("flex flex-col", l)), (o[0] = l), (o[1] = t)) : (t = o[1]),
          o[2] !== r || o[3] !== c || o[4] !== t
            ? ((s = (0, n.jsx)("section", { id: c, className: t, children: r })),
              (o[2] = r),
              (o[3] = c),
              (o[4] = t),
              (o[5] = s))
            : (s = o[5]),
          s
        )
      },
      {
        Header: function (e) {
          let t,
            s,
            o,
            r,
            c,
            l,
            d,
            u = (0, i.c)(33),
            {
              title: p,
              subtitle: h,
              actions: g,
              actionsAlignment: m,
              className: f,
              size: y,
              showDivider: x,
              titleGap: v,
              spacing: C,
              subtitlePlacement: b,
              subtitleWrap: _,
            } = e,
            j = void 0 === y ? "default" : y,
            A = void 0 === C ? "default" : C,
            w = void 0 === b ? "below-title" : b,
            k = void 0 === _ ? "balance" : _,
            M = null != p,
            P = null != h,
            I = null != g,
            G = "compact" === j
          u[0] !== G || u[1] !== h || u[2] !== w || u[3] !== k
            ? ((t = h
                ? (0, n.jsx)("div", {
                    className: (0, a.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === k ? "text-balance" : "text-wrap",
                      G ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === w && "w-full",
                    ),
                    children: h,
                  })
                : null),
              (u[0] = G),
              (u[1] = h),
              (u[2] = w),
              (u[3] = k),
              (u[4] = t))
            : (t = u[4])
          let S = t
          if (!M && !P && !I) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(n.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let T =
              M && (void 0 === x || x) && "[[data-settings-panel]_&]:border-b [[data-settings-panel]_&]:border-default",
            N = "below-header" === w ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            E = P && "compact" === A && "pb-2",
            L = P && "compact" !== A && "pb-3"
          u[6] !== f ||
          u[7] !== P ||
          u[8] !== G ||
          u[9] !== A ||
          u[10] !== E ||
          u[11] !== L ||
          u[12] !== T ||
          u[13] !== N
            ? ((s = (0, a.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                T,
                N,
                E,
                L,
                !P && (0, a.A)("items-center pb-1.5", "compact" === A ? "min-h-8" : "min-h-toolbar"),
                P && G && "items-center",
                P && !G && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = P),
              (u[8] = G),
              (u[9] = A),
              (u[10] = E),
              (u[11] = L),
              (u[12] = T),
              (u[13] = N),
              (u[14] = s))
            : (s = u[14])
          let D =
            "none" === (void 0 === v ? "default" : v)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[15] !== D ? ((o = (0, a.A)("flex min-w-0 flex-1 flex-col", D)), (u[15] = D), (u[16] = o)) : (o = u[16]),
            u[17] !== P || u[18] !== j || u[19] !== p
              ? ((r = p
                  ? (0, n.jsx)("div", {
                      className: (0, a.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === j && "text-sm leading-[18px]",
                        ("large" === j || ("default" === j && P)) && "text-lg",
                        ("base" === j || ("default" === j && !P)) && "text-base",
                      ),
                      children: p,
                    })
                  : null),
                (u[17] = P),
                (u[18] = j),
                (u[19] = p),
                (u[20] = r))
              : (r = u[20]))
          let R = "below-title" === w ? S : null
          ;(u[21] !== o || u[22] !== r || u[23] !== R
            ? ((c = (0, n.jsxs)("div", { className: o, children: [r, R] })),
              (u[21] = o),
              (u[22] = r),
              (u[23] = R),
              (u[24] = c))
            : (c = u[24]),
            u[25] !== g || u[26] !== m
              ? ((l = g
                  ? (0, n.jsx)("div", {
                      className: (0, a.A)("flex items-center gap-2", "end" === m && "self-end"),
                      children: g,
                    })
                  : null),
                (u[25] = g),
                (u[26] = m),
                (u[27] = l))
              : (l = u[27]))
          let q = "below-header" === w ? S : null
          return (
            u[28] !== s || u[29] !== c || u[30] !== l || u[31] !== q
              ? ((d = (0, n.jsxs)("div", { className: s, children: [c, l, q] })),
                (u[28] = s),
                (u[29] = c),
                (u[30] = l),
                (u[31] = q),
                (u[32] = d))
              : (d = u[32]),
            d
          )
        },
        Content: function (e) {
          let t,
            s,
            o = (0, i.c)(5),
            { children: r, className: c } = e
          return (
            o[0] !== c ? ((t = (0, a.A)("flex flex-col gap-1.5", c)), (o[0] = c), (o[1] = t)) : (t = o[1]),
            o[2] !== r || o[3] !== t
              ? ((s = (0, n.jsx)("div", { className: t, children: r })), (o[2] = r), (o[3] = t), (o[4] = s))
              : (s = o[4]),
            s
          )
        },
        Footer: function (e) {
          let t,
            s,
            o = (0, i.c)(6),
            { children: r, className: c, variant: l } = e,
            d =
              "action" === (void 0 === l ? "description" : l)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            o[0] !== c || o[1] !== d
              ? ((t = (0, a.A)("text-balance text-secondary", d, c)), (o[0] = c), (o[1] = d), (o[2] = t))
              : (t = o[2]),
            o[3] !== r || o[4] !== t
              ? ((s = (0, n.jsx)("div", { className: t, children: r })), (o[3] = r), (o[4] = t), (o[5] = s))
              : (s = o[5]),
            s
          )
        },
      },
    )
  },
  b8kl(e, t, s) {
    var n = s("ASxG"),
      i = s("ZL1D")
    let a = n
      .Ikc({
        passkeyEnrollmentCompleted: n.euz(!0).optional(),
        pepperOnboardingPersonalization: n.euz(!0).optional(),
        pepperOnboardingAccountId: n.YjP().optional(),
        returnToPreviousHistoryEntry: n.euz(!0).optional(),
        securitySubviewHasParent: n.euz(!0).optional(),
        securitySessionReviewIntent: n
          .Ikc({ accountId: n.YjP(), userId: n.YjP(), recommendationAttempt: i.Ce.optional().catch(void 0) })
          .optional(),
        securityAddEmailIntent: n
          .Ikc({ accountId: n.YjP(), userId: n.YjP(), recommendationAttempt: i.Ce.optional().catch(void 0) })
          .optional(),
        workspaceRoot: n.YjP().min(1).nullable().optional(),
      })
      .loose()
    s.d(
      t,
      {},
      {
        Ei: function (e) {
          let t = a.safeParse(e)
          return t.success && Object.hasOwn(t.data, "workspaceRoot")
            ? { hasValue: !0, workspaceRoot: t.data.workspaceRoot ?? null }
            : { hasValue: !1, workspaceRoot: null }
        },
        Kn: function (e, t, s) {
          let n = a.safeParse(e)
          return (
            n.success && n.data.securityAddEmailIntent?.accountId === t && n.data.securityAddEmailIntent.userId === s
          )
        },
        Qt: function (e) {
          let t = a.safeParse(e)
          return t.success && !0 === t.data.securitySubviewHasParent
        },
        TK: function (e) {
          let t = a.safeParse(e)
          return t.success && !0 === t.data.passkeyEnrollmentCompleted
        },
        VX: function (e) {
          let t = a.safeParse(e)
          return t.success && !0 === t.data.returnToPreviousHistoryEntry
        },
        lX: function (e) {
          let t = a.safeParse(e)
          if (!t.success || !t.data.securityAddEmailIntent) return e
          let s = { ...t.data }
          return (delete s.securityAddEmailIntent, s)
        },
        tt: function (e) {
          let t = a.safeParse(e)
          return t.success && !0 === t.data.pepperOnboardingPersonalization
            ? (t.data.pepperOnboardingAccountId ?? null)
            : null
        },
        x9: function (e, t, s, n) {
          let i = a.safeParse(e),
            o = i.success ? i.data[t] : void 0
          return o?.accountId === s && o.userId === n ? o.recommendationAttempt : void 0
        },
        z7: function (e, t, s) {
          let n = a.safeParse(e)
          return (
            n.success &&
            n.data.securitySessionReviewIntent?.accountId === t &&
            n.data.securitySessionReviewIntent.userId === s
          )
        },
      },
    )
  },
  DDOY(e, t, s) {
    var n = s("Ywss"),
      i = s("iiZm")
    function a(e, t) {
      return "localizedText" in t ? t.localizedText : e.formatMessage(t, t.values)
    }
    s.d(
      t,
      {},
      {
        Xl: function (e, t, s) {
          let i = (0, n.Rr)(e),
            a = new URLSearchParams(i.search)
          for (let [e, t] of Object.entries(s ?? {})) a.set(e, t)
          return (0, n.AO)({ ...i, search: a.toString(), hash: t })
        },
        hz: a,
        s9: function (e, t, s) {
          let n = s.trim()
          return 0 === n.length
            ? []
            : e
                .flatMap((e) => {
                  let s = a(t, e.title),
                    o = (0, i.gr)(s, n),
                    r = (null == e.description ? "" : t.formatMessage(e.description))
                      .toLocaleLowerCase(t.locale)
                      .includes(n.toLocaleLowerCase(t.locale)),
                    c = [...(e.options ?? []), ...(e.keywords ?? [])].some((e) => (0, i.gr)(a(t, e), n) > 0)
                  return 0 !== o || r || c
                    ? [
                        {
                          id: e.id,
                          label: s,
                          score: o,
                          sectionSlug: e.section,
                          path: e.path,
                          searchParams: e.searchParams,
                        },
                      ]
                    : []
                })
                .sort((e, t) => t.score - e.score)
                .map(({ id: e, label: t, sectionSlug: s, path: n, searchParams: i }) => ({
                  id: e,
                  label: t,
                  sectionSlug: s,
                  ...(null == n ? {} : { path: n }),
                  searchParams: i,
                }))
        },
      },
    )
  },
  yWtz(e, t, s) {
    let n = (0, s("ESTr").a)({
      name: "chevron-right-md-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 7.501221, y: 4.334473, width: 6.157959, height: 11.331055 },
        visualBounds: { x: 7.501221, y: 4.334473, width: 6.157959, height: 11.331055 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 7.501221, y: 4.334473, width: 6.157959, height: 11.331055 },
        center: { x: 10.580201, y: 10 },
        insets: { top: 4.334473, right: 6.34082, bottom: 4.334472, left: 7.501221 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10.580201, y: 10 }, foreground: { x: 10.580201, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.696 14.5292C7.4363 14.7889 7.4363 15.211 7.696 15.4707C7.95569 15.7304 8.3777 15.7304 8.6374 15.4707L13.3425 10.7646C13.7646 10.3422 13.7646 9.65767 13.3425 9.2353L8.6374 4.52925C8.3777 4.26955 7.95569 4.26955 7.69599 4.52925C7.4363 4.78895 7.4363 5.21095 7.69599 5.47065L12.2253 9.99995L7.696 14.5292Z" fill="currentColor"/>',
    })
    s.d(t, {}, { R: n })
  },
  plnw(e, t, s) {
    let n = (0, s("ESTr").a)({
      name: "megaphone-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.208496, y: 2.350342, width: 17.166992, height: 16.024658 },
        visualBounds: { x: 1.208496, y: 2.350342, width: 17.166992, height: 16.024658 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.208496, y: 2.350342, width: 17.166992, height: 16.024658 },
        center: { x: 9.791992, y: 10.362671 },
        insets: { top: 2.350342, right: 1.624512, bottom: 1.625, left: 1.208496 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.791992, y: 10.362671 },
          foreground: { x: 9.791992, y: 10.362671 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M14.9507 2.51071C16.6106 1.89607 18.3753 3.12451 18.3755 4.8945V13.9375C18.3755 15.6723 16.6756 16.8972 15.0298 16.3486L12.1255 15.3799V15.417C12.1254 16.2155 11.8831 16.9743 11.3364 17.5371C10.7856 18.104 10.0195 18.3749 9.1665 18.375C8.31369 18.3749 7.54831 18.1039 6.99756 17.5371C6.45082 16.9743 6.20855 16.2156 6.2085 15.417V13.4101C6.13435 13.3877 6.05753 13.375 5.97998 13.375H3.75049C2.34676 13.375 1.2085 12.2367 1.2085 10.833V8.33298C1.20882 6.92952 2.34696 5.79196 3.75049 5.79196H5.95166C6.04536 5.79193 6.1382 5.77467 6.22607 5.74216L14.9507 2.51071ZM7.9585 15.417C7.95854 15.8678 8.09108 16.151 8.25244 16.3174C8.40993 16.4794 8.6866 16.6249 9.1665 16.625C9.64666 16.6249 9.92307 16.4794 10.0806 16.3174C10.2421 16.1511 10.3754 15.8681 10.3755 15.417V14.7968L7.9585 13.9912V15.417ZM16.6255 4.8945C16.6253 4.34332 16.075 3.96092 15.5581 4.15231L6.92236 7.35055V11.8017L15.5835 14.6884C16.096 14.8591 16.6255 14.4777 16.6255 13.9375V4.8945ZM3.75049 7.54196C3.31346 7.54196 2.95882 7.89602 2.9585 8.33298V10.833C2.9585 11.2702 3.31326 11.625 3.75049 11.625H5.17236V7.54196H3.75049Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(t, {}, { T: n })
  },
  yfk0(e, t, s) {
    let n = (0, s("ESTr").a)({
      name: "megaphone-regular-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 2.083496, y: 3.910889, width: 27.166992, height: 25.339111 },
        visualBounds: { x: 2.083496, y: 3.910889, width: 27.166992, height: 25.339111 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.083496, y: 3.910889, width: 27.166992, height: 25.339111 },
        center: { x: 15.666992, y: 16.580444 },
        insets: { top: 3.910889, right: 2.749512, bottom: 2.75, left: 2.083496 },
        anchors: {
          frame: { x: 16, y: 16 },
          ink: { x: 15.666992, y: 16.580444 },
          foreground: { x: 15.666992, y: 16.580444 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M23.9731 4.15811C26.531 3.21084 29.2502 5.10338 29.2505 7.83096V22.2997C29.2505 24.973 26.6313 26.8608 24.0952 26.0155L19.2505 24.4003V24.6669C19.2505 25.9151 18.8716 27.0884 18.0298 27.955C17.1822 28.8273 15.9992 29.2499 14.6665 29.2499C13.3337 29.2498 12.1508 28.8274 11.3032 27.955C10.4614 27.0884 10.0835 25.9151 10.0835 24.6669V21.3446L10.0151 21.3222C9.87096 21.2742 9.71983 21.25 9.56787 21.2499H6.00049C3.83737 21.2499 2.0835 19.496 2.0835 17.3329V13.3329C2.08377 11.17 3.83754 9.4169 6.00049 9.4169H9.52197C9.68991 9.4169 9.85667 9.38636 10.0142 9.32803L23.9731 4.15811ZM12.5835 24.6669C12.5835 25.4187 12.8057 25.9127 13.0972 26.2128C13.3829 26.5067 13.8666 26.7498 14.6665 26.7499C15.4668 26.7499 15.9511 26.5068 16.2368 26.2128C16.5283 25.9127 16.7505 25.4187 16.7505 24.6669V23.5673L12.5835 22.1776V24.6669ZM26.7505 7.83096C26.7502 6.84456 25.7664 6.16025 24.8413 6.50283L11.0835 11.5976V19.0429L24.8853 23.6444C25.8026 23.9502 26.7505 23.2667 26.7505 22.2997V7.83096ZM6.00049 11.9169C5.21826 11.9169 4.58377 12.5507 4.5835 13.3329V17.3329C4.5835 18.1153 5.21808 18.7499 6.00049 18.7499H8.5835V11.9169H6.00049Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(t, {}, { o: n })
  },
  LKVs(e, t, s) {
    let n = (0, s("ESTr").a)({
      name: "passkey-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.474609, y: 1.474609, width: 12.68457, height: 13.717773 },
        visualBounds: { x: 1.474609, y: 1.474609, width: 12.68457, height: 13.717773 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.474609, y: 1.474609, width: 12.68457, height: 13.717773 },
        center: { x: 7.816894, y: 8.333496 },
        insets: { top: 1.474609, right: 1.840821, bottom: 0.807618, left: 1.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.816894, y: 8.333496 }, foreground: { x: 7.816894, y: 8.333496 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12.2034 10.9334C12.2034 11.193 11.993 11.4034 11.7334 11.4034C11.4739 11.4034 11.2634 11.193 11.2634 10.9334C11.2634 10.6738 11.4739 10.4634 11.7334 10.4634C11.993 10.4634 12.2034 10.6738 12.2034 10.9334Z" fill="currentColor"/> <path d="M1.47461 14.0005C1.47461 11.0997 3.98336 8.8081 7 8.80811C7.28995 8.80811 7.52539 9.04355 7.52539 9.3335C7.52539 9.62345 7.28995 9.85889 7 9.85889C4.49384 9.85889 2.52539 11.7467 2.52539 14.0005C2.5252 14.2903 2.28983 14.5249 2 14.5249C1.71017 14.5249 1.4748 14.2903 1.47461 14.0005Z" fill="currentColor"/> <path d="M9.14197 4.66699C9.14197 3.48429 8.18303 2.52557 7.00037 2.52539C5.81756 2.52539 4.85876 3.48418 4.85876 4.66699C4.85894 5.84965 5.81766 6.80859 7.00037 6.80859C8.18292 6.80842 9.14179 5.84954 9.14197 4.66699ZM10.1918 4.66699C10.1916 6.42944 8.76282 7.85822 7.00037 7.8584C5.23777 7.8584 3.80816 6.42955 3.80798 4.66699C3.80798 2.90428 5.23766 1.47461 7.00037 1.47461C8.76293 1.47479 10.1918 2.90439 10.1918 4.66699Z" fill="currentColor"/> <path d="M13.1084 11.0996C13.1082 10.2485 12.4179 9.55859 11.5664 9.55859C10.7153 9.55873 10.0256 10.2484 10.0254 11.0996C10.0254 11.1877 10.034 11.2789 10.0508 11.373C10.0808 11.5418 10.0265 11.7146 9.9053 11.8359L8.99612 12.7461C8.74737 12.9948 8.68593 13.0608 8.64358 13.1299C8.60006 13.201 8.56798 13.2805 8.54787 13.3643C8.52898 13.4433 8.52541 13.5343 8.52541 13.8838V14.1416H8.78323C9.13285 14.1416 9.22373 14.1381 9.30276 14.1191C9.38431 14.0996 9.46418 14.0671 9.53713 14.0225L9.59182 13.9844C9.65167 13.9374 9.73521 13.8556 9.91994 13.6709L10.8281 12.7607C10.9496 12.639 11.1237 12.5849 11.293 12.6152C11.3896 12.6325 11.4798 12.6416 11.5664 12.6416C12.4179 12.6416 13.1084 11.951 13.1084 11.0996ZM14.1455 11.3643C14.0217 12.5844 13.0512 13.5549 11.8311 13.6787L11.5664 13.6924C11.5068 13.6924 11.4486 13.6869 11.3916 13.6826L10.6641 14.4131C10.5037 14.5735 10.3707 14.7086 10.2305 14.8174L10.086 14.917C9.92056 15.0184 9.73909 15.0949 9.54885 15.1406C9.32114 15.1953 9.08499 15.1924 8.78323 15.1924H8.53323C8.44741 15.1924 8.35225 15.1926 8.26955 15.1855C8.18105 15.178 8.06416 15.1592 7.94338 15.0977C7.7832 15.0157 7.65086 14.8845 7.56838 14.7227C7.5066 14.6009 7.48861 14.4823 7.48147 14.3945C7.47484 14.3129 7.47463 14.2181 7.47463 14.1338V13.8838C7.47463 13.5821 7.47188 13.3467 7.52639 13.1191L7.56643 12.9785C7.61117 12.8403 7.67215 12.7065 7.74905 12.5811C7.87159 12.3812 8.04158 12.2163 8.25393 12.0039L8.98245 11.2734C8.97832 11.2166 8.97463 11.1587 8.97463 11.0996L8.9883 10.835C9.12103 9.52824 10.2247 8.50798 11.5664 8.50781L11.8311 8.52148C13.1379 8.65403 14.159 9.75765 14.1592 11.0996L14.1455 11.3643Z" fill="currentColor"/>',
    })
    s.d(t, {}, { M: n })
  },
  gSn1(e, t, s) {
    let n = (0, s("ESTr").a)({
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
    s.d(t, {}, { i: n })
  },
  I3rA(e, t, s) {
    let n = (0, s("ESTr").a)({
      name: "shield-lock-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3.256836, y: 1.505859, width: 17.486328, height: 20.988281 },
        visualBounds: { x: 3.256836, y: 1.505859, width: 17.486328, height: 20.988281 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.256836, y: 1.505859, width: 17.486328, height: 20.988281 },
        center: { x: 12, y: 12 },
        insets: { top: 1.505859, right: 3.256836, bottom: 1.50586, left: 3.256836 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12 6.50578C13.7344 6.50583 15.1406 7.91196 15.1406 9.64641V9.87981C15.9757 10.175 16.5742 10.97 16.5742 11.9062V14.8427C16.5742 16.03 15.6121 16.9929 14.4248 16.9931H9.5752C8.3879 16.993 7.4248 16.03 7.4248 14.8427V11.9062C7.4248 10.97 8.02419 10.175 8.85938 9.87981V9.64641C8.85938 7.91193 10.2655 6.50578 12 6.50578ZM9.5752 11.2558C9.21632 11.2559 8.9248 11.5473 8.9248 11.9062V14.8427C8.9248 15.2016 9.21632 15.493 9.5752 15.4931H14.4248C14.7837 15.4929 15.0742 15.2016 15.0742 14.8427V11.9062C15.0742 11.5473 14.7837 11.2559 14.4248 11.2558H9.5752ZM12 8.00578C11.094 8.00578 10.3594 8.74036 10.3594 9.64641V9.75578H13.6406V9.64641C13.6406 8.74039 12.906 8.00583 12 8.00578Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M10.8994 1.73625C11.6019 1.42907 12.4011 1.42905 13.1035 1.73625L19.0947 4.35735C20.0957 4.79526 20.7431 5.78435 20.7432 6.87688V12.5732C20.7431 15.2661 19.7955 17.3662 18.2754 18.9765C16.7718 20.5691 14.7381 21.6519 12.5938 22.3993L12.5879 22.4023C12.2122 22.5296 11.8044 22.5242 11.4316 22.3896C9.28248 21.6473 7.24298 20.5689 5.73438 18.9784C4.20876 17.3699 3.25693 15.2689 3.25684 12.5732V6.87688C3.25697 5.78427 3.90419 4.79512 4.90527 4.35735L10.8994 1.73625ZM12.5029 3.11027C12.1837 2.9706 11.8203 2.97072 11.501 3.11027L5.50586 5.73235C5.05105 5.93137 4.75697 6.38042 4.75684 6.87688V12.5732C4.75693 14.877 5.55553 16.6106 6.82227 17.9462C8.02583 19.2152 9.67905 20.1518 11.5459 20.8388L11.9219 20.9726L11.9297 20.9755L11.9385 20.9784C11.9916 20.9982 12.0497 20.999 12.1035 20.9814C14.1175 20.2789 15.9059 19.3015 17.1846 17.9472C18.4472 16.6098 19.2431 14.8758 19.2432 12.5732V6.87688C19.2431 6.38031 18.9491 5.93042 18.4941 5.73137L12.5029 3.11027Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(t, {}, { p: n })
  },
  jKbW(e, t, s) {
    let n = (0, s("ESTr").a)({
      name: "smartphone-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.674561, y: 1.474609, width: 8.650391, height: 13.050781 },
        visualBounds: { x: 3.674561, y: 1.474609, width: 8.650391, height: 13.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.674561, y: 1.474609, width: 8.650391, height: 13.050781 },
        center: { x: 7.999757, y: 8 },
        insets: { top: 1.474609, right: 3.675048, bottom: 1.47461, left: 3.674561 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999757, y: 8 }, foreground: { x: 7.999757, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.72534 3.79395C9.01499 3.79425 9.24969 4.02963 9.24976 4.31934C9.24976 4.6091 9.01503 4.84442 8.72534 4.84473H7.34253C7.05258 4.84473 6.81714 4.60929 6.81714 4.31934C6.8172 4.02944 7.05262 3.79395 7.34253 3.79395H8.72534Z" fill="currentColor"/> <path d="M9.93335 1.47461C11.254 1.47464 12.3247 2.54556 12.325 3.86621V12.1338C12.3247 13.4544 11.254 14.5254 9.93335 14.5254H6.06616C4.74564 14.5251 3.67481 13.4543 3.67456 12.1338V3.86621C3.67481 2.54569 4.74564 1.47486 6.06616 1.47461H9.93335ZM6.06616 2.52539C5.32554 2.52564 4.72559 3.12559 4.72534 3.86621V12.1338C4.72559 12.8744 5.32554 13.4744 6.06616 13.4746H9.93335C10.6741 13.4746 11.2749 12.8745 11.2751 12.1338V3.86621C11.2749 3.12546 10.6741 2.52543 9.93335 2.52539H6.06616Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(t, {}, { f: n })
  },
  pmIL(e, t, s) {
    var n = s("bzit"),
      i = s("UQVW")
    s.d(
      t,
      {},
      {
        l: function () {
          return (0, n.A)(i.A, arguments)
        },
      },
    )
  },
}
//# sourceMappingURL=872510.4dc6873c7a.js.map
