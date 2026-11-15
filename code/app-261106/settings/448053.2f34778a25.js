export const __rspack_esm_ids = [448053]
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
          defaultMessage: "{appName} will be able to use apps you’ve connected to ChatGPT to work on your requests.",
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
          defaultMessage: "Keep this connection active when you’re not using the app.",
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
          defaultMessage: "Preparing sign-in…",
          description: "Status before the Site's connector eligibility is known",
        },
        signInUnavailable: {
          id: "sitesConnectorConsent.signInUnavailable",
          defaultMessage: "We couldn’t load the permissions for this sign-in. Refresh this page to try again.",
          description: "Sign-in cannot continue without valid protected permission disclosures",
        },
        signInFailed: {
          id: "sitesConnectorConsent.signInFailed",
          defaultMessage: "We couldn’t complete sign-in. Please try again.",
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
            "{appName} can read information or take actions on your behalf in apps you’ve connected to ChatGPT.",
          description: "Explains the Site's access to selected connected apps",
        },
        readOnlyDescription: {
          id: "sitesConnectorConsent.readOnlyDescription",
          defaultMessage: "{appName} can read information in apps you’ve connected to ChatGPT.",
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
          defaultMessage: "This site can’t access this app.",
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
          defaultMessage: "This site will be able to use apps you’ve connected to ChatGPT to work on your requests.",
          description: "Explains why the site named in the page title requests access to connected apps",
        },
        expandedDescription: {
          id: "sitesConnectorConsent.expandedDescription",
          defaultMessage:
            "{appName} can read information and take actions in apps you’ve connected to ChatGPT, based on the access you choose below.",
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
          defaultMessage: "Loading connected apps…",
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
            "This signs you in without connector access for this session. It does not change this site’s saved connector access on your other devices.",
          description: "Declining connectors is session-local, not an app-wide revocation",
        },
        sharedApproval: {
          id: "sitesConnectorConsent.sharedAccess",
          defaultMessage:
            "These changes apply to this site’s connector access across your browsers and devices. Changes take effect shortly. Your connected accounts stay connected to ChatGPT.",
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
  zjpG(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("on57"),
      o = s("oyxz")
    s.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            s,
            r,
            c = (0, i.c)(5),
            { className: l } = e
          return (
            c[0] !== l ? ((t = (0, a.A)("last:hidden", l)), (c[0] = l), (c[1] = t)) : (t = c[1]),
            c[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, n.jsx)(o.A, {
                  id: "codex.ui.bulletSeparator",
                  defaultMessage: "·",
                  description: "Middle dot separator used between inline items",
                })),
                (c[2] = s))
              : (s = c[2]),
            c[3] !== t
              ? ((r = (0, n.jsx)("span", { "aria-hidden": !0, className: t, children: s })), (c[3] = t), (c[4] = r))
              : (r = c[4]),
            r
          )
        },
      },
    )
  },
  WXto(e, t, s) {
    var n = s("QosV"),
      i = s("zTeN"),
      a = s("zd8w"),
      o = s("EOo5"),
      r = s("YitN"),
      c = s("Ghh3"),
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
      b = (0, i.vU)(g.u, (e) => ({
        queryKey: ["usage-limits-page-configs", e],
        queryFn: ({ signal: e }) => c.Request.safeGet("/pageConfigs/usage_limits", { signal: e }),
        staleTime: 3e4,
      })),
      C = (0, i.vU)(g.u, ({ accountId: e, userId: t }) => ({
        queryKey: ["student-codex-credit-enrollment", e, t],
        queryFn: ({ signal: e }) =>
          c.Request.safePost("/students/refresh_enrollment_status", {
            requestBody: { campaign_id: "student_codex_credits" },
            signal: e,
          }),
        staleTime: 6e4,
        retry: !1,
      }))
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
            g,
            y,
            _,
            A,
            j,
            k,
            P,
            M,
            I = (0, n.c)(35),
            { accountId: S, userId: G, authMethod: T, isLoading: N } = (0, o.As)(),
            E = (0, i.Ul)(null),
            L = "chatgpt" === T,
            D = (0, m.AS)(),
            R = (0, m.Zj)(x),
            O = (0, m.DR)(x),
            q = (0, m.XR)(),
            { data: U, isLoading: H, hasEverErrored: F } = (0, l.YL)(),
            { data: K, isLoading: B } = (0, r.U)(),
            V =
              L &&
              U?.id === S &&
              U?.structure === "workspace" &&
              "account-owner" === U.account_user_role &&
              (0, f.Hw)(U.plan_type),
            W = L && !q && (0, p.b0)({ accountId: S, currentAccount: U, statsigClient: D }),
            z = U?.plan_type ?? (!H || F ? K?.plan : void 0)
          I[0] !== L || I[1] !== z ? ((s = L && (0, f.Hw)(z)), (I[0] = L), (I[1] = z), (I[2] = s)) : (s = I[2])
          let Z = s,
            Y = (0, m.Zj)(!!Z && v),
            $ = (0, m.DR)(Z ? v : x)
          I[3] !== z ? ((c = w(z)), (I[3] = z), (I[4] = c)) : (c = I[4])
          let Q = c
          I[5] !== z ? ((g = (0, f.uz)(z)), (I[5] = z), (I[6] = g)) : (g = I[6])
          let X = g,
            J = !!L && !!Q && !q && (0, h.fV)(D, z),
            ee = U?.structure === "personal" && U.id === S
          I[7] !== S || I[8] !== U?.id || I[9] !== U?.plan_type || I[10] !== L || I[11] !== ee
            ? ((y = !1), (I[7] = S), (I[8] = U?.id), (I[9] = U?.plan_type), (I[10] = L), (I[11] = ee), (I[12] = y))
            : (y = I[12])
          let et = y
          I[13] !== et ? ((_ = { enabled: et }), (I[13] = et), (I[14] = _)) : (_ = I[14])
          let { data: es, isLoading: en } = (0, i._U)(b, S ?? null, _),
            ei = L && ((0, d.IH)(z) || J),
            ea = S ?? null,
            eo = G ?? null
          ;(I[15] !== ea || I[16] !== eo
            ? ((A = { accountId: ea, userId: eo }), (I[15] = ea), (I[16] = eo), (I[17] = A))
            : (A = I[17]),
            !1 !== I[18] ? ((j = { enabled: !1 }), (I[18] = !1), (I[19] = j)) : (j = I[19]))
          let { data: er, isPending: ec } = (0, i._U)(C, A, j),
            el = L && ee && !ei
          I[20] !== el ? ((k = { enabled: el }), (I[20] = el), (I[21] = k)) : (k = I[21])
          let { data: ed, isLoading: eu } = (0, u.q7)(k),
            [ep, eh] = (0, a.useState)(null),
            eg = el && ed?.isEnabled === !0,
            em = "usage" === t && el && (eg || ep === S) ? S : null
          ep !== em && eh(em)
          let ef = eg || null != em,
            ey = L && X && R,
            ex = L && !q && !("isNoop" in D),
            ev = Z && !q && Y,
            eb = L && H && !F,
            eC = L && Q && q,
            ew = L && X && (q || O)
          I[22] !== L || I[23] !== Q || I[24] !== q || I[25] !== z
            ? ((P = L && (Q || (0, f.Hw)(z)) && q), (I[22] = L), (I[23] = Q), (I[24] = q), (I[25] = z), (I[26] = P))
            : (P = I[26])
          let e_ = P,
            eA = Z && (q || $),
            ej = (function ({
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
            })({
              authMethod: T,
              hasCreditBalance: void 0 !== e && e,
              hasEnabledAutoReload: ef,
              isPersonalAccount: ee,
              plan: z,
              isFreeOrGoCreditPurchaseEnabled: J,
              hasStudentCreditAccess: !1,
              isEnterpriseUsageSettingsEnabled: ey,
              isConsumerUsageAnalyticsEnabled: ex,
              isBusinessUsageDashboardEnabled: ev,
              canPurchaseBusinessCredits: W,
              isBusinessWorkspaceOwner: V,
            }),
            ek = !0 === E || ej.isUsageSettingsVisible || (et && es?.show_usage_tab === !0),
            eP = ef ? ed : void 0,
            eM = N || (L && B) || eb || eC || ew || e_ || eA || (et && en) || (el && eu && !ek)
          return (
            I[27] !== W || I[28] !== V || I[29] !== ek || I[30] !== z || I[31] !== eP || I[32] !== eM || I[33] !== ej
              ? ((M = {
                  autoReloadSettings: eP,
                  ...ej,
                  canPurchaseBusinessCredits: W,
                  isBusinessWorkspaceOwner: V,
                  isUsageSettingsVisible: ek,
                  isUsageSettingsAccessLoading: eM,
                  plan: z,
                }),
                (I[27] = W),
                (I[28] = V),
                (I[29] = ek),
                (I[30] = z),
                (I[31] = eP),
                (I[32] = eM),
                (I[33] = ej),
                (I[34] = M))
              : (M = I[34]),
            M
          )
        },
        t$: b,
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
  HKtk(e, t, s) {
    s.d(t, { ChatGptSecuritySettings: () => sa })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("irkb"),
      o = s("T0Rc"),
      r = s("xSOA"),
      c = s("zTeN"),
      l = s("zd8w"),
      d = s("oyxz"),
      u = s("HZfM"),
      p = s("Au4v"),
      h = s("EOo5"),
      g = s("YJm0"),
      m = s("g2p6"),
      f = s("OAko"),
      y = s("bVeK"),
      x = s("Bbed"),
      v = s("RNul"),
      b = s("jxU8"),
      C = s("BSnr"),
      w = s("b8kl"),
      _ = s("AWNZ"),
      A = s("QyE3"),
      j = s("ZEx5"),
      k = s("hZax"),
      P = s("rvFo"),
      M = s("SPnB"),
      I = s("Ghh3"),
      S = s("CtUD"),
      G = s("gyrn"),
      T = s("QmkR"),
      N = s("OWtl"),
      E = s("eShZ"),
      L = s("Sm6l"),
      D = s("ZtSy"),
      R = s("ReGc"),
      O = s("toKG"),
      q = s("U4Xt"),
      U = s("LLN1")
    function H(e) {
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
          onCancelNativeReset: b,
        } = e,
        C = l?.pin_reset_status === "in_progress"
      c[0] !== y
        ? ((t = y
            ? (0, n.jsx)("p", {
                role: "alert",
                className: "mt-3 text-sm text-danger",
                children: (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.accountPin.reauthFailed",
                  defaultMessage: "Couldn’t verify your account to reset this PIN. Please try again.",
                  description:
                    "Error after a PIN reset challenge or fresh account sign-in fails or returns to a different account.",
                }),
              })
            : null),
          (c[0] = y),
          (c[1] = t))
        : (t = c[1])
      let w = t
      c[2] !== C || c[3] !== u || c[4] !== f || c[5] !== g || c[6] !== h || c[7] !== m || c[8] !== p || c[9] !== l
        ? ((s =
            null == l || u
              ? (0, n.jsx)(U.mK, { isError: u, onRetry: p })
              : (0, n.jsxs)(j.t, {
                  children: [
                    C &&
                      (0, n.jsx)("p", {
                        role: "status",
                        className: "p-3 text-sm",
                        children: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.accountPin.resetInProgress",
                          defaultMessage:
                            "Deleting your locked chats. You can leave this page and return to create a new PIN when deletion is complete.",
                          description: "Status while the server finishes a destructive PIN reset.",
                        }),
                      }),
                    !C &&
                      !l.has_pin &&
                      (0, n.jsx)(_.ic, {
                        label: (0, n.jsx)(d.A, { ...q.L.createPinLabel }),
                        description: (0, n.jsx)(d.A, { ...q.L.createPinDescription }),
                        control: (e) =>
                          (0, n.jsx)(L.$, {
                            ...e,
                            size: "toolbar",
                            color: "secondary",
                            onClick: h,
                            children: (0, n.jsx)(d.A, { ...q.L.createPinButton }),
                          }),
                      }),
                    !C &&
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
                                  "We couldn’t delete all your locked chats. Reset your PIN again to finish deleting them.",
                                description: "Recoverable failure during a destructive PIN reset.",
                              }),
                            }),
                          (0, n.jsx)(_.ic, {
                            label: (0, n.jsx)(d.A, { ...q.L.changePinLabel }),
                            control: (e) =>
                              (0, n.jsx)(L.$, {
                                ...e,
                                size: "toolbar",
                                color: "secondary",
                                onClick: g,
                                disabled: "failed" === l.pin_reset_status,
                                children: (0, n.jsx)(d.A, { ...q.L.changePinButton }),
                              }),
                          }),
                          (0, n.jsx)(_.ic, {
                            label: (0, n.jsx)(d.A, { ...q.L.resetPinLabel }),
                            description: (0, n.jsx)(d.A, { ...q.L.resetPinDescription }),
                            control: (e) =>
                              (0, n.jsx)(L.$, {
                                ...e,
                                size: "toolbar",
                                color: "danger",
                                disabled: f,
                                loading: f,
                                onClick: m,
                                children: (0, n.jsx)(d.A, { ...q.L.resetPinButton }),
                              }),
                          }),
                        ],
                      }),
                  ],
                })),
          (c[2] = C),
          (c[3] = u),
          (c[4] = f),
          (c[5] = g),
          (c[6] = h),
          (c[7] = m),
          (c[8] = p),
          (c[9] = l),
          (c[10] = s))
        : (s = c[10])
      let A = x ? null : w
      return (
        c[11] !== v || c[12] !== b
          ? ((a = v
              ? (0, n.jsxs)("div", {
                  className: "mt-4 flex flex-col items-start gap-3 text-sm text-secondary",
                  children: [
                    (0, n.jsx)("p", {
                      children: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.accountPin.nativeResetAccountCheck",
                        defaultMessage:
                          "Before resetting, check that the selected ChatGPT account in your browser is the account whose locked chats you want to delete. The browser may be signed in to a different account.",
                        description:
                          "Native app warning before opening the merged browser PIN reset flow; the browser account may differ from the native selected account.",
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex gap-2",
                      children: [
                        (0, n.jsx)(F, {}),
                        (0, n.jsx)(L.$, {
                          size: "toolbar",
                          color: "ghost",
                          onClick: b,
                          children: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.accountPin.cancelBrowserReset",
                            defaultMessage: "Cancel",
                            description: "Closes the native account-check warning without starting a PIN reset.",
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : null),
            (c[11] = v),
            (c[12] = b),
            (c[13] = a))
          : (a = c[13]),
        c[14] !== a ? ((o = (0, n.jsx)(n.Fragment, { children: a })), (c[14] = a), (c[15] = o)) : (o = c[15]),
        c[16] !== s || c[17] !== A || c[18] !== o
          ? ((r = (0, n.jsxs)(n.Fragment, { children: [s, A, o, null] })),
            (c[16] = s),
            (c[17] = A),
            (c[18] = o),
            (c[19] = r))
          : (r = c[19]),
        r
      )
    }
    function F() {
      let e,
        t,
        s,
        a = (0, i.c)(5),
        { data: o } = (0, c.Ul)(R.a)
      return null == o
        ? null
        : (a[0] !== o.chatGptDesktopAuthOrigin
            ? ((e = new URL("/settings/security?view=account-pin", (0, O.N)(o.chatGptDesktopAuthOrigin)).toString()),
              (a[0] = o.chatGptDesktopAuthOrigin),
              (a[1] = e))
            : (e = a[1]),
          a[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.accountPin.openBrowser",
                defaultMessage: "Open Account PIN in browser",
                description:
                  "Link from native settings to merged browser Account PIN controls, where a fresh account sign-in can authorize reset.",
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
    var K = s("EgSj"),
      B = s("i7nV"),
      V = s("KG2G")
    let W = /^[0-9]{4}$/,
      z = new WeakMap()
    function Z(e) {
      return "invalid_pin" === e.errorCode || "pin_locked" === e.errorCode
    }
    function Y(e) {
      let t,
        r,
        p,
        g,
        m,
        f,
        y,
        x,
        v,
        b,
        C,
        w,
        _,
        A,
        j,
        k,
        L,
        D,
        R,
        O,
        F,
        Y,
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
        ey = em.get(V.Aj),
        ex = (0, a.jE)()
      ed[0] !== eu ? ((t = (0, B.v)(eu)), (ed[0] = eu), (ed[1] = t)) : (t = ed[1])
      let ev = t,
        eb = ev.queryKey
      ed[2] !== ev
        ? ((r = {
            ...ev,
            staleTime: P.D.ONE_MINUTE,
            refetchOnWindowFocus: "always",
            refetchOnMount: "always",
            refetchInterval: $,
            retry: !1,
          }),
          (ed[2] = ev),
          (ed[3] = r))
        : (r = ed[3])
      let { data: eC, isError: ew, refetch: e_ } = (0, o.I)(r)
      ed[4] !== eu || ed[5] !== ex
        ? ((p = function () {
            return z.get(ex)?.get(eu) ?? 0
          }),
          (ed[4] = eu),
          (ed[5] = ex),
          (ed[6] = p))
        : (p = ed[6])
      let eA = p
      ed[7] !== eu || ed[8] !== ex || ed[9] !== eh
        ? ((g = function () {
            eh.get(M.chatGptAuthenticatedAccountId$) === eu && (0, G.L7)(eh)
            let e = z.get(ex) ?? new Map()
            ;(e.set(eu, (e.get(eu) ?? 0) + 1), z.set(ex, e))
          }),
          (ed[7] = eu),
          (ed[8] = ex),
          (ed[9] = eh),
          (ed[10] = g))
        : (g = ed[10])
      let ej = g,
        [ek, eP] = (0, l.useState)(null),
        [eM, eI] = (0, l.useState)(null),
        [eS, eG] = (0, l.useState)(""),
        [eT, eN] = (0, l.useState)(""),
        [eE, eL] = (0, l.useState)(""),
        [eD, eR] = (0, l.useState)(null),
        [eO, eq] = (0, l.useState)(null),
        [eU, eH] = (0, l.useState)(!1),
        [eF, eK] = (0, l.useState)(!1),
        [eB, eV] = (0, l.useState)(!1),
        eW = (0, l.useRef)(null),
        ez = eu + ":" + (eg ?? ""),
        eZ = (0, l.useRef)(ez),
        eY = (0, l.useRef)(0),
        e$ = (0, l.useRef)(null)
      ;(ed[11] !== ez
        ? ((m = () => (
            (eZ.current = ez),
            () => {
              ;((eZ.current = null), (eY.current = eY.current + 1), (e$.current = null))
            }
          )),
          (f = [ez]),
          (ed[11] = ez),
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
      let eQ = y
      ed[15] !== ez
        ? ((x = function (e) {
            if (null != e$.current && eQ(e$.current)) return null
            let t = { kind: e, identity: ez, generation: eY.current }
            return ((e$.current = t), eI(t), t)
          }),
          (ed[15] = ez),
          (ed[16] = x))
        : (x = ed[16])
      let eX = x
      ed[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (e) {
            e$.current === e && ((e$.current = null), eQ(e) && eI(null))
          }),
          (ed[17] = v))
        : (v = ed[17])
      let eJ = v
      ed[18] !== ey || ed[19] !== ef
        ? ((b = function () {
            ;((eY.current = eY.current + 1),
              (e$.current = null),
              null != eW.current && (eW.current.promise = null),
              eP(null),
              eI(null),
              eG(""),
              eN(""),
              eL(""),
              eq(null),
              eH(!1),
              eK(!1),
              eR(null),
              eV(!1),
              null != ey && ef((e) => (0, V.bZ)(e, ey), { replace: !0 }))
          }),
          (ed[18] = ey),
          (ed[19] = ef),
          (ed[20] = b))
        : (b = ed[20])
      let e1 = b
      ed[21] !== e1
        ? ((C = () => {
            new URLSearchParams(window.location.search).has(V.Aj) || e1()
          }),
          (ed[21] = e1),
          (ed[22] = C))
        : (C = ed[22])
      let e0 = (0, l.useEffectEvent)(C)
      ;(ed[23] !== ey || ed[24] !== e0 ? ((w = () => {}), (ed[23] = ey), (ed[24] = e0), (ed[25] = w)) : (w = ed[25]),
        ed[26] !== ey || ed[27] !== ez ? ((_ = [ey, ez]), (ed[26] = ey), (ed[27] = ez), (ed[28] = _)) : (_ = ed[28]),
        (0, l.useEffect)(w, _),
        ed[29] !== e_ || ed[30] !== eh
          ? ((A = function (e) {
              eG("")
              let t = e instanceof E.fk ? e.errorCode : null
              "invalid_pin" === t || "pin_locked" === t
                ? ((0, S.J)(eh, "invalid_pin" === t ? "WRONG_PIN" : "LOCKOUT"),
                  eR("invalid_pin" === t ? "incorrect" : "locked"),
                  e_())
                : ((0, S.J)(eh, "FAILURE"), eR("failed"))
            }),
            (ed[29] = e_),
            (ed[30] = eh),
            (ed[31] = A))
          : (A = ed[31]))
      let e2 = A
      ed[32] !== ex || ed[33] !== eb
        ? ((j = function (e, t) {
            ;(ex.setQueryData(eb, (s) => (t?.has_pin === e ? t : null == s ? { has_pin: e } : { ...s, has_pin: e })),
              ex.invalidateQueries({ queryKey: eb }))
          }),
          (ed[32] = ex),
          (ed[33] = eb),
          (ed[34] = j))
        : (j = ed[34])
      let e3 = j
      ed[35] !== eu ||
      ed[36] !== e1 ||
      ed[37] !== ex ||
      ed[38] !== ej ||
      ed[39] !== e3 ||
      ed[40] !== eh ||
      ed[41] !== eX ||
      ed[42] !== eb ||
      ed[43] !== ek
        ? ((k = async function (e, t) {
            let s = eX("create")
            if (null != s) {
              try {
                let n = await I.Request.safePost("/locked_chats/unlock", {
                  additionalHeaders: { "ChatGPT-Account-ID": eu },
                  requestBody: { pin: e, pin_confirmation: t },
                })
                ;("create-confirm" === ek && (0, S.J)(eh, "SETUP_SUCCEEDED"),
                  ej(),
                  eQ(s) ? (e1(), e3(!0, n)) : ex.invalidateQueries({ queryKey: eb }))
              } catch {
                eQ(s) && ((0, S.J)(eh, "FAILURE"), eL(""), eR("failed"))
              }
              eJ(s)
            }
          }),
          (ed[35] = eu),
          (ed[36] = e1),
          (ed[37] = ex),
          (ed[38] = ej),
          (ed[39] = e3),
          (ed[40] = eh),
          (ed[41] = eX),
          (ed[42] = eb),
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
                  isExpectedError: Z,
                }),
                  eQ(t) && (eR(null), eP("change-new")))
              } catch (e) {
                eQ(t) && e2(e)
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
      ed[53] !== ej ||
      ed[54] !== e3 ||
      ed[55] !== eh ||
      ed[56] !== eX ||
      ed[57] !== eb
        ? ((D = async function (e, t) {
            let s = eX("change")
            if (null != s) {
              try {
                let n = await I.Request.safePost("/locked_chats/pin/change", {
                  additionalHeaders: { "ChatGPT-Account-ID": eu },
                  requestBody: { current_pin: e, new_pin: t },
                  isExpectedError: Z,
                })
                ;((0, S.J)(eh, "CHANGE_PIN_SUCCEEDED"),
                  ej(),
                  eQ(s) ? (e1(), e3(!0, n)) : ex.invalidateQueries({ queryKey: eb }))
              } catch (e) {
                eQ(s) && (eN(""), eL(""), eP("change-current"), e2(e))
              }
              eJ(s)
            }
          }),
          (ed[49] = eu),
          (ed[50] = e1),
          (ed[51] = e2),
          (ed[52] = ex),
          (ed[53] = ej),
          (ed[54] = e3),
          (ed[55] = eh),
          (ed[56] = eX),
          (ed[57] = eb),
          (ed[58] = D))
        : (D = ed[58])
      let e6 = D
      ed[59] !== eu || ed[60] !== eX || ed[61] !== eg
        ? ((R = async function () {
            if (null == eg) return void eH(!0)
            let e = eX("challenge")
            if (null != e) {
              try {
                let { reauth_challenge: t } = await I.Request.safePost("/locked_chats/pin/reset/challenge", {
                  additionalHeaders: { "ChatGPT-Account-ID": eu },
                })
                if (eQ(e)) {
                  let { beginAccountPinResetReauth: n } = await (async function () {
                    return s.e(616432).then(s.bind(s, "HarU"))
                  })()
                  eQ(e) &&
                    !(await n({ accountId: eu, userId: eg, challenge: t, isCurrent: () => eQ(e) })) &&
                    eQ(e) &&
                    eH(!0)
                }
              } catch {
                eQ(e) && eH(!0)
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
      ed[67] !== ej ||
      ed[68] !== e3 ||
      ed[69] !== eh ||
      ed[70] !== eX ||
      ed[71] !== eb
        ? ((O = async function (e) {
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
                  if (e instanceof E.fk && e.status >= 400 && e.status < 500 && "pin_reset_in_progress" !== e.errorCode)
                    throw e
                  let t = await I.Request.safeGet("/locked_chats/status", {
                    additionalHeaders: { "ChatGPT-Account-ID": eu },
                  })
                  if (!t.has_pin || "in_progress" === t.pin_reset_status) return t
                  throw e
                })
              ;((0, S.J)(eh, "RESET_SUCCEEDED"), null != i.project_id && (0, T.tA)(eh, eu, i.project_id))
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
                ? (ej(), e3(o.has_pin, o))
                : (null != n && ex.setQueryData(eb, n), ex.invalidateQueries({ queryKey: eb })),
                eQ(t) && (e1(), r && !o.has_pin && eP("reset-new")))
            } catch {
              eQ(t) && ((0, S.J)(eh, "FAILURE"), eq(null), eK(!0))
            }
            eJ(t)
          }),
          (ed[63] = eu),
          (ed[64] = e1),
          (ed[65] = eA),
          (ed[66] = ex),
          (ed[67] = ej),
          (ed[68] = e3),
          (ed[69] = eh),
          (ed[70] = eX),
          (ed[71] = eb),
          (ed[72] = O))
        : (O = ed[72])
      let e7 = O
      ;(ed[73] !== eu || ed[74] !== ey || ed[75] !== ez || ed[76] !== ef || ed[77] !== eg
        ? ((F = () => {}),
          (Y = [eu, ey, ez, ef, eg]),
          (ed[73] = eu),
          (ed[74] = ey),
          (ed[75] = ez),
          (ed[76] = ef),
          (ed[77] = eg),
          (ed[78] = F),
          (ed[79] = Y))
        : ((F = ed[78]), (Y = ed[79])),
        (0, l.useEffect)(F, Y))
      let e8 = eM?.identity === ez ? eM.kind : null,
        te = null != e8 && "challenge" !== e8,
        tt = eC?.pin_lockout_retry_after_seconds ?? 0,
        ts = tt > 0 || "locked" === eD,
        tn = "change-current" === ek,
        ti = "create" === ek || "change-new" === ek || "reset-new" === ek,
        ta = "create-confirm" === ek || "change-confirm" === ek || "reset-confirm" === ek
      ;(ed[80] !== eE || ed[81] !== ta || ed[82] !== eS || ed[83] !== tn || ed[84] !== eT
        ? ((Q = eT),
          tn ? (Q = eS) : ta && (Q = eE),
          (ed[80] = eE),
          (ed[81] = ta),
          (ed[82] = eS),
          (ed[83] = tn),
          (ed[84] = eT),
          (ed[85] = Q))
        : (Q = ed[85]),
        ed[86] !== e6 ||
        ed[87] !== ta ||
        ed[88] !== e4 ||
        ed[89] !== eS ||
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
                if (!W.test(t)) return void eR("invalid")
                ;(eR(null),
                  tn
                    ? e5(t)
                    : ti
                      ? (eN(t),
                        eL(""),
                        "create" === ek
                          ? eP("create-confirm")
                          : "change-new" === ek
                            ? eP("change-confirm")
                            : eP("reset-confirm"))
                      : ta && (t !== eT ? (eL(""), eR("mismatch")) : "change-confirm" === ek ? e6(eS, eT) : e4(eT, t)))
              }
            }),
            (ed[86] = e6),
            (ed[87] = ta),
            (ed[88] = e4),
            (ed[89] = eS),
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
        ? ((J = (0, n.jsx)(d.A, { ...q.L.title })),
          (ee = (0, n.jsx)(d.A, {
            id: "settingsModal.accountPin.description",
            defaultMessage: "Use your account PIN to protect your locked chats across devices.",
            description: "Explanation of what the Account PIN protects on the PIN settings page",
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
        ed[104] !== e_ ? ((es = () => void e_()), (ed[104] = e_), (ed[105] = es)) : (es = ed[105]),
        ed[106] !== e1 || ed[107] !== eh
          ? ((en = () => {
              ;((0, S.J)(eh, "FEATURE_ENTRY"), (0, S.J)(eh, "SETUP_STARTED"), e1(), eP("create"))
            }),
            (ei = () => {
              ;((0, S.J)(eh, "FEATURE_ENTRY"), (0, S.J)(eh, "CHANGE_PIN_STARTED"), e1(), eP("change-current"))
            }),
            (ed[106] = e1),
            (ed[107] = eh),
            (ed[108] = en),
            (ed[109] = ei))
          : ((en = ed[108]), (ei = ed[109])),
        ed[110] !== e1 || ed[111] !== e9 || ed[112] !== eh
          ? ((ea = () => {
              ;((0, S.J)(eh, "FEATURE_ENTRY"), (0, S.J)(eh, "RESET_STARTED"), e1(), eV(!0))
            }),
            (ed[110] = e1),
            (ed[111] = e9),
            (ed[112] = eh),
            (ed[113] = ea))
          : (ea = ed[113]))
      let tr = "challenge" === e8,
        tc = "reset-warning" === ek && (null != eO || eF)
      ed[114] !== e8 || ed[115] !== e9 || ed[116] !== eF || ed[117] !== eO || ed[118] !== e7
        ? ((eo = () => {
            "reset" !== e8 && "challenge" !== e8 && (null != eO ? e7(eO) : eF && (eH(!1), e9()))
          }),
          (ed[114] = e8),
          (ed[115] = e9),
          (ed[116] = eF),
          (ed[117] = eO),
          (ed[118] = e7),
          (ed[119] = eo))
        : (eo = ed[119])
      let tl = "reset" === e8 || "challenge" === e8
      return (
        ed[120] !== e1 ||
        ed[121] !== ew ||
        ed[122] !== eB ||
        ed[123] !== eF ||
        ed[124] !== eU ||
        ed[125] !== eC ||
        ed[126] !== es ||
        ed[127] !== en ||
        ed[128] !== ei ||
        ed[129] !== ea ||
        ed[130] !== tr ||
        ed[131] !== tc ||
        ed[132] !== eo ||
        ed[133] !== tl
          ? ((er = (0, n.jsx)(H, {
              status: eC,
              isError: ew,
              onRetryStatus: es,
              onCreate: en,
              onChange: ei,
              onReset: ea,
              isRequestingReset: tr,
              resetReauthError: eU,
              resetActionError: eF,
              nativeResetAccountCheck: eB,
              onCancelNativeReset: e1,
              showResetWarning: tc,
              onConfirmReset: eo,
              onCancelReset: e1,
              isResetPending: tl,
            })),
            (ed[120] = e1),
            (ed[121] = ew),
            (ed[122] = eB),
            (ed[123] = eF),
            (ed[124] = eU),
            (ed[125] = eC),
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
        ed[137] !== eS ||
        ed[138] !== eD ||
        ed[139] !== te ||
        ed[140] !== tt ||
        ed[141] !== eT ||
        ed[142] !== e_ ||
        ed[143] !== eh ||
        ed[144] !== ez ||
        ed[145] !== ek ||
        ed[146] !== to
          ? ((ec =
              null != ek
                ? (0, n.jsx)(K.d, {
                    step: ek,
                    currentPin: eS,
                    nextPin: eT,
                    confirmation: eE,
                    error: eD,
                    lockedFor: tt,
                    isPending: te,
                    onCurrentPinChange: eG,
                    onNextPinChange: eN,
                    onConfirmationChange: eL,
                    onClearError: () => eR(null),
                    onLockoutExpired: () => {
                      let e = { identity: ez, generation: eY.current }
                      e_().then((t) => {
                        let { data: s, isError: n } = t
                        eQ(e) && (n ? eR("failed") : (s?.pin_lockout_retry_after_seconds ?? 0) <= 0 && eR(null))
                      })
                    },
                    onSubmit: to,
                    onClose: () => {
                      ;((0, S.J)(eh, "CANCELLED"), e1())
                    },
                  })
                : null),
            (ed[135] = e1),
            (ed[136] = eE),
            (ed[137] = eS),
            (ed[138] = eD),
            (ed[139] = te),
            (ed[140] = tt),
            (ed[141] = eT),
            (ed[142] = e_),
            (ed[143] = eh),
            (ed[144] = ez),
            (ed[145] = ek),
            (ed[146] = to),
            (ed[147] = ec))
          : (ec = ed[147]),
        ed[148] !== et || ed[149] !== er || ed[150] !== ec
          ? ((el = (0, n.jsxs)(U.kU, { title: J, subtitle: ee, onBack: et, children: [er, ec] })),
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
    var Q = s("omJR"),
      X = s("TjgH"),
      J = s("aQvR"),
      ee = s("HOLv"),
      et = s("vw1R"),
      es = s("FBm3"),
      en = s("cE8H"),
      ei = s("SGsN"),
      ea = s("F0xz")
    let eo = (0, s("Qgfj").YK)({
        updateFailed: {
          id: "settingsModal.lockdownModeUpdateFailed",
          defaultMessage: "We couldn't update lockdown mode. Try again.",
          description:
            "Error toast when the Lockdown mode account setting cannot be saved from Security settings. The user can try the toggle again. No sensitive account or server error details are included.",
        },
        enabled: {
          id: "settingsModal.lockdownModeEnabledToast",
          defaultMessage: "Lockdown mode turned on",
          description:
            "Success toast after enabling Lockdown mode in Security settings, confirming that the account setting was saved. Translate Lockdown mode as the name of the security feature.",
        },
        disabled: {
          id: "settingsModal.lockdownModeDisabledToast",
          defaultMessage: "Lockdown mode turned off",
          description:
            "Success toast after disabling Lockdown mode in Security settings, confirming that the account setting was saved. Translate Lockdown mode as the name of the security feature.",
        },
      }),
      er = (0, x._)(async () => (await s.e(376586).then(s.bind(s, "SdCT"))).LockdownConfirmation),
      ec = (0, c.un)(
        N.u,
        ({ get: e }) => {
          let t = e(M.m0),
            s = e(m.Sk),
            n = e(M.chatGptAuthenticatedUserId$)
          return "allowed" === t.status &&
            "plan" in t &&
            !(0, et.o)(e(M.PO).plan) &&
            s === t.accountId &&
            s === e(M.chatGptAuthenticatedAccountId$) &&
            null != n
            ? { accountId: s, userId: n }
            : null
        },
        { isEqual: (e, t) => e?.accountId === t?.accountId && e?.userId === t?.userId },
      ),
      el = (0, c.un)(
        N.u,
        ({ get: e }) => {
          let { data: t, isLoading: s } = e(m.s6)
          return { isLoading: s, lockdownModeEnabled: t?.lockdownModeEnabled === !0 }
        },
        { isEqual: (e, t) => e.isLoading === t.isLoading && e.lockdownModeEnabled === t.lockdownModeEnabled },
      )
    function ed(e) {
      let t,
        s = (0, i.c)(3),
        { accountId: a } = e,
        o = (0, c.Ul)(ec)
      return (
        s[0] !== o || s[1] !== a
          ? ((t = o?.accountId === a ? (0, n.jsx)(eu, { account: o }, JSON.stringify(o)) : null),
            (s[0] = o),
            (s[1] = a),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function eu(e) {
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
        b,
        C,
        w = (0, i.c)(42),
        { account: A } = e,
        j = (0, c.gh)(N.u),
        { isLoading: k, lockdownModeEnabled: P } = (0, c.Ul)(el),
        [M, S] = (0, l.useState)(!1),
        G = (0, l.useRef)(null)
      if (
        (w[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => () => {
              G.current?.abort()
            }),
            (s = []),
            (w[0] = t),
            (w[1] = s))
          : ((t = w[0]), (s = w[1])),
        (0, l.useEffect)(t, s),
        w[2] !== A.accountId)
      ) {
        var T
        ;((a = {
          mutationKey: ["chatgpt-security-mode", (T = A.accountId)],
          scope: { id: `chatgpt-security-mode:${T}` },
        }),
          (w[2] = A.accountId),
          (w[3] = a))
      } else a = w[3]
      let E = a
      w[4] !== E.mutationKey
        ? ((o = { exact: !0, mutationKey: E.mutationKey }), (w[4] = E.mutationKey), (w[5] = o))
        : (o = w[5])
      let L = (0, en.l)(o) > 0
      w[6] !== A.accountId ? ((u = (0, es.dI)(A.accountId)), (w[6] = A.accountId), (w[7] = u)) : (u = w[7])
      let D = u.protection.queryKey
      w[8] !== A.accountId || w[9] !== A.userId || w[10] !== D || w[11] !== j
        ? ((p = () => {
            let e = j.get(ec),
              t = j.queryClient.getQueryState(D)
            return (
              e?.userId === A.userId &&
              e.accountId === A.accountId &&
              t?.status === "success" &&
              t.data?.aas_eligible === !0
            )
          }),
          (w[8] = A.accountId),
          (w[9] = A.userId),
          (w[10] = D),
          (w[11] = j),
          (w[12] = p))
        : (p = w[12])
      let R = p
      ;(w[13] !== A.accountId || w[14] !== A.userId || w[15] !== R || w[16] !== j
        ? ((h = async (e) => {
            let { controller: t, enabled: s } = e
            if (t.signal.aborted) return
            let i = j.query.snapshot(m.s6)
            if ((await i.cancel(), t.signal.aborted)) return
            let a = i.getData()?.lockdownModeEnabled
            if (!R()) return
            s && i.setData(ef)
            let o = () => {
              ;(s &&
                i.setData((e) => (null != a && e?.lockdownModeEnabled === !0 ? { ...e, lockdownModeEnabled: a } : e)),
                i.invalidate({ refetchType: "none" }))
            }
            t.signal.addEventListener("abort", o, { once: !0 })
            let r = await I.Request.safePatch("/settings/account_user_setting", {
              additionalHeaders: { "ChatGPT-Account-ID": A.accountId },
              parameters: { query: { feature: "lockdown_mode_enabled", value: s } },
              signal: t.signal,
            }).then(em, eg)
            if ((t.signal.removeEventListener("abort", o), r || o(), t.signal.aborted)) {
              let e = j.get(ec)
              e?.accountId === A.accountId && e.userId === A.userId && (await i.invalidate({ refetchType: "all" }))
              return
            }
            if (!r) {
              if ((await i.invalidate({ refetchType: "all" }), t.signal.aborted)) return
              j.get(ei.Id).danger((0, n.jsx)(d.A, { ...eo.updateFailed }), {
                errorAnalytics: { toastId: "settings.mutationFn.updateFailed" },
              })
              return
            }
            ;(s || i.setData(eh),
              await i.invalidate(),
              t.signal.aborted ||
                j.get(ei.Id).success(s ? (0, n.jsx)(d.A, { ...eo.enabled }) : (0, n.jsx)(d.A, { ...eo.disabled })))
          }),
          (w[13] = A.accountId),
          (w[14] = A.userId),
          (w[15] = R),
          (w[16] = j),
          (w[17] = h))
        : (h = w[17]),
        w[18] !== E || w[19] !== h
          ? ((g = { ...E, mutationFn: h }), (w[18] = E), (w[19] = h), (w[20] = g))
          : (g = w[20]))
      let O = (0, r.n)(g)
      w[21] !== A.accountId ||
      w[22] !== A.userId ||
      w[23] !== R ||
      w[24] !== E.mutationKey ||
      w[25] !== j ||
      w[26] !== O
        ? ((f = (e) => {
            if (null != G.current || j.queryClient.isMutating({ exact: !0, mutationKey: E.mutationKey }) > 0 || !R())
              return
            let t = new AbortController()
            G.current = t
            let s = j.watch((e) => {
              let s = e.get(ec)
              ;(s?.accountId !== A.accountId || s.userId !== A.userId) && t.abort()
            })
            S(!1)
            let n = () => {
              ;(s(), (G.current = null))
            }
            O.mutateAsync({ controller: t, enabled: e }).then(n, n)
          }),
          (w[21] = A.accountId),
          (w[22] = A.userId),
          (w[23] = R),
          (w[24] = E.mutationKey),
          (w[25] = j),
          (w[26] = O),
          (w[27] = f))
        : (f = w[27])
      let q = f
      return (
        w[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, n.jsx)(d.A, {
              id: "settingsModal.lockdownMode",
              defaultMessage: "Lockdown mode",
              description:
                "Toggle label in Security settings. Lockdown mode is the name of a security feature that restricts external connections.",
            })),
            (w[28] = y))
          : (y = w[28]),
        w[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, n.jsx)(d.A, {
              id: "settingsModal.lockdownModeDescription",
              defaultMessage:
                "Helps protect sensitive data from prompt-injection attacks by limiting features that can connect to the web or external services. <link>Learn more</link>",
              description:
                "Help text below the Lockdown mode toggle in Security settings. The link wraps Learn more and opens the official explanation of this security feature.",
              values: { link: ep },
            })),
            (w[29] = x))
          : (x = w[29]),
        w[30] !== k || w[31] !== P || w[32] !== q || w[33] !== L
          ? ((v = (0, n.jsx)(_.ic, {
              id: "lockdown-mode",
              label: y,
              description: x,
              control: (e) =>
                (0, n.jsx)(ea.l, {
                  ...e,
                  checked: P,
                  disabled: k || L,
                  onChange: (e) => {
                    e ? S(!0) : q(!1)
                  },
                }),
            })),
            (w[30] = k),
            (w[31] = P),
            (w[32] = q),
            (w[33] = L),
            (w[34] = v))
          : (v = w[34]),
        w[35] !== M || w[36] !== q || w[37] !== L
          ? ((b = M ? (0, n.jsx)(er, { isPending: L, onConfirm: () => q(!0), onClose: () => S(!1) }) : null),
            (w[35] = M),
            (w[36] = q),
            (w[37] = L),
            (w[38] = b))
          : (b = w[38]),
        w[39] !== v || w[40] !== b
          ? ((C = (0, n.jsxs)(n.Fragment, { children: [v, b] })), (w[39] = v), (w[40] = b), (w[41] = C))
          : (C = w[41]),
        C
      )
    }
    function ep(e) {
      return (0, n.jsx)(D.G, {
        appearance: "secondary",
        initiator: "open_in_browser_bridge",
        href: "https://help.openai.com/en/articles/20001061-lockdown-mode",
        children: e,
      })
    }
    function eh(e) {
      return null == e ? e : { ...e, lockdownModeEnabled: !1 }
    }
    function eg() {
      return !1
    }
    function em() {
      return !0
    }
    function ef(e) {
      return null == e ? e : { ...e, lockdownModeEnabled: !0 }
    }
    var ey = s("h4GZ")
    function ex(e) {
      let t,
        s,
        a,
        o,
        r = (0, i.c)(5),
        { onClose: c } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.reauthError",
              defaultMessage: "Couldn’t verify your identity",
              description:
                "Title of an error dialog when starting the required identity verification for an account security change fails.",
            })),
            (s = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.closeError",
              defaultMessage: "Close",
              description: "Dismisses the security reauthentication error without changing account settings.",
            })),
            (r[0] = t),
            (r[1] = s))
          : ((t = r[0]), (s = r[1])),
        r[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.reauthError.description",
              defaultMessage: "Close this message and try again",
              description:
                "Recovery guidance after identity verification for an account security change could not start. The user can dismiss this message and repeat the action from security settings.",
            })),
            (r[2] = a))
          : (a = r[2]),
        r[3] !== c
          ? ((o = (0, n.jsx)(U.i$, {
              title: t,
              confirmLabel: s,
              informational: !0,
              isPending: !1,
              onConfirm: c,
              onClose: c,
              children: a,
            })),
            (r[3] = c),
            (r[4] = o))
          : (o = r[4]),
        o
      )
    }
    function ev(e) {
      let t,
        s,
        a,
        r,
        c,
        l = (0, i.c)(8),
        { accountId: u, onManage: p } = e
      l[0] !== u ? ((t = (0, es.dI)(u)), (l[0] = u), (l[1] = t)) : (t = l[1])
      let { data: h, isSuccess: g } = (0, o.I)(t.protection)
      return g && h.advanced_protection_mode_enabled
        ? (l[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.advancedProtection.banner.enabled",
                defaultMessage: "Advanced account security enabled",
                description:
                  "Banner confirming that advanced account security protections are enabled for the account.",
              })),
              (l[2] = s))
            : (s = l[2]),
          l[3] !== p
            ? ((a = (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.advancedProtection.banner.description",
                defaultMessage:
                  "Helps keep your account safe by requiring stronger sign-in methods. <manage>Manage</manage>",
                description:
                  "Supporting copy in the enabled Advanced account security banner. The manage link opens the account's existing security configuration subview.",
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
            ? ((r = (0, n.jsx)(ee.I, { className: "shrink-0 text-info", asset: Q.p })), (l[5] = r))
            : (r = l[5]),
          l[6] !== a
            ? ((c = (0, n.jsx)(j.t, {
                className: "select-none",
                variant: "recommendation",
                children: (0, n.jsx)(_.ic, {
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
    function eb(e) {
      let t,
        s,
        a,
        r,
        c,
        l,
        u,
        p,
        h = (0, i.c)(23),
        { accountId: g, onOpenAdvancedProtection: m } = e,
        { data: x } = (0, f.oV)(),
        v = x?.accounts?.find((e) => {
          let { id: t } = e
          return t === g
        })
      h[0] !== g ? ((t = (0, es.dI)(g)), (h[0] = g), (h[1] = t)) : (t = h[1])
      let { data: b } = (0, o.I)(t.cyber)
      h[2] !== g ? ((s = (0, es.dI)(g)), (h[2] = g), (h[3] = s)) : (s = h[3])
      let { data: w, isSuccess: A } = (0, o.I)(s.protection),
        k = w?.advanced_protection_mode_enabled === !0,
        P = A && (w.aas_eligible || k),
        M = b?.tac1_enabled === !0 && v?.plan_type != null && !(0, et.o)(v.plan_type)
      return P || M
        ? (h[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(C.X.Header, {
                title: (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.advancedSecurity",
                  defaultMessage: "Advanced security",
                  description:
                    "Section heading above additional account-security programs in Security and login settings.",
                }),
              })),
              (h[4] = a))
            : (a = h[4]),
          h[5] !== k || h[6] !== m || h[7] !== P
            ? ((r =
                P && k
                  ? (0, n.jsx)(_.kG, {
                      edgeRounding: "surface",
                      label: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.advancedProtection.title",
                        defaultMessage: "Advanced account security",
                        description:
                          "Title of the Advanced account security row in Security and login settings, where eligible users can enroll and enrolled users can manage their protections. Translate the feature name.",
                      }),
                      description: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.advancedProtection.enabled",
                        defaultMessage: "Advanced account security is enabled",
                        description:
                          "Status description in the Advanced account security row in Security and login settings, confirming that the user's account protections are already enabled.",
                      }),
                      onClick: m,
                      trailing: (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.advancedProtection.manageNative",
                            defaultMessage: "Manage",
                            description:
                              "Short trailing action in the Advanced account security row for an enrolled user. It opens native management in Security and login settings.",
                          }),
                          (0, n.jsx)(y.uM3, {}),
                        ],
                      }),
                    })
                  : null),
              (h[5] = k),
              (h[6] = m),
              (h[7] = P),
              (h[8] = r))
            : (r = h[8]),
          h[9] !== k || h[10] !== P
            ? ((c =
                P && !k
                  ? (0, n.jsx)(_.ic, {
                      label: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.advancedProtection.title",
                        defaultMessage: "Advanced account security",
                        description:
                          "Title of the Advanced account security row in Security and login settings, where eligible users can enroll and enrolled users can manage their protections. Translate the feature name.",
                      }),
                      description: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.advancedProtection.description",
                        defaultMessage:
                          "Use stronger sign-in protections and additional safeguards to help prevent unauthorized access to your account",
                        description:
                          "Description of Advanced account security in Security and login settings for users who are eligible but have not enrolled. The adjacent link opens ChatGPT to explain the protections and complete enrollment.",
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
                              description:
                                "Link in the Advanced account security row in Security and login settings for an eligible user who has not enrolled. It opens the existing ChatGPT landing page to learn about the protections and complete enrollment. Keep this action label short.",
                            }),
                            (0, n.jsx)(y.uM3, {}),
                          ],
                        }),
                      }),
                    })
                  : null),
              (h[9] = k),
              (h[10] = P),
              (h[11] = c))
            : (c = h[11]),
          h[12] !== g || h[13] !== A || h[14] !== w
            ? ((l = A && !0 === w.aas_eligible ? (0, n.jsx)(ed, { accountId: g }) : null),
              (h[12] = g),
              (h[13] = A),
              (h[14] = w),
              (h[15] = l))
            : (l = h[15]),
          h[16] !== M
            ? ((u = M
                ? (0, n.jsx)(D.G, {
                    className:
                      "block w-full cursor-interaction hover:bg-secondary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                    initiator: "open_in_browser_bridge",
                    href: "https://chatgpt.com/cyber",
                    children: (0, n.jsx)(_.ic, {
                      label: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.cyber.title",
                        defaultMessage: "Daybreak",
                        description:
                          "Short link label for the Daybreak cybersecurity program under Advanced security in Security and login settings. Opens the signed-in user's access and eligibility page. Daybreak is a brand name and stays untranslated.",
                      }),
                      description: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.cyber.description",
                        defaultMessage: "Check your eligibility for Daybreak access",
                        description:
                          "Supporting text beneath the Daybreak program link under Advanced security in Security and login settings. Tells the signed-in user that the link opens the program's access eligibility page. Daybreak is a brand name and stays untranslated. Short sentence without placeholders.",
                      }),
                      control: (0, n.jsx)(J.g, { size: 16, href: "https://chatgpt.com/cyber" }),
                      controlSizing: "content",
                    }),
                  })
                : null),
              (h[16] = M),
              (h[17] = u))
            : (u = h[17]),
          h[18] !== r || h[19] !== c || h[20] !== l || h[21] !== u
            ? ((p = (0, n.jsxs)(C.X, {
                className: "select-none",
                children: [a, (0, n.jsx)(C.X.Content, { children: (0, n.jsxs)(j.t, { children: [r, c, l, u] }) })],
              })),
              (h[18] = r),
              (h[19] = c),
              (h[20] = l),
              (h[21] = u),
              (h[22] = p))
            : (p = h[22]),
          p)
        : null
    }
    function eC(e) {
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
        b,
        C,
        w,
        A,
        k,
        P,
        M,
        S,
        G,
        T,
        N,
        R,
        O,
        q,
        H = (0, i.c)(70),
        {
          accountId: F,
          disableConfirmationRequested: K,
          onBack: B,
          onClearDisableConfirmation: V,
          onRequestDisableConfirmation: W,
        } = e,
        z = (0, a.jE)(),
        Z = (0, l.useRef)(null),
        Y = (0, l.useRef)(!1)
      H[0] !== F ? ((t = (0, es.dI)(F)), (H[0] = F), (H[1] = t)) : (t = H[1])
      let { data: $, isError: Q, refetch: J } = (0, o.I)(t.protection)
      ;(H[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = () => (
            (Y.current = !0),
            () => {
              ;((Y.current = !1), Z.current?.abort())
            }
          )),
          (c = []),
          (H[2] = s),
          (H[3] = c))
        : ((s = H[2]), (c = H[3])),
        (0, l.useEffect)(s, c),
        H[4] !== F ? ((u = (e) => (0, ey.nc)(F, e)), (H[4] = F), (H[5] = u)) : (u = H[5]),
        H[6] !== W
          ? ((h = (e) => {
              Y.current && ("ready" === e ? W() : "object" == typeof e && window.location.assign(e.redirectUrl))
            }),
            (H[6] = W),
            (H[7] = h))
          : (h = H[7]),
        H[8] !== u || H[9] !== h
          ? ((g = { mutationFn: u, onSuccess: h }), (H[8] = u), (H[9] = h), (H[10] = g))
          : (g = H[10]))
      let ee = (0, r.n)(g)
      ;(H[11] !== F ? ((m = () => (0, ey.a9)(F)), (H[11] = F), (H[12] = m)) : (m = H[12]),
        H[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (e) => {
              Y.current && "object" == typeof e && window.location.assign(e.redirectUrl)
            }),
            (H[13] = f))
          : (f = H[13]),
        H[14] !== m ? ((x = { mutationFn: m, onSuccess: f }), (H[14] = m), (H[15] = x)) : (x = H[15]))
      let et = (0, r.n)(x)
      ;(H[16] !== F
        ? ((v = async () => {
            let e = await (0, p.loadBrowserChatGptAuth)()
            if (!Y.current) return "cancelled"
            if (e?.accountId !== F || !(0, ey.m)(e.accessToken)) return "reauth_required"
            let t = new AbortController()
            Z.current = t
            try {
              return (
                await I.Request.safePost("/accounts/security_settings/advanced_protection_mode/disable", {
                  additionalHeaders: { "ChatGPT-Account-ID": F },
                  signal: t.signal,
                }),
                t.signal.aborted ? "cancelled" : "disabled"
              )
            } catch (e) {
              if (t.signal.aborted) return "cancelled"
              throw e
            }
          }),
          (H[16] = F),
          (H[17] = v))
        : (v = H[17]),
        H[18] !== F || H[19] !== B || H[20] !== ee || H[21] !== z
          ? ((b = (e) => {
              if (!Y.current) return
              if ("reauth_required" === e) return void ee.mutate(!0)
              if ("disabled" !== e || Z.current?.signal.aborted === !0) return
              let t = (0, es.dI)(F)
              ;(Promise.all([
                z.invalidateQueries({ queryKey: t.protection.queryKey, refetchType: "all" }),
                z.invalidateQueries({ queryKey: t.mfa.queryKey, refetchType: "all" }),
                z.invalidateQueries({ queryKey: t.addPassword.queryKey, refetchType: "all" }),
                z.invalidateQueries({ queryKey: t.changePassword.queryKey, refetchType: "all" }),
              ]),
                (Z.current = null),
                B())
            }),
            (H[18] = F),
            (H[19] = B),
            (H[20] = ee),
            (H[21] = z),
            (H[22] = b))
          : (b = H[22]))
      let en = (0, r.n)({
          mutationFn: v,
          onSuccess: b,
          onError: (e) => {
            !Y.current ||
              (Z.current?.signal.aborted !== !0 &&
                ((Z.current = null),
                e instanceof E.fk &&
                  (401 === e.status || "reauth_required" === e.errorCode) &&
                  (en.reset(), ee.mutate(!0))))
          },
        }),
        ei = ee.isPending || et.isPending || en.isPending,
        ea = ee.isError || "failed" === ee.data || et.isError || "failed" === et.data,
        eo = $?.advanced_protection_mode_enabled === !0,
        er = null != $ && !Q
      return (
        H[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.advancedProtection.title",
              defaultMessage: "Advanced account security",
              description:
                "Title of the Advanced account security row in Security and login settings, where eligible users can enroll and enrolled users can manage their protections. Translate the feature name.",
            })),
            (H[23] = C))
          : (C = H[23]),
        H[24] !== eo
          ? ((w = eo
              ? (0, n.jsxs)(X.E, {
                  className: "select-none",
                  variant: "neutral",
                  children: [
                    (0, n.jsx)(y._ah, { className: "text-info" }),
                    (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.advancedProtection.enabledBadge",
                      defaultMessage: "Enabled",
                      description:
                        "Short status badge beside the Advanced account security detail-page title when the account is enrolled.",
                    }),
                  ],
                })
              : null),
            (H[24] = eo),
            (H[25] = w))
          : (w = H[25]),
        H[26] !== w
          ? ((A = (0, n.jsxs)("span", {
              className: "flex flex-wrap items-start justify-between gap-4",
              children: [C, w],
            })),
            (H[26] = w),
            (H[27] = A))
          : (A = H[27]),
        H[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, n.jsx)("p", {
              children: (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.advancedProtection.detailDescription",
                defaultMessage:
                  "Advanced account security helps keep your account safe by requiring stronger sign-in methods like passkeys or hardware security keys",
                description:
                  "Introduction on the native Advanced account security detail page. It explains that enrolled accounts require phishing-resistant sign-in methods such as passkeys or hardware security keys.",
              }),
            })),
            (H[28] = k))
          : (k = H[28]),
        H[29] !== er || H[30] !== eo
          ? ((P =
              er && eo
                ? (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.advancedProtection.includedDescription",
                        defaultMessage: "The following protections are included with advanced account security:",
                        description:
                          "Introductory sentence above the protections list on the native Advanced account security detail page for an enrolled user.",
                      }),
                      (0, n.jsxs)("ul", {
                        className: "list-disc ps-5",
                        children: [
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.included.disableEmailSmsCodes",
                              defaultMessage: "Disable email and SMS sign-in codes",
                              description:
                                "Protection listed on the native Advanced account security detail page. It says email and SMS sign-in codes are disabled while enrolled.",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.included.disablePasswordSignIn",
                              defaultMessage: "Disable password sign-in",
                              description:
                                "Protection listed on the native Advanced account security detail page. It says password sign-in is disabled while enrolled.",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.included.disableEmailRecovery",
                              defaultMessage: "Disable email account recovery",
                              description:
                                "Protection listed on the native Advanced account security detail page. It says email-based account recovery is disabled while enrolled.",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.included.disableModelTraining",
                              defaultMessage: "Disable model training",
                              description:
                                "Protection listed on the native Advanced account security detail page. It says model training is disabled while enrolled.",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.included.enableEmailLoginAlerts",
                              defaultMessage: "Enable email alerts for login attempts",
                              description:
                                "Protection listed on the native Advanced account security detail page. It says email alerts for login attempts are enabled while enrolled.",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.advancedProtection.included.enableShorterSessions",
                              defaultMessage: "Enable shorter active sessions",
                              description:
                                "Protection listed on the native Advanced account security detail page. It says active sessions are shortened while enrolled.",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
            (H[29] = er),
            (H[30] = eo),
            (H[31] = P))
          : (P = H[31]),
        H[32] !== P
          ? ((M = (0, n.jsxs)("div", {
              className: "flex flex-col gap-5 text-sm leading-6 text-wrap select-none",
              children: [k, P],
            })),
            (H[32] = P),
            (H[33] = M))
          : (M = H[33]),
        H[34] !== er || H[35] !== Q || H[36] !== J
          ? ((S = er ? null : (0, n.jsx)(U.mK, { isError: Q, onRetry: () => void J() })),
            (H[34] = er),
            (H[35] = Q),
            (H[36] = J),
            (H[37] = S))
          : (S = H[37]),
        H[38] !== er || H[39] !== eo || H[40] !== $
          ? ((G =
              er && !eo
                ? (0, n.jsx)(j.t, {
                    children: (0, n.jsx)(_.ic, {
                      label: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.advancedProtection.notEnrolled",
                        defaultMessage: "Advanced account security isn’t enabled",
                        description:
                          "Status shown on a direct native Advanced account security detail link when the authoritative account response says the user is not enrolled.",
                      }),
                      description: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.advancedProtection.description",
                        defaultMessage:
                          "Use stronger sign-in protections and additional safeguards to help prevent unauthorized access to your account",
                        description:
                          "Description of Advanced account security in Security and login settings for users who are eligible but have not enrolled. The adjacent link opens ChatGPT to explain the protections and complete enrollment.",
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
                                    description:
                                      "Link in the Advanced account security row in Security and login settings for an eligible user who has not enrolled. It opens the existing ChatGPT landing page to learn about the protections and complete enrollment. Keep this action label short.",
                                  }),
                                  (0, n.jsx)(y.uM3, {}),
                                ],
                              }),
                            })
                          : null,
                    }),
                  })
                : null),
            (H[38] = er),
            (H[39] = eo),
            (H[40] = $),
            (H[41] = G))
          : (G = H[41]),
        H[42] !== en || H[43] !== er || H[44] !== eo || H[45] !== ei || H[46] !== ee || H[47] !== et
          ? ((T =
              er && eo
                ? (0, n.jsxs)(j.t, {
                    children: [
                      (0, n.jsx)(_.ic, {
                        label: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.advancedProtection.recoveryKeys.title",
                          defaultMessage: "Recovery keys",
                          description:
                            "Row title on the native Advanced account security detail page for replacing recovery keys.",
                        }),
                        description: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.advancedProtection.recoveryKeys.description",
                          defaultMessage:
                            "Recovery keys help you regain access to your account if you lose your sign-in methods. Keep them stored somewhere safe. If you lose your recovery keys or think someone else has them, you can replace them here. Replacing them will invalidate the old keys.",
                          description:
                            "Body copy beside the recovery-key replacement action on the native Advanced account security detail page. It warns that replacing recovery keys invalidates the previous set.",
                        }),
                        controlSizing: "content",
                        control: (0, n.jsx)(L.$, {
                          color: "secondary",
                          size: "toolbar",
                          disabled: ei,
                          onClick: () => et.mutate(),
                          children: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.advancedProtection.recoveryKeys.replace",
                            defaultMessage: "Replace recovery keys",
                            description:
                              "Button on the native Advanced account security detail page that starts secure Login Web recovery-key regeneration.",
                          }),
                        }),
                      }),
                      (0, n.jsx)(_.ic, {
                        label: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.advancedProtection.disable.title",
                          defaultMessage: "Disable advanced account security",
                          description:
                            "Row title on the native Advanced account security detail page for turning off the feature.",
                        }),
                        description: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.advancedProtection.disable.description",
                          defaultMessage:
                            "This removes additional protections. Once disabled, you'll use standard sign-in and account recovery methods.",
                          description:
                            "Warning beside the disable action on the native Advanced account security detail page. It explains the account returns to standard sign-in and recovery.",
                        }),
                        controlSizing: "content",
                        control: (0, n.jsx)(L.$, {
                          color: "danger",
                          size: "toolbar",
                          disabled: ei,
                          onClick: () => {
                            ;(en.reset(), ee.mutate(!1))
                          },
                          children: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.advancedProtection.disable.button",
                            defaultMessage: "Disable",
                            description:
                              "Destructive button on the native Advanced account security detail page. It starts fresh MFA reauthentication before confirmation.",
                          }),
                        }),
                      }),
                    ],
                  })
                : null),
            (H[42] = en),
            (H[43] = er),
            (H[44] = eo),
            (H[45] = ei),
            (H[46] = ee),
            (H[47] = et),
            (H[48] = T))
          : (T = H[48]),
        H[49] !== B || H[50] !== A || H[51] !== M || H[52] !== S || H[53] !== G || H[54] !== T
          ? ((N = (0, n.jsxs)(U.kU, { onBack: B, title: A, subtitle: M, children: [S, G, T] })),
            (H[49] = B),
            (H[50] = A),
            (H[51] = M),
            (H[52] = S),
            (H[53] = G),
            (H[54] = T),
            (H[55] = N))
          : (N = H[55]),
        H[56] !== en || H[57] !== K || H[58] !== eo || H[59] !== V || H[60] !== ee.isPending
          ? ((R =
              K && eo
                ? (0, n.jsx)(U.i$, {
                    title: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.advancedProtection.disable.confirmation.title",
                      defaultMessage: "Disable advanced account security?",
                      description:
                        "Title of the destructive confirmation dialog shown only after fresh MFA verification for disabling Advanced account security.",
                    }),
                    confirmLabel: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.advancedProtection.disable.button",
                      defaultMessage: "Disable",
                      description:
                        "Destructive button on the native Advanced account security detail page. It starts fresh MFA reauthentication before confirmation.",
                    }),
                    onConfirm: () => en.mutate(),
                    onClose: V,
                    isPending: en.isPending || ee.isPending,
                    isError: en.isError,
                    errorMessage:
                      en.error instanceof E.fk && "sensitive_action_cooldown" === en.error.errorCode
                        ? (en.error.diagnosticError?.message ?? en.error.message)
                        : void 0,
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.advancedProtection.disable.confirmation.description",
                      defaultMessage:
                        "Disabling advanced account security will restore standard sign-in and account recovery methods, remove recovery keys, and stop requiring your passkeys or security keys at sign-in",
                      description:
                        "Body of the destructive confirmation dialog for disabling Advanced account security. It summarizes the security protections that will no longer be enforced.",
                    }),
                  })
                : null),
            (H[56] = en),
            (H[57] = K),
            (H[58] = eo),
            (H[59] = V),
            (H[60] = ee.isPending),
            (H[61] = R))
          : (R = H[61]),
        H[62] !== ee || H[63] !== ea || H[64] !== et
          ? ((O = ea
              ? (0, n.jsx)(ex, {
                  onClose: () => {
                    ;(ee.reset(), et.reset())
                  },
                })
              : null),
            (H[62] = ee),
            (H[63] = ea),
            (H[64] = et),
            (H[65] = O))
          : (O = H[65]),
        H[66] !== N || H[67] !== R || H[68] !== O
          ? ((q = (0, n.jsxs)(n.Fragment, { children: [N, R, O] })), (H[66] = N), (H[67] = R), (H[68] = O), (H[69] = q))
          : (q = H[69]),
        q
      )
    }
    var ew = s("mnJS"),
      e_ = s("iJY0")
    let eA = (0, e_.a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 12.75C20.7344 12.75 22.1406 14.1562 22.1406 15.8906V16.124C22.9757 16.4192 23.5742 17.2142 23.5742 18.1504V21.0869C23.5742 22.2742 22.6121 23.2372 21.4248 23.2373H16.5752C15.3879 23.2372 14.4248 22.2742 14.4248 21.0869V18.1504C14.4248 17.2142 15.0242 16.4193 15.8594 16.124V15.8906C15.8594 14.1562 17.2655 12.75 19 12.75ZM16.5752 17.5C16.2163 17.5001 15.9248 17.7915 15.9248 18.1504V21.0869C15.9248 21.4458 16.2163 21.7372 16.5752 21.7373H21.4248C21.7837 21.7372 22.0742 21.4458 22.0742 21.0869V18.1504C22.0742 17.7915 21.7837 17.5001 21.4248 17.5H16.5752ZM19 14.25C18.094 14.25 17.3594 14.9846 17.3594 15.8906V16H20.6406V15.8906C20.6406 14.9846 19.906 14.25 19 14.25Z" fill="currentColor"/> <path d="M14.6475 2.25C18.5699 2.25026 21.7498 5.43005 21.75 9.35254C21.75 9.76673 21.4142 10.1025 21 10.1025C20.5858 10.1025 20.25 9.76674 20.25 9.35254C20.2498 6.35506 17.8958 3.90698 14.9355 3.75684L14.6475 3.75C11.5531 3.75 9.04416 6.25839 9.04395 9.35254C9.04395 9.87285 9.1148 10.3765 9.24707 10.8535C9.34106 11.193 9.25402 11.5699 8.99121 11.833L3.96973 16.8555C3.82917 16.996 3.75011 17.187 3.75 17.3857V20.25H6.61426L6.76074 20.2354C6.90501 20.2065 7.03896 20.1358 7.14453 20.0303L8.07324 19.1016V17.5439C8.07324 16.9917 8.52096 16.5439 9.07324 16.5439H10.6309L12.165 15.0088C12.4577 14.7159 12.9326 14.7154 13.2256 15.0078C13.5184 15.3005 13.519 15.7754 13.2266 16.0684L11.5449 17.751C11.3574 17.9385 11.1031 18.0439 10.8379 18.0439H9.57324V19.3086C9.57323 19.5738 9.4678 19.8281 9.28027 20.0156L8.20508 21.0908C7.78326 21.5126 7.2109 21.7499 6.61426 21.75H3.25C2.69771 21.75 2.25 21.3023 2.25 20.75V17.3857C2.25016 16.7892 2.48736 16.2167 2.90918 15.7949L7.72949 10.9717C7.60799 10.4512 7.54395 9.90893 7.54395 9.35254C7.54419 5.42981 10.7249 2.25 14.6475 2.25Z" fill="currentColor"/>',
    })
    var ej = s("X1mr"),
      ek = s("CxEf"),
      eP = s("mp9y"),
      eM = s("ZL1D"),
      eI = s("fZLW")
    function eS(e) {
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
        v = (0, i.c)(45),
        {
          accountId: b,
          activeTrustedDeviceCount: w,
          pending: A,
          showLoading: k,
          onAction: P,
          onOpenAdvancedProtection: M,
        } = e,
        [I, S] = (0, l.useState)(null)
      v[0] !== b ? ((t = (0, es.dI)(b)), (v[0] = b), (v[1] = t)) : (t = v[1])
      let { data: G, isError: T, refetch: N } = (0, o.I)(t.mfa)
      v[2] !== b ? ((s = (0, es.dI)(b)), (v[2] = b), (v[3] = s)) : (s = v[3])
      let { data: E } = (0, o.I)(s.protection),
        D = E?.advanced_protection_mode_enabled === !0,
        R = null == E || D
      if (void 0 === G || T) {
        let e, t
        return void 0 === k || k || T
          ? (v[4] !== N ? ((e = () => void N()), (v[4] = N), (v[5] = e)) : (e = v[5]),
            v[6] !== T || v[7] !== e
              ? ((t = (0, n.jsx)(U.mK, { isError: T, onRetry: e })), (v[6] = T), (v[7] = e), (v[8] = t))
              : (t = v[8]),
            t)
          : null
      }
      let O = G.factors.sms[0]?.metadata?.phone_number,
        q = G.factors.totp.length > 0,
        H = G.factors.totp[0]?.id
      ;(v[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, n.jsx)(d.A, {
            id: "settings.chatGpt.security.authenticator",
            defaultMessage: "Authenticator app",
            description: "Label for authenticator-app multi-factor authentication in Security and login settings.",
          })),
          (r = (0, n.jsx)(d.A, {
            id: "settings.chatGpt.security.mfa.authenticatorDescription",
            defaultMessage: "Use one-time codes from an authenticator app",
            description: "Description of authenticator-app multi-factor authentication in Security and login settings.",
          })),
          (v[9] = a),
          (v[10] = r))
        : ((a = v[9]), (r = v[10])),
        v[11] !== q || v[12] !== H
          ? ((c = { factor: "totp", enabled: q, id: H, label: a, description: r }),
            (v[11] = q),
            (v[12] = H),
            (v[13] = c))
          : (c = v[13]),
        v[14] !== w || v[15] !== G.factors.push_auth || v[16] !== G.show_push_auth
          ? ((u = G.show_push_auth
              ? [
                  {
                    factor: "push_auth",
                    enabled: null != G.factors.push_auth,
                    id: G.factors.push_auth?.id,
                    label: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.mfa.push",
                      defaultMessage: "Push notifications",
                      description:
                        "Label for trusted-device push-notification multi-factor authentication in Security and login settings.",
                    }),
                    description: (0, n.jsxs)("span", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.mfa.pushDescription",
                          defaultMessage: "Approve log-ins with a push sent to your trusted device",
                          description: "Explanation of push-notification MFA in Security and login settings.",
                        }),
                        null != G.factors.push_auth && 0 === w
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                " ",
                                (0, n.jsxs)("span", {
                                  className: "inline-flex items-center gap-1.5 text-warning select-none",
                                  role: "status",
                                  children: [
                                    (0, n.jsx)(ee.I, { asset: ew.m }),
                                    (0, n.jsx)(d.A, {
                                      id: "settings.chatGpt.security.mfa.pushNoTrustedDevices",
                                      defaultMessage: "No active trusted devices — we’ll email you a code instead",
                                      description:
                                        "Warning beside enabled push MFA when the account has no active trusted devices. Explains that a login code will be emailed instead of sent as a push notification.",
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
            (v[14] = w),
            (v[15] = G.factors.push_auth),
            (v[16] = G.show_push_auth),
            (v[17] = u))
          : (u = v[17]),
        v[18] !== G.factors.sms[0]?.id ||
        v[19] !== G.factors.sms[0]?.metadata?.verified_channels?.[0] ||
        v[20] !== G.factors.sms.length ||
        v[21] !== G.show_sms ||
        v[22] !== O
          ? ((p = G.show_sms
              ? [
                  {
                    factor: "sms",
                    enabled: G.factors.sms.length > 0,
                    id: G.factors.sms[0]?.id,
                    label: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.mfa.sms",
                      defaultMessage: "Text message",
                      description:
                        "Label for SMS or WhatsApp multi-factor authentication in Security and login settings.",
                    }),
                    description:
                      G.factors.sms.length > 0
                        ? (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.mfa.smsEnabledDescription",
                                defaultMessage:
                                  "Get 6-digit verification codes by {channel, select, whatsapp {WhatsApp} other {text}}",
                                description:
                                  "Description of an enabled phone MFA method. The channel is WhatsApp or text (SMS), based on the account's verified delivery channel.",
                                values: { channel: G.factors.sms[0]?.metadata?.verified_channels?.[0] ?? "sms" },
                              }),
                              O
                                ? (0, n.jsx)("div", {
                                    className: "select-text",
                                    children: (0, n.jsx)("bdi", { dir: "ltr", children: O }),
                                  })
                                : null,
                            ],
                          })
                        : (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.mfa.smsDescription",
                            defaultMessage:
                              "Get 6-digit verification codes by SMS or WhatsApp based on your country code",
                            description:
                              "Description of text-message MFA setup explaining the delivery channel depends on the phone country code.",
                          }),
                  },
                ]
              : []),
            (v[18] = G.factors.sms[0]?.id),
            (v[19] = G.factors.sms[0]?.metadata?.verified_channels?.[0]),
            (v[20] = G.factors.sms.length),
            (v[21] = G.show_sms),
            (v[22] = O),
            (v[23] = p))
          : (p = v[23]),
        v[24] !== p || v[25] !== c || v[26] !== u
          ? ((h = [c, ...u, ...p]), (v[24] = p), (v[25] = c), (v[26] = u), (v[27] = h))
          : (h = v[27]))
      let F = h
      v[28] !== F ? ((g = F.filter(eG)), (v[28] = F), (v[29] = g)) : (g = v[29])
      let K = g.length + +(G.factors.passkeys.length > 0)
      return (
        v[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)(C.X.Header, {
              title: (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.mfa.title",
                defaultMessage: "Multi-factor authentication (MFA)",
                description: "Heading above authentication-method toggles in Security and login settings.",
              }),
            })),
            (v[30] = m))
          : (m = v[30]),
        v[31] !== R || v[32] !== K
          ? ((f =
              1 !== K || R
                ? null
                : (0, n.jsx)(j.t, {
                    children: (0, n.jsx)("div", {
                      className: "bg-primary-soft-alpha select-none",
                      children: (0, n.jsx)(_.ic, {
                        label: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.mfa.addAnother",
                          defaultMessage: "Add another method to prevent lockouts",
                          description:
                            "Tip shown in Security and login settings when the account has only one type of MFA method enabled.",
                        }),
                        control: (0, n.jsx)(ee.I, { asset: eA }),
                      }),
                    }),
                  })),
            (v[31] = R),
            (v[32] = K),
            (v[33] = f))
          : (f = v[33]),
        v[34] !== R || v[35] !== D || v[36] !== I || v[37] !== F || v[38] !== P || v[39] !== M || v[40] !== A
          ? ((y = (0, n.jsx)(j.t, {
              children: F.map((e) => {
                let { factor: t, enabled: s, id: i, label: a, description: o } = e
                return (0, n.jsx)(
                  _.ic,
                  {
                    label: a,
                    description: o,
                    control: (e) => {
                      let a = (0, n.jsx)(ea.l, {
                        ...e,
                        checked: s,
                        disabled: R || A,
                        focusableWhenDisabled: D,
                        onClick: D ? () => S(t) : void 0,
                        onChange: (e) => {
                          e
                            ? P({ action: "enable", factor: t })
                            : null != i && P({ action: "disable", factor: t, factorId: i })
                        },
                      })
                      return D
                        ? (0, n.jsx)(ek.m, {
                            cloneCustomTrigger: !0,
                            interactive: !0,
                            keyboardNavigation: !0,
                            open: I === t,
                            onOpenChange: (e) => {
                              S((s) => (e ? t : s === t ? null : s))
                            },
                            tooltipContent: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.mfa.disabledByAdvancedProtection",
                              defaultMessage:
                                "This setting is disabled because you have Advanced Account Security enabled. <manageLink>Manage Advanced Account Security</manageLink>",
                              description:
                                "Explanation for a disabled MFA switch when Advanced Account Security is enabled. The manageLink opens Advanced Account Security in the same settings panel.",
                              values: {
                                manageLink: (e) =>
                                  (0, n.jsx)(L.$, {
                                    className: "inline-flex max-w-full underline underline-offset-2",
                                    color: "ghostMuted",
                                    size: "inline",
                                    onClick: M,
                                    children: (0, n.jsx)("span", {
                                      className: "min-w-0 text-start break-words whitespace-normal",
                                      children: e,
                                    }),
                                  }),
                              },
                            }),
                            children: a,
                          })
                        : a
                    },
                  },
                  t,
                )
              }),
            })),
            (v[34] = R),
            (v[35] = D),
            (v[36] = I),
            (v[37] = F),
            (v[38] = P),
            (v[39] = M),
            (v[40] = A),
            (v[41] = y))
          : (y = v[41]),
        v[42] !== f || v[43] !== y
          ? ((x = (0, n.jsxs)(C.X, {
              children: [m, (0, n.jsxs)(C.X.Content, { className: "gap-4", children: [f, y] })],
            })),
            (v[42] = f),
            (v[43] = y),
            (v[44] = x))
          : (x = v[44]),
        x
      )
    }
    function eG(e) {
      let { enabled: t } = e
      return t
    }
    function eT(e) {
      let t,
        s,
        a = (0, i.c)(24),
        { accountId: r, action: c, onClose: l } = e,
        d = (0, h.As)()
      a[0] !== r ? ((t = (0, es.dI)(r)), (a[0] = r), (a[1] = t)) : (t = a[1])
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
            ;((e = eP.J),
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
                ? (0, n.jsx)(eN, { accountId: r, actionAttemptId: c.actionAttemptId })
                : (0, n.jsx)(
                    eP.M,
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
    function eN(e) {
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
              return es.IN.safePost("/accounts/mfa/user/request_mfa_token_in_house", {
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
              let e = new URL("/passkey-enroll", (0, ej.WF)().auth.loginWebUrl)
              ;(e.searchParams.set("origin_app_name", "ChatGPT"), e.searchParams.set("mfa_token", x))
              let t = (0, eI.Z)()
              ;("string" == typeof t && e.searchParams.set("redirect_path", `${t}?view=passkeys`),
                (0, eM.fY)(g, h, v),
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
          ? ((d = (0, n.jsx)(U.mK, { isError: f, onRetry: r })), (u[10] = f), (u[11] = r), (u[12] = d))
          : (d = u[12]),
        d
      )
    }
    function eE(e) {
      let t,
        s,
        a,
        o,
        l,
        u,
        p,
        h,
        g = (0, i.c)(25),
        { accountId: y } = e,
        x = (0, c.gh)(N.u),
        { data: v } = (0, f.oV)()
      g[0] !== y || g[1] !== v?.accounts
        ? ((t = v?.accounts?.find((e) => {
            let { id: t } = e
            return t === y
          })),
          (g[0] = y),
          (g[1] = v?.accounts),
          (g[2] = t))
        : (t = g[2])
      let b = t,
        { data: w } = (0, c.Ul)(m.s6),
        A = (0, k.Fj)("2562735250")
      g[3] !== A ? ((s = A.get("enabled", !1)), (g[3] = A), (g[4] = s)) : (s = g[4])
      let P = s
      g[5] !== y || g[6] !== x
        ? ((a = async (e, t) => {
            ;(await I.Request.safePatch("/settings/account_user_setting", {
              additionalHeaders: { "ChatGPT-Account-ID": y },
              parameters: { query: { feature: e, value: t } },
            }),
              await x.query.snapshot(m.s6).invalidate())
          }),
          (g[5] = y),
          (g[6] = x),
          (g[7] = a))
        : (a = g[7])
      let M = a
      g[8] !== M
        ? ((o = {
            mutationFn: (e) => {
              let { feature: t, value: s } = e
              return M(t, s)
            },
          }),
          (g[8] = M),
          (g[9] = o))
        : (o = g[9])
      let S = (0, r.n)(o)
      return (
        g[10] !== b || g[11] !== w || g[12] !== S || g[13] !== P
          ? ((l =
              P && null != b && !b.is_fedramp_compliant_workspace
                ? (0, n.jsxs)(C.X, {
                    children: [
                      (0, n.jsx)(C.X.Header, {
                        title: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.apps.title",
                          defaultMessage: "App security",
                          description:
                            "Section title for security controls for custom MCP apps in Security and login settings.",
                        }),
                      }),
                      (0, n.jsx)(C.X.Content, {
                        children: (0, n.jsx)(j.t, {
                          children: (0, n.jsx)(_.ic, {
                            id: "developer-mode",
                            label: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.apps.enforceCsp.title",
                              defaultMessage: "Enforce CSP for custom apps",
                              description:
                                "Label for Content Security Policy enforcement for custom MCP apps in Security and login settings. Keep CSP as the acronym.",
                            }),
                            description: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.apps.enforceCsp.description",
                              defaultMessage:
                                "When enabled, custom apps without a declared CSP get the same restricted default CSP they would in production instead of unrestricted network access. <link>Learn more</link>",
                              description:
                                "Description of custom app Content Security Policy enforcement, with a link to its official documentation.",
                              values: { link: eL },
                            }),
                            control: (e) =>
                              (0, n.jsx)(ea.l, {
                                ...e,
                                checked: w?.connectorEnforceCspInDevMode === !0,
                                disabled: null == w || S.isPending,
                                onChange: (e) => S.mutate({ feature: "connector_enforce_csp_in_dev_mode", value: e }),
                              }),
                          }),
                        }),
                      }),
                    ],
                  })
                : null),
            (g[10] = b),
            (g[11] = w),
            (g[12] = S),
            (g[13] = P),
            (g[14] = l))
          : (l = g[14]),
        g[15] !== b?.structure || g[16] !== w || g[17] !== S
          ? ((u =
              b?.structure === "personal"
                ? (0, n.jsx)(j.t, {
                    children: (0, n.jsx)(_.ic, {
                      label: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.deviceCode.codexAndOffice.label",
                        defaultMessage: "Enable device code sign-in for Codex, Excel, PowerPoint, and Word",
                        description:
                          "Personal-account toggle label in ChatGPT Security settings. Enables device-code sign-in for Codex and the ChatGPT add-ins for Excel, PowerPoint, and Word. Keep product names unchanged.",
                      }),
                      description: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.deviceCode.codexAndOffice.description",
                        defaultMessage:
                          "Use device codes to sign in to Codex in remote or headless environments, or to ChatGPT in Excel, PowerPoint, and Word through your browser. Exercise caution, as device codes can be phished. Never share a device code.",
                        description:
                          "Help text beneath the personal-account device-code sign-in toggle in ChatGPT Security settings. Explains the Codex and Office use cases and warns users that device codes can be phished and must not be shared.",
                      }),
                      control: (e) =>
                        (0, n.jsx)(ea.l, {
                          ...e,
                          checked: w?.enableDeviceCodeAuth === !0,
                          disabled: null == w || S.isPending,
                          onChange: (e) => S.mutate({ feature: "enable_device_code_auth", value: e }),
                        }),
                    }),
                  })
                : null),
            (g[15] = b?.structure),
            (g[16] = w),
            (g[17] = S),
            (g[18] = u))
          : (u = g[18]),
        g[19] !== S.isError
          ? ((p = S.isError
              ? (0, n.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.updateError",
                    defaultMessage: "Could not update security settings",
                    description: "Error shown when updating security settings fails. No successful change is claimed.",
                  }),
                })
              : null),
            (g[19] = S.isError),
            (g[20] = p))
          : (p = g[20]),
        g[21] !== l || g[22] !== u || g[23] !== p
          ? ((h = (0, n.jsxs)(n.Fragment, { children: [l, u, p] })), (g[21] = l), (g[22] = u), (g[23] = p), (g[24] = h))
          : (h = g[24]),
        h
      )
    }
    function eL(e) {
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
    var eD = s("tzt8"),
      eR = s("a7x6"),
      eO = s("AzPI"),
      eq = s("HDjn"),
      eU = s("cQed"),
      eH = s("uXP9"),
      eF = s("Wf1j"),
      eK = s("GK7D"),
      eB = s("okCa"),
      eV = s("PkPj"),
      eW = s("BrP7"),
      ez = s("WXto"),
      eZ = s("gPv1"),
      eY = s("yGJW")
    function e$(e) {
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
        b,
        C,
        w = (0, i.c)(67),
        {
          app: _,
          accountId: A,
          isIdentityOnly: j,
          resourceGrant: k,
          successFocusRef: P,
          workspaceName: M,
          isPersonalWorkspace: I,
          onDisconnected: S,
          onDisconnectingChange: G,
        } = e,
        T = (0, eF.A)(),
        N = (0, l.useRef)(null),
        D = (0, a.jE)(),
        R = k?.disconnect_target ?? _.disconnect_target,
        [O, q] = (0, l.useState)(null)
      ;(w[0] !== A ? ((t = (0, es.dI)(A)), (w[0] = A), (w[1] = t)) : (t = w[1]),
        w[2] !== t.linkedApps
          ? (({ staleTime: c, ...s } = t.linkedApps), (w[2] = t.linkedApps), (w[3] = s), (w[4] = c))
          : ((s = w[3]), (c = w[4])),
        w[5] !== j || w[6] !== s || w[7] !== c
          ? ((u = { ...s, staleTime: c, enabled: j, refetchOnMount: "always" }),
            (w[5] = j),
            (w[6] = s),
            (w[7] = c),
            (w[8] = u))
          : (u = w[8]),
        (0, o.I)(u),
        w[9] !== A || w[10] !== _
          ? ((p = (e) =>
              es.IN.safePost("/client_applications/{client_id}/permissions/revoke", {
                additionalHeaders: { "ChatGPT-Account-ID": A },
                expectedErrorStatuses: [404, 409],
                parameters: { path: { client_id: _.id } },
                requestBody: { target: e },
              })),
            (w[9] = A),
            (w[10] = _),
            (w[11] = p))
          : (p = w[11]),
        w[12] !== A || w[13] !== _ || w[14] !== S || w[15] !== G || w[16] !== s || w[17] !== D || w[18] !== k
          ? ((h = async () => {
              ;(await D.cancelQueries({ queryKey: s.queryKey }),
                D.removeQueries({ queryKey: ["chatgpt-security", A, "linked-app-permissions", _.id] }),
                q(null),
                null == k && S(),
                G(!1),
                D.invalidateQueries({ queryKey: s.queryKey }))
            }),
            (w[12] = A),
            (w[13] = _),
            (w[14] = S),
            (w[15] = G),
            (w[16] = s),
            (w[17] = D),
            (w[18] = k),
            (w[19] = h))
          : (h = w[19]),
        w[20] !== s || w[21] !== D
          ? ((g = async (e) => {
              e instanceof E.fk &&
                409 === e.status &&
                (await D.cancelQueries({ queryKey: s.queryKey }), await D.invalidateQueries({ queryKey: s.queryKey }))
            }),
            (w[20] = s),
            (w[21] = D),
            (w[22] = g))
          : (g = w[22]),
        w[23] !== p || w[24] !== h || w[25] !== g
          ? ((m = { mutationFn: p, retry: !1, onSuccess: h, onError: g }),
            (w[23] = p),
            (w[24] = h),
            (w[25] = g),
            (w[26] = m))
          : (m = w[26]))
      let H = (0, r.n)(m),
        F = H.error instanceof E.fk && 409 === H.error.status,
        K = R?.type === "user_grant" || R?.type === "workspace_grant"
      if ((!K || j) && !(null != O && (H.isPending || H.isError))) return (null != O && q(null), null)
      if (k?.resource === "chatgpt_plan" && I) {
        let e
        ;(w[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.plan.personalConfirmTitle",
              defaultMessage: "Remove ChatGPT plan access from your personal workspace?",
              description:
                "Confirmation title when removing a connected app's ChatGPT plan access for the user's personal workspace in Sign in with ChatGPT security settings. Other resource access remains connected.",
            })),
            (w[27] = e))
          : (e = w[27]),
          (f = e))
      } else if (k?.resource === "chatgpt_plan" && M) {
        let e
        ;(w[28] !== M
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.plan.workspaceConfirmTitle",
              defaultMessage: "Remove ChatGPT plan access from {workspaceName}?",
              description:
                "Confirmation title when removing a connected app's ChatGPT plan access for the selected workspace in Sign in with ChatGPT security settings. Other resource access remains connected. Placeholder {workspaceName} is the selected workspace's name.",
              values: { workspaceName: M },
            })),
            (w[28] = M),
            (w[29] = e))
          : (e = w[29]),
          (f = e))
      } else if (k?.resource === "chatgpt_plan") {
        let e
        ;(w[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.plan.confirmTitle",
              defaultMessage: "Remove ChatGPT plan access from this workspace?",
              description:
                "Confirmation title when removing a connected app's ChatGPT plan access in Sign in with ChatGPT security settings when the workspace name is unavailable. Other resource access remains connected.",
            })),
            (w[30] = e))
          : (e = w[30]),
          (f = e))
      } else if (k?.resource === "ads") {
        let e
        ;(w[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.ads.confirmTitle",
              defaultMessage: "Remove Ads Manager access?",
              description:
                "Confirmation title when removing a connected app's Ads Manager access in Sign in with ChatGPT security settings. ChatGPT plan access remains connected.",
            })),
            (w[31] = e))
          : (e = w[31]),
          (f = e))
      } else if (O?.type === "workspace_grant") {
        let e
        ;(w[32] !== _.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.workspaceConfirmTitle",
              defaultMessage: "Disconnect {name} from this workspace?",
              description:
                "Confirmation-dialog title shown after clicking Disconnect in an app or site’s Login connections details in ChatGPT Security settings for a workspace-scoped connection. Asks the signed-in user to confirm removing access to the selected workspace. Placeholder {name} is the app or site’s display name and may be long.",
              values: { name: _.name },
            })),
            (w[32] = _.name),
            (w[33] = e))
          : (e = w[33]),
          (f = e))
      } else {
        let e
        ;(w[34] !== _.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.confirmTitle",
              defaultMessage: "Disconnect {name}?",
              description:
                "Confirmation title before revoking a third-party login connection and its tokens. Name is the app or site's display name.",
              values: { name: _.name },
            })),
            (w[34] = _.name),
            (w[35] = e))
          : (e = w[35]),
          (f = e))
      }
      if (F) {
        let e
        ;(w[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.reviewConnection",
              defaultMessage: "Review connection",
              description:
                "Button in a stale Disconnect confirmation in ChatGPT Security settings. Closes the dialog so the signed-in user can review the refreshed app or site before choosing to disconnect again; it does not revoke access.",
            })),
            (w[36] = e))
          : (e = w[36]),
          (y = e))
      } else if (null != k) {
        let e
        ;(w[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.removeAccess",
              defaultMessage: "Remove access",
              description:
                "Short destructive-action button for one resource in an app's Sign in with ChatGPT security settings. Opens confirmation to remove Ads Manager or ChatGPT plan access while preserving other resources.",
            })),
            (w[37] = e))
          : (e = w[37]),
          (y = e))
      } else {
        let e
        ;(w[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.confirm",
              defaultMessage: "Disconnect",
              description: "Destructive confirmation button that revokes a third-party login connection.",
            })),
            (w[38] = e))
          : (e = w[38]),
          (y = e))
      }
      if (k?.resource === "chatgpt_plan") {
        let e
        ;(w[39] !== _.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.plan.confirmDescription",
              defaultMessage:
                "{name} will no longer be able to use your ChatGPT plan in this workspace. Its other access will stay connected.",
              description:
                "Confirmation body for removing ChatGPT plan access in Sign in with ChatGPT security settings. Only the selected workspace's plan access is removed. Placeholder {name} is the connected app's display name.",
              values: { name: _.name },
            })),
            (w[39] = _.name),
            (w[40] = e))
          : (e = w[40]),
          (x = e))
      } else if (k?.resource === "ads") {
        let e
        ;(w[41] !== _.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.ads.confirmDescription",
              defaultMessage:
                "{name} will no longer be able to view or manage your Ads Manager data. Its other access will stay connected.",
              description:
                "Confirmation body for removing all granted Ads Manager permissions in Sign in with ChatGPT security settings. Other resources remain connected. Placeholder {name} is the connected app's display name.",
              values: { name: _.name },
            })),
            (w[41] = _.name),
            (w[42] = e))
          : (e = w[42]),
          (x = e))
      } else if (O?.type === "workspace_grant") {
        let e
        ;(w[43] !== _.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.workspaceConfirmDescription.v2",
              defaultMessage:
                "{name} will lose access to this workspace. Connections in your other workspaces will stay active. {name} may retain information you’ve already shared.",
              description:
                "Confirmation body shown after clicking Disconnect in an app or site’s Login connections details in ChatGPT Security settings for a workspace-scoped connection. Explains removal of access to the selected workspace, confirms that connections in the signed-in user’s other workspaces stay active, and warns that the app may retain previously shared information. Placeholder {name} is the app or site’s display name, appears twice, and may be long.",
              values: { name: _.name },
            })),
            (w[43] = _.name),
            (w[44] = e))
          : (e = w[44]),
          (x = e))
      } else {
        let e
        ;(w[45] !== _.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.disconnectConfirmDescription",
              defaultMessage:
                "This removes your login connection to {name}. It may still keep information you’ve already shared.",
              description:
                "Confirmation body shown after clicking Disconnect in an app or site's Login connections details in ChatGPT Security settings. Explains removal of the selected login connection and warns that the app may retain previously shared information. Placeholder {name} is the app or site's display name and may be long.",
              values: { name: _.name },
            })),
            (w[45] = _.name),
            (w[46] = e))
          : (e = w[46]),
          (x = e))
      }
      return (
        w[47] !== _ || w[48] !== H || w[49] !== K || w[50] !== T || w[51] !== k || w[52] !== R
          ? ((v =
              null != k
                ? (0, n.jsx)(L.$, {
                    ref: N,
                    type: "button",
                    color: "dangerOutline",
                    size: "toolbar",
                    disabled: H.isSuccess,
                    "aria-label":
                      "chatgpt_plan" === k.resource
                        ? T.formatMessage({
                            id: "settings.chatGpt.security.linkedApps.resource.plan.removeAccess",
                            defaultMessage: "Remove ChatGPT plan access",
                            description:
                              "Accessible name of the Remove access button beside ChatGPT plan access in Sign in with ChatGPT security settings. Distinguishes it from the Ads Manager removal button.",
                          })
                        : T.formatMessage({
                            id: "settings.chatGpt.security.linkedApps.resource.ads.removeAccess",
                            defaultMessage: "Remove Ads Manager access",
                            description:
                              "Accessible name of the Remove access button beside Ads Manager access in Sign in with ChatGPT security settings. Distinguishes it from the ChatGPT plan removal button.",
                          }),
                    onClick: () => {
                      ;(H.reset(), K && q({ ...R }))
                    },
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.resource.removeAccess",
                      defaultMessage: "Remove access",
                      description:
                        "Short destructive-action button for one resource in an app's Sign in with ChatGPT security settings. Opens confirmation to remove Ads Manager or ChatGPT plan access while preserving other resources.",
                    }),
                  })
                : (0, n.jsx)(eQ, {
                    app: _,
                    onDisconnect: () => {
                      K && null != R && (H.reset(), q({ ...R }))
                    },
                  })),
            (w[47] = _),
            (w[48] = H),
            (w[49] = K),
            (w[50] = T),
            (w[51] = k),
            (w[52] = R),
            (w[53] = v))
          : (v = w[53]),
        w[54] !== x ||
        w[55] !== y ||
        w[56] !== O ||
        w[57] !== f ||
        w[58] !== H ||
        w[59] !== F ||
        w[60] !== G ||
        w[61] !== k ||
        w[62] !== P
          ? ((b =
              null != O
                ? (0, n.jsx)(U.i$, {
                    title: null != k ? (0, n.jsx)("span", { className: "block pe-8", children: f }) : f,
                    confirmLabel: y,
                    onConfirm: () => {
                      if (F) {
                        ;(q(null), G(!1))
                        return
                      }
                      ;(G(!0, null != k), H.mutate(O))
                    },
                    onClose: () => {
                      ;(q(null), G(!1))
                    },
                    onCloseAutoFocus:
                      null != k
                        ? (e) => {
                            e.preventDefault()
                            let t = N.current
                            t?.isConnected && !t.disabled ? t.focus() : P?.current?.focus()
                          }
                        : void 0,
                    isPending: H.isPending,
                    isError: H.isError,
                    informational: F,
                    errorMessage: F
                      ? (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.linkedApps.connection.changed",
                          defaultMessage:
                            "This connection changed. Review its current access before disconnecting again",
                          description:
                            "Inline error in an app or site's Disconnect confirmation in ChatGPT Security settings after the selected connection changed. The signed-in user must review the refreshed connection and make a new removal choice; this action has not removed the newer connection.",
                        })
                      : void 0,
                    children: x,
                  })
                : null),
            (w[54] = x),
            (w[55] = y),
            (w[56] = O),
            (w[57] = f),
            (w[58] = H),
            (w[59] = F),
            (w[60] = G),
            (w[61] = k),
            (w[62] = P),
            (w[63] = b))
          : (b = w[63]),
        w[64] !== v || w[65] !== b
          ? ((C = (0, n.jsxs)(n.Fragment, { children: [v, b] })), (w[64] = v), (w[65] = b), (w[66] = C))
          : (C = w[66]),
        C
      )
    }
    function eQ(e) {
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
          ? ((t = (0, n.jsx)(C.X.Header, {
              title: (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.linkedApps.connection.title",
                defaultMessage: "Manage login connection",
                description:
                  "Heading above the action to disconnect a third-party app or site from the user's ChatGPT account. This does not manage plugin installation or provider connections.",
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
                    description:
                      "Label beside Disconnect for an app or site in ChatGPT Security settings when removing only its selected-workspace connection. Placeholder {name} is the app or site's display name and may be long.",
                    values: { name: u.name },
                  })
                : (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.connection.disconnectLabel",
                    defaultMessage: "Disconnect {name}",
                    description:
                      "Short informational label beside the Disconnect button in an app or site's details under Login connections in the ChatGPT Security settings modal. Identifies the login connection the signed-in user can remove. Placeholder {name} is the connected app or site's developer-provided display-name string, which may be long; it is not the user's name.",
                    values: { name: u.name },
                  })),
            (a =
              u.disconnect_target?.type === "workspace_grant"
                ? (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.connection.workspaceDescription.v2",
                    defaultMessage:
                      "{name} will lose access to this workspace. Connections in your other workspaces will stay active.",
                    description:
                      "Body beside Disconnect in an app or site’s Login connections details in ChatGPT Security settings for a workspace-scoped connection. Explains that access to this workspace is removed while the signed-in user’s connections in other workspaces remain active. Placeholder {name} is the app or site’s display name and may be long.",
                    values: { name: u.name },
                  })
                : (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.connection.disconnectDescription",
                    defaultMessage: "This removes your login connection to {name}",
                    description:
                      "Body beside Disconnect in an app or site's Login connections details in ChatGPT Security settings. Explains that the signed-in user removes the selected login connection, without implying that every connection to the app is removed. Placeholder {name} is the app or site's display name and may be long.",
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
              description:
                "Button to disconnect a third-party app or site from the user's ChatGPT account. Opens a confirmation dialog before revoking access.",
            })),
            (l[5] = o))
          : (o = l[5]),
        l[6] !== p
          ? ((r = (0, n.jsx)(L.$, { color: "danger", size: "toolbar", onClick: p, children: o })),
            (l[6] = p),
            (l[7] = r))
          : (r = l[7]),
        l[8] !== s || l[9] !== a || l[10] !== r
          ? ((c = (0, n.jsxs)(C.X, {
              children: [
                t,
                (0, n.jsx)(C.X.Content, {
                  children: (0, n.jsx)(j.t, {
                    children: (0, n.jsx)(_.ic, {
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
    var eX = s("SJoA"),
      eJ = s("S2r0"),
      e1 = s("fxCc"),
      e0 = s("on57"),
      e2 = s("r2OT"),
      e3 = s("hOO0"),
      e4 = s("u2dk"),
      e5 = s("HUHI"),
      e6 = s("FpcZ"),
      e9 = s("FvYa"),
      e7 = s("JNtf"),
      e8 = s("mUDD"),
      te = s("WzdM"),
      tt = s("HFSu"),
      ts = s("a6Zv")
    function tn(e) {
      let t,
        s,
        c,
        u,
        p,
        h,
        g,
        m,
        x,
        b,
        w,
        A,
        k,
        M,
        I,
        S,
        G,
        T,
        N,
        D,
        R,
        O,
        q,
        U,
        H,
        F,
        K,
        B = (0, i.c)(78),
        { app: V, accountId: W, groupTitle: z } = e,
        Z = (0, eF.A)(),
        Y = (0, a.jE)(),
        { data: $, isLoading: Q } = (0, f.YL)(),
        [X, J] = (0, l.useState)(!1)
      B[0] !== W || B[1] !== V.id
        ? ((t = (0, eJ.j)({
            queryKey: ["chatgpt-security", W, "linked-app-permissions", V.id],
            queryFn: (e) => {
              let { signal: t } = e
              return es.IN.safeGet("/client_applications/{client_id}/permissions", {
                additionalHeaders: { "ChatGPT-Account-ID": W },
                expectedErrorStatuses: [404, 409],
                parameters: { path: { client_id: V.id } },
                signal: t,
              })
            },
            staleTime: P.D.ONE_MINUTE,
            retry: !1,
          })),
          (B[0] = W),
          (B[1] = V.id),
          (B[2] = t))
        : (t = B[2])
      let ee = t
      ;(B[3] !== W || B[4] !== V.id
        ? ((s = (e) =>
            es.IN.safePost("/client_applications/{client_id}/permissions/revoke", {
              additionalHeaders: { "ChatGPT-Account-ID": W },
              expectedErrorStatuses: [404, 409],
              parameters: { path: { client_id: V.id } },
              requestBody: { target: e },
            })),
          (B[3] = W),
          (B[4] = V.id),
          (B[5] = s))
        : (s = B[5]),
        B[6] !== ee || B[7] !== Y
          ? ((c = () => Y.cancelQueries({ queryKey: ee.queryKey, exact: !0 })),
            (u = async (e, t) => {
              ;(await Y.cancelQueries({ queryKey: ee.queryKey, exact: !0 }),
                Y.setQueryData(ee.queryKey, e),
                ("plugins" === t.type || 0 === e.connector_ids.length) && J(!1))
            }),
            (p = async (e) => {
              e instanceof E.fk &&
                409 === e.status &&
                (await Y.cancelQueries({ queryKey: ee.queryKey, exact: !0 }),
                await Y.fetchQuery({ ...ee, staleTime: 0 }).catch(ta))
            }),
            (B[6] = ee),
            (B[7] = Y),
            (B[8] = c),
            (B[9] = u),
            (B[10] = p))
          : ((c = B[8]), (u = B[9]), (p = B[10])),
        B[11] !== s || B[12] !== c || B[13] !== u || B[14] !== p
          ? ((h = { mutationFn: s, retry: !1, onMutate: c, onSuccess: u, onError: p }),
            (B[11] = s),
            (B[12] = c),
            (B[13] = u),
            (B[14] = p),
            (B[15] = h))
          : (h = B[15]))
      let { mutate: et, isPending: en, error: ei, variables: ea, reset: eo } = (0, r.n)(h),
        er = !en
      B[16] !== ee || B[17] !== er
        ? ((g = { ...ee, staleTime: P.D.ONE_MINUTE, enabled: er, refetchOnMount: "always" }),
          (B[16] = ee),
          (B[17] = er),
          (B[18] = g))
        : (g = B[18])
      let { data: ec, error: el, isFetching: ed, refetch: eu } = (0, o.I)(g)
      B[19] !== ec?.connector_ids
        ? ((m = ec?.connector_ids ?? []), (B[19] = ec?.connector_ids), (B[20] = m))
        : (m = B[20])
      let ep = $?.id === W
      B[21] !== W || B[22] !== ep || B[23] !== m
        ? ((x = (0, e6.getHostedAppsContentQueriesOptions)({
            accountId: W,
            appIds: m,
            enabled: ep,
            productContext: "chatgpt",
          })),
          (B[21] = W),
          (B[22] = ep),
          (B[23] = m),
          (B[24] = x))
        : (x = B[24])
      let { data: eh, isPending: eg, isFetching: em } = (0, e1.E)(x),
        ef = ec?.connector_ids.map((e) =>
          eh?.find((t) => {
            let { id: s } = t
            return (0, e3.$)(s) === (0, e3.$)(e)
          }),
        ),
        ey =
          ec?.connector_ids.map((e, t) => ({
            queryKey: ["chatgpt-security", W, "connector-metadata", e],
            queryFn: (t) => {
              let { signal: s } = t
              return tt.CodexRequest.safeGet("/aip/connectors/{connector_id}", {
                surface: "settings",
                additionalHeaders: { ...(0, te.A)("chatgpt"), "ChatGPT-Account-ID": W },
                expectedErrorStatuses: [404],
                parameters: { path: { connector_id: e }, query: { include_actions: !1 } },
                signal: s,
              })
            },
            enabled: $?.id === W && !eg && ef?.[t] == null,
            staleTime: P.D.FIVE_MINUTES,
            retry: !1,
          })) ?? []
      B[25] !== ey ? ((b = { queries: ey }), (B[25] = ey), (B[26] = b)) : (b = B[26])
      let ex = (0, e1.E)(b),
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
            isNameLoading: s?.name == null && (Q || em || ex[t]?.isFetching === !0),
            isLogoMetadataLoading: !a?.trim() && !o?.trim() && (Q || em || ex[t]?.isFetching === !0),
            icon: (0, n.jsx)("span", {
              className:
                "flex size-8 shrink-0 items-center justify-center rounded-lg border border-default select-none",
              "aria-hidden": !0,
              children: (0, n.jsx)(e9.R, {
                alt: "",
                knownAppId: e,
                logoUrl: tu(a),
                logoDarkUrl: tu(o),
                size: 20,
                fallback: (0, n.jsx)(y.HUG, {}),
              }),
            }),
          }
        }),
        eb = ev?.slice(0, 3) ?? [],
        eC = en || ed || null != el
      B[27] !== ed || B[28] !== en || B[29] !== el || B[30] !== eu
        ? ((w =
            null == el
              ? null
              : (0, n.jsxs)("div", {
                  role: "alert",
                  className: "flex flex-col items-start gap-3 text-sm text-secondary",
                  children: [
                    el instanceof E.fk && 404 === el.status
                      ? (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.linkedApps.connectedApps.unavailable",
                          defaultMessage: "Connected app access is unavailable",
                          description:
                            "Error in a connected site's app permissions settings when the server cannot provide manageable permissions. This does not mean that no permissions are granted.",
                        })
                      : (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.linkedApps.connectedApps.loadError",
                          defaultMessage: "Couldn’t load connected app access. Please try again",
                          description:
                            "Error in a connected site's app permissions settings when loading its current permissions fails. The retry button reloads the permissions without changing them.",
                        }),
                    (0, n.jsx)(L.$, {
                      color: "secondary",
                      size: "toolbar",
                      disabled: en || ed,
                      loading: ed,
                      onClick: () => void eu(),
                      children: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.linkedApps.connectedApps.retry",
                        defaultMessage: "Retry",
                        description:
                          "Button in a connected site's app permissions settings that retries loading its permissions without changing access.",
                      }),
                    }),
                  ],
                })),
          (B[27] = ed),
          (B[28] = en),
          (B[29] = el),
          (B[30] = eu),
          (B[31] = w))
        : (w = B[31])
      let ew = w
      if (ec?.connector_ids.length === 0 && null == el) return null
      B[32] !== ew || B[33] !== ec
        ? ((A =
            ew ??
            (null == ec
              ? (0, n.jsxs)("span", {
                  role: "status",
                  className: "flex items-center gap-2",
                  children: [
                    (0, n.jsx)(v.y, {}),
                    (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.connectedApps.loading",
                      defaultMessage: "Loading connected app access…",
                      description:
                        "Loading status while fetching the connected apps a site may use in Sign in with ChatGPT settings.",
                    }),
                  ],
                })
              : null)),
          (B[32] = ew),
          (B[33] = ec),
          (B[34] = A))
        : (A = B[34])
      let e_ = eC || null == ec
      ;(B[35] !== eo
        ? ((k = () => {
            ;(eo(), J(!0))
          }),
          (B[35] = eo),
          (B[36] = k))
        : (k = B[36]),
        B[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connectedApps.manage",
              defaultMessage: "Manage",
              description:
                "Button opening the dialog for removing a connected site's access to individual connected apps.",
            })),
            (B[37] = M))
          : (M = B[37]),
        B[38] !== e_ || B[39] !== k
          ? ((I = (0, n.jsx)(L.$, { color: "secondary", size: "toolbar", disabled: e_, onClick: k, children: M })),
            (B[38] = e_),
            (B[39] = k),
            (B[40] = I))
          : (I = B[40]))
      let eA = (0, n.jsx)(tp, {
          app: V,
          description: A,
          control: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(to, { previewConnectors: eb }, JSON.stringify([W, ...eb.map(ti)])), I],
          }),
        }),
        ej =
          null == z
            ? eA
            : (0, n.jsxs)(C.X, {
                children: [
                  (0, n.jsx)(C.X.Header, { title: z }),
                  (0, n.jsx)(C.X.Content, { children: (0, n.jsx)(j.t, { children: eA }) }),
                ],
              }),
        ek = e7.lG
      ;(B[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { "aria-describedby": void 0 }), (B[41] = S))
        : (S = B[41]),
        B[42] !== en
          ? ((G = (e) => {
              en || J(e)
            }),
            (B[42] = en),
            (B[43] = G))
          : (G = B[43]))
      let eP = e8.R4
      ;(B[44] !== eC || B[45] !== et || B[46] !== ec
        ? ((T = (e) => {
            ;(e.preventDefault(), eC || null == ec || et({ type: "plugins" }))
          }),
          (B[44] = eC),
          (B[45] = et),
          (B[46] = ec),
          (B[47] = T))
        : (T = B[47]),
        B[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, n.jsx)(e8.OO, {
              children: (0, n.jsx)(e8.c7, {
                title: (0, n.jsx)(e7.L3, {
                  className: "select-none",
                  children: (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.connectedApps.manageTitle",
                    defaultMessage: "Connected Apps",
                    description: "Title of the dialog for reviewing and removing a site's access to connected apps.",
                  }),
                }),
              }),
            })),
            (B[48] = N))
          : (N = B[48]))
      let eM = e8.OO
      B[49] !== ei
        ? ((D =
            null != ei
              ? (0, n.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children:
                    ei instanceof E.fk && 409 === ei.status
                      ? (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.linkedApps.connectedApps.conflict",
                          defaultMessage: "Connected app access changed. Review the current access and try again",
                          description:
                            "Error in the connected-app permissions dialog after a concurrent change prevents removal. Permissions are reloaded, but the removal is not automatically retried.",
                        })
                      : (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.linkedApps.connectedApps.removeError",
                          defaultMessage: "Couldn’t remove access. Please try again",
                          description:
                            "Error in the connected-app permissions dialog when removing one or all app permissions fails. Existing permission rows remain visible.",
                        }),
                })
              : null),
          (B[49] = ei),
          (B[50] = D))
        : (D = B[50])
      let eI = j.t,
        eS = ev?.map((e) => {
          let { id: t, name: s, isNameLoading: i, icon: a } = e
          return (0, n.jsx)(
            _.ic,
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
                          defaultMessage: "Loading app…",
                          description:
                            "Loading status for a shared connected app's display name in Sign in with ChatGPT settings. Removing access to this app is temporarily disabled until its metadata lookup finishes.",
                        }),
                      ],
                    })
                  : (s ??
                    (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.connectedApps.nameUnavailable",
                      defaultMessage: "App name unavailable",
                      description:
                        "Label for a shared connected app whose display name cannot be retrieved in Sign in with ChatGPT settings. Its access is still granted and can be removed.",
                    })),
              }),
              control: (0, n.jsx)(L.$, {
                type: "button",
                color: "ghost",
                size: "icon",
                disabled: eC || i,
                loading: en && ea?.type === "connector" && ea.connector_id === t,
                "aria-label":
                  null == s
                    ? Z.formatMessage({
                        id: "settings.chatGpt.security.linkedApps.connectedApps.removeUnavailableLabel",
                        defaultMessage: "Remove access to this app",
                        description:
                          "Accessible label for a button revoking a site's permission to use the connected app in this row when the app's name cannot be retrieved in Sign in with ChatGPT settings.",
                      })
                    : Z.formatMessage(
                        {
                          id: "settings.chatGpt.security.linkedApps.connectedApps.removeLabel",
                          defaultMessage: "Remove access to {name}",
                          description:
                            "Accessible label for a button revoking a site's permission to use a connected app. Name is the connected app's display name.",
                        },
                        { name: s },
                      ),
                onClick: () => {
                  eC || i || et({ type: "connector", connector_id: t })
                },
                children: en && ea?.type === "connector" && ea.connector_id === t ? null : (0, n.jsx)(y.cSG, {}),
              }),
            },
            t,
          )
        })
      ;(B[51] !== eI || B[52] !== eS
        ? ((R = (0, n.jsx)(eI, { children: eS })), (B[51] = eI), (B[52] = eS), (B[53] = R))
        : (R = B[53]),
        B[54] !== eM || B[55] !== ew || B[56] !== D || B[57] !== R
          ? ((O = (0, n.jsxs)(eM, { children: [ew, D, R] })),
            (B[54] = eM),
            (B[55] = ew),
            (B[56] = D),
            (B[57] = R),
            (B[58] = O))
          : (O = B[58]))
      let eG = eC || null == ec,
        eT = en && ea?.type === "plugins"
      return (
        B[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connectedApps.removeAll",
              defaultMessage: "Remove all access",
              description:
                "Button in a site's connected-app permissions dialog that revokes all connected-app authority from the site, without disconnecting the apps from ChatGPT.",
            })),
            (B[59] = q))
          : (q = B[59]),
        B[60] !== eG || B[61] !== eT
          ? ((U = (0, n.jsx)(e8.OO, {
              children: (0, n.jsx)(e8.Es, {
                expandSingleButton: !1,
                children: (0, n.jsx)(L.$, { type: "submit", color: "danger", disabled: eG, loading: eT, children: q }),
              }),
            })),
            (B[60] = eG),
            (B[61] = eT),
            (B[62] = U))
          : (U = B[62]),
        B[63] !== eP || B[64] !== T || B[65] !== N || B[66] !== O || B[67] !== U
          ? ((H = (0, n.jsxs)(eP, { as: "form", size: "viewport", onSubmit: T, children: [N, O, U] })),
            (B[63] = eP),
            (B[64] = T),
            (B[65] = N),
            (B[66] = O),
            (B[67] = U),
            (B[68] = H))
          : (H = B[68]),
        B[69] !== ek || B[70] !== X || B[71] !== S || B[72] !== G || B[73] !== H
          ? ((F = (0, n.jsx)(ek, { open: X, contentProps: S, onOpenChange: G, children: H })),
            (B[69] = ek),
            (B[70] = X),
            (B[71] = S),
            (B[72] = G),
            (B[73] = H),
            (B[74] = F))
          : (F = B[74]),
        B[75] !== ej || B[76] !== F
          ? ((K = (0, n.jsxs)(n.Fragment, { children: [ej, F] })), (B[75] = ej), (B[76] = F), (B[77] = K))
          : (K = B[77]),
        K
      )
    }
    function ti(e) {
      let { id: t, logoUrl: s, logoDarkUrl: n } = e
      return [t, s, n]
    }
    function ta() {}
    function to(e) {
      let t,
        s = (0, i.c)(4),
        { previewConnectors: a } = e,
        o = !0 === (0, ts.Y)(),
        r = o ? "dark" : "light"
      return (
        s[0] !== o || s[1] !== a || s[2] !== r
          ? ((t = (0, n.jsx)(tr, { previewConnectors: a, isDarkTheme: o }, r)),
            (s[0] = o),
            (s[1] = a),
            (s[2] = r),
            (s[3] = t))
          : (t = s[3]),
        t
      )
    }
    function tr(e) {
      let t,
        s,
        a,
        o,
        r,
        c = (0, i.c)(10),
        { previewConnectors: d, isDarkTheme: u } = e,
        p = (0, eF.A)()
      c[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (c[0] = t)) : (t = c[0])
      let [h, g] = (0, l.useState)(t)
      c[1] !== u
        ? ((s = (e) => {
            let { id: t, icon: s, isLogoMetadataLoading: n, logoUrl: i, logoDarkUrl: a } = e,
              o = null != (0, e2.N6)(t, 20),
              r = u ? a?.trim() || i?.trim() : i?.trim() || a?.trim(),
              c = o ? null : (0, e4.kk)(r)
            return {
              id: t,
              icon: s,
              isLogoMetadataLoading: n && !o,
              logoRequest: c,
              directLogoUrl: o || null == r || null != c ? null : tu(r),
            }
          }),
          (c[1] = u),
          (c[2] = s))
        : (s = c[2])
      let m = d.map(s),
        f = (0, e1.E)({ queries: m.flatMap(td) }),
        y = m.map((e, t) => ({
          ...e,
          imageUrl: null == e.logoRequest ? e.directLogoUrl : f[m.slice(0, t).filter(tl).length]?.data,
        })),
        x =
          y.some((e) => {
            let { id: t, isLogoMetadataLoading: s, imageUrl: n } = e
            return s || (null != n && h[t] !== n)
          }) || f.some(tc),
        b = x
          ? (0, n.jsx)("span", {
              role: "status",
              "aria-label": p.formatMessage({
                id: "settings.chatGpt.security.linkedApps.connectedApps.loadingLogos",
                defaultMessage: "Loading connected app logos",
                description:
                  "Accessible loading status in a connected site's app permissions row while its app logos are being resolved.",
              }),
              children: (0, n.jsx)(v.y, {}),
            })
          : null,
        C = (0, e0.A)("flex items-center gap-2", x && "pointer-events-none absolute inset-0 opacity-0")
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
      let w = y.map(a)
      return (
        c[4] !== C || c[5] !== w
          ? ((o = (0, n.jsx)("div", { className: C, "aria-hidden": !0, children: w })),
            (c[4] = C),
            (c[5] = w),
            (c[6] = o))
          : (o = c[6]),
        c[7] !== o || c[8] !== b
          ? ((r = (0, n.jsxs)("div", { className: "relative max-sm:hidden", children: [b, o] })),
            (c[7] = o),
            (c[8] = b),
            (c[9] = r))
          : (r = c[9]),
        r
      )
    }
    function tc(e) {
      let { isPending: t } = e
      return t
    }
    function tl(e) {
      let { logoRequest: t } = e
      return null != t
    }
    function td(e) {
      let { logoRequest: t } = e
      return null == t ? [] : [(0, e5.xd)(t)]
    }
    function tu(e) {
      let t = e?.trim()
      return t?.startsWith("/") ? new URL(t, "https://chatgpt.com").href : t
    }
    function tp(e) {
      let t,
        s,
        a,
        o = (0, i.c)(7),
        { app: r, description: c, control: l } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(d.A, { ...(0, eU.sl)("chatgpt.plugins.invoke") })), (o[0] = t))
          : (t = o[0]),
        o[1] !== r || o[2] !== c
          ? ((s = c ?? (0, n.jsx)(d.A, { ...(0, eU.$Z)("chatgpt.plugins.invoke"), values: { appName: r.name } })),
            (o[1] = r),
            (o[2] = c),
            (o[3] = s))
          : (s = o[3]),
        o[4] !== l || o[5] !== s
          ? ((a = (0, n.jsx)(_.ic, {
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
    let th = new Map(Object.entries(eU.hX)),
      tg = new Map(Object.entries(eU.N5)),
      tm = new Set(["openid", "profile", "email"]),
      tf = new Set([
        "chatgpt.tokens.use.obo",
        "chatgpt.tokens.use.direct",
        "chatpass.enable.request",
        "chatpass.enable.request.direct",
      ])
    function ty(e) {
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
        b,
        C,
        w,
        A,
        k,
        P,
        M,
        I,
        S,
        G,
        T,
        N = (0, i.c)(107),
        { accountId: E, onBack: D } = e,
        R = (0, eF.A)(),
        O = (0, u.zy)(),
        q = (0, u.Zp)(),
        [H] = (0, u.ok)(),
        F = (0, a.jE)(),
        K = (0, c.Ul)(eY.YV)
      ;(N[0] !== E ? ((t = (0, es.dI)(E)), (N[0] = E), (N[1] = t)) : (t = N[1]),
        N[2] !== t.linkedApps
          ? (({ staleTime: p, ...s } = t.linkedApps), (N[2] = t.linkedApps), (N[3] = s), (N[4] = p))
          : ((s = N[3]), (p = N[4])),
        N[5] !== s || N[6] !== p
          ? ((h = { ...s, staleTime: p, refetchOnWindowFocus: "always" }), (N[5] = s), (N[6] = p), (N[7] = h))
          : (h = N[7]))
      let { data: B, isError: V, isFetching: W, refetch: z } = (0, o.I)(h)
      N[8] !== H ? ((g = H.get("client_id")), (N[8] = H), (N[9] = g)) : (g = N[9])
      let Z = g
      N[10] !== O.hash || N[11] !== O.pathname || N[12] !== O.state || N[13] !== q || N[14] !== H
        ? ((m = (e) => {
            let t = new URLSearchParams(H)
            ;(null == e ? t.delete("client_id") : t.set("client_id", e),
              q(
                { pathname: O.pathname, search: 0 === t.size ? "" : `?${t.toString()}`, hash: O.hash },
                { replace: !0, state: O.state },
              ))
          }),
          (N[10] = O.hash),
          (N[11] = O.pathname),
          (N[12] = O.state),
          (N[13] = q),
          (N[14] = H),
          (N[15] = m))
        : (m = N[15])
      let Y = m,
        [$, Q] = (0, l.useState)(null),
        [X, J] = (0, l.useState)(!1),
        et = (0, l.useRef)(null),
        en = (0, l.useRef)(null),
        [ei, ea] = (0, l.useState)(""),
        [eo, er] = (0, l.useState)(null)
      N[16] !== B?.third_party_items || N[17] !== X || N[18] !== Z || N[19] !== $
        ? ((f =
            (X ? $ : null) ??
            B?.third_party_items?.find((e) => {
              let { id: t } = e
              return t === Z
            }) ??
            $),
          (N[16] = B?.third_party_items),
          (N[17] = X),
          (N[18] = Z),
          (N[19] = $),
          (N[20] = f))
        : (f = N[20])
      let ec = f
      N[21] !== ec?.scopes ? ((y = ec?.scopes?.some(t_) ?? !1), (N[21] = ec?.scopes), (N[22] = y)) : (y = N[22])
      let el = y
      ;(N[23] !== E
        ? ((x = (e) =>
            es.IN.safeDelete("/client_applications/{client_id}", {
              additionalHeaders: { "ChatGPT-Account-ID": E },
              parameters: { path: { client_id: e } },
            })),
          (N[23] = E),
          (N[24] = x))
        : (x = N[24]),
        N[25] !== s || N[26] !== F
          ? ((v = async (e, t) => {
              ;(await F.cancelQueries({ queryKey: s.queryKey }),
                F.setQueryData(s.queryKey, (e) => (null == e ? e : { ...e, items: e.items.filter((e) => e.id !== t) })),
                er(null),
                await F.invalidateQueries({ queryKey: s.queryKey }))
            }),
            (N[25] = s),
            (N[26] = F),
            (N[27] = v))
          : (v = N[27]),
        N[28] !== x || N[29] !== v
          ? ((b = { mutationFn: x, onSuccess: v }), (N[28] = x), (N[29] = v), (N[30] = b))
          : (b = N[30]))
      let ed = (0, r.n)(b),
        eu = B?.third_party_items?.filter(tw),
        ep = B?.third_party_items?.filter(tC)
      N[31] !== H ? ((C = H.get("tab")), (N[31] = H), (N[32] = C)) : (C = N[32])
      let eh = C,
        eg = "apps" === eh || "sites" === eh ? eh : "all",
        em = { apps: ep, sites: eu },
        ef = "all" === eg || W || V || em[eg]?.length ? eg : "all",
        ey = null == ec && ((null != eh && "all" === eg) || (!W && !V && null != B && eg !== ef))
      ;(N[33] !== O.hash || N[34] !== O.pathname || N[35] !== O.state || N[36] !== q || N[37] !== H || N[38] !== ey
        ? ((w = () => {
            if (
              (en.current?.isConnected === !1 &&
                et.current?.querySelector('[role="tab"][aria-selected="true"]')?.focus(),
              !ey)
            )
              return
            let e = new URLSearchParams(H)
            ;(e.delete("tab"),
              q(
                { pathname: O.pathname, search: 0 === e.size ? "" : `?${e.toString()}`, hash: O.hash },
                { replace: !0, state: O.state },
              ))
          }),
          (N[33] = O.hash),
          (N[34] = O.pathname),
          (N[35] = O.state),
          (N[36] = q),
          (N[37] = H),
          (N[38] = ey),
          (N[39] = w))
        : (w = N[39]),
        N[40] !== ef ||
        N[41] !== O.hash ||
        N[42] !== O.pathname ||
        N[43] !== O.state ||
        N[44] !== q ||
        N[45] !== H ||
        N[46] !== ey
          ? ((A = [ef, O.hash, O.pathname, O.state, q, H, ey]),
            (N[40] = ef),
            (N[41] = O.hash),
            (N[42] = O.pathname),
            (N[43] = O.state),
            (N[44] = q),
            (N[45] = H),
            (N[46] = ey),
            (N[47] = A))
          : (A = N[47]),
        (0, l.useLayoutEffect)(w, A))
      let ex = ei.trim().toLocaleLowerCase(R.locale),
        ev = ei.trim().toLowerCase(),
        eb = ("all" === ef ? B?.third_party_items : em[ef])?.filter(
          (e) => e.name.toLocaleLowerCase(R.locale).includes(ex) || tA(e)?.toLowerCase().includes(ev),
        ),
        eC = B?.items.filter((e) => "all" === ef && e.name.toLocaleLowerCase(R.locale).includes(ex))
      if (null == B) {
        let e, t
        ;(N[48] !== z ? ((e = () => void z()), (N[48] = z), (N[49] = e)) : (e = N[49]),
          N[50] !== V || N[51] !== e
            ? ((t = (0, n.jsx)(U.mK, { isError: V, onRetry: e })), (N[50] = V), (N[51] = e), (N[52] = t))
            : (t = N[52]),
          (k = t))
      } else if (null != ec) {
        let e, t, s, i
        ;(N[53] !== Y ? ((e = () => Y(null)), (N[53] = Y), (N[54] = e)) : (e = N[54]),
          N[55] !== ec
            ? ((t = (e, t) => {
                ;(Q(e ? ec : null), J(e && !!t))
              }),
              (N[55] = ec),
              (N[56] = t))
            : (t = N[56]),
          N[57] !== E || N[58] !== e || N[59] !== t
            ? ((s = { accountId: E, onDisconnected: e, onDisconnectingChange: t }),
              (N[57] = E),
              (N[58] = e),
              (N[59] = t),
              (N[60] = s))
            : (s = N[60]),
          N[61] !== el || N[62] !== ec || N[63] !== s
            ? ((i = (0, n.jsx)(tj, { app: ec, hasIdentity: el, management: s }, ec.id)),
              (N[61] = el),
              (N[62] = ec),
              (N[63] = s),
              (N[64] = i))
            : (i = N[64]),
          (k = i))
      } else if (0 !== B.items.length || B.third_party_items?.length) {
        let e, t, s, i, a, o, r
        ;(N[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (e) => {
              en.current = "tab" === e.target.getAttribute("role") ? e.target : null
            }),
            (t = () => {
              en.current = null
            }),
            (N[66] = e),
            (N[67] = t))
          : ((e = N[66]), (t = N[67])),
          N[68] !== O.hash || N[69] !== O.pathname || N[70] !== O.state || N[71] !== q || N[72] !== H
            ? ((s = (e) => {
                let t = new URLSearchParams(H)
                ;("all" === e ? t.delete("tab") : t.set("tab", e),
                  q(
                    { pathname: O.pathname, search: 0 === t.size ? "" : `?${t.toString()}`, hash: O.hash },
                    { replace: !0, state: O.state },
                  ))
              }),
              (N[68] = O.hash),
              (N[69] = O.pathname),
              (N[70] = O.state),
              (N[71] = q),
              (N[72] = H),
              (N[73] = s))
            : (s = N[73]),
          N[74] !== R
            ? ((i = R.formatMessage({
                id: "settings.chatGpt.security.linkedApps.tabs.appsAndSites",
                defaultMessage: "Connected apps and sites",
                description:
                  "Accessible name of the tabs that filter all connections, third-party apps, or ChatGPT-generated sites in Security and login settings.",
              })),
              (N[74] = R),
              (N[75] = i))
            : (i = N[75]),
          N[76] !== R
            ? ((a = R.formatMessage({
                id: "settings.chatGpt.security.linkedApps.search.appsAndSites",
                defaultMessage: "Search apps and sites",
                description:
                  "Accessible label of the search field in Sign in with ChatGPT settings. Filters apps and sites by name or website within the selected tab.",
              })),
              (N[76] = R),
              (N[77] = a))
            : (a = N[77]),
          N[78] !== R
            ? ((o = R.formatMessage({
                id: "settings.chatGpt.security.linkedApps.searchPlaceholder",
                defaultMessage: "Search",
                description:
                  "Short placeholder in the search field above connected apps and sites in Sign in with ChatGPT settings.",
              })),
              (N[78] = R),
              (N[79] = o))
            : (o = N[79]),
          N[80] !== ei || N[81] !== a || N[82] !== o
            ? ((r = (0, n.jsx)(eB.s, {
                id: "linked-apps-search",
                className: "w-full sm:w-64",
                variant: "toolbar",
                inputRole: "searchbox",
                label: a,
                placeholder: o,
                searchQuery: ei,
                onSearchQueryChange: ea,
              })),
              (N[80] = ei),
              (N[81] = a),
              (N[82] = o),
              (N[83] = r))
            : (r = N[83]),
          (k = (0, n.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [
              (0, n.jsx)(eV.uC, {
                inset: !1,
                children: (0, n.jsxs)("div", {
                  className: "flex w-full flex-wrap items-center justify-between gap-4",
                  onFocusCapture: e,
                  onBlurCapture: t,
                  children: [
                    (0, n.jsx)(eW.t, {
                      tabListRef: et,
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
                            description:
                              "Tab showing all connected apps and sites in Sign in with ChatGPT settings. Total is the number of connections; the count tag styles that number.",
                            values: { total: B.items.length + (B.third_party_items?.length ?? 0), count: tb },
                          }),
                        },
                        {
                          key: "apps",
                          name: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.thirdPartyWithCount",
                            defaultMessage: "Apps <count>{total, number}</count>",
                            description:
                              "Tab showing connected third-party apps, excluding ChatGPT-generated sites and first-party integrations, in Sign in with ChatGPT settings. Total is the number of apps; the count tag styles that number.",
                            values: { total: ep?.length ?? 0, count: tv },
                          }),
                        },
                        {
                          key: "sites",
                          name: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.sitesWithCount",
                            defaultMessage: "Sites <count>{total, number}</count>",
                            description:
                              "Tab showing connected ChatGPT-generated sites in Sign in with ChatGPT settings. Total is the number of sites; the count tag styles that number.",
                            values: { total: eu?.length ?? 0, count: tx },
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
              (eb?.length ?? 0) + (eC?.length ?? 0) === 0
                ? (0, n.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.noMatches.appsOrSites",
                      defaultMessage: "No apps or sites found",
                      description:
                        "Empty filtered list in Sign in with ChatGPT settings when no app or site matches the selected tab and search. The user can change tabs or clear the search.",
                    }),
                  })
                : (0, n.jsxs)(j.t, {
                    children: [
                      eb?.map((e) => {
                        let t = e.description?.trim()
                        return (0, n.jsx)(
                          _.kG,
                          {
                            edgeRounding: "surface",
                            icon: (0, n.jsx)(eX.y, { app: e }),
                            label: (0, n.jsx)("span", { className: "block truncate select-text", children: e.name }),
                            description: t
                              ? (0, n.jsx)("span", { className: "block truncate select-text", children: t })
                              : void 0,
                            onClick: (t) => {
                              let s = t.currentTarget.ownerDocument.getSelection()
                              ;(0 !== t.detail &&
                                s?.isCollapsed === !1 &&
                                (t.currentTarget.contains(s.anchorNode) || t.currentTarget.contains(s.focusNode))) ||
                                (Y(e.id), z())
                            },
                            trailing: (0, n.jsx)(ee.I, { asset: eH.R }),
                          },
                          e.id,
                        )
                      }),
                      eC?.map((e) =>
                        (0, n.jsx)(
                          _.ic,
                          {
                            icon: (0, n.jsx)(eX.O, { app: e }),
                            label: (0, n.jsx)("span", { className: "select-text", children: e.name }),
                            description: (0, n.jsx)(tN, { type: e.type }),
                            control: (0, n.jsx)(L.$, {
                              color: "danger",
                              size: "toolbar",
                              onClick: () => {
                                ;(ed.reset(), er(e))
                              },
                              children: (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.linkedApps.disconnect",
                                defaultMessage: "Disconnect",
                                description:
                                  "Button for revoking an existing first-party app connection in Sign in with ChatGPT settings.",
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
        ;(N[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.linkedApps.empty",
                defaultMessage:
                  "You haven’t used ChatGPT to sign into any websites or apps yet. Once you do, they’ll show up here.",
                description:
                  "Empty state on the Sign in with ChatGPT settings subpage when no websites or apps are connected.",
              }),
            })),
            (N[65] = e))
          : (e = N[65]),
          (k = e))
      }
      return (
        N[84] !== ec
          ? ((P =
              null != ec
                ? void 0
                : (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.signInWithChatGpt.title",
                    defaultMessage: "Sign in with ChatGPT",
                    description:
                      "Short label for the Sign in with ChatGPT row under Login connections in Security and login settings and the title of the page it opens. Lets signed-in users review apps and sites they have signed in to with ChatGPT and manage their access. ChatGPT is the sign-in provider; no placeholders.",
                  })),
            (N[84] = ec),
            (N[85] = P))
          : (P = N[85]),
        N[86] !== D || N[87] !== ec || N[88] !== Y
          ? ((M =
              null == ec
                ? D
                : () => {
                    ;(Y(null), Q(null), J(!1))
                  }),
            (N[86] = D),
            (N[87] = ec),
            (N[88] = Y),
            (N[89] = M))
          : (M = N[89]),
        N[90] !== ec
          ? ((I =
              null == ec
                ? (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.description",
                    defaultMessage:
                      "Review other apps and sites you’ve signed in to with ChatGPT, and manage what they can access",
                    description:
                      "Supporting text beneath Sign in with ChatGPT in Security and login settings and on the page it opens. Tells signed-in users they can review apps and sites they have signed in to with ChatGPT and manage the access they granted. Neutral body copy that may wrap; no placeholders.",
                  })
                : void 0),
            (N[90] = ec),
            (N[91] = I))
          : (I = N[91]),
        N[92] !== B || N[93] !== V || N[94] !== z
          ? ((S = null != B && V ? (0, n.jsx)(U.mK, { isError: !0, onRetry: () => void z() }) : null),
            (N[92] = B),
            (N[93] = V),
            (N[94] = z),
            (N[95] = S))
          : (S = N[95]),
        N[96] !== ed || N[97] !== eo || N[98] !== K
          ? ((G =
              null == eo
                ? null
                : (0, n.jsx)(U.i$, {
                    title: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.disconnectTitle",
                      defaultMessage: "Disconnect {name}?",
                      description:
                        "Confirmation title before removing access for a linked first-party application. Placeholder name is the application's display name.",
                      values: { name: eo.name },
                    }),
                    confirmLabel: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.disconnect",
                      defaultMessage: "Disconnect",
                      description:
                        "Button for revoking an existing first-party app connection in Sign in with ChatGPT settings.",
                    }),
                    onConfirm: () => {
                      ;(K.logProductEvent(eq.CodexAccountSettingsConnectedAppDisconnectConfirmed, {
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
                        "Disconnecting ends {name}’s access through ChatGPT. It may still keep information you’ve already shared, such as your name or email.",
                      description:
                        "Plain-text body in a multi-line confirmation modal opened after a signed-in user clicks Disconnect for a first-party app in ChatGPT Security settings. Use a cautionary but reassuring tone: disconnecting ends the app's access through ChatGPT but does not remove information already shared. ChatGPT is the product name. Placeholder {name} is the app's developer-provided display name and may be long.",
                      values: { name: eo.name },
                    }),
                  })),
            (N[96] = ed),
            (N[97] = eo),
            (N[98] = K),
            (N[99] = G))
          : (G = N[99]),
        N[100] !== k || N[101] !== P || N[102] !== M || N[103] !== I || N[104] !== S || N[105] !== G
          ? ((T = (0, n.jsxs)(U.kU, { title: P, onBack: M, subtitle: I, children: [S, k, G] })),
            (N[100] = k),
            (N[101] = P),
            (N[102] = M),
            (N[103] = I),
            (N[104] = S),
            (N[105] = G),
            (N[106] = T))
          : (T = N[106]),
        T
      )
    }
    function tx(e) {
      return (0, n.jsx)("span", { className: "text-tertiary", children: e })
    }
    function tv(e) {
      return (0, n.jsx)("span", { className: "text-tertiary", children: e })
    }
    function tb(e) {
      return (0, n.jsx)("span", { className: "text-tertiary", children: e })
    }
    function tC(e) {
      let { client_app_type: t } = e
      return "codex_generated_site" !== t
    }
    function tw(e) {
      let { client_app_type: t } = e
      return "codex_generated_site" === t
    }
    function t_(e) {
      return tm.has(e)
    }
    function tA(e) {
      try {
        let t = new URL(e.client_uri ?? "")
        return "https:" === t.protocol || "http:" === t.protocol ? t.href : null
      } catch {
        return null
      }
    }
    function tj(e) {
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
        b = (0, l.useRef)(null)
      f[0] !== y.scopes || f[1] !== x
        ? ((t = x && !!y.scopes?.every(tG)), (f[0] = y.scopes), (f[1] = x), (f[2] = t))
        : (t = f[2])
      let w = t
      f[3] !== y.scopes || f[4] !== v
        ? ((s = null != v && y.scopes?.some(tS)), (f[3] = y.scopes), (f[4] = v), (f[5] = s))
        : (s = f[5])
      let A = s
      f[6] !== y.scopes || f[7] !== v
        ? ((a = null != v && y.scopes?.includes("chatgpt.plugins.invoke")), (f[6] = y.scopes), (f[7] = v), (f[8] = a))
        : (a = f[8])
      let k = a
      if (f[9] !== y || f[10] !== x || f[11] !== v || f[12] !== A || f[13] !== k) {
        let e,
          t,
          s,
          i,
          a,
          l = ["ads.admin.all.read", "ads.admin.all.write"].filter((e) => y.scopes?.includes(e))
        ;((o = l.length > 0),
          f[19] !== y.resource_grants
            ? ((e = y.resource_grants?.find(tI)), (f[19] = y.resource_grants), (f[20] = e))
            : (e = f[20]))
        let h = e
        f[21] !== y.resource_grants
          ? ((t = y.resource_grants?.find(tM)), (f[21] = y.resource_grants), (f[22] = t))
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
        let w = y.scopes?.filter(eU.ul)
        ;((r = w?.length !== y.scopes?.length),
          (u = new Map(
            w
              ?.filter(
                (e) =>
                  (null == v || "offline_access" !== e) &&
                  (!x || !tm.has(e)) &&
                  (!A || !tf.has(e)) &&
                  (!k || "chatgpt.plugins.invoke" !== e) &&
                  !l.some((t) => t === e),
              )
              .map(tP),
          )),
          f[26] !== y ? ((i = tA(y)), (f[26] = y), (f[27] = i)) : (i = f[27]))
        let P = i,
          M = null == y.linked_at ? null : Date.parse(y.linked_at)
        f[28] !== y.name
          ? ((a = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.sharedWith",
              defaultMessage: "Shared with {name}",
              description:
                "Heading above account information shared with a connected app. Name is the application's display name.",
              values: { name: y.name },
            })),
            (f[28] = y.name),
            (f[29] = a))
          : (a = f[29])
        let I = a
        ;((p =
          x || null != v || o
            ? (0, n.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex min-w-0 items-center gap-4",
                    children: [
                      (0, n.jsx)(eX.y, { app: y, size: "detail", borderless: !0 }),
                      (0, n.jsx)("div", {
                        className: "min-w-0 flex-1",
                        children: (0, n.jsx)(eK.z, {
                          variant: "settings",
                          subtitleClassName: "flex flex-col gap-1 text-sm",
                          title: (0, n.jsx)("span", {
                            ref: b,
                            tabIndex: -1,
                            className: "select-text",
                            children: y.name,
                          }),
                          subtitle:
                            null == P && (null == M || Number.isNaN(M))
                              ? void 0
                              : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    null == P
                                      ? null
                                      : (0, n.jsx)("span", { className: "break-all select-text", children: P }),
                                    null == M || Number.isNaN(M)
                                      ? null
                                      : (0, n.jsx)(d.A, {
                                          id: "settings.chatGpt.security.linkedApps.connectedOn",
                                          defaultMessage: "Connected on {timestamp, date, long}",
                                          description:
                                            "Date when this app was connected through ChatGPT, shown below the app name. Timestamp is an epoch-millisecond number rendered in the viewer's locale and timezone.",
                                          values: { timestamp: M },
                                        }),
                                  ],
                                }),
                        }),
                      }),
                    ],
                  }),
                  x || A || o
                    ? (0, n.jsxs)(C.X, {
                        children: [
                          (0, n.jsx)(C.X.Header, { title: (0, n.jsx)("h2", { children: I }) }),
                          (0, n.jsxs)(C.X.Content, {
                            className: "gap-4",
                            children: [
                              x
                                ? (0, n.jsx)(j.t, {
                                    children: (0, n.jsx)(_.ic, {
                                      label: (0, n.jsx)("h3", {
                                        children: (0, n.jsx)(d.A, { ...(0, eU.sl)("openid") }),
                                      }),
                                      description: (0, n.jsx)(d.A, { ...(0, eU.$Z)("openid") }),
                                      control: null,
                                    }),
                                  })
                                : null,
                              A
                                ? (0, n.jsx)(j.t, {
                                    children: (0, n.jsx)(tT, {
                                      app: y,
                                      successFocusRef: b,
                                      resourceGrant: h,
                                      management: v,
                                    }),
                                  })
                                : null,
                              o || (null != g && null != v)
                                ? (0, n.jsxs)(j.t, {
                                    children: [
                                      null != g && null != v
                                        ? (0, n.jsx)(_.ic, {
                                            className: "max-sm:flex-col max-sm:items-stretch",
                                            label: (0, n.jsx)("h3", {
                                              children: (0, n.jsx)(d.A, {
                                                id: "settings.chatGpt.security.linkedApps.resource.ads.title",
                                                defaultMessage: "Ads Manager",
                                                description:
                                                  "Resource heading above the granted Ads Manager permissions in a connected app's Sign in with ChatGPT security settings. The adjacent Remove access button removes all of this app's Ads permissions.",
                                              }),
                                            }),
                                            description: (0, n.jsx)(d.A, {
                                              id: "settings.chatGpt.security.linkedApps.resource.ads.scope",
                                              defaultMessage: "Your Ads accounts",
                                              description:
                                                "Scope label beneath Ads Manager in a connected app's Sign in with ChatGPT security settings. This resource applies to the signed-in user's Ads accounts, rather than the selected ChatGPT workspace.",
                                            }),
                                            control: (0, n.jsx)(
                                              e$,
                                              {
                                                app: y,
                                                accountId: v.accountId,
                                                isIdentityOnly: !1,
                                                resourceGrant: g,
                                                successFocusRef: b,
                                                onDisconnected: v.onDisconnected,
                                                onDisconnectingChange: v.onDisconnectingChange,
                                              },
                                              g.disconnect_target.authorization_transaction_id,
                                            ),
                                          })
                                        : null,
                                      l.map(tk),
                                    ],
                                  })
                                : null,
                              k && null != v
                                ? (0, n.jsx)(j.t, { children: (0, n.jsx)(tn, { app: y, accountId: v.accountId }) })
                                : null,
                            ],
                          }),
                        ],
                      })
                    : null,
                  x || A || o || !k || null == v
                    ? null
                    : (0, n.jsx)(tn, { app: y, accountId: v.accountId, groupTitle: I }),
                ],
              })
            : (null != P || (null != M && !Number.isNaN(M))) &&
              (0, n.jsxs)(C.X, {
                children: [
                  (0, n.jsx)(C.X.Header, {
                    title: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.details",
                      defaultMessage: "Details",
                      description:
                        "Short section heading above an app or site's website and connection date in the basic details view of Login connections in the ChatGPT Security settings modal. Signed-in users see it after selecting a connection; it introduces information, not an action. Individual details can be absent; no placeholders.",
                    }),
                  }),
                  (0, n.jsxs)(C.X.Content, {
                    children: [
                      null == P
                        ? null
                        : (0, n.jsx)(j.t, {
                            children: (0, n.jsx)(_.ic, {
                              label: (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.linkedApps.website",
                                defaultMessage: "Website",
                                description:
                                  "Short label beside an app or site's website address in its basic details view under Login connections in the ChatGPT Security settings modal. Helps signed-in users identify the selected connection's website; the address is displayed separately and the row is omitted if unavailable. This label is not a link or button; no placeholders.",
                              }),
                              control: (0, n.jsx)("span", { className: "break-all select-text", children: P }),
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
                              description:
                                "When the selected app was connected through ChatGPT. Timestamp is an epoch-millisecond number rendered in the viewer's locale and timezone.",
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
          (f[12] = A),
          (f[13] = k),
          (f[14] = o),
          (f[15] = r),
          (f[16] = c),
          (f[17] = u),
          (f[18] = p))
      } else ((o = f[14]), (r = f[15]), (c = f[16]), (u = f[17]), (p = f[18]))
      return (
        f[30] !== y.name || f[31] !== o || f[32] !== r || f[33] !== x || f[34] !== u || f[35] !== A || f[36] !== k
          ? ((h =
              ((!r && !x && !A && !k && !o) || u.size > 0) &&
              (0, n.jsxs)(C.X, {
                children: [
                  (0, n.jsx)(C.X.Header, {
                    title: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.permissions",
                      defaultMessage: "Permissions",
                      description:
                        "Heading above the OAuth permissions granted to the selected app or site in Sign in with ChatGPT settings.",
                    }),
                  }),
                  (0, n.jsx)(C.X.Content, {
                    children:
                      u.size > 0
                        ? (0, n.jsx)("div", {
                            role: "list",
                            children: (0, n.jsx)(j.t, {
                              children: Array.from(u, (e) => {
                                let [t, s] = e
                                return (0, n.jsx)(
                                  "div",
                                  {
                                    role: "listitem",
                                    children: (0, n.jsx)(_.ic, {
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
                              description:
                                "Empty permissions state for a connected app that has no recorded OAuth scopes in Sign in with ChatGPT settings.",
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
            (f[35] = A),
            (f[36] = k),
            (f[37] = h))
          : (h = f[37]),
        f[38] !== y || f[39] !== c || f[40] !== w || f[41] !== v
          ? ((g =
              null != v && (!y.resource_grants?.length || c)
                ? (0, n.jsx)(e$, {
                    app: y,
                    accountId: v.accountId,
                    isIdentityOnly: w,
                    onDisconnected: v.onDisconnected,
                    onDisconnectingChange: v.onDisconnectingChange,
                  })
                : null),
            (f[38] = y),
            (f[39] = c),
            (f[40] = w),
            (f[41] = v),
            (f[42] = g))
          : (g = f[42]),
        f[43] !== p || f[44] !== h || f[45] !== g
          ? ((m = (0, n.jsxs)(n.Fragment, { children: [p, h, g] })), (f[43] = p), (f[44] = h), (f[45] = g), (f[46] = m))
          : (m = f[46]),
        m
      )
    }
    function tk(e) {
      return (0, n.jsx)(
        _.ic,
        {
          label: (0, n.jsx)(d.A, { ...(0, eU.sl)(e) }),
          description: (0, n.jsx)(d.A, { ...(0, eU.$Z)(e) }),
          control: null,
        },
        e,
      )
    }
    function tP(e) {
      let t = th.get(e)
      return [t?.id ?? `scope:${e}`, null == t ? e : { title: t, description: tg.get(e) }]
    }
    function tM(e) {
      let { resource: t } = e
      return "ads" === t
    }
    function tI(e) {
      let { resource: t } = e
      return "chatgpt_plan" === t
    }
    function tS(e) {
      return tf.has(e)
    }
    function tG(e) {
      return tm.has(e) || "offline_access" === e
    }
    function tT(e) {
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
        { app: x, resourceGrant: v, successFocusRef: b, management: C } = e,
        { data: w } = (0, f.oV)()
      y[0] !== w?.accounts || y[1] !== C?.accountId
        ? ((t = w?.accounts?.find((e) => {
            let { id: t } = e
            return t === C?.accountId
          })),
          (y[0] = w?.accounts),
          (y[1] = C?.accountId),
          (y[2] = t))
        : (t = y[2])
      let A = t,
        j = (0, u.Zp)(),
        { data: k } = (0, c.Ul)(eZ.Ix),
        { isUsageSettingsVisible: P, isUsageSettingsAccessLoading: M } = (0, ez.AH)(k?.credits?.balance != null)
      return (
        y[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)("h3", { children: (0, n.jsx)(d.A, { ...(0, eU.sl)("chatpass.enable.request") }) })),
            (y[3] = s))
          : (s = y[3]),
        y[4] !== A?.name || y[5] !== A?.structure || y[6] !== v
          ? ((a =
              null != v
                ? (0, n.jsx)("p", {
                    className: "mb-1",
                    children:
                      A?.structure === "personal"
                        ? (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.resource.plan.personalWorkspace",
                            defaultMessage: "Personal workspace",
                            description:
                              "Scope label below ChatGPT plan access in Sign in with ChatGPT security settings when the connected app uses the user's personal workspace. Removing access affects this workspace only.",
                          })
                        : A?.name ||
                          (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.resource.plan.currentWorkspace",
                            defaultMessage: "This workspace",
                            description:
                              "Fallback scope label below ChatGPT plan access in Sign in with ChatGPT security settings when the selected workspace name is unavailable. Removing access affects this workspace only.",
                          }),
                  })
                : null),
            (y[4] = A?.name),
            (y[5] = A?.structure),
            (y[6] = v),
            (y[7] = a))
          : (a = y[7]),
        y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, eU.$Z)("chatpass.enable.request")), (y[8] = o))
          : (o = y[8]),
        y[9] !== x.name
          ? ((r = (0, n.jsx)(d.A, { ...o, values: { appName: x.name } })), (y[9] = x.name), (y[10] = r))
          : (r = y[10]),
        y[11] !== a || y[12] !== r
          ? ((l = (0, n.jsxs)(n.Fragment, { children: [a, r] })), (y[11] = a), (y[12] = r), (y[13] = l))
          : (l = y[13]),
        y[14] !== M || y[15] !== P || y[16] !== j
          ? ((p =
              P && !M
                ? (0, n.jsx)(L.$, {
                    color: "secondary",
                    size: "toolbar",
                    onClick: () => void j("/settings/usage"),
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.plan.manageUsage",
                      defaultMessage: "Manage usage",
                      description:
                        "Opens the existing Usage settings page to manage ChatPass spending limits for connected apps.",
                    }),
                  })
                : null),
            (y[14] = M),
            (y[15] = P),
            (y[16] = j),
            (y[17] = p))
          : (p = y[17]),
        y[18] !== A?.name || y[19] !== A?.structure || y[20] !== x || y[21] !== C || y[22] !== v || y[23] !== b
          ? ((h =
              null != v && null != C
                ? (0, n.jsx)(
                    e$,
                    {
                      app: x,
                      accountId: C.accountId,
                      isIdentityOnly: !1,
                      resourceGrant: v,
                      successFocusRef: b,
                      workspaceName: A?.name,
                      isPersonalWorkspace: A?.structure === "personal",
                      onDisconnected: C.onDisconnected,
                      onDisconnectingChange: C.onDisconnectingChange,
                    },
                    v.disconnect_target.authorization_transaction_id,
                  )
                : null),
            (y[18] = A?.name),
            (y[19] = A?.structure),
            (y[20] = x),
            (y[21] = C),
            (y[22] = v),
            (y[23] = b),
            (y[24] = h))
          : (h = y[24]),
        y[25] !== p || y[26] !== h
          ? ((g = (0, n.jsxs)("div", { className: "flex flex-col items-end gap-2", children: [p, h] })),
            (y[25] = p),
            (y[26] = h),
            (y[27] = g))
          : (g = y[27]),
        y[28] !== l || y[29] !== g
          ? ((m = (0, n.jsx)(_.ic, {
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
    function tN(e) {
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
                  description:
                    "Description beneath the existing Codex CLI integration in Sign in with ChatGPT settings. This integration can be disconnected.",
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
                  description:
                    "Supporting text for the Apple Intelligence connection in Sign in with ChatGPT settings, describing the benefits of the linked account.",
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
                  description: "Supporting text identifying the KakaoTalk connection in Sign in with ChatGPT settings.",
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
                  description: "Supporting text identifying the Viber connection in Sign in with ChatGPT settings.",
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
                  description:
                    "Supporting text below a connected app in Sign in with ChatGPT settings; identifies the sign-in method without claiming any specific permissions.",
                })),
                (t[4] = e))
              : (e = t[4]),
            e
          )
        }
      }
    }
    function tE(e) {
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
        x = (0, i.c)(29),
        { accountId: v, passkeyCount: b, onOpenPasskeys: w } = e
      x[0] !== v ? ((t = (0, es.dI)(v)), (x[0] = v), (x[1] = t)) : (t = x[1])
      let { data: A, isSuccess: k } = (0, o.I)(t.changePassword)
      x[2] !== v ? ((s = (0, es.dI)(v)), (x[2] = v), (x[3] = s)) : (s = x[3])
      let { data: P, isSuccess: M } = (0, o.I)(s.addPassword)
      x[4] !== v ? ((a = (0, es.dI)(v)), (x[4] = v), (x[5] = a)) : (a = x[5])
      let { data: I, isSuccess: S } = (0, o.I)(a.protection)
      x[6] === Symbol.for("react.memo_cache_sentinel") ? ((c = { mutationFn: ey.Fz }), (x[6] = c)) : (c = x[6])
      let G = (0, r.n)(c),
        T = I?.advanced_protection_mode_enabled === !0
      return (x[7] !== P || x[8] !== M || x[9] !== A || x[10] !== k
        ? ((l = null),
          k && !0 === A.eligible ? (l = "change") : k && M && !0 === P.eligible && (l = "add"),
          (x[7] = P),
          (x[8] = M),
          (x[9] = A),
          (x[10] = k),
          (x[11] = l))
        : (l = x[11]),
      null == l && null == b)
        ? null
        : (x[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, n.jsx)(C.X.Header, {
                title: (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.loginMethods.title",
                  defaultMessage: "How you log in",
                  description:
                    "Heading above passkeys, security keys, and password controls in Security and login settings. These are the methods the user can use to sign in.",
                }),
              })),
              (x[12] = u))
            : (u = x[12]),
          x[13] !== w || x[14] !== b
            ? ((p =
                null != b
                  ? (0, n.jsx)(_.kG, {
                      className: "select-none",
                      edgeRounding: "surface",
                      label: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.loginMethods.passkeys.title",
                        defaultMessage: "Passkeys and security keys",
                        description:
                          "Clickable row opening security key and passkey management in Security and login settings.",
                      }),
                      description: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.passkeys.description",
                        defaultMessage: "Use a phishing-resistant alternative to passwords",
                        description:
                          "Description beneath the Passkeys and security keys row explaining that these sign-in methods resist phishing. Shown whether or not the user has added one.",
                      }),
                      onClick: w,
                      trailing: (0, n.jsxs)(n.Fragment, {
                        children: [
                          0 === b
                            ? (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.passkeys.add",
                                defaultMessage: "Add",
                                description:
                                  "Trailing label on the passkeys settings row when no security keys or passkeys have been added.",
                              })
                            : b,
                          (0, n.jsx)(y.uM3, {}),
                        ],
                      }),
                    })
                  : null),
              (x[13] = w),
              (x[14] = b),
              (x[15] = p))
            : (p = x[15]),
          x[16] !== l || x[17] !== T || x[18] !== G || x[19] !== S
            ? ((h =
                null != l
                  ? (0, n.jsx)(_.kG, {
                      className: "select-none",
                      edgeRounding: "surface",
                      label: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.password.title",
                        defaultMessage: "Password",
                        description:
                          "Label for the account password row in Security and login settings. The row lets eligible users add or change a password.",
                      }),
                      description: T
                        ? (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.password.advancedProtectionDescription",
                            defaultMessage: "Password sign-in is disabled while Advanced account security is enabled",
                            description:
                              "Explanation below the disabled Password row when Advanced account security is enabled. The user can manage this protection in the Advanced security section.",
                          })
                        : (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.password.description",
                            defaultMessage: "Manage the password you use to log in",
                            description:
                              "Description beneath the Password row in Security and login settings, where eligible users can add or change their account password.",
                          }),
                      disabled: !S || T || G.isPending || (G.isSuccess && "failed" !== G.data),
                      onClick: () => G.mutate(l, { onSuccess: tL }),
                      trailing: (0, n.jsxs)(n.Fragment, {
                        children: [
                          T
                            ? (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.password.disabled",
                                defaultMessage: "Disabled",
                                description:
                                  "Status on the Password settings row when Advanced account security disables password sign-in.",
                              })
                            : null,
                          T || "change" !== l
                            ? null
                            : (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.password.change",
                                defaultMessage: "Change",
                                description:
                                  "Action on the Password settings row that starts identity verification to change an existing account password.",
                              }),
                          T || "add" !== l
                            ? null
                            : (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.password.add",
                                defaultMessage: "Add",
                                description:
                                  "Action on the Password settings row that starts identity verification to add a password to an account that does not have one.",
                              }),
                          (0, n.jsx)(y.uM3, {}),
                        ],
                      }),
                    })
                  : null),
              (x[16] = l),
              (x[17] = T),
              (x[18] = G),
              (x[19] = S),
              (x[20] = h))
            : (h = x[20]),
          x[21] !== p || x[22] !== h
            ? ((g = (0, n.jsxs)(C.X, {
                children: [u, (0, n.jsx)(C.X.Content, { children: (0, n.jsxs)(j.t, { children: [p, h] }) })],
              })),
              (x[21] = p),
              (x[22] = h),
              (x[23] = g))
            : (g = x[23]),
          x[24] !== G
            ? ((m = G.isError || "failed" === G.data ? (0, n.jsx)(ex, { onClose: () => G.reset() }) : null),
              (x[24] = G),
              (x[25] = m))
            : (m = x[25]),
          x[26] !== g || x[27] !== m
            ? ((f = (0, n.jsxs)(n.Fragment, { children: [g, m] })), (x[26] = g), (x[27] = m), (x[28] = f))
            : (f = x[28]),
          f)
    }
    function tL(e) {
      "failed" !== e && window.location.assign(e.redirectUrl)
    }
    let tD = (0, e_.a)({
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
    var tR = s("Tpyu")
    let tO = (0, e_.a)({
      name: "security-key-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.700684, y: 0.947266, width: 13.339355, height: 13.338867 },
        visualBounds: { x: 1.700684, y: 0.947266, width: 13.339355, height: 13.338867 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.700684, y: 0.947266, width: 13.339355, height: 13.338867 },
        center: { x: 8.370362, y: 7.6167 },
        insets: { top: 0.947266, right: 0.959961, bottom: 1.713867, left: 1.700684 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.370362, y: 7.6167 }, foreground: { x: 8.370362, y: 7.6167 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.03975 1.49138C9.76546 0.765942 10.942 0.765844 11.6677 1.49138L14.4958 4.31951C15.2214 5.04515 15.2213 6.22169 14.4958 6.94744L9.12764 12.3156C8.49519 12.948 7.52094 13.0286 6.80049 12.5588L5.42256 13.9377C4.9572 14.4028 4.20233 14.4029 3.73702 13.9377L2.04952 12.2502C1.58441 11.7848 1.58441 11.03 2.04952 10.5646L3.42745 9.18572C2.95856 8.46541 3.03954 7.4916 3.67159 6.85955L9.03975 1.49138ZM2.7917 11.3068C2.7367 11.362 2.73683 11.4517 2.7917 11.507L4.4792 13.1955C4.53431 13.2505 4.62405 13.2501 4.6794 13.1955L6.02901 11.8449L4.14131 9.9572L2.7917 11.3068ZM10.9255 2.23357C10.6099 1.91808 10.0976 1.91818 9.78194 2.23357L4.41377 7.60174C4.09814 7.91738 4.0982 8.42961 4.41377 8.74529L7.2419 11.5734C7.55757 11.8891 8.06978 11.8891 8.38545 11.5734L13.7536 6.20525C14.069 5.88956 14.0692 5.37729 13.7536 5.0617L10.9255 2.23357Z" fill="currentColor"/>',
    })
    var tq = s("zKCW"),
      tU = s("bqtn"),
      tH = s("zLIa")
    function tF(e) {
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
        { accountId: f, pending: y, onBack: x, onAction: v, onOrder: b } = e,
        C = (0, eF.A)()
      m[0] !== f ? ((t = (0, es.dI)(f)), (m[0] = f), (m[1] = t)) : (t = m[1])
      let { data: w, isError: A, refetch: k } = (0, o.I)(t.mfa),
        [P, M] = (0, l.useState)(null),
        I = "function" == typeof PublicKeyCredential
      if (
        m[2] !== w ||
        m[3] !== C ||
        m[4] !== A ||
        m[5] !== v ||
        m[6] !== x ||
        m[7] !== b ||
        m[8] !== y ||
        m[9] !== k
      ) {
        let e = w?.factors.passkeys.slice().sort(tK)
        ;((s = U.kU),
          (a = x),
          m[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.passkeys.listTitle",
                defaultMessage: "Passkeys & security keys",
                description:
                  "Heading of the page for managing passkeys and hardware security keys in Security and login settings.",
              })),
              (c = (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.passkeys.listDescription",
                defaultMessage: "See all the active security keys and passkeys",
                description:
                  "Introduction to the security-key and passkey management subpage in Security and login settings.",
              })),
              (m[16] = r),
              (m[17] = c))
            : ((r = m[16]), (c = m[17])),
          m[18] !== w || m[19] !== C || m[20] !== A || m[21] !== v || m[22] !== y
            ? ((u =
                null == w || A
                  ? void 0
                  : (0, n.jsx)(L.$, {
                      color: "primary",
                      size: "composerSmLabel",
                      disabled: y || !I,
                      "aria-label": C.formatMessage({
                        id: "settings.chatGpt.security.passkeys.addButton",
                        defaultMessage: "Add a passkey or security key",
                        description:
                          "Accessible label for the Add button that opens enrollment for a hardware security key or passkey.",
                      }),
                      onClick: () => v({ action: "enable", factor: "passkey" }),
                      children: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.passkeys.addAction",
                        defaultMessage: "Add",
                        description:
                          "Button in the passkeys and security keys page header that opens enrollment for a new key.",
                      }),
                    })),
              (m[18] = w),
              (m[19] = C),
              (m[20] = A),
              (m[21] = v),
              (m[22] = y),
              (m[23] = u))
            : (u = m[23]),
          (p =
            null == w || A
              ? (0, n.jsx)(U.mK, { isError: A, onRetry: () => void k() })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    e?.length
                      ? (0, n.jsx)(j.t, {
                          children: e.map((e) => {
                            let t =
                                e.metadata?.factor_name?.trim() ||
                                e.metadata?.authenticator_name?.trim() ||
                                C.formatMessage({
                                  id: "settings.chatGpt.security.passkeys.fallback",
                                  defaultMessage: "Passkey",
                                  description:
                                    "Fallback name for an unnamed security key or passkey in Security and login settings.",
                                }),
                              s = e.metadata?.create_time_seconds
                            return (0, n.jsx)(
                              _.ic,
                              {
                                label: t,
                                icon: (0, n.jsx)(ee.I, {
                                  className: "text-secondary",
                                  asset: e.metadata?.is_security_key ? tO : tR.M,
                                }),
                                description:
                                  null == s
                                    ? void 0
                                    : (0, n.jsx)(d.A, {
                                        id: "settings.chatGpt.security.passkeys.added",
                                        defaultMessage: "Added: {timestamp, date, long}",
                                        description:
                                          "Date a security key or passkey was added. Timestamp is epoch milliseconds and rendered as a localized date.",
                                        values: { timestamp: 1e3 * s },
                                      }),
                                control: (0, n.jsxs)(tU.Ab, {
                                  triggerButton: (0, n.jsx)(L.$, {
                                    color: "ghost",
                                    size: "iconCircle",
                                    disabled: y,
                                    "aria-label": C.formatMessage(
                                      {
                                        id: "settings.chatGpt.security.passkeys.actions",
                                        defaultMessage: "Actions for {name}",
                                        description:
                                          "Accessible label for the menu to rename or remove a security key or passkey. Name is its display name.",
                                      },
                                      { name: t },
                                    ),
                                    children: (0, n.jsx)(ee.I, { className: "text-secondary", asset: tD }),
                                  }),
                                  children: [
                                    (0, n.jsx)(tU.ms.Item, {
                                      onSelect: () => M(e),
                                      children: (0, n.jsx)(d.A, {
                                        id: "settings.chatGpt.security.passkeys.rename",
                                        defaultMessage: "Rename",
                                        description: "Menu action for renaming a security key or passkey.",
                                      }),
                                    }),
                                    (0, n.jsx)(tU.ms.Item, {
                                      tone: "danger",
                                      onSelect: () => v({ action: "disable", factor: "passkey", factorId: e.id }),
                                      children: (0, n.jsx)(d.A, {
                                        id: "settings.chatGpt.security.passkeys.delete",
                                        defaultMessage: "Delete",
                                        description:
                                          "Menu action starting reauthentication and confirmation before deleting a security key or passkey.",
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
                            defaultMessage: "Your browser doesn’t support passkeys",
                            description:
                              "Explanation when security-key enrollment is unavailable because the browser lacks WebAuthn support.",
                          }),
                        }),
                    null != b
                      ? (0, n.jsx)(tq.l, {
                          variant: "settings",
                          icon: (0, n.jsx)(ee.I, { className: "text-secondary", asset: tO }),
                          title: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.passkeys.yubikey",
                            defaultMessage: "Get a YubiKey bundle",
                            description:
                              "Heading for the hardware security key ordering option in Security and login settings. YubiKey is a product name.",
                          }),
                          content: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.passkeys.hardwareDescription",
                            defaultMessage: "Hardware security keys offer the strongest protection",
                            description:
                              "Supporting text explaining the benefit of ordering a physical hardware security key.",
                          }),
                          customCtas: (0, n.jsx)(L.$, {
                            color: "outlineSurface",
                            size: "composer",
                            onClick: b,
                            children: (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.passkeys.order",
                              defaultMessage: "Order a YubiKey",
                              description:
                                "Button opening the consent dialog for ordering a hardware security key. YubiKey is a product name.",
                            }),
                          }),
                        })
                      : null,
                  ],
                })),
          (m[2] = w),
          (m[3] = C),
          (m[4] = A),
          (m[5] = v),
          (m[6] = x),
          (m[7] = b),
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
        m[24] !== f || m[25] !== P
          ? ((h = null == P ? null : (0, n.jsx)(tB, { accountId: f, passkey: P, onClose: () => M(null) }, P.id)),
            (m[24] = f),
            (m[25] = P),
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
    function tK(e, t) {
      return (t.metadata?.create_time_seconds ?? 0) - (e.metadata?.create_time_seconds ?? 0)
    }
    function tB(e) {
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
        b,
        C,
        w,
        _,
        A,
        j,
        k,
        P,
        M,
        I = (0, i.c)(57),
        { accountId: S, passkey: G, onClose: T } = e,
        N = (0, a.jE)(),
        E = G.metadata?.create_time_seconds
      I[0] !== G.metadata?.authenticator_name || I[1] !== G.metadata?.factor_name
        ? ((t = G.metadata?.factor_name?.trim() || G.metadata?.authenticator_name?.trim() || ""),
          (I[0] = G.metadata?.authenticator_name),
          (I[1] = G.metadata?.factor_name),
          (I[2] = t))
        : (t = I[2])
      let D = t,
        [R, O] = (0, l.useState)(D)
      ;(I[3] !== S || I[4] !== R || I[5] !== G.id
        ? ((s = () =>
            es.IN.safePost("/accounts/mfa/user/update_factor_name", {
              additionalHeaders: { "ChatGPT-Account-ID": S },
              requestBody: { factor_id: G.id, factor_name: R.trim() },
            })),
          (I[3] = S),
          (I[4] = R),
          (I[5] = G.id),
          (I[6] = s))
        : (s = I[6]),
        I[7] !== S || I[8] !== T || I[9] !== N
          ? ((o = async () => {
              ;(await N.invalidateQueries({ queryKey: (0, es.dI)(S).mfa.queryKey }), T())
            }),
            (I[7] = S),
            (I[8] = T),
            (I[9] = N),
            (I[10] = o))
          : (o = I[10]),
        I[11] !== s || I[12] !== o
          ? ((c = { mutationFn: s, onSuccess: o }), (I[11] = s), (I[12] = o), (I[13] = c))
          : (c = I[13]))
      let q = (0, r.n)(c)
      I[14] !== R || I[15] !== D || I[16] !== q.isPending
        ? ((u = R.trim().length > 0 && R.trim() !== D && R.trim().length <= 64 && !q.isPending),
          (I[14] = R),
          (I[15] = D),
          (I[16] = q.isPending),
          (I[17] = u))
        : (u = I[17])
      let U = u
      ;(I[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { "aria-describedby": void 0 }), (I[18] = p))
        : (p = I[18]),
        I[19] !== T || I[20] !== q.isPending
          ? ((h = (e) => {
              e || q.isPending || T()
            }),
            (I[19] = T),
            (I[20] = q.isPending),
            (I[21] = h))
          : (h = I[21]),
        I[22] !== U || I[23] !== q
          ? ((g = (e) => {
              ;(e.preventDefault(), U && q.mutate())
            }),
            (I[22] = U),
            (I[23] = q),
            (I[24] = g))
          : (g = I[24]),
        I[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)(e8.OO, {
              children: (0, n.jsx)(e8.c7, {
                title: (0, n.jsx)(e7.L3, {
                  children: (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.passkeys.renameTitle",
                    defaultMessage: "Rename security key",
                    description:
                      "Dialog title for renaming an existing security key or passkey in Security and login settings.",
                  }),
                }),
              }),
            })),
            (I[25] = m))
          : (m = I[25]),
        I[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.passkeys.name",
              defaultMessage: "Name",
              description: "Label for the custom name of a security key or passkey in the rename dialog.",
            })),
            (I[26] = f))
          : (f = I[26]),
        I[27] === Symbol.for("react.memo_cache_sentinel") ? ((y = (e) => O(e.target.value)), (I[27] = y)) : (y = I[27]),
        I[28] !== R || I[29] !== q.isPending
          ? ((x = (0, n.jsxs)("label", {
              className: "flex flex-col gap-2 text-sm",
              children: [
                f,
                (0, n.jsx)(tH.pd, {
                  name: "passkey-name",
                  autoFocus: !0,
                  maxLength: 64,
                  value: R,
                  onChange: y,
                  disabled: q.isPending,
                }),
              ],
            })),
            (I[28] = R),
            (I[29] = q.isPending),
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
                      description:
                        "Date a security key or passkey was added. Timestamp is epoch milliseconds and rendered as a localized date.",
                      values: { timestamp: 1e3 * E },
                    }),
                  })),
            (I[31] = E),
            (I[32] = v))
          : (v = I[32]),
        I[33] !== q.isError
          ? ((b = q.isError
              ? (0, n.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.passkeys.renameError",
                    defaultMessage: "Failed to save passkey name",
                    description:
                      "Inline error in the rename security-key dialog. The name is retained so the user can retry.",
                  }),
                })
              : null),
            (I[33] = q.isError),
            (I[34] = b))
          : (b = I[34]),
        I[35] !== x || I[36] !== v || I[37] !== b
          ? ((C = (0, n.jsxs)(e8.OO, { className: "gap-4", spacing: "large", children: [x, v, b] })),
            (I[35] = x),
            (I[36] = v),
            (I[37] = b),
            (I[38] = C))
          : (C = I[38]),
        I[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.cancel",
              defaultMessage: "Cancel",
              description:
                "Dismisses an account security confirmation without changing authentication, devices, or app access.",
            })),
            (I[39] = w))
          : (w = I[39]),
        I[40] !== T || I[41] !== q.isPending
          ? ((_ = (0, n.jsx)(L.$, {
              type: "button",
              color: "secondary",
              onClick: T,
              disabled: q.isPending,
              children: w,
            })),
            (I[40] = T),
            (I[41] = q.isPending),
            (I[42] = _))
          : (_ = I[42]))
      let H = !U
      return (
        I[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.passkeys.save",
              defaultMessage: "Save",
              description: "Saves the new custom name of the security key or passkey.",
            })),
            (I[43] = A))
          : (A = I[43]),
        I[44] !== q.isPending || I[45] !== H
          ? ((j = (0, n.jsx)(L.$, {
              type: "submit",
              color: "primary",
              disabled: H,
              loading: q.isPending,
              children: A,
            })),
            (I[44] = q.isPending),
            (I[45] = H),
            (I[46] = j))
          : (j = I[46]),
        I[47] !== _ || I[48] !== j
          ? ((k = (0, n.jsx)(e8.OO, { spacing: "large", children: (0, n.jsxs)(e8.Es, { children: [_, j] }) })),
            (I[47] = _),
            (I[48] = j),
            (I[49] = k))
          : (k = I[49]),
        I[50] !== C || I[51] !== k || I[52] !== g
          ? ((P = (0, n.jsxs)(e8.R4, { as: "form", onSubmit: g, children: [m, C, k] })),
            (I[50] = C),
            (I[51] = k),
            (I[52] = g),
            (I[53] = P))
          : (P = I[53]),
        I[54] !== P || I[55] !== h
          ? ((M = (0, n.jsx)(e7.lG, { open: !0, contentProps: p, onOpenChange: h, children: P })),
            (I[54] = P),
            (I[55] = h),
            (I[56] = M))
          : (M = I[56]),
        M
      )
    }
    var tV = s("vysM")
    s("RU3e")
    var tW = s("c2QW"),
      tz = s("fOeo"),
      tZ = s("m4Ej"),
      tY = s("IDuz"),
      t$ = s("WIiH"),
      tQ = s("zjpG"),
      tX = s("NOPk")
    function tJ(e) {
      return (
        e.is_trusted_device &&
        e.can_untrust &&
        !e.is_current_device &&
        !(e.session_id ?? "").trim() &&
        (e.hashed_device_id ?? "").trim().length > 0
      )
    }
    function t1(e) {
      return null != e && e.trim().length > 0
    }
    let t0 = {
      all: {
        title: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.allTitle",
          defaultMessage: "Log out of all devices?",
          description: "Confirmation title before ending all ChatGPT sessions including the current device.",
        }),
        description: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.allDescription",
          defaultMessage:
            "This will log you out of your account on all devices, including this one. You’ll need to log in again on any device you want to use.",
          description:
            "Warning in the Log out all confirmation that access will end everywhere, including on the current device.",
        }),
        confirmLabel: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.allConfirm",
          defaultMessage: "Log out of all devices",
          description: "Destructive confirmation button ending all ChatGPT device sessions including this one.",
        }),
      },
      unavailable: {
        title: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.unavailableTitle",
          defaultMessage: "Can’t log out",
          description: "Dialog title for a device whose session cannot be ended individually.",
        }),
        description: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.unavailableDescription",
          defaultMessage: "To remove this device, go back and select “Log out all”",
          description:
            "Explains that a device without a revocable session can only be removed by logging out all devices.",
        }),
        confirmLabel: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.gotIt",
          defaultMessage: "Got it",
          description: "Dismisses the explanation that this device cannot be logged out individually.",
        }),
      },
      trusted: {
        title: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.trustedTitle",
          defaultMessage: "Log out and remove trusted device?",
          description: "Confirmation title before ending a device session and revoking its trusted-device status.",
        }),
        description: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.trustedDescription",
          defaultMessage:
            "This will log out the device and remove it from your trusted devices. The device will no longer receive push notifications or be used to unlock your account.",
          description:
            "Warning before logging out a trusted device, explaining that its authentication privileges will also be removed.",
        }),
        confirmLabel: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.logOut",
          defaultMessage: "Log out",
          description: "Button opening a confirmation to end one device's session in Active sessions settings.",
        }),
      },
      session: {
        title: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.logoutTitle",
          defaultMessage: "Log out?",
          description: "Confirmation title before ending one non-current ChatGPT session.",
        }),
        description: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.logoutDescription",
          defaultMessage:
            "This will immediately log out from your account. You’ll need to log in again to access your account on that device.",
          description: "Warning before ending one device's account session, requiring that device to sign in again.",
        }),
        confirmLabel: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.logOut",
          defaultMessage: "Log out",
          description: "Button opening a confirmation to end one device's session in Active sessions settings.",
        }),
      },
      signedOut: {
        title: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.signedOutTitle",
          defaultMessage: "Remove trust from this device?",
          description:
            "Confirmation dialog title after selecting Remove on a signed-out trusted device in ChatGPT Active sessions settings. Asks the user to confirm removing saved device trust, not deleting the account.",
        }),
        description: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.signedOutDescription",
          defaultMessage:
            "This device is already signed out. Removing trust means you’ll need to verify it’s you the next time you sign in on it.",
          description:
            "Confirmation dialog body after selecting Remove on a signed-out trusted device in ChatGPT Active sessions settings. Explains that the action removes saved trust without deleting the account or its data.",
        }),
        confirmLabel: (0, n.jsx)(d.A, {
          id: "settings.chatGpt.security.sessions.remove",
          defaultMessage: "Remove",
          description:
            "Short destructive confirmation button that removes saved trust from a signed-out device in ChatGPT Active sessions settings.",
        }),
      },
    }
    function t2(e) {
      let t,
        s,
        g,
        m,
        f,
        y,
        x,
        v,
        b,
        C,
        w,
        A,
        k,
        P,
        M,
        I,
        S,
        G,
        T,
        D,
        R,
        O,
        q,
        H,
        F,
        K,
        B,
        V = (0, i.c)(95),
        { accountId: W, includeTrustedDevices: z, acknowledgeReview: Z, recommendationAttempt: Y, onBack: $ } = e,
        Q = void 0 !== z && z,
        X = void 0 !== Z && Z,
        J = (0, c.gh)(N.u),
        et = (0, a.jE)(),
        { userId: en } = (0, h.As)(),
        ei = (0, u.Zp)(),
        ea = (0, h.KD)()
      V[0] !== W ? ((t = ["chatgpt-security", W, "sessions"]), (V[0] = W), (V[1] = t)) : (t = V[1])
      let eo = t,
        er = X ? (en ?? void 0) : void 0
      V[2] !== W || V[3] !== Q || V[4] !== er
        ? ((s = (0, es.dI)(W, { includeTrustedDevices: Q, sessionReviewUserId: er })),
          (V[2] = W),
          (V[3] = Q),
          (V[4] = er),
          (V[5] = s))
        : (s = V[5])
      let ec = s.sessions
      V[6] !== W || V[7] !== X || V[8] !== Q || V[9] !== ec || V[10] !== en
        ? ((g = X ? ["chatgpt-security", W, "sessions", { includeTrustedDevices: Q }, en] : ec.queryKey),
          (V[6] = W),
          (V[7] = X),
          (V[8] = Q),
          (V[9] = ec),
          (V[10] = en),
          (V[11] = g))
        : (g = V[11])
      let el = !X || !!en,
        ed = X ? "always" : ec.refetchOnMount,
        eu = X ? 0 : ec.staleTime
      V[12] !== ec || V[13] !== g || V[14] !== el || V[15] !== ed || V[16] !== eu
        ? ((m = { ...ec, queryKey: g, enabled: el, refetchOnMount: ed, staleTime: eu }),
          (V[12] = ec),
          (V[13] = g),
          (V[14] = el),
          (V[15] = ed),
          (V[16] = eu),
          (V[17] = m))
        : (m = V[17])
      let { data: ep, isError: eh, isFetching: eg, isFetchedAfterMount: em, isSuccess: ef, refetch: ey } = (0, o.I)(m),
        ex = (0, l.useRef)(!1)
      V[18] !== et || V[19] !== J
        ? ((f = {
            mutationFn: st,
            onSuccess: (e, t) => {
              ;(et.invalidateQueries({ queryKey: (0, tV.m)(t.accountId, t.userId).queryKey }),
                (0, eM.gM)(J, t.recommendationAttempt))
            },
          }),
          (V[18] = et),
          (V[19] = J),
          (V[20] = f))
        : (f = V[20])
      let ev = (0, r.n)(f)
      ;(V[21] !== W ||
      V[22] !== X ||
      V[23] !== em ||
      V[24] !== eg ||
      V[25] !== ef ||
      V[26] !== Y ||
      V[27] !== ev ||
      V[28] !== en
        ? ((y = () => {
            X &&
              en &&
              ef &&
              !eg &&
              em &&
              !ex.current &&
              ((ex.current = !0), ev.mutate({ accountId: W, userId: en, recommendationAttempt: Y }))
          }),
          (x = [X, W, en, Y, ef, eg, em, ev]),
          (V[21] = W),
          (V[22] = X),
          (V[23] = em),
          (V[24] = eg),
          (V[25] = ef),
          (V[26] = Y),
          (V[27] = ev),
          (V[28] = en),
          (V[29] = y),
          (V[30] = x))
        : ((y = V[29]), (x = V[30])),
        (0, l.useEffect)(y, x))
      let [eb, eC] = (0, l.useState)(null)
      V[31] !== ep || V[32] !== Q
        ? ((v = null != ep && Q ? [...ep.devices.filter(se), ...ep.devices.filter(tJ)] : (ep?.devices ?? [])),
          (V[31] = ep),
          (V[32] = Q),
          (V[33] = v))
        : (v = V[33])
      let ew = v
      ;(V[34] !== W || V[35] !== Q || V[36] !== et || V[37] !== J || V[38] !== eo
        ? ((b = async (e) => {
            if ("all" === e) {
              let e = { accountId: W, authSnapshot: (0, p.getBrowserChatGptAuthSnapshot)() }
              J.get(eY.YV).logProductEvent(tW.Rh, {
                location: tW.a4.ACCESS_LOGOUT_ACTION_LOCATION_SETTINGS_MODAL_LOG_OUT_ALL,
                logoutType: tW.vh.ACCESS_LOGOUT_TYPE_USER_INITIATED,
              })
              let t = (0, tX.TV)({
                logoutCaller: "settings_sessions",
                reasonV2: tW.Hf.ACCESS_LOGOUT_REASON_V2_INTENTIONAL_USER_INITIATED_MANUAL_LOGOUT,
                preLogoutUserId: e.authSnapshot?.userId,
                location: tW.a4.ACCESS_LOGOUT_ACTION_LOCATION_SETTINGS_MODAL_LOG_OUT_ALL,
              })
              return (
                await es.IN.safePost("/accounts/logout_all", { additionalHeaders: { "ChatGPT-Account-ID": W } }),
                await (0, tX.q9)(t),
                e
              )
            }
            if (Q && tJ(e)) {
              try {
                await es.IN.safePost("/accounts/trusted_devices/revoke", {
                  additionalHeaders: { "ChatGPT-Account-ID": W },
                  expectedErrorStatuses: [409],
                  requestBody: { device_id_hash: e.hashed_device_id },
                })
              } catch (e) {
                try {
                  await et.invalidateQueries({ queryKey: eo })
                } catch {}
                throw e
              }
              await et.invalidateQueries({ queryKey: eo })
            } else
              e.session_id?.trim() &&
                !e.is_current_device &&
                (await es.IN.safePost("/accounts/sessions/revoke", {
                  additionalHeaders: { "ChatGPT-Account-ID": W },
                  requestBody: { session_id: e.session_id },
                }),
                await et.invalidateQueries({ queryKey: eo }))
            return null
          }),
          (V[34] = W),
          (V[35] = Q),
          (V[36] = et),
          (V[37] = J),
          (V[38] = eo),
          (V[39] = b))
        : (b = V[39]),
        V[40] !== ei || V[41] !== ea
          ? ((C = (e, t) => {
              "all" === t &&
                null != e &&
                (function ({ accountId: e, authSnapshot: t }) {
                  if (null == t) return !1
                  let s = t.accountId,
                    n = t.accountUserId
                  if (!t1(e) || !t1(s) || !t1(n) || s !== e) return !1
                  let i = (0, p.getBrowserChatGptAuthSnapshot)()
                  return (
                    null != i &&
                    i.accountId === s &&
                    i.accountUserId === n &&
                    (null == t.userId || null == i.userId || i.userId === t.userId)
                  )
                })(e) &&
                ((0, p.markBrowserChatGptSignedOut)(),
                ei("/auth/logout", { replace: !0, state: "complete-browser-logout" }),
                (0, t$.handleLogout)(ea))
            }),
            (V[40] = ei),
            (V[41] = ea),
            (V[42] = C))
          : (C = V[42]),
        V[43] !== b || V[44] !== C
          ? ((w = { mutationFn: b, onSuccess: C }), (V[43] = b), (V[44] = C), (V[45] = w))
          : (w = V[45]))
      let e_ = (0, r.n)(w)
      V[46] !== eb || V[47] !== Q
        ? ((A = null != eb && "all" !== eb && Q && tJ(eb)), (V[46] = eb), (V[47] = Q), (V[48] = A))
        : (A = V[48])
      let eA = A
      V[49] !== eb || V[50] !== eA
        ? ((k = null != eb && "all" !== eb && !eb.session_id?.trim() && !eA), (V[49] = eb), (V[50] = eA), (V[51] = k))
        : (k = V[51])
      let ej = k,
        ek = "session"
      return (
        "all" === eb
          ? (ek = "all")
          : eA
            ? (ek = "signedOut")
            : ej
              ? (ek = "unavailable")
              : eb?.is_trusted_device && (ek = "trusted"),
        V[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.activeSessions",
              defaultMessage: "Active sessions",
              description: "Title of the ChatGPT Security and login subpage where users review active device sessions.",
            })),
            (V[52] = P))
          : (P = V[52]),
        V[53] !== Q
          ? ((M = Q
              ? (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.sessions.devicesDescriptionWithSignedOut",
                  defaultMessage:
                    "Review active sessions and devices remembered for future sign-ins. Trusted devices can receive security notifications, such as sign-in approvals. Signed-out devices can’t receive these until you sign in again.",
                  description:
                    "Introduction above the combined device list in ChatGPT Active sessions settings. Explains active sessions and signed-out devices with saved trust. Only signed-in trusted devices can receive account-security notifications.",
                })
              : (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.sessions.devicesDescription",
                  defaultMessage:
                    "Review devices with active sessions. Trusted devices can receive security notifications, such as sign-in approvals.",
                  description:
                    "Introduction above the Active sessions device list. Explains that trusted devices can receive account-security notifications, including requests to approve a sign-in.",
                })),
            (V[53] = Q),
            (V[54] = M))
          : (M = V[54]),
        V[55] !== X || V[56] !== ev
          ? ((I =
              X && ev.isError
                ? (0, n.jsxs)("div", {
                    role: "alert",
                    className: "flex flex-col items-start gap-3 text-sm text-secondary",
                    children: [
                      (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.sessions.reviewError",
                        defaultMessage: "Couldn’t mark this session review complete",
                        description:
                          "Error after the session list loaded but recording that the user reviewed it failed. The list stays visible and the user may retry.",
                      }),
                      (0, n.jsx)(L.$, {
                        color: "secondary",
                        size: "toolbar",
                        onClick: () => {
                          ev.variables && ev.mutate(ev.variables)
                        },
                        children: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.retry",
                          defaultMessage: "Retry",
                          description:
                            "Button beside an error in ChatGPT Security and login settings that retries loading account data.",
                        }),
                      }),
                    ],
                  })
                : null),
            (V[55] = X),
            (V[56] = ev),
            (V[57] = I))
          : (I = V[57]),
        V[58] !== ep || V[59] !== eh || V[60] !== ey
          ? ((S = null == ep || eh ? (0, n.jsx)(U.mK, { isError: eh, onRetry: () => void ey() }) : null),
            (V[58] = ep),
            (V[59] = eh),
            (V[60] = ey),
            (V[61] = S))
          : (S = V[61]),
        V[62] !== ep || V[63] !== ew || V[64] !== Q || V[65] !== eh || V[66] !== e_
          ? ((G =
              null != ep &&
              !eh &&
              (ew.length > 0
                ? (0, n.jsx)(j.t, {
                    children: ew.map((e) => {
                      let t = Array.from(new Map(e.app_sessions?.filter(t8).map(t7)).values()).join(", "),
                        s = e.app_sessions?.filter(t9),
                        i =
                          { macos: "macOS", ios: "iOS", ipados: "iPadOS" }[e.platform.trim().toLowerCase()] ??
                          e.platform.trim(),
                        a = (
                          e.last_signed_in_city.trim()
                            ? [e.last_signed_in_city, e.last_signed_in_region_code || e.last_signed_in_country]
                            : [e.last_signed_in_region_code, e.last_signed_in_country]
                        )
                          .filter(t6)
                          .join(", "),
                        o = !!e.session_id?.trim(),
                        r = Q && tJ(e),
                        c = t0.session.confirmLabel
                      r
                        ? (c = t0.signedOut.confirmLabel)
                        : o ||
                          e.is_current_device ||
                          (c = (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.sessions.info",
                            defaultMessage: "Info",
                            description:
                              "Button explaining why a device without an available session cannot be logged out individually.",
                          }))
                      let l = null
                      o
                        ? (l = (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.sessions.loginTime",
                            defaultMessage: "{timestamp, date, medium} at {timestamp, time, short}",
                            description:
                              "Last sign-in date and time within a device's details. Timestamp is epoch milliseconds; use the viewer's locale and timezone.",
                            values: { timestamp: 1e3 * e.last_signed_in_timestamp_second },
                          }))
                        : r &&
                          Number.isFinite(e.last_signed_in_timestamp_second) &&
                          e.last_signed_in_timestamp_second > 0 &&
                          (l = (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.sessions.lastSeen",
                            defaultMessage: "Last seen {timestamp, date, medium} at {timestamp, time, short}",
                            description:
                              "Optional date and time on a signed-out trusted device row in ChatGPT Active sessions settings. Timestamp is when the device registry last recorded seeing the device, not its exact logout time.",
                            values: { timestamp: 1e3 * e.last_signed_in_timestamp_second },
                          }))
                      let u = [
                        {
                          id: "device",
                          content:
                            e.display_name.trim() ||
                            e.device_model.trim() ||
                            (0, n.jsx)(d.A, {
                              id: "settings.chatGpt.security.sessions.unknownDevice",
                              defaultMessage: "Unknown device",
                              description:
                                "Short device-name placeholder in ChatGPT Active sessions settings when no device name or model is available. Shown beneath the application title beside the operating system.",
                            }),
                        },
                        {
                          id: "platform",
                          content:
                            i && "other" !== i.toLowerCase()
                              ? i
                              : (0, n.jsx)(d.A, {
                                  id: "settings.chatGpt.security.sessions.unknownOS",
                                  defaultMessage: "Unknown OS",
                                  description:
                                    "Short operating-system placeholder in ChatGPT Active sessions settings when the operating system is unavailable. Shown beside the device name beneath the application title. OS means operating system.",
                                }),
                        },
                        { id: "login", content: l },
                        { id: "location", content: o ? a : null },
                        {
                          id: "unavailable",
                          content:
                            o || r
                              ? null
                              : (0, n.jsx)(d.A, {
                                  id: "settings.chatGpt.security.sessions.unavailable",
                                  defaultMessage: "Session status unavailable",
                                  description:
                                    "Status shown when a device does not have an individually revocable session in Active sessions settings.",
                                }),
                        },
                      ].filter(t5)
                      return (0, n.jsx)(
                        _.ic,
                        {
                          icon: (0, n.jsx)(ee.I, {
                            className: "text-secondary",
                            asset: ["android", "ios", "ipados"].includes(e.platform.toLowerCase()) ? tY.f : tz.g,
                          }),
                          label: s?.length
                            ? (0, n.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [t && (0, n.jsx)("span", { children: t }), s.map(t4)],
                              })
                            : t ||
                              (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.sessions.unknownApp",
                                defaultMessage: "Unknown app",
                                description:
                                  "Short app-name placeholder in ChatGPT Active sessions settings when no application name is available. Shown as the session row title above the device and operating-system details.",
                              }),
                          description: u.map(t3),
                          control: (0, n.jsxs)("div", {
                            className: "flex flex-col items-end gap-2 sm:flex-row sm:items-center",
                            children: [
                              (0, n.jsx)(ss, { device: e, signedOut: r }),
                              (0, n.jsx)(L.$, {
                                color: "secondary",
                                size: "toolbar",
                                disabled: e.is_current_device,
                                onClick: () => {
                                  ;(e_.reset(), eC(e))
                                },
                                children: c,
                              }),
                            ],
                          }),
                        },
                        e.render_id,
                      )
                    }),
                  })
                : (0, n.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.sessions.empty",
                      defaultMessage: "No active sessions",
                      description: "Empty state after the Active sessions list loads successfully with no devices.",
                    }),
                  }))),
            (V[62] = ep),
            (V[63] = ew),
            (V[64] = Q),
            (V[65] = eh),
            (V[66] = e_),
            (V[67] = G))
          : (G = V[67]),
        V[68] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.sessions.logOutAllLabel",
              defaultMessage: "Log out of all sessions",
              description: "Label of the settings row that ends all active sessions, including the current session.",
            })),
            (V[68] = T))
          : (T = V[68]),
        V[69] !== Q
          ? ((D = Q
              ? (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.sessions.logOutAllDescriptionWithSignedOut",
                  defaultMessage:
                    "Log out everywhere and remove all devices from your account, including those already signed out. This may take up to 30 minutes.",
                  description:
                    "Description below Log out of all sessions in ChatGPT Active sessions settings when signed-out trusted devices are visible. Warns that the action ends every session and removes saved trust even from devices already signed out.",
                })
              : (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.sessions.logOutAllDescription",
                  defaultMessage:
                    "Log out of all active sessions across all devices, including this session. This may take up to 30 minutes.",
                  description:
                    "Explains the scope and possible delay of logging out all sessions before the user opens a confirmation.",
                })),
            (V[69] = Q),
            (V[70] = D))
          : (D = V[70]),
        V[71] !== e_
          ? ((R = () => {
              ;(e_.reset(), eC("all"))
            }),
            (V[71] = e_),
            (V[72] = R))
          : (R = V[72]),
        V[73] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.sessions.logOutAll",
              defaultMessage: "Log out all",
              description: "Button opening a confirmation to end all ChatGPT sessions, including the current one.",
            })),
            (V[73] = O))
          : (O = V[73]),
        V[74] !== R
          ? ((q = (0, n.jsx)(L.$, { color: "danger", size: "toolbar", onClick: R, children: O })),
            (V[74] = R),
            (V[75] = q))
          : (q = V[75]),
        V[76] !== D || V[77] !== q
          ? ((H = (0, n.jsx)(j.t, { children: (0, n.jsx)(_.ic, { label: T, description: D, control: q }) })),
            (V[76] = D),
            (V[77] = q),
            (V[78] = H))
          : (H = V[78]),
        V[79] !== I || V[80] !== S || V[81] !== G || V[82] !== H
          ? ((F = (0, n.jsxs)("div", { className: "flex flex-col gap-8", children: [I, S, G, H] })),
            (V[79] = I),
            (V[80] = S),
            (V[81] = G),
            (V[82] = H),
            (V[83] = F))
          : (F = V[83]),
        V[84] !== eb || V[85] !== ek || V[86] !== Q || V[87] !== e_ || V[88] !== ej
          ? ((K =
              null == eb
                ? null
                : (0, n.jsx)(U.i$, {
                    title: t0[ek].title,
                    confirmLabel: t0[ek].confirmLabel,
                    informational: ej,
                    onConfirm: () =>
                      ej
                        ? eC(null)
                        : e_.mutate(eb, {
                            onSuccess: () => {
                              eC(null)
                            },
                            onError: (e, t) => {
                              "all" !== t && Q && tJ(t) && e instanceof E.fk && 409 === e.status && eC(null)
                            },
                          }),
                    onClose: () => eC(null),
                    isPending: e_.isPending,
                    isError: e_.isError,
                    children: t0[ek].description,
                  })),
            (V[84] = eb),
            (V[85] = ek),
            (V[86] = Q),
            (V[87] = e_),
            (V[88] = ej),
            (V[89] = K))
          : (K = V[89]),
        V[90] !== $ || V[91] !== M || V[92] !== F || V[93] !== K
          ? ((B = (0, n.jsxs)(U.kU, { onBack: $, title: P, subtitle: M, children: [F, K] })),
            (V[90] = $),
            (V[91] = M),
            (V[92] = F),
            (V[93] = K),
            (V[94] = B))
          : (B = V[94]),
        B
      )
    }
    function t3(e, t) {
      let { id: s, content: i } = e
      return (0, n.jsxs)(
        l.Fragment,
        {
          children: [
            t > 0 ? (0, n.jsxs)(n.Fragment, { children: [" ", (0, n.jsx)(tQ.a, {}), " "] }) : null,
            (0, n.jsx)("span", { children: i }),
          ],
        },
        s,
      )
    }
    function t4(e) {
      return (0, n.jsxs)(
        "div",
        {
          children: [
            (0, n.jsxs)("div", {
              className: "flex flex-wrap items-center gap-2",
              children: [
                (0, n.jsx)("span", {
                  className: "wrap-anywhere select-text",
                  children:
                    e.client_name.trim() ||
                    (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.sessions.site.nameUnavailable",
                      defaultMessage: "Site name unavailable",
                      description:
                        "Fallback heading for a Site session in ChatGPT Active sessions settings when its name is missing. A Site is a website built with ChatGPT. Helps the account owner identify access to their account; does not indicate that the Site is unsafe. Short label, no placeholders.",
                    }),
                }),
                (0, n.jsx)(X.E, {
                  variant: "outline",
                  children: (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.sessions.site.badge",
                    defaultMessage: "Site",
                    description:
                      "Short informational badge beside a Site name in ChatGPT Active sessions settings. Identifies a website built with ChatGPT, not a physical location or a trusted-device status. No placeholders.",
                  }),
                }),
              ],
            }),
            e.client_uri?.trim() &&
              (0, n.jsx)("div", {
                className: "text-sm font-normal wrap-anywhere text-secondary select-text",
                children: e.client_uri,
              }),
          ],
        },
        e.client_id,
      )
    }
    function t5(e) {
      let { content: t } = e
      return !!t
    }
    function t6(e) {
      return !!e
    }
    function t9(e) {
      let { client_type: t } = e
      return "site" === t
    }
    function t7(e) {
      let { client_name: t } = e
      return [t.trim().toLowerCase(), t.trim()]
    }
    function t8(e) {
      let { client_name: t, client_type: s } = e
      return "site" !== s && t.trim()
    }
    function se(e) {
      return !tJ(e)
    }
    function st(e) {
      return I.Request.safePost("/accounts/security/session_review/acknowledge", {
        additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
        expectedIdentity: { accountId: e.accountId, userId: e.userId },
        retry: !1,
      })
    }
    function ss(e) {
      let t,
        s = (0, i.c)(3),
        { device: a, signedOut: o } = e
      if (!a.is_current_device && !a.is_trusted_device) return null
      if (a.is_current_device) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("span", {
                className: "text-xs font-medium text-secondary select-none",
                children: (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.sessions.current",
                  defaultMessage: "Current session",
                  description: "Badge identifying the device the user is currently using in Active sessions settings.",
                }),
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if (o) {
        let e
        return (
          s[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsxs)("span", {
                className: "flex items-center gap-1.5 text-xs font-medium text-warning select-none",
                children: [
                  (0, n.jsx)(ee.I, { asset: ew.m }),
                  (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.sessions.signedOut",
                    defaultMessage: "Signed out",
                    description:
                      "Badge identifying a remembered trusted device with no active session in ChatGPT Active sessions settings. It is informational, not an alert about unauthorized access.",
                  }),
                ],
              })),
              (s[1] = e))
            : (e = s[1]),
          e
        )
      }
      return (
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsxs)("span", {
              className: "flex items-center gap-1.5 text-xs font-medium text-info select-none",
              children: [
                (0, n.jsx)(ee.I, { asset: tZ.i }),
                (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.sessions.trusted",
                  defaultMessage: "Trusted device",
                  description: "Badge identifying a trusted authentication device in Active sessions settings.",
                }),
              ],
            })),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    ;(0, x._)(
      async function () {
        return () => null
      },
      {
        fallback: ({ isSubview: e, onBack: t }) =>
          e
            ? (0, n.jsx)(U.kU, {
                title: (0, n.jsx)(A.s, { slug: "security" }),
                onBack: t,
                children: (0, n.jsx)(U.mK, { isError: !1, onRetry: () => window.location.reload() }),
              })
            : null,
        errorFallback: ({ isSubview: e, onBack: t }) => {
          let s = (0, n.jsx)(U.mK, { isError: !0, onRetry: () => window.location.reload() })
          return e ? (0, n.jsx)(U.kU, { title: (0, n.jsx)(A.s, { slug: "security" }), onBack: t, children: s }) : null
        },
      },
    )
    let sn = (0, l.lazy)(async () => ({
        default: (await s.e(489439).then(s.bind(s, "Kj0H"))).SecurityHistorySettings,
      })),
      si = (0, l.lazy)(async () => ({ default: (await s.e(639537).then(s.bind(s, "vUVa"))).OrderYubikeyDialog }))
    function sa() {
      let e,
        t = (0, i.c)(2),
        s = (0, c.Ul)(m.Sk)
      return (
        t[0] !== s
          ? ((e = null == s ? (0, n.jsx)(v.y, {}) : (0, n.jsx)(so, { accountId: s }, s)), (t[0] = s), (t[1] = e))
          : (e = t[1]),
        e
      )
    }
    function so(e) {
      let t,
        s,
        m,
        f,
        x,
        M,
        I,
        S,
        G,
        T,
        N,
        E,
        L,
        D,
        R,
        O,
        H,
        F,
        K,
        B,
        W,
        z,
        Z,
        $,
        Q,
        X,
        J,
        ee,
        et,
        en,
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
        ew,
        e_ = (0, i.c)(206),
        { accountId: eA } = e,
        ej = (0, h.As)(),
        ek = (0, a.jE)(),
        eP = (0, u.zy)(),
        eM = (0, u.Zp)(),
        [eI, eG] = (0, u.ok)(),
        { data: eN } = (0, c._U)(g.t, eA),
        eL = (0, k.Zj)("3219370863")
      e_[0] !== eA || e_[1] !== eP.state || e_[2] !== eL
        ? (((t = (0, es.dI)(eA, { includeTrustedDevices: eL })).mfa.refetchOnMount = !(0, w.TK)(eP.state) || "always"),
          (e_[0] = eA),
          (e_[1] = eP.state),
          (e_[2] = eL),
          (e_[3] = t))
        : (t = e_[3])
      let { data: eO, isError: eq, refetch: eU } = (0, o.I)(t.mfa)
      e_[4] !== eO || e_[5] !== eI ? ((s = (0, ey.UC)(eI, eO)), (e_[4] = eO), (e_[5] = eI), (e_[6] = s)) : (s = e_[6])
      let eH = s,
        { data: eF, isSuccess: eK } = (0, o.I)(t.sessions)
      e_[7] !== eF?.devices || e_[8] !== eF?.devices.filter || e_[9] !== eK
        ? ((m = eK ? eF?.devices.filter(sl).length : void 0),
          (e_[7] = eF?.devices),
          (e_[8] = eF?.devices.filter),
          (e_[9] = eK),
          (e_[10] = m))
        : (m = e_[10])
      let eB = m
      e_[11] !== eA ? ((f = (0, eR.S)(eA)), (e_[11] = eA), (e_[12] = f)) : (f = e_[12])
      let { data: eV, isSuccess: eW } = (0, o.I)(f),
        ez = (0, k.Zj)("2726095122"),
        eZ = null != ej.userId && ez,
        eY = null != eN && !0 !== eN.account.is_fedramp_compliant_workspace,
        e$ = eN?.account.is_fedramp_compliant_workspace === !1
      e_[13] !== e$ || e_[14] !== t.linkedApps
        ? ((x = { ...t.linkedApps, enabled: e$, staleTime: P.D.ONE_MINUTE }),
          (e_[13] = e$),
          (e_[14] = t.linkedApps),
          (e_[15] = x))
        : (x = e_[15])
      let { data: eQ } = (0, o.I)(x)
      e_[16] !== eN?.features || e_[17] !== ej.email || e_[18] !== eO?.mfa_enabled_v2
        ? ((M = null != ej.email && (eN?.features?.includes("mfa") === !0 || eO?.mfa_enabled_v2 === !0)),
          (e_[16] = eN?.features),
          (e_[17] = ej.email),
          (e_[18] = eO?.mfa_enabled_v2),
          (e_[19] = M))
        : (M = e_[19])
      let eX = M,
        eJ = eX && void 0 === eO && !eq
      e_[20] !== eI ? ((I = eI.get("view")), (e_[20] = eI), (e_[21] = I)) : (I = e_[21])
      let e1 = I
      e_[22] !== eP.state ? ((S = (0, w.TK)(eP.state)), (e_[22] = eP.state), (e_[23] = S)) : (S = e_[23])
      let e0 = S
      ;(e_[24] !== eA || e_[25] !== ej.userId || e_[26] !== e0 || e_[27] !== ek
        ? ((G = () => {
            e0 && ej.userId && ek.invalidateQueries({ queryKey: (0, tV.m)(eA, ej.userId).queryKey })
          }),
          (T = [eA, ej.userId, e0, ek]),
          (e_[24] = eA),
          (e_[25] = ej.userId),
          (e_[26] = e0),
          (e_[27] = ek),
          (e_[28] = G),
          (e_[29] = T))
        : ((G = e_[28]), (T = e_[29])),
        (0, l.useEffect)(G, T),
        e_[30] !== eA || e_[31] !== ej.userId || e_[32] !== eP.state || e_[33] !== eI || e_[34] !== eG || e_[35] !== e1
          ? ((N = () => {
              let e = ej.userId
              if (
                "advanced-protection" !== e1 ||
                "true" !== eI.get("apm_disable_confirm") ||
                eI.has("apm_account_id") ||
                null == e
              )
                return
              let t = !1
              return (
                (0, p.loadBrowserChatGptAuth)()
                  .then((s) => {
                    !t &&
                      null != s &&
                      s.accountId === eA &&
                      s.userId === e &&
                      (0, ey.m)(s.accessToken) &&
                      eG(
                        (e) => {
                          if (
                            "advanced-protection" !== e.get("view") ||
                            "true" !== e.get("apm_disable_confirm") ||
                            e.has("apm_account_id")
                          )
                            return e
                          let t = new URLSearchParams(e)
                          return (t.append("apm_account_id", eA), t)
                        },
                        { replace: !0, state: eP.state },
                      )
                  })
                  .catch(sc),
                () => {
                  t = !0
                }
              )
            }),
            (E = [eA, ej.userId, eP.state, eI, eG, e1]),
            (e_[30] = eA),
            (e_[31] = ej.userId),
            (e_[32] = eP.state),
            (e_[33] = eI),
            (e_[34] = eG),
            (e_[35] = e1),
            (e_[36] = N),
            (e_[37] = E))
          : ((N = e_[36]), (E = e_[37])),
        (0, l.useEffect)(N, E),
        e_[38] === Symbol.for("react.memo_cache_sentinel") ? ((L = { mutationFn: sr }), (e_[38] = L)) : (L = e_[38]))
      let e2 = (0, r.n)(L),
        { mutate: e3 } = e2
      e_[39] !== eA ||
      e_[40] !== ej.userId ||
      e_[41] !== eP.hash ||
      e_[42] !== eP.pathname ||
      e_[43] !== eP.state ||
      e_[44] !== eM ||
      e_[45] !== eI ||
      e_[46] !== e1
        ? ((D = (e, t) => {
            if (null == e && (0, w.Qt)(eP.state)) return void eM(-1)
            let s = new URLSearchParams(eI)
            ;(null == e ? s.delete("view") : s.set("view", e),
              "account-pin" !== e && s.delete(V.Aj),
              "advanced-protection" !== e && (s.delete("apm_disable_confirm"), s.delete("apm_account_id")),
              "linked-apps" === e1 && "linked-apps" !== e && (s.delete("tab"), s.delete("client_id")),
              eM(
                { pathname: eP.pathname, search: 0 === s.size ? "" : `?${s.toString()}`, hash: eP.hash },
                {
                  replace: null == e,
                  state:
                    null == e
                      ? eP.state
                      : {
                          securitySubviewHasParent: !0,
                          securitySessionReviewIntent:
                            "sessions" === e && void 0 !== t && ej.userId
                              ? { accountId: eA, userId: ej.userId, recommendationAttempt: t ?? void 0 }
                              : void 0,
                        },
                },
              ))
          }),
          (e_[39] = eA),
          (e_[40] = ej.userId),
          (e_[41] = eP.hash),
          (e_[42] = eP.pathname),
          (e_[43] = eP.state),
          (e_[44] = eM),
          (e_[45] = eI),
          (e_[46] = e1),
          (e_[47] = D))
        : (D = e_[47])
      let e4 = D
      e_[48] !== eA || e_[49] !== eP.state || e_[50] !== eI || e_[51] !== eG
        ? ((R = () => {
            let e = new URLSearchParams(eI)
            ;(e.set("view", "advanced-protection"),
              e.set("apm_disable_confirm", "true"),
              e.set("apm_account_id", eA),
              eG(e, { replace: !0, state: eP.state }))
          }),
          (e_[48] = eA),
          (e_[49] = eP.state),
          (e_[50] = eI),
          (e_[51] = eG),
          (e_[52] = R))
        : (R = e_[52])
      let e5 = R
      e_[53] !== eP.state || e_[54] !== eI || e_[55] !== eG
        ? ((O = () => {
            let e = new URLSearchParams(eI)
            ;(e.delete("apm_disable_confirm"), e.delete("apm_account_id"), eG(e, { replace: !0, state: eP.state }))
          }),
          (e_[53] = eP.state),
          (e_[54] = eI),
          (e_[55] = eG),
          (e_[56] = O))
        : (O = e_[56])
      let e6 = O
      e_[57] !== eI || e_[58] !== e3 || e_[59] !== eG
        ? ((H = (e, t) => {
            let s = void 0 === t ? null : t
            e3(s ? { ...e, actionAttemptId: s.actionAttemptId } : e, {
              onSuccess: (e, t) => {
                if ("object" == typeof e) return void window.location.assign(e.redirectUrl)
                if ("ready" !== e) return
                let s = new URLSearchParams(eI)
                ;(s.set("action", t.action),
                  s.set("factor", t.factor),
                  void 0 !== t.actionAttemptId
                    ? s.set("action_attempt_id", t.actionAttemptId)
                    : s.delete("action_attempt_id"),
                  "disable" === t.action ? s.set("factor_id", t.factorId) : s.delete("factor_id"),
                  eG(s))
              },
            })
          }),
          (e_[57] = eI),
          (e_[58] = e3),
          (e_[59] = eG),
          (e_[60] = H))
        : (H = e_[60])
      let e9 = H
      e_[61] !== eI || e_[62] !== eG
        ? ((F = () => {
            let e = new URLSearchParams(eI)
            ;(e.delete("action"),
              e.delete("factor"),
              e.delete("factor_id"),
              e.delete("action_attempt_id"),
              "passkey_created" === e.get("_tm") && e.delete("_tm"),
              eG(e, { replace: !0 }))
          }),
          (e_[61] = eI),
          (e_[62] = eG),
          (e_[63] = F))
        : (F = e_[63])
      let e7 = F
      ;(e_[64] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = (0, n.jsx)(A.s, { slug: "security" })), (e_[64] = K))
        : (K = e_[64]),
        e_[65] !== e4 ? ((B = () => e4("advanced-protection")), (e_[65] = e4), (e_[66] = B)) : (B = e_[66]),
        e_[67] !== eA || e_[68] !== B
          ? ((W = (0, n.jsx)(ev, { accountId: eA, onManage: B })), (e_[67] = eA), (e_[68] = B), (e_[69] = W))
          : (W = e_[69]),
        e_[70] !== eJ || e_[71] !== eU
          ? ((z = eJ ? (0, n.jsx)(U.mK, { isError: !1, onRetry: () => void eU() }) : null),
            (e_[70] = eJ),
            (e_[71] = eU),
            (e_[72] = z))
          : (z = e_[72]))
      let e8 = eX && !eq ? eO?.factors.passkeys.length : void 0
      ;(e_[73] !== e4 ? ((Z = () => e4("passkeys")), (e_[73] = e4), (e_[74] = Z)) : (Z = e_[74]),
        e_[75] !== eA || e_[76] !== e8 || e_[77] !== Z
          ? (($ = (0, n.jsx)(tE, { accountId: eA, passkeyCount: e8, onOpenPasskeys: Z })),
            (e_[75] = eA),
            (e_[76] = e8),
            (e_[77] = Z),
            (e_[78] = $))
          : ($ = e_[78]),
        e_[79] !== e4 || e_[80] !== eZ
          ? ((Q = eZ
              ? (0, n.jsx)(j.t, {
                  children: (0, n.jsx)(_.kG, {
                    edgeRounding: "surface",
                    label: (0, n.jsx)(d.A, { ...q.L.title }),
                    description: (0, n.jsx)(d.A, { ...q.L.rowDescription }),
                    onClick: () => e4("account-pin"),
                    trailing: (0, n.jsx)(y.uM3, {}),
                  }),
                })
              : null),
            (e_[79] = e4),
            (e_[80] = eZ),
            (e_[81] = Q))
          : (Q = e_[81]),
        e_[82] !== eA || e_[83] !== eB || e_[84] !== e9 || e_[85] !== e4 || e_[86] !== e2.isPending || e_[87] !== eX
          ? ((X = eX
              ? (0, n.jsx)(eS, {
                  accountId: eA,
                  activeTrustedDeviceCount: eB,
                  pending: e2.isPending,
                  showLoading: !1,
                  onAction: e9,
                  onOpenAdvancedProtection: () => e4("advanced-protection"),
                })
              : null),
            (e_[82] = eA),
            (e_[83] = eB),
            (e_[84] = e9),
            (e_[85] = e4),
            (e_[86] = e2.isPending),
            (e_[87] = eX),
            (e_[88] = X))
          : (X = e_[88]),
        e_[89] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = (0, n.jsx)(C.X.Header, {
              title: (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.sessions",
                defaultMessage: "Sessions",
                description:
                  "Heading above active device sessions and security history in Security and login settings.",
              }),
            })),
            (e_[89] = J))
          : (J = e_[89]),
        e_[90] === Symbol.for("react.memo_cache_sentinel")
          ? ((ee = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.activeSessions",
              defaultMessage: "Active sessions",
              description: "Title of the ChatGPT Security and login subpage where users review active device sessions.",
            })),
            (et = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.sessions.description",
              defaultMessage:
                "View all devices that have accessed your account. You can review active sessions, remove trusted devices, or use Log out all to end all sessions.",
              description:
                "Introduction to Active sessions settings explaining the available account-session management actions.",
            })),
            (e_[90] = ee),
            (e_[91] = et))
          : ((ee = e_[90]), (et = e_[91])),
        e_[92] !== e4 ? ((en = () => e4("sessions")), (e_[92] = e4), (e_[93] = en)) : (en = e_[93]))
      let te = eF?.devices.length
      ;(e_[94] === Symbol.for("react.memo_cache_sentinel")
        ? ((ei = (0, n.jsx)(y.uM3, {})), (e_[94] = ei))
        : (ei = e_[94]),
        e_[95] !== te
          ? ((ea = (0, n.jsxs)(n.Fragment, { children: [te, ei] })), (e_[95] = te), (e_[96] = ea))
          : (ea = e_[96]),
        e_[97] !== en || e_[98] !== ea
          ? ((eo = (0, n.jsx)(_.kG, {
              edgeRounding: "surface",
              label: ee,
              description: et,
              onClick: en,
              trailing: ea,
            })),
            (e_[97] = en),
            (e_[98] = ea),
            (e_[99] = eo))
          : (eo = e_[99]),
        e_[100] !== eV || e_[101] !== eW || e_[102] !== e4
          ? ((er =
              eW && eV
                ? (0, n.jsx)(_.kG, {
                    ref: su,
                    edgeRounding: "surface",
                    label: (0, n.jsx)(d.A, { ...eD.d.title }),
                    description: (0, n.jsx)(d.A, { ...eD.d.description }),
                    onClick: () => e4("history"),
                    trailing: (0, n.jsx)(y.uM3, {}),
                  })
                : null),
            (e_[100] = eV),
            (e_[101] = eW),
            (e_[102] = e4),
            (e_[103] = er))
          : (er = e_[103]),
        e_[104] !== eo || e_[105] !== er
          ? ((ec = (0, n.jsxs)(C.X, {
              children: [J, (0, n.jsx)(C.X.Content, { children: (0, n.jsxs)(j.t, { children: [eo, er] }) })],
            })),
            (e_[104] = eo),
            (e_[105] = er),
            (e_[106] = ec))
          : (ec = e_[106]),
        e_[107] !== eQ || e_[108] !== e$ || e_[109] !== e4
          ? ((el = e$
              ? (0, n.jsxs)(C.X, {
                  children: [
                    (0, n.jsx)(C.X.Header, {
                      title: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.loginConnections.title",
                        defaultMessage: "Login connections",
                        description:
                          "Short heading for the Login connections section in Security and login settings. Groups apps and sites the signed-in user has signed in to with ChatGPT; these are login connections, not network connections. No placeholders.",
                      }),
                    }),
                    (0, n.jsx)(C.X.Content, {
                      children: (0, n.jsx)(j.t, {
                        children: (0, n.jsx)(_.kG, {
                          edgeRounding: "surface",
                          label: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.signInWithChatGpt.title",
                            defaultMessage: "Sign in with ChatGPT",
                            description:
                              "Short label for the Sign in with ChatGPT row under Login connections in Security and login settings and the title of the page it opens. Lets signed-in users review apps and sites they have signed in to with ChatGPT and manage their access. ChatGPT is the sign-in provider; no placeholders.",
                          }),
                          description: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.description",
                            defaultMessage:
                              "Review other apps and sites you’ve signed in to with ChatGPT, and manage what they can access",
                            description:
                              "Supporting text beneath Sign in with ChatGPT in Security and login settings and on the page it opens. Tells signed-in users they can review apps and sites they have signed in to with ChatGPT and manage the access they granted. Neutral body copy that may wrap; no placeholders.",
                          }),
                          onClick: () => e4("linked-apps"),
                          trailing: (0, n.jsxs)(n.Fragment, {
                            children: [
                              null == eQ ? null : eQ.items.length + (eQ.third_party_items?.length ?? 0),
                              (0, n.jsx)(y.uM3, {}),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                })
              : null),
            (e_[107] = eQ),
            (e_[108] = e$),
            (e_[109] = e4),
            (e_[110] = el))
          : (el = e_[110]),
        e_[111] !== e4 ? ((ed = () => e4("advanced-protection")), (e_[111] = e4), (e_[112] = ed)) : (ed = e_[112]),
        e_[113] !== eA || e_[114] !== ed
          ? ((eu = (0, n.jsx)(eb, { accountId: eA, onOpenAdvancedProtection: ed })),
            (e_[113] = eA),
            (e_[114] = ed),
            (e_[115] = eu))
          : (eu = e_[115]),
        e_[116] !== eA ? ((ep = (0, n.jsx)(eE, { accountId: eA })), (e_[116] = eA), (e_[117] = ep)) : (ep = e_[117]),
        e_[118] !== W ||
        e_[119] !== z ||
        e_[120] !== $ ||
        e_[121] !== Q ||
        e_[122] !== X ||
        e_[123] !== ec ||
        e_[124] !== el ||
        e_[125] !== eu ||
        e_[126] !== ep
          ? ((eh = (0, n.jsxs)(b.P, { ref: sd, title: K, children: [W, z, null, $, null, Q, X, ec, el, eu, ep] })),
            (e_[118] = W),
            (e_[119] = z),
            (e_[120] = $),
            (e_[121] = Q),
            (e_[122] = X),
            (e_[123] = ec),
            (e_[124] = el),
            (e_[125] = eu),
            (e_[126] = ep),
            (e_[127] = eh))
          : (eh = e_[127]))
      let tt = eh
      if ("advanced-protection" === e1) {
        let e, t, s
        ;(e_[128] !== eA || e_[129] !== eI
          ? ((e = (0, ey.PW)(eI, eA)), (e_[128] = eA), (e_[129] = eI), (e_[130] = e))
          : (e = e_[130]),
          e_[131] !== e4 ? ((t = () => e4(null)), (e_[131] = e4), (e_[132] = t)) : (t = e_[132]),
          e_[133] !== eA || e_[134] !== e6 || e_[135] !== e5 || e_[136] !== e || e_[137] !== t
            ? ((s = (0, n.jsx)(eC, {
                accountId: eA,
                disableConfirmationRequested: e,
                onBack: t,
                onClearDisableConfirmation: e6,
                onRequestDisableConfirmation: e5,
              })),
              (e_[133] = eA),
              (e_[134] = e6),
              (e_[135] = e5),
              (e_[136] = e),
              (e_[137] = t),
              (e_[138] = s))
            : (s = e_[138]),
          (tt = s))
      } else if ("sessions" === e1) {
        let e,
          t,
          s,
          i,
          a = `${eL ? "trusted-devices" : "sessions"}:${eA}:${ej.userId}`
        ;(e_[139] !== eA || e_[140] !== ej.userId || e_[141] !== eP.state
          ? ((e = (0, w.z7)(eP.state, eA, ej.userId)),
            (e_[139] = eA),
            (e_[140] = ej.userId),
            (e_[141] = eP.state),
            (e_[142] = e))
          : (e = e_[142]),
          e_[143] !== eA || e_[144] !== ej.userId || e_[145] !== eP.state
            ? ((t = (0, w.x9)(eP.state, "securitySessionReviewIntent", eA, ej.userId)),
              (e_[143] = eA),
              (e_[144] = ej.userId),
              (e_[145] = eP.state),
              (e_[146] = t))
            : (t = e_[146]),
          e_[147] !== e4 ? ((s = () => e4(null)), (e_[147] = e4), (e_[148] = s)) : (s = e_[148]),
          e_[149] !== eA || e_[150] !== eL || e_[151] !== a || e_[152] !== e || e_[153] !== t || e_[154] !== s
            ? ((i = (0, n.jsx)(
                t2,
                { accountId: eA, includeTrustedDevices: eL, acknowledgeReview: e, recommendationAttempt: t, onBack: s },
                a,
              )),
              (e_[149] = eA),
              (e_[150] = eL),
              (e_[151] = a),
              (e_[152] = e),
              (e_[153] = t),
              (e_[154] = s),
              (e_[155] = i))
            : (i = e_[155]),
          (tt = i))
      } else if ("biometric-factors" === e1) {
        let e
        ;(e_[156] !== tt
          ? ((e = (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(n.Fragment, { children: tt })] })),
            (e_[156] = tt),
            (e_[157] = e))
          : (e = e_[157]),
          (tt = e))
      } else if ("history" === e1) {
        let e, t, s
        ;(e_[158] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(v.y, {})), (e_[158] = e))
          : (e = e_[158]),
          e_[159] !== e4 ? ((t = () => e4(null)), (e_[159] = e4), (e_[160] = t)) : (t = e_[160]),
          e_[161] !== eA || e_[162] !== t
            ? ((s = (0, n.jsx)(l.Suspense, { fallback: e, children: (0, n.jsx)(sn, { accountId: eA, onBack: t }) })),
              (e_[161] = eA),
              (e_[162] = t),
              (e_[163] = s))
            : (s = e_[163]),
          (tt = s))
      } else if ("linked-apps" === e1 && e$) {
        let e, t
        ;(e_[164] !== e4 ? ((e = () => e4(null)), (e_[164] = e4), (e_[165] = e)) : (e = e_[165]),
          e_[166] !== eA || e_[167] !== e
            ? ((t = (0, n.jsx)(ty, { accountId: eA, onBack: e })), (e_[166] = eA), (e_[167] = e), (e_[168] = t))
            : (t = e_[168]),
          (tt = t))
      } else if ("account-pin" === e1 && eZ) {
        let e, t
        ;(e_[169] !== e4 ? ((e = () => e4(null)), (e_[169] = e4), (e_[170] = e)) : (e = e_[170]),
          e_[171] !== eA || e_[172] !== e
            ? ((t = (0, n.jsx)(Y, { accountId: eA, onBack: e })), (e_[171] = eA), (e_[172] = e), (e_[173] = t))
            : (t = e_[173]),
          (tt = t))
      } else if (("passkeys" === e1 || "yubikey" === e1) && eX) {
        let e, t, s
        ;(e_[174] !== e4 || e_[175] !== eY
          ? ((e = eY ? () => e4("yubikey") : void 0), (e_[174] = e4), (e_[175] = eY), (e_[176] = e))
          : (e = e_[176]),
          e_[177] !== e4 ? ((t = () => e4(null)), (e_[177] = e4), (e_[178] = t)) : (t = e_[178]),
          e_[179] !== eA || e_[180] !== e9 || e_[181] !== e2.isPending || e_[182] !== e || e_[183] !== t
            ? ((s = (0, n.jsx)(tF, { accountId: eA, pending: e2.isPending, onAction: e9, onOrder: e, onBack: t })),
              (e_[179] = eA),
              (e_[180] = e9),
              (e_[181] = e2.isPending),
              (e_[182] = e),
              (e_[183] = t),
              (e_[184] = s))
            : (s = e_[184]),
          (tt = s))
      }
      return (
        e_[185] !== eA ||
        e_[186] !== eP.state ||
        e_[187] !== eM ||
        e_[188] !== eI ||
        e_[189] !== eG ||
        e_[190] !== eX ||
        e_[191] !== eY ||
        e_[192] !== e1
          ? ((eg =
              "yubikey" === e1 && eX && eY
                ? (0, n.jsx)(l.Suspense, {
                    fallback: (0, n.jsx)(v.y, {}),
                    children: (0, n.jsx)(si, {
                      accountId: eA,
                      onClose: () => {
                        if ((0, w.Qt)(eP.state)) eM(-1)
                        else {
                          let e = new URLSearchParams(eI)
                          ;(e.set("view", "passkeys"), eG(e, { replace: !0 }))
                        }
                      },
                    }),
                  })
                : null),
            (e_[185] = eA),
            (e_[186] = eP.state),
            (e_[187] = eM),
            (e_[188] = eI),
            (e_[189] = eG),
            (e_[190] = eX),
            (e_[191] = eY),
            (e_[192] = e1),
            (e_[193] = eg))
          : (eg = e_[193]),
        e_[194] !== e2
          ? ((em = e2.isError || "failed" === e2.data ? (0, n.jsx)(ex, { onClose: () => e2.reset() }) : null),
            (e_[194] = e2),
            (e_[195] = em))
          : (em = e_[195]),
        e_[196] !== eA || e_[197] !== eH || e_[198] !== e7 || e_[199] !== eX
          ? ((ef =
              eH && "complete" !== eH.action && (eX || "enable" === eH.action)
                ? (0, n.jsx)(eT, { accountId: eA, action: eH, onClose: e7 })
                : null),
            (e_[196] = eA),
            (e_[197] = eH),
            (e_[198] = e7),
            (e_[199] = eX),
            (e_[200] = ef))
          : (ef = e_[200]),
        e_[201] !== tt || e_[202] !== eg || e_[203] !== em || e_[204] !== ef
          ? ((ew = (0, n.jsxs)(n.Fragment, { children: [tt, eg, em, ef] })),
            (e_[201] = tt),
            (e_[202] = eg),
            (e_[203] = em),
            (e_[204] = ef),
            (e_[205] = ew))
          : (ew = e_[205]),
        ew
      )
    }
    function sr(e) {
      return (0, ey._M)(e)
    }
    function sc() {}
    function sl(e) {
      return e.is_trusted_device && !tJ(e)
    }
    function sd(e) {
      return (0, eO.U)(e, "security_settings_page_viewed")
    }
    function su(e) {
      return (0, eO.U)(e, "security_history_entrypoint_viewed")
    }
  },
  EgSj(e, t, s) {
    s.d(t, { d: () => m })
    var n = s("ABep"),
      i = s("QosV")
    let a = (0, s("iJY0").a)({
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
      body: '<path d="M14.0007 14.3369C15.1031 14.3374 15.9968 15.2315 15.9968 16.334C15.9966 17.14 15.5176 17.8324 14.8298 18.1475V19.833C14.8298 20.2914 14.4582 20.6631 13.9998 20.6631C13.5415 20.663 13.1697 20.2913 13.1697 19.833V18.1465C12.4822 17.8312 12.0039 17.1396 12.0037 16.334C12.0037 15.2313 12.898 14.3369 14.0007 14.3369Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9998 2.66992C17.6796 2.67005 20.6636 5.65318 20.6638 9.33301V9.71777C22.6454 10.0215 24.1637 11.7334 24.1638 13.7998V21.2002C24.1637 23.481 22.3138 25.3301 20.033 25.3301H7.96655C5.68577 25.33 3.83678 23.481 3.83667 21.2002V13.7998C3.83677 11.7332 5.35485 10.0212 7.33667 9.71777V9.33301C7.33685 5.65321 10.32 2.6701 13.9998 2.66992ZM7.96655 11.3301C6.60256 11.3302 5.49693 12.4358 5.49683 13.7998V21.2002C5.49693 22.5642 6.60256 23.6698 7.96655 23.6699H20.033C21.397 23.6699 22.5036 22.5642 22.5037 21.2002V13.7998C22.5036 12.4358 21.397 11.3301 20.033 11.3301H7.96655ZM13.9998 4.33008C11.2367 4.33025 8.997 6.57 8.99683 9.33301V9.66992H19.0037V9.33301C19.0035 6.56997 16.7628 4.33021 13.9998 4.33008Z" fill="currentColor"/>',
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
        b,
        C,
        w,
        _,
        A,
        j,
        k,
        P,
        M,
        I,
        S,
        G,
        T = (0, i.c)(97),
        {
          step: N,
          currentPin: E,
          nextPin: L,
          confirmation: D,
          error: R,
          lockedFor: O,
          isPending: q,
          onCurrentPinChange: U,
          onNextPinChange: H,
          onConfirmationChange: F,
          onClearError: K,
          onLockoutExpired: B,
          onSubmit: V,
          onClose: W,
          onForgotPin: z,
        } = e,
        [Z, Y] = (0, o.useState)(!1),
        $ = "change-current" === N || "unlock" === N,
        Q = "create-confirm" === N || "change-confirm" === N || "reset-confirm" === N,
        X = $ || Q || "create" === N || "change-new" === N || "reset-new" === N,
        J = O > 0 || "locked" === R,
        ee = (0, o.useEffectEvent)(B)
      if (
        (T[0] !== $ || T[1] !== J || T[2] !== O || T[3] !== ee || T[4] !== X
          ? ((t = () => {
              if (!X || !$ || !J) return
              let e = setTimeout(ee, 1e3 * (O || 60))
              return () => clearTimeout(e)
            }),
            (T[0] = $),
            (T[1] = J),
            (T[2] = O),
            (T[3] = ee),
            (T[4] = X),
            (T[5] = t))
          : (t = T[5]),
        T[6] !== $ || T[7] !== J || T[8] !== O || T[9] !== X
          ? ((s = [X, $, J, O]), (T[6] = $), (T[7] = J), (T[8] = O), (T[9] = X), (T[10] = s))
          : (s = T[10]),
        (0, o.useEffect)(t, s),
        !X)
      )
        return null
      if (Z) {
        let e, t, s, i, a, o, c
        return (
          T[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(r.A, {
                id: "lockedChats.pin.closeSetupTitle",
                defaultMessage: "Close PIN setup?",
                description: "Confirmation title when dismissing Account PIN creation or change before it is complete",
              })),
              (t = (0, n.jsx)(r.A, {
                id: "lockedChats.pin.continueSetup",
                defaultMessage: "Continue setup",
                description: "Return to the unfinished Account PIN setup and keep the digits already entered",
              })),
              (s = (0, n.jsx)(r.A, {
                id: "lockedChats.pin.closeSetup",
                defaultMessage: "Close",
                description: "Abandon unfinished Account PIN setup and discard the digits entered",
              })),
              (T[11] = e),
              (T[12] = t),
              (T[13] = s))
            : ((e = T[11]), (t = T[12]), (s = T[13])),
          T[14] === Symbol.for("react.memo_cache_sentinel") ? ((i = () => Y(!1)), (T[14] = i)) : (i = T[14]),
          T[15] !== W
            ? ((a = () => {
                ;(Y(!1), W())
              }),
              (T[15] = W),
              (T[16] = a))
            : (a = T[16]),
          T[17] !== N
            ? ((o =
                "change-new" === N || "change-confirm" === N
                  ? (0, n.jsx)(r.A, {
                      id: "lockedChats.pin.closeChangeDescription",
                      defaultMessage:
                        "If you close setup now, your current PIN will stay active and no changes will be made",
                      description:
                        "Explanation before abandoning an unfinished PIN change; the existing PIN has not yet been replaced",
                    })
                  : (0, n.jsx)(r.A, {
                      id: "lockedChats.pin.closeCreateDescription",
                      defaultMessage: "If you close setup now, your new PIN won’t be saved",
                      description:
                        "Explanation before abandoning PIN creation, including creating a new PIN after the previous PIN was reset",
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
      $ ? (et = E) : Q && (et = D)
      let es = h.L.newPinInput
      $ ? (es = h.L.currentPinInput) : Q && (es = h.L.confirmPinInput)
      let en = h.L.actionFailed
      if (
        ("invalid" === R
          ? (en = h.L.invalid)
          : "mismatch" === R
            ? (en = h.L.mismatch)
            : "incorrect" === R && (en = h.L.incorrect),
        $ && J)
      ) {
        let e
        ;(T[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, {
              id: "lockedChats.pin.blockedTitle",
              defaultMessage: "Too many incorrect attempts",
              description:
                "Title when account PIN verification is temporarily locked after too many incorrect attempts",
            })),
            (T[22] = e))
          : (e = T[22]),
          (m = e))
      } else if ("create" === N) {
        let e
        ;(T[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, {
              id: "lockedChats.pin.createTitle",
              defaultMessage: "Create account PIN",
              description: "Title for choosing the first Account PIN for Locked chats",
            })),
            (T[23] = e))
          : (e = T[23]),
          (m = e))
      } else if (Q) {
        let e
        ;(T[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, {
              id: "lockedChats.pin.confirmTitle",
              defaultMessage: "Confirm PIN",
              description: "Title for repeating a newly chosen Account PIN",
            })),
            (T[24] = e))
          : (e = T[24]),
          (m = e))
      } else if ("unlock" === N) {
        let e
        ;(T[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, { ...h.L.unlockTitle })), (T[25] = e))
          : (e = T[25]),
          (m = e))
      } else if ($) {
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
      if ($ && J) {
        let e,
          t = Math.max(1, Math.ceil(O / 60))
        ;(T[28] !== t
          ? ((e = (0, n.jsx)("span", {
              role: "alert",
              children: (0, n.jsx)(r.A, {
                id: "lockedChats.pin.blockedDescription",
                defaultMessage: "You can try again in {minutes, plural, one {# minute} other {# minutes}}.",
                values: { minutes: t },
                description: "Account PIN verification lockout; minutes are derived from server retry-after status.",
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
                "You’ll use this PIN to access any of your locked chats. Keep this PIN somewhere safe. If you need to reset it later, all your locked chats will be permanently deleted.",
              description:
                "Description above the four-digit field when creating an account PIN. Warn that resetting this PIN permanently deletes every locked chat.",
            })),
            (T[30] = e))
          : (e = T[30]),
          (f = e))
      } else if (!$) {
        let e
        ;(T[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(r.A, {
              id: "lockedChats.pin.purpose",
              defaultMessage: "You’ll use this PIN to access any of your locked chats.",
              description: "Explanation when creating or confirming an Account PIN for Locked chats",
            })),
            (T[31] = e))
          : (e = T[31]),
          (f = e))
      }
      let ei = $ && !J ? "pinEntry" : "narrow"
      ;(T[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { "aria-describedby": void 0 }), (T[32] = y))
        : (y = T[32]),
        T[33] !== $ || T[34] !== q || T[35] !== W
          ? ((x = (e) => {
              e || q || ($ ? W() : Y(!0))
            }),
            (T[33] = $),
            (T[34] = q),
            (T[35] = W),
            (T[36] = x))
          : (x = T[36]))
      let ea = $ ? "codeEntry" : "default"
      ;(T[37] !== V
        ? ((v = (e) => {
            ;(e.preventDefault(), V())
          }),
          (T[37] = V),
          (T[38] = v))
        : (v = T[38]),
        T[39] !== Q || T[40] !== $ || T[41] !== N
          ? ((b = $ || Q || "create" === N ? (0, n.jsx)(u.I, { asset: a }) : void 0),
            (T[39] = Q),
            (T[40] = $),
            (T[41] = N),
            (T[42] = b))
          : (b = T[42]),
        T[43] !== m
          ? ((C = (0, n.jsx)(l.L3, { className: "select-none", children: m })), (T[43] = m), (T[44] = C))
          : (C = T[44]),
        T[45] !== q || T[46] !== f || T[47] !== b || T[48] !== C
          ? ((w = (0, n.jsx)(d.c7, {
              icon: b,
              iconClassName: "self-center",
              iconVariant: "outlinedCircle",
              iconLoading: q,
              subtitle: f,
              subtitleSize: "sm",
              subtitleTone: "secondary",
              title: C,
            })),
            (T[45] = q),
            (T[46] = f),
            (T[47] = b),
            (T[48] = C),
            (T[49] = w))
          : (w = T[49]),
        T[50] !== Q ||
        T[51] !== $ ||
        T[52] !== R ||
        T[53] !== es ||
        T[54] !== et ||
        T[55] !== q ||
        T[56] !== J ||
        T[57] !== K ||
        T[58] !== F ||
        T[59] !== U ||
        T[60] !== H ||
        T[61] !== V ||
        T[62] !== N
          ? ((_ =
              $ && J
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
                          readOnly: q,
                          invalid: null != R,
                          onChange: (e) => {
                            ;(K(), $ ? U(e) : Q ? F(e) : H(e), 4 === e.length && V(e))
                          },
                        },
                        N,
                      ),
                    ],
                  })),
            (T[50] = Q),
            (T[51] = $),
            (T[52] = R),
            (T[53] = es),
            (T[54] = et),
            (T[55] = q),
            (T[56] = J),
            (T[57] = K),
            (T[58] = F),
            (T[59] = U),
            (T[60] = H),
            (T[61] = V),
            (T[62] = N),
            (T[63] = _))
          : (_ = T[63]),
        T[64] !== $ || T[65] !== J || T[66] !== z
          ? ((A =
              $ && J && null != z
                ? (0, n.jsx)(c.$, {
                    className: "self-center",
                    type: "button",
                    color: "dangerOutline",
                    size: "medium",
                    onClick: z,
                    children: (0, n.jsx)(r.A, {
                      id: "lockedChats.pin.reset",
                      defaultMessage: "Reset PIN",
                      description: "Open Account PIN settings to reset a forgotten PIN after a lockout",
                    }),
                  })
                : null),
            (T[64] = $),
            (T[65] = J),
            (T[66] = z),
            (T[67] = A))
          : (A = T[67]),
        T[68] !== $ || T[69] !== R || T[70] !== J || T[71] !== B
          ? ((j =
              $ && J && "failed" === R
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
                        onClick: B,
                        children: (0, n.jsx)(r.A, {
                          id: "settings.chatGpt.security.accountPin.retryStatus",
                          defaultMessage: "Try again",
                          description:
                            "Button shown when rechecking the Account PIN lockout status fails; retries the status check",
                        }),
                      }),
                    ],
                  })
                : null),
            (T[68] = $),
            (T[69] = R),
            (T[70] = J),
            (T[71] = B),
            (T[72] = j))
          : (j = T[72]),
        T[73] !== $ || T[74] !== R || T[75] !== en || T[76] !== J
          ? ((k =
              null == R || ($ && J)
                ? null
                : (0, n.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: (0, n.jsx)(r.A, { ...en }),
                  })),
            (T[73] = $),
            (T[74] = R),
            (T[75] = en),
            (T[76] = J),
            (T[77] = k))
          : (k = T[77]),
        T[78] !== w || T[79] !== _ || T[80] !== A || T[81] !== j || T[82] !== k
          ? ((P = (0, n.jsxs)(d.OO, { className: "gap-4 text-center", children: [w, _, A, j, k] })),
            (T[78] = w),
            (T[79] = _),
            (T[80] = A),
            (T[81] = j),
            (T[82] = k),
            (T[83] = P))
          : (P = T[83]))
      let eo = q || ($ && J)
      return (
        T[84] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, n.jsx)(r.A, { ...h.L.continue })), (T[84] = M))
          : (M = T[84]),
        T[85] !== eo
          ? ((I = (0, n.jsx)("button", {
              type: "submit",
              className: "sr-only",
              tabIndex: -1,
              disabled: eo,
              children: M,
            })),
            (T[85] = eo),
            (T[86] = I))
          : (I = T[86]),
        T[87] !== q || T[88] !== P || T[89] !== I || T[90] !== ea || T[91] !== v
          ? ((S = (0, n.jsxs)(d.R4, { as: "form", variant: ea, "aria-busy": q, onSubmit: v, children: [P, I] })),
            (T[87] = q),
            (T[88] = P),
            (T[89] = I),
            (T[90] = ea),
            (T[91] = v),
            (T[92] = S))
          : (S = T[92]),
        T[93] !== S || T[94] !== ei || T[95] !== x
          ? ((G = (0, n.jsx)(l.lG, {
              open: !0,
              size: ei,
              variant: "form",
              contentProps: y,
              onOpenChange: x,
              children: S,
            })),
            (T[93] = S),
            (T[94] = ei),
            (T[95] = x),
            (T[96] = G))
          : (G = T[96]),
        G
      )
    }
  },
  U4Xt(e, t, s) {
    var n = s("Qgfj")
    let i = (0, n.YK)({
        title: {
          id: "settingsModal.accountPin.title",
          defaultMessage: "Account PIN",
          description: "Title of the Account PIN settings subpage for locked chats. This PIN does not control sign-in.",
        },
        rowDescription: {
          id: "settingsModal.accountPin.rowDescription.access",
          defaultMessage: "Control how you access your locked chats.",
          description: "Account PIN controls access to locked chats, not sign-in or unrelated account information.",
        },
        createPinLabel: {
          id: "settingsModal.accountPin.createPin.label",
          defaultMessage: "Create account PIN",
          description: "Label for creating a PIN to access locked chats when the user has no PIN.",
        },
        createPinDescription: {
          id: "settingsModal.accountPin.createPin.description.new_messages",
          defaultMessage:
            "Create a PIN to lock and hide the chats you choose. Once locked, new messages in that chat won’t contribute to memory.",
          description: "Explanation of selected locked chats and personalization of new messages.",
        },
        createPinButton: {
          id: "settingsModal.accountPin.createPin.button",
          defaultMessage: "Create a PIN",
          description: "Button to start creating an account PIN for locked chats.",
        },
        changePinLabel: {
          id: "settingsModal.accountPin.changePin.label",
          defaultMessage: "Change PIN",
          description: "Label for the Change PIN settings row.",
        },
        changePinButton: {
          id: "settingsModal.accountPin.changePin.button",
          defaultMessage: "Change",
          description: "Button to start changing the current account PIN.",
        },
        resetPinLabel: {
          id: "settingsModal.accountPin.resetPin.label",
          defaultMessage: "Reset PIN",
          description: "Label for the Reset PIN settings row.",
        },
        resetPinDescription: {
          id: "settingsModal.accountPin.resetPin.description",
          defaultMessage: "Only reset your PIN if you forgot your current one.",
          description: "Guidance to reset the Account PIN only when the user has forgotten it.",
        },
        resetPinButton: {
          id: "settingsModal.accountPin.resetPin.button",
          defaultMessage: "Reset",
          description: "Button to begin reauthentication before resetting an account PIN.",
        },
      }),
      a = (0, n.YK)({
        ...i,
        unlockTitle: {
          id: "lockedChats.pin.title",
          defaultMessage: "Enter PIN",
          description: "Dialog title asking for the PIN to access Locked chats",
        },
        currentPinTitle: {
          id: "settingsModal.accountPin.currentPin.title",
          defaultMessage: "Current PIN",
          description: "Title of the current PIN verification step before changing a PIN.",
        },
        createNewPinTitle: {
          id: "settingsModal.accountPin.createNewPin.title",
          defaultMessage: "Create new PIN",
          description: "Title for choosing a new PIN when changing or resetting it.",
        },
        resetWarningTitle: {
          id: "settingsModal.accountPin.resetWarning.title",
          defaultMessage: "Reset your PIN?",
          description: "Title of the destructive PIN reset confirmation after reauthentication.",
        },
        resetWarningDescription: {
          id: "settingsModal.accountPin.resetWarning.description",
          defaultMessage:
            "Resetting your PIN lets you create a new PIN, but deletes all content protected by your previous PIN.",
          description: "Warning that reset permanently deletes chats protected by the prior PIN.",
        },
        resetWarningConfirm: {
          id: "settingsModal.accountPin.resetWarning.confirm",
          defaultMessage: "Reset PIN & Delete",
          description: "Destructive confirmation after a fresh account sign-in for PIN reset.",
        },
        currentPinInput: {
          id: "settings.chatGpt.security.accountPin.currentPinInput",
          defaultMessage: "Current PIN",
          description: "Label for the existing four-digit PIN required before changing it.",
        },
        confirmPinInput: {
          id: "settings.chatGpt.security.accountPin.confirmPinInput",
          defaultMessage: "Confirm new PIN",
          description: "Label for confirming a newly chosen four-digit account PIN.",
        },
        newPinInput: {
          id: "settings.chatGpt.security.accountPin.newPinInput",
          defaultMessage: "New PIN",
          description: "Label for a new four-digit account PIN.",
        },
        invalid: {
          id: "settings.chatGpt.security.accountPin.invalid",
          defaultMessage: "Enter a four-digit PIN",
          description: "Validation when an Account PIN is not exactly four ASCII digits.",
        },
        mismatch: {
          id: "settings.chatGpt.security.accountPin.mismatch",
          defaultMessage: "Those PINs do not match. Try again.",
          description: "Validation when the new Account PIN and confirmation differ.",
        },
        incorrect: {
          id: "settings.chatGpt.security.accountPin.incorrect",
          defaultMessage: "That PIN is incorrect. Try again.",
          description: "Current Account PIN was rejected during verification.",
        },
        actionFailed: {
          id: "settings.chatGpt.security.accountPin.actionFailed",
          defaultMessage: "Locked chats are temporarily unavailable. Try again.",
          description: "A request to create or change the Account PIN failed.",
        },
        createSubmit: {
          id: "settings.chatGpt.security.accountPin.createSubmit",
          defaultMessage: "Create PIN",
          description: "Creates a four-digit Account PIN after confirmation.",
        },
        changeSubmit: {
          id: "settings.chatGpt.security.accountPin.changeSubmit",
          defaultMessage: "Change PIN",
          description: "Changes the Account PIN after verifying the old one.",
        },
        continue: {
          id: "settings.chatGpt.security.accountPin.continue",
          defaultMessage: "Continue",
          description: "Advances a PIN entry step after four numeric digits are entered.",
        },
      })
    s.d(t, {}, { L: a })
  },
  i7nV(e, t, s) {
    var n = s("S2r0"),
      i = s("Ghh3")
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
  FBm3(e, t, s) {
    var n = s("Ghh3"),
      i = s("rvFo")
    let a = new (s("HFSu").lw)({ getAdditionalHeaders: n.Zj })
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
  tzt8(e, t, s) {
    let n = (0, s("Qgfj").YK)({
      title: {
        id: "chatgpt.settings.security.history.title",
        defaultMessage: "Security history",
        description:
          "Short title for the nested Security history screen and its entry row in ChatGPT Settings > Security and login. End users open this surface to review security-related account activity.",
      },
      description: {
        id: "chatgpt.settings.security.history.description",
        defaultMessage: "Review login activity and changes to your security settings.",
        description:
          "One-sentence description shown with the Security history entry and at the top of the nested Security history screen in ChatGPT Settings > Security and login. It explains that the list contains login activity and changes to security settings. This is compact supporting copy with no placeholders.",
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
                      ;(e instanceof i.fk && null != e.responseStatus && (t.http_status = e.responseStatus),
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
                    e instanceof i.fk && null != e.responseStatus && (r.http_status = e.responseStatus),
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
      a = s("jXFy"),
      o = s("fKVQ"),
      r = s("zMV2"),
      c = s("FSc3"),
      l = s("JCLg"),
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
                ? ((e = (0, n.jsx)(h.PPn, {})), (o[0] = e))
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
            b = void 0 === x ? "list" : x,
            C = void 0 !== v && v,
            w = "codex_generated_site" === y.client_app_type,
            _ = "ads" === y.client_app_type
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
            [j, k] = (0, u.useState)(null),
            [P, M] = (0, u.useState)(null),
            I = null != A && P === A,
            S = null != A && j === A && !I
          if (w) {
            let e,
              t = "detail" === b ? l.g : c.t
            ;(f[2] !== t
              ? ((e = (0, n.jsx)(p.I, { className: "shrink-0", asset: t, focusable: "false" })), (f[2] = t), (f[3] = e))
              : (e = f[3]),
              (s = e))
          } else if (_) {
            let e,
              t = "detail" === b ? r.o : o.T
            ;(f[4] !== t
              ? ((e = (0, n.jsx)(p.I, { className: "shrink-0", asset: t, focusable: "false" })), (f[4] = t), (f[5] = e))
              : (e = f[5]),
              (s = e))
          } else {
            let e,
              t,
              i,
              a = "detail" === b ? "text-xl" : "text-sm"
            ;(f[6] !== a ? ((e = (0, d.A)("font-medium text-secondary", a)), (f[6] = a), (f[7] = e)) : (e = f[7]),
              f[8] !== y.name
                ? ((t = Array.from(y.name.trim())[0]?.toUpperCase()), (f[8] = y.name), (f[9] = t))
                : (t = f[9]),
              f[10] !== e || f[11] !== t
                ? ((i = (0, n.jsx)("span", { className: e, children: t })), (f[10] = e), (f[11] = t), (f[12] = i))
                : (i = f[12]),
              (s = i))
          }
          let G = !S && s
          return (
            f[13] !== I || f[14] !== S || f[15] !== A || f[16] !== b
              ? ((a =
                  null == A || I
                    ? null
                    : (0, n.jsx)(
                        "img",
                        {
                          className: (0, d.A)("detail" === b ? "size-10" : "size-6", "object-contain", !S && "hidden"),
                          alt: "",
                          src: A,
                          referrerPolicy: "no-referrer",
                          onLoad: () => {
                            ;(k(A), M(null))
                          },
                          onError: () => M(A),
                        },
                        A,
                      )),
                (f[13] = I),
                (f[14] = S),
                (f[15] = A),
                (f[16] = b),
                (f[17] = a))
              : (a = f[17]),
            f[18] !== C || f[19] !== b || f[20] !== G || f[21] !== a
              ? ((h = (0, n.jsxs)(m, { size: b, borderless: C, children: [G, a] })),
                (f[18] = C),
                (f[19] = b),
                (f[20] = G),
                (f[21] = a),
                (f[22] = h))
              : (h = f[22]),
            h
          )
        },
      },
    )
  },
  ZL1D(e, t, s) {
    var n = s("mBJV"),
      i = s("ASxG"),
      a = s("yGJW")
    n.crf.CHATGPT_SECURITY_RECOMMENDATION_SURFACE_SECURITY_SETTINGS
    let o = i.object({
        recommendationId: i.enum(["add_passkey", "add_sms_backup", "add_email", "review_sessions"]),
        decisionId: i.string().optional(),
        policyVersion: i.string().optional(),
        presentationId: i.uuid(),
        actionAttemptId: i.uuid(),
        position: i.number().int().positive(),
        surface: i.enum(n.crf),
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
            u = (0, i.c)(32),
            {
              title: p,
              subtitle: h,
              actions: g,
              actionsAlignment: m,
              className: f,
              size: y,
              titleGap: x,
              spacing: v,
              subtitlePlacement: b,
              subtitleWrap: C,
            } = e,
            w = void 0 === y ? "default" : y,
            _ = void 0 === v ? "default" : v,
            A = void 0 === b ? "below-title" : b,
            j = void 0 === C ? "balance" : C,
            k = null != p,
            P = null != h,
            M = null != g,
            I = "compact" === w
          u[0] !== I || u[1] !== h || u[2] !== A || u[3] !== j
            ? ((t = h
                ? (0, n.jsx)("div", {
                    className: (0, a.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === j ? "text-balance" : "text-wrap",
                      I ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === A && "w-full",
                    ),
                    children: h,
                  })
                : null),
              (u[0] = I),
              (u[1] = h),
              (u[2] = A),
              (u[3] = j),
              (u[4] = t))
            : (t = u[4])
          let S = t
          if (!k && !P && !M) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(n.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let G = "below-header" === A ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            T = P && "compact" === _ && "pb-2",
            N = P && "compact" !== _ && "pb-3"
          u[6] !== f || u[7] !== P || u[8] !== I || u[9] !== _ || u[10] !== G || u[11] !== T || u[12] !== N
            ? ((s = (0, a.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                G,
                T,
                N,
                !P && (0, a.A)("items-center pb-1.5", "compact" === _ ? "min-h-8" : "min-h-toolbar"),
                P && I && "items-center",
                P && !I && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = P),
              (u[8] = I),
              (u[9] = _),
              (u[10] = G),
              (u[11] = T),
              (u[12] = N),
              (u[13] = s))
            : (s = u[13])
          let E =
            "none" === (void 0 === x ? "default" : x)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== E ? ((o = (0, a.A)("flex min-w-0 flex-1 flex-col", E)), (u[14] = E), (u[15] = o)) : (o = u[15]),
            u[16] !== P || u[17] !== w || u[18] !== p
              ? ((r = p
                  ? (0, n.jsx)("div", {
                      className: (0, a.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === w && "text-sm leading-[18px]",
                        ("large" === w || ("default" === w && P)) && "text-lg",
                        ("base" === w || ("default" === w && !P)) && "text-base",
                      ),
                      children: p,
                    })
                  : null),
                (u[16] = P),
                (u[17] = w),
                (u[18] = p),
                (u[19] = r))
              : (r = u[19]))
          let L = "below-title" === A ? S : null
          ;(u[20] !== o || u[21] !== r || u[22] !== L
            ? ((c = (0, n.jsxs)("div", { className: o, children: [r, L] })),
              (u[20] = o),
              (u[21] = r),
              (u[22] = L),
              (u[23] = c))
            : (c = u[23]),
            u[24] !== g || u[25] !== m
              ? ((l = g
                  ? (0, n.jsx)("div", {
                      className: (0, a.A)("flex items-center gap-2", "end" === m && "self-end"),
                      children: g,
                    })
                  : null),
                (u[24] = g),
                (u[25] = m),
                (u[26] = l))
              : (l = u[26]))
          let D = "below-header" === A ? S : null
          return (
            u[27] !== s || u[28] !== c || u[29] !== l || u[30] !== D
              ? ((d = (0, n.jsxs)("div", { className: s, children: [c, l, D] })),
                (u[27] = s),
                (u[28] = c),
                (u[29] = l),
                (u[30] = D),
                (u[31] = d))
              : (d = u[31]),
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
      .object({
        passkeyEnrollmentCompleted: n.literal(!0).optional(),
        pepperOnboardingPersonalization: n.literal(!0).optional(),
        pepperOnboardingAccountId: n.string().optional(),
        returnToPreviousHistoryEntry: n.literal(!0).optional(),
        securitySubviewHasParent: n.literal(!0).optional(),
        securitySessionReviewIntent: n
          .object({ accountId: n.string(), userId: n.string(), recommendationAttempt: i.Ce.optional().catch(void 0) })
          .optional(),
        securityAddEmailIntent: n
          .object({ accountId: n.string(), userId: n.string(), recommendationAttempt: i.Ce.optional().catch(void 0) })
          .optional(),
        workspaceRoot: n.string().min(1).nullable().optional(),
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
  uXP9(e, t, s) {
    let n = (0, s("iJY0").a)({
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
  fKVQ(e, t, s) {
    let n = (0, s("iJY0").a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9507 2.51071C16.6106 1.89607 18.3753 3.12451 18.3755 4.8945V13.9375C18.3755 15.6723 16.6756 16.8972 15.0298 16.3486L12.1255 15.3799V15.417C12.1254 16.2155 11.8831 16.9743 11.3364 17.5371C10.7856 18.104 10.0195 18.3749 9.1665 18.375C8.31369 18.3749 7.54831 18.1039 6.99756 17.5371C6.45082 16.9743 6.20855 16.2156 6.2085 15.417V13.4101C6.13435 13.3877 6.05753 13.375 5.97998 13.375H3.75049C2.34676 13.375 1.2085 12.2367 1.2085 10.833V8.33298C1.20882 6.92952 2.34696 5.79196 3.75049 5.79196H5.95166C6.04536 5.79193 6.1382 5.77467 6.22607 5.74216L14.9507 2.51071ZM7.9585 15.417C7.95854 15.8678 8.09108 16.151 8.25244 16.3174C8.40993 16.4794 8.6866 16.6249 9.1665 16.625C9.64666 16.6249 9.92307 16.4794 10.0806 16.3174C10.2421 16.1511 10.3754 15.8681 10.3755 15.417V14.7968L7.9585 13.9912V15.417ZM16.6255 4.8945C16.6253 4.34332 16.075 3.96092 15.5581 4.15231L6.92236 7.35055V11.8017L15.5835 14.6884C16.096 14.8591 16.6255 14.4777 16.6255 13.9375V4.8945ZM3.75049 7.54196C3.31346 7.54196 2.95882 7.89602 2.9585 8.33298V10.833C2.9585 11.2702 3.31326 11.625 3.75049 11.625H5.17236V7.54196H3.75049Z" fill="currentColor"/>',
    })
    s.d(t, {}, { T: n })
  },
  zMV2(e, t, s) {
    let n = (0, s("iJY0").a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9731 4.15811C26.531 3.21084 29.2502 5.10338 29.2505 7.83096V22.2997C29.2505 24.973 26.6313 26.8608 24.0952 26.0155L19.2505 24.4003V24.6669C19.2505 25.9151 18.8716 27.0884 18.0298 27.955C17.1822 28.8273 15.9992 29.2499 14.6665 29.2499C13.3337 29.2498 12.1508 28.8274 11.3032 27.955C10.4614 27.0884 10.0835 25.9151 10.0835 24.6669V21.3446L10.0151 21.3222C9.87096 21.2742 9.71983 21.25 9.56787 21.2499H6.00049C3.83737 21.2499 2.0835 19.496 2.0835 17.3329V13.3329C2.08377 11.17 3.83754 9.4169 6.00049 9.4169H9.52197C9.68991 9.4169 9.85667 9.38636 10.0142 9.32803L23.9731 4.15811ZM12.5835 24.6669C12.5835 25.4187 12.8057 25.9127 13.0972 26.2128C13.3829 26.5067 13.8666 26.7498 14.6665 26.7499C15.4668 26.7499 15.9511 26.5068 16.2368 26.2128C16.5283 25.9127 16.7505 25.4187 16.7505 24.6669V23.5673L12.5835 22.1776V24.6669ZM26.7505 7.83096C26.7502 6.84456 25.7664 6.16025 24.8413 6.50283L11.0835 11.5976V19.0429L24.8853 23.6444C25.8026 23.9502 26.7505 23.2667 26.7505 22.2997V7.83096ZM6.00049 11.9169C5.21826 11.9169 4.58377 12.5507 4.5835 13.3329V17.3329C4.5835 18.1153 5.21808 18.7499 6.00049 18.7499H8.5835V11.9169H6.00049Z" fill="currentColor"/>',
    })
    s.d(t, {}, { o: n })
  },
  Tpyu(e, t, s) {
    let n = (0, s("iJY0").a)({
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
  m4Ej(e, t, s) {
    let n = (0, s("iJY0").a)({
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
    s.d(t, {}, { i: n })
  },
  omJR(e, t, s) {
    let n = (0, s("iJY0").a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.50578C13.7344 6.50583 15.1406 7.91196 15.1406 9.64641V9.87981C15.9757 10.175 16.5742 10.97 16.5742 11.9062V14.8427C16.5742 16.03 15.6121 16.9929 14.4248 16.9931H9.5752C8.3879 16.993 7.4248 16.03 7.4248 14.8427V11.9062C7.4248 10.97 8.02419 10.175 8.85938 9.87981V9.64641C8.85938 7.91193 10.2655 6.50578 12 6.50578ZM9.5752 11.2558C9.21632 11.2559 8.9248 11.5473 8.9248 11.9062V14.8427C8.9248 15.2016 9.21632 15.493 9.5752 15.4931H14.4248C14.7837 15.4929 15.0742 15.2016 15.0742 14.8427V11.9062C15.0742 11.5473 14.7837 11.2559 14.4248 11.2558H9.5752ZM12 8.00578C11.094 8.00578 10.3594 8.74036 10.3594 9.64641V9.75578H13.6406V9.64641C13.6406 8.74039 12.906 8.00583 12 8.00578Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8994 1.73625C11.6019 1.42907 12.4011 1.42905 13.1035 1.73625L19.0947 4.35735C20.0957 4.79526 20.7431 5.78435 20.7432 6.87688V12.5732C20.7431 15.2661 19.7955 17.3662 18.2754 18.9765C16.7718 20.5691 14.7381 21.6519 12.5938 22.3993L12.5879 22.4023C12.2122 22.5296 11.8044 22.5242 11.4316 22.3896C9.28248 21.6473 7.24298 20.5689 5.73438 18.9784C4.20876 17.3699 3.25693 15.2689 3.25684 12.5732V6.87688C3.25697 5.78427 3.90419 4.79512 4.90527 4.35735L10.8994 1.73625ZM12.5029 3.11027C12.1837 2.9706 11.8203 2.97072 11.501 3.11027L5.50586 5.73235C5.05105 5.93137 4.75697 6.38042 4.75684 6.87688V12.5732C4.75693 14.877 5.55553 16.6106 6.82227 17.9462C8.02583 19.2152 9.67905 20.1518 11.5459 20.8388L11.9219 20.9726L11.9297 20.9755L11.9385 20.9784C11.9916 20.9982 12.0497 20.999 12.1035 20.9814C14.1175 20.2789 15.9059 19.3015 17.1846 17.9472C18.4472 16.6098 19.2431 14.8758 19.2432 12.5732V6.87688C19.2431 6.38031 18.9491 5.93042 18.4941 5.73137L12.5029 3.11027Z" fill="currentColor"/>',
    })
    s.d(t, {}, { p: n })
  },
  IDuz(e, t, s) {
    let n = (0, s("iJY0").a)({
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
      body: '<path d="M8.72534 3.79395C9.01499 3.79425 9.24969 4.02963 9.24976 4.31934C9.24976 4.6091 9.01503 4.84442 8.72534 4.84473H7.34253C7.05258 4.84473 6.81714 4.60929 6.81714 4.31934C6.8172 4.02944 7.05262 3.79395 7.34253 3.79395H8.72534Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.93335 1.47461C11.254 1.47464 12.3247 2.54556 12.325 3.86621V12.1338C12.3247 13.4544 11.254 14.5254 9.93335 14.5254H6.06616C4.74564 14.5251 3.67481 13.4543 3.67456 12.1338V3.86621C3.67481 2.54569 4.74564 1.47486 6.06616 1.47461H9.93335ZM6.06616 2.52539C5.32554 2.52564 4.72559 3.12559 4.72534 3.86621V12.1338C4.72559 12.8744 5.32554 13.4744 6.06616 13.4746H9.93335C10.6741 13.4746 11.2749 12.8745 11.2751 12.1338V3.86621C11.2749 3.12546 10.6741 2.52543 9.93335 2.52539H6.06616Z" fill="currentColor"/>',
    })
    s.d(t, {}, { f: n })
  },
}
//# sourceMappingURL=448053.2f34778a25.js.map
