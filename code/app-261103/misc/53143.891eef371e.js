export const __rspack_esm_ids = [53143]
export const __webpack_modules__ = {
  cQed(e, t, s) {
    s.d(t, { VD: () => g, az: () => f, N5: () => p, hX: () => r, $Z: () => u, sl: () => l, ul: () => n })
    let i = new Set(["resource.invoke", "offline_access"])
    function n(e) {
      return !i.has(e)
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
    function l(e) {
      return r[e]
    }
    let c = {
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
      p = {
        openid: c,
        profile: c,
        email: c,
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
    function u(e) {
      return p[e]
    }
    let h = p["chatpass.enable.request"],
      f = {
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
        "ads.admin.all.read": p["ads.admin.all.read"],
        "ads.admin.all.write": p["ads.admin.all.write"],
        offline_access: p.offline_access,
      },
      g = {
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
  eOmy(e, t, s) {
    s.d(t, { SiteConnectorConsent: () => e8 })
    var i = s("ABep"),
      n = s("QosV")
    function a(e) {
      return (
        void 0 !== e &&
        (void 0 !== e.capabilities || (e.actions?.length ?? 0) > 0) &&
        void 0 !== e.selected_capabilities
      )
    }
    function o(e, t = {}, s = !0) {
      return {
        ...t,
        ...Object.fromEntries(
          e.connectors.map((e) => {
            let i = t[e.connector_id],
              n =
                e.accounts.find((e) => e.link_id === i?.accountId) ??
                e.accounts.find((e) =>
                  void 0 !== e.selected_capabilities ? null !== e.selected_capabilities : e.selected,
                ) ??
                (1 === e.accounts.length ? e.accounts[0] : void 0),
              o = s && (!n || a(n)),
              r =
                i?.accountId || i?.capabilities.length === 0
                  ? i.capabilities
                  : (n?.selected_capabilities ?? i?.capabilities ?? e.capabilities),
              l = e.capabilities.filter((e) => r.includes(e) && (n?.capabilities?.includes(e) ?? !0))
            return [
              e.connector_id,
              { accountId: n?.link_id ?? i?.accountId, capabilities: o || l.length === e.capabilities.length ? l : [] },
            ]
          }),
        ),
      }
    }
    var r = s("zd8w"),
      l = s("eQIX"),
      c = s.n(l),
      d = s("oUOT"),
      p = s("eWgZ"),
      u = s("Wf1j"),
      h = s("oyxz"),
      f = s("cQed"),
      g = s("q2w2"),
      m = s("atZx"),
      x = s("HZfM")
    let C = (e) => {
      let t,
        s,
        a,
        o,
        r,
        l,
        d,
        p,
        u = (0, n.c)(15)
      u[0] !== e
        ? (({ className: t, size: o, style: a, ...s } = e), (u[0] = e), (u[1] = t), (u[2] = s), (u[3] = a), (u[4] = o))
        : ((t = u[1]), (s = u[2]), (a = u[3]), (o = u[4]))
      let h = void 0 === o ? 20 : o,
        f = `${h}px`
      u[5] !== a || u[6] !== f ? ((r = { ...a, "--spinner-size": f }), (u[5] = a), (u[6] = f), (u[7] = r)) : (r = u[7])
      let g = r
      return (
        u[8] !== t ? ((l = c()("root-Pas3PD", t)), (u[8] = t), (u[9] = l)) : (l = u[9]),
        u[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsxs)("svg", {
              "aria-hidden": "true",
              className: "icon-o_kAPJ",
              viewBox: "0 0 19 19",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, i.jsx)("path", {
                  d: "M9.5 2.9375V5.5625M9.5 13.4375V16.0625M2.9375 9.5H5.5625M13.4375 9.5H16.0625",
                  stroke: "currentColor",
                  strokeWidth: "1.875",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  d: "M4.86011 4.85961L6.71627 6.71577M12.2847 12.2842L14.1409 14.1404M4.86011 14.1404L6.71627 12.2842M12.2847 6.71577L14.1409 4.85961",
                  stroke: "currentColor",
                  strokeWidth: "1.875",
                  strokeLinecap: "round",
                }),
              ],
            })),
            (u[10] = d))
          : (d = u[10]),
        u[11] !== s || u[12] !== g || u[13] !== l
          ? ((p = (0, i.jsx)("span", { className: l, style: g, ...s, children: d })),
            (u[11] = s),
            (u[12] = g),
            (u[13] = l),
            (u[14] = p))
          : (p = u[14]),
        p
      )
    }
    var b = s("xPHc")
    let j = (0, r.createContext)(b.A),
      v = (e) => {
        let t = (0, r.useRef)(null),
          { focusableProps: s } = (0, g.Wc)({}, t),
          n = (0, r.useId)(),
          a = (0, r.useContext)(j),
          {
            variant: o,
            className: l,
            decoration: d,
            align: p,
            children: u,
            focusableDisabled: h = !1,
            subtext: f,
            "aria-describedby": b,
            "aria-busy": v,
            "data-dd-action-name": y,
            flexibleHeight: w = !1,
            isLoading: A = !1,
            secondaryAction: M = null,
            ...k
          } = e,
          N = [f ? n : void 0, b].filter(Boolean).join(" "),
          { style: _, className: D, align: I } = a(e) ?? {},
          G = p ?? I ?? "center",
          S = c()(l, D, "root-S32nKN", {
            "leftAlign-_E2gKa": "left" === G,
            "centerAlignLink-e06yao": "clickableLink" === o && "center" === G && ["a", "link"].includes(k.as ?? ""),
            "primary-QvT5te": "primary" === o,
            "transparent-zZ94ti": "transparent" === o,
            "outline-yFnCRt": "outline" === o,
            "clickableLink-w5UtW0": "clickableLink" === o,
            "focusableDisabled-iE4B7M": h,
            "flexibleHeight-oU_o37": w,
            "loading-lN9dJn": A,
            "hasSecondaryAction-D1lEEP": !!M && !A,
          }),
          V = { ..._, ...e.style },
          L = (0, m.v)(
            {
              ref: t,
              className: S,
              style: V,
              "aria-describedby": N,
              "aria-busy": !!A || v,
              "aria-disabled": h || ("disabled" in k && k.disabled),
              "data-dd-action-name": y,
              "data-login-web-auth-control": "true",
            },
            s,
          ),
          T = A
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("span", { className: "loadingLabel-ORRZ9l", children: u }),
                  (0, i.jsx)(C, { "aria-hidden": "true" }),
                ],
              })
            : (0, i.jsxs)(i.Fragment, {
                children: [d && (0, i.jsx)("div", { className: "decoration-tp7vFk", children: d }), u],
              })
        return (0, i.jsxs)("div", {
          className: "wrapper-JrB6Vk",
          children: [
            (function () {
              switch (k.as) {
                case "a": {
                  let { onClick: e, ...t } = k
                  return (0, i.jsx)("a", {
                    onClick: (t) => {
                      h ? t.preventDefault() : e?.(t)
                    },
                    ...L,
                    ...t,
                    children: T,
                  })
                }
                case "link": {
                  let { onClick: e, ...t } = k
                  return (0, i.jsx)(x.N_, {
                    onClick: (t) => {
                      h ? t.preventDefault() : e?.(t)
                    },
                    ...L,
                    ...t,
                    children: T,
                  })
                }
                default: {
                  let { onClick: e, ...t } = k
                  return (0, i.jsx)("button", {
                    onClick: (t) => {
                      h ? t.preventDefault() : e?.(t)
                    },
                    ...L,
                    ...t,
                    children: T,
                  })
                }
              }
            })(),
            f && (0, i.jsx)("div", { className: "subtext-csuNAr", id: n, children: f }),
            M &&
              !A &&
              (0, i.jsx)("div", {
                className: c()("secondaryAction-CjUKXw", { "outlinedSecondaryAction-XiTO2P": "outline" === o }),
                children: M,
              }),
          ],
        })
      }
    var y = (e) =>
        (0, i.jsx)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z",
            fill: "currentColor",
          }),
        }),
      w = (e) =>
        (0, i.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.5208 1.88086C15.7221 1.88086 18.3078 5.71869 18.3079 9.1875C18.3079 10.6634 17.6928 12.1653 16.6019 13.0332C16.0469 13.4746 15.3655 13.7517 14.598 13.7559C13.9313 13.7594 13.2416 13.5557 12.5511 13.1377C11.9219 13.6395 11.2034 13.9685 10.4534 14.0312C9.535 14.108 8.63654 13.7825 7.91047 13.0283L7.87238 12.9883C7.85039 12.965 7.8186 12.9309 7.77863 12.8887C7.69832 12.8039 7.58559 12.6849 7.45637 12.5488C7.19751 12.2762 6.87183 11.9348 6.60578 11.6572L6.54719 11.5889C6.27521 11.2405 6.30519 10.736 6.6302 10.4229L6.84504 10.2158L6.10383 9.44629C5.84919 9.18175 5.857 8.76058 6.12141 8.50586C6.38599 8.25118 6.80713 8.2589 7.06184 8.52344L7.80305 9.29297L9.59406 7.56836L8.85383 6.7998C8.59913 6.5352 8.60778 6.11407 8.87238 5.85938C9.13699 5.60473 9.55813 5.61237 9.81281 5.87695L10.553 6.64648L10.7747 6.43359C11.1235 6.098 11.6792 6.10952 12.013 6.45996L13.3167 7.8291C14.0599 8.59431 14.3531 9.50484 14.2337 10.4219C14.1535 11.0377 13.8891 11.6205 13.5052 12.1455C13.9126 12.3481 14.2758 12.4274 14.5911 12.4258C15.0278 12.4233 15.4257 12.269 15.7737 11.9922C16.4894 11.4229 16.9779 10.3387 16.9779 9.1875C16.9777 6.36405 14.9015 3.21094 10.5208 3.21094C6.8614 3.21118 3.69922 6.00766 3.45344 9.52734C3.17857 13.4658 5.9647 16.7887 10.2064 16.7891C11.8181 16.7891 13.4105 16.3859 14.5159 15.5303C14.8063 15.3055 15.2247 15.3591 15.4495 15.6494C15.6741 15.9398 15.6207 16.3573 15.3304 16.582C13.9169 17.6762 12.0013 18.1191 10.2064 18.1191C5.1481 18.1188 1.80089 14.096 2.12629 9.43457C2.42465 5.16205 6.22034 1.8811 10.5208 1.88086ZM7.8802 11.0654C8.06588 11.2601 8.25662 11.4605 8.42023 11.6328C8.54982 11.7693 8.66289 11.8886 8.74348 11.9736C8.78365 12.016 8.81607 12.0508 8.8382 12.0742L8.87238 12.1094C9.33016 12.583 9.83897 12.7472 10.3431 12.7051C10.8683 12.661 11.4519 12.3855 11.9945 11.8633C12.543 11.3352 12.848 10.7668 12.9154 10.25C12.9794 9.75778 12.8385 9.24516 12.3587 8.75293L12.3538 8.74707L11.3665 7.70996L7.8802 11.0654Z",
            fill: "currentColor",
          }),
        }),
      A = (e) =>
        (0, i.jsx)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z",
            fill: "currentColor",
          }),
        }),
      M = s.p + "assets/8162af278269.svg",
      k = s("M9GX"),
      N = s("mQNj"),
      _ = s("caVE"),
      D = s("DZHT"),
      I = s("cfze"),
      G = s("mYpn"),
      S = s("iMvD")
    let V = parseInt("20"),
      L = (e) => {
        let t,
          s,
          a,
          o,
          r,
          l,
          d,
          p,
          u,
          h,
          f,
          g,
          m,
          x,
          C,
          b,
          j,
          v,
          y,
          w,
          M,
          L,
          T,
          P,
          q,
          U,
          W = (0, n.c)(58)
        W[0] !== e
          ? (({
              className: s,
              renderField: d,
              label: a,
              variant: f,
              errors: g,
              options: r,
              renderSelectedItem: u,
              renderListBoxItem: p,
              listBoxClassName: o,
              popoverClassName: l,
              UNSTABLE_virtualization: t,
              ...h
            } = e),
            (W[0] = e),
            (W[1] = t),
            (W[2] = s),
            (W[3] = a),
            (W[4] = o),
            (W[5] = r),
            (W[6] = l),
            (W[7] = d),
            (W[8] = p),
            (W[9] = u),
            (W[10] = h),
            (W[11] = f),
            (W[12] = g))
          : ((t = W[1]),
            (s = W[2]),
            (a = W[3]),
            (o = W[4]),
            (r = W[5]),
            (l = W[6]),
            (d = W[7]),
            (p = W[8]),
            (u = W[9]),
            (h = W[10]),
            (f = W[11]),
            (g = W[12]))
        let R = void 0 === f ? "field" : f
        W[13] !== g ? ((m = void 0 === g ? [] : g), (W[13] = g), (W[14] = m)) : (m = W[14])
        let O = m
        e: {
          let e
          if (!t) {
            x = null
            break e
          }
          let s = t.innerRowHeight + V
          ;(W[15] !== s ? ((e = new k.$({ rowHeight: s })), (W[15] = s), (W[16] = e)) : (e = W[16]), (x = e))
        }
        let E = x
        ;(W[17] !== o ? ((C = c()("listBox-wo8MGB", o)), (W[17] = o), (W[18] = C)) : (C = W[18]),
          W[19] !== p
            ? ((b = (e) => (0, i.jsx)(N.nh, { className: "item-l7H4sx", textValue: e.typeaheadValue, children: p(e) })),
              (W[19] = p),
              (W[20] = b))
            : (b = W[20]),
          W[21] !== r || W[22] !== C || W[23] !== b
            ? ((j = (0, i.jsx)(N.qF, { className: C, items: r, children: b })),
              (W[21] = r),
              (W[22] = C),
              (W[23] = b),
              (W[24] = j))
            : (j = W[24]))
        let H = j,
          z = "compact" === R ? "compactValue-gaFkD2" : void 0
        ;(W[25] !== u
          ? ((v = (e) => {
              let { selectedItem: t, isPlaceholder: s, defaultChildren: i } = e
              return s || !t ? i : u(t)
            }),
            (W[25] = u),
            (W[26] = v))
          : (v = W[26]),
          W[27] !== z || W[28] !== v
            ? ((y = (0, i.jsx)(_.yv, { className: z, children: v })), (W[27] = z), (W[28] = v), (W[29] = y))
            : (y = W[29]))
        let Z = y,
          B = "compact" === R ? 16 : 18,
          F = "compact" === R ? 16 : 18
        W[30] !== B || W[31] !== F
          ? ((w = (0, i.jsx)(A, { height: B, width: F, className: "icon-zbmUDF", "aria-hidden": !0 })),
            (W[30] = B),
            (W[31] = F),
            (W[32] = w))
          : (w = W[32])
        let $ = w
        W[33] !== s || W[34] !== R
          ? ((M = "compact" === R ? (e) => c()("compact-jtz7At", "function" == typeof s ? s(e) : s) : s),
            (W[33] = s),
            (W[34] = R),
            (W[35] = M))
          : (M = W[35])
        let K = "compact" === R ? a : void 0,
          Q = O.length > 0
        return (
          W[36] !== O || W[37] !== $ || W[38] !== d || W[39] !== Z || W[40] !== R
            ? ((L =
                "compact" === R
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsxs)(D.$, {
                          className: "compactButton-Hl548E",
                          "data-login-web-auth-control": "true",
                          children: [Z, $],
                        }),
                        (0, i.jsx)(I.b, { className: "error-SMD8b0", children: O.join(" ") }),
                      ],
                    })
                  : d?.((0, i.jsxs)(i.Fragment, { children: [Z, $] }))),
              (W[36] = O),
              (W[37] = $),
              (W[38] = d),
              (W[39] = Z),
              (W[40] = R),
              (W[41] = L))
            : (L = W[41]),
          W[42] !== l ? ((T = c()("popover-wOJgau", l)), (W[42] = l), (W[43] = T)) : (T = W[43]),
          W[44] !== t || W[45] !== E || W[46] !== H
            ? ((P = t && E ? (0, i.jsx)(G.Y, { layout: E, children: H }) : H),
              (W[44] = t),
              (W[45] = E),
              (W[46] = H),
              (W[47] = P))
            : (P = W[47]),
          W[48] !== T || W[49] !== P
            ? ((q = (0, i.jsx)(S.A, { className: T, children: P })), (W[48] = T), (W[49] = P), (W[50] = q))
            : (q = W[50]),
          W[51] !== h || W[52] !== M || W[53] !== K || W[54] !== Q || W[55] !== L || W[56] !== q
            ? ((U = (0, i.jsxs)(_.l6, {
                className: M,
                "aria-label": K,
                validationBehavior: "aria",
                isInvalid: Q,
                ...h,
                children: [L, q],
              })),
              (W[51] = h),
              (W[52] = M),
              (W[53] = K),
              (W[54] = Q),
              (W[55] = L),
              (W[56] = q),
              (W[57] = U))
            : (U = W[57]),
          U
        )
      },
      T = (e) => {
        let t,
          s,
          a = (0, n.c)(5),
          { logo: o, size: r } = e,
          l = "large" === (void 0 === r ? "default" : r)
        return (
          a[0] !== l ? ((t = c()("root-qJTw69", { "large-pNHkrp": l })), (a[0] = l), (a[1] = t)) : (t = a[1]),
          a[2] !== o || a[3] !== t
            ? ((s = (0, i.jsx)("div", { className: t, children: o })), (a[2] = o), (a[3] = t), (a[4] = s))
            : (s = a[4]),
          s
        )
      }
    var P = "dot-MRgIQP"
    let q = (e) => {
        let t,
          s,
          a,
          o,
          r = (0, n.c)(10),
          { firstLogo: l, secondLogo: c, size: d } = e
        return (
          r[0] !== l || r[1] !== d
            ? ((t = (0, i.jsx)(T, { logo: l, size: d })), (r[0] = l), (r[1] = d), (r[2] = t))
            : (t = r[2]),
          r[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsxs)("div", {
                className: "dots-mN0Rgg",
                children: [
                  (0, i.jsx)("div", { className: P }),
                  (0, i.jsx)("div", { className: P }),
                  (0, i.jsx)("div", { className: P }),
                ],
              })),
              (r[3] = s))
            : (s = r[3]),
          r[4] !== c || r[5] !== d
            ? ((a = (0, i.jsx)(T, { logo: c, size: d })), (r[4] = c), (r[5] = d), (r[6] = a))
            : (a = r[6]),
          r[7] !== t || r[8] !== a
            ? ((o = (0, i.jsxs)("div", { className: "root-qzR0d6", children: [t, s, a] })),
              (r[7] = t),
              (r[8] = a),
              (r[9] = o))
            : (o = r[9]),
          o
        )
      },
      U = (0, s("Qgfj").YK)({
        openAI: { id: "logo.openAI", defaultMessage: "OpenAI logo", description: "Alt text for the OpenAI logo" },
        apple: { id: "logo.apple", defaultMessage: "Apple logo", description: "Alt text for the Apple logo" },
        google: { id: "logo.google", defaultMessage: "Google logo", description: "Alt text for the Google logo" },
        microsoft: {
          id: "logo.microsoft",
          defaultMessage: "Microsoft logo",
          description: "Alt text for the Microsoft logo",
        },
      }),
      W = {
        openAI: {
          Component: (e) =>
            (0, i.jsx)("svg", {
              width: 486,
              height: 486,
              viewBox: "0 0 486 486",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: (0, i.jsx)("g", {
                children: (0, i.jsx)("path", {
                  d: "M186.576 177.497V131.422C186.576 127.541 188.02 124.63 191.383 122.693L283.194 69.3427C295.691 62.0679 310.593 58.6747 325.972 58.6747C383.651 58.6747 420.185 103.781 420.185 151.794C420.185 155.188 420.185 159.068 419.703 162.949L324.529 106.688C318.762 103.294 312.992 103.294 307.225 106.688L186.576 177.497ZM400.956 356.949V246.851C400.956 240.06 398.07 235.21 392.304 231.816L271.655 161.006L311.07 138.209C314.434 136.272 317.319 136.272 320.683 138.209L412.493 191.559C438.932 207.081 456.715 240.06 456.715 272.068C456.715 308.926 435.086 342.878 400.956 356.945V356.949ZM158.217 259.949L118.802 236.67C115.439 234.733 113.996 231.821 113.996 227.94V121.241C113.996 69.3477 153.41 30.0599 206.766 30.0599C226.957 30.0599 245.699 36.8515 261.565 48.9761L166.873 104.268C161.107 107.661 158.222 112.511 158.222 119.303V259.953L158.217 259.949ZM243.057 309.418L186.576 277.409V209.511L243.057 177.502L299.533 209.511V277.409L243.057 309.418ZM279.347 456.86C259.157 456.86 240.415 450.069 224.549 437.945L319.24 382.652C325.007 379.259 327.892 374.409 327.892 367.617V226.967L367.79 250.246C371.153 252.183 372.597 255.094 372.597 258.976V365.675C372.597 417.568 332.699 456.856 279.347 456.856V456.86ZM165.427 348.705L73.6158 295.356C47.1769 279.834 29.3943 246.856 29.3943 214.847C29.3943 177.502 51.5056 144.038 85.6311 129.971V240.551C85.6311 247.342 88.5173 252.192 94.2835 255.587L214.454 325.909L175.039 348.705C171.676 350.643 168.79 350.643 165.427 348.705ZM160.142 428.245C105.826 428.245 65.9292 387.02 65.9292 336.095C65.9292 332.214 66.411 328.334 66.8889 324.453L161.581 379.745C167.347 383.139 173.118 383.139 178.885 379.745L299.533 309.423V355.498C299.533 359.379 298.09 362.29 294.726 364.227L202.916 417.577C190.418 424.852 175.517 428.245 160.137 428.245H160.142ZM279.347 485.958C337.509 485.958 386.054 444.249 397.114 388.958C450.949 374.891 485.557 323.966 485.557 272.073C485.557 238.121 471.139 205.144 445.181 181.378C447.585 171.192 449.027 161.006 449.027 150.825C449.027 81.4712 393.268 29.5727 328.857 29.5727C315.882 29.5727 303.384 31.5104 290.886 35.8781C269.252 14.5371 239.45 0.958008 206.766 0.958008C148.605 0.958008 100.06 42.6656 89.0001 97.9574C35.1656 112.024 0.557129 162.949 0.557129 214.842C0.557129 248.794 14.9757 281.771 40.9328 305.537C38.5295 315.723 37.087 325.909 37.087 336.091C37.087 405.445 92.846 457.342 157.256 457.342C170.232 457.342 182.731 455.405 195.229 451.037C216.857 472.378 246.659 485.958 279.347 485.958Z",
                  fill: "currentColor",
                }),
              }),
            }),
          alt: U.openAI,
        },
        apple: {
          Component: (e) =>
            (0, i.jsxs)("svg", {
              width: 64,
              height: 64,
              viewBox: "0 0 64 64",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, i.jsx)("mask", {
                  id: "mask0_98_775",
                  style: { maskType: "luminance" },
                  maskUnits: "userSpaceOnUse",
                  x: 7,
                  y: 0,
                  width: 50,
                  height: 61,
                  children: (0, i.jsx)("path", { d: "M7.16187 0H56.838V61H7.16187V0Z", fill: "white" }),
                }),
                (0, i.jsx)("g", {
                  mask: "url(#mask0_98_775)",
                  children: (0, i.jsx)("path", {
                    d: "M48.644 32.4099C48.5739 24.6929 54.9525 20.9851 55.2399 20.8028C51.6511 15.553 46.0715 14.8381 44.0808 14.754C39.3354 14.2704 34.8143 17.5506 32.4031 17.5506C29.9918 17.5506 26.2768 14.8241 22.3375 14.9012C17.1575 14.9783 12.384 17.9081 9.7134 22.5481C4.33714 31.8702 8.33954 45.6991 13.5826 53.2759C16.1481 56.9767 19.1972 61.1471 23.2136 60.9929C27.0829 60.8387 28.5408 58.4906 33.2092 58.4906C37.8775 58.4906 39.1952 60.9929 43.2748 60.9158C47.4314 60.8317 50.0669 57.1309 52.6114 53.4161C55.5483 49.1195 56.761 44.9561 56.8311 44.7388C56.7399 44.7038 48.7281 41.6338 48.644 32.4099",
                    fill: "currentColor",
                  }),
                }),
                (0, i.jsx)("path", {
                  d: "M40.9686 9.74262C43.0995 7.16328 44.5364 3.57463 44.1439 0C41.0737 0.126163 37.3587 2.04665 35.1577 4.62599C33.1881 6.90394 31.4567 10.5557 31.9264 14.0602C35.34 14.3266 38.8377 12.3149 40.9686 9.74262Z",
                  fill: "currentColor",
                }),
              ],
            }),
          alt: U.apple,
        },
        appleInverse: {
          Component: (e) =>
            (0, i.jsxs)("svg", {
              width: 64,
              height: 64,
              viewBox: "0 0 64 64",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, i.jsx)("mask", {
                  id: "mask0_98_775",
                  style: { maskType: "luminance" },
                  maskUnits: "userSpaceOnUse",
                  x: 7,
                  y: 0,
                  width: 50,
                  height: 61,
                  children: (0, i.jsx)("path", { d: "M7.16187 0H56.838V61H7.16187V0Z", fill: "white" }),
                }),
                (0, i.jsx)("g", {
                  mask: "url(#mask0_98_775)",
                  children: (0, i.jsx)("path", {
                    d: "M48.644 32.4099C48.5739 24.6929 54.9525 20.9851 55.2399 20.8028C51.6511 15.553 46.0715 14.8381 44.0808 14.754C39.3354 14.2704 34.8143 17.5506 32.4031 17.5506C29.9918 17.5506 26.2768 14.8241 22.3375 14.9012C17.1575 14.9783 12.384 17.9081 9.7134 22.5481C4.33714 31.8702 8.33954 45.6991 13.5826 53.2759C16.1481 56.9767 19.1972 61.1471 23.2136 60.9929C27.0829 60.8387 28.5408 58.4906 33.2092 58.4906C37.8775 58.4906 39.1952 60.9929 43.2748 60.9158C47.4314 60.8317 50.0669 57.1309 52.6114 53.4161C55.5483 49.1195 56.761 44.9561 56.8311 44.7388C56.7399 44.7038 48.7281 41.6338 48.644 32.4099",
                    fill: "white",
                  }),
                }),
                (0, i.jsx)("path", {
                  d: "M40.9686 9.74262C43.0995 7.16328 44.5364 3.57463 44.1439 0C41.0737 0.126163 37.3587 2.04665 35.1577 4.62599C33.1881 6.90394 31.4567 10.5557 31.9264 14.0602C35.34 14.3266 38.8377 12.3149 40.9686 9.74262Z",
                  fill: "white",
                }),
              ],
            }),
          alt: U.apple,
        },
        google: {
          Component: (e) =>
            (0, i.jsx)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ...e,
              children: (0, i.jsxs)("g", {
                transform: "matrix(0.0805512690 0 0 0.0803263587 1 1)",
                children: [
                  (0, i.jsxs)("defs", {
                    children: [
                      (0, i.jsxs)("linearGradient", {
                        id: "authGoogle2025-a",
                        children: [
                          (0, i.jsx)("stop", { offset: 0, stopColor: "#0fbc5c" }),
                          (0, i.jsx)("stop", { offset: 1, stopColor: "#0cba65" }),
                        ],
                      }),
                      (0, i.jsxs)("linearGradient", {
                        id: "authGoogle2025-g",
                        children: [
                          (0, i.jsx)("stop", { offset: 0.2312727, stopColor: "#0fbc5f" }),
                          (0, i.jsx)("stop", { offset: 0.3115468, stopColor: "#0fbc5f" }),
                          (0, i.jsx)("stop", { offset: 0.3660131, stopColor: "#0fbc5e" }),
                          (0, i.jsx)("stop", { offset: 0.4575163, stopColor: "#0fbc5d" }),
                          (0, i.jsx)("stop", { offset: 0.540305, stopColor: "#12bc58" }),
                          (0, i.jsx)("stop", { offset: 0.6993464, stopColor: "#28bf3c" }),
                          (0, i.jsx)("stop", { offset: 0.7712418, stopColor: "#38c02b" }),
                          (0, i.jsx)("stop", { offset: 0.8605665, stopColor: "#52c218" }),
                          (0, i.jsx)("stop", { offset: 0.9150327, stopColor: "#67c30f" }),
                          (0, i.jsx)("stop", { offset: 1, stopColor: "#86c504" }),
                        ],
                      }),
                      (0, i.jsxs)("linearGradient", {
                        id: "authGoogle2025-h",
                        children: [
                          (0, i.jsx)("stop", { offset: 0.1416122, stopColor: "#1abd4d" }),
                          (0, i.jsx)("stop", { offset: 0.2475151, stopColor: "#6ec30d" }),
                          (0, i.jsx)("stop", { offset: 0.3115468, stopColor: "#8ac502" }),
                          (0, i.jsx)("stop", { offset: 0.3660131, stopColor: "#a2c600" }),
                          (0, i.jsx)("stop", { offset: 0.4456735, stopColor: "#c8c903" }),
                          (0, i.jsx)("stop", { offset: 0.540305, stopColor: "#ebcb03" }),
                          (0, i.jsx)("stop", { offset: 0.6156363, stopColor: "#f7cd07" }),
                          (0, i.jsx)("stop", { offset: 0.6993454, stopColor: "#fdcd04" }),
                          (0, i.jsx)("stop", { offset: 0.7712418, stopColor: "#fdce05" }),
                          (0, i.jsx)("stop", { offset: 0.8605661, stopColor: "#ffce0a" }),
                        ],
                      }),
                      (0, i.jsxs)("linearGradient", {
                        id: "authGoogle2025-f",
                        children: [
                          (0, i.jsx)("stop", { offset: 0.3159041, stopColor: "#ff4c3c" }),
                          (0, i.jsx)("stop", { offset: 0.6038179, stopColor: "#ff692c" }),
                          (0, i.jsx)("stop", { offset: 0.7268366, stopColor: "#ff7825" }),
                          (0, i.jsx)("stop", { offset: 0.884534, stopColor: "#ff8d1b" }),
                          (0, i.jsx)("stop", { offset: 1, stopColor: "#ff9f13" }),
                        ],
                      }),
                      (0, i.jsxs)("linearGradient", {
                        id: "authGoogle2025-b",
                        children: [
                          (0, i.jsx)("stop", { offset: 0.2312727, stopColor: "#ff4541" }),
                          (0, i.jsx)("stop", { offset: 0.3115468, stopColor: "#ff4540" }),
                          (0, i.jsx)("stop", { offset: 0.4575163, stopColor: "#ff4640" }),
                          (0, i.jsx)("stop", { offset: 0.540305, stopColor: "#ff473f" }),
                          (0, i.jsx)("stop", { offset: 0.6993464, stopColor: "#ff5138" }),
                          (0, i.jsx)("stop", { offset: 0.7712418, stopColor: "#ff5b33" }),
                          (0, i.jsx)("stop", { offset: 0.8605665, stopColor: "#ff6c29" }),
                          (0, i.jsx)("stop", { offset: 1, stopColor: "#ff8c18" }),
                        ],
                      }),
                      (0, i.jsxs)("linearGradient", {
                        id: "authGoogle2025-d",
                        children: [
                          (0, i.jsx)("stop", { offset: 0.4084578, stopColor: "#fb4e5a" }),
                          (0, i.jsx)("stop", { offset: 1, stopColor: "#ff4540" }),
                        ],
                      }),
                      (0, i.jsxs)("linearGradient", {
                        id: "authGoogle2025-c",
                        children: [
                          (0, i.jsx)("stop", { offset: 0.1315461, stopColor: "#0cba65" }),
                          (0, i.jsx)("stop", { offset: 0.2097843, stopColor: "#0bb86d" }),
                          (0, i.jsx)("stop", { offset: 0.2972969, stopColor: "#09b479" }),
                          (0, i.jsx)("stop", { offset: 0.3962575, stopColor: "#08ad93" }),
                          (0, i.jsx)("stop", { offset: 0.4771242, stopColor: "#0aa6a9" }),
                          (0, i.jsx)("stop", { offset: 0.5684245, stopColor: "#0d9cc6" }),
                          (0, i.jsx)("stop", { offset: 0.667385, stopColor: "#1893dd" }),
                          (0, i.jsx)("stop", { offset: 0.7687273, stopColor: "#258bf1" }),
                          (0, i.jsx)("stop", { offset: 0.8585063, stopColor: "#3086ff" }),
                        ],
                      }),
                      (0, i.jsxs)("linearGradient", {
                        id: "authGoogle2025-e",
                        children: [
                          (0, i.jsx)("stop", { offset: 0.3660131, stopColor: "#ff4e3a" }),
                          (0, i.jsx)("stop", { offset: 0.4575163, stopColor: "#ff8a1b" }),
                          (0, i.jsx)("stop", { offset: 0.540305, stopColor: "#ffa312" }),
                          (0, i.jsx)("stop", { offset: 0.6156363, stopColor: "#ffb60c" }),
                          (0, i.jsx)("stop", { offset: 0.7712418, stopColor: "#ffcd0a" }),
                          (0, i.jsx)("stop", { offset: 0.8605665, stopColor: "#fecf0a" }),
                          (0, i.jsx)("stop", { offset: 0.9150327, stopColor: "#fecf08" }),
                          (0, i.jsx)("stop", { offset: 1, stopColor: "#fdcd01" }),
                        ],
                      }),
                      (0, i.jsx)("linearGradient", {
                        xlinkHref: "#authGoogle2025-a",
                        id: "authGoogle2025-s",
                        x1: 219.6997,
                        y1: 329.5351,
                        x2: 254.4673,
                        y2: 329.5351,
                        gradientUnits: "userSpaceOnUse",
                      }),
                      (0, i.jsx)("radialGradient", {
                        xlinkHref: "#authGoogle2025-b",
                        id: "authGoogle2025-m",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "matrix(-1.936885,1.043001,1.455731,2.555422,290.5254,-400.6338)",
                        cx: 109.6267,
                        cy: 135.8619,
                        fx: 109.6267,
                        fy: 135.8619,
                        r: 71.46001,
                      }),
                      (0, i.jsx)("radialGradient", {
                        xlinkHref: "#authGoogle2025-c",
                        id: "authGoogle2025-n",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "matrix(-3.512595,-4.45809,-1.692547,1.260616,870.8006,191.554)",
                        cx: 45.25866,
                        cy: 279.2738,
                        fx: 45.25866,
                        fy: 279.2738,
                        r: 71.46001,
                      }),
                      (0, i.jsx)("radialGradient", {
                        xlinkHref: "#authGoogle2025-d",
                        id: "authGoogle2025-l",
                        cx: 304.0166,
                        cy: 118.0089,
                        fx: 304.0166,
                        fy: 118.0089,
                        r: 47.85445,
                        gradientTransform: "matrix(2.064353,-4.926832e-6,-2.901531e-6,2.592041,-297.6788,-151.7469)",
                        gradientUnits: "userSpaceOnUse",
                      }),
                      (0, i.jsx)("radialGradient", {
                        xlinkHref: "#authGoogle2025-e",
                        id: "authGoogle2025-o",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "matrix(-0.2485783,2.083138,2.962486,0.3341668,-255.1463,-331.1636)",
                        cx: 181.001,
                        cy: 177.2013,
                        fx: 181.001,
                        fy: 177.2013,
                        r: 71.46001,
                      }),
                      (0, i.jsx)("radialGradient", {
                        xlinkHref: "#authGoogle2025-f",
                        id: "authGoogle2025-p",
                        cx: 207.6733,
                        cy: 108.0972,
                        fx: 207.6733,
                        fy: 108.0972,
                        r: 41.1025,
                        gradientTransform: "matrix(-1.249206,1.343263,-3.896837,-3.425693,880.5011,194.9051)",
                        gradientUnits: "userSpaceOnUse",
                      }),
                      (0, i.jsx)("radialGradient", {
                        xlinkHref: "#authGoogle2025-g",
                        id: "authGoogle2025-r",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "matrix(-1.936885,-1.043001,1.455731,-2.555422,290.5254,838.6834)",
                        cx: 109.6267,
                        cy: 135.8619,
                        fx: 109.6267,
                        fy: 135.8619,
                        r: 71.46001,
                      }),
                      (0, i.jsx)("radialGradient", {
                        xlinkHref: "#authGoogle2025-h",
                        id: "authGoogle2025-j",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "matrix(-0.081402,-1.93722,2.926737,-0.1162508,-215.1345,632.8606)",
                        cx: 154.8697,
                        cy: 145.9691,
                        fx: 154.8697,
                        fy: 145.9691,
                        r: 71.46001,
                      }),
                      (0, i.jsx)("filter", {
                        id: "authGoogle2025-q",
                        x: -0.04842873,
                        y: -0.0582241,
                        width: 1.096857,
                        height: 1.116448,
                        colorInterpolationFilters: "sRGB",
                        children: (0, i.jsx)("feGaussianBlur", { stdDeviation: 1.700914 }),
                      }),
                      (0, i.jsx)("filter", {
                        id: "authGoogle2025-k",
                        x: -0.01670084,
                        y: -0.01009856,
                        width: 1.033402,
                        height: 1.020197,
                        colorInterpolationFilters: "sRGB",
                        children: (0, i.jsx)("feGaussianBlur", { stdDeviation: 0.2419367 }),
                      }),
                      (0, i.jsx)("clipPath", {
                        clipPathUnits: "userSpaceOnUse",
                        id: "authGoogle2025-i",
                        children: (0, i.jsx)("path", {
                          d: "M371.3784 193.2406H237.0825v53.4375h77.167c-1.2405 7.5627-4.0259 15.0024-8.1049 21.7862-4.6734 7.7723-10.4511 13.6895-16.373 18.1957-17.7389 13.4983-38.42 16.2584-52.7828 16.2584-36.2824 0-67.2833-23.2865-79.2844-54.9287-.4843-1.1482-.8059-2.3344-1.1975-3.5068-2.652-8.0533-4.101-16.5825-4.101-25.4474 0-9.226 1.5691-18.0575 4.4301-26.3985 11.2851-32.8967 42.9849-57.4674 80.1789-57.4674 7.4811 0 14.6854.8843 21.5173 2.6481 15.6135 4.0309 26.6578 11.9698 33.4252 18.2494l40.834-39.7111c-24.839-22.616-57.2194-36.3201-95.8444-36.3201-30.8782-.00066-59.3863 9.55308-82.7477 25.6992-18.9454 13.0941-34.4833 30.6254-44.9695 50.9861-9.75366 18.8785-15.09441 39.7994-15.09441 62.2934 0 22.495 5.34891 43.6334 15.10261 62.3374v.126c10.3023 19.8567 25.3678 36.9537 43.6783 49.9878 15.9962 11.3866 44.6789 26.5516 84.0307 26.5516 22.6301 0 42.6867-4.0517 60.3748-11.6447 12.76-5.4775 24.0655-12.6217 34.3012-21.8036 13.5247-12.1323 24.1168-27.1388 31.3465-44.4041 7.2297-17.2654 11.097-36.7895 11.097-57.957 0-9.858-.9971-19.8694-2.6881-28.9684Z",
                          fill: "#000",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("g", {
                    transform: "matrix(0.957922,0,0,0.985255,-90.17436,-78.85577)",
                    children: (0, i.jsxs)("g", {
                      clipPath: "url(#authGoogle2025-i)",
                      children: [
                        (0, i.jsx)("path", {
                          d: "M92.07563 219.9585c.14844 22.14 6.5014 44.983 16.11767 63.4234v.1269c6.9482 13.3919 16.4444 23.9704 27.2604 34.4518l65.326-23.67c-12.3593-6.2344-14.2452-10.0546-23.1048-17.0253-9.0537-9.0658-15.8015-19.4735-20.0038-31.677h-.1693l.1693-.1269c-2.7646-8.0587-3.0373-16.6129-3.1393-25.5029Z",
                          fill: "url(#authGoogle2025-j)",
                          filter: "url(#authGoogle2025-k)",
                        }),
                        (0, i.jsx)("path", {
                          d: "M237.0835 79.02491c-6.4568 22.52569-3.988 44.42139 0 57.16129 7.4561.0055 14.6388.8881 21.4494 2.6464 15.6135 4.0309 26.6566 11.97 33.424 18.2496l41.8794-40.7256c-24.8094-22.58904-54.6663-37.2961-96.7528-37.33169Z",
                          fill: "url(#authGoogle2025-l)",
                          filter: "url(#authGoogle2025-k)",
                        }),
                        (0, i.jsx)("path", {
                          d: "M236.9434 78.84678c-31.6709-.00068-60.9107 9.79833-84.8718 26.35902-8.8968 6.149-17.0612 13.2521-24.3311 21.1509-1.9045 17.7429 14.2569 39.5507 46.2615 39.3702 15.5284-17.9373 38.4946-29.5427 64.0561-29.5427.0233 0 .046.0019.0693.002l-1.0439-57.33536c-.0472-.00003-.0929-.00406-.1401-.00406Z",
                          fill: "url(#authGoogle2025-m)",
                          filter: "url(#authGoogle2025-k)",
                        }),
                        (0, i.jsx)("path", {
                          d: "m341.4751 226.3788-28.2685 19.2848c-1.2405 7.5627-4.0278 15.0023-8.1068 21.7861-4.6734 7.7723-10.4506 13.6898-16.3725 18.196-17.7022 13.4704-38.3286 16.2439-52.6877 16.2553-14.8415 25.1018-17.4435 37.6749 1.0439 57.9342 22.8762-.0167 43.157-4.1174 61.0458-11.7965 12.9312-5.551 24.3879-12.7913 34.7609-22.0964 13.7061-12.295 24.4421-27.5034 31.7688-45.0003 7.3267-17.497 11.2446-37.2822 11.2446-58.7336Z",
                          fill: "url(#authGoogle2025-n)",
                          filter: "url(#authGoogle2025-k)",
                        }),
                        (0, i.jsx)("path", {
                          d: "M234.9956 191.2104v57.4981h136.0062c1.1962-7.8745 5.1523-18.0644 5.1523-26.5001 0-9.858-.9963-21.899-2.6873-30.998Z",
                          fill: "#3086ff",
                          filter: "url(#authGoogle2025-k)",
                        }),
                        (0, i.jsx)("path", {
                          d: "M128.3894 124.3268c-8.393 9.1191-15.5632 19.326-21.2483 30.3646-9.75351 18.8785-15.09402 41.8295-15.09402 64.3235 0 .317.02642.6271.02855.9436 4.31953 8.2244 59.66647 6.6495 62.45617 0-.0035-.3103-.0387-.6128-.0387-.9238 0-9.226 1.5696-16.0262 4.4306-24.3672 3.5294-10.2885 9.0557-19.7628 16.1223-27.9257 1.6019-2.0309 5.8748-6.3969 7.1214-9.0157.4749-.9975-.8621-1.5574-.9369-1.9085-.0836-.3927-1.8762-.0769-2.2778-.3694-1.2751-.9288-3.8001-1.4138-5.3334-1.8449-3.2772-.9215-8.7085-2.9536-11.7252-5.0601-9.5357-6.6586-24.417-14.6122-33.5047-24.2164Z",
                          fill: "url(#authGoogle2025-o)",
                          filter: "url(#authGoogle2025-k)",
                        }),
                        (0, i.jsx)("path", {
                          d: "M162.0989 155.8569c22.1123 13.3013 28.4714-6.7139 43.173-12.9771L179.698 90.21568c-9.4075 3.92642-18.2957 8.80465-26.5426 14.50442-12.316 8.5122-23.192 18.8995-32.1763 30.7204Z",
                          fill: "url(#authGoogle2025-p)",
                          filter: "url(#authGoogle2025-q)",
                        }),
                        (0, i.jsx)("path", {
                          d: "M171.0987 290.222c-29.6829 10.6413-34.3299 11.023-37.0622 29.2903 5.2213 5.0597 10.8312 9.74 16.7926 13.9835 15.9962 11.3867 46.766 26.5517 86.1178 26.5517.0462 0 .0904-.004.1366-.004v-59.1574c-.0298.0001-.064.002-.0938.002-14.7359 0-26.5113-3.8435-38.5848-10.5273-2.9768-1.6479-8.3775 2.7772-11.1229.799-3.7865-2.7284-12.8991 2.3508-16.1833-.9378Z",
                          fill: "url(#authGoogle2025-r)",
                          filter: "url(#authGoogle2025-k)",
                        }),
                        (0, i.jsx)("path", {
                          d: "M219.6997 299.0227v59.9959c5.506.6402 11.2361 1.0289 17.2472 1.0289 6.0259 0 11.8556-.3073 17.5204-.8723v-59.7481c-6.3482 1.0777-12.3272 1.461-17.4776 1.461-5.9318 0-11.7005-.6858-17.29-1.8654Z",
                          opacity: 0.5,
                          fill: "url(#authGoogle2025-s)",
                          filter: "url(#authGoogle2025-k)",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          alt: U.google,
        },
        microsoft: {
          Component: (e) =>
            (0, i.jsxs)("svg", {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, i.jsx)("path", { d: "M3.25 3.25H11.25V11.25H3.25V3.25Z", fill: "#F35325" }),
                (0, i.jsx)("path", { d: "M12.75 3.25H20.75V11.25H12.75V3.25Z", fill: "#81BC06" }),
                (0, i.jsx)("path", { d: "M3.25 12.75H11.25V20.75H3.25V12.75Z", fill: "#05A6F0" }),
                (0, i.jsx)("path", { d: "M12.75 12.75H20.75V20.75H12.75V12.75Z", fill: "#FFBA08" }),
              ],
            }),
          alt: U.microsoft,
        },
      },
      R = (e) => {
        let t,
          s,
          a,
          o = (0, n.c)(11),
          { name: r, size: l, className: d } = e,
          p = (0, u.A)(),
          { Component: h, alt: f } = W[r]
        return (
          o[0] !== f || o[1] !== p ? ((t = p.formatMessage(f)), (o[0] = f), (o[1] = p), (o[2] = t)) : (t = o[2]),
          o[3] !== d ? ((s = c()(d, "root-iXYSNn")), (o[3] = d), (o[4] = s)) : (s = o[4]),
          o[5] !== h || o[6] !== r || o[7] !== l || o[8] !== t || o[9] !== s
            ? ((a = (0, i.jsx)(h, { width: l, height: l, role: "img", "aria-label": t, "data-logo": r, className: s })),
              (o[5] = h),
              (o[6] = r),
              (o[7] = l),
              (o[8] = t),
              (o[9] = s),
              (o[10] = a))
            : (a = o[10]),
          a
        )
      },
      O = (e) => {
        let t,
          s,
          a,
          o,
          l,
          d,
          p,
          h,
          f = (0, n.c)(23),
          { appDisplayName: g, className: m, logoUri: x, fallbackLogoUri: C, size: b } = e,
          j = void 0 === b ? "default" : b,
          v = (0, u.A)()
        f[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (f[0] = t)) : (t = f[0])
        let [y, w] = (0, r.useState)(t)
        f[1] !== y || f[2] !== C || f[3] !== x
          ? ((s = [x, C].find((e) => e && !y.includes(e))), (f[1] = y), (f[2] = C), (f[3] = x), (f[4] = s))
          : (s = f[4])
        let A = s
        f[5] !== A
          ? ((a = () => {
              A && w((e) => (e.includes(A) ? e : [...e, A]))
            }),
            (f[5] = A),
            (f[6] = a))
          : (a = f[6])
        let M = a,
          k = "large" === j ? 48 : 32
        f[7] !== k
          ? ((o = (0, i.jsx)(R, { name: "openAI", size: k, className: "openAILogo-kPsto5" })), (f[7] = k), (f[8] = o))
          : (o = f[8])
        let N = o
        f[9] !== g || f[10] !== v
          ? ((l = g
              ? v.formatMessage(
                  {
                    id: "signInWithChatGPTBranding.appLogoAlt",
                    defaultMessage: "{appDisplayName} logo",
                    description: "Alt text for the logo of the external application using Sign in with ChatGPT.",
                  },
                  { appDisplayName: g },
                )
              : v.formatMessage({
                  id: "signInWithChatGPTBranding.externalAppLogoAlt",
                  defaultMessage: "External application logo",
                  description:
                    "Generic alt text for an external application logo when the application name is unavailable.",
                })),
            (f[9] = g),
            (f[10] = v),
            (f[11] = l))
          : (l = f[11])
        let _ = l
        return (
          f[12] !== m ? ((d = c()("root-nd9dc3", m)), (f[12] = m), (f[13] = d)) : (d = f[13]),
          f[14] !== N || f[15] !== M || f[16] !== _ || f[17] !== A || f[18] !== j
            ? ((p = A
                ? (0, i.jsx)(q, {
                    size: j,
                    firstLogo: N,
                    secondLogo: (0, i.jsx)(
                      "img",
                      {
                        src: A,
                        alt: _,
                        ref: (e) => {
                          e?.complete && 0 === e.naturalWidth && M()
                        },
                        onError: M,
                        className: c()("logoImage-z8LCkB", { "largeLogoImage-b8NI2z": "large" === j }),
                      },
                      A,
                    ),
                  })
                : (0, i.jsx)(R, { name: "openAI", size: 48, className: "standaloneOpenAILogo-Krx5sm" })),
              (f[14] = N),
              (f[15] = M),
              (f[16] = _),
              (f[17] = A),
              (f[18] = j),
              (f[19] = p))
            : (p = f[19]),
          f[20] !== d || f[21] !== p
            ? ((h = (0, i.jsx)("div", { className: d, children: p })), (f[20] = d), (f[21] = p), (f[22] = h))
            : (h = f[22]),
          h
        )
      }
    var E = s("u48M"),
      H = {
        xsmall: "xsmall-XRnF2Q",
        smallish: "smallish-y0VFqc",
        small: "small-Kjg0Bb",
        base: "base-nThqjy",
        large: "large-HFUvli",
        xlarge: "xlarge-KCwdUv",
        inherit: "inherit-mysQO1",
        extralight: "extralight-Nnp81j",
        light: "light-NC3jYq",
        normal: "normal-ZwnKjV",
        medium: "medium-iU2bCz",
        semibold: "semibold-hGVATu",
        bold: "bold-R34Rgl",
        primary: "primary-Q9UqO8",
        secondary: "secondary-a2hDFT",
        tertiary: "tertiary-oHTE_L",
        quaternary: "quaternary-nb6sjK",
        error: "error-pU2aqS",
        monospace: "monospace-gT_XZ2",
      }
    let z = (e) => {
      let t,
        s,
        a,
        o,
        r,
        l,
        d,
        p,
        u = (0, n.c)(16)
      u[0] !== e
        ? (({ size: a, weight: o, color: r, family: l, className: t, ...s } = e),
          (u[0] = e),
          (u[1] = t),
          (u[2] = s),
          (u[3] = a),
          (u[4] = o),
          (u[5] = r),
          (u[6] = l))
        : ((t = u[1]), (s = u[2]), (a = u[3]), (o = u[4]), (r = u[5]), (l = u[6]))
      let h = void 0 === o ? "normal" : o,
        f = void 0 === r ? "primary" : r,
        g = void 0 === l ? "regular" : l,
        m = H[void 0 === a ? "base" : a],
        x = H[h],
        C = H[f],
        b = "monospace" === g
      return (
        u[7] !== t || u[8] !== m || u[9] !== x || u[10] !== C || u[11] !== b
          ? ((d = c()(t, m, x, C, { [H.monospace]: b })),
            (u[7] = t),
            (u[8] = m),
            (u[9] = x),
            (u[10] = C),
            (u[11] = b),
            (u[12] = d))
          : (d = u[12]),
        u[13] !== s || u[14] !== d
          ? ((p = (0, i.jsx)("span", { className: d, ...s })), (u[13] = s), (u[14] = d), (u[15] = p))
          : (p = u[15]),
        p
      )
    }
    function Z(e) {
      let t,
        s,
        a,
        o,
        r,
        l,
        d,
        p = (0, n.c)(16)
      p[0] !== e ? (({ tooltipClassName: s, ...t } = e), (p[0] = e), (p[1] = t), (p[2] = s)) : ((t = p[1]), (s = p[2]))
      let u = !t.disabled || !t.disabledDescription
      return (
        p[3] !== t ? ((a = (0, i.jsx)(B, { ...t })), (p[3] = t), (p[4] = a)) : (a = p[4]),
        p[5] !== s ? ((o = c()("tooltip-MXjNFg", s)), (p[5] = s), (p[6] = o)) : (o = p[6]),
        p[7] !== t.disabledDescription
          ? ((r = (0, i.jsx)(z, { size: "small", children: t.disabledDescription })),
            (p[7] = t.disabledDescription),
            (p[8] = r))
          : (r = p[8]),
        p[9] !== o || p[10] !== r
          ? ((l = (0, i.jsx)(E.m_, { placement: "right", offset: 8, className: o, children: r })),
            (p[9] = o),
            (p[10] = r),
            (p[11] = l))
          : (l = p[11]),
        p[12] !== u || p[13] !== a || p[14] !== l
          ? ((d = (0, i.jsxs)(E.k$, { isDisabled: u, delay: 300, children: [a, l] })),
            (p[12] = u),
            (p[13] = a),
            (p[14] = l),
            (p[15] = d))
          : (d = p[15]),
        d
      )
    }
    function B(e) {
      let t,
        s,
        a,
        o,
        l = (0, n.c)(13),
        { checked: c, onChange: d, disabled: p, disabledDescription: u, focusableWhenDisabled: h, ...f } = e,
        x = void 0 !== p && p,
        C = (0, r.useRef)(null)
      l[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (l[0] = t)) : (t = l[0])
      let { focusableProps: b } = (0, g.Wc)(t, C),
        j = [f["aria-describedby"], b["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        v = (0, m.v)(b, f),
        y = x && !u && !(void 0 !== h && h)
      return (
        l[1] !== c || l[2] !== x || l[3] !== d
          ? ((s = () => {
              x || d(!c)
            }),
            (l[1] = c),
            (l[2] = x),
            (l[3] = d),
            (l[4] = s))
          : (s = l[4]),
        l[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)("span", { className: "track-zb5VWC", "aria-hidden": "true" })), (l[5] = a))
          : (a = l[5]),
        l[6] !== c || l[7] !== j || l[8] !== x || l[9] !== v || l[10] !== y || l[11] !== s
          ? ((o = (0, i.jsx)("button", {
              ...v,
              "aria-describedby": j,
              ref: C,
              className: "root-y6PQAG",
              type: "button",
              role: "switch",
              "aria-checked": c,
              "aria-disabled": x,
              disabled: y,
              "data-login-web-auth-control": "true",
              onClick: s,
              children: a,
            })),
            (l[6] = c),
            (l[7] = j),
            (l[8] = x),
            (l[9] = v),
            (l[10] = y),
            (l[11] = s),
            (l[12] = o))
          : (o = l[12]),
        o
      )
    }
    var F = "layout-ip5jZU",
      $ = "form-JbYen6",
      K = "wordmark-Vb0TUU",
      Q = "branding-Awx9wX",
      J = "content-lUtnnE",
      X = "card-oEHMOb",
      Y = "details-JiEm_e",
      ee = "permissionIcon-SDHYsZ",
      et = "permissionHeading-rqRTyW",
      es = "heading-W8icVg",
      ei = "permissionTitle-E5oqg9",
      en = "description-lHjo_3",
      ea = "connectorDescription-ia3fFa",
      eo = "accountDescription-pUkZlp",
      er = "summary-eHtOiv",
      el = "connectorSummary-CebqYi",
      ec = "connectors-l_0qGg",
      ed = "installedLabel-_Tji_A",
      ep = "sectionLabel-_K5ocS",
      eu = "reason-DrEQrt",
      eh = "loading-FyXKVC",
      ef = "identityFailure-qCa3Sn",
      eg = "failure-RHKr6j",
      em = "requestId-TQG2o3",
      ex = "failureMessage-MqFHet",
      eC = "connector-wCTGZw",
      eb = "icon-iXoxxl",
      ej = "overflowIcons-nsvNzF",
      ev = "logoImage-xP9zW4",
      ey = "account-idV4Pk",
      ew = "accountName-Lx5SGs",
      eA = "installAction-OiHlVg",
      eM = "notice-_A8r3U",
      ek = "continueButton-AAWyw8",
      eN = "collapsedApps-oNJ8cV",
      e_ = "appIcons-Fx59PP",
      eD = "iconButton-LuTQxP",
      eI = "overflowIcon-ZQPt_7",
      eG = "manageAction-_ynJFw",
      eS = "permissionPopover-sRseJn",
      eV = "permissionOption-qHjgUq",
      eL = "optionCopy-JR6ebU",
      eT = "optionHeading-wRGKBM",
      eP = "defaultBadge-fmhIMI",
      eq = "optionText-lZ7hy0",
      eU = "selectionIndicator-kPwckP"
    function eW(e, t) {
      let s = e.accounts.find(({ id: e }) => e === t)
      return e.capabilities.filter((e) => s?.capabilities?.includes(e) ?? !0)
    }
    function eR(e) {
      let t,
        s,
        a,
        o,
        l,
        g,
        m,
        x,
        b,
        j,
        A,
        k,
        N,
        _,
        D,
        I,
        G,
        S,
        V,
        T,
        P,
        q,
        U,
        W,
        R,
        E,
        H,
        B,
        ev,
        ew,
        eI,
        eR,
        e1,
        e0,
        e2,
        e5 = (0, n.c)(137),
        {
          Layout: e3,
          portalClassName: e4,
          footer: e6,
          appName: e9,
          workspaceName: e8,
          logoUri: e7,
          identityOnly: te,
          identityScopes: tt,
          submissionFailed: ts,
          requestId: ti,
          connectors: tn,
          choices: ta,
          status: to,
          hasSavedApproval: tr,
          changesSavedApproval: tl,
          defaultExpanded: tc,
          allowPartialAccess: td,
          onChange: tp,
          onRefresh: tu,
          onContinue: th,
        } = e,
        tf = void 0 !== te && te
      e5[0] !== tt ? ((t = void 0 === tt ? [] : tt), (e5[0] = tt), (e5[1] = t)) : (t = e5[1])
      let tg = t,
        tm = void 0 !== tr && tr,
        tx = void 0 !== tl && tl,
        tC = void 0 === td || td,
        tb = (0, u.A)()
      e5[2] !== ti
        ? ((s = ti
            ? (0, i.jsx)(z, {
                size: "xsmall",
                color: "secondary",
                className: em,
                children: (0, i.jsx)(h.A, { ...f.VD.requestId, values: { requestId: ti } }),
              })
            : null),
          (e5[2] = ti),
          (e5[3] = s))
        : (s = e5[3])
      let tj = s,
        tv = (0, r.useId)(),
        ty = (0, r.useRef)(!1),
        tw = (0, r.useRef)(!1),
        tA = (0, r.useRef)(null),
        tM = (0, r.useRef)(null),
        [tk, tN] = (0, r.useState)(void 0 !== tc && tc),
        t_ = tk || 1 === tn.length,
        tD = tn.filter(eX),
        tI = tn.filter(eJ),
        tG = tn.filter(eQ),
        tS = tD.slice(0, tD.length >= 6 ? 4 : 5),
        tV = tD.slice(4, 8)
      ;(e5[4] !== tn.length
        ? ((a = () => {
            1 === tn.length && tN(!0)
          }),
          (o = [tn.length]),
          (e5[4] = tn.length),
          (e5[5] = a),
          (e5[6] = o))
        : ((a = e5[5]), (o = e5[6])),
        (0, r.useEffect)(a, o))
      let tL = (0, r.useRef)(null),
        tT = (e) => {
          ;(tN(!0),
            requestAnimationFrame(() => {
              let t = tL.current,
                s = e
                  ? t?.ownerDocument.getElementById(`${tv}-${e}-row`)
                  : t?.querySelector("section[aria-labelledby]"),
                i = s?.querySelector('button[aria-haspopup="listbox"]:not(:disabled), a[href]')
              ;(i ?? s ?? t)?.focus()
            }))
        },
        [tP, tq] = (0, r.useState)(!1),
        tU = tP || "submitting" === to,
        tW = "loading" === to || "invalid" === to || tU,
        tR = "ready" === to && !tU
      ;(e5[7] !== tn || e5[8] !== tv || e5[9] !== tR
        ? ((l = () => {
            let e = tA.current
            if (!e || e.link.isConnected) return
            tA.current = null
            let t = e.link.ownerDocument
            if (!tR || t.activeElement !== t.body || !tn.some((t) => t.id === e.connectorId && "connected" === t.state))
              return
            let s = t.getElementById(`${tv}-${e.connectorId}-row`),
              i =
                t.getElementById(`${tv}-${e.connectorId}-manage`) ??
                s?.querySelector('button[aria-haspopup="listbox"]:not(:disabled), a[href]') ??
                s ??
                t.getElementById(`${tv}-more-apps`)
            i?.focus()
          }),
          (g = [tn, tR, tv]),
          (e5[7] = tn),
          (e5[8] = tv),
          (e5[9] = tR),
          (e5[10] = l),
          (e5[11] = g))
        : ((l = e5[10]), (g = e5[11])),
        (0, r.useEffect)(l, g),
        e5[12] !== tW || e5[13] !== tu
          ? ((m = () => {
              let e = () => {
                "visible" !== document.visibilityState || !tw.current || tW || ty.current || ((tw.current = !1), tu())
              }
              return (
                window.addEventListener("focus", e),
                document.addEventListener("visibilitychange", e),
                () => {
                  ;(window.removeEventListener("focus", e), document.removeEventListener("visibilitychange", e))
                }
              )
            }),
            (x = [tW, tu]),
            (e5[12] = tW),
            (e5[13] = tu),
            (e5[14] = m),
            (e5[15] = x))
          : ((m = e5[14]), (x = e5[15])),
        (0, r.useEffect)(m, x))
      let tO = "ready" === to || "submitting" === to
      e5[16] !== ta
        ? ((b = (e) => "connected" === e.state && e.accounts.some((t) => t.id === ta[e.id]?.accountId)),
          (e5[16] = ta),
          (e5[17] = b))
        : (b = e5[17])
      let tE = tn.filter(b),
        tH = tO ? tE.filter((e) => eW(e, ta[e.id]?.accountId).some((t) => ta[e.id]?.capabilities.includes(t))) : []
      e5[18] !== ta
        ? ((j = (e) => {
            let t = ta[e.id]
            return t?.accountId === void 0
              ? []
              : [
                  [
                    e.id,
                    {
                      accountId: t.accountId,
                      capabilities: eW(e, t.accountId).filter((e) => t.capabilities.includes(e)),
                    },
                  ],
                ]
          }),
          (e5[18] = ta),
          (e5[19] = j))
        : (j = e5[19])
      let tz = Object.fromEntries(tH.flatMap(j))
      e5[20] !== tb ? ((A = tb.formatMessage(f.VD.chooseAccount)), (e5[20] = tb), (e5[21] = A)) : (A = e5[21])
      let tZ = A,
        tB = e8 || tb.formatMessage(f.VD.selectedWorkspace)
      e5[22] !== tZ || e5[23] !== tn || e5[24] !== tb
        ? ((k = tn.some(eK) ? tZ : tb.formatMessage(tn.some(e$) ? f.VD.installRequired : f.VD.unavailable)),
          (e5[22] = tZ),
          (e5[23] = tn),
          (e5[24] = tb),
          (e5[25] = k))
        : (k = e5[25])
      let tF = k,
        t$ = (e) => {
          !ty.current && tR && tp(e)
        },
        tK = (e, t) => {
          ;(ta[e]?.capabilities.length && 0 === t.capabilities.length && (tM.current = ta), t$({ ...ta, [e]: t }))
        }
      e5[26] !== tW || e5[27] !== th
        ? ((N = (e) => {
            ty.current || tW || ((ty.current = !0), tq(!0), th(e))
          }),
          (e5[26] = tW),
          (e5[27] = th),
          (e5[28] = N))
        : (N = e5[28])
      let tQ = N
      ;(e5[29] !== to
        ? ((_ =
            "loading" === to &&
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(C, { size: 16, "aria-hidden": "true" }),
                (0, i.jsx)(z, {
                  size: "small",
                  color: "secondary",
                  children: (0, i.jsx)(h.A, { ...f.VD.preparingSignIn }),
                }),
              ],
            })),
          (e5[29] = to),
          (e5[30] = _))
        : (_ = e5[30]),
        e5[31] !== _
          ? ((D = (0, i.jsx)("div", { role: "status", "aria-live": "polite", className: eh, children: _ })),
            (e5[31] = _),
            (e5[32] = D))
          : (D = e5[32]))
      let tJ = D
      if (tf || "loading" === to || "invalid" === to) {
        let e,
          t,
          s,
          n,
          a,
          o,
          r,
          l,
          c,
          d,
          p,
          u = tf && ((void 0 !== ts && ts) || "failed" === to)
        return (
          e5[33] !== e9 || e5[34] !== tb
            ? ((e = tb.formatMessage(f.VD.signInTitle, { originatorDisplayName: e9 })),
              (e5[33] = e9),
              (e5[34] = tb),
              (e5[35] = e))
            : (e = e5[35]),
          e5[36] !== e9 || e5[37] !== e7
            ? ((t = (0, i.jsx)(O, { appDisplayName: e9, logoUri: e7, fallbackLogoUri: M })),
              (e5[36] = e9),
              (e5[37] = e7),
              (e5[38] = t))
            : (t = e5[38]),
          e5[39] !== tf || e5[40] !== tg
            ? ((s = tf && tg.map(eF)), (e5[39] = tf), (e5[40] = tg), (e5[41] = s))
            : (s = e5[41]),
          e5[42] !== tj || e5[43] !== u || e5[44] !== to
            ? ((n =
                "invalid" === to
                  ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(h.A, { ...f.VD.signInUnavailable }), tj] })
                  : u
                    ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(h.A, { ...f.VD.signInFailed }), tj] })
                    : null),
              (e5[42] = tj),
              (e5[43] = u),
              (e5[44] = to),
              (e5[45] = n))
            : (n = e5[45]),
          e5[46] !== n
            ? ((a = (0, i.jsx)(z, { role: "alert", size: "small", className: ef, children: n })),
              (e5[46] = n),
              (e5[47] = a))
            : (a = e5[47]),
          e5[48] !== tQ ? ((o = () => tQ({})), (e5[48] = tQ), (e5[49] = o)) : (o = e5[49]),
          e5[50] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, i.jsx)(h.A, { ...f.VD.continue })), (e5[50] = r))
            : (r = e5[50]),
          e5[51] !== tW || e5[52] !== tU || e5[53] !== o
            ? ((l = (0, i.jsx)(v, { variant: "primary", onClick: o, disabled: tW, isLoading: tU, children: r })),
              (e5[51] = tW),
              (e5[52] = tU),
              (e5[53] = o),
              (e5[54] = l))
            : (l = e5[54]),
          e5[55] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, i.jsx)(z, { size: "small", color: "secondary", children: (0, i.jsx)(h.A, { ...f.VD.trust }) })),
              (e5[55] = c))
            : (c = e5[55]),
          e5[56] !== tJ || e5[57] !== s || e5[58] !== a || e5[59] !== l
            ? ((d = (0, i.jsxs)("div", { className: J, children: [tJ, s, a, l, c] })),
              (e5[56] = tJ),
              (e5[57] = s),
              (e5[58] = a),
              (e5[59] = l),
              (e5[60] = d))
            : (d = e5[60]),
          e5[61] !== e3 || e5[62] !== e || e5[63] !== t || e5[64] !== d
            ? ((p = (0, i.jsx)(e3, {
                title: e,
                titleVariant: "authStep",
                showTopLeftChatGPTWordmark: !0,
                decoration: t,
                children: d,
              })),
              (e5[61] = e3),
              (e5[62] = e),
              (e5[63] = t),
              (e5[64] = d),
              (e5[65] = p))
            : (p = e5[65]),
          p
        )
      }
      ;(e5[66] !== e9 || e5[67] !== tb
        ? ((I = tb.formatMessage(f.VD.title, { appName: e9 })), (e5[66] = e9), (e5[67] = tb), (e5[68] = I))
        : (I = e5[68]),
        e5[69] !== e9 || e5[70] !== e7
          ? ((G = (0, i.jsx)(O, { className: Q, appDisplayName: e9, logoUri: e7, fallbackLogoUri: M, size: "large" })),
            (e5[69] = e9),
            (e5[70] = e7),
            (e5[71] = G))
          : (G = e5[71]),
        e5[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsx)("div", {
              className: ee,
              "aria-hidden": "true",
              children: (0, i.jsx)(w, { width: 20, height: 20 }),
            })),
            (e5[72] = S))
          : (S = e5[72]),
        e5[73] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, i.jsx)(h.A, { ...f.VD.allow })), (e5[73] = V))
          : (V = e5[73]),
        e5[74] !== tv
          ? ((T = (0, i.jsx)("div", {
              className: er,
              children: (0, i.jsx)(z, { id: tv, size: "base", weight: "semibold", className: ei, children: V }),
            })),
            (e5[74] = tv),
            (e5[75] = T))
          : (T = e5[75]))
      let tX =
        tD.length > 0 &&
        (0, i.jsx)(Z, {
          tooltipClassName: e4,
          "aria-labelledby": tv,
          checked: tH.length > 0,
          disabled: !tR || 0 === tE.length,
          "aria-describedby": tR && 0 === tE.length ? `${tv}-unavailable` : void 0,
          focusableWhenDisabled: tR && 0 === tE.length,
          onChange: (e) => {
            ;(e || (tM.current = ta),
              t$(
                Object.fromEntries(
                  [...new Set([...Object.keys(ta), ...tn.map(eB)])].map((t) => {
                    let s = tn.find((e) => {
                        let { id: s } = e
                        return s === t
                      }),
                      i = ta[t],
                      n = tM.current?.[t],
                      a = n?.capabilities ?? s?.capabilities ?? []
                    return [
                      t,
                      { ...i, capabilities: e ? (s ? eW(s, i?.accountId) : a).filter((e) => a.includes(e)) : [] },
                    ]
                  }),
                ),
              ),
              e && (tM.current = null))
          },
        })
      ;(e5[76] !== T || e5[77] !== tX
        ? ((P = (0, i.jsxs)("div", { className: et, children: [T, tX] })), (e5[76] = T), (e5[77] = tX), (e5[78] = P))
        : (P = e5[78]),
        e5[79] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, i.jsx)(z, {
              color: "secondary",
              className: en,
              children: (0, i.jsx)(h.A, { ...f.VD.connectedAppsDescription }),
            })),
            (e5[79] = q))
          : (q = e5[79]))
      let tY =
          tR &&
          tD.length > 0 &&
          0 === tE.length &&
          (0, i.jsx)(z, { id: `${tv}-unavailable`, size: "small", color: "secondary", className: eu, children: tF }),
        t1 =
          "failed" !== to &&
          tD.length > 0 &&
          (0, i.jsx)(z, {
            size: "small",
            color: "secondary",
            className: ed,
            children: (0, i.jsx)(h.A, { ...f.VD.installed }),
          }),
        t0 =
          "failed" !== to &&
          tD.length > 0 &&
          !t_ &&
          (0, i.jsxs)("div", {
            className: eN,
            children: [
              (0, i.jsxs)("div", {
                className: e_,
                children: [
                  tS.map((e) =>
                    (0, i.jsx)(
                      "button",
                      {
                        id: `${tv}-${e.id}-manage`,
                        type: "button",
                        className: eD,
                        title: e.name,
                        "aria-label": tb.formatMessage(f.VD.manageApp, { connectorName: e.name }),
                        "aria-expanded": !1,
                        "aria-controls": `${tv}-apps`,
                        onClick: () => tT(e.id),
                        children: (0, i.jsx)("span", {
                          className: eb,
                          "aria-hidden": "true",
                          children: (0, i.jsx)(eY, { connector: e }),
                        }),
                      },
                      e.id,
                    ),
                  ),
                  tD.length >= 6 &&
                    (0, i.jsx)("button", {
                      id: `${tv}-more-apps`,
                      type: "button",
                      className: eD,
                      "aria-label": tb.formatMessage(f.VD.manageMoreApps, { count: tD.length - 4 }),
                      title: tb.formatMessage(f.VD.manageMoreApps, { count: tD.length - 4 }),
                      "aria-expanded": !1,
                      "aria-controls": `${tv}-apps`,
                      onClick: () => tT(tV[0]?.id),
                      children: (0, i.jsx)("span", { className: ej, "aria-hidden": "true", children: tV.map(eZ) }),
                    }),
                ],
              }),
              (0, i.jsx)(v, {
                variant: "outline",
                className: eG,
                "aria-expanded": !1,
                "aria-controls": `${tv}-apps`,
                onClick: () => tT(),
                children: (0, i.jsx)(h.A, { ...f.VD.manage }),
              }),
            ],
          }),
        t2 = `${tv}-apps`,
        t5 =
          "failed" !== to &&
          [...(t_ ? tD : []), ...tI, ...tG].flatMap((e) => {
            let t = `${tv}-${e.id}`,
              s = ta[e.id],
              n = tE.includes(e),
              a = e.accounts.find((e) => {
                let { id: t } = e
                return t === s?.accountId
              }),
              o = eW(e, s?.accountId),
              r = tC && a?.allowPartialAccess !== !1,
              l = tO && n ? o.filter((e) => s?.capabilities.includes(e)) : [],
              u = l.includes("write")
                ? l.includes("read")
                  ? "read_write"
                  : "write"
                : l.includes("read")
                  ? "read"
                  : "off",
              g = [
                ...(o.includes("read") && (r || !o.includes("write"))
                  ? [{ id: "read", typeaheadValue: tb.formatMessage(f.VD.readAccess), capabilities: ["read"] }]
                  : []),
                ...(o.includes("write")
                  ? [
                      {
                        id: o.includes("read") ? "read_write" : "write",
                        typeaheadValue: tb.formatMessage(o.includes("read") ? f.VD.readWriteAccess : f.VD.writeAccess),
                        capabilities: o,
                      },
                    ]
                  : []),
                ...(r && "write" === u && o.includes("read")
                  ? [{ id: "write", typeaheadValue: tb.formatMessage(f.VD.writeAccess), capabilities: ["write"] }]
                  : []),
                { id: "off", typeaheadValue: tb.formatMessage(f.VD.offAccess), capabilities: [] },
              ],
              m = "blocked" === e.state || "unavailable" === e.state,
              x = tD.length > 0 && e === tI[0] ? f.VD.recommended : e === tG[0] ? f.VD.unavailableApps : null
            return [
              x &&
                (0, i.jsx)(
                  z,
                  { size: "small", color: "secondary", className: ep, children: (0, i.jsx)(h.A, { ...x }) },
                  x.id,
                ),
              (0, i.jsxs)(
                "section",
                {
                  id: `${t}-row`,
                  className: eC,
                  "aria-labelledby": t,
                  "aria-describedby": n ? void 0 : `${t}-description`,
                  tabIndex: m || ("connected" === e.state && !n) ? 0 : -1,
                  children: [
                    (0, i.jsx)("div", {
                      className: eb,
                      "aria-hidden": "true",
                      children: (0, i.jsx)(eY, { connector: e }),
                    }),
                    (0, i.jsx)("div", {
                      className: Y,
                      children: (0, i.jsxs)("div", {
                        className: es,
                        children: [
                          (0, i.jsxs)("div", {
                            className: el,
                            children: [
                              (0, i.jsx)(z, { id: t, size: "small", weight: "semibold", children: e.name }),
                              (0, i.jsx)(z, {
                                id: `${t}-description`,
                                color: "secondary",
                                className: "connected" === e.state && a ? eo : ea,
                                title: a?.name,
                                children:
                                  "connected" === e.state && a
                                    ? a.name
                                    : (0, i.jsx)(h.A, {
                                        ...(m || ("connected" === e.state && 0 === e.accounts.length)
                                          ? f.VD.unavailable
                                          : "connected" === e.state
                                            ? f.VD.chooseAccount
                                            : e.capabilities.includes("write")
                                              ? f.VD.readWrite
                                              : f.VD.read),
                                        values: { connectorName: e.name },
                                      }),
                              }),
                            ],
                          }),
                          "connectable" === e.state && e.installUrl
                            ? (0, i.jsx)(v, {
                                as: "a",
                                variant: "outline",
                                className: eA,
                                focusableDisabled: !tR,
                                title: tb.formatMessage(f.VD.installLink, { connectorName: e.name, workspaceName: tB }),
                                onClick: () => {
                                  tw.current = !0
                                },
                                onFocus: (t) => {
                                  tA.current = { connectorId: e.id, link: t.currentTarget }
                                },
                                onBlur: () => {
                                  tA.current = null
                                },
                                "aria-label": tb.formatMessage(f.VD.installLink, {
                                  connectorName: e.name,
                                  workspaceName: tB,
                                }),
                                "data-login-web-auth-control": void 0,
                                href: e.installUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, i.jsx)(z, {
                                  size: "xsmall",
                                  children: (0, i.jsx)(h.A, { ...f.VD.install }),
                                }),
                              })
                            : (0, i.jsx)(L, {
                                label: tb.formatMessage(f.VD.access, { connectorName: e.name }),
                                variant: "compact",
                                selectedKey: u,
                                placeholder: tb.formatMessage(f.VD.offAccess),
                                isDisabled: !tR || !n,
                                "aria-describedby": n ? void 0 : `${t}-description`,
                                options: g,
                                popoverClassName: c()(eS, e4),
                                onSelectionChange: (t) => {
                                  let i = g.find((e) => e.id === t)
                                  i && tK(e.id, { ...s, capabilities: i.capabilities })
                                },
                                renderSelectedItem: ez,
                                renderListBoxItem: (t) =>
                                  (0, i.jsxs)("div", {
                                    className: eV,
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className: eL,
                                        children: [
                                          (0, i.jsxs)("div", {
                                            className: eT,
                                            children: [
                                              (0, i.jsx)(p.E, {
                                                slot: "label",
                                                className: eq,
                                                children: (0, i.jsx)(z, {
                                                  size: "small",
                                                  weight: "medium",
                                                  children: t.typeaheadValue,
                                                }),
                                              }),
                                              t.capabilities.length === e.capabilities.length &&
                                                e.capabilities.every((e) => t.capabilities.includes(e)) &&
                                                (0, i.jsx)(z, {
                                                  size: "xsmall",
                                                  weight: "medium",
                                                  color: "secondary",
                                                  className: eP,
                                                  children: (0, i.jsx)(h.A, { ...f.VD.defaultAccess }),
                                                }),
                                            ],
                                          }),
                                          (0, i.jsx)(p.E, {
                                            slot: "description",
                                            className: eq,
                                            children: (0, i.jsxs)(z, {
                                              size: "xsmall",
                                              color: "secondary",
                                              children: [
                                                t.capabilities.length === e.capabilities.length &&
                                                  e.capabilities.every((e) => t.capabilities.includes(e)) &&
                                                  (0, i.jsx)(d.s, {
                                                    children: (0, i.jsx)(h.A, { ...f.VD.defaultAccessDescription }),
                                                  }),
                                                (0, i.jsx)(h.A, {
                                                  ...("off" === t.id
                                                    ? f.VD.offAccessDescription
                                                    : "read" === t.id
                                                      ? f.VD.readAccessDescription
                                                      : "write" === t.id
                                                        ? f.VD.writeAccessDescription
                                                        : f.VD.readWriteAccessDescription),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, i.jsx)("span", {
                                        className: eU,
                                        "aria-hidden": "true",
                                        children: t.id === u && (0, i.jsx)(y, { width: 16, height: 16 }),
                                      }),
                                    ],
                                  }),
                              }),
                        ],
                      }),
                    }),
                    "connected" === e.state &&
                      e.accounts.length > 1 &&
                      (0, i.jsx)("div", {
                        className: ey,
                        children: (0, i.jsx)(L, {
                          popoverClassName: e4,
                          variant: "compact",
                          label: tb.formatMessage(f.VD.account, { connectorName: e.name }),
                          placeholder: tZ,
                          options: e.accounts.map(eH),
                          selectedKey: n ? s?.accountId : null,
                          isDisabled: !tR,
                          onSelectionChange: (t) =>
                            tK(e.id, {
                              accountId: null === t ? void 0 : String(t),
                              capabilities:
                                null === t
                                  ? []
                                  : eW(e, String(t)).filter((t) => (s?.capabilities ?? e.capabilities).includes(t)),
                            }),
                          renderSelectedItem: eE,
                          renderListBoxItem: eO,
                        }),
                      }),
                  ],
                },
                e.id,
              ),
            ]
          })
      ;(e5[80] !== tL || e5[81] !== t2 || e5[82] !== ec || e5[83] !== t5
        ? ((U = (0, i.jsx)("div", { id: t2, ref: tL, tabIndex: -1, className: ec, children: t5 })),
          (e5[80] = tL),
          (e5[81] = t2),
          (e5[82] = ec),
          (e5[83] = t5),
          (e5[84] = U))
        : (U = e5[84]),
        e5[85] !== Y || e5[86] !== P || e5[87] !== q || e5[88] !== tY || e5[89] !== t1 || e5[90] !== t0 || e5[91] !== U
          ? ((W = (0, i.jsxs)("div", { className: Y, children: [P, q, tY, t1, t0, U] })),
            (e5[85] = Y),
            (e5[86] = P),
            (e5[87] = q),
            (e5[88] = tY),
            (e5[89] = t1),
            (e5[90] = t0),
            (e5[91] = U),
            (e5[92] = W))
          : (W = e5[92]),
        e5[93] !== tj || e5[94] !== to
          ? ((R =
              "failed" === to &&
              (0, i.jsxs)(z, { size: "small", className: ex, children: [(0, i.jsx)(h.A, { ...f.VD.failed }), tj] })),
            (e5[93] = tj),
            (e5[94] = to),
            (e5[95] = R))
          : (R = e5[95]),
        e5[96] !== R
          ? ((E = (0, i.jsx)("div", { role: "alert", className: eg, children: R })), (e5[96] = R), (e5[97] = E))
          : (E = e5[97]),
        e5[98] !== tv || e5[99] !== X || e5[100] !== S || e5[101] !== W || e5[102] !== E
          ? ((H = (0, i.jsxs)("section", { className: X, "aria-labelledby": tv, children: [S, W, E] })),
            (e5[98] = tv),
            (e5[99] = X),
            (e5[100] = S),
            (e5[101] = W),
            (e5[102] = E),
            (e5[103] = H))
          : (H = e5[103]),
        e5[104] !== tQ || e5[105] !== tz
          ? ((B = () => tQ(tz)), (e5[104] = tQ), (e5[105] = tz), (e5[106] = B))
          : (B = e5[106]))
      let t3 = tO && tE.length > 0 && 0 === tH.length ? f.VD.without : f.VD.continue
      return (
        e5[107] !== t3 ? ((ev = (0, i.jsx)(h.A, { ...t3 })), (e5[107] = t3), (e5[108] = ev)) : (ev = e5[108]),
        e5[109] !== tW || e5[110] !== tU || e5[111] !== B || e5[112] !== ev
          ? ((ew = (0, i.jsx)(v, {
              variant: "primary",
              className: ek,
              onClick: B,
              disabled: tW,
              isLoading: tU,
              children: ev,
            })),
            (e5[109] = tW),
            (e5[110] = tU),
            (e5[111] = B),
            (e5[112] = ev),
            (e5[113] = ew))
          : (ew = e5[113]),
        e5[114] !== tH || e5[115] !== tm
          ? ((eI =
              tm &&
              0 === tH.length &&
              (0, i.jsx)(z, { size: "small", color: "secondary", children: (0, i.jsx)(h.A, { ...f.VD.sessionOnly }) })),
            (e5[114] = tH),
            (e5[115] = tm),
            (e5[116] = eI))
          : (eI = e5[116]),
        e5[117] !== tH || e5[118] !== tx
          ? ((eR =
              tx &&
              tH.length > 0 &&
              (0, i.jsx)(z, {
                size: "small",
                color: "secondary",
                children: (0, i.jsx)(h.A, { ...f.VD.sharedApproval }),
              })),
            (e5[117] = tH),
            (e5[118] = tx),
            (e5[119] = eR))
          : (eR = e5[119]),
        e5[120] === Symbol.for("react.memo_cache_sentinel")
          ? ((e1 = (0, i.jsx)(z, {
              size: "small",
              color: "secondary",
              className: eM,
              children: (0, i.jsx)(h.A, { ...f.VD.trust }),
            })),
            (e5[120] = e1))
          : (e1 = e5[120]),
        e5[121] !== tJ || e5[122] !== J || e5[123] !== H || e5[124] !== ew || e5[125] !== eI || e5[126] !== eR
          ? ((e0 = (0, i.jsxs)("div", { className: J, children: [tJ, H, ew, eI, eR, e1] })),
            (e5[121] = tJ),
            (e5[122] = J),
            (e5[123] = H),
            (e5[124] = ew),
            (e5[125] = eI),
            (e5[126] = eR),
            (e5[127] = e0))
          : (e0 = e5[127]),
        e5[128] !== e3 ||
        e5[129] !== e6 ||
        e5[130] !== I ||
        e5[131] !== F ||
        e5[132] !== $ ||
        e5[133] !== K ||
        e5[134] !== G ||
        e5[135] !== e0
          ? ((e2 = (0, i.jsx)(e3, {
              wide: !0,
              placement: "top",
              footerPlacement: "bottom",
              showTopLeftChatGPTWordmark: !0,
              title: I,
              titleVariant: "authStep",
              rootClassName: F,
              formContainerClassName: $,
              topLeftWordmarkClassName: K,
              footer: e6,
              decoration: G,
              children: e0,
            })),
            (e5[128] = e3),
            (e5[129] = e6),
            (e5[130] = I),
            (e5[131] = F),
            (e5[132] = $),
            (e5[133] = K),
            (e5[134] = G),
            (e5[135] = e0),
            (e5[136] = e2))
          : (e2 = e5[136]),
        e2
      )
    }
    function eO(e) {
      return (0, i.jsx)(z, { className: ew, size: "small", children: e.name })
    }
    function eE(e) {
      return (0, i.jsx)(z, { size: "xsmall", title: e.name, children: e.name })
    }
    function eH(e) {
      return { ...e, typeaheadValue: e.name }
    }
    function ez(e) {
      return e.typeaheadValue
    }
    function eZ(e) {
      return (0, i.jsx)("span", { className: eI, children: (0, i.jsx)(eY, { connector: e }) }, e.id)
    }
    function eB(e) {
      let { id: t } = e
      return t
    }
    function eF(e) {
      return (0, i.jsx)(z, { color: "secondary", children: (0, i.jsx)(h.A, { ...f.az[e] }) }, e)
    }
    function e$(e) {
      return "connectable" === e.state
    }
    function eK(e) {
      return "connected" === e.state && e.accounts.length > 0
    }
    function eQ(e) {
      return "blocked" === e.state || "unavailable" === e.state
    }
    function eJ(e) {
      return "connectable" === e.state
    }
    function eX(e) {
      return "connected" === e.state
    }
    function eY(e) {
      let t,
        s,
        a = (0, n.c)(6),
        { connector: o } = e
      return (
        a[0] !== o.logoUrl || a[1] !== o.logoUrlDark
          ? ((t = JSON.stringify([o.logoUrl || o.logoUrlDark || null, o.logoUrlDark || null])),
            (a[0] = o.logoUrl),
            (a[1] = o.logoUrlDark),
            (a[2] = t))
          : (t = a[2]),
        a[3] !== o || a[4] !== t
          ? ((s = (0, i.jsx)(e1, { connector: o }, t)), (a[3] = o), (a[4] = t), (a[5] = s))
          : (s = a[5]),
        s
      )
    }
    function e1(e) {
      let t,
        s,
        a,
        o,
        l = (0, n.c)(12),
        { connector: c } = e,
        { name: d, logoUrl: p, logoUrlDark: u } = c,
        [h, f] = (0, r.useState)(!1),
        g = p || u
      if (!g || h) {
        let e, t
        return (
          l[0] !== d ? ((e = d.charAt(0)), (l[0] = d), (l[1] = e)) : (e = l[1]),
          l[2] !== e ? ((t = (0, i.jsx)(z, { weight: "medium", children: e })), (l[2] = e), (l[3] = t)) : (t = l[3]),
          t
        )
      }
      return (
        l[4] !== u
          ? ((t = u && (0, i.jsx)("source", { media: "(prefers-color-scheme: dark)", srcSet: u })),
            (l[4] = u),
            (l[5] = t))
          : (t = l[5]),
        l[6] === Symbol.for("react.memo_cache_sentinel") ? ((s = () => f(!0)), (l[6] = s)) : (s = l[6]),
        l[7] !== g
          ? ((a = (0, i.jsx)("img", {
              src: g,
              alt: "",
              width: 34,
              height: 34,
              className: ev,
              referrerPolicy: "no-referrer",
              onError: s,
            })),
            (l[7] = g),
            (l[8] = a))
          : (a = l[8]),
        l[9] !== t || l[10] !== a
          ? ((o = (0, i.jsxs)("picture", { children: [t, a] })), (l[9] = t), (l[10] = a), (l[11] = o))
          : (o = l[11]),
        o
      )
    }
    var e0 = s("on57"),
      e2 = s("ASxG")
    function e5(e) {
      let t,
        s,
        a,
        o,
        r,
        l,
        c = (0, n.c)(17),
        { compact: d, openLinksInNewTab: p } = e,
        u = void 0 !== d && d,
        f = void 0 !== p && p,
        g = u ? "compactLegalFooter-jyblyd" : void 0,
        m = f ? "_blank" : void 0,
        x = f ? "noopener noreferrer" : void 0
      ;(c[0] !== u
        ? ((t = u
            ? (0, i.jsx)(h.A, {
                id: "authlayout.termsSentenceCase",
                defaultMessage: "Terms of use",
                description: "Link to the OpenAI terms of use in the compact legal footer",
              })
            : (0, i.jsx)(h.A, {
                id: "authlayout.terms",
                defaultMessage: "Terms of Use",
                description: "Link to the OpenAI terms of use",
              })),
          (c[0] = u),
          (c[1] = t))
        : (t = c[1]),
        c[2] !== m || c[3] !== x || c[4] !== t
          ? ((s = (0, i.jsx)("a", {
              href: "https://openai.com/policies/terms-of-use",
              target: m,
              rel: x,
              children: t,
            })),
            (c[2] = m),
            (c[3] = x),
            (c[4] = t),
            (c[5] = s))
          : (s = c[5]),
        c[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(z, { color: "secondary", className: "separator-Kt_qSj" })), (c[6] = a))
          : (a = c[6]))
      let C = f ? "_blank" : void 0,
        b = f ? "noopener noreferrer" : void 0
      return (
        c[7] !== u
          ? ((o = u
              ? (0, i.jsx)(h.A, {
                  id: "authlayout.privacySentenceCase",
                  defaultMessage: "Privacy policy",
                  description: "Link to the OpenAI privacy policy in the compact legal footer",
                })
              : (0, i.jsx)(h.A, {
                  id: "authlayout.privacy",
                  defaultMessage: "Privacy Policy",
                  description: "Link to the OpenAI privacy policy",
                })),
            (c[7] = u),
            (c[8] = o))
          : (o = c[8]),
        c[9] !== b || c[10] !== o || c[11] !== C
          ? ((r = (0, i.jsx)("a", {
              href: "https://openai.com/policies/privacy-policy",
              target: C,
              rel: b,
              children: o,
            })),
            (c[9] = b),
            (c[10] = o),
            (c[11] = C),
            (c[12] = r))
          : (r = c[12]),
        c[13] !== r || c[14] !== g || c[15] !== s
          ? ((l = (0, i.jsxs)(z, { color: "secondary", size: "small", className: g, children: [s, a, r] })),
            (c[13] = r),
            (c[14] = g),
            (c[15] = s),
            (c[16] = l))
          : (l = c[16]),
        l
      )
    }
    let e3 = (e) => {
      let t,
        s,
        a,
        o,
        r,
        l = (0, n.c)(11)
      l[0] !== e
        ? (({ className: t, variant: a, ...s } = e), (l[0] = e), (l[1] = t), (l[2] = s), (l[3] = a))
        : ((t = l[1]), (s = l[2]), (a = l[3]))
      let d = "heading2" === a,
        p = "authStep" === a
      return (
        l[4] !== t || l[5] !== d || l[6] !== p
          ? ((o = c()("root-pQpgzt", { "heading2-lO0qxS": d, "authStep-iRriBU": p }, t)),
            (l[4] = t),
            (l[5] = d),
            (l[6] = p),
            (l[7] = o))
          : (o = l[7]),
        l[8] !== s || l[9] !== o
          ? ((r = (0, i.jsx)("span", { className: o, ...s })), (l[8] = s), (l[9] = o), (l[10] = r))
          : (r = l[10]),
        r
      )
    }
    var e4 = s("CJ0b"),
      e6 = "theme-AAwAwR"
    let e9 = (e) => {
      let t,
        s,
        a,
        o,
        r,
        l = (0, n.c)(14),
        { title: c, titleVariant: d, decoration: p, children: u, footer: h } = e
      return (
        l[0] !== c || l[1] !== d
          ? ((t = (0, i.jsx)("h1", {
              className: "heading-ujYSSB",
              children: (0, i.jsx)(e3, { variant: d, children: c }),
            })),
            (l[0] = c),
            (l[1] = d),
            (l[2] = t))
          : (t = l[2]),
        l[3] !== p || l[4] !== t
          ? ((s = (0, i.jsxs)("div", { className: "titleBlock-DNNetb", children: [p, t] })),
            (l[3] = p),
            (l[4] = t),
            (l[5] = s))
          : (s = l[5]),
        l[6] !== h
          ? ((a = h ?? (0, i.jsx)(e5, { compact: !0, openLinksInNewTab: !0 })), (l[6] = h), (l[7] = a))
          : (a = l[7]),
        l[8] !== a
          ? ((o = (0, i.jsx)("div", { className: "footer-S6wKYo", children: a })), (l[8] = a), (l[9] = o))
          : (o = l[9]),
        l[10] !== u || l[11] !== s || l[12] !== o
          ? ((r = (0, i.jsx)(e4.n1, {
              restoreFocus: !0,
              children: (0, i.jsx)("section", {
                className: "layout-yItU_1",
                children: (0, i.jsxs)("div", { className: "form-mI7b5d", children: [s, u, o] }),
              }),
            })),
            (l[10] = u),
            (l[11] = s),
            (l[12] = o),
            (l[13] = r))
          : (r = l[13]),
        r
      )
    }
    function e8(e) {
      let t,
        s,
        a,
        l,
        c,
        d,
        p,
        h,
        f,
        g,
        m,
        x,
        C = (0, n.c)(46),
        { prompt: b } = e,
        j = (0, u.A)()
      C[0] !== b.details ? ((t = () => ta(b.details)), (C[0] = b.details), (C[1] = t)) : (t = C[1])
      let [v, y] = (0, r.useState)(t)
      C[2] !== v.consent ? ((s = () => o(v.consent)), (C[2] = v.consent), (C[3] = s)) : (s = C[3])
      let [w, A] = (0, r.useState)(s),
        [M, k] = (0, r.useState)("ready"),
        [N, _] = (0, r.useState)(0),
        [D, I] = (0, r.useState)(!1),
        [G, S] = (0, r.useState)(!1),
        V = (0, r.useRef)(!1),
        L = (0, r.useRef)(!1),
        T = v.consent
      C[4] !== j || C[5] !== T.client_name
        ? ((a =
            T.client_name ??
            j.formatMessage({
              id: "sites.connectorConsent.site",
              defaultMessage: "Site",
              description: "Fallback name for a Site in connector consent.",
            })),
          (C[4] = j),
          (C[5] = T.client_name),
          (C[6] = a))
        : (a = C[6])
      let P = a
      C[7] !== v.consent_context || C[8] !== G || C[9] !== b
        ? ((l = async (e, t) => {
            let s = void 0 === t ? G : t
            if (!b.signal.aborted && !V.current) {
              ;((V.current = !0), k("loading"))
              try {
                let t = await b.submit({ consent_context: v.consent_context, ...(s ? { selections: [] } : {}) })
                if (((V.current = !1), b.signal.aborted)) return
                if ("issued" === t.status) return void b.complete(t.id_token)
                if ("consent_required" !== t.status) {
                  ;((L.current = !0), k("failed"), _(tn))
                  return
                }
                L.current = !1
                let i = ta(t.connector_consent)
                ;(y(i), A((e) => o(i.consent, e)), I(void 0 !== e && e), k("ready"))
              } catch {
                ;((V.current = !1), (L.current = !0), b.signal.aborted || k("failed"))
              }
              _(ti)
            }
          }),
          (C[7] = v.consent_context),
          (C[8] = G),
          (C[9] = b),
          (C[10] = l))
        : (l = C[10])
      let q = l
      C[11] !== v.consent_context || C[12] !== G || C[13] !== b || C[14] !== q
        ? ((c = async (e) => {
            if (b.signal.aborted || V.current) return
            let t = G || 0 === Object.keys(e).length
            if ((t && S(!0), L.current)) return void (await q(!0, t))
            ;((V.current = !0), I(!1), k("submitting"))
            try {
              let s = await b.submit({
                consent_context: v.consent_context,
                selections: t ? [] : Object.entries(e).map(ts),
              })
              if (((V.current = !1), b.signal.aborted)) return
              "issued" === s.status ? b.complete(s.id_token) : await q(!0, t)
            } catch {
              ;((V.current = !1), await q(!0, t))
            }
          }),
          (C[11] = v.consent_context),
          (C[12] = G),
          (C[13] = b),
          (C[14] = q),
          (C[15] = c))
        : (c = C[15])
      let U = c
      C[16] !== w || C[17] !== T.connectors || C[18] !== T.has_unavailable_saved_choices
        ? ((d =
            T.has_unavailable_saved_choices ||
            T.connectors.some((e) => {
              let t = w[e.connector_id],
                s = e.accounts.find(tt)
              return (
                t?.accountId !== s?.link_id ||
                t?.capabilities.some((e) => !s?.selected_capabilities?.includes(e)) ||
                s?.selected_capabilities?.some((e) => !t?.capabilities.includes(e))
              )
            })),
          (C[16] = w),
          (C[17] = T.connectors),
          (C[18] = T.has_unavailable_saved_choices),
          (C[19] = d))
        : (d = C[19])
      let W = d
      C[20] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, e0.A)("h-full", e6)), (C[20] = p)) : (p = C[20])
      let R = T.workspace_name ?? void 0,
        O = T.client_logo_uri ?? void 0,
        E = D || "failed" === M,
        H = T.has_saved_approval && W
      return (
        C[21] !== G || C[22] !== T.connectors
          ? ((h = G ? [] : T.connectors.map(e7)), (C[21] = G), (C[22] = T.connectors), (C[23] = h))
          : (h = C[23]),
        C[24] !== q ? ((f = () => void q()), (C[24] = q), (C[25] = f)) : (f = C[25]),
        C[26] !== U ? ((g = (e) => void U(e)), (C[26] = U), (C[27] = g)) : (g = C[27]),
        C[28] !== P ||
        C[29] !== N ||
        C[30] !== w ||
        C[31] !== G ||
        C[32] !== T.has_saved_approval ||
        C[33] !== T.identity_scopes ||
        C[34] !== M ||
        C[35] !== E ||
        C[36] !== H ||
        C[37] !== h ||
        C[38] !== f ||
        C[39] !== g ||
        C[40] !== R ||
        C[41] !== O
          ? ((m = (0, i.jsx)(
              eR,
              {
                Layout: e9,
                portalClassName: e6,
                appName: P,
                workspaceName: R,
                logoUri: O,
                identityOnly: G,
                identityScopes: T.identity_scopes,
                submissionFailed: E,
                status: M,
                hasSavedApproval: T.has_saved_approval,
                changesSavedApproval: H,
                connectors: h,
                choices: w,
                onChange: A,
                onRefresh: f,
                onContinue: g,
              },
              N,
            )),
            (C[28] = P),
            (C[29] = N),
            (C[30] = w),
            (C[31] = G),
            (C[32] = T.has_saved_approval),
            (C[33] = T.identity_scopes),
            (C[34] = M),
            (C[35] = E),
            (C[36] = H),
            (C[37] = h),
            (C[38] = f),
            (C[39] = g),
            (C[40] = R),
            (C[41] = O),
            (C[42] = m))
          : (m = C[42]),
        C[43] !== P || C[44] !== m
          ? ((x = (0, i.jsx)("div", { className: p, role: "dialog", "aria-label": P, children: m })),
            (C[43] = P),
            (C[44] = m),
            (C[45] = x))
          : (x = C[45]),
        x
      )
    }
    function e7(e) {
      return {
        id: e.connector_id,
        name: e.name ?? e.connector_id,
        logoUrl: e.logo_url,
        logoUrlDark: e.logo_url_dark,
        state: e.state,
        capabilities: e.capabilities,
        accounts: e.accounts.map(te),
        installUrl: new URL(`/plugins/${encodeURIComponent(e.plugin_id)}`, window.location.origin).href,
      }
    }
    function te(e) {
      return { id: e.link_id, name: e.name, capabilities: e.capabilities, allowPartialAccess: a(e) }
    }
    function tt(e) {
      return (e.selected_capabilities?.length ?? 0) > 0
    }
    function ts(e) {
      let [t, s] = e
      return { connector_id: t, link_id: s.accountId, capabilities: s.capabilities }
    }
    function ti(e) {
      return e + 1
    }
    function tn(e) {
      return e + 1
    }
    function ta(e) {
      return {
        ...e,
        consent: {
          ...e.consent,
          identity_scopes: e2.array(e2.enum(["openid", "profile", "email"])).parse(e.consent.identity_scopes ?? []),
          connectors: e.consent.connectors.map((e) => ({
            ...e,
            state: e2.enum(["connected", "connectable", "blocked", "unavailable"]).parse(e.state),
            capabilities: e2.array(e2.enum(["read", "write"])).parse(e.capabilities),
            accounts: e.accounts.map((e) => ({
              ...e,
              capabilities: e.capabilities ?? void 0,
              actions: e.actions ?? void 0,
            })),
          })),
        },
      }
    }
  },
}
//# sourceMappingURL=53143.891eef371e.js.map
