export const __rspack_esm_ids = [381822]
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
      b = "1014047933",
      v = (0, i.vU)(g.u, (e) => ({
        queryKey: ["usage-limits-page-configs", e],
        queryFn: ({ signal: e }) => c.Request.safeGet("/pageConfigs/usage_limits", { signal: e }),
        staleTime: 3e4,
      })),
      w = (0, i.vU)(g.u, ({ accountId: e, userId: t }) => ({
        queryKey: ["student-codex-credit-enrollment", e, t],
        queryFn: ({ signal: e }) =>
          c.Request.safePost("/students/refresh_enrollment_status", {
            requestBody: { campaign_id: "student_codex_credits" },
            signal: e,
          }),
        staleTime: 6e4,
        retry: !1,
      }))
    function C(e) {
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
            A,
            _,
            j,
            k,
            P = (0, n.c)(30),
            { accountId: M, userId: S, authMethod: G, isLoading: I } = (0, o.As)(),
            T = (0, i.Ul)(null),
            N = "chatgpt" === G,
            E = (0, m.AS)(),
            L = (0, m.Zj)(x),
            D = (0, m.DR)(x),
            R = (0, m.XR)(),
            { data: O, isLoading: q, hasEverErrored: F } = (0, l.YL)(),
            { data: U, isLoading: B } = (0, r.U)(),
            H =
              N &&
              O?.id === M &&
              O?.structure === "workspace" &&
              "account-owner" === O.account_user_role &&
              (0, f.Hw)(O.plan_type),
            K = N && !R && (0, p.b0)({ accountId: M, currentAccount: O, statsigClient: E }),
            W = O?.plan_type ?? (!q || F ? U?.plan : void 0),
            z = N && (0, f.Hw)(W),
            V = (0, m.Zj)(!!z && b),
            $ = (0, m.DR)(z ? b : x)
          P[0] !== W ? ((s = C(W)), (P[0] = W), (P[1] = s)) : (s = P[1])
          let Z = s,
            Q = (0, f.uz)(W),
            Y = !!N && !!Z && !R && (0, h.fV)(E, W),
            X = O?.structure === "personal" && O.id === M
          P[2] !== M || P[3] !== O?.id || P[4] !== O?.plan_type || P[5] !== N || P[6] !== X
            ? ((c = !1), (P[2] = M), (P[3] = O?.id), (P[4] = O?.plan_type), (P[5] = N), (P[6] = X), (P[7] = c))
            : (c = P[7])
          let J = c
          P[8] !== J ? ((g = { enabled: J }), (P[8] = J), (P[9] = g)) : (g = P[9])
          let { data: ee, isLoading: et } = (0, i._U)(v, M ?? null, g),
            es = N && ((0, d.IH)(W) || Y),
            en = M ?? null,
            ei = S ?? null
          ;(P[10] !== en || P[11] !== ei
            ? ((y = { accountId: en, userId: ei }), (P[10] = en), (P[11] = ei), (P[12] = y))
            : (y = P[12]),
            !1 !== P[13] ? ((A = { enabled: !1 }), (P[13] = !1), (P[14] = A)) : (A = P[14]))
          let { data: ea, isPending: eo } = (0, i._U)(w, y, A),
            er = N && X && !es
          P[15] !== er ? ((_ = { enabled: er }), (P[15] = er), (P[16] = _)) : (_ = P[16])
          let { data: ec, isLoading: el } = (0, u.q7)(_),
            [ed, eu] = (0, a.useState)(null),
            ep = er && ec?.isEnabled === !0,
            eh = "usage" === t && er && (ep || ed === M) ? M : null
          ed !== eh && eu(eh)
          let eg = ep || null != eh,
            em = N && Q && L,
            ef = N && !R && !("isNoop" in E),
            ey = z && !R && V,
            ex = N && q && !F,
            eb = N && Z && R,
            ev = N && Q && (R || D)
          P[17] !== N || P[18] !== Z || P[19] !== R || P[20] !== W
            ? ((j = N && (Z || (0, f.Hw)(W)) && R), (P[17] = N), (P[18] = Z), (P[19] = R), (P[20] = W), (P[21] = j))
            : (j = P[21])
          let ew = j,
            eC = z && (R || $),
            eA = (function ({
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
                g = h && C(i) && a,
                m = h && ((0, d.IH)(i) || g || (n && o)),
                y = C(i),
                x = (0, f.uz)(i),
                b = m || (h && (0, f.Hw)(i) && (u || p)) || (h && ((y && t) || (n && s)))
              return {
                canManageCreditSettings: m,
                canViewCreditSettings: b,
                isUsageSettingsVisible:
                  b || (h && y) || (h && (y || (0, f.Hw)(i)) && c) || (h && (0, f.Hw)(i) && l) || (h && x && r),
              }
            })({
              authMethod: G,
              hasCreditBalance: void 0 !== e && e,
              hasEnabledAutoReload: eg,
              isPersonalAccount: X,
              plan: W,
              isFreeOrGoCreditPurchaseEnabled: Y,
              hasStudentCreditAccess: !1,
              isEnterpriseUsageSettingsEnabled: em,
              isConsumerUsageAnalyticsEnabled: ef,
              isBusinessUsageDashboardEnabled: ey,
              canPurchaseBusinessCredits: K,
              isBusinessWorkspaceOwner: H,
            }),
            e_ = !0 === T || eA.isUsageSettingsVisible || (J && ee?.show_usage_tab === !0),
            ej = eg ? ec : void 0,
            ek = I || (N && B) || ex || eb || ev || ew || eC || (J && et) || (er && el && !e_)
          return (
            P[22] !== K || P[23] !== H || P[24] !== e_ || P[25] !== W || P[26] !== ej || P[27] !== ek || P[28] !== eA
              ? ((k = {
                  autoReloadSettings: ej,
                  ...eA,
                  canPurchaseBusinessCredits: K,
                  isBusinessWorkspaceOwner: H,
                  isUsageSettingsVisible: e_,
                  isUsageSettingsAccessLoading: ek,
                  plan: W,
                }),
                (P[22] = K),
                (P[23] = H),
                (P[24] = e_),
                (P[25] = W),
                (P[26] = ej),
                (P[27] = ek),
                (P[28] = eA),
                (P[29] = k))
              : (k = P[29]),
            k
          )
        },
        t$: v,
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
  CaJA(e, t, s) {
    let n = new Set((0, s("jOwC").X)())
    s.d(
      t,
      {},
      {
        Q: function (...e) {
          return [...new Set(e.flat())].filter((e) => "string" == typeof e && n.has(e))
        },
      },
    )
  },
  i1sR(e, t, s) {
    s.d(t, { ChatGptSecuritySettings: () => si })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("irkb"),
      o = s("T0Rc"),
      r = s("xSOA"),
      c = s("zTeN"),
      l = s("zd8w"),
      d = s("oyxz"),
      u = s("HZfM"),
      p = s("qhRx"),
      h = s("EOo5"),
      g = s("YJm0"),
      m = s("g2p6"),
      f = s("OAko"),
      y = s("GO7r"),
      x = s("Bbed"),
      b = s("RNul"),
      v = s("jxU8"),
      w = s("BSnr"),
      C = s("b8kl"),
      A = s("AWNZ"),
      _ = s("QyE3"),
      j = s("ZEx5"),
      k = s("hZax"),
      P = s("rvFo"),
      M = s("SPnB"),
      S = s("Ghh3"),
      G = s("CtUD"),
      I = s("gyrn"),
      T = s("QmkR"),
      N = s("OWtl"),
      E = s("eShZ"),
      L = s("ygO2"),
      D = s("ZtSy"),
      R = s("ReGc"),
      O = s("toKG"),
      q = s("U4Xt"),
      F = s("LLN1")
    function U(e) {
      let t,
        s,
        a,
        o,
        r,
        c = (0, i.c)(19),
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
          nativeResetAccountCheck: b,
          onCancelNativeReset: v,
        } = e
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
      c[2] !== u || c[3] !== f || c[4] !== g || c[5] !== h || c[6] !== m || c[7] !== p || c[8] !== l
        ? ((s =
            null == l || u
              ? (0, n.jsx)(F.mK, { isError: u, onRetry: p })
              : (0, n.jsx)(j.t, {
                  children: l.has_pin
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(A.ic, {
                            label: (0, n.jsx)(d.A, { ...q.L.changePinLabel }),
                            control: (e) =>
                              (0, n.jsx)(L.$, {
                                ...e,
                                size: "toolbar",
                                color: "secondary",
                                onClick: g,
                                children: (0, n.jsx)(d.A, { ...q.L.changePinButton }),
                              }),
                          }),
                          (0, n.jsx)(A.ic, {
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
                      })
                    : (0, n.jsx)(A.ic, {
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
                })),
          (c[2] = u),
          (c[3] = f),
          (c[4] = g),
          (c[5] = h),
          (c[6] = m),
          (c[7] = p),
          (c[8] = l),
          (c[9] = s))
        : (s = c[9])
      let C = x ? null : w
      return (
        c[10] !== b || c[11] !== v
          ? ((a = b
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
                        (0, n.jsx)(B, {}),
                        (0, n.jsx)(L.$, {
                          size: "toolbar",
                          color: "ghost",
                          onClick: v,
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
            (c[10] = b),
            (c[11] = v),
            (c[12] = a))
          : (a = c[12]),
        c[13] !== a ? ((o = (0, n.jsx)(n.Fragment, { children: a })), (c[13] = a), (c[14] = o)) : (o = c[14]),
        c[15] !== s || c[16] !== C || c[17] !== o
          ? ((r = (0, n.jsxs)(n.Fragment, { children: [s, C, o, null] })),
            (c[15] = s),
            (c[16] = C),
            (c[17] = o),
            (c[18] = r))
          : (r = c[18]),
        r
      )
    }
    function B() {
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
    var H = s("J7hs"),
      K = s("i7nV"),
      W = s("KG2G")
    let z = /^[0-9]{4}$/,
      V = new WeakMap()
    function $(e) {
      return "invalid_pin" === e.errorCode || "pin_locked" === e.errorCode
    }
    function Z(e) {
      let t,
        r,
        p,
        g,
        m,
        f,
        y,
        x,
        b,
        v,
        w,
        C,
        A,
        _,
        j,
        k,
        L,
        D,
        R,
        O,
        B,
        Z,
        Q,
        Y,
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
        el = (0, i.c)(152),
        { accountId: ed, onBack: eu } = e,
        ep = (0, c.gh)(N.u),
        eh = (0, h.As)().userId,
        [eg, em] = (0, u.ok)(),
        ef = eg.get(W.Aj),
        ey = (0, a.jE)()
      el[0] !== ed ? ((t = (0, K.v)(ed)), (el[0] = ed), (el[1] = t)) : (t = el[1])
      let ex = t,
        eb = ex.queryKey
      el[2] !== ex
        ? ((r = {
            ...ex,
            staleTime: P.D.ONE_MINUTE,
            refetchOnWindowFocus: "always",
            refetchOnMount: "always",
            retry: !1,
          }),
          (el[2] = ex),
          (el[3] = r))
        : (r = el[3])
      let { data: ev, isError: ew, refetch: eC } = (0, o.I)(r)
      el[4] !== ed || el[5] !== ey
        ? ((p = function () {
            return V.get(ey)?.get(ed) ?? 0
          }),
          (el[4] = ed),
          (el[5] = ey),
          (el[6] = p))
        : (p = el[6])
      let eA = p
      el[7] !== ed || el[8] !== ey || el[9] !== ep
        ? ((g = function () {
            ep.get(M.chatGptAuthenticatedAccountId$) === ed && (0, I.L7)(ep)
            let e = V.get(ey) ?? new Map()
            ;(e.set(ed, (e.get(ed) ?? 0) + 1), V.set(ey, e))
          }),
          (el[7] = ed),
          (el[8] = ey),
          (el[9] = ep),
          (el[10] = g))
        : (g = el[10])
      let e_ = g,
        [ej, ek] = (0, l.useState)(null),
        [eP, eM] = (0, l.useState)(null),
        [eS, eG] = (0, l.useState)(""),
        [eI, eT] = (0, l.useState)(""),
        [eN, eE] = (0, l.useState)(""),
        [eL, eD] = (0, l.useState)(null),
        [eR, eO] = (0, l.useState)(null),
        [eq, eF] = (0, l.useState)(!1),
        [eU, eB] = (0, l.useState)(!1),
        [eH, eK] = (0, l.useState)(!1),
        eW = (0, l.useRef)(null),
        ez = ed + ":" + (eh ?? ""),
        eV = (0, l.useRef)(ez),
        e$ = (0, l.useRef)(0),
        eZ = (0, l.useRef)(null)
      ;(el[11] !== ez
        ? ((m = () => (
            (eV.current = ez),
            () => {
              ;((eV.current = null), (e$.current = e$.current + 1), (eZ.current = null))
            }
          )),
          (f = [ez]),
          (el[11] = ez),
          (el[12] = m),
          (el[13] = f))
        : ((m = el[12]), (f = el[13])),
        (0, l.useEffect)(m, f),
        el[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = function (e) {
              return eV.current === e.identity && e$.current === e.generation
            }),
            (el[14] = y))
          : (y = el[14]))
      let eQ = y
      el[15] !== ez
        ? ((x = function (e) {
            if (null != eZ.current && eQ(eZ.current)) return null
            let t = { kind: e, identity: ez, generation: e$.current }
            return ((eZ.current = t), eM(t), t)
          }),
          (el[15] = ez),
          (el[16] = x))
        : (x = el[16])
      let eY = x
      el[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (e) {
            eZ.current === e && ((eZ.current = null), eQ(e) && eM(null))
          }),
          (el[17] = b))
        : (b = el[17])
      let eX = b
      el[18] !== ef || el[19] !== em
        ? ((v = function () {
            ;((e$.current = e$.current + 1),
              (eZ.current = null),
              null != eW.current && (eW.current.promise = null),
              ek(null),
              eM(null),
              eG(""),
              eT(""),
              eE(""),
              eO(null),
              eF(!1),
              eB(!1),
              eD(null),
              eK(!1),
              null != ef && em((e) => (0, W.bZ)(e, ef), { replace: !0 }))
          }),
          (el[18] = ef),
          (el[19] = em),
          (el[20] = v))
        : (v = el[20])
      let eJ = v
      el[21] !== eJ
        ? ((w = () => {
            new URLSearchParams(window.location.search).has(W.Aj) || eJ()
          }),
          (el[21] = eJ),
          (el[22] = w))
        : (w = el[22])
      let e1 = (0, l.useEffectEvent)(w)
      ;(el[23] !== ef || el[24] !== e1 ? ((C = () => {}), (el[23] = ef), (el[24] = e1), (el[25] = C)) : (C = el[25]),
        el[26] !== ef || el[27] !== ez ? ((A = [ef, ez]), (el[26] = ef), (el[27] = ez), (el[28] = A)) : (A = el[28]),
        (0, l.useEffect)(C, A),
        el[29] !== eC || el[30] !== ep
          ? ((_ = function (e) {
              eG("")
              let t = e instanceof E.fk ? e.errorCode : null
              "invalid_pin" === t || "pin_locked" === t
                ? ((0, G.J)(ep, "invalid_pin" === t ? "WRONG_PIN" : "LOCKOUT"),
                  eD("invalid_pin" === t ? "incorrect" : "locked"),
                  eC())
                : ((0, G.J)(ep, "FAILURE"), eD("failed"))
            }),
            (el[29] = eC),
            (el[30] = ep),
            (el[31] = _))
          : (_ = el[31]))
      let e0 = _
      el[32] !== ey || el[33] !== eb
        ? ((j = function (e, t) {
            ;(ey.setQueryData(eb, (s) => (t?.has_pin === e ? t : null == s ? { has_pin: e } : { ...s, has_pin: e })),
              ey.invalidateQueries({ queryKey: eb }))
          }),
          (el[32] = ey),
          (el[33] = eb),
          (el[34] = j))
        : (j = el[34])
      let e2 = j
      el[35] !== ed ||
      el[36] !== eJ ||
      el[37] !== ey ||
      el[38] !== e_ ||
      el[39] !== e2 ||
      el[40] !== ep ||
      el[41] !== eY ||
      el[42] !== eb ||
      el[43] !== ej
        ? ((k = async function (e, t) {
            let s = eY("create")
            if (null != s) {
              try {
                let n = await S.Request.safePost("/locked_chats/unlock", {
                  additionalHeaders: { "ChatGPT-Account-ID": ed },
                  requestBody: { pin: e, pin_confirmation: t },
                })
                ;("create-confirm" === ej && (0, G.J)(ep, "SETUP_SUCCEEDED"),
                  e_(),
                  eQ(s) ? (eJ(), e2(!0, n)) : ey.invalidateQueries({ queryKey: eb }))
              } catch {
                eQ(s) && ((0, G.J)(ep, "FAILURE"), eE(""), eD("failed"))
              }
              eX(s)
            }
          }),
          (el[35] = ed),
          (el[36] = eJ),
          (el[37] = ey),
          (el[38] = e_),
          (el[39] = e2),
          (el[40] = ep),
          (el[41] = eY),
          (el[42] = eb),
          (el[43] = ej),
          (el[44] = k))
        : (k = el[44])
      let e3 = k
      el[45] !== ed || el[46] !== e0 || el[47] !== eY
        ? ((L = async function (e) {
            let t = eY("verify")
            if (null != t) {
              try {
                ;(await S.Request.safePost("/locked_chats/unlock", {
                  additionalHeaders: { "ChatGPT-Account-ID": ed },
                  requestBody: { pin: e },
                  isExpectedError: $,
                }),
                  eQ(t) && (eD(null), ek("change-new")))
              } catch (e) {
                eQ(t) && e0(e)
              }
              eX(t)
            }
          }),
          (el[45] = ed),
          (el[46] = e0),
          (el[47] = eY),
          (el[48] = L))
        : (L = el[48])
      let e4 = L
      el[49] !== ed ||
      el[50] !== eJ ||
      el[51] !== e0 ||
      el[52] !== ey ||
      el[53] !== e_ ||
      el[54] !== e2 ||
      el[55] !== ep ||
      el[56] !== eY ||
      el[57] !== eb
        ? ((D = async function (e, t) {
            let s = eY("change")
            if (null != s) {
              try {
                let n = await S.Request.safePost("/locked_chats/pin/change", {
                  additionalHeaders: { "ChatGPT-Account-ID": ed },
                  requestBody: { current_pin: e, new_pin: t },
                  isExpectedError: $,
                })
                ;((0, G.J)(ep, "CHANGE_PIN_SUCCEEDED"),
                  e_(),
                  eQ(s) ? (eJ(), e2(!0, n)) : ey.invalidateQueries({ queryKey: eb }))
              } catch (e) {
                eQ(s) && (eT(""), eE(""), ek("change-current"), e0(e))
              }
              eX(s)
            }
          }),
          (el[49] = ed),
          (el[50] = eJ),
          (el[51] = e0),
          (el[52] = ey),
          (el[53] = e_),
          (el[54] = e2),
          (el[55] = ep),
          (el[56] = eY),
          (el[57] = eb),
          (el[58] = D))
        : (D = el[58])
      let e5 = D
      el[59] !== ed || el[60] !== eY || el[61] !== eh
        ? ((R = async function () {
            if (null == eh) return void eF(!0)
            let e = eY("challenge")
            if (null != e) {
              try {
                let { reauth_challenge: t } = await S.Request.safePost("/locked_chats/pin/reset/challenge", {
                  additionalHeaders: { "ChatGPT-Account-ID": ed },
                })
                if (eQ(e)) {
                  let { beginAccountPinResetReauth: n } = await (async function () {
                    return s.e(616432).then(s.bind(s, "HarU"))
                  })()
                  eQ(e) &&
                    !(await n({ accountId: ed, userId: eh, challenge: t, isCurrent: () => eQ(e) })) &&
                    eQ(e) &&
                    eF(!0)
                }
              } catch {
                eQ(e) && eF(!0)
              }
              eX(e)
            }
          }),
          (el[59] = ed),
          (el[60] = eY),
          (el[61] = eh),
          (el[62] = R))
        : (R = el[62])
      let e6 = R
      el[63] !== ed ||
      el[64] !== eJ ||
      el[65] !== eA ||
      el[66] !== ey ||
      el[67] !== e_ ||
      el[68] !== e2 ||
      el[69] !== ep ||
      el[70] !== eY ||
      el[71] !== eb
        ? ((O = async function (e) {
            let t = eY("reset")
            if (null == t) return
            let s = eA()
            try {
              let n,
                i = await S.Request.safePost("/locked_chats/pin/reset", {
                  additionalHeaders: { "ChatGPT-Account-ID": ed, "x-openai-locked-chats-pin-reset-challenge": e },
                })
              ;((0, G.J)(ep, "RESET_SUCCEEDED"), null != i.project_id && (0, T.tA)(ep, ed, i.project_id))
              let a = eA() === s
              if (!a) {
                let e = eA()
                try {
                  let t = await S.Request.safeGet("/locked_chats/status", {
                    additionalHeaders: { "ChatGPT-Account-ID": ed },
                  })
                  eA() === e && (n = t)
                } catch {}
              }
              let o = a || n?.has_pin === !1
              ;(o
                ? (e_(), e2(!1, n ?? i))
                : (null != n && ey.setQueryData(eb, n), ey.invalidateQueries({ queryKey: eb })),
                eQ(t) && (eJ(), o && ek("reset-new")))
            } catch {
              eQ(t) && ((0, G.J)(ep, "FAILURE"), eO(null), eB(!0))
            }
            eX(t)
          }),
          (el[63] = ed),
          (el[64] = eJ),
          (el[65] = eA),
          (el[66] = ey),
          (el[67] = e_),
          (el[68] = e2),
          (el[69] = ep),
          (el[70] = eY),
          (el[71] = eb),
          (el[72] = O))
        : (O = el[72])
      let e9 = O
      ;(el[73] !== ed || el[74] !== ef || el[75] !== ez || el[76] !== em || el[77] !== eh
        ? ((B = () => {}),
          (Z = [ed, ef, ez, em, eh]),
          (el[73] = ed),
          (el[74] = ef),
          (el[75] = ez),
          (el[76] = em),
          (el[77] = eh),
          (el[78] = B),
          (el[79] = Z))
        : ((B = el[78]), (Z = el[79])),
        (0, l.useEffect)(B, Z))
      let e7 = eP?.identity === ez ? eP.kind : null,
        e8 = null != e7 && "challenge" !== e7,
        te = ev?.pin_lockout_retry_after_seconds ?? 0,
        tt = te > 0 || "locked" === eL,
        ts = "change-current" === ej,
        tn = "create" === ej || "change-new" === ej || "reset-new" === ej,
        ti = "create-confirm" === ej || "change-confirm" === ej || "reset-confirm" === ej
      ;(el[80] !== eN || el[81] !== ti || el[82] !== eS || el[83] !== ts || el[84] !== eI
        ? ((Q = eI),
          ts ? (Q = eS) : ti && (Q = eN),
          (el[80] = eN),
          (el[81] = ti),
          (el[82] = eS),
          (el[83] = ts),
          (el[84] = eI),
          (el[85] = Q))
        : (Q = el[85]),
        el[86] !== e5 ||
        el[87] !== ti ||
        el[88] !== e3 ||
        el[89] !== eS ||
        el[90] !== ts ||
        el[91] !== tn ||
        el[92] !== Q ||
        el[93] !== e8 ||
        el[94] !== tt ||
        el[95] !== eI ||
        el[96] !== ej ||
        el[97] !== e4
          ? ((Y = function (e) {
              let t = void 0 === e ? Q : e
              if (!e8 && (!tt || !ts)) {
                if (!z.test(t)) return void eD("invalid")
                ;(eD(null),
                  ts
                    ? e4(t)
                    : tn
                      ? (eT(t),
                        eE(""),
                        "create" === ej
                          ? ek("create-confirm")
                          : "change-new" === ej
                            ? ek("change-confirm")
                            : ek("reset-confirm"))
                      : ti && (t !== eI ? (eE(""), eD("mismatch")) : "change-confirm" === ej ? e5(eS, eI) : e3(eI, t)))
              }
            }),
            (el[86] = e5),
            (el[87] = ti),
            (el[88] = e3),
            (el[89] = eS),
            (el[90] = ts),
            (el[91] = tn),
            (el[92] = Q),
            (el[93] = e8),
            (el[94] = tt),
            (el[95] = eI),
            (el[96] = ej),
            (el[97] = e4),
            (el[98] = Y))
          : (Y = el[98]))
      let ta = Y
      ;(el[99] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = (0, n.jsx)(d.A, { ...q.L.title })),
          (J = (0, n.jsx)(d.A, {
            id: "settingsModal.accountPin.description",
            defaultMessage: "Use your account PIN to protect your locked chats across devices.",
            description: "Explanation of what the Account PIN protects on the PIN settings page",
          })),
          (el[99] = X),
          (el[100] = J))
        : ((X = el[99]), (J = el[100])),
        el[101] !== eJ || el[102] !== eu
          ? ((ee = () => {
              ;(eJ(), eu())
            }),
            (el[101] = eJ),
            (el[102] = eu),
            (el[103] = ee))
          : (ee = el[103]),
        el[104] !== eC ? ((et = () => void eC()), (el[104] = eC), (el[105] = et)) : (et = el[105]),
        el[106] !== eJ || el[107] !== ep
          ? ((es = () => {
              ;((0, G.J)(ep, "FEATURE_ENTRY"), (0, G.J)(ep, "SETUP_STARTED"), eJ(), ek("create"))
            }),
            (en = () => {
              ;((0, G.J)(ep, "FEATURE_ENTRY"), (0, G.J)(ep, "CHANGE_PIN_STARTED"), eJ(), ek("change-current"))
            }),
            (el[106] = eJ),
            (el[107] = ep),
            (el[108] = es),
            (el[109] = en))
          : ((es = el[108]), (en = el[109])),
        el[110] !== eJ || el[111] !== e6 || el[112] !== ep
          ? ((ei = () => {
              ;((0, G.J)(ep, "FEATURE_ENTRY"), (0, G.J)(ep, "RESET_STARTED"), eJ(), eK(!0))
            }),
            (el[110] = eJ),
            (el[111] = e6),
            (el[112] = ep),
            (el[113] = ei))
          : (ei = el[113]))
      let to = "challenge" === e7,
        tr = "reset-warning" === ej && (null != eR || eU)
      el[114] !== e7 || el[115] !== e6 || el[116] !== eU || el[117] !== eR || el[118] !== e9
        ? ((ea = () => {
            "reset" !== e7 && "challenge" !== e7 && (null != eR ? e9(eR) : eU && (eF(!1), e6()))
          }),
          (el[114] = e7),
          (el[115] = e6),
          (el[116] = eU),
          (el[117] = eR),
          (el[118] = e9),
          (el[119] = ea))
        : (ea = el[119])
      let tc = "reset" === e7 || "challenge" === e7
      return (
        el[120] !== eJ ||
        el[121] !== ew ||
        el[122] !== eH ||
        el[123] !== eU ||
        el[124] !== eq ||
        el[125] !== ev ||
        el[126] !== et ||
        el[127] !== es ||
        el[128] !== en ||
        el[129] !== ei ||
        el[130] !== to ||
        el[131] !== tr ||
        el[132] !== ea ||
        el[133] !== tc
          ? ((eo = (0, n.jsx)(U, {
              status: ev,
              isError: ew,
              onRetryStatus: et,
              onCreate: es,
              onChange: en,
              onReset: ei,
              isRequestingReset: to,
              resetReauthError: eq,
              resetActionError: eU,
              nativeResetAccountCheck: eH,
              onCancelNativeReset: eJ,
              showResetWarning: tr,
              onConfirmReset: ea,
              onCancelReset: eJ,
              isResetPending: tc,
            })),
            (el[120] = eJ),
            (el[121] = ew),
            (el[122] = eH),
            (el[123] = eU),
            (el[124] = eq),
            (el[125] = ev),
            (el[126] = et),
            (el[127] = es),
            (el[128] = en),
            (el[129] = ei),
            (el[130] = to),
            (el[131] = tr),
            (el[132] = ea),
            (el[133] = tc),
            (el[134] = eo))
          : (eo = el[134]),
        el[135] !== eJ ||
        el[136] !== eN ||
        el[137] !== eS ||
        el[138] !== eL ||
        el[139] !== e8 ||
        el[140] !== te ||
        el[141] !== eI ||
        el[142] !== eC ||
        el[143] !== ep ||
        el[144] !== ez ||
        el[145] !== ej ||
        el[146] !== ta
          ? ((er =
              null != ej
                ? (0, n.jsx)(H.d, {
                    step: ej,
                    currentPin: eS,
                    nextPin: eI,
                    confirmation: eN,
                    error: eL,
                    lockedFor: te,
                    isPending: e8,
                    onCurrentPinChange: eG,
                    onNextPinChange: eT,
                    onConfirmationChange: eE,
                    onClearError: () => eD(null),
                    onLockoutExpired: () => {
                      let e = { identity: ez, generation: e$.current }
                      eC().then((t) => {
                        let { data: s, isError: n } = t
                        eQ(e) && (n ? eD("failed") : (s?.pin_lockout_retry_after_seconds ?? 0) <= 0 && eD(null))
                      })
                    },
                    onSubmit: ta,
                    onClose: () => {
                      ;((0, G.J)(ep, "CANCELLED"), eJ())
                    },
                  })
                : null),
            (el[135] = eJ),
            (el[136] = eN),
            (el[137] = eS),
            (el[138] = eL),
            (el[139] = e8),
            (el[140] = te),
            (el[141] = eI),
            (el[142] = eC),
            (el[143] = ep),
            (el[144] = ez),
            (el[145] = ej),
            (el[146] = ta),
            (el[147] = er))
          : (er = el[147]),
        el[148] !== ee || el[149] !== eo || el[150] !== er
          ? ((ec = (0, n.jsxs)(F.kU, { title: X, subtitle: J, onBack: ee, children: [eo, er] })),
            (el[148] = ee),
            (el[149] = eo),
            (el[150] = er),
            (el[151] = ec))
          : (ec = el[151]),
        ec
      )
    }
    var Q = s("nkTT")
    let Y = (0, Q.a)({
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
    var X = s("TjgH"),
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
        b,
        v,
        w,
        C = (0, i.c)(42),
        { account: _ } = e,
        j = (0, c.gh)(N.u),
        { isLoading: k, lockdownModeEnabled: P } = (0, c.Ul)(el),
        [M, G] = (0, l.useState)(!1),
        I = (0, l.useRef)(null)
      if (
        (C[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => () => {
              I.current?.abort()
            }),
            (s = []),
            (C[0] = t),
            (C[1] = s))
          : ((t = C[0]), (s = C[1])),
        (0, l.useEffect)(t, s),
        C[2] !== _.accountId)
      ) {
        var T
        ;((a = {
          mutationKey: ["chatgpt-security-mode", (T = _.accountId)],
          scope: { id: `chatgpt-security-mode:${T}` },
        }),
          (C[2] = _.accountId),
          (C[3] = a))
      } else a = C[3]
      let E = a
      C[4] !== E.mutationKey
        ? ((o = { exact: !0, mutationKey: E.mutationKey }), (C[4] = E.mutationKey), (C[5] = o))
        : (o = C[5])
      let L = (0, en.l)(o) > 0
      C[6] !== _.accountId ? ((u = (0, es.dI)(_.accountId)), (C[6] = _.accountId), (C[7] = u)) : (u = C[7])
      let D = u.protection.queryKey
      C[8] !== _.accountId || C[9] !== _.userId || C[10] !== D || C[11] !== j
        ? ((p = () => {
            let e = j.get(ec),
              t = j.queryClient.getQueryState(D)
            return (
              e?.userId === _.userId &&
              e.accountId === _.accountId &&
              t?.status === "success" &&
              t.data?.aas_eligible === !0
            )
          }),
          (C[8] = _.accountId),
          (C[9] = _.userId),
          (C[10] = D),
          (C[11] = j),
          (C[12] = p))
        : (p = C[12])
      let R = p
      ;(C[13] !== _.accountId || C[14] !== _.userId || C[15] !== R || C[16] !== j
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
            let r = await S.Request.safePatch("/settings/account_user_setting", {
              additionalHeaders: { "ChatGPT-Account-ID": _.accountId },
              parameters: { query: { feature: "lockdown_mode_enabled", value: s } },
              signal: t.signal,
            }).then(em, eg)
            if ((t.signal.removeEventListener("abort", o), r || o(), t.signal.aborted)) {
              let e = j.get(ec)
              e?.accountId === _.accountId && e.userId === _.userId && (await i.invalidate({ refetchType: "all" }))
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
          (C[13] = _.accountId),
          (C[14] = _.userId),
          (C[15] = R),
          (C[16] = j),
          (C[17] = h))
        : (h = C[17]),
        C[18] !== E || C[19] !== h
          ? ((g = { ...E, mutationFn: h }), (C[18] = E), (C[19] = h), (C[20] = g))
          : (g = C[20]))
      let O = (0, r.n)(g)
      C[21] !== _.accountId ||
      C[22] !== _.userId ||
      C[23] !== R ||
      C[24] !== E.mutationKey ||
      C[25] !== j ||
      C[26] !== O
        ? ((f = (e) => {
            if (null != I.current || j.queryClient.isMutating({ exact: !0, mutationKey: E.mutationKey }) > 0 || !R())
              return
            let t = new AbortController()
            I.current = t
            let s = j.watch((e) => {
              let s = e.get(ec)
              ;(s?.accountId !== _.accountId || s.userId !== _.userId) && t.abort()
            })
            G(!1)
            let n = () => {
              ;(s(), (I.current = null))
            }
            O.mutateAsync({ controller: t, enabled: e }).then(n, n)
          }),
          (C[21] = _.accountId),
          (C[22] = _.userId),
          (C[23] = R),
          (C[24] = E.mutationKey),
          (C[25] = j),
          (C[26] = O),
          (C[27] = f))
        : (f = C[27])
      let q = f
      return (
        C[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, n.jsx)(d.A, {
              id: "settingsModal.lockdownMode",
              defaultMessage: "Lockdown mode",
              description:
                "Toggle label in Security settings. Lockdown mode is the name of a security feature that restricts external connections.",
            })),
            (C[28] = y))
          : (y = C[28]),
        C[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, n.jsx)(d.A, {
              id: "settingsModal.lockdownModeDescription",
              defaultMessage:
                "Helps protect sensitive data from prompt-injection attacks by limiting features that can connect to the web or external services. <link>Learn more</link>",
              description:
                "Help text below the Lockdown mode toggle in Security settings. The link wraps Learn more and opens the official explanation of this security feature.",
              values: { link: ep },
            })),
            (C[29] = x))
          : (x = C[29]),
        C[30] !== k || C[31] !== P || C[32] !== q || C[33] !== L
          ? ((b = (0, n.jsx)(A.ic, {
              id: "lockdown-mode",
              label: y,
              description: x,
              control: (e) =>
                (0, n.jsx)(ea.l, {
                  ...e,
                  checked: P,
                  disabled: k || L,
                  onChange: (e) => {
                    e ? G(!0) : q(!1)
                  },
                }),
            })),
            (C[30] = k),
            (C[31] = P),
            (C[32] = q),
            (C[33] = L),
            (C[34] = b))
          : (b = C[34]),
        C[35] !== M || C[36] !== q || C[37] !== L
          ? ((v = M ? (0, n.jsx)(er, { isPending: L, onConfirm: () => q(!0), onClose: () => G(!1) }) : null),
            (C[35] = M),
            (C[36] = q),
            (C[37] = L),
            (C[38] = v))
          : (v = C[38]),
        C[39] !== b || C[40] !== v
          ? ((w = (0, n.jsxs)(n.Fragment, { children: [b, v] })), (C[39] = b), (C[40] = v), (C[41] = w))
          : (w = C[41]),
        w
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
          ? ((o = (0, n.jsx)(F.i$, {
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
    function eb(e) {
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
                      className: "cursor-interaction border-0 bg-transparent p-0 text-info hover:underline",
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
            ? ((r = (0, n.jsx)(ee.I, { className: "shrink-0 text-info", asset: Y })), (l[5] = r))
            : (r = l[5]),
          l[6] !== a
            ? ((c = (0, n.jsx)(j.t, {
                className: "select-none",
                variant: "recommendation",
                children: (0, n.jsx)(A.ic, {
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
    function ev(e) {
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
        b = x?.accounts?.find((e) => {
          let { id: t } = e
          return t === g
        })
      h[0] !== g ? ((t = (0, es.dI)(g)), (h[0] = g), (h[1] = t)) : (t = h[1])
      let { data: v } = (0, o.I)(t.cyber)
      h[2] !== g ? ((s = (0, es.dI)(g)), (h[2] = g), (h[3] = s)) : (s = h[3])
      let { data: C, isSuccess: _ } = (0, o.I)(s.protection),
        k = C?.advanced_protection_mode_enabled === !0,
        P = _ && (C.aas_eligible || k),
        M = v?.tac1_enabled === !0 && b?.plan_type != null && !(0, et.o)(b.plan_type)
      return P || M
        ? (h[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(w.X.Header, {
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
                  ? (0, n.jsx)(A.kG, {
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
                  ? (0, n.jsx)(A.ic, {
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
          h[12] !== g || h[13] !== _ || h[14] !== C
            ? ((l = _ && !0 === C.aas_eligible ? (0, n.jsx)(ed, { accountId: g }) : null),
              (h[12] = g),
              (h[13] = _),
              (h[14] = C),
              (h[15] = l))
            : (l = h[15]),
          h[16] !== M
            ? ((u = M
                ? (0, n.jsx)(D.G, {
                    className:
                      "block w-full cursor-interaction hover:bg-primary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                    initiator: "open_in_browser_bridge",
                    href: "https://chatgpt.com/cyber",
                    children: (0, n.jsx)(A.ic, {
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
                      control: (0, n.jsx)(J.g, { ExternalIcon: y.GRR, href: "https://chatgpt.com/cyber" }),
                      controlSizing: "content",
                    }),
                  })
                : null),
              (h[16] = M),
              (h[17] = u))
            : (u = h[17]),
          h[18] !== r || h[19] !== c || h[20] !== l || h[21] !== u
            ? ((p = (0, n.jsxs)(w.X, {
                className: "select-none",
                children: [a, (0, n.jsx)(w.X.Content, { children: (0, n.jsxs)(j.t, { children: [r, c, l, u] }) })],
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
    function ew(e) {
      let t,
        s,
        c,
        u,
        h,
        g,
        m,
        f,
        x,
        b,
        v,
        w,
        C,
        _,
        k,
        P,
        M,
        G,
        I,
        T,
        N,
        R,
        O,
        q,
        U = (0, i.c)(70),
        {
          accountId: B,
          disableConfirmationRequested: H,
          onBack: K,
          onClearDisableConfirmation: W,
          onRequestDisableConfirmation: z,
        } = e,
        V = (0, a.jE)(),
        $ = (0, l.useRef)(null),
        Z = (0, l.useRef)(!1)
      U[0] !== B ? ((t = (0, es.dI)(B)), (U[0] = B), (U[1] = t)) : (t = U[1])
      let { data: Q, isError: Y, refetch: J } = (0, o.I)(t.protection)
      ;(U[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = () => (
            (Z.current = !0),
            () => {
              ;((Z.current = !1), $.current?.abort())
            }
          )),
          (c = []),
          (U[2] = s),
          (U[3] = c))
        : ((s = U[2]), (c = U[3])),
        (0, l.useEffect)(s, c),
        U[4] !== B ? ((u = (e) => (0, ey.nc)(B, e)), (U[4] = B), (U[5] = u)) : (u = U[5]),
        U[6] !== z
          ? ((h = (e) => {
              Z.current && ("ready" === e ? z() : "object" == typeof e && window.location.assign(e.redirectUrl))
            }),
            (U[6] = z),
            (U[7] = h))
          : (h = U[7]),
        U[8] !== u || U[9] !== h
          ? ((g = { mutationFn: u, onSuccess: h }), (U[8] = u), (U[9] = h), (U[10] = g))
          : (g = U[10]))
      let ee = (0, r.n)(g)
      ;(U[11] !== B ? ((m = () => (0, ey.a9)(B)), (U[11] = B), (U[12] = m)) : (m = U[12]),
        U[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (e) => {
              Z.current && "object" == typeof e && window.location.assign(e.redirectUrl)
            }),
            (U[13] = f))
          : (f = U[13]),
        U[14] !== m ? ((x = { mutationFn: m, onSuccess: f }), (U[14] = m), (U[15] = x)) : (x = U[15]))
      let et = (0, r.n)(x)
      ;(U[16] !== B
        ? ((b = async () => {
            let e = await (0, p.loadBrowserChatGptAuth)()
            if (!Z.current) return "cancelled"
            if (e?.accountId !== B || !(0, ey.m)(e.accessToken)) return "reauth_required"
            let t = new AbortController()
            $.current = t
            try {
              return (
                await S.Request.safePost("/accounts/security_settings/advanced_protection_mode/disable", {
                  additionalHeaders: { "ChatGPT-Account-ID": B },
                  signal: t.signal,
                }),
                t.signal.aborted ? "cancelled" : "disabled"
              )
            } catch (e) {
              if (t.signal.aborted) return "cancelled"
              throw e
            }
          }),
          (U[16] = B),
          (U[17] = b))
        : (b = U[17]),
        U[18] !== B || U[19] !== K || U[20] !== ee || U[21] !== V
          ? ((v = (e) => {
              if (!Z.current) return
              if ("reauth_required" === e) return void ee.mutate(!0)
              if ("disabled" !== e || $.current?.signal.aborted === !0) return
              let t = (0, es.dI)(B)
              ;(Promise.all([
                V.invalidateQueries({ queryKey: t.protection.queryKey, refetchType: "all" }),
                V.invalidateQueries({ queryKey: t.mfa.queryKey, refetchType: "all" }),
                V.invalidateQueries({ queryKey: t.addPassword.queryKey, refetchType: "all" }),
                V.invalidateQueries({ queryKey: t.changePassword.queryKey, refetchType: "all" }),
              ]),
                ($.current = null),
                K())
            }),
            (U[18] = B),
            (U[19] = K),
            (U[20] = ee),
            (U[21] = V),
            (U[22] = v))
          : (v = U[22]))
      let en = (0, r.n)({
          mutationFn: b,
          onSuccess: v,
          onError: (e) => {
            !Z.current ||
              ($.current?.signal.aborted !== !0 &&
                (($.current = null),
                e instanceof E.fk &&
                  (401 === e.status || "reauth_required" === e.errorCode) &&
                  (en.reset(), ee.mutate(!0))))
          },
        }),
        ei = ee.isPending || et.isPending || en.isPending,
        ea = ee.isError || "failed" === ee.data || et.isError || "failed" === et.data,
        eo = Q?.advanced_protection_mode_enabled === !0,
        er = null != Q && !Y
      return (
        U[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.advancedProtection.title",
              defaultMessage: "Advanced account security",
              description:
                "Title of the Advanced account security row in Security and login settings, where eligible users can enroll and enrolled users can manage their protections. Translate the feature name.",
            })),
            (U[23] = w))
          : (w = U[23]),
        U[24] !== eo
          ? ((C = eo
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
            (U[24] = eo),
            (U[25] = C))
          : (C = U[25]),
        U[26] !== C
          ? ((_ = (0, n.jsxs)("span", {
              className: "flex flex-wrap items-start justify-between gap-4",
              children: [w, C],
            })),
            (U[26] = C),
            (U[27] = _))
          : (_ = U[27]),
        U[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, n.jsx)("p", {
              children: (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.advancedProtection.detailDescription",
                defaultMessage:
                  "Advanced account security helps keep your account safe by requiring stronger sign-in methods like passkeys or hardware security keys",
                description:
                  "Introduction on the native Advanced account security detail page. It explains that enrolled accounts require phishing-resistant sign-in methods such as passkeys or hardware security keys.",
              }),
            })),
            (U[28] = k))
          : (k = U[28]),
        U[29] !== er || U[30] !== eo
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
            (U[29] = er),
            (U[30] = eo),
            (U[31] = P))
          : (P = U[31]),
        U[32] !== P
          ? ((M = (0, n.jsxs)("div", {
              className: "flex flex-col gap-5 text-sm leading-6 text-wrap select-none",
              children: [k, P],
            })),
            (U[32] = P),
            (U[33] = M))
          : (M = U[33]),
        U[34] !== er || U[35] !== Y || U[36] !== J
          ? ((G = er ? null : (0, n.jsx)(F.mK, { isError: Y, onRetry: () => void J() })),
            (U[34] = er),
            (U[35] = Y),
            (U[36] = J),
            (U[37] = G))
          : (G = U[37]),
        U[38] !== er || U[39] !== eo || U[40] !== Q
          ? ((I =
              er && !eo
                ? (0, n.jsx)(j.t, {
                    children: (0, n.jsx)(A.ic, {
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
                        !0 === Q.aas_eligible
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
            (U[38] = er),
            (U[39] = eo),
            (U[40] = Q),
            (U[41] = I))
          : (I = U[41]),
        U[42] !== en || U[43] !== er || U[44] !== eo || U[45] !== ei || U[46] !== ee || U[47] !== et
          ? ((T =
              er && eo
                ? (0, n.jsxs)(j.t, {
                    children: [
                      (0, n.jsx)(A.ic, {
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
                      (0, n.jsx)(A.ic, {
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
            (U[42] = en),
            (U[43] = er),
            (U[44] = eo),
            (U[45] = ei),
            (U[46] = ee),
            (U[47] = et),
            (U[48] = T))
          : (T = U[48]),
        U[49] !== K || U[50] !== _ || U[51] !== M || U[52] !== G || U[53] !== I || U[54] !== T
          ? ((N = (0, n.jsxs)(F.kU, { onBack: K, title: _, subtitle: M, children: [G, I, T] })),
            (U[49] = K),
            (U[50] = _),
            (U[51] = M),
            (U[52] = G),
            (U[53] = I),
            (U[54] = T),
            (U[55] = N))
          : (N = U[55]),
        U[56] !== en || U[57] !== H || U[58] !== eo || U[59] !== W || U[60] !== ee.isPending
          ? ((R =
              H && eo
                ? (0, n.jsx)(F.i$, {
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
                    onClose: W,
                    isPending: en.isPending || ee.isPending,
                    isError: en.isError,
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.advancedProtection.disable.confirmation.description",
                      defaultMessage:
                        "Disabling advanced account security will restore standard sign-in and account recovery methods, remove recovery keys, and stop requiring your passkeys or security keys at sign-in",
                      description:
                        "Body of the destructive confirmation dialog for disabling Advanced account security. It summarizes the security protections that will no longer be enforced.",
                    }),
                  })
                : null),
            (U[56] = en),
            (U[57] = H),
            (U[58] = eo),
            (U[59] = W),
            (U[60] = ee.isPending),
            (U[61] = R))
          : (R = U[61]),
        U[62] !== ee || U[63] !== ea || U[64] !== et
          ? ((O = ea
              ? (0, n.jsx)(ex, {
                  onClose: () => {
                    ;(ee.reset(), et.reset())
                  },
                })
              : null),
            (U[62] = ee),
            (U[63] = ea),
            (U[64] = et),
            (U[65] = O))
          : (O = U[65]),
        U[66] !== N || U[67] !== R || U[68] !== O
          ? ((q = (0, n.jsxs)(n.Fragment, { children: [N, R, O] })), (U[66] = N), (U[67] = R), (U[68] = O), (U[69] = q))
          : (q = U[69]),
        q
      )
    }
    var eC = s("u34V")
    let eA = (0, Q.a)({
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
    var e_ = s("X1mr"),
      ej = s("CqQF"),
      ek = s("mp9y"),
      eP = s("ZL1D"),
      eM = s("fZLW")
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
        b = (0, i.c)(45),
        {
          accountId: v,
          activeTrustedDeviceCount: C,
          pending: _,
          showLoading: k,
          onAction: P,
          onOpenAdvancedProtection: M,
        } = e,
        [S, G] = (0, l.useState)(null)
      b[0] !== v ? ((t = (0, es.dI)(v)), (b[0] = v), (b[1] = t)) : (t = b[1])
      let { data: I, isError: T, refetch: N } = (0, o.I)(t.mfa)
      b[2] !== v ? ((s = (0, es.dI)(v)), (b[2] = v), (b[3] = s)) : (s = b[3])
      let { data: E } = (0, o.I)(s.protection),
        D = E?.advanced_protection_mode_enabled === !0,
        R = null == E || D
      if (void 0 === I || T) {
        let e, t
        return void 0 === k || k || T
          ? (b[4] !== N ? ((e = () => void N()), (b[4] = N), (b[5] = e)) : (e = b[5]),
            b[6] !== T || b[7] !== e
              ? ((t = (0, n.jsx)(F.mK, { isError: T, onRetry: e })), (b[6] = T), (b[7] = e), (b[8] = t))
              : (t = b[8]),
            t)
          : null
      }
      let O = I.factors.sms[0]?.metadata?.phone_number,
        q = I.factors.totp.length > 0,
        U = I.factors.totp[0]?.id
      ;(b[9] === Symbol.for("react.memo_cache_sentinel")
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
          (b[9] = a),
          (b[10] = r))
        : ((a = b[9]), (r = b[10])),
        b[11] !== q || b[12] !== U
          ? ((c = { factor: "totp", enabled: q, id: U, label: a, description: r }),
            (b[11] = q),
            (b[12] = U),
            (b[13] = c))
          : (c = b[13]),
        b[14] !== C || b[15] !== I.factors.push_auth || b[16] !== I.show_push_auth
          ? ((u = I.show_push_auth
              ? [
                  {
                    factor: "push_auth",
                    enabled: null != I.factors.push_auth,
                    id: I.factors.push_auth?.id,
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
                        null != I.factors.push_auth && 0 === C
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                " ",
                                (0, n.jsxs)("span", {
                                  className: "inline-flex items-center gap-1.5 text-warning select-none",
                                  role: "status",
                                  children: [
                                    (0, n.jsx)(ee.I, { asset: eC.m }),
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
            (b[14] = C),
            (b[15] = I.factors.push_auth),
            (b[16] = I.show_push_auth),
            (b[17] = u))
          : (u = b[17]),
        b[18] !== I.factors.sms[0]?.id ||
        b[19] !== I.factors.sms[0]?.metadata?.verified_channels?.[0] ||
        b[20] !== I.factors.sms.length ||
        b[21] !== I.show_sms ||
        b[22] !== O
          ? ((p = I.show_sms
              ? [
                  {
                    factor: "sms",
                    enabled: I.factors.sms.length > 0,
                    id: I.factors.sms[0]?.id,
                    label: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.mfa.sms",
                      defaultMessage: "Text message",
                      description:
                        "Label for SMS or WhatsApp multi-factor authentication in Security and login settings.",
                    }),
                    description:
                      I.factors.sms.length > 0
                        ? (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.mfa.smsEnabledDescription",
                                defaultMessage:
                                  "Get 6-digit verification codes by {channel, select, whatsapp {WhatsApp} other {text}}",
                                description:
                                  "Description of an enabled phone MFA method. The channel is WhatsApp or text (SMS), based on the account's verified delivery channel.",
                                values: { channel: I.factors.sms[0]?.metadata?.verified_channels?.[0] ?? "sms" },
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
            (b[18] = I.factors.sms[0]?.id),
            (b[19] = I.factors.sms[0]?.metadata?.verified_channels?.[0]),
            (b[20] = I.factors.sms.length),
            (b[21] = I.show_sms),
            (b[22] = O),
            (b[23] = p))
          : (p = b[23]),
        b[24] !== p || b[25] !== c || b[26] !== u
          ? ((h = [c, ...u, ...p]), (b[24] = p), (b[25] = c), (b[26] = u), (b[27] = h))
          : (h = b[27]))
      let B = h
      b[28] !== B ? ((g = B.filter(eG)), (b[28] = B), (b[29] = g)) : (g = b[29])
      let H = g.length + +(I.factors.passkeys.length > 0)
      return (
        b[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)(w.X.Header, {
              title: (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.mfa.title",
                defaultMessage: "Multi-factor authentication (MFA)",
                description: "Heading above authentication-method toggles in Security and login settings.",
              }),
            })),
            (b[30] = m))
          : (m = b[30]),
        b[31] !== R || b[32] !== H
          ? ((f =
              1 !== H || R
                ? null
                : (0, n.jsx)(j.t, {
                    children: (0, n.jsx)("div", {
                      className: "bg-primary-soft-alpha select-none",
                      children: (0, n.jsx)(A.ic, {
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
            (b[31] = R),
            (b[32] = H),
            (b[33] = f))
          : (f = b[33]),
        b[34] !== R || b[35] !== D || b[36] !== S || b[37] !== B || b[38] !== P || b[39] !== M || b[40] !== _
          ? ((y = (0, n.jsx)(j.t, {
              children: B.map((e) => {
                let { factor: t, enabled: s, id: i, label: a, description: o } = e
                return (0, n.jsx)(
                  A.ic,
                  {
                    label: a,
                    description: o,
                    control: (e) => {
                      let a = (0, n.jsx)(ea.l, {
                        ...e,
                        checked: s,
                        disabled: R || _,
                        focusableWhenDisabled: D,
                        onClick: D ? () => G(t) : void 0,
                        onChange: (e) => {
                          e
                            ? P({ action: "enable", factor: t })
                            : null != i && P({ action: "disable", factor: t, factorId: i })
                        },
                      })
                      return D
                        ? (0, n.jsx)(ej.m, {
                            cloneCustomTrigger: !0,
                            interactive: !0,
                            keyboardNavigation: !0,
                            open: S === t,
                            onOpenChange: (e) => {
                              G((s) => (e ? t : s === t ? null : s))
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
            (b[34] = R),
            (b[35] = D),
            (b[36] = S),
            (b[37] = B),
            (b[38] = P),
            (b[39] = M),
            (b[40] = _),
            (b[41] = y))
          : (y = b[41]),
        b[42] !== f || b[43] !== y
          ? ((x = (0, n.jsxs)(w.X, {
              children: [m, (0, n.jsxs)(w.X.Content, { className: "gap-4", children: [f, y] })],
            })),
            (b[42] = f),
            (b[43] = y),
            (b[44] = x))
          : (x = b[44]),
        x
      )
    }
    function eG(e) {
      let { enabled: t } = e
      return t
    }
    function eI(e) {
      let t,
        s,
        a = (0, i.c)(23),
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
        if (a[2] !== r || a[3] !== c || a[4] !== u || a[5] !== p) {
          o = Symbol.for("react.early_return_sentinel")
          e: {
            let n = p
            "push_auth" === c.factor
              ? (n = u?.factors.push_auth == null ? void 0 : [u.factors.push_auth])
              : "passkey" !== c.factor && (n = u?.factors[c.factor])
            let a = n?.find((e) => {
              let { id: t } = e
              return t === c.factorId
            })
            if (null == a) {
              o = null
              break e
            }
            ;((e = ek.J),
              (t = r),
              (s = c),
              (i =
                "passkey" === c.factor
                  ? a.metadata?.factor_name?.trim() || a.metadata?.authenticator_name?.trim()
                  : void 0))
          }
          ;((a[2] = r), (a[3] = c), (a[4] = u), (a[5] = p), (a[6] = e), (a[7] = t), (a[8] = s), (a[9] = i), (a[10] = o))
        } else ((e = a[6]), (t = a[7]), (s = a[8]), (i = a[9]), (o = a[10]))
        return o !== Symbol.for("react.early_return_sentinel")
          ? o
          : (a[11] !== e || a[12] !== l || a[13] !== t || a[14] !== s || a[15] !== i
              ? ((d = (0, n.jsx)(e, { accountId: t, action: s, passkeyName: i, onClose: l })),
                (a[11] = e),
                (a[12] = l),
                (a[13] = t),
                (a[14] = s),
                (a[15] = i),
                (a[16] = d))
              : (d = a[16]),
            d)
      }
      return (
        a[17] !== r || a[18] !== c.actionAttemptId || a[19] !== c.factor || a[20] !== d || a[21] !== l
          ? ((s =
              "passkey" === c.factor
                ? (0, n.jsx)(eT, { accountId: r, actionAttemptId: c.actionAttemptId })
                : (0, n.jsx)(
                    ek.M,
                    { accountId: r, factor: c.factor, email: d.email ?? "", onClose: l },
                    `${r}:${c.factor}`,
                  )),
            (a[17] = r),
            (a[18] = c.actionAttemptId),
            (a[19] = c.factor),
            (a[20] = d),
            (a[21] = l),
            (a[22] = s))
          : (s = a[22]),
        s
      )
    }
    function eT(e) {
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
        b = m?.mfa_request_id
      return (
        u[2] !== h || u[3] !== b || u[4] !== g || u[5] !== x
          ? ((s = () => {
              if (null == x) return
              let e = new URL("/passkey-enroll", (0, e_.WF)().auth.loginWebUrl)
              ;(e.searchParams.set("origin_app_name", "ChatGPT"), e.searchParams.set("mfa_token", x))
              let t = (0, eM.Z)()
              ;("string" == typeof t && e.searchParams.set("redirect_path", `${t}?view=passkeys`),
                (0, eP.fY)(g, h, b),
                window.location.assign(e.toString()))
            }),
            (a = [h, b, g, x]),
            (u[2] = h),
            (u[3] = b),
            (u[4] = g),
            (u[5] = x),
            (u[6] = s),
            (u[7] = a))
          : ((s = u[6]), (a = u[7])),
        (0, l.useEffect)(s, a),
        u[8] !== y ? ((r = () => void y()), (u[8] = y), (u[9] = r)) : (r = u[9]),
        u[10] !== f || u[11] !== r
          ? ((d = (0, n.jsx)(F.mK, { isError: f, onRetry: r })), (u[10] = f), (u[11] = r), (u[12] = d))
          : (d = u[12]),
        d
      )
    }
    function eN(e) {
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
        { data: b } = (0, f.oV)()
      g[0] !== y || g[1] !== b?.accounts
        ? ((t = b?.accounts?.find((e) => {
            let { id: t } = e
            return t === y
          })),
          (g[0] = y),
          (g[1] = b?.accounts),
          (g[2] = t))
        : (t = g[2])
      let v = t,
        { data: C } = (0, c.Ul)(m.s6),
        _ = (0, k.Fj)("2562735250")
      g[3] !== _ ? ((s = _.get("enabled", !1)), (g[3] = _), (g[4] = s)) : (s = g[4])
      let P = s
      g[5] !== y || g[6] !== x
        ? ((a = async (e, t) => {
            ;(await S.Request.safePatch("/settings/account_user_setting", {
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
      let G = (0, r.n)(o)
      return (
        g[10] !== v || g[11] !== C || g[12] !== G || g[13] !== P
          ? ((l =
              P && null != v && !v.is_fedramp_compliant_workspace
                ? (0, n.jsxs)(w.X, {
                    children: [
                      (0, n.jsx)(w.X.Header, {
                        title: (0, n.jsx)(d.A, {
                          id: "settings.chatGpt.security.apps.title",
                          defaultMessage: "App security",
                          description:
                            "Section title for security controls for custom MCP apps in Security and login settings.",
                        }),
                      }),
                      (0, n.jsx)(w.X.Content, {
                        children: (0, n.jsx)(j.t, {
                          children: (0, n.jsx)(A.ic, {
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
                              values: { link: eE },
                            }),
                            control: (e) =>
                              (0, n.jsx)(ea.l, {
                                ...e,
                                checked: C?.connectorEnforceCspInDevMode === !0,
                                disabled: null == C || G.isPending,
                                onChange: (e) => G.mutate({ feature: "connector_enforce_csp_in_dev_mode", value: e }),
                              }),
                          }),
                        }),
                      }),
                    ],
                  })
                : null),
            (g[10] = v),
            (g[11] = C),
            (g[12] = G),
            (g[13] = P),
            (g[14] = l))
          : (l = g[14]),
        g[15] !== v?.structure || g[16] !== C || g[17] !== G
          ? ((u =
              v?.structure === "personal"
                ? (0, n.jsx)(j.t, {
                    children: (0, n.jsx)(A.ic, {
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
                          checked: C?.enableDeviceCodeAuth === !0,
                          disabled: null == C || G.isPending,
                          onChange: (e) => G.mutate({ feature: "enable_device_code_auth", value: e }),
                        }),
                    }),
                  })
                : null),
            (g[15] = v?.structure),
            (g[16] = C),
            (g[17] = G),
            (g[18] = u))
          : (u = g[18]),
        g[19] !== G.isError
          ? ((p = G.isError
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
            (g[19] = G.isError),
            (g[20] = p))
          : (p = g[20]),
        g[21] !== l || g[22] !== u || g[23] !== p
          ? ((h = (0, n.jsxs)(n.Fragment, { children: [l, u, p] })), (g[21] = l), (g[22] = u), (g[23] = p), (g[24] = h))
          : (h = g[24]),
        h
      )
    }
    function eE(e) {
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
    var eL = s("tzt8"),
      eD = s("a7x6"),
      eR = s("AzPI"),
      eO = s("HDjn"),
      eq = s("cQed"),
      eF = s("Jq0m"),
      eU = s("Wf1j"),
      eB = s("GK7D"),
      eH = s("okCa"),
      eK = s("PkPj"),
      eW = s("BrP7"),
      ez = s("WXto"),
      eV = s("gPv1"),
      e$ = s("yGJW")
    function eZ(e) {
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
        b,
        v,
        w,
        C = (0, i.c)(67),
        {
          app: A,
          accountId: _,
          isIdentityOnly: j,
          resourceGrant: k,
          successFocusRef: P,
          workspaceName: M,
          isPersonalWorkspace: S,
          onDisconnected: G,
          onDisconnectingChange: I,
        } = e,
        T = (0, eU.A)(),
        N = (0, l.useRef)(null),
        D = (0, a.jE)(),
        R = k?.disconnect_target ?? A.disconnect_target,
        [O, q] = (0, l.useState)(null)
      ;(C[0] !== _ ? ((t = (0, es.dI)(_)), (C[0] = _), (C[1] = t)) : (t = C[1]),
        C[2] !== t.linkedApps
          ? (({ staleTime: c, ...s } = t.linkedApps), (C[2] = t.linkedApps), (C[3] = s), (C[4] = c))
          : ((s = C[3]), (c = C[4])),
        C[5] !== j || C[6] !== s || C[7] !== c
          ? ((u = { ...s, staleTime: c, enabled: j, refetchOnMount: "always" }),
            (C[5] = j),
            (C[6] = s),
            (C[7] = c),
            (C[8] = u))
          : (u = C[8]),
        (0, o.I)(u),
        C[9] !== _ || C[10] !== A
          ? ((p = (e) =>
              es.IN.safePost("/client_applications/{client_id}/permissions/revoke", {
                additionalHeaders: { "ChatGPT-Account-ID": _ },
                expectedErrorStatuses: [404, 409],
                parameters: { path: { client_id: A.id } },
                requestBody: { target: e },
              })),
            (C[9] = _),
            (C[10] = A),
            (C[11] = p))
          : (p = C[11]),
        C[12] !== _ || C[13] !== A || C[14] !== G || C[15] !== I || C[16] !== s || C[17] !== D || C[18] !== k
          ? ((h = async () => {
              ;(await D.cancelQueries({ queryKey: s.queryKey }),
                D.removeQueries({ queryKey: ["chatgpt-security", _, "linked-app-permissions", A.id] }),
                q(null),
                null == k && G(),
                I(!1),
                D.invalidateQueries({ queryKey: s.queryKey }))
            }),
            (C[12] = _),
            (C[13] = A),
            (C[14] = G),
            (C[15] = I),
            (C[16] = s),
            (C[17] = D),
            (C[18] = k),
            (C[19] = h))
          : (h = C[19]),
        C[20] !== s || C[21] !== D
          ? ((g = async (e) => {
              e instanceof E.fk &&
                409 === e.status &&
                (await D.cancelQueries({ queryKey: s.queryKey }), await D.invalidateQueries({ queryKey: s.queryKey }))
            }),
            (C[20] = s),
            (C[21] = D),
            (C[22] = g))
          : (g = C[22]),
        C[23] !== p || C[24] !== h || C[25] !== g
          ? ((m = { mutationFn: p, retry: !1, onSuccess: h, onError: g }),
            (C[23] = p),
            (C[24] = h),
            (C[25] = g),
            (C[26] = m))
          : (m = C[26]))
      let U = (0, r.n)(m),
        B = U.error instanceof E.fk && 409 === U.error.status,
        H = R?.type === "user_grant" || R?.type === "workspace_grant"
      if ((!H || j) && !(null != O && (U.isPending || U.isError))) return (null != O && q(null), null)
      if (k?.resource === "chatgpt_plan" && S) {
        let e
        ;(C[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.plan.personalConfirmTitle",
              defaultMessage: "Remove ChatGPT plan access from your personal workspace?",
              description:
                "Confirmation title when removing a connected app's ChatGPT plan access for the user's personal workspace in Sign in with ChatGPT security settings. Other resource access remains connected.",
            })),
            (C[27] = e))
          : (e = C[27]),
          (f = e))
      } else if (k?.resource === "chatgpt_plan" && M) {
        let e
        ;(C[28] !== M
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.plan.workspaceConfirmTitle",
              defaultMessage: "Remove ChatGPT plan access from {workspaceName}?",
              description:
                "Confirmation title when removing a connected app's ChatGPT plan access for the selected workspace in Sign in with ChatGPT security settings. Other resource access remains connected. Placeholder {workspaceName} is the selected workspace's name.",
              values: { workspaceName: M },
            })),
            (C[28] = M),
            (C[29] = e))
          : (e = C[29]),
          (f = e))
      } else if (k?.resource === "chatgpt_plan") {
        let e
        ;(C[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.plan.confirmTitle",
              defaultMessage: "Remove ChatGPT plan access from this workspace?",
              description:
                "Confirmation title when removing a connected app's ChatGPT plan access in Sign in with ChatGPT security settings when the workspace name is unavailable. Other resource access remains connected.",
            })),
            (C[30] = e))
          : (e = C[30]),
          (f = e))
      } else if (k?.resource === "ads") {
        let e
        ;(C[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.ads.confirmTitle",
              defaultMessage: "Remove Ads Manager access?",
              description:
                "Confirmation title when removing a connected app's Ads Manager access in Sign in with ChatGPT security settings. ChatGPT plan access remains connected.",
            })),
            (C[31] = e))
          : (e = C[31]),
          (f = e))
      } else if (O?.type === "workspace_grant") {
        let e
        ;(C[32] !== A.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.workspaceConfirmTitle",
              defaultMessage: "Disconnect {name} from this workspace?",
              description:
                "Confirmation-dialog title shown after clicking Disconnect in an app or site’s Login connections details in ChatGPT Security settings for a workspace-scoped connection. Asks the signed-in user to confirm removing access to the selected workspace. Placeholder {name} is the app or site’s display name and may be long.",
              values: { name: A.name },
            })),
            (C[32] = A.name),
            (C[33] = e))
          : (e = C[33]),
          (f = e))
      } else {
        let e
        ;(C[34] !== A.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.confirmTitle",
              defaultMessage: "Disconnect {name}?",
              description:
                "Confirmation title before revoking a third-party login connection and its tokens. Name is the app or site's display name.",
              values: { name: A.name },
            })),
            (C[34] = A.name),
            (C[35] = e))
          : (e = C[35]),
          (f = e))
      }
      if (B) {
        let e
        ;(C[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.reviewConnection",
              defaultMessage: "Review connection",
              description:
                "Button in a stale Disconnect confirmation in ChatGPT Security settings. Closes the dialog so the signed-in user can review the refreshed app or site before choosing to disconnect again; it does not revoke access.",
            })),
            (C[36] = e))
          : (e = C[36]),
          (y = e))
      } else if (null != k) {
        let e
        ;(C[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.removeAccess",
              defaultMessage: "Remove access",
              description:
                "Short destructive-action button for one resource in an app's Sign in with ChatGPT security settings. Opens confirmation to remove Ads Manager or ChatGPT plan access while preserving other resources.",
            })),
            (C[37] = e))
          : (e = C[37]),
          (y = e))
      } else {
        let e
        ;(C[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.confirm",
              defaultMessage: "Disconnect",
              description: "Destructive confirmation button that revokes a third-party login connection.",
            })),
            (C[38] = e))
          : (e = C[38]),
          (y = e))
      }
      if (k?.resource === "chatgpt_plan") {
        let e
        ;(C[39] !== A.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.plan.confirmDescription",
              defaultMessage:
                "{name} will no longer be able to use your ChatGPT plan in this workspace. Its other access will stay connected.",
              description:
                "Confirmation body for removing ChatGPT plan access in Sign in with ChatGPT security settings. Only the selected workspace's plan access is removed. Placeholder {name} is the connected app's display name.",
              values: { name: A.name },
            })),
            (C[39] = A.name),
            (C[40] = e))
          : (e = C[40]),
          (x = e))
      } else if (k?.resource === "ads") {
        let e
        ;(C[41] !== A.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.resource.ads.confirmDescription",
              defaultMessage:
                "{name} will no longer be able to view or manage your Ads Manager data. Its other access will stay connected.",
              description:
                "Confirmation body for removing all granted Ads Manager permissions in Sign in with ChatGPT security settings. Other resources remain connected. Placeholder {name} is the connected app's display name.",
              values: { name: A.name },
            })),
            (C[41] = A.name),
            (C[42] = e))
          : (e = C[42]),
          (x = e))
      } else if (O?.type === "workspace_grant") {
        let e
        ;(C[43] !== A.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.workspaceConfirmDescription.v2",
              defaultMessage:
                "{name} will lose access to this workspace. Connections in your other workspaces will stay active. {name} may retain information you’ve already shared.",
              description:
                "Confirmation body shown after clicking Disconnect in an app or site’s Login connections details in ChatGPT Security settings for a workspace-scoped connection. Explains removal of access to the selected workspace, confirms that connections in the signed-in user’s other workspaces stay active, and warns that the app may retain previously shared information. Placeholder {name} is the app or site’s display name, appears twice, and may be long.",
              values: { name: A.name },
            })),
            (C[43] = A.name),
            (C[44] = e))
          : (e = C[44]),
          (x = e))
      } else {
        let e
        ;(C[45] !== A.name
          ? ((e = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connection.disconnectConfirmDescription",
              defaultMessage:
                "This removes your login connection to {name}. It may still keep information you’ve already shared.",
              description:
                "Confirmation body shown after clicking Disconnect in an app or site's Login connections details in ChatGPT Security settings. Explains removal of the selected login connection and warns that the app may retain previously shared information. Placeholder {name} is the app or site's display name and may be long.",
              values: { name: A.name },
            })),
            (C[45] = A.name),
            (C[46] = e))
          : (e = C[46]),
          (x = e))
      }
      return (
        C[47] !== A || C[48] !== U || C[49] !== H || C[50] !== T || C[51] !== k || C[52] !== R
          ? ((b =
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
                      ;(U.reset(), H && q({ ...R }))
                    },
                    children: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.resource.removeAccess",
                      defaultMessage: "Remove access",
                      description:
                        "Short destructive-action button for one resource in an app's Sign in with ChatGPT security settings. Opens confirmation to remove Ads Manager or ChatGPT plan access while preserving other resources.",
                    }),
                  })
                : (0, n.jsx)(eQ, {
                    app: A,
                    onDisconnect: () => {
                      H && null != R && (U.reset(), q({ ...R }))
                    },
                  })),
            (C[47] = A),
            (C[48] = U),
            (C[49] = H),
            (C[50] = T),
            (C[51] = k),
            (C[52] = R),
            (C[53] = b))
          : (b = C[53]),
        C[54] !== x ||
        C[55] !== y ||
        C[56] !== O ||
        C[57] !== f ||
        C[58] !== U ||
        C[59] !== B ||
        C[60] !== I ||
        C[61] !== k ||
        C[62] !== P
          ? ((v =
              null != O
                ? (0, n.jsx)(F.i$, {
                    title: null != k ? (0, n.jsx)("span", { className: "block pe-8", children: f }) : f,
                    confirmLabel: y,
                    onConfirm: () => {
                      if (B) {
                        ;(q(null), I(!1))
                        return
                      }
                      ;(I(!0, null != k), U.mutate(O))
                    },
                    onClose: () => {
                      ;(q(null), I(!1))
                    },
                    onCloseAutoFocus:
                      null != k
                        ? (e) => {
                            e.preventDefault()
                            let t = N.current
                            t?.isConnected && !t.disabled ? t.focus() : P?.current?.focus()
                          }
                        : void 0,
                    isPending: U.isPending,
                    isError: U.isError,
                    informational: B,
                    errorMessage: B
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
            (C[54] = x),
            (C[55] = y),
            (C[56] = O),
            (C[57] = f),
            (C[58] = U),
            (C[59] = B),
            (C[60] = I),
            (C[61] = k),
            (C[62] = P),
            (C[63] = v))
          : (v = C[63]),
        C[64] !== b || C[65] !== v
          ? ((w = (0, n.jsxs)(n.Fragment, { children: [b, v] })), (C[64] = b), (C[65] = v), (C[66] = w))
          : (w = C[66]),
        w
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
          ? ((t = (0, n.jsx)(w.X.Header, {
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
          ? ((c = (0, n.jsxs)(w.X, {
              children: [
                t,
                (0, n.jsx)(w.X.Content, {
                  children: (0, n.jsx)(j.t, {
                    children: (0, n.jsx)(A.ic, {
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
    var eY = s("chIh"),
      eX = s("S2r0"),
      eJ = s("fxCc"),
      e1 = s("on57"),
      e0 = s("r2OT"),
      e2 = s("hOO0"),
      e3 = s("u2dk"),
      e4 = s("HUHI"),
      e5 = s("FpcZ"),
      e6 = s("FvYa"),
      e9 = s("JNtf"),
      e7 = s("mUDD"),
      e8 = s("WzdM"),
      te = s("HFSu"),
      tt = s("a6Zv")
    function ts(e) {
      let t,
        s,
        c,
        u,
        p,
        h,
        g,
        m,
        x,
        v,
        C,
        _,
        k,
        M,
        S,
        G,
        I,
        T,
        N,
        D,
        R,
        O,
        q,
        F,
        U,
        B,
        H = (0, i.c)(76),
        { app: K, accountId: W, groupTitle: z } = e,
        V = (0, eU.A)(),
        $ = (0, a.jE)(),
        { data: Z, isLoading: Q } = (0, f.YL)(),
        [Y, X] = (0, l.useState)(!1)
      H[0] !== W || H[1] !== K.id
        ? ((t = (0, eX.j)({
            queryKey: ["chatgpt-security", W, "linked-app-permissions", K.id],
            queryFn: (e) => {
              let { signal: t } = e
              return es.IN.safeGet("/client_applications/{client_id}/permissions", {
                additionalHeaders: { "ChatGPT-Account-ID": W },
                expectedErrorStatuses: [404, 409],
                parameters: { path: { client_id: K.id } },
                signal: t,
              })
            },
            staleTime: P.D.ONE_MINUTE,
            retry: !1,
          })),
          (H[0] = W),
          (H[1] = K.id),
          (H[2] = t))
        : (t = H[2])
      let J = t
      ;(H[3] !== W || H[4] !== K.id
        ? ((s = (e) =>
            es.IN.safePost("/client_applications/{client_id}/permissions/revoke", {
              additionalHeaders: { "ChatGPT-Account-ID": W },
              expectedErrorStatuses: [404, 409],
              parameters: { path: { client_id: K.id } },
              requestBody: { target: e },
            })),
          (H[3] = W),
          (H[4] = K.id),
          (H[5] = s))
        : (s = H[5]),
        H[6] !== J || H[7] !== $
          ? ((c = () => $.cancelQueries({ queryKey: J.queryKey, exact: !0 })),
            (u = async (e, t) => {
              ;(await $.cancelQueries({ queryKey: J.queryKey, exact: !0 }),
                $.setQueryData(J.queryKey, e),
                ("plugins" === t.type || 0 === e.connector_ids.length) && X(!1))
            }),
            (p = async (e) => {
              e instanceof E.fk &&
                409 === e.status &&
                (await $.cancelQueries({ queryKey: J.queryKey, exact: !0 }),
                await $.fetchQuery({ ...J, staleTime: 0 }).catch(ti))
            }),
            (H[6] = J),
            (H[7] = $),
            (H[8] = c),
            (H[9] = u),
            (H[10] = p))
          : ((c = H[8]), (u = H[9]), (p = H[10])),
        H[11] !== s || H[12] !== c || H[13] !== u || H[14] !== p
          ? ((h = { mutationFn: s, retry: !1, onMutate: c, onSuccess: u, onError: p }),
            (H[11] = s),
            (H[12] = c),
            (H[13] = u),
            (H[14] = p),
            (H[15] = h))
          : (h = H[15]))
      let { mutate: ee, isPending: et, error: en, variables: ei, reset: ea } = (0, r.n)(h),
        eo = !et
      H[16] !== J || H[17] !== eo
        ? ((g = { ...J, staleTime: P.D.ONE_MINUTE, enabled: eo, refetchOnMount: "always" }),
          (H[16] = J),
          (H[17] = eo),
          (H[18] = g))
        : (g = H[18])
      let { data: er, error: ec, isFetching: el, refetch: ed } = (0, o.I)(g)
      H[19] !== Z?.id || H[20] !== W || H[21] !== er?.connector_ids
        ? ((m = (0, e5.getHostedAppsContentQueriesOptions)({
            accountId: W,
            appIds: er?.connector_ids ?? [],
            enabled: Z?.id === W,
            productContext: "chatgpt",
          })),
          (H[19] = Z?.id),
          (H[20] = W),
          (H[21] = er?.connector_ids),
          (H[22] = m))
        : (m = H[22])
      let { data: eu, isPending: ep, isFetching: eh } = (0, eJ.E)(m),
        eg = er?.connector_ids.map((e) =>
          eu?.find((t) => {
            let { id: s } = t
            return (0, e2.$)(s) === (0, e2.$)(e)
          }),
        ),
        em =
          er?.connector_ids.map((e, t) => ({
            queryKey: ["chatgpt-security", W, "connector-metadata", e],
            queryFn: (t) => {
              let { signal: s } = t
              return te.CodexRequest.safeGet("/aip/connectors/{connector_id}", {
                surface: "settings",
                additionalHeaders: { ...(0, e8.A)("chatgpt"), "ChatGPT-Account-ID": W },
                expectedErrorStatuses: [404],
                parameters: { path: { connector_id: e }, query: { include_actions: !1 } },
                signal: s,
              })
            },
            enabled: Z?.id === W && !ep && eg?.[t] == null,
            staleTime: P.D.FIVE_MINUTES,
            retry: !1,
          })) ?? []
      H[23] !== em ? ((x = { queries: em }), (H[23] = em), (H[24] = x)) : (x = H[24])
      let ef = (0, eJ.E)(x),
        ey = er?.connector_ids.map((e, t) => {
          let s = eg?.[t] ?? ef[t]?.data,
            i = ef[t]?.data,
            a = eg?.[t]?.icon_url ?? i?.icon_assets?.["256_square"] ?? i?.logo_url,
            o = eg?.[t]?.icon_dark_url ?? i?.icon_dark_assets?.["256_square"] ?? i?.logo_url_dark
          return {
            id: e,
            name: s?.name,
            logoUrl: a,
            logoDarkUrl: o,
            isNameLoading: s?.name == null && (Q || eh || ef[t]?.isFetching === !0),
            isLogoMetadataLoading: !a?.trim() && !o?.trim() && (Q || eh || ef[t]?.isFetching === !0),
            icon: (0, n.jsx)("span", {
              className:
                "flex size-8 shrink-0 items-center justify-center rounded-lg border border-default select-none",
              "aria-hidden": !0,
              children: (0, n.jsx)(e6.R, {
                alt: "",
                knownAppId: e,
                logoUrl: td(a),
                logoDarkUrl: td(o),
                size: 20,
                fallback: (0, n.jsx)(y.HUG, {}),
              }),
            }),
          }
        }),
        ex = ey?.slice(0, 3) ?? [],
        eb = et || el || null != ec
      H[25] !== el || H[26] !== et || H[27] !== ec || H[28] !== ed
        ? ((v =
            null == ec
              ? null
              : (0, n.jsxs)("div", {
                  role: "alert",
                  className: "flex flex-col items-start gap-3 text-sm text-secondary",
                  children: [
                    ec instanceof E.fk && 404 === ec.status
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
                      disabled: et || el,
                      loading: el,
                      onClick: () => void ed(),
                      children: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.linkedApps.connectedApps.retry",
                        defaultMessage: "Retry",
                        description:
                          "Button in a connected site's app permissions settings that retries loading its permissions without changing access.",
                      }),
                    }),
                  ],
                })),
          (H[25] = el),
          (H[26] = et),
          (H[27] = ec),
          (H[28] = ed),
          (H[29] = v))
        : (v = H[29])
      let ev = v
      if (er?.connector_ids.length === 0 && null == ec) return null
      H[30] !== ev || H[31] !== er
        ? ((C =
            ev ??
            (null == er
              ? (0, n.jsxs)("span", {
                  role: "status",
                  className: "flex items-center gap-2",
                  children: [
                    (0, n.jsx)(b.y, {}),
                    (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.connectedApps.loading",
                      defaultMessage: "Loading connected app access…",
                      description:
                        "Loading status while fetching the connected apps a site may use in Sign in with ChatGPT settings.",
                    }),
                  ],
                })
              : null)),
          (H[30] = ev),
          (H[31] = er),
          (H[32] = C))
        : (C = H[32])
      let ew = eb || null == er
      ;(H[33] !== ea
        ? ((_ = () => {
            ;(ea(), X(!0))
          }),
          (H[33] = ea),
          (H[34] = _))
        : (_ = H[34]),
        H[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connectedApps.manage",
              defaultMessage: "Manage",
              description:
                "Button opening the dialog for removing a connected site's access to individual connected apps.",
            })),
            (H[35] = k))
          : (k = H[35]),
        H[36] !== ew || H[37] !== _
          ? ((M = (0, n.jsx)(L.$, { color: "secondary", size: "toolbar", disabled: ew, onClick: _, children: k })),
            (H[36] = ew),
            (H[37] = _),
            (H[38] = M))
          : (M = H[38]))
      let eC = (0, n.jsx)(tu, {
          app: K,
          description: C,
          control: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(ta, { previewConnectors: ex }, JSON.stringify([W, ...ex.map(tn)])), M],
          }),
        }),
        eA =
          null == z
            ? eC
            : (0, n.jsxs)(w.X, {
                children: [
                  (0, n.jsx)(w.X.Header, { title: z }),
                  (0, n.jsx)(w.X.Content, { children: (0, n.jsx)(j.t, { children: eC }) }),
                ],
              }),
        e_ = e9.lG
      ;(H[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { "aria-describedby": void 0 }), (H[39] = S))
        : (S = H[39]),
        H[40] !== et
          ? ((G = (e) => {
              et || X(e)
            }),
            (H[40] = et),
            (H[41] = G))
          : (G = H[41]))
      let ej = e7.R4
      ;(H[42] !== eb || H[43] !== ee || H[44] !== er
        ? ((I = (e) => {
            ;(e.preventDefault(), eb || null == er || ee({ type: "plugins" }))
          }),
          (H[42] = eb),
          (H[43] = ee),
          (H[44] = er),
          (H[45] = I))
        : (I = H[45]),
        H[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, n.jsx)(e7.OO, {
              children: (0, n.jsx)(e7.c7, {
                title: (0, n.jsx)(e9.L3, {
                  className: "select-none",
                  children: (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.linkedApps.connectedApps.manageTitle",
                    defaultMessage: "Connected Apps",
                    description: "Title of the dialog for reviewing and removing a site's access to connected apps.",
                  }),
                }),
              }),
            })),
            (H[46] = T))
          : (T = H[46]))
      let ek = e7.OO
      H[47] !== en
        ? ((N =
            null != en
              ? (0, n.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children:
                    en instanceof E.fk && 409 === en.status
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
          (H[47] = en),
          (H[48] = N))
        : (N = H[48])
      let eP = j.t,
        eM = ey?.map((e) => {
          let { id: t, name: s, isNameLoading: i, icon: a } = e
          return (0, n.jsx)(
            A.ic,
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
                        (0, n.jsx)(b.y, {}),
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
                disabled: eb || i,
                loading: et && ei?.type === "connector" && ei.connector_id === t,
                "aria-label":
                  null == s
                    ? V.formatMessage({
                        id: "settings.chatGpt.security.linkedApps.connectedApps.removeUnavailableLabel",
                        defaultMessage: "Remove access to this app",
                        description:
                          "Accessible label for a button revoking a site's permission to use the connected app in this row when the app's name cannot be retrieved in Sign in with ChatGPT settings.",
                      })
                    : V.formatMessage(
                        {
                          id: "settings.chatGpt.security.linkedApps.connectedApps.removeLabel",
                          defaultMessage: "Remove access to {name}",
                          description:
                            "Accessible label for a button revoking a site's permission to use a connected app. Name is the connected app's display name.",
                        },
                        { name: s },
                      ),
                onClick: () => {
                  eb || i || ee({ type: "connector", connector_id: t })
                },
                children: et && ei?.type === "connector" && ei.connector_id === t ? null : (0, n.jsx)(y.cSG, {}),
              }),
            },
            t,
          )
        })
      ;(H[49] !== eP || H[50] !== eM
        ? ((D = (0, n.jsx)(eP, { children: eM })), (H[49] = eP), (H[50] = eM), (H[51] = D))
        : (D = H[51]),
        H[52] !== ek || H[53] !== ev || H[54] !== N || H[55] !== D
          ? ((R = (0, n.jsxs)(ek, { children: [ev, N, D] })),
            (H[52] = ek),
            (H[53] = ev),
            (H[54] = N),
            (H[55] = D),
            (H[56] = R))
          : (R = H[56]))
      let eS = eb || null == er,
        eG = et && ei?.type === "plugins"
      return (
        H[57] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.linkedApps.connectedApps.removeAll",
              defaultMessage: "Remove all access",
              description:
                "Button in a site's connected-app permissions dialog that revokes all connected-app authority from the site, without disconnecting the apps from ChatGPT.",
            })),
            (H[57] = O))
          : (O = H[57]),
        H[58] !== eS || H[59] !== eG
          ? ((q = (0, n.jsx)(e7.OO, {
              children: (0, n.jsx)(e7.Es, {
                expandSingleButton: !1,
                children: (0, n.jsx)(L.$, { type: "submit", color: "danger", disabled: eS, loading: eG, children: O }),
              }),
            })),
            (H[58] = eS),
            (H[59] = eG),
            (H[60] = q))
          : (q = H[60]),
        H[61] !== ej || H[62] !== I || H[63] !== T || H[64] !== R || H[65] !== q
          ? ((F = (0, n.jsxs)(ej, { as: "form", size: "viewport", onSubmit: I, children: [T, R, q] })),
            (H[61] = ej),
            (H[62] = I),
            (H[63] = T),
            (H[64] = R),
            (H[65] = q),
            (H[66] = F))
          : (F = H[66]),
        H[67] !== e_ || H[68] !== Y || H[69] !== S || H[70] !== G || H[71] !== F
          ? ((U = (0, n.jsx)(e_, { open: Y, contentProps: S, onOpenChange: G, children: F })),
            (H[67] = e_),
            (H[68] = Y),
            (H[69] = S),
            (H[70] = G),
            (H[71] = F),
            (H[72] = U))
          : (U = H[72]),
        H[73] !== eA || H[74] !== U
          ? ((B = (0, n.jsxs)(n.Fragment, { children: [eA, U] })), (H[73] = eA), (H[74] = U), (H[75] = B))
          : (B = H[75]),
        B
      )
    }
    function tn(e) {
      let { id: t, logoUrl: s, logoDarkUrl: n } = e
      return [t, s, n]
    }
    function ti() {}
    function ta(e) {
      let t,
        s = (0, i.c)(4),
        { previewConnectors: a } = e,
        o = !0 === (0, tt.Y)(),
        r = o ? "dark" : "light"
      return (
        s[0] !== o || s[1] !== a || s[2] !== r
          ? ((t = (0, n.jsx)(to, { previewConnectors: a, isDarkTheme: o }, r)),
            (s[0] = o),
            (s[1] = a),
            (s[2] = r),
            (s[3] = t))
          : (t = s[3]),
        t
      )
    }
    function to(e) {
      let t,
        s,
        a,
        o,
        r,
        c = (0, i.c)(10),
        { previewConnectors: d, isDarkTheme: u } = e,
        p = (0, eU.A)()
      c[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (c[0] = t)) : (t = c[0])
      let [h, g] = (0, l.useState)(t)
      c[1] !== u
        ? ((s = (e) => {
            let { id: t, icon: s, isLogoMetadataLoading: n, logoUrl: i, logoDarkUrl: a } = e,
              o = null != (0, e0.N6)(t, 20),
              r = u ? a?.trim() || i?.trim() : i?.trim() || a?.trim(),
              c = o ? null : (0, e3.kk)(r)
            return {
              id: t,
              icon: s,
              isLogoMetadataLoading: n && !o,
              logoRequest: c,
              directLogoUrl: o || null == r || null != c ? null : td(r),
            }
          }),
          (c[1] = u),
          (c[2] = s))
        : (s = c[2])
      let m = d.map(s),
        f = (0, eJ.E)({ queries: m.flatMap(tl) }),
        y = m.map((e, t) => ({
          ...e,
          imageUrl: null == e.logoRequest ? e.directLogoUrl : f[m.slice(0, t).filter(tc).length]?.data,
        })),
        x =
          y.some((e) => {
            let { id: t, isLogoMetadataLoading: s, imageUrl: n } = e
            return s || (null != n && h[t] !== n)
          }) || f.some(tr),
        v = x
          ? (0, n.jsx)("span", {
              role: "status",
              "aria-label": p.formatMessage({
                id: "settings.chatGpt.security.linkedApps.connectedApps.loadingLogos",
                defaultMessage: "Loading connected app logos",
                description:
                  "Accessible loading status in a connected site's app permissions row while its app logos are being resolved.",
              }),
              children: (0, n.jsx)(b.y, {}),
            })
          : null,
        w = (0, e1.A)("flex items-center gap-2", x && "pointer-events-none absolute inset-0 opacity-0")
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
      let C = y.map(a)
      return (
        c[4] !== w || c[5] !== C
          ? ((o = (0, n.jsx)("div", { className: w, "aria-hidden": !0, children: C })),
            (c[4] = w),
            (c[5] = C),
            (c[6] = o))
          : (o = c[6]),
        c[7] !== o || c[8] !== v
          ? ((r = (0, n.jsxs)("div", { className: "relative max-sm:hidden", children: [v, o] })),
            (c[7] = o),
            (c[8] = v),
            (c[9] = r))
          : (r = c[9]),
        r
      )
    }
    function tr(e) {
      let { isPending: t } = e
      return t
    }
    function tc(e) {
      let { logoRequest: t } = e
      return null != t
    }
    function tl(e) {
      let { logoRequest: t } = e
      return null == t ? [] : [(0, e4.xd)(t)]
    }
    function td(e) {
      let t = e?.trim()
      return t?.startsWith("/") ? new URL(t, "https://chatgpt.com").href : t
    }
    function tu(e) {
      let t,
        s,
        a,
        o = (0, i.c)(7),
        { app: r, description: c, control: l } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(d.A, { ...(0, eq.sl)("chatgpt.plugins.invoke") })), (o[0] = t))
          : (t = o[0]),
        o[1] !== r || o[2] !== c
          ? ((s = c ?? (0, n.jsx)(d.A, { ...(0, eq.$Z)("chatgpt.plugins.invoke"), values: { appName: r.name } })),
            (o[1] = r),
            (o[2] = c),
            (o[3] = s))
          : (s = o[3]),
        o[4] !== l || o[5] !== s
          ? ((a = (0, n.jsx)(A.ic, {
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
    let tp = new Map(Object.entries(eq.hX)),
      th = new Map(Object.entries(eq.N5)),
      tg = new Set(["openid", "profile", "email"]),
      tm = new Set([
        "chatgpt.tokens.use.obo",
        "chatgpt.tokens.use.direct",
        "chatpass.enable.request",
        "chatpass.enable.request.direct",
      ])
    function tf(e) {
      let t,
        s,
        p,
        h,
        g,
        m,
        f,
        y,
        x,
        b,
        v,
        w,
        C,
        _,
        k,
        P,
        M,
        S,
        G,
        I,
        T,
        N = (0, i.c)(107),
        { accountId: E, onBack: D } = e,
        R = (0, eU.A)(),
        O = (0, u.zy)(),
        q = (0, u.Zp)(),
        [U] = (0, u.ok)(),
        B = (0, a.jE)(),
        H = (0, c.Ul)(e$.YV)
      ;(N[0] !== E ? ((t = (0, es.dI)(E)), (N[0] = E), (N[1] = t)) : (t = N[1]),
        N[2] !== t.linkedApps
          ? (({ staleTime: p, ...s } = t.linkedApps), (N[2] = t.linkedApps), (N[3] = s), (N[4] = p))
          : ((s = N[3]), (p = N[4])),
        N[5] !== s || N[6] !== p
          ? ((h = { ...s, staleTime: p, refetchOnWindowFocus: "always" }), (N[5] = s), (N[6] = p), (N[7] = h))
          : (h = N[7]))
      let { data: K, isError: W, isFetching: z, refetch: V } = (0, o.I)(h)
      N[8] !== U ? ((g = U.get("client_id")), (N[8] = U), (N[9] = g)) : (g = N[9])
      let $ = g
      N[10] !== O.hash || N[11] !== O.pathname || N[12] !== O.state || N[13] !== q || N[14] !== U
        ? ((m = (e) => {
            let t = new URLSearchParams(U)
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
          (N[14] = U),
          (N[15] = m))
        : (m = N[15])
      let Z = m,
        [Q, Y] = (0, l.useState)(null),
        [X, J] = (0, l.useState)(!1),
        et = (0, l.useRef)(null),
        en = (0, l.useRef)(null),
        [ei, ea] = (0, l.useState)(""),
        [eo, er] = (0, l.useState)(null)
      N[16] !== K?.third_party_items || N[17] !== X || N[18] !== $ || N[19] !== Q
        ? ((f =
            (X ? Q : null) ??
            K?.third_party_items?.find((e) => {
              let { id: t } = e
              return t === $
            }) ??
            Q),
          (N[16] = K?.third_party_items),
          (N[17] = X),
          (N[18] = $),
          (N[19] = Q),
          (N[20] = f))
        : (f = N[20])
      let ec = f
      N[21] !== ec?.scopes ? ((y = ec?.scopes?.some(tC) ?? !1), (N[21] = ec?.scopes), (N[22] = y)) : (y = N[22])
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
        N[25] !== s || N[26] !== B
          ? ((b = async (e, t) => {
              ;(await B.cancelQueries({ queryKey: s.queryKey }),
                B.setQueryData(s.queryKey, (e) => (null == e ? e : { ...e, items: e.items.filter((e) => e.id !== t) })),
                er(null),
                await B.invalidateQueries({ queryKey: s.queryKey }))
            }),
            (N[25] = s),
            (N[26] = B),
            (N[27] = b))
          : (b = N[27]),
        N[28] !== x || N[29] !== b
          ? ((v = { mutationFn: x, onSuccess: b }), (N[28] = x), (N[29] = b), (N[30] = v))
          : (v = N[30]))
      let ed = (0, r.n)(v),
        eu = K?.third_party_items?.filter(tw),
        ep = K?.third_party_items?.filter(tv)
      N[31] !== U ? ((w = U.get("tab")), (N[31] = U), (N[32] = w)) : (w = N[32])
      let eh = w,
        eg = "apps" === eh || "sites" === eh ? eh : "all",
        em = { apps: ep, sites: eu },
        ef = "all" === eg || z || W || em[eg]?.length ? eg : "all",
        ey = null == ec && ((null != eh && "all" === eg) || (!z && !W && null != K && eg !== ef))
      ;(N[33] !== O.hash || N[34] !== O.pathname || N[35] !== O.state || N[36] !== q || N[37] !== U || N[38] !== ey
        ? ((C = () => {
            if (
              (en.current?.isConnected === !1 &&
                et.current?.querySelector('[role="tab"][aria-selected="true"]')?.focus(),
              !ey)
            )
              return
            let e = new URLSearchParams(U)
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
          (N[37] = U),
          (N[38] = ey),
          (N[39] = C))
        : (C = N[39]),
        N[40] !== ef ||
        N[41] !== O.hash ||
        N[42] !== O.pathname ||
        N[43] !== O.state ||
        N[44] !== q ||
        N[45] !== U ||
        N[46] !== ey
          ? ((_ = [ef, O.hash, O.pathname, O.state, q, U, ey]),
            (N[40] = ef),
            (N[41] = O.hash),
            (N[42] = O.pathname),
            (N[43] = O.state),
            (N[44] = q),
            (N[45] = U),
            (N[46] = ey),
            (N[47] = _))
          : (_ = N[47]),
        (0, l.useLayoutEffect)(C, _))
      let ex = ei.trim().toLocaleLowerCase(R.locale),
        eb = ei.trim().toLowerCase(),
        ev = ("all" === ef ? K?.third_party_items : em[ef])?.filter(
          (e) => e.name.toLocaleLowerCase(R.locale).includes(ex) || tA(e)?.toLowerCase().includes(eb),
        ),
        ew = K?.items.filter((e) => "all" === ef && e.name.toLocaleLowerCase(R.locale).includes(ex))
      if (null == K) {
        let e, t
        ;(N[48] !== V ? ((e = () => void V()), (N[48] = V), (N[49] = e)) : (e = N[49]),
          N[50] !== W || N[51] !== e
            ? ((t = (0, n.jsx)(F.mK, { isError: W, onRetry: e })), (N[50] = W), (N[51] = e), (N[52] = t))
            : (t = N[52]),
          (k = t))
      } else if (null != ec) {
        let e, t, s, i
        ;(N[53] !== Z ? ((e = () => Z(null)), (N[53] = Z), (N[54] = e)) : (e = N[54]),
          N[55] !== ec
            ? ((t = (e, t) => {
                ;(Y(e ? ec : null), J(e && !!t))
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
            ? ((i = (0, n.jsx)(t_, { app: ec, hasIdentity: el, management: s }, ec.id)),
              (N[61] = el),
              (N[62] = ec),
              (N[63] = s),
              (N[64] = i))
            : (i = N[64]),
          (k = i))
      } else if (0 !== K.items.length || K.third_party_items?.length) {
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
          N[68] !== O.hash || N[69] !== O.pathname || N[70] !== O.state || N[71] !== q || N[72] !== U
            ? ((s = (e) => {
                let t = new URLSearchParams(U)
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
              (N[72] = U),
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
            ? ((r = (0, n.jsx)(eH.s, {
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
              (0, n.jsx)(eK.uC, {
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
                            values: { total: K.items.length + (K.third_party_items?.length ?? 0), count: tb },
                          }),
                        },
                        {
                          key: "apps",
                          name: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.thirdPartyWithCount",
                            defaultMessage: "Apps <count>{total, number}</count>",
                            description:
                              "Tab showing connected third-party apps, excluding ChatGPT-generated sites and first-party integrations, in Sign in with ChatGPT settings. Total is the number of apps; the count tag styles that number.",
                            values: { total: ep?.length ?? 0, count: tx },
                          }),
                        },
                        {
                          key: "sites",
                          name: (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.sitesWithCount",
                            defaultMessage: "Sites <count>{total, number}</count>",
                            description:
                              "Tab showing connected ChatGPT-generated sites in Sign in with ChatGPT settings. Total is the number of sites; the count tag styles that number.",
                            values: { total: eu?.length ?? 0, count: ty },
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
              (ev?.length ?? 0) + (ew?.length ?? 0) === 0
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
                      ev?.map((e) => {
                        let t = e.description?.trim()
                        return (0, n.jsx)(
                          A.kG,
                          {
                            edgeRounding: "surface",
                            icon: (0, n.jsx)(eY.y, { app: e }),
                            label: (0, n.jsx)("span", { className: "block truncate select-text", children: e.name }),
                            description: t
                              ? (0, n.jsx)("span", { className: "block truncate select-text", children: t })
                              : void 0,
                            onClick: (t) => {
                              let s = t.currentTarget.ownerDocument.getSelection()
                              ;(0 !== t.detail &&
                                s?.isCollapsed === !1 &&
                                (t.currentTarget.contains(s.anchorNode) || t.currentTarget.contains(s.focusNode))) ||
                                (Z(e.id), V())
                            },
                            trailing: (0, n.jsx)(ee.I, { asset: eF.R }),
                          },
                          e.id,
                        )
                      }),
                      ew?.map((e) =>
                        (0, n.jsx)(
                          A.ic,
                          {
                            icon: (0, n.jsx)(eY.O, { app: e }),
                            label: (0, n.jsx)("span", { className: "select-text", children: e.name }),
                            description: (0, n.jsx)(tT, { type: e.type }),
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
        N[86] !== D || N[87] !== ec || N[88] !== Z
          ? ((M =
              null == ec
                ? D
                : () => {
                    ;(Z(null), Y(null), J(!1))
                  }),
            (N[86] = D),
            (N[87] = ec),
            (N[88] = Z),
            (N[89] = M))
          : (M = N[89]),
        N[90] !== ec
          ? ((S =
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
            (N[91] = S))
          : (S = N[91]),
        N[92] !== K || N[93] !== W || N[94] !== V
          ? ((G = null != K && W ? (0, n.jsx)(F.mK, { isError: !0, onRetry: () => void V() }) : null),
            (N[92] = K),
            (N[93] = W),
            (N[94] = V),
            (N[95] = G))
          : (G = N[95]),
        N[96] !== ed || N[97] !== eo || N[98] !== H
          ? ((I =
              null == eo
                ? null
                : (0, n.jsx)(F.i$, {
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
                      ;(H.logProductEvent(eO.CodexAccountSettingsConnectedAppDisconnectConfirmed, {
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
            (N[98] = H),
            (N[99] = I))
          : (I = N[99]),
        N[100] !== k || N[101] !== P || N[102] !== M || N[103] !== S || N[104] !== G || N[105] !== I
          ? ((T = (0, n.jsxs)(F.kU, { title: P, onBack: M, subtitle: S, children: [G, k, I] })),
            (N[100] = k),
            (N[101] = P),
            (N[102] = M),
            (N[103] = S),
            (N[104] = G),
            (N[105] = I),
            (N[106] = T))
          : (T = N[106]),
        T
      )
    }
    function ty(e) {
      return (0, n.jsx)("span", { className: "text-tertiary", children: e })
    }
    function tx(e) {
      return (0, n.jsx)("span", { className: "text-tertiary", children: e })
    }
    function tb(e) {
      return (0, n.jsx)("span", { className: "text-tertiary", children: e })
    }
    function tv(e) {
      let { client_app_type: t } = e
      return "codex_generated_site" !== t
    }
    function tw(e) {
      let { client_app_type: t } = e
      return "codex_generated_site" === t
    }
    function tC(e) {
      return tg.has(e)
    }
    function tA(e) {
      try {
        let t = new URL(e.client_uri ?? "")
        return "https:" === t.protocol || "http:" === t.protocol ? t.href : null
      } catch {
        return null
      }
    }
    function t_(e) {
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
        { app: y, hasIdentity: x, management: b } = e,
        v = (0, l.useRef)(null)
      f[0] !== y.scopes || f[1] !== x
        ? ((t = x && !!y.scopes?.every(tG)), (f[0] = y.scopes), (f[1] = x), (f[2] = t))
        : (t = f[2])
      let C = t
      f[3] !== y.scopes || f[4] !== b
        ? ((s = null != b && y.scopes?.some(tS)), (f[3] = y.scopes), (f[4] = b), (f[5] = s))
        : (s = f[5])
      let _ = s
      f[6] !== y.scopes || f[7] !== b
        ? ((a = null != b && y.scopes?.includes("chatgpt.plugins.invoke")), (f[6] = y.scopes), (f[7] = b), (f[8] = a))
        : (a = f[8])
      let k = a
      if (f[9] !== y || f[10] !== x || f[11] !== b || f[12] !== _ || f[13] !== k) {
        let e,
          t,
          s,
          i,
          a,
          l = ["ads.admin.all.read", "ads.admin.all.write"].filter((e) => y.scopes?.includes(e))
        ;((o = l.length > 0),
          f[19] !== y.resource_grants
            ? ((e = y.resource_grants?.find(tM)), (f[19] = y.resource_grants), (f[20] = e))
            : (e = f[20]))
        let h = e
        f[21] !== y.resource_grants
          ? ((t = y.resource_grants?.find(tP)), (f[21] = y.resource_grants), (f[22] = t))
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
        let C = y.scopes?.filter(eq.ul)
        ;((r = C?.length !== y.scopes?.length),
          (u = new Map(
            C?.filter(
              (e) =>
                (null == b || "offline_access" !== e) &&
                (!x || !tg.has(e)) &&
                (!_ || !tm.has(e)) &&
                (!k || "chatgpt.plugins.invoke" !== e) &&
                !l.some((t) => t === e),
            ).map(tk),
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
        let S = a
        ;((p =
          x || null != b || o
            ? (0, n.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex min-w-0 items-center gap-4",
                    children: [
                      (0, n.jsx)(eY.y, { app: y, size: "detail", borderless: !0 }),
                      (0, n.jsx)("div", {
                        className: "min-w-0 flex-1",
                        children: (0, n.jsx)(eB.z, {
                          variant: "settings",
                          subtitleClassName: "flex flex-col gap-1 text-sm",
                          title: (0, n.jsx)("span", {
                            ref: v,
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
                  x || _ || o
                    ? (0, n.jsxs)(w.X, {
                        children: [
                          (0, n.jsx)(w.X.Header, { title: (0, n.jsx)("h2", { children: S }) }),
                          (0, n.jsxs)(w.X.Content, {
                            className: "gap-4",
                            children: [
                              x
                                ? (0, n.jsx)(j.t, {
                                    children: (0, n.jsx)(A.ic, {
                                      label: (0, n.jsx)("h3", {
                                        children: (0, n.jsx)(d.A, { ...(0, eq.sl)("openid") }),
                                      }),
                                      description: (0, n.jsx)(d.A, { ...(0, eq.$Z)("openid") }),
                                      control: null,
                                    }),
                                  })
                                : null,
                              _
                                ? (0, n.jsx)(j.t, {
                                    children: (0, n.jsx)(tI, {
                                      app: y,
                                      successFocusRef: v,
                                      resourceGrant: h,
                                      management: b,
                                    }),
                                  })
                                : null,
                              o || (null != g && null != b)
                                ? (0, n.jsxs)(j.t, {
                                    children: [
                                      null != g && null != b
                                        ? (0, n.jsx)(A.ic, {
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
                                              eZ,
                                              {
                                                app: y,
                                                accountId: b.accountId,
                                                isIdentityOnly: !1,
                                                resourceGrant: g,
                                                successFocusRef: v,
                                                onDisconnected: b.onDisconnected,
                                                onDisconnectingChange: b.onDisconnectingChange,
                                              },
                                              g.disconnect_target.authorization_transaction_id,
                                            ),
                                          })
                                        : null,
                                      l.map(tj),
                                    ],
                                  })
                                : null,
                              k && null != b
                                ? (0, n.jsx)(j.t, { children: (0, n.jsx)(ts, { app: y, accountId: b.accountId }) })
                                : null,
                            ],
                          }),
                        ],
                      })
                    : null,
                  x || _ || o || !k || null == b
                    ? null
                    : (0, n.jsx)(ts, { app: y, accountId: b.accountId, groupTitle: S }),
                ],
              })
            : (null != P || (null != M && !Number.isNaN(M))) &&
              (0, n.jsxs)(w.X, {
                children: [
                  (0, n.jsx)(w.X.Header, {
                    title: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.details",
                      defaultMessage: "Details",
                      description:
                        "Short section heading above an app or site's website and connection date in the basic details view of Login connections in the ChatGPT Security settings modal. Signed-in users see it after selecting a connection; it introduces information, not an action. Individual details can be absent; no placeholders.",
                    }),
                  }),
                  (0, n.jsxs)(w.X.Content, {
                    children: [
                      null == P
                        ? null
                        : (0, n.jsx)(j.t, {
                            children: (0, n.jsx)(A.ic, {
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
          (f[11] = b),
          (f[12] = _),
          (f[13] = k),
          (f[14] = o),
          (f[15] = r),
          (f[16] = c),
          (f[17] = u),
          (f[18] = p))
      } else ((o = f[14]), (r = f[15]), (c = f[16]), (u = f[17]), (p = f[18]))
      return (
        f[30] !== y.name || f[31] !== o || f[32] !== r || f[33] !== x || f[34] !== u || f[35] !== _ || f[36] !== k
          ? ((h =
              ((!r && !x && !_ && !k && !o) || u.size > 0) &&
              (0, n.jsxs)(w.X, {
                children: [
                  (0, n.jsx)(w.X.Header, {
                    title: (0, n.jsx)(d.A, {
                      id: "settings.chatGpt.security.linkedApps.permissions",
                      defaultMessage: "Permissions",
                      description:
                        "Heading above the OAuth permissions granted to the selected app or site in Sign in with ChatGPT settings.",
                    }),
                  }),
                  (0, n.jsx)(w.X.Content, {
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
                                    children: (0, n.jsx)(A.ic, {
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
            (f[35] = _),
            (f[36] = k),
            (f[37] = h))
          : (h = f[37]),
        f[38] !== y || f[39] !== c || f[40] !== C || f[41] !== b
          ? ((g =
              null != b && (!y.resource_grants?.length || c)
                ? (0, n.jsx)(eZ, {
                    app: y,
                    accountId: b.accountId,
                    isIdentityOnly: C,
                    onDisconnected: b.onDisconnected,
                    onDisconnectingChange: b.onDisconnectingChange,
                  })
                : null),
            (f[38] = y),
            (f[39] = c),
            (f[40] = C),
            (f[41] = b),
            (f[42] = g))
          : (g = f[42]),
        f[43] !== p || f[44] !== h || f[45] !== g
          ? ((m = (0, n.jsxs)(n.Fragment, { children: [p, h, g] })), (f[43] = p), (f[44] = h), (f[45] = g), (f[46] = m))
          : (m = f[46]),
        m
      )
    }
    function tj(e) {
      return (0, n.jsx)(
        A.ic,
        {
          label: (0, n.jsx)(d.A, { ...(0, eq.sl)(e) }),
          description: (0, n.jsx)(d.A, { ...(0, eq.$Z)(e) }),
          control: null,
        },
        e,
      )
    }
    function tk(e) {
      let t = tp.get(e)
      return [t?.id ?? `scope:${e}`, null == t ? e : { title: t, description: th.get(e) }]
    }
    function tP(e) {
      let { resource: t } = e
      return "ads" === t
    }
    function tM(e) {
      let { resource: t } = e
      return "chatgpt_plan" === t
    }
    function tS(e) {
      return tm.has(e)
    }
    function tG(e) {
      return tg.has(e) || "offline_access" === e
    }
    function tI(e) {
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
        { app: x, resourceGrant: b, successFocusRef: v, management: w } = e,
        { data: C } = (0, f.oV)()
      y[0] !== C?.accounts || y[1] !== w?.accountId
        ? ((t = C?.accounts?.find((e) => {
            let { id: t } = e
            return t === w?.accountId
          })),
          (y[0] = C?.accounts),
          (y[1] = w?.accountId),
          (y[2] = t))
        : (t = y[2])
      let _ = t,
        j = (0, u.Zp)(),
        { data: k } = (0, c.Ul)(eV.Ix),
        { isUsageSettingsVisible: P, isUsageSettingsAccessLoading: M } = (0, ez.AH)(k?.credits?.balance != null)
      return (
        y[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)("h3", { children: (0, n.jsx)(d.A, { ...(0, eq.sl)("chatpass.enable.request") }) })),
            (y[3] = s))
          : (s = y[3]),
        y[4] !== _?.name || y[5] !== _?.structure || y[6] !== b
          ? ((a =
              null != b
                ? (0, n.jsx)("p", {
                    className: "mb-1",
                    children:
                      _?.structure === "personal"
                        ? (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.resource.plan.personalWorkspace",
                            defaultMessage: "Personal workspace",
                            description:
                              "Scope label below ChatGPT plan access in Sign in with ChatGPT security settings when the connected app uses the user's personal workspace. Removing access affects this workspace only.",
                          })
                        : _?.name ||
                          (0, n.jsx)(d.A, {
                            id: "settings.chatGpt.security.linkedApps.resource.plan.currentWorkspace",
                            defaultMessage: "This workspace",
                            description:
                              "Fallback scope label below ChatGPT plan access in Sign in with ChatGPT security settings when the selected workspace name is unavailable. Removing access affects this workspace only.",
                          }),
                  })
                : null),
            (y[4] = _?.name),
            (y[5] = _?.structure),
            (y[6] = b),
            (y[7] = a))
          : (a = y[7]),
        y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, eq.$Z)("chatpass.enable.request")), (y[8] = o))
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
        y[18] !== _?.name || y[19] !== _?.structure || y[20] !== x || y[21] !== w || y[22] !== b || y[23] !== v
          ? ((h =
              null != b && null != w
                ? (0, n.jsx)(
                    eZ,
                    {
                      app: x,
                      accountId: w.accountId,
                      isIdentityOnly: !1,
                      resourceGrant: b,
                      successFocusRef: v,
                      workspaceName: _?.name,
                      isPersonalWorkspace: _?.structure === "personal",
                      onDisconnected: w.onDisconnected,
                      onDisconnectingChange: w.onDisconnectingChange,
                    },
                    b.disconnect_target.authorization_transaction_id,
                  )
                : null),
            (y[18] = _?.name),
            (y[19] = _?.structure),
            (y[20] = x),
            (y[21] = w),
            (y[22] = b),
            (y[23] = v),
            (y[24] = h))
          : (h = y[24]),
        y[25] !== p || y[26] !== h
          ? ((g = (0, n.jsxs)("div", { className: "flex flex-col items-end gap-2", children: [p, h] })),
            (y[25] = p),
            (y[26] = h),
            (y[27] = g))
          : (g = y[27]),
        y[28] !== l || y[29] !== g
          ? ((m = (0, n.jsx)(A.ic, {
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
    function tT(e) {
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
    function tN(e) {
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
        { accountId: b, passkeyCount: v, onOpenPasskeys: C } = e
      x[0] !== b ? ((t = (0, es.dI)(b)), (x[0] = b), (x[1] = t)) : (t = x[1])
      let { data: _, isSuccess: k } = (0, o.I)(t.changePassword)
      x[2] !== b ? ((s = (0, es.dI)(b)), (x[2] = b), (x[3] = s)) : (s = x[3])
      let { data: P, isSuccess: M } = (0, o.I)(s.addPassword)
      x[4] !== b ? ((a = (0, es.dI)(b)), (x[4] = b), (x[5] = a)) : (a = x[5])
      let { data: S, isSuccess: G } = (0, o.I)(a.protection)
      x[6] === Symbol.for("react.memo_cache_sentinel") ? ((c = { mutationFn: ey.Fz }), (x[6] = c)) : (c = x[6])
      let I = (0, r.n)(c),
        T = S?.advanced_protection_mode_enabled === !0
      return (x[7] !== P || x[8] !== M || x[9] !== _ || x[10] !== k
        ? ((l = null),
          k && !0 === _.eligible ? (l = "change") : k && M && !0 === P.eligible && (l = "add"),
          (x[7] = P),
          (x[8] = M),
          (x[9] = _),
          (x[10] = k),
          (x[11] = l))
        : (l = x[11]),
      null == l && null == v)
        ? null
        : (x[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, n.jsx)(w.X.Header, {
                title: (0, n.jsx)(d.A, {
                  id: "settings.chatGpt.security.loginMethods.title",
                  defaultMessage: "How you log in",
                  description:
                    "Heading above passkeys, security keys, and password controls in Security and login settings. These are the methods the user can use to sign in.",
                }),
              })),
              (x[12] = u))
            : (u = x[12]),
          x[13] !== C || x[14] !== v
            ? ((p =
                null != v
                  ? (0, n.jsx)(A.kG, {
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
                      onClick: C,
                      trailing: (0, n.jsxs)(n.Fragment, {
                        children: [
                          0 === v
                            ? (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.passkeys.add",
                                defaultMessage: "Add",
                                description:
                                  "Trailing label on the passkeys settings row when no security keys or passkeys have been added.",
                              })
                            : v,
                          (0, n.jsx)(y.uM3, {}),
                        ],
                      }),
                    })
                  : null),
              (x[13] = C),
              (x[14] = v),
              (x[15] = p))
            : (p = x[15]),
          x[16] !== l || x[17] !== T || x[18] !== I || x[19] !== G
            ? ((h =
                null != l
                  ? (0, n.jsx)(A.kG, {
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
                      disabled: !G || T || I.isPending || (I.isSuccess && "failed" !== I.data),
                      onClick: () => I.mutate(l, { onSuccess: tE }),
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
              (x[18] = I),
              (x[19] = G),
              (x[20] = h))
            : (h = x[20]),
          x[21] !== p || x[22] !== h
            ? ((g = (0, n.jsxs)(w.X, {
                children: [u, (0, n.jsx)(w.X.Content, { children: (0, n.jsxs)(j.t, { children: [p, h] }) })],
              })),
              (x[21] = p),
              (x[22] = h),
              (x[23] = g))
            : (g = x[23]),
          x[24] !== I
            ? ((m = I.isError || "failed" === I.data ? (0, n.jsx)(ex, { onClose: () => I.reset() }) : null),
              (x[24] = I),
              (x[25] = m))
            : (m = x[25]),
          x[26] !== g || x[27] !== m
            ? ((f = (0, n.jsxs)(n.Fragment, { children: [g, m] })), (x[26] = g), (x[27] = m), (x[28] = f))
            : (f = x[28]),
          f)
    }
    function tE(e) {
      "failed" !== e && window.location.assign(e.redirectUrl)
    }
    let tL = (0, Q.a)({
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
    var tD = s("HHO6")
    let tR = (0, Q.a)({
      name: "security-key-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.700684, y: 0.947266, width: 13.339355, height: 13.339355 },
        visualBounds: { x: 1.700684, y: 0.947266, width: 13.339355, height: 13.339355 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.700684, y: 0.947266, width: 13.339355, height: 13.339355 },
        center: { x: 8.370362, y: 7.616944 },
        insets: { top: 0.947266, right: 0.959961, bottom: 1.713379, left: 1.700684 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.370362, y: 7.616944 }, foreground: { x: 8.370362, y: 7.616944 } },
      },
      capabilities: ["icon"],
      body: '<path d="M9.03975 1.49138C9.76546 0.765942 10.942 0.765844 11.6677 1.49138L14.4958 4.31951C15.2214 5.04515 15.2213 6.22169 14.4958 6.94744L9.12764 12.3156C8.49519 12.948 7.52094 13.0286 6.80049 12.5588L5.42256 13.9377C4.9572 14.4028 4.20233 14.4029 3.73702 13.9377L2.04952 12.2502C1.58441 11.7848 1.58441 11.03 2.04952 10.5646L3.42745 9.18572C2.95856 8.46541 3.03954 7.4916 3.67159 6.85955L9.03975 1.49138ZM2.7917 11.3068C2.7367 11.362 2.73683 11.4517 2.7917 11.507L4.4792 13.1955C4.53431 13.2505 4.62405 13.2501 4.6794 13.1955L6.02901 11.8449L4.14131 9.9572L2.7917 11.3068ZM10.9255 2.23357C10.6099 1.91808 10.0976 1.91818 9.78194 2.23357L4.41377 7.60174C4.09814 7.91738 4.0982 8.42961 4.41377 8.74529L7.2419 11.5734C7.55757 11.8891 8.06978 11.8891 8.38545 11.5734L13.7536 6.20525C14.069 5.88956 14.0692 5.37729 13.7536 5.0617L10.9255 2.23357Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var tO = s("zKCW"),
      tq = s("bqtn"),
      tF = s("zLIa")
    function tU(e) {
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
        { accountId: f, pending: y, onBack: x, onAction: b, onOrder: v } = e,
        w = (0, eU.A)()
      m[0] !== f ? ((t = (0, es.dI)(f)), (m[0] = f), (m[1] = t)) : (t = m[1])
      let { data: C, isError: _, refetch: k } = (0, o.I)(t.mfa),
        [P, M] = (0, l.useState)(null),
        S = "function" == typeof PublicKeyCredential
      if (
        m[2] !== C ||
        m[3] !== w ||
        m[4] !== _ ||
        m[5] !== b ||
        m[6] !== x ||
        m[7] !== v ||
        m[8] !== y ||
        m[9] !== k
      ) {
        let e = C?.factors.passkeys.slice().sort(tB)
        ;((s = F.kU),
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
          m[18] !== C || m[19] !== w || m[20] !== _ || m[21] !== b || m[22] !== y
            ? ((u =
                null == C || _
                  ? void 0
                  : (0, n.jsx)(L.$, {
                      color: "primary",
                      size: "composerSmLabel",
                      disabled: y || !S,
                      "aria-label": w.formatMessage({
                        id: "settings.chatGpt.security.passkeys.addButton",
                        defaultMessage: "Add a passkey or security key",
                        description:
                          "Accessible label for the Add button that opens enrollment for a hardware security key or passkey.",
                      }),
                      onClick: () => b({ action: "enable", factor: "passkey" }),
                      children: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.passkeys.addAction",
                        defaultMessage: "Add",
                        description:
                          "Button in the passkeys and security keys page header that opens enrollment for a new key.",
                      }),
                    })),
              (m[18] = C),
              (m[19] = w),
              (m[20] = _),
              (m[21] = b),
              (m[22] = y),
              (m[23] = u))
            : (u = m[23]),
          (p =
            null == C || _
              ? (0, n.jsx)(F.mK, { isError: _, onRetry: () => void k() })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    e?.length
                      ? (0, n.jsx)(j.t, {
                          children: e.map((e) => {
                            let t =
                                e.metadata?.factor_name?.trim() ||
                                e.metadata?.authenticator_name?.trim() ||
                                w.formatMessage({
                                  id: "settings.chatGpt.security.passkeys.fallback",
                                  defaultMessage: "Passkey",
                                  description:
                                    "Fallback name for an unnamed security key or passkey in Security and login settings.",
                                }),
                              s = e.metadata?.create_time_seconds
                            return (0, n.jsx)(
                              A.ic,
                              {
                                label: t,
                                icon: (0, n.jsx)(ee.I, {
                                  className: "text-secondary",
                                  asset: e.metadata?.is_security_key ? tR : tD.M,
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
                                control: (0, n.jsxs)(tq.Ab, {
                                  triggerButton: (0, n.jsx)(L.$, {
                                    color: "ghost",
                                    size: "iconCircle",
                                    disabled: y,
                                    "aria-label": w.formatMessage(
                                      {
                                        id: "settings.chatGpt.security.passkeys.actions",
                                        defaultMessage: "Actions for {name}",
                                        description:
                                          "Accessible label for the menu to rename or remove a security key or passkey. Name is its display name.",
                                      },
                                      { name: t },
                                    ),
                                    children: (0, n.jsx)(ee.I, { className: "text-secondary", asset: tL }),
                                  }),
                                  children: [
                                    (0, n.jsx)(tq.ms.Item, {
                                      onSelect: () => M(e),
                                      children: (0, n.jsx)(d.A, {
                                        id: "settings.chatGpt.security.passkeys.rename",
                                        defaultMessage: "Rename",
                                        description: "Menu action for renaming a security key or passkey.",
                                      }),
                                    }),
                                    (0, n.jsx)(tq.ms.Item, {
                                      tone: "danger",
                                      onSelect: () => b({ action: "disable", factor: "passkey", factorId: e.id }),
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
                    S
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
                    null != v
                      ? (0, n.jsx)(tO.l, {
                          variant: "settings",
                          icon: (0, n.jsx)(ee.I, { className: "text-secondary", asset: tR }),
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
                            onClick: v,
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
          (m[2] = C),
          (m[3] = w),
          (m[4] = _),
          (m[5] = b),
          (m[6] = x),
          (m[7] = v),
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
          ? ((h = null == P ? null : (0, n.jsx)(tH, { accountId: f, passkey: P, onClose: () => M(null) }, P.id)),
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
    function tB(e, t) {
      return (t.metadata?.create_time_seconds ?? 0) - (e.metadata?.create_time_seconds ?? 0)
    }
    function tH(e) {
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
        b,
        v,
        w,
        C,
        A,
        _,
        j,
        k,
        P,
        M,
        S = (0, i.c)(57),
        { accountId: G, passkey: I, onClose: T } = e,
        N = (0, a.jE)(),
        E = I.metadata?.create_time_seconds
      S[0] !== I.metadata?.authenticator_name || S[1] !== I.metadata?.factor_name
        ? ((t = I.metadata?.factor_name?.trim() || I.metadata?.authenticator_name?.trim() || ""),
          (S[0] = I.metadata?.authenticator_name),
          (S[1] = I.metadata?.factor_name),
          (S[2] = t))
        : (t = S[2])
      let D = t,
        [R, O] = (0, l.useState)(D)
      ;(S[3] !== G || S[4] !== R || S[5] !== I.id
        ? ((s = () =>
            es.IN.safePost("/accounts/mfa/user/update_factor_name", {
              additionalHeaders: { "ChatGPT-Account-ID": G },
              requestBody: { factor_id: I.id, factor_name: R.trim() },
            })),
          (S[3] = G),
          (S[4] = R),
          (S[5] = I.id),
          (S[6] = s))
        : (s = S[6]),
        S[7] !== G || S[8] !== T || S[9] !== N
          ? ((o = async () => {
              ;(await N.invalidateQueries({ queryKey: (0, es.dI)(G).mfa.queryKey }), T())
            }),
            (S[7] = G),
            (S[8] = T),
            (S[9] = N),
            (S[10] = o))
          : (o = S[10]),
        S[11] !== s || S[12] !== o
          ? ((c = { mutationFn: s, onSuccess: o }), (S[11] = s), (S[12] = o), (S[13] = c))
          : (c = S[13]))
      let q = (0, r.n)(c)
      S[14] !== R || S[15] !== D || S[16] !== q.isPending
        ? ((u = R.trim().length > 0 && R.trim() !== D && R.trim().length <= 64 && !q.isPending),
          (S[14] = R),
          (S[15] = D),
          (S[16] = q.isPending),
          (S[17] = u))
        : (u = S[17])
      let F = u
      ;(S[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { "aria-describedby": void 0 }), (S[18] = p))
        : (p = S[18]),
        S[19] !== T || S[20] !== q.isPending
          ? ((h = (e) => {
              e || q.isPending || T()
            }),
            (S[19] = T),
            (S[20] = q.isPending),
            (S[21] = h))
          : (h = S[21]),
        S[22] !== F || S[23] !== q
          ? ((g = (e) => {
              ;(e.preventDefault(), F && q.mutate())
            }),
            (S[22] = F),
            (S[23] = q),
            (S[24] = g))
          : (g = S[24]),
        S[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)(e7.OO, {
              children: (0, n.jsx)(e7.c7, {
                title: (0, n.jsx)(e9.L3, {
                  children: (0, n.jsx)(d.A, {
                    id: "settings.chatGpt.security.passkeys.renameTitle",
                    defaultMessage: "Rename security key",
                    description:
                      "Dialog title for renaming an existing security key or passkey in Security and login settings.",
                  }),
                }),
              }),
            })),
            (S[25] = m))
          : (m = S[25]),
        S[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.passkeys.name",
              defaultMessage: "Name",
              description: "Label for the custom name of a security key or passkey in the rename dialog.",
            })),
            (S[26] = f))
          : (f = S[26]),
        S[27] === Symbol.for("react.memo_cache_sentinel") ? ((y = (e) => O(e.target.value)), (S[27] = y)) : (y = S[27]),
        S[28] !== R || S[29] !== q.isPending
          ? ((x = (0, n.jsxs)("label", {
              className: "flex flex-col gap-2 text-sm",
              children: [
                f,
                (0, n.jsx)(tF.pd, {
                  name: "passkey-name",
                  autoFocus: !0,
                  maxLength: 64,
                  value: R,
                  onChange: y,
                  disabled: q.isPending,
                }),
              ],
            })),
            (S[28] = R),
            (S[29] = q.isPending),
            (S[30] = x))
          : (x = S[30]),
        S[31] !== E
          ? ((b =
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
            (S[31] = E),
            (S[32] = b))
          : (b = S[32]),
        S[33] !== q.isError
          ? ((v = q.isError
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
            (S[33] = q.isError),
            (S[34] = v))
          : (v = S[34]),
        S[35] !== x || S[36] !== b || S[37] !== v
          ? ((w = (0, n.jsxs)(e7.OO, { className: "gap-4", spacing: "large", children: [x, b, v] })),
            (S[35] = x),
            (S[36] = b),
            (S[37] = v),
            (S[38] = w))
          : (w = S[38]),
        S[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.cancel",
              defaultMessage: "Cancel",
              description:
                "Dismisses an account security confirmation without changing authentication, devices, or app access.",
            })),
            (S[39] = C))
          : (C = S[39]),
        S[40] !== T || S[41] !== q.isPending
          ? ((A = (0, n.jsx)(L.$, {
              type: "button",
              color: "secondary",
              onClick: T,
              disabled: q.isPending,
              children: C,
            })),
            (S[40] = T),
            (S[41] = q.isPending),
            (S[42] = A))
          : (A = S[42]))
      let U = !F
      return (
        S[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.passkeys.save",
              defaultMessage: "Save",
              description: "Saves the new custom name of the security key or passkey.",
            })),
            (S[43] = _))
          : (_ = S[43]),
        S[44] !== q.isPending || S[45] !== U
          ? ((j = (0, n.jsx)(L.$, {
              type: "submit",
              color: "primary",
              disabled: U,
              loading: q.isPending,
              children: _,
            })),
            (S[44] = q.isPending),
            (S[45] = U),
            (S[46] = j))
          : (j = S[46]),
        S[47] !== A || S[48] !== j
          ? ((k = (0, n.jsx)(e7.OO, { spacing: "large", children: (0, n.jsxs)(e7.Es, { children: [A, j] }) })),
            (S[47] = A),
            (S[48] = j),
            (S[49] = k))
          : (k = S[49]),
        S[50] !== w || S[51] !== k || S[52] !== g
          ? ((P = (0, n.jsxs)(e7.R4, { as: "form", onSubmit: g, children: [m, w, k] })),
            (S[50] = w),
            (S[51] = k),
            (S[52] = g),
            (S[53] = P))
          : (P = S[53]),
        S[54] !== P || S[55] !== h
          ? ((M = (0, n.jsx)(e9.lG, { open: !0, contentProps: p, onOpenChange: h, children: P })),
            (S[54] = P),
            (S[55] = h),
            (S[56] = M))
          : (M = S[56]),
        M
      )
    }
    var tK = s("vysM")
    s("RU3e")
    var tW = s("c2QW"),
      tz = s("LIxM"),
      tV = s("ZRcE"),
      t$ = s("xxoV"),
      tZ = s("WIiH"),
      tQ = s("zjpG"),
      tY = s("NOPk")
    function tX(e) {
      return (
        e.is_trusted_device &&
        e.can_untrust &&
        !e.is_current_device &&
        !(e.session_id ?? "").trim() &&
        (e.hashed_device_id ?? "").trim().length > 0
      )
    }
    function tJ(e) {
      return null != e && e.trim().length > 0
    }
    let t1 = {
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
    function t0(e) {
      let t,
        s,
        g,
        m,
        f,
        y,
        x,
        b,
        v,
        w,
        C,
        _,
        k,
        P,
        M,
        S,
        G,
        I,
        T,
        D,
        R,
        O,
        q,
        U,
        B,
        H,
        K,
        W = (0, i.c)(95),
        { accountId: z, includeTrustedDevices: V, acknowledgeReview: $, recommendationAttempt: Z, onBack: Q } = e,
        Y = void 0 !== V && V,
        X = void 0 !== $ && $,
        J = (0, c.gh)(N.u),
        et = (0, a.jE)(),
        { userId: en } = (0, h.As)(),
        ei = (0, u.Zp)(),
        ea = (0, h.KD)()
      W[0] !== z ? ((t = ["chatgpt-security", z, "sessions"]), (W[0] = z), (W[1] = t)) : (t = W[1])
      let eo = t,
        er = X ? (en ?? void 0) : void 0
      W[2] !== z || W[3] !== Y || W[4] !== er
        ? ((s = (0, es.dI)(z, { includeTrustedDevices: Y, sessionReviewUserId: er })),
          (W[2] = z),
          (W[3] = Y),
          (W[4] = er),
          (W[5] = s))
        : (s = W[5])
      let ec = s.sessions
      W[6] !== z || W[7] !== X || W[8] !== Y || W[9] !== ec || W[10] !== en
        ? ((g = X ? ["chatgpt-security", z, "sessions", { includeTrustedDevices: Y }, en] : ec.queryKey),
          (W[6] = z),
          (W[7] = X),
          (W[8] = Y),
          (W[9] = ec),
          (W[10] = en),
          (W[11] = g))
        : (g = W[11])
      let el = !X || !!en,
        ed = X ? "always" : ec.refetchOnMount,
        eu = X ? 0 : ec.staleTime
      W[12] !== ec || W[13] !== g || W[14] !== el || W[15] !== ed || W[16] !== eu
        ? ((m = { ...ec, queryKey: g, enabled: el, refetchOnMount: ed, staleTime: eu }),
          (W[12] = ec),
          (W[13] = g),
          (W[14] = el),
          (W[15] = ed),
          (W[16] = eu),
          (W[17] = m))
        : (m = W[17])
      let { data: ep, isError: eh, isFetching: eg, isFetchedAfterMount: em, isSuccess: ef, refetch: ey } = (0, o.I)(m),
        ex = (0, l.useRef)(!1)
      W[18] !== et || W[19] !== J
        ? ((f = {
            mutationFn: se,
            onSuccess: (e, t) => {
              ;(et.invalidateQueries({ queryKey: (0, tK.m)(t.accountId, t.userId).queryKey }),
                (0, eP.gM)(J, t.recommendationAttempt))
            },
          }),
          (W[18] = et),
          (W[19] = J),
          (W[20] = f))
        : (f = W[20])
      let eb = (0, r.n)(f)
      ;(W[21] !== z ||
      W[22] !== X ||
      W[23] !== em ||
      W[24] !== eg ||
      W[25] !== ef ||
      W[26] !== Z ||
      W[27] !== eb ||
      W[28] !== en
        ? ((y = () => {
            X &&
              en &&
              ef &&
              !eg &&
              em &&
              !ex.current &&
              ((ex.current = !0), eb.mutate({ accountId: z, userId: en, recommendationAttempt: Z }))
          }),
          (x = [X, z, en, Z, ef, eg, em, eb]),
          (W[21] = z),
          (W[22] = X),
          (W[23] = em),
          (W[24] = eg),
          (W[25] = ef),
          (W[26] = Z),
          (W[27] = eb),
          (W[28] = en),
          (W[29] = y),
          (W[30] = x))
        : ((y = W[29]), (x = W[30])),
        (0, l.useEffect)(y, x))
      let [ev, ew] = (0, l.useState)(null)
      W[31] !== ep || W[32] !== Y
        ? ((b = null != ep && Y ? [...ep.devices.filter(t8), ...ep.devices.filter(tX)] : (ep?.devices ?? [])),
          (W[31] = ep),
          (W[32] = Y),
          (W[33] = b))
        : (b = W[33])
      let eC = b
      ;(W[34] !== z || W[35] !== Y || W[36] !== et || W[37] !== J || W[38] !== eo
        ? ((v = async (e) => {
            if ("all" === e) {
              let e = { accountId: z, authSnapshot: (0, p.getBrowserChatGptAuthSnapshot)() }
              J.get(e$.YV).logProductEvent(tW.Rh, {
                location: tW.a4.ACCESS_LOGOUT_ACTION_LOCATION_SETTINGS_MODAL_LOG_OUT_ALL,
                logoutType: tW.vh.ACCESS_LOGOUT_TYPE_USER_INITIATED,
              })
              let t = (0, tY.TV)({
                logoutCaller: "settings_sessions",
                reasonV2: tW.Hf.ACCESS_LOGOUT_REASON_V2_INTENTIONAL_USER_INITIATED_MANUAL_LOGOUT,
                preLogoutUserId: e.authSnapshot?.userId,
                location: tW.a4.ACCESS_LOGOUT_ACTION_LOCATION_SETTINGS_MODAL_LOG_OUT_ALL,
              })
              return (
                await es.IN.safePost("/accounts/logout_all", { additionalHeaders: { "ChatGPT-Account-ID": z } }),
                await (0, tY.q9)(t),
                e
              )
            }
            if (Y && tX(e)) {
              try {
                await es.IN.safePost("/accounts/trusted_devices/revoke", {
                  additionalHeaders: { "ChatGPT-Account-ID": z },
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
                  additionalHeaders: { "ChatGPT-Account-ID": z },
                  requestBody: { session_id: e.session_id },
                }),
                await et.invalidateQueries({ queryKey: eo }))
            return null
          }),
          (W[34] = z),
          (W[35] = Y),
          (W[36] = et),
          (W[37] = J),
          (W[38] = eo),
          (W[39] = v))
        : (v = W[39]),
        W[40] !== ei || W[41] !== ea
          ? ((w = (e, t) => {
              "all" === t &&
                null != e &&
                (function ({ accountId: e, authSnapshot: t }) {
                  if (null == t) return !1
                  let s = t.accountId,
                    n = t.accountUserId
                  if (!tJ(e) || !tJ(s) || !tJ(n) || s !== e) return !1
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
                (0, tZ.handleLogout)(ea))
            }),
            (W[40] = ei),
            (W[41] = ea),
            (W[42] = w))
          : (w = W[42]),
        W[43] !== v || W[44] !== w
          ? ((C = { mutationFn: v, onSuccess: w }), (W[43] = v), (W[44] = w), (W[45] = C))
          : (C = W[45]))
      let eA = (0, r.n)(C)
      W[46] !== ev || W[47] !== Y
        ? ((_ = null != ev && "all" !== ev && Y && tX(ev)), (W[46] = ev), (W[47] = Y), (W[48] = _))
        : (_ = W[48])
      let e_ = _
      W[49] !== ev || W[50] !== e_
        ? ((k = null != ev && "all" !== ev && !ev.session_id?.trim() && !e_), (W[49] = ev), (W[50] = e_), (W[51] = k))
        : (k = W[51])
      let ej = k,
        ek = "session"
      return (
        "all" === ev
          ? (ek = "all")
          : e_
            ? (ek = "signedOut")
            : ej
              ? (ek = "unavailable")
              : ev?.is_trusted_device && (ek = "trusted"),
        W[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.activeSessions",
              defaultMessage: "Active sessions",
              description: "Title of the ChatGPT Security and login subpage where users review active device sessions.",
            })),
            (W[52] = P))
          : (P = W[52]),
        W[53] !== Y
          ? ((M = Y
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
            (W[53] = Y),
            (W[54] = M))
          : (M = W[54]),
        W[55] !== X || W[56] !== eb
          ? ((S =
              X && eb.isError
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
                          eb.variables && eb.mutate(eb.variables)
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
            (W[55] = X),
            (W[56] = eb),
            (W[57] = S))
          : (S = W[57]),
        W[58] !== ep || W[59] !== eh || W[60] !== ey
          ? ((G = null == ep || eh ? (0, n.jsx)(F.mK, { isError: eh, onRetry: () => void ey() }) : null),
            (W[58] = ep),
            (W[59] = eh),
            (W[60] = ey),
            (W[61] = G))
          : (G = W[61]),
        W[62] !== ep || W[63] !== eC || W[64] !== Y || W[65] !== eh || W[66] !== eA
          ? ((I =
              null != ep &&
              !eh &&
              (eC.length > 0
                ? (0, n.jsx)(j.t, {
                    children: eC.map((e) => {
                      let t = Array.from(new Map(e.app_sessions?.filter(t7).map(t9)).values()).join(", "),
                        s = e.app_sessions?.filter(t6),
                        i =
                          { macos: "macOS", ios: "iOS", ipados: "iPadOS" }[e.platform.trim().toLowerCase()] ??
                          e.platform.trim(),
                        a = (
                          e.last_signed_in_city.trim()
                            ? [e.last_signed_in_city, e.last_signed_in_region_code || e.last_signed_in_country]
                            : [e.last_signed_in_region_code, e.last_signed_in_country]
                        )
                          .filter(t5)
                          .join(", "),
                        o = !!e.session_id?.trim(),
                        r = Y && tX(e),
                        c = t1.session.confirmLabel
                      r
                        ? (c = t1.signedOut.confirmLabel)
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
                      ].filter(t4)
                      return (0, n.jsx)(
                        A.ic,
                        {
                          icon: (0, n.jsx)(ee.I, {
                            className: "text-secondary",
                            asset: ["android", "ios", "ipados"].includes(e.platform.toLowerCase()) ? t$.f : tz.g,
                          }),
                          label: s?.length
                            ? (0, n.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [t && (0, n.jsx)("span", { children: t }), s.map(t3)],
                              })
                            : t ||
                              (0, n.jsx)(d.A, {
                                id: "settings.chatGpt.security.sessions.unknownApp",
                                defaultMessage: "Unknown app",
                                description:
                                  "Short app-name placeholder in ChatGPT Active sessions settings when no application name is available. Shown as the session row title above the device and operating-system details.",
                              }),
                          description: u.map(t2),
                          control: (0, n.jsxs)("div", {
                            className: "flex flex-col items-end gap-2 sm:flex-row sm:items-center",
                            children: [
                              (0, n.jsx)(st, { device: e, signedOut: r }),
                              (0, n.jsx)(L.$, {
                                color: "secondary",
                                size: "toolbar",
                                disabled: e.is_current_device,
                                onClick: () => {
                                  ;(eA.reset(), ew(e))
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
            (W[62] = ep),
            (W[63] = eC),
            (W[64] = Y),
            (W[65] = eh),
            (W[66] = eA),
            (W[67] = I))
          : (I = W[67]),
        W[68] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.sessions.logOutAllLabel",
              defaultMessage: "Log out of all sessions",
              description: "Label of the settings row that ends all active sessions, including the current session.",
            })),
            (W[68] = T))
          : (T = W[68]),
        W[69] !== Y
          ? ((D = Y
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
            (W[69] = Y),
            (W[70] = D))
          : (D = W[70]),
        W[71] !== eA
          ? ((R = () => {
              ;(eA.reset(), ew("all"))
            }),
            (W[71] = eA),
            (W[72] = R))
          : (R = W[72]),
        W[73] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, n.jsx)(d.A, {
              id: "settings.chatGpt.security.sessions.logOutAll",
              defaultMessage: "Log out all",
              description: "Button opening a confirmation to end all ChatGPT sessions, including the current one.",
            })),
            (W[73] = O))
          : (O = W[73]),
        W[74] !== R
          ? ((q = (0, n.jsx)(L.$, { color: "danger", size: "toolbar", onClick: R, children: O })),
            (W[74] = R),
            (W[75] = q))
          : (q = W[75]),
        W[76] !== D || W[77] !== q
          ? ((U = (0, n.jsx)(j.t, { children: (0, n.jsx)(A.ic, { label: T, description: D, control: q }) })),
            (W[76] = D),
            (W[77] = q),
            (W[78] = U))
          : (U = W[78]),
        W[79] !== S || W[80] !== G || W[81] !== I || W[82] !== U
          ? ((B = (0, n.jsxs)("div", { className: "flex flex-col gap-8", children: [S, G, I, U] })),
            (W[79] = S),
            (W[80] = G),
            (W[81] = I),
            (W[82] = U),
            (W[83] = B))
          : (B = W[83]),
        W[84] !== ev || W[85] !== ek || W[86] !== Y || W[87] !== eA || W[88] !== ej
          ? ((H =
              null == ev
                ? null
                : (0, n.jsx)(F.i$, {
                    title: t1[ek].title,
                    confirmLabel: t1[ek].confirmLabel,
                    informational: ej,
                    onConfirm: () =>
                      ej
                        ? ew(null)
                        : eA.mutate(ev, {
                            onSuccess: () => {
                              ew(null)
                            },
                            onError: (e, t) => {
                              "all" !== t && Y && tX(t) && e instanceof E.fk && 409 === e.status && ew(null)
                            },
                          }),
                    onClose: () => ew(null),
                    isPending: eA.isPending,
                    isError: eA.isError,
                    children: t1[ek].description,
                  })),
            (W[84] = ev),
            (W[85] = ek),
            (W[86] = Y),
            (W[87] = eA),
            (W[88] = ej),
            (W[89] = H))
          : (H = W[89]),
        W[90] !== Q || W[91] !== M || W[92] !== B || W[93] !== H
          ? ((K = (0, n.jsxs)(F.kU, { onBack: Q, title: P, subtitle: M, children: [B, H] })),
            (W[90] = Q),
            (W[91] = M),
            (W[92] = B),
            (W[93] = H),
            (W[94] = K))
          : (K = W[94]),
        K
      )
    }
    function t2(e, t) {
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
    function t3(e) {
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
    function t4(e) {
      let { content: t } = e
      return !!t
    }
    function t5(e) {
      return !!e
    }
    function t6(e) {
      let { client_type: t } = e
      return "site" === t
    }
    function t9(e) {
      let { client_name: t } = e
      return [t.trim().toLowerCase(), t.trim()]
    }
    function t7(e) {
      let { client_name: t, client_type: s } = e
      return "site" !== s && t.trim()
    }
    function t8(e) {
      return !tX(e)
    }
    function se(e) {
      return S.Request.safePost("/accounts/security/session_review/acknowledge", {
        additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
        expectedIdentity: { accountId: e.accountId, userId: e.userId },
        retry: !1,
      })
    }
    function st(e) {
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
                  (0, n.jsx)(ee.I, { asset: eC.m }),
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
                (0, n.jsx)(ee.I, { asset: tV.i }),
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
        return (await s.e(676542).then(s.bind(s, "g55E"))).BiometricSettings
      },
      {
        fallback: ({ isSubview: e, onBack: t }) =>
          e
            ? (0, n.jsx)(F.kU, {
                title: (0, n.jsx)(_.s, { slug: "security" }),
                onBack: t,
                children: (0, n.jsx)(F.mK, { isError: !1, onRetry: () => window.location.reload() }),
              })
            : null,
        errorFallback: ({ isSubview: e, onBack: t }) => {
          let s = (0, n.jsx)(F.mK, { isError: !0, onRetry: () => window.location.reload() })
          return e ? (0, n.jsx)(F.kU, { title: (0, n.jsx)(_.s, { slug: "security" }), onBack: t, children: s }) : null
        },
      },
    )
    let ss = (0, l.lazy)(async () => ({
        default: (await s.e(469405).then(s.bind(s, "favV"))).SecurityHistorySettings,
      })),
      sn = (0, l.lazy)(async () => ({ default: (await s.e(639537).then(s.bind(s, "vUVa"))).OrderYubikeyDialog }))
    function si() {
      let e,
        t = (0, i.c)(2),
        s = (0, c.Ul)(m.Sk)
      return (
        t[0] !== s
          ? ((e = null == s ? (0, n.jsx)(b.y, {}) : (0, n.jsx)(sa, { accountId: s }, s)), (t[0] = s), (t[1] = e))
          : (e = t[1]),
        e
      )
    }
    function sa(e) {
      let t,
        s,
        m,
        f,
        x,
        M,
        S,
        G,
        I,
        T,
        N,
        E,
        L,
        D,
        R,
        O,
        U,
        B,
        H,
        K,
        z,
        V,
        $,
        Q,
        Y,
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
        eC,
        eA = (0, i.c)(205),
        { accountId: e_ } = e,
        ej = (0, h.As)(),
        ek = (0, a.jE)(),
        eP = (0, u.zy)(),
        eM = (0, u.Zp)(),
        [eG, eT] = (0, u.ok)(),
        { data: eE } = (0, c._U)(g.t, e_),
        eR = (0, k.Zj)("3219370863")
      eA[0] !== e_ || eA[1] !== eP.state || eA[2] !== eR
        ? (((t = (0, es.dI)(e_, { includeTrustedDevices: eR })).mfa.refetchOnMount = !(0, C.TK)(eP.state) || "always"),
          (eA[0] = e_),
          (eA[1] = eP.state),
          (eA[2] = eR),
          (eA[3] = t))
        : (t = eA[3])
      let { data: eO, isError: eq, refetch: eF } = (0, o.I)(t.mfa)
      eA[4] !== eO || eA[5] !== eG ? ((s = (0, ey.UC)(eG, eO)), (eA[4] = eO), (eA[5] = eG), (eA[6] = s)) : (s = eA[6])
      let eU = s,
        { data: eB, isSuccess: eH } = (0, o.I)(t.sessions)
      eA[7] !== eB?.devices || eA[8] !== eH
        ? ((m = eH ? eB?.devices.filter(sc).length : void 0), (eA[7] = eB?.devices), (eA[8] = eH), (eA[9] = m))
        : (m = eA[9])
      let eK = m
      eA[10] !== e_ ? ((f = (0, eD.S)(e_)), (eA[10] = e_), (eA[11] = f)) : (f = eA[11])
      let { data: eW, isSuccess: ez } = (0, o.I)(f),
        eV = (0, k.Zj)("2726095122"),
        e$ = null != ej.userId && eV,
        eZ = null != eE && !0 !== eE.account.is_fedramp_compliant_workspace,
        eQ = eE?.account.is_fedramp_compliant_workspace === !1
      eA[12] !== eQ || eA[13] !== t.linkedApps
        ? ((x = { ...t.linkedApps, enabled: eQ, staleTime: P.D.ONE_MINUTE }),
          (eA[12] = eQ),
          (eA[13] = t.linkedApps),
          (eA[14] = x))
        : (x = eA[14])
      let { data: eY } = (0, o.I)(x)
      eA[15] !== eE?.features || eA[16] !== ej.email || eA[17] !== eO?.mfa_enabled_v2
        ? ((M = null != ej.email && (eE?.features?.includes("mfa") === !0 || eO?.mfa_enabled_v2 === !0)),
          (eA[15] = eE?.features),
          (eA[16] = ej.email),
          (eA[17] = eO?.mfa_enabled_v2),
          (eA[18] = M))
        : (M = eA[18])
      let eX = M,
        eJ = eX && void 0 === eO && !eq
      eA[19] !== eG ? ((S = eG.get("view")), (eA[19] = eG), (eA[20] = S)) : (S = eA[20])
      let e1 = S
      eA[21] !== eP.state ? ((G = (0, C.TK)(eP.state)), (eA[21] = eP.state), (eA[22] = G)) : (G = eA[22])
      let e0 = G
      ;(eA[23] !== e_ || eA[24] !== ej.userId || eA[25] !== e0 || eA[26] !== ek
        ? ((I = () => {
            e0 && ej.userId && ek.invalidateQueries({ queryKey: (0, tK.m)(e_, ej.userId).queryKey })
          }),
          (T = [e_, ej.userId, e0, ek]),
          (eA[23] = e_),
          (eA[24] = ej.userId),
          (eA[25] = e0),
          (eA[26] = ek),
          (eA[27] = I),
          (eA[28] = T))
        : ((I = eA[27]), (T = eA[28])),
        (0, l.useEffect)(I, T),
        eA[29] !== e_ || eA[30] !== ej.userId || eA[31] !== eP.state || eA[32] !== eG || eA[33] !== eT || eA[34] !== e1
          ? ((N = () => {
              let e = ej.userId
              if (
                "advanced-protection" !== e1 ||
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
                      s.accountId === e_ &&
                      s.userId === e &&
                      (0, ey.m)(s.accessToken) &&
                      eT(
                        (e) => {
                          if (
                            "advanced-protection" !== e.get("view") ||
                            "true" !== e.get("apm_disable_confirm") ||
                            e.has("apm_account_id")
                          )
                            return e
                          let t = new URLSearchParams(e)
                          return (t.append("apm_account_id", e_), t)
                        },
                        { replace: !0, state: eP.state },
                      )
                  })
                  .catch(sr),
                () => {
                  t = !0
                }
              )
            }),
            (E = [e_, ej.userId, eP.state, eG, eT, e1]),
            (eA[29] = e_),
            (eA[30] = ej.userId),
            (eA[31] = eP.state),
            (eA[32] = eG),
            (eA[33] = eT),
            (eA[34] = e1),
            (eA[35] = N),
            (eA[36] = E))
          : ((N = eA[35]), (E = eA[36])),
        (0, l.useEffect)(N, E),
        eA[37] === Symbol.for("react.memo_cache_sentinel") ? ((L = { mutationFn: so }), (eA[37] = L)) : (L = eA[37]))
      let e2 = (0, r.n)(L),
        { mutate: e3 } = e2
      eA[38] !== e_ ||
      eA[39] !== ej.userId ||
      eA[40] !== eP.hash ||
      eA[41] !== eP.pathname ||
      eA[42] !== eP.state ||
      eA[43] !== eM ||
      eA[44] !== eG ||
      eA[45] !== e1
        ? ((D = (e, t) => {
            if (null == e && (0, C.Qt)(eP.state)) return void eM(-1)
            let s = new URLSearchParams(eG)
            ;(null == e ? s.delete("view") : s.set("view", e),
              "account-pin" !== e && s.delete(W.Aj),
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
                              ? { accountId: e_, userId: ej.userId, recommendationAttempt: t ?? void 0 }
                              : void 0,
                        },
                },
              ))
          }),
          (eA[38] = e_),
          (eA[39] = ej.userId),
          (eA[40] = eP.hash),
          (eA[41] = eP.pathname),
          (eA[42] = eP.state),
          (eA[43] = eM),
          (eA[44] = eG),
          (eA[45] = e1),
          (eA[46] = D))
        : (D = eA[46])
      let e4 = D
      eA[47] !== e_ || eA[48] !== eP.state || eA[49] !== eG || eA[50] !== eT
        ? ((R = () => {
            let e = new URLSearchParams(eG)
            ;(e.set("view", "advanced-protection"),
              e.set("apm_disable_confirm", "true"),
              e.set("apm_account_id", e_),
              eT(e, { replace: !0, state: eP.state }))
          }),
          (eA[47] = e_),
          (eA[48] = eP.state),
          (eA[49] = eG),
          (eA[50] = eT),
          (eA[51] = R))
        : (R = eA[51])
      let e5 = R
      eA[52] !== eP.state || eA[53] !== eG || eA[54] !== eT
        ? ((O = () => {
            let e = new URLSearchParams(eG)
            ;(e.delete("apm_disable_confirm"), e.delete("apm_account_id"), eT(e, { replace: !0, state: eP.state }))
          }),
          (eA[52] = eP.state),
          (eA[53] = eG),
          (eA[54] = eT),
          (eA[55] = O))
        : (O = eA[55])
      let e6 = O
      eA[56] !== eG || eA[57] !== e3 || eA[58] !== eT
        ? ((U = (e, t) => {
            let s = void 0 === t ? null : t
            e3(s ? { ...e, actionAttemptId: s.actionAttemptId } : e, {
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
                  eT(s))
              },
            })
          }),
          (eA[56] = eG),
          (eA[57] = e3),
          (eA[58] = eT),
          (eA[59] = U))
        : (U = eA[59])
      let e9 = U
      eA[60] !== eG || eA[61] !== eT
        ? ((B = () => {
            let e = new URLSearchParams(eG)
            ;(e.delete("action"),
              e.delete("factor"),
              e.delete("factor_id"),
              e.delete("action_attempt_id"),
              "passkey_created" === e.get("_tm") && e.delete("_tm"),
              eT(e, { replace: !0 }))
          }),
          (eA[60] = eG),
          (eA[61] = eT),
          (eA[62] = B))
        : (B = eA[62])
      let e7 = B
      ;(eA[63] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = (0, n.jsx)(_.s, { slug: "security" })), (eA[63] = H))
        : (H = eA[63]),
        eA[64] !== e4 ? ((K = () => e4("advanced-protection")), (eA[64] = e4), (eA[65] = K)) : (K = eA[65]),
        eA[66] !== e_ || eA[67] !== K
          ? ((z = (0, n.jsx)(eb, { accountId: e_, onManage: K })), (eA[66] = e_), (eA[67] = K), (eA[68] = z))
          : (z = eA[68]),
        eA[69] !== eJ || eA[70] !== eF
          ? ((V = eJ ? (0, n.jsx)(F.mK, { isError: !1, onRetry: () => void eF() }) : null),
            (eA[69] = eJ),
            (eA[70] = eF),
            (eA[71] = V))
          : (V = eA[71]))
      let e8 = eX && !eq ? eO?.factors.passkeys.length : void 0
      ;(eA[72] !== e4 ? (($ = () => e4("passkeys")), (eA[72] = e4), (eA[73] = $)) : ($ = eA[73]),
        eA[74] !== e_ || eA[75] !== e8 || eA[76] !== $
          ? ((Q = (0, n.jsx)(tN, { accountId: e_, passkeyCount: e8, onOpenPasskeys: $ })),
            (eA[74] = e_),
            (eA[75] = e8),
            (eA[76] = $),
            (eA[77] = Q))
          : (Q = eA[77]),
        eA[78] !== e4 || eA[79] !== e$
          ? ((Y = e$
              ? (0, n.jsx)(j.t, {
                  children: (0, n.jsx)(A.kG, {
                    edgeRounding: "surface",
                    label: (0, n.jsx)(d.A, { ...q.L.title }),
                    description: (0, n.jsx)(d.A, { ...q.L.rowDescription }),
                    onClick: () => e4("account-pin"),
                    trailing: (0, n.jsx)(y.uM3, {}),
                  }),
                })
              : null),
            (eA[78] = e4),
            (eA[79] = e$),
            (eA[80] = Y))
          : (Y = eA[80]),
        eA[81] !== e_ || eA[82] !== eK || eA[83] !== e9 || eA[84] !== e4 || eA[85] !== e2.isPending || eA[86] !== eX
          ? ((X = eX
              ? (0, n.jsx)(eS, {
                  accountId: e_,
                  activeTrustedDeviceCount: eK,
                  pending: e2.isPending,
                  showLoading: !1,
                  onAction: e9,
                  onOpenAdvancedProtection: () => e4("advanced-protection"),
                })
              : null),
            (eA[81] = e_),
            (eA[82] = eK),
            (eA[83] = e9),
            (eA[84] = e4),
            (eA[85] = e2.isPending),
            (eA[86] = eX),
            (eA[87] = X))
          : (X = eA[87]),
        eA[88] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = (0, n.jsx)(w.X.Header, {
              title: (0, n.jsx)(d.A, {
                id: "settings.chatGpt.security.sessions",
                defaultMessage: "Sessions",
                description:
                  "Heading above active device sessions and security history in Security and login settings.",
              }),
            })),
            (eA[88] = J))
          : (J = eA[88]),
        eA[89] === Symbol.for("react.memo_cache_sentinel")
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
            (eA[89] = ee),
            (eA[90] = et))
          : ((ee = eA[89]), (et = eA[90])),
        eA[91] !== e4 ? ((en = () => e4("sessions")), (eA[91] = e4), (eA[92] = en)) : (en = eA[92]))
      let te = eB?.devices.length
      ;(eA[93] === Symbol.for("react.memo_cache_sentinel")
        ? ((ei = (0, n.jsx)(y.uM3, {})), (eA[93] = ei))
        : (ei = eA[93]),
        eA[94] !== te
          ? ((ea = (0, n.jsxs)(n.Fragment, { children: [te, ei] })), (eA[94] = te), (eA[95] = ea))
          : (ea = eA[95]),
        eA[96] !== en || eA[97] !== ea
          ? ((eo = (0, n.jsx)(A.kG, {
              edgeRounding: "surface",
              label: ee,
              description: et,
              onClick: en,
              trailing: ea,
            })),
            (eA[96] = en),
            (eA[97] = ea),
            (eA[98] = eo))
          : (eo = eA[98]),
        eA[99] !== eW || eA[100] !== ez || eA[101] !== e4
          ? ((er =
              ez && eW
                ? (0, n.jsx)(A.kG, {
                    ref: sd,
                    edgeRounding: "surface",
                    label: (0, n.jsx)(d.A, { ...eL.d.title }),
                    description: (0, n.jsx)(d.A, { ...eL.d.description }),
                    onClick: () => e4("history"),
                    trailing: (0, n.jsx)(y.uM3, {}),
                  })
                : null),
            (eA[99] = eW),
            (eA[100] = ez),
            (eA[101] = e4),
            (eA[102] = er))
          : (er = eA[102]),
        eA[103] !== eo || eA[104] !== er
          ? ((ec = (0, n.jsxs)(w.X, {
              children: [J, (0, n.jsx)(w.X.Content, { children: (0, n.jsxs)(j.t, { children: [eo, er] }) })],
            })),
            (eA[103] = eo),
            (eA[104] = er),
            (eA[105] = ec))
          : (ec = eA[105]),
        eA[106] !== eY || eA[107] !== eQ || eA[108] !== e4
          ? ((el = eQ
              ? (0, n.jsxs)(w.X, {
                  children: [
                    (0, n.jsx)(w.X.Header, {
                      title: (0, n.jsx)(d.A, {
                        id: "settings.chatGpt.security.loginConnections.title",
                        defaultMessage: "Login connections",
                        description:
                          "Short heading for the Login connections section in Security and login settings. Groups apps and sites the signed-in user has signed in to with ChatGPT; these are login connections, not network connections. No placeholders.",
                      }),
                    }),
                    (0, n.jsx)(w.X.Content, {
                      children: (0, n.jsx)(j.t, {
                        children: (0, n.jsx)(A.kG, {
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
                              null == eY ? null : eY.items.length + (eY.third_party_items?.length ?? 0),
                              (0, n.jsx)(y.uM3, {}),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                })
              : null),
            (eA[106] = eY),
            (eA[107] = eQ),
            (eA[108] = e4),
            (eA[109] = el))
          : (el = eA[109]),
        eA[110] !== e4 ? ((ed = () => e4("advanced-protection")), (eA[110] = e4), (eA[111] = ed)) : (ed = eA[111]),
        eA[112] !== e_ || eA[113] !== ed
          ? ((eu = (0, n.jsx)(ev, { accountId: e_, onOpenAdvancedProtection: ed })),
            (eA[112] = e_),
            (eA[113] = ed),
            (eA[114] = eu))
          : (eu = eA[114]),
        eA[115] !== e_ ? ((ep = (0, n.jsx)(eN, { accountId: e_ })), (eA[115] = e_), (eA[116] = ep)) : (ep = eA[116]),
        eA[117] !== z ||
        eA[118] !== V ||
        eA[119] !== Q ||
        eA[120] !== Y ||
        eA[121] !== X ||
        eA[122] !== ec ||
        eA[123] !== el ||
        eA[124] !== eu ||
        eA[125] !== ep
          ? ((eh = (0, n.jsxs)(v.P, { ref: sl, title: H, children: [z, V, null, Q, null, Y, X, ec, el, eu, ep] })),
            (eA[117] = z),
            (eA[118] = V),
            (eA[119] = Q),
            (eA[120] = Y),
            (eA[121] = X),
            (eA[122] = ec),
            (eA[123] = el),
            (eA[124] = eu),
            (eA[125] = ep),
            (eA[126] = eh))
          : (eh = eA[126]))
      let tt = eh
      if ("advanced-protection" === e1) {
        let e, t, s
        ;(eA[127] !== e_ || eA[128] !== eG
          ? ((e = (0, ey.PW)(eG, e_)), (eA[127] = e_), (eA[128] = eG), (eA[129] = e))
          : (e = eA[129]),
          eA[130] !== e4 ? ((t = () => e4(null)), (eA[130] = e4), (eA[131] = t)) : (t = eA[131]),
          eA[132] !== e_ || eA[133] !== e6 || eA[134] !== e5 || eA[135] !== e || eA[136] !== t
            ? ((s = (0, n.jsx)(ew, {
                accountId: e_,
                disableConfirmationRequested: e,
                onBack: t,
                onClearDisableConfirmation: e6,
                onRequestDisableConfirmation: e5,
              })),
              (eA[132] = e_),
              (eA[133] = e6),
              (eA[134] = e5),
              (eA[135] = e),
              (eA[136] = t),
              (eA[137] = s))
            : (s = eA[137]),
          (tt = s))
      } else if ("sessions" === e1) {
        let e,
          t,
          s,
          i,
          a = `${eR ? "trusted-devices" : "sessions"}:${e_}:${ej.userId}`
        ;(eA[138] !== e_ || eA[139] !== ej.userId || eA[140] !== eP.state
          ? ((e = (0, C.z7)(eP.state, e_, ej.userId)),
            (eA[138] = e_),
            (eA[139] = ej.userId),
            (eA[140] = eP.state),
            (eA[141] = e))
          : (e = eA[141]),
          eA[142] !== e_ || eA[143] !== ej.userId || eA[144] !== eP.state
            ? ((t = (0, C.x9)(eP.state, "securitySessionReviewIntent", e_, ej.userId)),
              (eA[142] = e_),
              (eA[143] = ej.userId),
              (eA[144] = eP.state),
              (eA[145] = t))
            : (t = eA[145]),
          eA[146] !== e4 ? ((s = () => e4(null)), (eA[146] = e4), (eA[147] = s)) : (s = eA[147]),
          eA[148] !== e_ || eA[149] !== eR || eA[150] !== a || eA[151] !== e || eA[152] !== t || eA[153] !== s
            ? ((i = (0, n.jsx)(
                t0,
                { accountId: e_, includeTrustedDevices: eR, acknowledgeReview: e, recommendationAttempt: t, onBack: s },
                a,
              )),
              (eA[148] = e_),
              (eA[149] = eR),
              (eA[150] = a),
              (eA[151] = e),
              (eA[152] = t),
              (eA[153] = s),
              (eA[154] = i))
            : (i = eA[154]),
          (tt = i))
      } else if ("biometric-factors" === e1) {
        let e
        ;(eA[155] !== tt
          ? ((e = (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(n.Fragment, { children: tt })] })),
            (eA[155] = tt),
            (eA[156] = e))
          : (e = eA[156]),
          (tt = e))
      } else if ("history" === e1) {
        let e, t, s
        ;(eA[157] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(b.y, {})), (eA[157] = e))
          : (e = eA[157]),
          eA[158] !== e4 ? ((t = () => e4(null)), (eA[158] = e4), (eA[159] = t)) : (t = eA[159]),
          eA[160] !== e_ || eA[161] !== t
            ? ((s = (0, n.jsx)(l.Suspense, { fallback: e, children: (0, n.jsx)(ss, { accountId: e_, onBack: t }) })),
              (eA[160] = e_),
              (eA[161] = t),
              (eA[162] = s))
            : (s = eA[162]),
          (tt = s))
      } else if ("linked-apps" === e1 && eQ) {
        let e, t
        ;(eA[163] !== e4 ? ((e = () => e4(null)), (eA[163] = e4), (eA[164] = e)) : (e = eA[164]),
          eA[165] !== e_ || eA[166] !== e
            ? ((t = (0, n.jsx)(tf, { accountId: e_, onBack: e })), (eA[165] = e_), (eA[166] = e), (eA[167] = t))
            : (t = eA[167]),
          (tt = t))
      } else if ("account-pin" === e1 && e$) {
        let e, t
        ;(eA[168] !== e4 ? ((e = () => e4(null)), (eA[168] = e4), (eA[169] = e)) : (e = eA[169]),
          eA[170] !== e_ || eA[171] !== e
            ? ((t = (0, n.jsx)(Z, { accountId: e_, onBack: e })), (eA[170] = e_), (eA[171] = e), (eA[172] = t))
            : (t = eA[172]),
          (tt = t))
      } else if (("passkeys" === e1 || "yubikey" === e1) && eX) {
        let e, t, s
        ;(eA[173] !== e4 || eA[174] !== eZ
          ? ((e = eZ ? () => e4("yubikey") : void 0), (eA[173] = e4), (eA[174] = eZ), (eA[175] = e))
          : (e = eA[175]),
          eA[176] !== e4 ? ((t = () => e4(null)), (eA[176] = e4), (eA[177] = t)) : (t = eA[177]),
          eA[178] !== e_ || eA[179] !== e9 || eA[180] !== e2.isPending || eA[181] !== e || eA[182] !== t
            ? ((s = (0, n.jsx)(tU, { accountId: e_, pending: e2.isPending, onAction: e9, onOrder: e, onBack: t })),
              (eA[178] = e_),
              (eA[179] = e9),
              (eA[180] = e2.isPending),
              (eA[181] = e),
              (eA[182] = t),
              (eA[183] = s))
            : (s = eA[183]),
          (tt = s))
      }
      return (
        eA[184] !== e_ ||
        eA[185] !== eP.state ||
        eA[186] !== eM ||
        eA[187] !== eG ||
        eA[188] !== eT ||
        eA[189] !== eX ||
        eA[190] !== eZ ||
        eA[191] !== e1
          ? ((eg =
              "yubikey" === e1 && eX && eZ
                ? (0, n.jsx)(l.Suspense, {
                    fallback: (0, n.jsx)(b.y, {}),
                    children: (0, n.jsx)(sn, {
                      accountId: e_,
                      onClose: () => {
                        if ((0, C.Qt)(eP.state)) eM(-1)
                        else {
                          let e = new URLSearchParams(eG)
                          ;(e.set("view", "passkeys"), eT(e, { replace: !0 }))
                        }
                      },
                    }),
                  })
                : null),
            (eA[184] = e_),
            (eA[185] = eP.state),
            (eA[186] = eM),
            (eA[187] = eG),
            (eA[188] = eT),
            (eA[189] = eX),
            (eA[190] = eZ),
            (eA[191] = e1),
            (eA[192] = eg))
          : (eg = eA[192]),
        eA[193] !== e2
          ? ((em = e2.isError || "failed" === e2.data ? (0, n.jsx)(ex, { onClose: () => e2.reset() }) : null),
            (eA[193] = e2),
            (eA[194] = em))
          : (em = eA[194]),
        eA[195] !== e_ || eA[196] !== eU || eA[197] !== e7 || eA[198] !== eX
          ? ((ef =
              eU && "complete" !== eU.action && (eX || "enable" === eU.action)
                ? (0, n.jsx)(eI, { accountId: e_, action: eU, onClose: e7 })
                : null),
            (eA[195] = e_),
            (eA[196] = eU),
            (eA[197] = e7),
            (eA[198] = eX),
            (eA[199] = ef))
          : (ef = eA[199]),
        eA[200] !== tt || eA[201] !== eg || eA[202] !== em || eA[203] !== ef
          ? ((eC = (0, n.jsxs)(n.Fragment, { children: [tt, eg, em, ef] })),
            (eA[200] = tt),
            (eA[201] = eg),
            (eA[202] = em),
            (eA[203] = ef),
            (eA[204] = eC))
          : (eC = eA[204]),
        eC
      )
    }
    function so(e) {
      return (0, ey._M)(e)
    }
    function sr() {}
    function sc(e) {
      return e.is_trusted_device && !tX(e)
    }
    function sl(e) {
      return (0, eR.U)(e, "security_settings_page_viewed")
    }
    function sd(e) {
      return (0, eR.U)(e, "security_history_entrypoint_viewed")
    }
  },
  J7hs(e, t, s) {
    s.d(t, { d: () => m })
    var n = s("ABep"),
      i = s("QosV")
    let a = (0, s("nkTT").a)({
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
      c = s("ygO2"),
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
        b,
        v,
        w,
        C,
        A,
        _,
        j,
        k,
        P,
        M,
        S,
        G,
        I,
        T = (0, i.c)(97),
        {
          step: N,
          currentPin: E,
          nextPin: L,
          confirmation: D,
          error: R,
          lockedFor: O,
          isPending: q,
          onCurrentPinChange: F,
          onNextPinChange: U,
          onConfirmationChange: B,
          onClearError: H,
          onLockoutExpired: K,
          onSubmit: W,
          onClose: z,
          onForgotPin: V,
        } = e,
        [$, Z] = (0, o.useState)(!1),
        Q = "change-current" === N || "unlock" === N,
        Y = "create-confirm" === N || "change-confirm" === N || "reset-confirm" === N,
        X = Q || Y || "create" === N || "change-new" === N || "reset-new" === N,
        J = O > 0 || "locked" === R,
        ee = (0, o.useEffectEvent)(K)
      if (
        (T[0] !== Q || T[1] !== J || T[2] !== O || T[3] !== ee || T[4] !== X
          ? ((t = () => {
              if (!X || !Q || !J) return
              let e = setTimeout(ee, 1e3 * (O || 60))
              return () => clearTimeout(e)
            }),
            (T[0] = Q),
            (T[1] = J),
            (T[2] = O),
            (T[3] = ee),
            (T[4] = X),
            (T[5] = t))
          : (t = T[5]),
        T[6] !== Q || T[7] !== J || T[8] !== O || T[9] !== X
          ? ((s = [X, Q, J, O]), (T[6] = Q), (T[7] = J), (T[8] = O), (T[9] = X), (T[10] = s))
          : (s = T[10]),
        (0, o.useEffect)(t, s),
        !X)
      )
        return null
      if ($) {
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
          T[14] === Symbol.for("react.memo_cache_sentinel") ? ((i = () => Z(!1)), (T[14] = i)) : (i = T[14]),
          T[15] !== z
            ? ((a = () => {
                ;(Z(!1), z())
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
      Q ? (et = E) : Y && (et = D)
      let es = h.L.newPinInput
      Q ? (es = h.L.currentPinInput) : Y && (es = h.L.confirmPinInput)
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
      } else if (Y) {
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
      } else if (!Q) {
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
      let ei = Q && !J ? "pinEntry" : "narrow"
      ;(T[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { "aria-describedby": void 0 }), (T[32] = y))
        : (y = T[32]),
        T[33] !== Q || T[34] !== q || T[35] !== z
          ? ((x = (e) => {
              e || q || (Q ? z() : Z(!0))
            }),
            (T[33] = Q),
            (T[34] = q),
            (T[35] = z),
            (T[36] = x))
          : (x = T[36]))
      let ea = Q ? "codeEntry" : "default"
      ;(T[37] !== W
        ? ((b = (e) => {
            ;(e.preventDefault(), W())
          }),
          (T[37] = W),
          (T[38] = b))
        : (b = T[38]),
        T[39] !== Y || T[40] !== Q || T[41] !== N
          ? ((v = Q || Y || "create" === N ? (0, n.jsx)(u.I, { asset: a }) : void 0),
            (T[39] = Y),
            (T[40] = Q),
            (T[41] = N),
            (T[42] = v))
          : (v = T[42]),
        T[43] !== m
          ? ((w = (0, n.jsx)(l.L3, { className: "select-none", children: m })), (T[43] = m), (T[44] = w))
          : (w = T[44]),
        T[45] !== q || T[46] !== f || T[47] !== v || T[48] !== w
          ? ((C = (0, n.jsx)(d.c7, {
              icon: v,
              iconClassName: "self-center",
              iconVariant: "outlinedCircle",
              iconLoading: q,
              subtitle: f,
              subtitleSize: "sm",
              subtitleTone: "secondary",
              title: w,
            })),
            (T[45] = q),
            (T[46] = f),
            (T[47] = v),
            (T[48] = w),
            (T[49] = C))
          : (C = T[49]),
        T[50] !== Y ||
        T[51] !== Q ||
        T[52] !== R ||
        T[53] !== es ||
        T[54] !== et ||
        T[55] !== q ||
        T[56] !== J ||
        T[57] !== H ||
        T[58] !== B ||
        T[59] !== F ||
        T[60] !== U ||
        T[61] !== W ||
        T[62] !== N
          ? ((A =
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
                          readOnly: q,
                          invalid: null != R,
                          onChange: (e) => {
                            ;(H(), Q ? F(e) : Y ? B(e) : U(e), 4 === e.length && W(e))
                          },
                        },
                        N,
                      ),
                    ],
                  })),
            (T[50] = Y),
            (T[51] = Q),
            (T[52] = R),
            (T[53] = es),
            (T[54] = et),
            (T[55] = q),
            (T[56] = J),
            (T[57] = H),
            (T[58] = B),
            (T[59] = F),
            (T[60] = U),
            (T[61] = W),
            (T[62] = N),
            (T[63] = A))
          : (A = T[63]),
        T[64] !== Q || T[65] !== J || T[66] !== V
          ? ((_ =
              Q && J && null != V
                ? (0, n.jsx)(c.$, {
                    className: "self-center",
                    type: "button",
                    color: "dangerOutline",
                    size: "medium",
                    onClick: V,
                    children: (0, n.jsx)(r.A, {
                      id: "lockedChats.pin.reset",
                      defaultMessage: "Reset PIN",
                      description: "Open Account PIN settings to reset a forgotten PIN after a lockout",
                    }),
                  })
                : null),
            (T[64] = Q),
            (T[65] = J),
            (T[66] = V),
            (T[67] = _))
          : (_ = T[67]),
        T[68] !== Q || T[69] !== R || T[70] !== J || T[71] !== K
          ? ((j =
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
                        onClick: K,
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
            (T[68] = Q),
            (T[69] = R),
            (T[70] = J),
            (T[71] = K),
            (T[72] = j))
          : (j = T[72]),
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
        T[78] !== C || T[79] !== A || T[80] !== _ || T[81] !== j || T[82] !== k
          ? ((P = (0, n.jsxs)(d.OO, { className: "gap-4 text-center", children: [C, A, _, j, k] })),
            (T[78] = C),
            (T[79] = A),
            (T[80] = _),
            (T[81] = j),
            (T[82] = k),
            (T[83] = P))
          : (P = T[83]))
      let eo = q || (Q && J)
      return (
        T[84] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, n.jsx)(r.A, { ...h.L.continue })), (T[84] = M))
          : (M = T[84]),
        T[85] !== eo
          ? ((S = (0, n.jsx)("button", {
              type: "submit",
              className: "sr-only",
              tabIndex: -1,
              disabled: eo,
              children: M,
            })),
            (T[85] = eo),
            (T[86] = S))
          : (S = T[86]),
        T[87] !== q || T[88] !== P || T[89] !== S || T[90] !== ea || T[91] !== b
          ? ((G = (0, n.jsxs)(d.R4, { as: "form", variant: ea, "aria-busy": q, onSubmit: b, children: [P, S] })),
            (T[87] = q),
            (T[88] = P),
            (T[89] = S),
            (T[90] = ea),
            (T[91] = b),
            (T[92] = G))
          : (G = T[92]),
        T[93] !== G || T[94] !== ei || T[95] !== x
          ? ((I = (0, n.jsx)(l.lG, {
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
            (T[96] = I))
          : (I = T[96]),
        I
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
  chIh(e, t, s) {
    s.d(t, { O: () => f, y: () => m })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("TEcx")
    let o = (0, s("nkTT").a)({
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
      body: '<path d="M14.9506 2.51071C16.6104 1.89607 18.3752 3.12451 18.3754 4.8945V13.9375C18.3754 15.6723 16.6755 16.8972 15.0297 16.3486L12.1254 15.3799V15.417C12.1253 16.2155 11.8829 16.9743 11.3363 17.5371C10.7855 18.104 10.0193 18.3749 9.16638 18.375C8.31357 18.3749 7.54819 18.1039 6.99744 17.5371C6.4507 16.9743 6.20842 16.2156 6.20837 15.417V13.4101C6.13423 13.3877 6.0574 13.375 5.97986 13.375H3.75037C2.34664 13.375 1.20837 12.2367 1.20837 10.833V8.33298C1.20869 6.92952 2.34684 5.79196 3.75037 5.79196H5.95154C6.04523 5.79193 6.13808 5.77467 6.22595 5.74216L14.9506 2.51071ZM7.95837 15.417C7.95842 15.8678 8.09096 16.151 8.25232 16.3174C8.40981 16.4794 8.68647 16.6249 9.16638 16.625C9.64653 16.6249 9.92295 16.4794 10.0804 16.3174C10.2419 16.1511 10.3753 15.8681 10.3754 15.417V14.7968L7.95837 13.9912V15.417ZM16.6254 4.8945C16.6252 4.34332 16.0749 3.96092 15.558 4.15231L6.92224 7.35055V11.8017L15.5834 14.6884C16.0959 14.8591 16.6254 14.4777 16.6254 13.9375V4.8945ZM3.75037 7.54196C3.31334 7.54196 2.95869 7.89602 2.95837 8.33298V10.833C2.95837 11.2702 3.31314 11.625 3.75037 11.625H5.17224V7.54196H3.75037Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var r = s("hwJp"),
      c = s("rPwO"),
      l = s("O0JV"),
      d = s("on57"),
      u = s("zd8w"),
      p = s("HOLv"),
      h = s("GO7r")
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
        a,
        h,
        m = (0, i.c)(23),
        { app: f, size: x, borderless: b } = e,
        v = void 0 === x ? "list" : x,
        w = void 0 !== b && b,
        C = "codex_generated_site" === f.client_app_type,
        A = "ads" === f.client_app_type
      m[0] !== f.logo_uri
        ? ((t = (function (e) {
            if (null == e || "" === e.trim()) return null
            try {
              let t = new URL(e.trim())
              return "https:" === t.protocol && g.has(t.hostname) ? t.href : null
            } catch {
              return null
            }
          })(f.logo_uri)),
          (m[0] = f.logo_uri),
          (m[1] = t))
        : (t = m[1])
      let _ = t,
        [j, k] = (0, u.useState)(null),
        [P, M] = (0, u.useState)(null),
        S = null != _ && P === _,
        G = null != _ && j === _ && !S
      if (C) {
        let e,
          t = "detail" === v ? l.g : c.t
        ;(m[2] !== t
          ? ((e = (0, n.jsx)(p.I, { className: "shrink-0", asset: t, focusable: "false" })), (m[2] = t), (m[3] = e))
          : (e = m[3]),
          (s = e))
      } else if (A) {
        let e,
          t = "detail" === v ? r.o : o
        ;(m[4] !== t
          ? ((e = (0, n.jsx)(p.I, { className: "shrink-0", asset: t, focusable: "false" })), (m[4] = t), (m[5] = e))
          : (e = m[5]),
          (s = e))
      } else {
        let e,
          t,
          i,
          a = "detail" === v ? "text-xl" : "text-sm"
        ;(m[6] !== a ? ((e = (0, d.A)("font-medium text-secondary", a)), (m[6] = a), (m[7] = e)) : (e = m[7]),
          m[8] !== f.name
            ? ((t = Array.from(f.name.trim())[0]?.toUpperCase()), (m[8] = f.name), (m[9] = t))
            : (t = m[9]),
          m[10] !== e || m[11] !== t
            ? ((i = (0, n.jsx)("span", { className: e, children: t })), (m[10] = e), (m[11] = t), (m[12] = i))
            : (i = m[12]),
          (s = i))
      }
      let I = !G && s
      return (
        m[13] !== S || m[14] !== G || m[15] !== _ || m[16] !== v
          ? ((a =
              null == _ || S
                ? null
                : (0, n.jsx)(
                    "img",
                    {
                      className: (0, d.A)("detail" === v ? "size-10" : "size-6", "object-contain", !G && "hidden"),
                      alt: "",
                      src: _,
                      referrerPolicy: "no-referrer",
                      onLoad: () => {
                        ;(k(_), M(null))
                      },
                      onError: () => M(_),
                    },
                    _,
                  )),
            (m[13] = S),
            (m[14] = G),
            (m[15] = _),
            (m[16] = v),
            (m[17] = a))
          : (a = m[17]),
        m[18] !== w || m[19] !== v || m[20] !== I || m[21] !== a
          ? ((h = (0, n.jsxs)(y, { size: v, borderless: w, children: [I, a] })),
            (m[18] = w),
            (m[19] = v),
            (m[20] = I),
            (m[21] = a),
            (m[22] = h))
          : (h = m[22]),
        h
      )
    }
    function f(e) {
      let t,
        s,
        o = (0, i.c)(10),
        { app: r, borderless: c } = e,
        l = void 0 !== c && c
      switch (r.type) {
        case "apple": {
          let e
          ;(o[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(h.PPn, {})), (o[0] = e)) : (e = o[0]),
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
          ;(o[2] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(h.HUG, {})), (o[2] = e)) : (e = o[2]),
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
          ? ((s = (0, n.jsx)(y, { borderless: l, children: t })), (o[7] = l), (o[8] = t), (o[9] = s))
          : (s = o[9]),
        s
      )
    }
    function y(e) {
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
  },
  mp9y(e, t, s) {
    s.d(t, { M: () => W, J: () => $ })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("MVHH"),
      o = s("irkb"),
      r = s("T0Rc"),
      c = s("xSOA"),
      l = s("pmIL"),
      d = s("zTeN"),
      u = s("rFhZ"),
      p = s("zd8w"),
      h = s("oyxz"),
      g = s("Wf1j"),
      m = s("HZfM"),
      f = s("ASxG"),
      y = s("EOo5"),
      x = s("ygO2"),
      b = s("uuN8"),
      v = s("JNtf"),
      w = s("mUDD"),
      C = s("zLIa"),
      A = s("yGJW"),
      _ = s("OWtl"),
      j = s("hZax"),
      k = s("aepO"),
      P = s("eShZ"),
      M = s("CaJA"),
      S = s("JOHL"),
      G = s("FBm3"),
      I = s("Qgfj"),
      T = s("ZtSy"),
      N = s("EShr")
    let E = (0, I.YK)({
        intro: {
          id: "settings.chatGpt.security.guidedTotp.intro.title",
          defaultMessage: "Set up an authenticator app",
          description: "First step of setting up an authenticator app for log-in.",
        },
        pair: {
          id: "settings.chatGpt.security.guidedTotp.pair.title",
          defaultMessage: "Add your account to the app",
          description: "Title above the setup key and QR code for connecting an authenticator app.",
        },
        verify: {
          id: "settings.chatGpt.security.guidedTotp.verify.title",
          defaultMessage: "Enter the code",
          description: "Title asking for the code from the newly connected authenticator app.",
        },
        success: {
          id: "settings.chatGpt.security.guidedTotp.success.title",
          defaultMessage: "Authenticator app added",
          description: "Confirms the authenticator app has been verified and activated.",
        },
      }),
      L = (0, I.YK)({
        intro: {
          id: "settings.chatGpt.security.guidedTotp.intro.description",
          defaultMessage:
            "You’ll need an authenticator app or a password manager that generates verification codes. Use one you already have, or download one of these:",
          description: "Introduces the list of compatible authenticator apps and password managers.",
        },
        pair: {
          id: "settings.chatGpt.security.guidedTotp.pair.description",
          defaultMessage: "Copy and paste the setup key into your authenticator app, or scan the QR code with the app",
          description: "Instructions for connecting an authenticator app with the setup key or QR code.",
        },
        verify: {
          id: "settings.chatGpt.security.guidedTotp.verify.description",
          defaultMessage: "Enter the 6-digit code shown in your authenticator app to finish setup",
          description: "Instructions for proving that the newly connected authenticator app works.",
        },
        success: {
          id: "settings.chatGpt.security.guidedTotp.success.description",
          defaultMessage:
            "Keep your authenticator app secure. If you lose access to it, you may not be able to log in.",
          description: "Reminder to retain access to the authenticator app after setting it up.",
        },
      }),
      D = [
        {
          name: (0, I.zR)({
            id: "settings.chatGpt.security.guidedTotp.apple",
            defaultMessage: "Apple Passwords",
            description: "Official product name of Apple’s Passwords app, linked as an authenticator option.",
          }),
          logo: "apple-passwords.png",
          url: "https://support.apple.com/120758",
        },
        {
          name: (0, I.zR)({
            id: "settings.chatGpt.security.guidedTotp.google",
            defaultMessage: "Google Authenticator",
            description: "Official product name of Google Authenticator, linked as an authenticator option.",
          }),
          logo: "google-authenticator.png",
          url: "https://support.google.com/accounts/answer/1066447",
        },
        {
          name: (0, I.zR)({
            id: "settings.chatGpt.security.guidedTotp.microsoft",
            defaultMessage: "Microsoft Authenticator",
            description: "Official product name of Microsoft Authenticator, linked as an authenticator option.",
          }),
          logo: "microsoft-authenticator.png",
          url: "https://www.microsoft.com/security/mobile-authenticator-app",
        },
      ]
    function R(e) {
      let t,
        s,
        a,
        o,
        r,
        c,
        l,
        d,
        u,
        m,
        f,
        y,
        A,
        _,
        j,
        P = (0, i.c)(51),
        {
          step: M,
          setupKey: S,
          pairingContent: G,
          code: I,
          onChangeCode: T,
          pending: R,
          error: q,
          onClose: U,
          onContinue: B,
        } = e,
        H = (0, g.A)(),
        [K, W] = (0, p.useState)(F),
        z = (0, p.useRef)(null),
        V = (0, p.useId)()
      ;(P[0] !== M
        ? ((t = () => {
            "verify" !== M && z.current?.focus()
          }),
          (s = [M]),
          (P[0] = M),
          (P[1] = t),
          (P[2] = s))
        : ((t = P[1]), (s = P[2])),
        (0, p.useEffect)(t, s),
        P[3] !== I || P[4] !== R || P[5] !== S || P[6] !== M
          ? ((a = R || ("pair" === M && !S) || ("verify" === M && !/^\d{6}$/.test(I))),
            (P[3] = I),
            (P[4] = R),
            (P[5] = S),
            (P[6] = M),
            (P[7] = a))
          : (a = P[7]))
      let $ = a
      ;(P[8] !== U || P[9] !== R
        ? ((o = (e) => {
            e || R || U()
          }),
          (P[8] = U),
          (P[9] = R),
          (P[10] = o))
        : (o = P[10]),
        P[11] !== $ || P[12] !== B
          ? ((r = (e) => {
              ;(e.preventDefault(), $ || B())
            }),
            (P[11] = $),
            (P[12] = B),
            (P[13] = r))
          : (r = P[13]))
      let Z = E[M]
      P[14] !== Z
        ? ((c = (0, n.jsx)(v.L3, {
            asChild: !0,
            children: (0, n.jsx)("h2", {
              ref: z,
              tabIndex: -1,
              className: "pe-6 text-lg leading-6.5 font-semibold focus:outline-none",
              children: (0, n.jsx)(h.A, { ...Z }),
            }),
          })),
          (P[14] = Z),
          (P[15] = c))
        : (c = P[15])
      let Q = L[M]
      return (
        P[16] !== Q
          ? ((l = (0, n.jsx)(v.rr, { className: "text-sm text-secondary", children: (0, n.jsx)(h.A, { ...Q }) })),
            (P[16] = Q),
            (P[17] = l))
          : (l = P[17]),
        P[18] !== c || P[19] !== l
          ? ((d = (0, n.jsxs)("div", { className: "flex flex-col gap-2", children: [c, l] })),
            (P[18] = c),
            (P[19] = l),
            (P[20] = d))
          : (d = P[20]),
        P[21] !== M
          ? ((u = "intro" === M ? (0, n.jsx)("ul", { className: "flex flex-col gap-4", children: D.map(O) }) : null),
            (P[21] = M),
            (P[22] = u))
          : (u = P[22]),
        P[23] !== H || P[24] !== K || P[25] !== G || P[26] !== S || P[27] !== M
          ? ((m =
              "pair" === M
                ? (0, n.jsxs)("div", {
                    className: "flex flex-col gap-6",
                    "data-dd-privacy": "hidden",
                    children: [
                      (0, n.jsx)(N.T, {
                        fullWidth: !0,
                        variant: "form",
                        selectedId: K,
                        onSelect: W,
                        ariaLabel: H.formatMessage({
                          id: "settings.chatGpt.security.guidedTotp.pair.method",
                          defaultMessage: "Setup method",
                          description: "Accessible name of the control to choose the setup key or QR code.",
                        }),
                        options: [
                          {
                            id: "key",
                            label: (0, n.jsx)(h.A, {
                              id: "settings.chatGpt.security.guidedTotp.pair.key",
                              defaultMessage: "Key",
                              description: "Shows the manual setup key for the authenticator app.",
                            }),
                          },
                          {
                            id: "qr",
                            label: (0, n.jsx)(h.A, {
                              id: "settings.chatGpt.security.guidedTotp.pair.qr",
                              defaultMessage: "QR code",
                              description: "Shows the scannable QR code for the authenticator app.",
                            }),
                          },
                        ],
                      }),
                      "key" === K && S
                        ? (0, n.jsxs)("div", {
                            className: "flex items-center justify-between gap-3 rounded-xl bg-primary-soft p-4",
                            children: [
                              (0, n.jsx)("span", {
                                className: "min-w-0 text-base break-all select-text",
                                dir: "ltr",
                                children: S,
                              }),
                              (0, n.jsx)(b.i, {
                                buttonText: !0,
                                showIcon: !1,
                                variant: "primaryAction",
                                className: "min-w-18 justify-center rounded-full",
                                ariaLabel: H.formatMessage({
                                  id: "settings.chatGpt.security.guidedTotp.pair.copy",
                                  defaultMessage: "Copy setup key",
                                  description: "Accessible label for copying the authenticator setup key.",
                                }),
                                onCopy: (e) => (0, k.E)(S, e),
                              }),
                            ],
                          })
                        : G,
                    ],
                  })
                : null),
            (P[23] = H),
            (P[24] = K),
            (P[25] = G),
            (P[26] = S),
            (P[27] = M),
            (P[28] = m))
          : (m = P[28]),
        P[29] !== I || P[30] !== q || P[31] !== V || P[32] !== T || P[33] !== R || P[34] !== M
          ? ((f =
              "verify" === M
                ? (0, n.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    "data-dd-privacy": "hidden",
                    children: [
                      (0, n.jsxs)("label", {
                        className: "flex flex-col gap-2 text-sm",
                        children: [
                          (0, n.jsx)(h.A, {
                            id: "settings.chatGpt.security.guidedTotp.verify.code",
                            defaultMessage: "Code",
                            description: "Label for the six-digit code from the authenticator app.",
                          }),
                          (0, n.jsx)(C.pd, {
                            variant: "onboarding",
                            name: "verification-code",
                            autoFocus: !0,
                            inputMode: "numeric",
                            autoComplete: "one-time-code",
                            pattern: "[0-9]{6}",
                            maxLength: 6,
                            placeholder: "000000",
                            required: !0,
                            disabled: R,
                            value: I,
                            onChange: (e) => T(e.target.value.replace(/\D/g, "")),
                            "aria-invalid": null != q || void 0,
                            "aria-describedby": q ? V : void 0,
                          }),
                        ],
                      }),
                      q
                        ? (0, n.jsx)("div", { id: V, role: "alert", className: "text-sm text-danger", children: q })
                        : null,
                    ],
                  })
                : null),
            (P[29] = I),
            (P[30] = q),
            (P[31] = V),
            (P[32] = T),
            (P[33] = R),
            (P[34] = M),
            (P[35] = f))
          : (f = P[35]),
        P[36] !== M
          ? ((y =
              "success" === M
                ? (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.security.guidedTotp.done",
                    defaultMessage: "Done",
                    description: "Dismisses the successful authenticator setup.",
                  })
                : (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.security.guidedTotp.continue",
                    defaultMessage: "Continue",
                    description: "Advances to the next step of authenticator setup.",
                  })),
            (P[36] = M),
            (P[37] = y))
          : (y = P[37]),
        P[38] !== $ || P[39] !== y
          ? ((A = (0, n.jsx)(w.Es, {
              children: (0, n.jsx)(x.$, {
                type: "submit",
                color: "primary",
                size: "dialogAction",
                className: "min-h-10.5",
                radius: "full",
                disabled: $,
                children: y,
              }),
            })),
            (P[38] = $),
            (P[39] = y),
            (P[40] = A))
          : (A = P[40]),
        P[41] !== d || P[42] !== u || P[43] !== m || P[44] !== f || P[45] !== A || P[46] !== r
          ? ((_ = (0, n.jsxs)(w.R4, {
              as: "form",
              variant: "chatgpt",
              size: "viewport",
              className: "gap-6 p-6",
              onSubmit: r,
              children: [d, u, m, f, A],
            })),
            (P[41] = d),
            (P[42] = u),
            (P[43] = m),
            (P[44] = f),
            (P[45] = A),
            (P[46] = r),
            (P[47] = _))
          : (_ = P[47]),
        P[48] !== _ || P[49] !== o
          ? ((j = (0, n.jsx)(v.lG, { open: !0, size: "feature", variant: "form", onOpenChange: o, children: _ })),
            (P[48] = _),
            (P[49] = o),
            (P[50] = j))
          : (j = P[50]),
        j
      )
    }
    function O(e) {
      return (0, n.jsx)(
        "li",
        {
          children: (0, n.jsxs)(T.G, {
            href: e.url,
            initiator: "open_in_browser_bridge",
            openTarget: "external-browser",
            isBrowserEnabled: !1,
            appearance: "inherit",
            underline: "hover",
            className: "flex w-fit items-center gap-3 text-sm font-medium",
            children: [
              (0, n.jsx)("img", {
                src: `https://auth-cdn.oaistatic.com/static/3p/logos/${e.logo}`,
                alt: "",
                className: "size-9 shrink-0 rounded-lg",
                onError: q,
              }),
              (0, n.jsx)(h.A, { ...e.name }),
            ],
          }),
        },
        e.url,
      )
    }
    function q(e) {
      e.currentTarget.hidden = !0
    }
    function F() {
      return "qr"
    }
    var U = s("vysM"),
      B = s("LLN1")
    let H = f.object({ session_id: f.string().min(1), factor: f.object({ id: f.string().min(1) }) }),
      K = {
        totp: (0, n.jsx)(h.A, {
          id: "settings.chatGpt.security.mfa.totpTitle",
          defaultMessage: "Connect your authenticator app",
          description: "Title of the authenticator app setup dialog in Security and login settings.",
        }),
        sms: (0, n.jsx)(h.A, {
          id: "settings.chatGpt.security.mfa.smsTitle",
          defaultMessage: "Add your phone number",
          description: "Title of the text-message MFA setup dialog in Security and login settings.",
        }),
        push_auth: (0, n.jsx)(h.A, {
          id: "settings.chatGpt.security.mfa.pushTitle",
          defaultMessage: "Enable push notifications",
          description:
            "Title of the confirmation to use trusted-device push notifications for multi-factor authentication.",
        }),
      }
    function W(e) {
      let t,
        s,
        u,
        f,
        P,
        I,
        T,
        N,
        E,
        L,
        D,
        O,
        q,
        F,
        W,
        $,
        Q,
        Y,
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
        ed,
        eu,
        ep,
        eh,
        eg = (0, i.c)(157),
        { accountId: em, factor: ef, email: ey, onClose: ex, onActivated: eb } = e,
        ev = (0, d.gh)(_.u),
        ew = (0, g.A)(),
        [eC] = (0, m.ok)()
      eC.get("mfa_source")
      let eA = "settings"
      eg[0] !== ew
        ? ((t = ew.formatMessage({
            id: "settings.chatGpt.security.mfa.copyCode",
            defaultMessage: "Copy code",
            description:
              "Button that copies the secret setup key for manual entry in an authenticator app, not the six-digit verification code.",
          })),
          (eg[0] = ew),
          (eg[1] = t))
        : (t = eg[1])
      let e_ = t,
        ej = (0, o.jE)(),
        { userId: ek } = (0, y.As)(),
        eP = (0, j.AS)()
      eg[2] !== ef || eg[3] !== eP || eg[4] !== ek
        ? ((s = () => {
            if ("totp" !== ef || null == ek) return null
            try {
              if (eP.getContext().user?.userID !== ek) return null
              let e = (0, j.XM)(eP, "3720919518")
              return { client: eP, userId: ek, layer: e, guided: !0 === e.__value.enabled }
            } catch {
              return null
            }
          }),
          (eg[2] = ef),
          (eg[3] = eP),
          (eg[4] = ek),
          (eg[5] = s))
        : (s = eg[5])
      let [eM] = (0, p.useState)(s),
        eS = eM?.client === eP && eM.userId === ek ? eM : null,
        [eG, eI] = (0, p.useState)("intro"),
        eT = (0, p.useRef)(!1),
        eN = (0, p.useRef)(!1)
      ;(eg[6] !== eS || eg[7] !== ev
        ? ((u = () => {
            if (null != eS && !eT.current) {
              eT.current = !0
              try {
                if (eS.client.getContext().user?.userID !== eS.userId) return
                ;(eS.layer.get("enabled", !1),
                  (0, A.yy)(ev, a.RN, { client: "CHATGPT_WEB_TOTP_ENROLLMENT_CLIENT_WEBVIEW" }))
              } catch {}
            }
          }),
          (f = [eS, ev]),
          (eg[6] = eS),
          (eg[7] = ev),
          (eg[8] = u),
          (eg[9] = f))
        : ((u = eg[8]), (f = eg[9])),
        (0, p.useEffect)(u, f))
      let [eE, eL] = (0, p.useState)(""),
        [eD, eR] = (0, p.useState)(""),
        [eO, eq] = (0, p.useState)(!1),
        [eF, eU] = (0, p.useState)(null),
        eB = (0, j.Fj)("3685705952"),
        eH = eB.get("sms", []),
        eK = eB.get("whatsapp", []),
        eW = (0, M.Q)(eH, eK),
        ez = (0, l.l)(eD),
        eV = ez?.country
      null != eV && eK.includes(eV) ? (P = "whatsapp") : null != eV && eH.includes(eV) && (P = "sms")
      let {
        data: e$,
        isError: eZ,
        refetch: eQ,
      } = (0, r.I)({
        queryKey: ["chatgpt-security", em, "totp-enrollment"],
        queryFn: (e) => {
          let { signal: t } = e
          return G.IN.safePost("/accounts/mfa/enroll", {
            additionalHeaders: { "ChatGPT-Account-ID": em },
            requestBody: { factor_type: "totp", source: eA },
            signal: t,
          })
        },
        enabled: "totp" === ef,
        retry: !1,
        staleTime: 1 / 0,
        gcTime: 0,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      })
      eg[10] === Symbol.for("react.memo_cache_sentinel") ? ((I = (e) => eU(e)), (eg[10] = I)) : (I = eg[10])
      let eY = (0, c.n)({
        mutationFn: async () => {
          if (!ez?.isValid() || null == P) return null
          let e = await G.IN.safePost("/accounts/mfa/enroll", {
            additionalHeaders: { "ChatGPT-Account-ID": em },
            requestBody: { factor_type: "sms", phone_number: ez.number, phone_verification_channel: P, source: eA },
          })
          return H.parse(e)
        },
        onSuccess: I,
      })
      ;(eg[11] !== em || eg[12] !== eF
        ? ((T = async () => {
            null != eF &&
              (await G.IN.safePost("/accounts/mfa/user/sms/resend_otp_for_enrollment", {
                additionalHeaders: { "ChatGPT-Account-ID": em },
                requestBody: { session_id: eF.session_id, factor_id: eF.factor.id },
              }))
          }),
          (eg[11] = em),
          (eg[12] = eF),
          (eg[13] = T))
        : (T = eg[13]),
        eg[14] === Symbol.for("react.memo_cache_sentinel") ? ((N = () => eL("")), (eg[14] = N)) : (N = eg[14]),
        eg[15] !== T ? ((E = { mutationFn: T, onSuccess: N }), (eg[15] = T), (eg[16] = E)) : (E = eg[16]))
      let eX = (0, c.n)(E),
        eJ = (0, c.n)({
          mutationFn: async () => {
            if ("push_auth" === ef)
              await G.IN.safePost("/accounts/mfa/enroll", {
                additionalHeaders: { "ChatGPT-Account-ID": em },
                requestBody: { factor_type: ef, source: eA },
              })
            else {
              let e = "totp" === ef ? e$?.session_id : eF?.session_id
              if (null == e || !/^\d{6}$/.test(eE.trim())) return !1
              if (
                !(
                  await G.IN.safePost("/accounts/mfa/user/activate_enrollment", {
                    additionalHeaders: { "ChatGPT-Account-ID": em },
                    requestBody: { factor_type: ef, session_id: e, code: eE.trim(), source: eA },
                  })
                ).success
              )
                throw Error("MFA activation was not completed")
            }
            let e = ej.invalidateQueries({ queryKey: (0, G.dI)(em).mfa.queryKey }),
              t = ek ? ej.invalidateQueries({ queryKey: (0, U.m)(em, ek).queryKey }).catch(z) : Promise.resolve()
            return (await Promise.all([e, t]), null)
          },
        }),
        e1 = eY.isPending || eJ.isPending || eX.isPending,
        e0 = "sms" === ef && null == eF,
        e2 = e$?.secret,
        e3 = null
      if (e0 && eY.isError) {
        let e
        ;(eg[17] !== eY.error ? ((e = V(eY.error, "sms-send")), (eg[17] = eY.error), (eg[18] = e)) : (e = eg[18]),
          (e3 = e))
      } else if ("sms" === ef && eX.isError) {
        let e
        ;(eg[19] !== eX.error ? ((e = V(eX.error, "sms-send")), (eg[19] = eX.error), (eg[20] = e)) : (e = eg[20]),
          (e3 = e))
      } else if (eJ.isError) {
        let e, t
        ;((e = "sms" === ef ? "sms-verify" : "totp" === ef ? "totp-verify" : "push-enable"),
          eg[21] !== eJ.error || eg[22] !== e
            ? ((t = V(eJ.error, e)), (eg[21] = eJ.error), (eg[22] = e), (eg[23] = t))
            : (t = eg[23]),
          (e3 = t))
      }
      eg[24] !== eb || eg[25] !== ex || eg[26] !== eP
        ? ((L = function (e) {
            if (!1 !== e && void 0 !== e && !eN.current) {
              if (((eN.current = !0), null != eb)) return void eb()
              if (e?.recommended_factors.includes("sms") && (0, j.Ks)(eP, "618349193")) {
                let e = new URL(window.location.href)
                ;(e.searchParams.delete("view"),
                  e.searchParams.delete("action"),
                  e.searchParams.delete("factor"),
                  e.searchParams.delete("factor_id"),
                  e.searchParams.delete("action_attempt_id"),
                  e.searchParams.set("mfa_sms_enrollment", "true"),
                  e.searchParams.set("entry", "post-totp"),
                  window.location.replace(e.toString()))
                return
              }
              ex()
            }
          }),
          (eg[24] = eb),
          (eg[25] = ex),
          (eg[26] = eP),
          (eg[27] = L))
        : (L = eg[27])
      let e4 = L
      if (eS?.guided) {
        let e,
          t,
          s,
          i,
          a,
          o = e$?.session_id ? (e2 ?? void 0) : void 0
        eg[28] !== eJ.data || eg[29] !== e4 || eg[30] !== ex || eg[31] !== e1 || eg[32] !== eG
          ? ((e = () => {
              "success" === eG ? e4(eJ.data) : e1 || ex()
            }),
            (eg[28] = eJ.data),
            (eg[29] = e4),
            (eg[30] = ex),
            (eg[31] = e1),
            (eg[32] = eG),
            (eg[33] = e))
          : (e = eg[33])
        let r = e
        return (
          eg[34] !== ey || eg[35] !== eZ || eg[36] !== eQ || eg[37] !== o || eg[38] !== e$
            ? ((t = o
                ? (0, n.jsx)("div", {
                    className: "flex justify-center rounded-xl bg-white p-4",
                    children: (0, n.jsx)(Z, { secret: o, email: ey, large: !0 }),
                  })
                : (0, n.jsx)(B.mK, { isError: eZ || null != e$, onRetry: () => void eQ() })),
              (eg[34] = ey),
              (eg[35] = eZ),
              (eg[36] = eQ),
              (eg[37] = o),
              (eg[38] = e$),
              (eg[39] = t))
            : (t = eg[39]),
          eg[40] !== eJ
            ? ((s = (e) => {
                ;(eL(e), eJ.reset())
              }),
              (eg[40] = eJ),
              (eg[41] = s))
            : (s = eg[41]),
          eg[42] !== eJ || eg[43] !== r || eg[44] !== eE || eg[45] !== e1 || eg[46] !== o || eg[47] !== eG
            ? ((i = () => {
                switch (eG) {
                  case "intro":
                    eI("pair")
                    break
                  case "pair":
                    o && eI("verify")
                    break
                  case "verify":
                    !e1 &&
                      /^\d{6}$/.test(eE) &&
                      eJ.mutate(void 0, {
                        onSuccess: (e) => {
                          !1 !== e && (eL(""), eI("success"))
                        },
                      })
                    break
                  case "success":
                    r()
                }
              }),
              (eg[42] = eJ),
              (eg[43] = r),
              (eg[44] = eE),
              (eg[45] = e1),
              (eg[46] = o),
              (eg[47] = eG),
              (eg[48] = i))
            : (i = eg[48]),
          eg[49] !== r ||
          eg[50] !== eE ||
          eg[51] !== e3 ||
          eg[52] !== e1 ||
          eg[53] !== o ||
          eg[54] !== t ||
          eg[55] !== s ||
          eg[56] !== i ||
          eg[57] !== eG
            ? ((a = (0, n.jsx)(R, {
                step: eG,
                setupKey: o,
                pairingContent: t,
                code: eE,
                onChangeCode: s,
                pending: e1,
                error: e3,
                onClose: r,
                onContinue: i,
              })),
              (eg[49] = r),
              (eg[50] = eE),
              (eg[51] = e3),
              (eg[52] = e1),
              (eg[53] = o),
              (eg[54] = t),
              (eg[55] = s),
              (eg[56] = i),
              (eg[57] = eG),
              (eg[58] = a))
            : (a = eg[58]),
          a
        )
      }
      let e5 = v.lG
      eg[59] !== ex || eg[60] !== e1
        ? ((D = (e) => {
            e || e1 || ex()
          }),
          (eg[59] = ex),
          (eg[60] = e1),
          (eg[61] = D))
        : (D = eg[61])
      let e6 = w.R4
      ;(eg[62] !== eJ || eg[63] !== e4 || eg[64] !== e0 || eg[65] !== e1 || eg[66] !== eX || eg[67] !== eY
        ? ((O = (e) => {
            ;(e.preventDefault(), e1 || (e0 ? eY.mutate() : (eX.reset(), eJ.mutate(void 0, { onSuccess: e4 }))))
          }),
          (eg[62] = eJ),
          (eg[63] = e4),
          (eg[64] = e0),
          (eg[65] = e1),
          (eg[66] = eX),
          (eg[67] = eY),
          (eg[68] = O))
        : (O = eg[68]),
        eg[69] !== ef || eg[70] !== e0
          ? ((q =
              "sms" !== ef || e0
                ? K[ef]
                : (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.security.mfa.smsCodeTitle",
                    defaultMessage: "Enter the code",
                    description:
                      "Title of the text-message MFA verification dialog after a code has been sent to the user's phone.",
                  })),
            (eg[69] = ef),
            (eg[70] = e0),
            (eg[71] = q))
          : (q = eg[71]),
        eg[72] !== q
          ? ((F = (0, n.jsx)(w.c7, { title: (0, n.jsx)(v.L3, { children: q }) })), (eg[72] = q), (eg[73] = F))
          : (F = eg[73]),
        eg[74] !== ef
          ? ((W =
              "totp" === ef
                ? (0, n.jsx)(v.rr, {
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(h.A, {
                      id: "settings.chatGpt.security.mfa.scanInstructions",
                      defaultMessage:
                        "Scan the QR code using your authenticator app, then enter the 6-digit code from the app",
                      description:
                        "Instructions in authenticator setup. The user scans the displayed QR code and types a one-time six-digit code to activate MFA.",
                    }),
                  })
                : null),
            (eg[74] = ef),
            (eg[75] = W))
          : (W = eg[75]),
        eg[76] !== F || eg[77] !== W
          ? (($ = (0, n.jsxs)(w.OO, { children: [F, W] })), (eg[76] = F), (eg[77] = W), (eg[78] = $))
          : ($ = eg[78]),
        eg[79] !== ef || eg[80] !== eZ || eg[81] !== eQ || eg[82] !== e2 || eg[83] !== e$
          ? ((Q =
              "totp" === ef && null == e2
                ? (0, n.jsx)(B.mK, { isError: eZ || null != e$, onRetry: () => void eQ() })
                : null),
            (eg[79] = ef),
            (eg[80] = eZ),
            (eg[81] = eQ),
            (eg[82] = e2),
            (eg[83] = e$),
            (eg[84] = Q))
          : (Q = eg[84]),
        eg[85] !== e_ || eg[86] !== ey || eg[87] !== ef || eg[88] !== e2 || eg[89] !== eO
          ? ((Y =
              "totp" === ef && null != e2
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      eO
                        ? (0, n.jsxs)("div", {
                            className: "flex flex-col items-center gap-3",
                            children: [
                              (0, n.jsx)("code", { className: "break-all select-text", children: e2 }),
                              (0, n.jsx)(b.i, { ariaLabel: e_, buttonText: e_, onCopy: (e) => (0, k.E)(e2, e) }),
                            ],
                          })
                        : (0, n.jsx)(Z, { secret: e2, email: ey }),
                      (0, n.jsx)(x.$, {
                        type: "button",
                        color: "ghost",
                        size: "toolbar",
                        onClick: () => eq(!eO),
                        children: eO
                          ? (0, n.jsx)(h.A, {
                              id: "settings.chatGpt.security.mfa.showQr",
                              defaultMessage: "Show QR code",
                              description:
                                "Switches authenticator setup from the text secret back to the scannable QR code.",
                            })
                          : (0, n.jsx)(h.A, {
                              id: "settings.chatGpt.security.mfa.showSecret",
                              defaultMessage: "Can’t scan? Enter the code manually",
                              description:
                                "Shows the authenticator setup secret as selectable text when the user cannot scan its QR code.",
                            }),
                      }),
                    ],
                  })
                : null),
            (eg[85] = e_),
            (eg[86] = ey),
            (eg[87] = ef),
            (eg[88] = e2),
            (eg[89] = eO),
            (eg[90] = Y))
          : (Y = eg[90]))
      let e9 = e0
        ? (0, n.jsxs)("div", {
            className: "flex flex-col gap-2 text-sm",
            children: [
              (0, n.jsx)("label", {
                htmlFor: "mfa-phone-number",
                children: (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.security.mfa.phoneLabel",
                  defaultMessage: "Phone number",
                  description:
                    "Label for the national phone number paired with the country selector used to set up text-message MFA.",
                }),
              }),
              (0, n.jsx)(S.y, {
                id: "mfa-phone-number",
                name: "phone-number",
                autoComplete: "tel",
                required: !0,
                autoFocus: !0,
                value: eD,
                onChange: (e) => {
                  ;(eR(e), eY.reset())
                },
                countries: eW,
                placeholder: ew.formatMessage({
                  id: "settings.chatGpt.security.mfa.phonePlaceholder.national",
                  defaultMessage: "Phone number",
                  description:
                    "Neutral placeholder for the national phone-number field in the text-message MFA setup dialog. The separate country selector supplies the international dialing code.",
                }),
                disabled: e1,
              }),
            ],
          })
        : null
      ;(eg[91] !== ef
        ? ((X =
            "push_auth" === ef
              ? (0, n.jsx)(v.rr, {
                  className: "text-sm text-secondary",
                  children: (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.security.mfa.pushDescription",
                    defaultMessage: "Approve log-ins with a push sent to your trusted device",
                    description: "Explanation of push-notification MFA in Security and login settings.",
                  }),
                })
              : null),
          (eg[91] = ef),
          (eg[92] = X))
        : (X = eg[92]),
        eg[93] !== e0
          ? ((J = e0
              ? (0, n.jsx)(v.rr, {
                  className: "text-sm text-secondary",
                  children: (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.security.mfa.smsDescription",
                    defaultMessage: "Get 6-digit verification codes by SMS or WhatsApp based on your country code",
                    description:
                      "Description of text-message MFA setup explaining the delivery channel depends on the phone country code.",
                  }),
                })
              : null),
            (eg[93] = e0),
            (eg[94] = J))
          : (J = eg[94]),
        eg[95] !== eJ || eg[96] !== eE || eg[97] !== ef || eg[98] !== e0 || eg[99] !== e1 || eg[100] !== eX
          ? ((ee =
              e0 || "push_auth" === ef
                ? null
                : (0, n.jsxs)("label", {
                    className: "flex flex-col gap-2 text-sm",
                    children: [
                      (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.security.mfa.code",
                        defaultMessage: "6-digit code",
                        description: "Label for the one-time verification code used to activate an MFA factor.",
                      }),
                      (0, n.jsx)(C.pd, {
                        name: "verification-code",
                        inputMode: "numeric",
                        autoComplete: "one-time-code",
                        pattern: "[0-9]{6}",
                        maxLength: 6,
                        required: !0,
                        value: eE,
                        onChange: (e) => {
                          ;(eL(e.target.value), eJ.reset(), eX.reset())
                        },
                        disabled: e1,
                      }),
                    ],
                  })),
            (eg[95] = eJ),
            (eg[96] = eE),
            (eg[97] = ef),
            (eg[98] = e0),
            (eg[99] = e1),
            (eg[100] = eX),
            (eg[101] = ee))
          : (ee = eg[101]),
        eg[102] !== eJ ||
        eg[103] !== ef ||
        eg[104] !== e1 ||
        eg[105] !== eD ||
        eg[106] !== eX ||
        eg[107] !== eY ||
        eg[108] !== eF
          ? ((et =
              "sms" === ef && null != eF
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(v.rr, {
                        className: "text-sm text-secondary",
                        children: (0, n.jsx)(h.A, {
                          id: "settings.chatGpt.security.mfa.smsSent",
                          defaultMessage: "Enter the 6-digit code we just sent to {phoneNumber}",
                          description:
                            "Text-message MFA verification instructions. PhoneNumber is the international phone number the user entered, shown for confirmation.",
                          values: { phoneNumber: eD },
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, n.jsx)(x.$, {
                            type: "button",
                            color: "secondary",
                            size: "toolbar",
                            disabled: e1,
                            onClick: () => {
                              ;(eJ.reset(), eX.mutate())
                            },
                            children: (0, n.jsx)(h.A, {
                              id: "settings.chatGpt.security.mfa.resend",
                              defaultMessage: "Resend code",
                              description:
                                "Requests another one-time code for the current text-message MFA enrollment challenge.",
                            }),
                          }),
                          (0, n.jsx)(x.$, {
                            type: "button",
                            color: "ghost",
                            size: "toolbar",
                            disabled: e1,
                            onClick: () => {
                              ;(eU(null), eL(""), eJ.reset(), eY.reset(), eX.reset())
                            },
                            children: (0, n.jsx)(h.A, {
                              id: "settings.chatGpt.security.mfa.editPhone",
                              defaultMessage: "Change phone number",
                              description:
                                "Returns to phone entry during text-message MFA enrollment without activating the pending authentication factor.",
                            }),
                          }),
                        ],
                      }),
                      eX.isSuccess
                        ? (0, n.jsx)("p", {
                            role: "status",
                            className: "text-sm text-secondary",
                            children: (0, n.jsx)(h.A, {
                              id: "settings.chatGpt.security.mfa.resent",
                              defaultMessage: "We resent a code to your phone",
                              description: "Success status after requesting another text-message MFA enrollment code.",
                            }),
                          })
                        : null,
                    ],
                  })
                : null),
            (eg[102] = eJ),
            (eg[103] = ef),
            (eg[104] = e1),
            (eg[105] = eD),
            (eg[106] = eX),
            (eg[107] = eY),
            (eg[108] = eF),
            (eg[109] = et))
          : (et = eg[109]))
      let e7 =
        e0 && ez?.isValid() && null == P
          ? (0, n.jsx)("p", {
              role: "alert",
              className: "text-sm text-secondary",
              children: (0, n.jsx)(h.A, {
                id: "settings.chatGpt.security.mfa.unsupportedRegion",
                defaultMessage: "Text message verification isn’t available for this country code",
                description:
                  "Explains why a valid phone number cannot be submitted for MFA when its country is not enabled for SMS or WhatsApp verification.",
              }),
            })
          : null
      ;(eg[110] !== e3
        ? ((es = e3 && (0, n.jsx)("p", { role: "alert", className: "text-sm text-danger", children: e3 })),
          (eg[110] = e3),
          (eg[111] = es))
        : (es = eg[111]),
        eg[112] !== Q ||
        eg[113] !== Y ||
        eg[114] !== e9 ||
        eg[115] !== X ||
        eg[116] !== J ||
        eg[117] !== ee ||
        eg[118] !== et ||
        eg[119] !== e7 ||
        eg[120] !== es
          ? ((en = (0, n.jsxs)(w.OO, {
              className: "gap-4",
              spacing: "large",
              children: [Q, Y, e9, X, J, ee, et, e7, es],
            })),
            (eg[112] = Q),
            (eg[113] = Y),
            (eg[114] = e9),
            (eg[115] = X),
            (eg[116] = J),
            (eg[117] = ee),
            (eg[118] = et),
            (eg[119] = e7),
            (eg[120] = es),
            (eg[121] = en))
          : (en = eg[121]))
      let e8 = w.OO,
        te = w.Es
      ;(eg[122] === Symbol.for("react.memo_cache_sentinel")
        ? ((ei = (0, n.jsx)(h.A, {
            id: "settings.chatGpt.security.cancel",
            defaultMessage: "Cancel",
            description:
              "Dismisses an account security confirmation without changing authentication, devices, or app access.",
          })),
          (eg[122] = ei))
        : (ei = eg[122]),
        eg[123] !== ex || eg[124] !== e1
          ? ((ea = (0, n.jsx)(x.$, { type: "button", color: "secondary", onClick: ex, disabled: e1, children: ei })),
            (eg[123] = ex),
            (eg[124] = e1),
            (eg[125] = ea))
          : (ea = eg[125]))
      let tt = x.$,
        ts =
          e1 ||
          (e0 && (!ez?.isValid() || null == P)) ||
          ("totp" === ef && null == e2) ||
          (!e0 && "push_auth" !== ef && !/^\d{6}$/.test(eE))
      return (
        eg[126] !== e0
          ? ((eo = e0
              ? (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.security.mfa.sendCode",
                  defaultMessage: "Send code",
                  description:
                    "Requests a verification code at the phone number entered for text-message MFA enrollment.",
                })
              : null),
            (eg[126] = e0),
            (eg[127] = eo))
          : (eo = eg[127]),
        eg[128] !== ef
          ? ((er =
              "push_auth" === ef
                ? (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.security.mfa.enable",
                    defaultMessage: "Enable",
                    description: "Confirms enabling trusted-device push notifications as an MFA factor.",
                  })
                : null),
            (eg[128] = ef),
            (eg[129] = er))
          : (er = eg[129]),
        eg[130] !== ef || eg[131] !== e0
          ? ((ec =
              e0 || "push_auth" === ef
                ? null
                : (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.security.mfa.verify",
                    defaultMessage: "Verify",
                    description: "Submits the six-digit code to activate the selected MFA factor.",
                  })),
            (eg[130] = ef),
            (eg[131] = e0),
            (eg[132] = ec))
          : (ec = eg[132]),
        eg[133] !== tt || eg[134] !== e1 || eg[135] !== ts || eg[136] !== eo || eg[137] !== er || eg[138] !== ec
          ? ((el = (0, n.jsxs)(tt, {
              type: "submit",
              color: "primary",
              loading: e1,
              disabled: ts,
              children: [eo, er, ec],
            })),
            (eg[133] = tt),
            (eg[134] = e1),
            (eg[135] = ts),
            (eg[136] = eo),
            (eg[137] = er),
            (eg[138] = ec),
            (eg[139] = el))
          : (el = eg[139]),
        eg[140] !== te || eg[141] !== ea || eg[142] !== el
          ? ((ed = (0, n.jsxs)(te, { children: [ea, el] })),
            (eg[140] = te),
            (eg[141] = ea),
            (eg[142] = el),
            (eg[143] = ed))
          : (ed = eg[143]),
        eg[144] !== e8 || eg[145] !== ed
          ? ((eu = (0, n.jsx)(e8, { spacing: "large", children: ed })), (eg[144] = e8), (eg[145] = ed), (eg[146] = eu))
          : (eu = eg[146]),
        eg[147] !== e6 || eg[148] !== O || eg[149] !== $ || eg[150] !== en || eg[151] !== eu
          ? ((ep = (0, n.jsxs)(e6, { as: "form", onSubmit: O, children: [$, en, eu] })),
            (eg[147] = e6),
            (eg[148] = O),
            (eg[149] = $),
            (eg[150] = en),
            (eg[151] = eu),
            (eg[152] = ep))
          : (ep = eg[152]),
        eg[153] !== e5 || eg[154] !== D || eg[155] !== ep
          ? ((eh = (0, n.jsx)(e5, { open: !0, onOpenChange: D, children: ep })),
            (eg[153] = e5),
            (eg[154] = D),
            (eg[155] = ep),
            (eg[156] = eh))
          : (eh = eg[156]),
        eh
      )
    }
    function z() {}
    function V(e, t) {
      let s = e instanceof P.fk ? e.status : void 0
      if ("sms-send" === t || "sms-verify" === t) {
        if (409 === s)
          return (0, n.jsx)(h.A, {
            id: "settings.chatGpt.security.mfa.phoneNumberInUse",
            defaultMessage: "This phone number is already in use. Try a different number",
            description:
              "SMS MFA enrollment error when the phone number is already registered. The user can choose Change phone number.",
          })
        if (429 === s)
          return "sms-send" === t
            ? (0, n.jsx)(h.A, {
                id: "settings.chatGpt.security.mfa.smsSendThrottled",
                defaultMessage: "You’ve sent too many requests. Wait before trying again",
                description: "SMS MFA enrollment error when requesting or resending a verification code is throttled.",
              })
            : (0, n.jsx)(h.A, {
                id: "settings.chatGpt.security.mfa.verifyThrottled",
                defaultMessage: "You’ve tried too many times. Wait before trying again",
                description: "MFA setup error when too many verification attempts have been made.",
              })
        if ("sms-send" === t)
          return 403 === s
            ? (0, n.jsx)(h.A, {
                id: "settings.chatGpt.security.mfa.phoneNumberNotAllowed",
                defaultMessage: "We couldn’t send a code to this phone number. Try a different number",
                description:
                  "SMS MFA enrollment error when sending to the chosen phone number is disallowed. The user can edit or change the number.",
              })
            : (0, n.jsx)(h.A, {
                id: "settings.chatGpt.security.mfa.smsSendError",
                defaultMessage: "We couldn’t send a code. Try again",
                description:
                  "Fallback error when requesting or resending an SMS MFA setup code fails for an unknown reason.",
              })
        if (403 === s)
          return (0, n.jsx)(h.A, {
            id: "settings.chatGpt.security.mfa.smsVerifyRejected",
            defaultMessage: "We couldn’t verify that code. Check the code and try again",
            description: "SMS MFA setup error when the entered verification code is rejected.",
          })
      }
      return "totp-verify" === t && 429 === s
        ? (0, n.jsx)(h.A, {
            id: "settings.chatGpt.security.mfa.verifyThrottled",
            defaultMessage: "You’ve tried too many times. Wait before trying again",
            description: "MFA setup error when too many verification attempts have been made.",
          })
        : "sms-verify" === t || "totp-verify" === t
          ? (0, n.jsx)(h.A, {
              id: "settings.chatGpt.security.mfa.codeVerifyError",
              defaultMessage: "We couldn’t verify the code. Try again",
              description: "Fallback error when an SMS or authenticator app MFA setup code cannot be verified.",
            })
          : (0, n.jsx)(h.A, {
              id: "settings.chatGpt.security.mfa.verifyError",
              defaultMessage: "Couldn’t complete setup. Check your details and try again",
              description:
                "Inline error after enabling push MFA fails. Setup remains open for correction or cancellation.",
            })
    }
    function $(e) {
      let t,
        s,
        a,
        r,
        l,
        d,
        u,
        p,
        g,
        m = (0, i.c)(26),
        { accountId: f, action: y, passkeyName: x, onClose: b } = e,
        v = (0, o.jE)()
      ;(m[0] !== f || m[1] !== y.factorId
        ? ((t = () =>
            G.IN.safePost("/accounts/mfa/user/disable_in_house", {
              additionalHeaders: { "ChatGPT-Account-ID": f },
              requestBody: { factor_id: y.factorId },
            })),
          (m[0] = f),
          (m[1] = y.factorId),
          (m[2] = t))
        : (t = m[2]),
        m[3] !== f || m[4] !== b || m[5] !== v
          ? ((s = async (e) => {
              ;(!(async function (e) {
                if (null == e) return
                let t = "unsupported",
                  s = {}
                if (
                  "u" > typeof PublicKeyCredential &&
                  "function" == typeof PublicKeyCredential.signalAllAcceptedCredentials
                ) {
                  s.accepted_credential_count = e.all_accepted_credential_ids.length
                  try {
                    ;(await PublicKeyCredential.signalAllAcceptedCredentials({
                      rpId: e.rp_id,
                      userId: e.user_id_base64url,
                      allAcceptedCredentialIds: e.all_accepted_credential_ids,
                    }),
                      (t = "success"))
                  } catch (e) {
                    ;((t = "failure"), (s.error_name = e instanceof Error ? e.name : "UnknownError"))
                  }
                }
                try {
                  ;(await null)?.addBrowserDatadogRumAction(`passkey_credential_manager_sync_${t}`, s)
                } catch {}
              })(e.passkey_credential_manager_sync),
                await v.invalidateQueries({ queryKey: (0, G.dI)(f).mfa.queryKey }),
                b())
            }),
            (m[3] = f),
            (m[4] = b),
            (m[5] = v),
            (m[6] = s))
          : (s = m[6]),
        m[7] !== t || m[8] !== s
          ? ((a = { mutationFn: t, onSuccess: s }), (m[7] = t), (m[8] = s), (m[9] = a))
          : (a = m[9]))
      let w = (0, c.n)(a)
      if ("passkey" === y.factor && w.error instanceof P.fk && 400 === w.error.status) {
        if ("advanced_account_security_minimum_passkeys_required" === w.error.errorCode) {
          let e
          ;(m[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(h.A, {
                id: "settings.chatGpt.security.passkeys.removeBlockedByAasMinimum",
                defaultMessage:
                  "Advanced Account Security requires at least two security keys or passkeys. Add another before removing this one.",
                description:
                  "Blocking error when removing a security key or passkey would leave fewer than two credentials required by Advanced Account Security. Tell the user to add another credential before retrying.",
              })),
              (m[10] = e))
            : (e = m[10]),
            (r = e))
        } else if ("advanced_account_security_non_device_bound_passkey_required" === w.error.errorCode) {
          let e
          ;(m[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(h.A, {
                id: "settings.chatGpt.security.passkeys.removeBlockedByAasNonDeviceBound",
                defaultMessage:
                  "Advanced Account Security requires at least one security key or passkey that works across devices. Add another before removing this one.",
                description:
                  "Blocking error when removing a security key or passkey would leave no credential that works across devices, as required by Advanced Account Security. Avoid technical terms like non-device-bound and tell the user to add another credential before retrying.",
              })),
              (m[11] = e))
            : (e = m[11]),
            (r = e))
        }
      }
      m[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (0, n.jsx)(h.A, {
            id: "settings.chatGpt.security.mfa.removeTitle",
            defaultMessage: "Remove authentication method?",
            description:
              "Confirmation title before removing the selected authenticator, phone number or push factor from the account.",
          })),
          (m[12] = l))
        : (l = m[12])
      let C = l
      if ("passkey" === y.factor) {
        let e
        ;(m[13] !== x
          ? ((e = x
              ? (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.security.passkeys.deleteNamedTitle",
                  defaultMessage: "Delete {name}?",
                  description:
                    "Confirmation title before deleting a passkey or security key. Name is the credential's custom display name or authenticator name, matching the passkey list.",
                  values: { name: x },
                })
              : (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.security.passkeys.deleteTitle",
                  defaultMessage: "Delete passkey?",
                  description: "Confirmation title before deleting a passkey or security key that has no display name.",
                })),
            (m[13] = x),
            (m[14] = e))
          : (e = m[14]),
          (C = e))
      }
      return (
        m[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.security.mfa.remove",
              defaultMessage: "Remove",
              description:
                "Destructive confirmation button removing the selected authentication factor from the account.",
            })),
            (m[15] = d))
          : (d = m[15]),
        m[16] !== w ? ((u = () => w.mutate()), (m[16] = w), (m[17] = u)) : (u = m[17]),
        m[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.security.mfa.removeDescription",
              defaultMessage: "You won’t be able to use this method to sign in to your account anymore",
              description:
                "Warning in the MFA removal confirmation explaining that the selected factor will no longer be usable to sign in.",
            })),
            (m[18] = p))
          : (p = m[18]),
        m[19] !== r || m[20] !== b || m[21] !== w.isError || m[22] !== w.isPending || m[23] !== u || m[24] !== C
          ? ((g = (0, n.jsx)(B.i$, {
              title: C,
              confirmLabel: d,
              onConfirm: u,
              onClose: b,
              isPending: w.isPending,
              isError: w.isError,
              errorMessage: r,
              children: p,
            })),
            (m[19] = r),
            (m[20] = b),
            (m[21] = w.isError),
            (m[22] = w.isPending),
            (m[23] = u),
            (m[24] = C),
            (m[25] = g))
          : (g = m[25]),
        g
      )
    }
    function Z(e) {
      let t,
        s,
        a,
        o,
        r,
        c,
        l,
        d,
        p,
        h = (0, i.c)(21),
        { secret: m, email: f, large: y } = e,
        x = (0, g.A)()
      h[0] !== m ? ((t = new URLSearchParams({ secret: m, issuer: "OpenAI" })), (h[0] = m), (h[1] = t)) : (t = h[1])
      let b = `otpauth://totp/${encodeURIComponent(`OpenAI:${f}`)}?${t}`
      ;(h[2] !== b
        ? (({ modules: s } = (0, u.vt)(b, { errorCorrectionLevel: "M" })),
          (a = s.size + 8),
          (o = Array.from(s.data)),
          (h[2] = b),
          (h[3] = s),
          (h[4] = a),
          (h[5] = o))
        : ((s = h[3]), (a = h[4]), (o = h[5])),
        h[6] !== s || h[7] !== o
          ? ((r = o.flatMap((e, t) => (e ? [`M${(t % s.size) + 4},${Math.floor(t / s.size) + 4}h1v1h-1z`] : []))),
            (h[6] = s),
            (h[7] = o),
            (h[8] = r))
          : (r = h[8]))
      let v = r.join(""),
        w = void 0 !== y && y ? "size-61 max-w-full self-center" : "size-48 self-center",
        C = `0 0 ${a} ${a}`
      return (
        h[9] !== x
          ? ((c = x.formatMessage({
              id: "settings.chatGpt.security.mfa.qrLabel",
              defaultMessage: "QR code for authenticator app setup",
              description:
                "Accessible image label for the QR code containing the secret used to connect an authenticator app.",
            })),
            (h[9] = x),
            (h[10] = c))
          : (c = h[10]),
        h[11] !== a
          ? ((l = (0, n.jsx)("rect", { width: a, height: a, fill: "white" })), (h[11] = a), (h[12] = l))
          : (l = h[12]),
        h[13] !== v ? ((d = (0, n.jsx)("path", { d: v, fill: "black" })), (h[13] = v), (h[14] = d)) : (d = h[14]),
        h[15] !== w || h[16] !== C || h[17] !== c || h[18] !== l || h[19] !== d
          ? ((p = (0, n.jsxs)("svg", { className: w, viewBox: C, role: "img", "aria-label": c, children: [l, d] })),
            (h[15] = w),
            (h[16] = C),
            (h[17] = c),
            (h[18] = l),
            (h[19] = d),
            (h[20] = p))
          : (p = h[20]),
        p
      )
    }
  },
  h4GZ(e, t, s) {
    s.d(t, { m: () => g, nc: () => f, a9: () => y, _M: () => x, Fz: () => b, PW: () => m, UC: () => h })
    var n = s("ASxG"),
      i = s("qhRx"),
      a = s("Ghh3"),
      o = s("X1mr"),
      r = s("jEww"),
      c = s("fZLW")
    let l = n.discriminatedUnion("action", [
        n.object({ action: n.literal("enable"), factor: n.enum(["totp", "sms", "push_auth", "passkey"]) }),
        n.object({
          action: n.literal("disable"),
          factor: n.enum(["totp", "sms", "push_auth", "passkey"]),
          factorId: n.string().min(1),
        }),
      ]),
      d = n.object({
        pwd_auth_time: n.number(),
        "https://api.openai.com/mfa": n.object({ required: n.string() }).optional(),
      }),
      u = "apm_disable_confirm",
      p = "apm_account_id"
    function h(e, t) {
      let s = l.safeParse({ action: e.get("action"), factor: e.get("factor"), factorId: e.get("factor_id") })
      if (!s.success)
        return (function (e, t) {
          let s = e.get("factor_id")
          if (e.has("factor") || "disable" !== e.get("action") || null == s || 0 === s.length || null == t) return null
          let n = []
          ;(t.factors.totp.some(({ id: e }) => e === s) && n.push("totp"),
            t.factors.sms.some(({ id: e }) => e === s) && n.push("sms"),
            t.factors.push_auth?.id === s && n.push("push_auth"))
          let [i, ...a] = n
          return null == i || a.length > 0 ? null : { action: "disable", factor: i, factorId: s }
        })(e, t)
      if ("passkey_created" === e.get("_tm") && "enable" === e.get("action") && "passkey" === e.get("factor"))
        return { action: "complete", factor: "passkey" }
      let i = n.uuid().safeParse(e.get("action_attempt_id"))
      return i.success ? { ...s.data, actionAttemptId: i.data } : s.data
    }
    function g(e, t = Date.now()) {
      try {
        let s = e.split(".")[1]
        if (null == s) return !1
        let n = d.safeParse(JSON.parse(atob(s.replace(/-/g, "+").replace(/_/g, "/"))))
        if (!n.success) return !1
        let i = n.data.pwd_auth_time < 1e12 ? 1e3 * n.data.pwd_auth_time : n.data.pwd_auth_time,
          a = t - i
        return a >= 0 && a <= 3e4 && n.data["https://api.openai.com/mfa"]?.required === "yes"
      } catch {
        return !1
      }
    }
    function m(e, t) {
      return "true" === e.get(u) && e.get(p) === t
    }
    async function f(e, t = !1) {
      let s = await (0, i.loadBrowserChatGptAuth)()
      if (s?.accountId !== e) return "failed"
      if (!t && g(s.accessToken)) return "ready"
      let n = (0, c.P)()
      ;(n.searchParams.set("view", "advanced-protection"), n.searchParams.set(u, "true"), n.searchParams.set(p, e))
      let a = await (0, r.aN)(n.toString(), {
        ...(0, o.WF)().auth.reauthenticationParams,
        ...(null == s.email ? {} : { login_hint: s.email }),
      })
      return a.ok ? { redirectUrl: a.url } : "failed"
    }
    async function y(e) {
      let t = await (0, i.loadBrowserChatGptAuth)()
      if (t?.accountId !== e) return "failed"
      let s = (0, c.P)()
      s.searchParams.set("view", "advanced-protection")
      let n = await (0, r.aN)(s.toString(), {
        ...(0, o.WF)().auth.reauthenticationParams,
        ...(null == t.email ? {} : { login_hint: t.email }),
        post_regenerate_recovery_keys: "true",
      })
      return n.ok ? { redirectUrl: n.url } : "failed"
    }
    async function x(e, t = (0, c.P)().href) {
      let s = await (0, i.loadBrowserChatGptAuth)()
      if (null == s) return "failed"
      if (
        (function (e, t, s = Date.now()) {
          try {
            let n = e.split(".")[1]
            if (null == n) return !1
            let i = d.safeParse(JSON.parse(atob(n.replace(/-/g, "+").replace(/_/g, "/"))))
            if (!i.success) return !1
            let a = s - i.data.pwd_auth_time
            return a >= 0 && a < 24e4 && (!t || i.data["https://api.openai.com/mfa"]?.required === "yes")
          } catch {
            return !1
          }
        })(s.accessToken, "disable" === e.action)
      )
        return "ready"
      if (
        (function (e) {
          if ("passkey" === e.factor || "string" != typeof (0, c.Z)()) return !1
          let t = window,
            s = t.SecurityNative ?? t.webkit?.messageHandlers?.securityNative
          return (
            !!s &&
            (s.postMessage(
              btoa(
                JSON.stringify({
                  type: "refresh",
                  action: e.action,
                  factor: e.factor,
                  factorId: "disable" === e.action ? e.factorId : void 0,
                }),
              ),
            ),
            !0)
          )
        })(e)
      )
        return "native-handoff"
      let n = new URL(t)
      ;(void 0 !== e.actionAttemptId
        ? n.searchParams.set("action_attempt_id", e.actionAttemptId)
        : n.searchParams.delete("action_attempt_id"),
        n.searchParams.set("action", e.action),
        n.searchParams.set("factor", e.factor),
        new URLSearchParams(window.location.search).get("mfa_source"),
        "passkey" === e.factor && n.searchParams.set("view", "passkeys"),
        "disable" === e.action && n.searchParams.set("factor_id", e.factorId))
      let a = await (0, r.aN)(n.toString(), (0, o.WF)().auth.reauthenticationParams)
      return a.ok ? { redirectUrl: a.url } : "failed"
    }
    async function b(e) {
      if ((await (0, i.loadBrowserChatGptAuth)()) == null) return "failed"
      let t = {
        ...(0, o.WF)().auth.reauthenticationParams,
        ["add" === e ? "post_login_add_password" : "post_login_password_reset"]: "true",
      }
      if ("add" === e && "true" === t["ext-login-allow-phone"] && !t.login_hint)
        try {
          let e = n.object({ phone_number: n.string().min(1) }).safeParse(await a.Request.safeGet("/me"))
          if (!e.success) return "failed"
          t.login_hint = e.data.phone_number
        } catch {
          return "failed"
        }
      let s = (0, c.P)(),
        l = await (0, r.aN)(s.toString(), t)
      return l.ok ? { redirectUrl: l.url } : "failed"
    }
  },
  vysM(e, t, s) {
    var n = s("ASxG"),
      i = s("Ghh3")
    n.object({ recommended_factors: n.array(n.literal("sms")) })
    let a = n.object({
      decision_id: n
        .string()
        .optional()
        .catch(void 0),
      policy_version: n
        .string()
        .optional()
        .catch(void 0),
      recommendations: n.array(n.object({ id: n.string().min(1) })).max(3),
    })
    s.d(
      t,
      {},
      {
        m: function (e, t) {
          return {
            queryKey: ["chatgpt-security", e, "recommendations", t],
            queryFn: async ({ signal: s }) => {
              if (!t) throw Error("Cannot load security recommendations without a user")
              let n = await i.Request.safeGet("/accounts/security/recommendations", {
                additionalHeaders: { "ChatGPT-Account-ID": e },
                expectedIdentity: { accountId: e, userId: t },
                signal: s,
                retry: !1,
              })
              return a.parse(n)
            },
            staleTime: 0,
            gcTime: 0,
            retry: !1,
            placeholderData: void 0,
          }
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
  fZLW(e, t, s) {
    function n() {
      let { pathname: e, protocol: t } = new URL(window.location.href)
      if ("https:" !== t && "http:" !== t) return null
      let s = (("u" < typeof document ? void 0 : document.documentElement.dataset.routerBasename) ?? "/").replace(
        /\/$/,
        "",
      )
      return e.startsWith(`${s}/`) && /^\/security-settings\/?$/i.test(e.slice(s.length)) ? e : null
    }
    s.d(
      t,
      {},
      {
        P: function () {
          return new URL(n() ?? "/settings/security", window.location.origin)
        },
        Z: n,
      },
    )
  },
  LLN1(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("iPAC"),
      o = s("oyxz"),
      r = s("ygO2"),
      c = s("JNtf"),
      l = s("mUDD"),
      d = s("HOLv"),
      u = s("RNul"),
      p = s("jxU8")
    s.d(
      t,
      {},
      {
        i$: function (e) {
          let t,
            s,
            a,
            d,
            u,
            p,
            h,
            g,
            m,
            f,
            y,
            x,
            b = (0, i.c)(41),
            {
              title: v,
              children: w,
              confirmLabel: C,
              onConfirm: A,
              onClose: _,
              onCloseAutoFocus: j,
              isPending: k,
              isError: P,
              errorMessage: M,
              informational: S,
              cancelLabel: G,
              confirmColor: I,
            } = e,
            T = void 0 !== P && P,
            N = void 0 !== S && S
          ;(b[0] !== w ? ((t = null == w ? { "aria-describedby": void 0 } : {}), (b[0] = w), (b[1] = t)) : (t = b[1]),
            b[2] !== j || b[3] !== t
              ? ((s = { ...t, onCloseAutoFocus: j }), (b[2] = j), (b[3] = t), (b[4] = s))
              : (s = b[4]),
            b[5] !== k || b[6] !== _
              ? ((a = (e) => {
                  e || k || _()
                }),
                (b[5] = k),
                (b[6] = _),
                (b[7] = a))
              : (a = b[7]),
            b[8] !== k || b[9] !== A
              ? ((d = (e) => {
                  ;(e.preventDefault(), k || A())
                }),
                (b[8] = k),
                (b[9] = A),
                (b[10] = d))
              : (d = b[10]),
            b[11] !== v
              ? ((u = (0, n.jsx)(l.OO, {
                  children: (0, n.jsx)(l.c7, { title: (0, n.jsx)(c.L3, { className: "select-none", children: v }) }),
                })),
                (b[11] = v),
                (b[12] = u))
              : (u = b[12]),
            b[13] !== w
              ? ((p =
                  null != w
                    ? (0, n.jsx)(l.OO, {
                        spacing: "large",
                        children: (0, n.jsx)(c.rr, {
                          asChild: !0,
                          children: (0, n.jsx)("div", { className: "text-sm text-secondary", children: w }),
                        }),
                      })
                    : null),
                (b[13] = w),
                (b[14] = p))
              : (p = b[14]),
            b[15] !== M || b[16] !== T
              ? ((h = T
                  ? (0, n.jsx)(l.OO, {
                      children: (0, n.jsx)("p", {
                        role: "alert",
                        className: "text-sm text-danger",
                        children:
                          M ??
                          (0, n.jsx)(o.A, {
                            id: "settings.chatGpt.security.actionFailed",
                            defaultMessage: "Couldn’t complete this action. Please try again",
                            description:
                              "Inline error after a confirmed account security action fails. The dialog stays open so the user can retry or cancel.",
                          }),
                      }),
                    })
                  : null),
                (b[15] = M),
                (b[16] = T),
                (b[17] = h))
              : (h = b[17]))
          let E = !N
          b[18] !== G || b[19] !== N || b[20] !== k || b[21] !== _
            ? ((g = N
                ? null
                : (0, n.jsx)(r.$, {
                    type: "button",
                    color: "secondary",
                    disabled: k,
                    onClick: _,
                    children:
                      G ??
                      (0, n.jsx)(o.A, {
                        id: "settings.chatGpt.security.cancel",
                        defaultMessage: "Cancel",
                        description:
                          "Dismisses an account security confirmation without changing authentication, devices, or app access.",
                      }),
                  })),
              (b[18] = G),
              (b[19] = N),
              (b[20] = k),
              (b[21] = _),
              (b[22] = g))
            : (g = b[22])
          let L = I ?? (N ? "primary" : "danger")
          return (
            b[23] !== C || b[24] !== k || b[25] !== L
              ? ((m = (0, n.jsx)(r.$, { type: "submit", color: L, loading: k, disabled: k, children: C })),
                (b[23] = C),
                (b[24] = k),
                (b[25] = L),
                (b[26] = m))
              : (m = b[26]),
            b[27] !== E || b[28] !== g || b[29] !== m
              ? ((f = (0, n.jsx)(l.OO, { children: (0, n.jsxs)(l.Es, { expandSingleButton: E, children: [g, m] }) })),
                (b[27] = E),
                (b[28] = g),
                (b[29] = m),
                (b[30] = f))
              : (f = b[30]),
            b[31] !== f || b[32] !== d || b[33] !== u || b[34] !== p || b[35] !== h
              ? ((y = (0, n.jsxs)(l.R4, { as: "form", onSubmit: d, children: [u, p, h, f] })),
                (b[31] = f),
                (b[32] = d),
                (b[33] = u),
                (b[34] = p),
                (b[35] = h),
                (b[36] = y))
              : (y = b[36]),
            b[37] !== y || b[38] !== s || b[39] !== a
              ? ((x = (0, n.jsx)(c.lG, { open: !0, contentProps: s, onOpenChange: a, children: y })),
                (b[37] = y),
                (b[38] = s),
                (b[39] = a),
                (b[40] = x))
              : (x = b[40]),
            x
          )
        },
        kU: function (e) {
          let t,
            s,
            c,
            l,
            u = (0, i.c)(11),
            { ref: h, title: g, subtitle: m, action: f, onBack: y, children: x } = e
          return (
            u[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(d.I, { className: "rtl:rotate-180", asset: a.x })),
                (s = (0, n.jsx)(o.A, {
                  id: "settings.chatGpt.security.back",
                  defaultMessage: "Back",
                  description:
                    "Button in a Security and login settings subpage that returns to its parent page without changing account settings.",
                })),
                (u[0] = t),
                (u[1] = s))
              : ((t = u[0]), (s = u[1])),
            u[2] !== y
              ? ((c = (0, n.jsxs)(r.$, { color: "ghostActive", size: "toolbar", onClick: y, children: [t, s] })),
                (u[2] = y),
                (u[3] = c))
              : (c = u[3]),
            u[4] !== f || u[5] !== x || u[6] !== h || u[7] !== m || u[8] !== c || u[9] !== g
              ? ((l = (0, n.jsx)(p.P, { ref: h, title: g, subtitle: m, action: f, backSlot: c, children: x })),
                (u[4] = f),
                (u[5] = x),
                (u[6] = h),
                (u[7] = m),
                (u[8] = c),
                (u[9] = g),
                (u[10] = l))
              : (l = u[10]),
            l
          )
        },
        mK: function (e) {
          let t,
            s = (0, i.c)(3),
            { isError: a, onRetry: c } = e
          return (
            s[0] !== a || s[1] !== c
              ? ((t = a
                  ? (0, n.jsxs)("div", {
                      role: "alert",
                      className: "flex flex-col items-start gap-3 text-sm text-secondary",
                      children: [
                        (0, n.jsx)(o.A, {
                          id: "settings.chatGpt.security.loadError",
                          defaultMessage: "Couldn’t load security settings. Please try again",
                          description:
                            "Error on a ChatGPT Security and login settings page when its account data request fails. The retry button reloads this data.",
                        }),
                        (0, n.jsx)(r.$, {
                          color: "secondary",
                          size: "toolbar",
                          onClick: c,
                          children: (0, n.jsx)(o.A, {
                            id: "settings.chatGpt.security.retry",
                            defaultMessage: "Retry",
                            description:
                              "Button beside an error in ChatGPT Security and login settings that retries loading account data.",
                          }),
                        }),
                      ],
                    })
                  : (0, n.jsxs)("div", {
                      role: "status",
                      className: "flex items-center gap-2 text-sm text-secondary",
                      children: [
                        (0, n.jsx)(u.y, {}),
                        (0, n.jsx)(o.A, {
                          id: "settings.chatGpt.security.loading",
                          defaultMessage: "Loading security settings…",
                          description:
                            "Loading status while a ChatGPT Security and login settings page fetches account data.",
                        }),
                      ],
                    })),
                (s[0] = a),
                (s[1] = c),
                (s[2] = t))
              : (t = s[2]),
            t
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
            u = (0, i.c)(32),
            {
              title: p,
              subtitle: h,
              actions: g,
              actionsAlignment: m,
              className: f,
              size: y,
              titleGap: x,
              spacing: b,
              subtitlePlacement: v,
              subtitleWrap: w,
            } = e,
            C = void 0 === y ? "default" : y,
            A = void 0 === b ? "default" : b,
            _ = void 0 === v ? "below-title" : v,
            j = void 0 === w ? "balance" : w,
            k = null != p,
            P = null != h,
            M = null != g,
            S = "compact" === C
          u[0] !== S || u[1] !== h || u[2] !== _ || u[3] !== j
            ? ((t = h
                ? (0, n.jsx)("div", {
                    className: (0, a.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === j ? "text-balance" : "text-wrap",
                      S ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === _ && "w-full",
                    ),
                    children: h,
                  })
                : null),
              (u[0] = S),
              (u[1] = h),
              (u[2] = _),
              (u[3] = j),
              (u[4] = t))
            : (t = u[4])
          let G = t
          if (!k && !P && !M) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(n.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let I = "below-header" === _ ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            T = P && "compact" === A && "pb-2",
            N = P && "compact" !== A && "pb-3"
          u[6] !== f || u[7] !== P || u[8] !== S || u[9] !== A || u[10] !== I || u[11] !== T || u[12] !== N
            ? ((s = (0, a.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                I,
                T,
                N,
                !P && (0, a.A)("items-center pb-1.5", "compact" === A ? "min-h-8" : "min-h-toolbar"),
                P && S && "items-center",
                P && !S && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = P),
              (u[8] = S),
              (u[9] = A),
              (u[10] = I),
              (u[11] = T),
              (u[12] = N),
              (u[13] = s))
            : (s = u[13])
          let E =
            "none" === (void 0 === x ? "default" : x)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== E ? ((o = (0, a.A)("flex min-w-0 flex-1 flex-col", E)), (u[14] = E), (u[15] = o)) : (o = u[15]),
            u[16] !== P || u[17] !== C || u[18] !== p
              ? ((r = p
                  ? (0, n.jsx)("div", {
                      className: (0, a.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === C && "text-sm leading-[18px]",
                        ("large" === C || ("default" === C && P)) && "text-lg",
                        ("base" === C || ("default" === C && !P)) && "text-base",
                      ),
                      children: p,
                    })
                  : null),
                (u[16] = P),
                (u[17] = C),
                (u[18] = p),
                (u[19] = r))
              : (r = u[19]))
          let L = "below-title" === _ ? G : null
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
          let D = "below-header" === _ ? G : null
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
  iPAC(e, t, s) {
    let n = (0, s("nkTT").a)({
      name: "arrow-left-md-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.682129, y: 4.14209, width: 8.843018, height: 7.716309 },
        visualBounds: { x: 3.682129, y: 4.14209, width: 8.843018, height: 7.716309 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.682129, y: 4.14209, width: 8.843018, height: 7.716309 },
        center: { x: 8.103638, y: 8.000244 },
        insets: { top: 4.14209, right: 3.474853, bottom: 4.141601, left: 3.682129 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.103638, y: 8.000244 }, foreground: { x: 8.103638, y: 8.000244 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.96163 4.29558C7.16647 4.09074 7.49875 4.09111 7.70382 4.29558C7.90884 4.50061 7.90884 4.83275 7.70382 5.03777L5.26534 7.47527H11.9997C12.2897 7.47527 12.5251 7.71071 12.5251 8.00066C12.525 8.29048 12.2896 8.52605 11.9997 8.52605H5.2673L7.70382 10.9626C7.90884 11.1676 7.90884 11.4997 7.70382 11.7048C7.49877 11.9094 7.16654 11.9097 6.96163 11.7048L3.98214 8.72527C3.58225 8.32496 3.582 7.67524 3.98214 7.27508L6.96163 4.29558Z" fill="currentColor"/>',
    })
    s.d(t, {}, { x: n })
  },
  Jq0m(e, t, s) {
    let n = (0, s("nkTT").a)({
      name: "chevron-right-md-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 7.501221, y: 4.334473, width: 6.157837, height: 11.331055 },
        visualBounds: { x: 7.501221, y: 4.334473, width: 6.157837, height: 11.331055 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 7.501221, y: 4.334473, width: 6.157837, height: 11.331055 },
        center: { x: 10.58014, y: 10 },
        insets: { top: 4.334473, right: 6.340942, bottom: 4.334472, left: 7.501221 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10.58014, y: 10 }, foreground: { x: 10.58014, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.696 14.5292C7.4363 14.7889 7.4363 15.211 7.696 15.4707C7.95569 15.7304 8.3777 15.7304 8.6374 15.4707L13.3425 10.7646C13.7646 10.3422 13.7646 9.65767 13.3425 9.2353L8.6374 4.52925C8.3777 4.26955 7.95569 4.26955 7.69599 4.52925C7.4363 4.78895 7.4363 5.21095 7.69599 5.47065L12.2253 9.99995L7.696 14.5292Z" fill="currentColor"/>',
    })
    s.d(t, {}, { R: n })
  },
  hwJp(e, t, s) {
    let n = (0, s("nkTT").a)({
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
      body: '<path d="M23.973 4.15811C26.5309 3.21084 29.2501 5.10338 29.2504 7.83096V22.2997C29.2504 24.973 26.6312 26.8608 24.0951 26.0155L19.2504 24.4003V24.6669C19.2504 25.9151 18.8715 27.0884 18.0297 27.955C17.1821 28.8273 15.9991 29.2499 14.6664 29.2499C13.3336 29.2498 12.1507 28.8274 11.3031 27.955C10.4613 27.0884 10.0834 25.9151 10.0834 24.6669V21.3446L10.015 21.3222C9.87083 21.2742 9.71971 21.25 9.56775 21.2499H6.00037C3.83725 21.2499 2.08337 19.496 2.08337 17.3329V13.3329C2.08365 11.17 3.83742 9.4169 6.00037 9.4169H9.52185C9.68979 9.4169 9.85655 9.38636 10.014 9.32803L23.973 4.15811ZM12.5834 24.6669C12.5834 25.4187 12.8056 25.9127 13.097 26.2128C13.3828 26.5067 13.8664 26.7498 14.6664 26.7499C15.4667 26.7499 15.951 26.5068 16.2367 26.2128C16.5282 25.9127 16.7504 25.4187 16.7504 24.6669V23.5673L12.5834 22.1776V24.6669ZM26.7504 7.83096C26.7501 6.84456 25.7663 6.16025 24.8412 6.50283L11.0834 11.5976V19.0429L24.8851 23.6444C25.8025 23.9502 26.7504 23.2667 26.7504 22.2997V7.83096ZM6.00037 11.9169C5.21813 11.9169 4.58365 12.5507 4.58337 13.3329V17.3329C4.58337 18.1153 5.21796 18.7499 6.00037 18.7499H8.58337V11.9169H6.00037Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(t, {}, { o: n })
  },
  HHO6(e, t, s) {
    let n = (0, s("nkTT").a)({
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
  ZRcE(e, t, s) {
    let n = (0, s("nkTT").a)({
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
//# sourceMappingURL=381822.67aedba674.js.map
