export const __rspack_esm_ids = [819365]
export const __webpack_modules__ = {
  bxoL(e, t, a) {
    a.d(
      t,
      {},
      {
        w: function (e) {
          return {
            id: e.id,
            name: e.name,
            description: e.description,
            logoUrl: e.iconUrl,
            logoUrlDark: e.iconUrlDark,
            iconAssets: null,
            iconDarkAssets: null,
            distributionChannel: e.distributionChannel,
            branding: null,
            appMetadata: null,
            labels: null,
            installUrl: e.installUrl,
            isAccessible: !1,
            isEnabled: !0,
            pluginDisplayNames: e.pluginDisplayNames ?? [],
          }
        },
      },
    )
  },
  sZSa(e, t, a) {
    let i = a("ASxG").number().int().positive().catch(0x6400000)
    a.d(t, {}, { H: i })
  },
  wmRG(e, t, a) {
    a.d(t, { HostedPluginCreateDialog: () => V })
    var i = a("ABep"),
      n = a("QosV"),
      r = a("T0Rc"),
      s = a("xSOA"),
      o = a("on57"),
      l = a("zTeN"),
      c = a("DBCl"),
      d = a("zd8w"),
      u = a("SXgZ"),
      p = a("Wf1j"),
      h = a("oyxz"),
      g = a("yxN2"),
      m = a("OiCI"),
      f = a("bxoL"),
      x = a("Sm6l"),
      _ = a("JNtf"),
      v = a("mUDD"),
      b = a("bVeK"),
      C = a("zLIa"),
      y = a("ecE5"),
      M = a("BSnr"),
      j = a("ZEx5")
    a("kfGJ")
    var A = a("hZax"),
      w = a("ARVD"),
      P = a("rvFo"),
      k = a("d635"),
      S = a("ASxG"),
      D = a("eShZ")
    let O = S.object({
      detail: S.union([
        S.string().trim().min(1),
        S.object({ message: S.string().trim().min(1) }).transform(({ message: e }) => e),
      ]),
    })
    function R(e) {
      let t,
        a = (0, n.c)(8),
        { error: r } = e
      if (r instanceof D.fk) {
        if ("network" === r.errorKind) {
          let e
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.archiveNetworkError",
                  defaultMessage: "Couldn't upload the plugin. Check your internet connection and try again.",
                  description:
                    "Plugin archive upload failed because the client could not connect to the service. Ask the user to check their internet connection and retry.",
                })),
                (a[0] = e))
              : (e = a[0]),
            e
          )
        }
        if (429 === r.status) {
          let e
          return (
            a[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.archiveRateLimited",
                  defaultMessage: "Too many upload attempts. Wait a moment and try again.",
                  description: "Plugin archive upload was rate limited. Ask the user to wait briefly before retrying.",
                })),
                (a[1] = e))
              : (e = a[1]),
            e
          )
        }
        if (r.status >= 500) {
          let e
          return (
            a[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.archiveServiceUnavailable",
                  defaultMessage:
                    "Couldn't add the plugin because the service is temporarily unavailable. Try again shortly.",
                  description:
                    "Plugin archive upload or creation failed with a server error. Ask the user to retry shortly without exposing internal server diagnostics.",
                })),
                (a[2] = e))
              : (e = a[2]),
            e
          )
        }
        if (r.status >= 400 && r.status < 500) {
          let e
          a[3] !== r.message
            ? ((e = (function (e) {
                try {
                  return O.safeParse(JSON.parse(e)).data?.detail ?? null
                } catch {
                  return null
                }
              })(r.message)),
              (a[3] = r.message),
              (a[4] = e))
            : (e = a[4])
          let t = e
          if (null != t) {
            let e
            return (
              a[5] !== t ? ((e = (0, i.jsx)(i.Fragment, { children: t })), (a[5] = t), (a[6] = e)) : (e = a[6]),
              e
            )
          }
        }
      }
      return (
        a[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(h.A, {
              id: "plugins.create.archiveFailedGeneric",
              defaultMessage: "Couldn't add plugin. Try again.",
              description:
                "Error shown in the plugin creation dialog when uploading an archive fails and the server error cannot be displayed to the user",
            })),
            (a[7] = t))
          : (t = a[7]),
        t
      )
    }
    var E = a("sZSa")
    function I(e) {
      let t,
        a,
        r,
        s,
        o,
        l = (0, n.c)(17),
        {
          mode: c,
          canCreateMcpApp: d,
          canUploadArchive: u,
          isPending: p,
          onModeChange: g,
          onClose: m,
          submitButton: f,
        } = e
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(h.A, {
            id: "plugins.create.cancel",
            defaultMessage: "Cancel",
            description: "Close the plugin creation dialog",
          })),
          (l[0] = t))
        : (t = l[0])
      let _ = t
      l[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, i.jsx)(h.A, {
            id: "plugins.create.switchToMcp",
            defaultMessage: "Add custom MCP server",
            description:
              "Secondary button in the New Plugin archive upload dialog. Opens the MCP app setup form inside the same modal while preserving the selected archive.",
          })),
          (l[1] = a))
        : (a = l[1])
      let b = a
      l[2] !== d || l[3] !== u || l[4] !== p || l[5] !== c || l[6] !== g
        ? ((r = ("archive" === c ? d : u)
            ? (0, i.jsx)(x.$, {
                className: "me-auto",
                color: "secondary",
                disabled: p,
                onClick: () => g("archive" === c ? "mcp" : "archive"),
                children:
                  "archive" === c
                    ? b
                    : (0, i.jsx)(h.A, {
                        id: "plugins.create.switchToArchive",
                        defaultMessage: "Upload plugin archive",
                        description:
                          "Secondary button in the MCP app setup dialog. Returns to archive upload inside the same modal while preserving the MCP form and any previously selected archive.",
                      }),
              })
            : null),
          (l[2] = d),
          (l[3] = u),
          (l[4] = p),
          (l[5] = c),
          (l[6] = g),
          (l[7] = r))
        : (r = l[7])
      let C = "archive" === c ? "outlineGhost" : "ghost",
        y = "archive" === c ? "dialogAction" : void 0
      return (
        l[8] !== p || l[9] !== m || l[10] !== C || l[11] !== y
          ? ((s = (0, i.jsx)(x.$, { color: C, size: y, disabled: p, onClick: m, children: _ })),
            (l[8] = p),
            (l[9] = m),
            (l[10] = C),
            (l[11] = y),
            (l[12] = s))
          : (s = l[12]),
        l[13] !== f || l[14] !== r || l[15] !== s
          ? ((o = (0, i.jsxs)(i.Fragment, {
              children: [
                null,
                (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsxs)(v.Es, { className: "flex-wrap", children: [r, s, f] }),
                }),
              ],
            })),
            (l[13] = f),
            (l[14] = r),
            (l[15] = s),
            (l[16] = o))
          : (o = l[16]),
        o
      )
    }
    var U = a("OwuR")
    function N(e) {
      let t = (0, n.c)(25),
        { error: a } = e
      switch ((0, U.Yr)(a)) {
        case "tunnel-network-denied": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "chatgpt.connectors.network_access_denied",
                  defaultMessage:
                    "Access to this connection is restricted by your organization's network policy. Contact your administrator for help.",
                  description:
                    "Message shown to an end user in a ChatGPT conversation, app launcher, or toast when their organization's network policy blocks a connector tool call or widget resource read. Calmly direct the user to their administrator, not to retry or reconnect. Plain text with no placeholders; never include IP addresses or network policy details.",
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        }
        case "tunnel-unavailable": {
          let e
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.tunnelUnavailable",
                  defaultMessage:
                    "The tunnel client isn't connected. Make sure tunnel-client is running with the correct tunnel ID and organization, then try again.",
                  description:
                    "MCP app creation failed because the secure tunnel has no recently active client. Ask the app developer to check their running tunnel-client process and configuration. Keep tunnel-client untranslated as the executable name.",
                })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "server-unreachable": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.serverUnreachable",
                  defaultMessage:
                    "Couldn't reach the MCP server. Check the server URL and network access. If you're using a tunnel, make sure tunnel-client is running and connected.",
                  description:
                    "MCP app creation failed while connecting to or waiting for the external MCP server. Suggest checking the endpoint and connectivity without claiming a specific network cause. Keep tunnel-client untranslated as the executable name.",
                })),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        }
        case "server-not-found": {
          let e
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.serverNotFound",
                  defaultMessage:
                    "The MCP endpoint wasn't found. Check the server URL or tunnel ID. For tunnels, make sure tunnel-client is running and connected.",
                  description:
                    "MCP app creation received an upstream HTTP 404. This can mean an incorrect endpoint or an unavailable tunnel client; do not assert which cause applies. Keep tunnel-client untranslated as the executable name.",
                })),
                (t[3] = e))
              : (e = t[3]),
            e
          )
        }
        case "server-auth-rejected": {
          let e
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.serverAuthRejected",
                  defaultMessage:
                    "The MCP server denied access. Check your authentication settings and, if using a tunnel, its workspace access.",
                  description:
                    "MCP app creation received an upstream HTTP 401 or 403. The external MCP server or tunnel denied access; this does not mean the user's ChatGPT sign-in expired.",
                })),
                (t[4] = e))
              : (e = t[4]),
            e
          )
        }
        case "invalid-server-response": {
          let e
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.invalidServerResponse",
                  defaultMessage:
                    "The server couldn't complete MCP setup. Check that the endpoint supports MCP and returns valid initialization and tool responses.",
                  description:
                    "MCP app creation failed with a server protocol error or invalid response, including malformed or oversized tool listings. Ask the app developer to check MCP compatibility and server responses.",
                })),
                (t[5] = e))
              : (e = t[5]),
            e
          )
        }
        case "oauth-registration-failed": {
          let e
          return (
            t[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.oauthRegistrationFailed",
                  defaultMessage:
                    "Couldn't register an OAuth client. Check the server's registration support or enter your client details in Advanced OAuth settings.",
                  description:
                    "MCP app creation failed while registering or resolving an OAuth client. The app developer can check automatic client registration or supply their own client configuration.",
                })),
                (t[6] = e))
              : (e = t[6]),
            e
          )
        }
        case "invalid-configuration": {
          let e
          return (
            t[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.invalidConfiguration",
                  defaultMessage:
                    "Some app settings were rejected. Check the server URL or tunnel ID, icon, and authentication settings, then try again.",
                  description:
                    "MCP app creation returned HTTP 400 or 422 without a more specific recognized error. Ask the app developer to review the submitted settings; do not expose raw server validation messages.",
                })),
                (t[7] = e))
              : (e = t[7]),
            e
          )
        }
        case "request-too-large": {
          let e
          return (
            t[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.requestTooLarge",
                  defaultMessage:
                    "The app setup request or server response is too large. Reduce the icon or MCP payload size, then try again.",
                  description:
                    "MCP app creation received HTTP 413 from ChatGPT or the upstream server. A request or response exceeded a size limit; the exact offending payload is unknown.",
                })),
                (t[8] = e))
              : (e = t[8]),
            e
          )
        }
        case "rate-limited": {
          let e
          return (
            t[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.rateLimited",
                  defaultMessage:
                    "App setup was rate limited. Wait a moment before trying again. If you're using a tunnel, also check that its client is running and connected.",
                  description:
                    "MCP app creation received HTTP 429 from ChatGPT, an external server, or a tunnel. A secondary transport probe can hide an offline tunnel error, so suggest checking the tunnel client as well as waiting.",
                })),
                (t[9] = e))
              : (e = t[9]),
            e
          )
        }
        case "service-unavailable": {
          let e
          return (
            t[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.serviceUnavailable",
                  defaultMessage: "A service needed to create the app is temporarily unavailable. Try again shortly.",
                  description:
                    "MCP app creation received HTTP 5xx from ChatGPT or an upstream dependency. The error does not establish which service is responsible.",
                })),
                (t[10] = e))
              : (e = t[10]),
            e
          )
        }
        case "sign-in-required": {
          let e
          return (
            t[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.signInRequired",
                  defaultMessage:
                    "ChatGPT couldn't authorize this request. Refresh the page or sign in again, then retry.",
                  description:
                    "MCP app creation received HTTP 401 from the ChatGPT API itself, rather than an upstream MCP authentication error.",
                })),
                (t[11] = e))
              : (e = t[11]),
            e
          )
        }
        case "network-error": {
          let e
          return (
            t[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.networkError",
                  defaultMessage: "Couldn't connect to ChatGPT. Check your internet connection and try again.",
                  description:
                    "MCP app creation failed in the client's network transport before receiving an HTTP response. This is distinct from ChatGPT failing to reach an external MCP server.",
                })),
                (t[12] = e))
              : (e = t[12]),
            e
          )
        }
        case "developer-mode-required": {
          let e
          return (
            t[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.developerModeRequired",
                  defaultMessage: "Enable Developer mode in ChatGPT settings before creating an MCP app",
                  description:
                    "Error in the MCP app creation dialog when the server requires Developer mode to be enabled in ChatGPT settings before the user can create an app",
                })),
                (t[13] = e))
              : (e = t[13]),
            e
          )
        }
        case "custom-app-not-allowed": {
          let e
          return (
            t[14] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.customAppNotAllowed",
                  defaultMessage:
                    "Custom apps aren't allowed in this context. Check your workspace permissions or security settings",
                  description:
                    "Error in the MCP app creation dialog when the server denies custom app creation because of workspace permissions or security restrictions. The user may need help from a workspace administrator.",
                })),
                (t[14] = e))
              : (e = t[14]),
            e
          )
        }
        case "invalid-target": {
          let e
          return (
            t[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.invalidTarget",
                  defaultMessage: "Enter a valid server URL or tunnel ID",
                  description: "Error in the MCP app creation dialog when the server URL or tunnel ID is invalid",
                })),
                (t[15] = e))
              : (e = t[15]),
            e
          )
        }
        case "invalid-icon": {
          let e
          return (
            t[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.iconError",
                  defaultMessage: "Choose a PNG file no larger than 10 KB",
                  description: "MCP app icon validation error",
                })),
                (t[16] = e))
              : (e = t[16]),
            e
          )
        }
        case "invalid-oauth-endpoints": {
          let e
          return (
            t[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.oauthEndpointsRequired",
                  defaultMessage: "Enter both OAuth endpoints for manual setup",
                  description: "Error in the MCP app creation dialog when only one manual OAuth endpoint was entered",
                })),
                (t[17] = e))
              : (e = t[17]),
            e
          )
        }
        case "invalid-oauth-url": {
          let e
          return (
            t[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.invalidOauthUrl",
                  defaultMessage: "Enter valid OAuth endpoint URLs",
                  description: "Error in the MCP app creation dialog when a manual OAuth endpoint URL is invalid",
                })),
                (t[18] = e))
              : (e = t[18]),
            e
          )
        }
        case "oauth-unavailable": {
          let e
          return (
            t[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.oauthUnavailable",
                  defaultMessage: "Couldn't discover OAuth settings. Check the server URL or enter settings manually",
                  description:
                    "Error in the MCP app creation dialog when OAuth discovery fails; the user can check the MCP server URL or enter OAuth endpoints in Advanced OAuth settings",
                })),
                (t[19] = e))
              : (e = t[19]),
            e
          )
        }
        case "name-already-exists": {
          let e
          return (
            t[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.nameAlreadyExists",
                  defaultMessage: "An app with this name already exists. Choose another name",
                  description:
                    "Error in the MCP app creation dialog when the chosen app name is already in use and the user needs to choose a different name",
                })),
                (t[20] = e))
              : (e = t[20]),
            e
          )
        }
        case "oauth-private-key-required": {
          let e
          return (
            t[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.oauth.privateKeyRequired",
                  defaultMessage: "Enter a private key in PEM format",
                  description:
                    "Error in custom MCP app creation when private_key_jwt authentication is selected but the private key field is empty. PEM is the key file format and should not be translated.",
                })),
                (t[21] = e))
              : (e = t[21]),
            e
          )
        }
        case "oauth-client-id-required": {
          let e
          return (
            t[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.oauthClientIdRequired",
                  defaultMessage: "Enter an OAuth client ID in Advanced OAuth settings",
                  description:
                    "Error in the MCP app creation dialog when OAuth discovery cannot provide a client and the user must enter a client ID",
                })),
                (t[22] = e))
              : (e = t[22]),
            e
          )
        }
        case "icon-read-failed": {
          let e
          return (
            t[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.iconReadFailed",
                  defaultMessage: "Couldn't read the icon. Choose another file.",
                  description: "Error in the MCP app creation dialog when the selected icon cannot be read",
                })),
                (t[23] = e))
              : (e = t[23]),
            e
          )
        }
        case null: {
          let e
          return (
            t[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(h.A, {
                  id: "plugins.create.appFailedGeneric",
                  defaultMessage: "Couldn't create MCP app. Try again.",
                  description:
                    "Error shown in the MCP app creation dialog when the server error cannot be displayed to the user",
                })),
                (t[24] = e))
              : (e = t[24]),
            e
          )
        }
      }
    }
    var T = a("zKCW"),
      L = a("djbx"),
      z = a("ZtSy")
    function K(e) {
      let t,
        a,
        r,
        s,
        o,
        l,
        c,
        d,
        u,
        g,
        m = (0, n.c)(22),
        { children: f, connection: x, isPending: _, onChange: v } = e
      ;((0, p.A)(),
        m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(h.A, {
              id: "plugins.create.connection",
              defaultMessage: "Connection",
              description: "Connection type for the new MCP app",
            })),
            (m[0] = t))
          : (t = m[0]))
      let b = t
      m[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, i.jsx)(h.A, {
            id: "plugins.create.serverUrl",
            defaultMessage: "Server URL",
            description: "Connect an MCP app using a server URL",
          })),
          (m[1] = a))
        : (a = m[1])
      let C = a
      m[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, i.jsx)(h.A, {
            id: "plugins.create.tunnel",
            defaultMessage: "Tunnel",
            description: "Connect an MCP app using a secure tunnel",
          })),
          (m[2] = r))
        : (r = m[2])
      let y = r
      m[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, i.jsx)("legend", { className: "font-medium", children: b })), (m[3] = s))
        : (s = m[3])
      let M = "url" === x
      ;(m[4] !== v ? ((o = () => v("url")), (m[4] = v), (m[5] = o)) : (o = m[5]),
        m[6] !== _ || m[7] !== M || m[8] !== o
          ? ((l = (0, i.jsxs)("label", {
              className: "flex items-center gap-1",
              children: [
                (0, i.jsx)("input", { type: "radio", name: "mcp-connection", disabled: _, checked: M, onChange: o }),
                C,
              ],
            })),
            (m[6] = _),
            (m[7] = M),
            (m[8] = o),
            (m[9] = l))
          : (l = m[9]))
      let j = "tunnel" === x
      return (
        m[10] !== v ? ((c = () => v("tunnel")), (m[10] = v), (m[11] = c)) : (c = m[11]),
        m[12] !== _ || m[13] !== j || m[14] !== c
          ? ((d = (0, i.jsxs)("label", {
              className: "flex items-center gap-1",
              children: [
                (0, i.jsx)("input", { type: "radio", name: "mcp-connection", disabled: _, checked: j, onChange: c }),
                y,
              ],
            })),
            (m[12] = _),
            (m[13] = j),
            (m[14] = c),
            (m[15] = d))
          : (d = m[15]),
        m[16] !== d || m[17] !== l
          ? ((u = (0, i.jsxs)("div", { className: "flex gap-4", children: [l, d] })),
            (m[16] = d),
            (m[17] = l),
            (m[18] = u))
          : (u = m[18]),
        m[19] !== f || m[20] !== u
          ? ((g = (0, i.jsxs)(i.Fragment, {
              children: [
                null,
                (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsxs)("fieldset", { className: "flex flex-col gap-2", children: [s, u, f] }),
                }),
              ],
            })),
            (m[19] = f),
            (m[20] = u),
            (m[21] = g))
          : (g = m[21]),
        g
      )
    }
    function q(e) {
      let t,
        a,
        r,
        s,
        o,
        l,
        c,
        u,
        p,
        g = (0, n.c)(20),
        { trusted: m, isPending: f, onTrustedChange: x } = e,
        _ = (0, d.useId)(),
        v = (0, d.useId)()
      ;(g[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(h.A, {
            id: "chatgpt.apps.custom.creation.risk.description",
            defaultMessage:
              "Only connect to MCP servers you trust. An untrusted server may access or steal information shared through app use, or trick ChatGPT into using tools in unintended ways, including changing or deleting data.",
            description:
              "Warning beside the required acknowledgment in personal and workspace custom MCP app creation. Explains that an untrusted server can access information shared through app use and manipulate tool use to change or delete data. Users must acknowledge these risks before creating the app.",
          })),
          (g[0] = t))
        : (t = g[0]),
        g[1] !== _
          ? ((a = (0, i.jsx)("span", { id: _, className: "text-xs text-secondary", children: t })),
            (g[1] = _),
            (g[2] = a))
          : (a = g[2]))
      let C = a
      return (
        g[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(b.Ko7, { className: "text-warning" })), (g[3] = r))
          : (r = g[3]),
        g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(T.l, {
              type: "warning",
              variant: "callout",
              layout: "inline",
              icon: r,
              content: (0, i.jsx)(h.A, {
                id: "plugins.create.riskNotice",
                defaultMessage: "Custom MCP servers introduce risk. <link>Learn more</link>",
                description:
                  "Warning above the consent checkbox in custom MCP app creation. The link opens documentation about MCP server risks and safety.",
                values: { link: H },
              }),
            })),
            (g[4] = s))
          : (s = g[4]),
        g[5] !== v || g[6] !== f || g[7] !== x || g[8] !== m || g[9] !== _
          ? ((o = (0, i.jsx)(L.S, {
              "aria-labelledby": v,
              "aria-describedby": _,
              checked: m,
              disabled: f,
              onCheckedChange: x,
            })),
            (g[5] = v),
            (g[6] = f),
            (g[7] = x),
            (g[8] = m),
            (g[9] = _),
            (g[10] = o))
          : (o = g[10]),
        g[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(h.A, {
              id: "createCustomConnectorModal.acceptLabelTitle",
              defaultMessage: "I understand and want to continue",
              description:
                "Title for a checkbox that allows the user to indicate they understand and accept the risks of enabling the custom connector they are about to create.",
            })),
            (g[11] = l))
          : (l = g[11]),
        g[12] !== v
          ? ((c = (0, i.jsx)("span", { id: v, className: "font-medium", children: l })), (g[12] = v), (g[13] = c))
          : (c = g[13]),
        g[14] !== c || g[15] !== C
          ? ((u = (0, i.jsxs)("span", { className: "flex min-w-0 flex-col gap-1", children: [c, C] })),
            (g[14] = c),
            (g[15] = C),
            (g[16] = u))
          : (u = g[16]),
        g[17] !== o || g[18] !== u
          ? ((p = (0, i.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                s,
                (0, i.jsx)(j.t, {
                  variant: "form",
                  dividers: !1,
                  children: (0, i.jsxs)("label", {
                    className: "relative flex items-center gap-3 p-4",
                    children: [o, u],
                  }),
                }),
              ],
            })),
            (g[17] = o),
            (g[18] = u),
            (g[19] = p))
          : (p = g[19]),
        p
      )
    }
    function H(e) {
      return (0, i.jsx)(z.G, {
        href: "https://platform.openai.com/docs/mcp#risks-and-safety",
        openTarget: "external-browser",
        initiator: "open_in_browser_bridge",
        underline: "always",
        children: e,
      })
    }
    var F = a("rGp2"),
      G = a("uuN8"),
      B = a("nzx4"),
      $ = a("aepO"),
      J = a("HFSu")
    function X(e) {
      let t,
        a,
        s,
        o,
        l,
        c,
        d,
        u,
        g,
        m,
        f,
        _,
        v,
        y,
        A,
        w,
        k,
        S,
        D,
        O,
        R,
        E,
        I,
        N,
        z,
        K,
        q,
        H,
        X,
        V,
        Q,
        ee,
        et,
        ea,
        ei,
        en,
        er,
        es,
        eo,
        el,
        ec,
        ed,
        eu,
        ep,
        eh,
        eg,
        em,
        ef,
        ex,
        e_,
        ev,
        eb,
        eC,
        ey,
        eM,
        ej,
        eA,
        ew,
        eP,
        ek,
        eS,
        eD,
        eO,
        eR = (0, n.c)(175),
        {
          accountId: eE,
          target: eI,
          hasPreconfiguredOAuthClient: eU,
          allowPrivateKeyJwt: eN,
          value: eT,
          disabled: eL,
          onChange: ez,
        } = e,
        eK = void 0 !== eN && eN,
        eq = (0, p.A)()
      eR[0] !== eq
        ? ((t = eq.formatMessage({
            id: "plugins.create.oauth.listPlaceholder",
            defaultMessage: "One value per line or comma-separated",
            description:
              "Placeholder for scope list inputs in custom MCP app creation. Each scope can be separated by a newline or comma.",
          })),
          (eR[0] = eq),
          (eR[1] = t))
        : (t = eR[1])
      let eH = t
      eR[2] !== eq
        ? ((a = eq.formatMessage({
            id: "plugins.create.oauth.urlPlaceholder",
            defaultMessage: "https://example.com",
            description: "Example URL placeholder for OAuth and OpenID endpoint inputs in custom MCP app creation.",
          })),
          (eR[2] = eq),
          (eR[3] = a))
        : (a = eR[3])
      let eF = a
      eR[4] !== eT.clientMode || eR[5] !== eT.config
        ? ((s = (0, U.u_)(eT.config, eT.clientMode)), (eR[4] = eT.clientMode), (eR[5] = eT.config), (eR[6] = s))
        : (s = eR[6])
      let eG = s
      eR[7] !== eK || eR[8] !== eT ? ((o = (0, U.Lx)(eT, eK)), (eR[7] = eK), (eR[8] = eT), (eR[9] = o)) : (o = eR[9])
      let eB = o,
        e$ = eK && "private_key_jwt" === eB
      eR[10] !== eT.config.authorization_response_iss_parameter_supported ||
      eR[11] !== eT.config.authorization_server_base
        ? ((l =
            !0 === eT.config.authorization_response_iss_parameter_supported &&
            !!eT.config.authorization_server_base?.trim()),
          (eR[10] = eT.config.authorization_response_iss_parameter_supported),
          (eR[11] = eT.config.authorization_server_base),
          (eR[12] = l))
        : (l = eR[12])
      let eJ = l
      eR[13] !== eE || eR[14] !== eJ || eR[15] !== eI
        ? ((c = ["plugins", "mcp-oauth-callback", eE, eI, eJ]),
          (eR[13] = eE),
          (eR[14] = eJ),
          (eR[15] = eI),
          (eR[16] = c))
        : (c = eR[16])
      let eX = "DCR" !== eG && !eL
      ;(eR[17] !== eE || eR[18] !== eJ || eR[19] !== eI
        ? ((d = async (e) => {
            let { signal: t } = e,
              [a, i] = await Promise.all([
                (0, F.Tj)(),
                eJ
                  ? null
                  : J.CodexRequest.safeGet("/aip/connectors/oauth/callback_id", {
                      surface: "plugin_management",
                      additionalHeaders: { [F.ok]: (0, F.MR)(), "ChatGPT-Account-Id": eE },
                      parameters: { query: eI },
                      signal: t,
                    }),
              ])
            return (0, U.Xw)(a, i?.callback_id ?? null)
          }),
          (eR[17] = eE),
          (eR[18] = eJ),
          (eR[19] = eI),
          (eR[20] = d))
        : (d = eR[20]),
        eR[21] !== c || eR[22] !== eX || eR[23] !== d
          ? ((u = { queryKey: c, enabled: eX, staleTime: P.D.FIVE_MINUTES, retry: !1, queryFn: d }),
            (eR[21] = c),
            (eR[22] = eX),
            (eR[23] = d),
            (eR[24] = u))
          : (u = eR[24]))
      let { data: eW, isPending: eZ, isError: eY, refetch: eV } = (0, r.I)(u)
      ;(eR[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, i.jsx)(M.X.Header, {
            size: "compact",
            spacing: "compact",
            title: (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.oauthClientSetupTitle",
              defaultMessage: "Client registration",
              description: "Section title for the OAuth client setup controls in the advanced settings panel.",
            }),
          })),
          (eR[25] = g))
        : (g = eR[25]),
        eR[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.oauthClientModeDescription",
                defaultMessage:
                  "Choose whether ChatGPT should use your client credentials, Dynamic Client Registration (DCR), or Client Identifier Metadata Document (CIMD). See the <link>MCP client registration approaches</link>.",
                description: "Helper text for the OAuth client setup method selector in the advanced settings panel.",
                values: { link: Y },
              }),
            })),
            (eR[26] = m))
          : (m = eR[26]),
        eR[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.registrationMethod",
              defaultMessage: "Registration method",
              description: "Label for how an OAuth client is registered in the custom MCP app creation dialog.",
            })),
            (eR[27] = f))
          : (f = eR[27]),
        eR[28] !== ez || eR[29] !== eT
          ? ((_ = (e) => {
              let t = e.target.value
              ;("USER_DEFINED" === t || "DCR" === t || "CIMD" === t) && ez({ ...eT, clientMode: t })
            }),
            (eR[28] = ez),
            (eR[29] = eT),
            (eR[30] = _))
          : (_ = eR[30]),
        eR[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)("option", {
              value: "USER_DEFINED",
              children: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.userDefined",
                defaultMessage: "User-Defined OAuth Client",
                description:
                  "Registration option in custom MCP creation for entering existing OAuth client credentials.",
              }),
            })),
            (eR[31] = v))
          : (v = eR[31]),
        eR[32] !== eT.config.registration_url
          ? ((y = eT.config.registration_url?.trim()), (eR[32] = eT.config.registration_url), (eR[33] = y))
          : (y = eR[33]))
      let eQ = !y
      ;(eR[34] !== eT.config.registration_url
        ? ((A = eT.config.registration_url?.trim()
            ? (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.dcr",
                defaultMessage: "Dynamic Client Registration (DCR)",
                description:
                  "Registration option in custom MCP creation that uses the provider's registration endpoint. DCR is a protocol abbreviation.",
              })
            : (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.dcrUnavailable",
                defaultMessage: "Dynamic Client Registration (DCR) (Unavailable)",
                description:
                  "Disabled registration option in custom MCP creation when no registration endpoint is configured. DCR is a protocol abbreviation.",
              })),
          (eR[34] = eT.config.registration_url),
          (eR[35] = A))
        : (A = eR[35]),
        eR[36] !== eQ || eR[37] !== A
          ? ((w = (0, i.jsx)("option", { value: "DCR", disabled: eQ, children: A })),
            (eR[36] = eQ),
            (eR[37] = A),
            (eR[38] = w))
          : (w = eR[38]))
      let e1 = !eT.config.client_id_metadata_document_supported
      return (
        eR[39] !== eT.config.client_id_metadata_document_supported
          ? ((k = eT.config.client_id_metadata_document_supported
              ? (0, i.jsx)(h.A, {
                  id: "plugins.create.oauth.cimd",
                  defaultMessage: "Client Identifier Metadata Document (CIMD)",
                  description:
                    "Registration option in custom MCP creation that identifies ChatGPT using its client metadata URL. CIMD is a protocol abbreviation.",
                })
              : (0, i.jsx)(h.A, {
                  id: "plugins.create.oauth.cimdRegistrationUnavailable",
                  defaultMessage: "Client Identifier Metadata Document (CIMD) (Unavailable)",
                  description:
                    "Disabled registration option in custom MCP creation when the server does not advertise CIMD support. CIMD is a protocol abbreviation.",
                })),
            (eR[39] = eT.config.client_id_metadata_document_supported),
            (eR[40] = k))
          : (k = eR[40]),
        eR[41] !== e1 || eR[42] !== k
          ? ((S = (0, i.jsx)("option", { value: "CIMD", disabled: e1, children: k })),
            (eR[41] = e1),
            (eR[42] = k),
            (eR[43] = S))
          : (S = eR[43]),
        eR[44] !== eG || eR[45] !== _ || eR[46] !== w || eR[47] !== S
          ? ((D = (0, i.jsxs)("label", {
              className: "flex flex-col gap-1",
              children: [
                f,
                (0, i.jsxs)("select", {
                  className: "h-9 rounded-md border border-primary-outline bg-primary-soft px-2.5 text-sm text-default",
                  value: eG,
                  onChange: _,
                  children: [v, w, S],
                }),
              ],
            })),
            (eR[44] = eG),
            (eR[45] = _),
            (eR[46] = w),
            (eR[47] = S),
            (eR[48] = D))
          : (D = eR[48]),
        eR[49] !== eG
          ? ((O =
              "DCR" === eG
                ? (0, i.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, i.jsx)(h.A, {
                      id: "plugins.create.oauth.oauthClientModeDcrDescription",
                      defaultMessage:
                        "ChatGPT will dynamically register an OAuth client using the Registration URL in the OAuth endpoints section.",
                      description: "Helper text shown when Dynamic Client Registration is selected.",
                    }),
                  })
                : null),
            (eR[49] = eG),
            (eR[50] = O))
          : (O = eR[50]),
        eR[51] !== eG
          ? ((R =
              "CIMD" === eG
                ? (0, i.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, i.jsx)(h.A, {
                      id: "plugins.create.oauth.oauthClientModeCimdDescription",
                      defaultMessage:
                        "ChatGPT will use a Client Identifier Metadata Document instead of manually entered client credentials.",
                      description:
                        "Helper text explaining client registration when CIMD is selected in custom MCP app creation.",
                    }),
                  })
                : null),
            (eR[51] = eG),
            (eR[52] = R))
          : (R = eR[52]),
        eR[53] !== eG || eR[54] !== eU || eR[55] !== e$
          ? ((E =
              "USER_DEFINED" === eG
                ? (0, i.jsx)("p", {
                    className: "text-xs text-secondary",
                    children:
                      eU && !e$
                        ? (0, i.jsx)(h.A, {
                            id: "plugins.create.oauth.preconfiguredClientDescription",
                            defaultMessage:
                              "OpenAI already has a preconfigured OAuth client for this MCP server. Leave the client ID empty to use it, or enter your own client credentials to override it.",
                            description:
                              "Helper text in custom MCP creation when OpenAI has client credentials for this server. Users can leave the client ID blank or override it with their own credentials.",
                          })
                        : (0, i.jsx)(h.A, {
                            id: "plugins.create.oauth.oauthClientModeUserDefinedDescription",
                            defaultMessage: "Use your own OAuth client credentials for this connector",
                            description: "Helper text shown when the user-defined OAuth client mode is selected.",
                          }),
                  })
                : null),
            (eR[53] = eG),
            (eR[54] = eU),
            (eR[55] = e$),
            (eR[56] = E))
          : (E = eR[56]),
        eR[57] !== eT.config.registration_url || eR[58] !== eT.discovered
          ? ((I =
              eT.discovered && !eT.config.registration_url?.trim()
                ? (0, i.jsx)(T.l, {
                    type: "warning",
                    variant: "callout",
                    density: "compact",
                    content: (0, i.jsx)(h.A, {
                      id: "plugins.create.oauth.oauthClientModeDcrUnavailableDescription",
                      defaultMessage:
                        "DCR is unavailable until a Registration URL is present in the OAuth endpoints section below.",
                      description:
                        "Helper text shown when DCR is unavailable because no registration URL is configured.",
                    }),
                  })
                : null),
            (eR[57] = eT.config.registration_url),
            (eR[58] = eT.discovered),
            (eR[59] = I))
          : (I = eR[59]),
        eR[60] !== eT.config.client_id_metadata_document_supported || eR[61] !== eT.discovered
          ? ((N =
              eT.discovered && !eT.config.client_id_metadata_document_supported
                ? (0, i.jsx)(T.l, {
                    type: "warning",
                    variant: "callout",
                    density: "compact",
                    content: (0, i.jsx)(h.A, {
                      id: "plugins.create.oauth.oauthClientModeCimdUnavailableDescription",
                      defaultMessage: "CIMD is unavailable because the server did not advertise CIMD support.",
                      description: "Helper text shown when CIMD is unavailable for the discovered OAuth config.",
                    }),
                  })
                : null),
            (eR[60] = eT.config.client_id_metadata_document_supported),
            (eR[61] = eT.discovered),
            (eR[62] = N))
          : (N = eR[62]),
        eR[63] !== eW ||
        eR[64] !== eY ||
        eR[65] !== eZ ||
        eR[66] !== eG ||
        eR[67] !== eL ||
        eR[68] !== eq ||
        eR[69] !== eV
          ? ((z =
              "DCR" !== eG
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)("label", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, i.jsx)(h.A, {
                            id: "plugins.create.oauth.callbackUrl",
                            defaultMessage: "Callback URL",
                            description:
                              "Read-only OAuth redirect URL to register with the provider when creating a custom MCP app.",
                          }),
                          (0, i.jsx)(C.pd, {
                            readOnly: !0,
                            value:
                              eW?.redirect ??
                              (eZ
                                ? eq.formatMessage({
                                    id: "plugins.create.oauth.callbackLoading",
                                    defaultMessage: "Loading callback URL…",
                                    description:
                                      "Temporary text in the custom MCP creation form while the callback URL is loading. Copying is disabled until the URL is available.",
                                  })
                                : eq.formatMessage({
                                    id: "plugins.create.oauth.callbackUnavailable",
                                    defaultMessage: "Could not load callback URL",
                                    description:
                                      "Inline text in the custom MCP creation form when the callback URL could not be loaded. Users can retry loading it.",
                                  })),
                            trailingControl: (0, i.jsx)(G.i, {
                              ariaLabel: eq.formatMessage({
                                id: "plugins.create.oauth.copyCallbackUrl",
                                defaultMessage: "Copy callback URL",
                                description:
                                  "Accessible label for copying the callback URL to register an OAuth client in custom MCP creation.",
                              }),
                              isDisabled: null == eW || eL,
                              onCopy: (e) => null != eW && (0, $.E)(eW.redirect, e),
                            }),
                          }),
                        ],
                      }),
                      "CIMD" === eG
                        ? (0, i.jsxs)("label", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, i.jsx)(h.A, {
                                id: "plugins.create.oauth.cimdUrl",
                                defaultMessage: "CIMD client metadata URL",
                                description:
                                  "Read-only Client Identifier Metadata Document URL to register with a provider when creating a custom MCP app.",
                              }),
                              (0, i.jsx)(C.pd, {
                                readOnly: !0,
                                value:
                                  eW?.metadata ??
                                  (eZ
                                    ? eq.formatMessage({
                                        id: "plugins.create.oauth.cimdLoading",
                                        defaultMessage: "Loading CIMD URL…",
                                        description:
                                          "Temporary text in the custom MCP creation form while the CIMD URL is loading. Copying is disabled until the URL is available.",
                                      })
                                    : eq.formatMessage({
                                        id: "plugins.create.oauth.cimdUrlUnavailable",
                                        defaultMessage: "Could not load CIMD URL",
                                        description:
                                          "Inline text in the custom MCP creation form when the CIMD URL could not be loaded. Users can retry loading it.",
                                      })),
                                trailingControl: (0, i.jsx)(G.i, {
                                  ariaLabel: eq.formatMessage({
                                    id: "plugins.create.oauth.copyCimdUrl",
                                    defaultMessage: "Copy CIMD URL",
                                    description:
                                      "Accessible label for copying the CIMD URL to register an OAuth client in custom MCP creation.",
                                  }),
                                  isDisabled: null == eW || eL,
                                  onCopy: (e) => null != eW && (0, $.E)(eW.metadata, e),
                                }),
                              }),
                            ],
                          })
                        : null,
                      eY
                        ? (0, i.jsxs)("div", {
                            role: "alert",
                            className: "flex flex-col gap-1 text-danger",
                            children: [
                              (0, i.jsx)(h.A, {
                                id: "plugins.create.oauth.callbackFailed",
                                defaultMessage: "Couldn’t load the callback URL",
                                description:
                                  "Error when fetching the provider registration callback URL in custom MCP app creation.",
                              }),
                              (0, i.jsx)(x.$, {
                                color: "ghost",
                                onClick: () => void eV(),
                                children: (0, i.jsx)(h.A, {
                                  id: "plugins.create.oauth.retryCallback",
                                  defaultMessage: "Retry",
                                  description:
                                    "Button to retry loading the OAuth callback URL in custom MCP app creation.",
                                }),
                              }),
                            ],
                          })
                        : null,
                    ],
                  })
                : null),
            (eR[63] = eW),
            (eR[64] = eY),
            (eR[65] = eZ),
            (eR[66] = eG),
            (eR[67] = eL),
            (eR[68] = eq),
            (eR[69] = eV),
            (eR[70] = z))
          : (z = eR[70]),
        eR[71] !== eK ||
        eR[72] !== eG ||
        eR[73] !== eU ||
        eR[74] !== eq ||
        eR[75] !== ez ||
        eR[76] !== eB ||
        eR[77] !== e$ ||
        eR[78] !== eT
          ? ((K =
              "USER_DEFINED" === eG
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)("label", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, i.jsx)(h.A, {
                            id: "plugins.create.oauth.clientIdLabel",
                            defaultMessage: "OAuth client ID",
                            description: "OAuth client ID for the MCP app",
                          }),
                          (0, i.jsx)(C.pd, {
                            autoComplete: "off",
                            placeholder:
                              eU && !e$
                                ? eq.formatMessage({
                                    id: "plugins.create.oauth.clientIdOptionalPlaceholder",
                                    defaultMessage: "OAuth Client ID (Optional)",
                                    description:
                                      "Client ID placeholder in custom MCP creation when OpenAI has a preconfigured client. Entering a client ID overrides those credentials.",
                                  })
                                : eq.formatMessage({
                                    id: "plugins.create.oauth.clientIdPlaceholder",
                                    defaultMessage: "OAuth Client ID",
                                    description:
                                      "Placeholder for the existing OAuth application client ID in custom MCP app creation.",
                                  }),
                            required: !1 === eU || e$ || !!eT.clientSecret.trim(),
                            value: eT.clientId,
                            onChange: (e) => ez({ ...eT, clientId: e.target.value }),
                          }),
                        ],
                      }),
                      e$
                        ? null
                        : (0, i.jsxs)("label", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, i.jsx)(h.A, {
                                id: "plugins.create.oauth.clientSecretLabel",
                                defaultMessage: "OAuth client secret",
                                description: "OAuth client secret for the MCP app",
                              }),
                              (0, i.jsx)(C.pd, {
                                type: "password",
                                autoComplete: "off",
                                placeholder: eq.formatMessage({
                                  id: "plugins.create.oauth.clientSecretPlaceholder",
                                  defaultMessage: "OAuth Client Secret (Optional)",
                                  description:
                                    "Placeholder for an optional OAuth application client secret in custom MCP app creation.",
                                }),
                                value: eT.clientSecret,
                                onChange: (e) => ez({ ...eT, clientSecret: e.target.value }),
                              }),
                            ],
                          }),
                      (0, i.jsxs)("label", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, i.jsx)(h.A, {
                            id: "plugins.create.oauth.tokenAuthMethod",
                            defaultMessage: "Token endpoint auth method",
                            description:
                              "Selects how the client authenticates to the OAuth token endpoint in custom MCP app creation. Protocol values are not translated.",
                          }),
                          (0, i.jsx)("select", {
                            className:
                              "h-9 rounded-md border border-primary-outline bg-primary-soft px-2.5 text-sm text-default",
                            value: eB,
                            onChange: (e) => {
                              ez({ ...eT, tokenAuthMethod: e.target.value })
                            },
                            children: (0, U.cK)(eT, eK).map((e) =>
                              (0, i.jsx)(
                                "option",
                                { value: e, disabled: "none" === e && !!eT.clientSecret.trim(), children: e },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
                      e$
                        ? (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsxs)("label", {
                                className: "flex flex-col gap-1",
                                children: [
                                  (0, i.jsx)(h.A, {
                                    id: "plugins.create.oauth.privateKeyPemLabel",
                                    defaultMessage: "Private key (PEM)",
                                    description:
                                      "Label for the multiline private key input in custom MCP app OAuth settings. Used to sign client authentication assertions. PEM is the key format and should not be translated.",
                                  }),
                                  (0, i.jsx)(C.TM, {
                                    autoComplete: "off",
                                    spellCheck: !1,
                                    "data-dd-privacy": "mask",
                                    required: !0,
                                    rows: 3,
                                    value: eT.privateKeyPem,
                                    onChange: (e) => ez({ ...eT, privateKeyPem: e.target.value }),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("label", {
                                className: "flex flex-col gap-1",
                                children: [
                                  (0, i.jsx)(h.A, {
                                    id: "plugins.create.oauth.privateKeyJwtKidLabel",
                                    defaultMessage: "Key ID (optional)",
                                    description:
                                      "Label for the optional signing key identifier in custom MCP app OAuth settings. It identifies the matching public key registered with the OAuth provider and is sent as the JWT kid header.",
                                  }),
                                  (0, i.jsx)(C.pd, {
                                    autoComplete: "off",
                                    value: eT.privateKeyJwtKid,
                                    onChange: (e) => ez({ ...eT, privateKeyJwtKid: e.target.value }),
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null,
                    ],
                  })
                : null),
            (eR[71] = eK),
            (eR[72] = eG),
            (eR[73] = eU),
            (eR[74] = eq),
            (eR[75] = ez),
            (eR[76] = eB),
            (eR[77] = e$),
            (eR[78] = eT),
            (eR[79] = K))
          : (K = eR[79]),
        eR[80] !== D ||
        eR[81] !== O ||
        eR[82] !== R ||
        eR[83] !== E ||
        eR[84] !== I ||
        eR[85] !== N ||
        eR[86] !== z ||
        eR[87] !== K
          ? ((q = (0, i.jsx)(j.t, {
              variant: "form",
              dividers: !1,
              children: (0, i.jsxs)("div", {
                className: "flex flex-col gap-3 p-4",
                children: [g, m, D, O, R, E, I, N, z, K],
              }),
            })),
            (eR[80] = D),
            (eR[81] = O),
            (eR[82] = R),
            (eR[83] = E),
            (eR[84] = I),
            (eR[85] = N),
            (eR[86] = z),
            (eR[87] = K),
            (eR[88] = q))
          : (q = eR[88]),
        eR[89] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.scopeTitle",
              defaultMessage: "Scopes",
              description: "Section title for OAuth scope fields.",
            })),
            (eR[89] = H))
          : (H = eR[89]),
        eR[90] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = (0, i.jsx)(M.X.Header, {
              size: "compact",
              spacing: "compact",
              title: H,
              subtitle: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.scopeSectionDescription.additiveDefaults",
                defaultMessage:
                  "Base scopes are always requested. Today, if every selected tool defines OAuth scope tags, ChatGPT requests those tool scopes plus base scopes. Otherwise it requests the default scopes in addition. See the <link>Apps SDK tool descriptor docs</link>.",
                description:
                  "Helper text explaining how base scopes, tool scopes, and default scopes work together. Default scopes are added to known tool scopes and base scopes when any selected tool is missing scope information. Preserve the <link> tag, which links to the Apps SDK tool descriptor documentation.",
                values: { link: Z },
              }),
            })),
            (eR[90] = X))
          : (X = eR[90]),
        eR[91] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, i.jsx)("legend", {
              className: "font-medium",
              children: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.defaultScopes",
                defaultMessage: "Default scopes",
                description: "Section listing OAuth scopes requested by default when connecting a custom MCP app.",
              }),
            })),
            (eR[91] = V))
          : (V = eR[91]),
        eR[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = (0, i.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.requestedScopesDescription",
                defaultMessage:
                  "Choose the default scopes ChatGPT requests when tool-level OAuth scope tags are not defined for every selected tool.",
                description:
                  "Helper text explaining how default scopes differ from tool-level scopes in the advanced settings panel.",
              }),
            })),
            (eR[92] = Q))
          : (Q = eR[92]),
        eR[93] !== eL || eR[94] !== eH || eR[95] !== ez || eR[96] !== eT
          ? ((ee = (0, i.jsxs)("fieldset", {
              className: "flex flex-col gap-2",
              children: [
                V,
                Q,
                eT.discovered
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        [...new Set(eT.config.scopes_supported)].map((e) =>
                          (0, i.jsxs)(
                            "label",
                            {
                              className: "relative flex items-center gap-2",
                              children: [
                                (0, i.jsx)(L.S, {
                                  disabled: eL,
                                  checked: (0, U.UK)(eT.scopes).includes(e),
                                  onCheckedChange: (t) =>
                                    ez({
                                      ...eT,
                                      scopes: (t
                                        ? [...(0, U.UK)(eT.scopes), e]
                                        : (0, U.UK)(eT.scopes).filter((t) => t !== e)
                                      ).join("\n"),
                                    }),
                                }),
                                (0, i.jsx)("span", { className: "select-text", children: e }),
                              ],
                            },
                            e,
                          ),
                        ),
                        0 === (eT.config.scopes_supported ?? []).length
                          ? (0, i.jsx)("p", {
                              className: "text-sm text-secondary",
                              children: (0, i.jsx)(h.A, {
                                id: "plugins.create.oauth.noScopes",
                                defaultMessage:
                                  "The discovered OAuth config did not advertise supported scopes to choose from.",
                                description:
                                  "Explanation when OAuth discovery has no selectable default scopes in custom MCP app creation.",
                              }),
                            })
                          : null,
                      ],
                    })
                  : (0, i.jsxs)("label", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, i.jsx)(h.A, {
                          id: "plugins.create.scopes",
                          defaultMessage: "Scopes (optional, one per line)",
                          description: "OAuth scopes requested for the MCP app",
                        }),
                        (0, i.jsx)(C.TM, {
                          rows: 3,
                          placeholder: eH,
                          value: eT.scopes,
                          onChange: (e) => ez({ ...eT, scopes: e.target.value }),
                        }),
                      ],
                    }),
              ],
            })),
            (eR[93] = eL),
            (eR[94] = eH),
            (eR[95] = ez),
            (eR[96] = eT),
            (eR[97] = ee))
          : (ee = eR[97]),
        eR[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((et = (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.baseScopes",
              defaultMessage: "Base scopes",
              description:
                "Scopes always requested for a custom MCP app, separate from its selectable default scopes. Accepts one scope per line or comma-separated scopes.",
            })),
            (eR[98] = et))
          : (et = eR[98]),
        eR[99] !== ez || eR[100] !== eT
          ? ((ea = (e) => ez({ ...eT, baseScopes: e.target.value })), (eR[99] = ez), (eR[100] = eT), (eR[101] = ea))
          : (ea = eR[101]),
        eR[102] !== eH || eR[103] !== ea || eR[104] !== eT.baseScopes
          ? ((ei = (0, i.jsxs)("label", {
              className: "flex flex-col gap-1",
              children: [et, (0, i.jsx)(C.TM, { rows: 3, placeholder: eH, value: eT.baseScopes, onChange: ea })],
            })),
            (eR[102] = eH),
            (eR[103] = ea),
            (eR[104] = eT.baseScopes),
            (eR[105] = ei))
          : (ei = eR[105]),
        eR[106] === Symbol.for("react.memo_cache_sentinel")
          ? ((en = (0, i.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.baseScopesDescription",
                defaultMessage: "Scopes to request with every auth request, no matter which tools are chosen.",
                description: "Helper text explaining what OAuth base scopes mean in the advanced settings panel.",
              }),
            })),
            (eR[106] = en))
          : (en = eR[106]),
        eR[107] !== ee || eR[108] !== ei
          ? ((er = (0, i.jsx)(j.t, {
              variant: "form",
              dividers: !1,
              children: (0, i.jsxs)("div", { className: "flex flex-col gap-3 p-4", children: [X, ee, ei, en] }),
            })),
            (eR[107] = ee),
            (eR[108] = ei),
            (eR[109] = er))
          : (er = eR[109]),
        eR[110] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.oauthEndpointsTitle",
              defaultMessage: "OAuth endpoints",
              description: "Section title for OAuth endpoint fields.",
            })),
            (eR[110] = es))
          : (es = eR[110]),
        eR[111] === Symbol.for("react.memo_cache_sentinel")
          ? ((eo = (0, i.jsx)(M.X.Header, {
              size: "compact",
              spacing: "compact",
              title: es,
              subtitle: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.oauthEndpointsDescription",
                defaultMessage:
                  "These endpoints are discovered from the MCP server. If Registration URL is missing, Dynamic Client Registration will fail. See the <link>Apps SDK auth docs</link>.",
                description:
                  "Helper text explaining the OAuth endpoints section and the requirement for a registration URL when using Dynamic Client Registration.",
                values: { link: W },
              }),
            })),
            (eR[111] = eo))
          : (eo = eR[111]),
        eR[112] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = [
              "authorization_url",
              (0, i.jsx)(
                h.A,
                {
                  id: "plugins.create.oauth.authorizationUrlLabel",
                  defaultMessage: "Auth URL",
                  description: "Manual OAuth authorization URL for the MCP app",
                },
                "auth",
              ),
            ]),
            (eR[112] = el))
          : (el = eR[112]),
        eR[113] === Symbol.for("react.memo_cache_sentinel")
          ? ((ec = [
              "token_url",
              (0, i.jsx)(
                h.A,
                {
                  id: "plugins.create.oauth.tokenUrlLabel",
                  defaultMessage: "Token URL",
                  description: "Manual OAuth token URL for the MCP app",
                },
                "token",
              ),
            ]),
            (eR[113] = ec))
          : (ec = eR[113]),
        eR[114] === Symbol.for("react.memo_cache_sentinel")
          ? ((ed = [
              "registration_url",
              (0, i.jsx)(
                h.A,
                {
                  id: "plugins.create.oauth.registrationUrl",
                  defaultMessage: "Registration URL",
                  description: "Editable dynamic OAuth client registration endpoint in custom MCP app creation.",
                },
                "registration",
              ),
            ]),
            (eR[114] = ed))
          : (ed = eR[114]),
        eR[115] === Symbol.for("react.memo_cache_sentinel")
          ? ((eu = [
              "authorization_server_base",
              (0, i.jsx)(
                h.A,
                {
                  id: "plugins.create.oauth.issuer",
                  defaultMessage: "Authorization server base",
                  description: "Editable OAuth issuer base URL in custom MCP app creation, used for issuer validation.",
                },
                "issuer",
              ),
            ]),
            (eR[115] = eu))
          : (eu = eR[115]),
        eR[116] === Symbol.for("react.memo_cache_sentinel")
          ? ((ep = [
              el,
              ec,
              ed,
              eu,
              [
                "resource",
                (0, i.jsx)(
                  h.A,
                  {
                    id: "plugins.create.oauth.resource",
                    defaultMessage: "Resource",
                    description:
                      "Editable OAuth resource identifier in custom MCP app creation. It can be an HTTPS URL or another URI such as a URN.",
                  },
                  "resource",
                ),
              ],
            ]),
            (eR[116] = ep))
          : (ep = eR[116]),
        eR[117] !== eq || eR[118] !== ez || eR[119] !== eF || eR[120] !== eT
          ? ((eh = (0, i.jsx)(j.t, {
              variant: "form",
              dividers: !1,
              children: (0, i.jsxs)("div", {
                className: "flex flex-col gap-3 p-4",
                children: [
                  eo,
                  ep.map((e) => {
                    let [t, a] = e
                    return (0, i.jsxs)(
                      "label",
                      {
                        className: "flex flex-col gap-1",
                        children: [
                          a,
                          (0, i.jsx)(C.pd, {
                            placeholder:
                              "resource" === t
                                ? eq.formatMessage({
                                    id: "plugins.create.oauth.resourcePlaceholder",
                                    defaultMessage: "urn:example:resource",
                                    description:
                                      "Example resource identifier placeholder in custom MCP OAuth settings. A resource may be a URI such as a URN.",
                                  })
                                : eF,
                            type: "resource" === t ? "text" : "url",
                            required: "authorization_url" === t || "token_url" === t,
                            value: eT.config[t] ?? "",
                            onChange: (e) => ez({ ...eT, config: { ...eT.config, [t]: e.target.value } }),
                          }),
                        ],
                      },
                      t,
                    )
                  }),
                ],
              }),
            })),
            (eR[117] = eq),
            (eR[118] = ez),
            (eR[119] = eF),
            (eR[120] = eT),
            (eR[121] = eh))
          : (eh = eR[121]),
        eR[122] !== eq || eR[123] !== ez || eR[124] !== eT
          ? ((eg = eT.config.pkce_methods?.length
              ? null
              : (0, i.jsx)(j.t, {
                  variant: "form",
                  dividers: !1,
                  children: (0, i.jsxs)("div", {
                    className: "flex flex-col gap-3 p-4",
                    children: [
                      (0, i.jsx)(M.X.Header, {
                        size: "compact",
                        spacing: "compact",
                        title: (0, i.jsx)(h.A, {
                          id: "plugins.create.oauth.pkceTitle",
                          defaultMessage: "PKCE",
                          description:
                            "Section title for the manual PKCE support declaration in advanced OAuth settings for custom MCP app creation. Keep PKCE as the protocol name.",
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, i.jsxs)("label", {
                            className: "relative flex items-center gap-2 select-none",
                            children: [
                              (0, i.jsx)(L.S, {
                                checked: eT.supportsPkceS256,
                                onCheckedChange: (e) => ez({ ...eT, supportsPkceS256: !0 === e }),
                              }),
                              (0, i.jsx)(h.A, {
                                id: "plugins.create.oauth.pkceSupport.label",
                                defaultMessage: "Server supports PKCE (S256)",
                                description:
                                  "Checkbox in advanced OAuth settings for custom MCP app creation when discovery does not report PKCE methods. Selecting it declares that the server already supports PKCE with S256. Keep PKCE and S256 as protocol names.",
                              }),
                            ],
                          }),
                          (0, i.jsxs)(B.AM, {
                            children: [
                              (0, i.jsx)(B.Wv, {
                                asChild: !0,
                                children: (0, i.jsx)(x.$, {
                                  type: "button",
                                  "aria-label": eq.formatMessage({
                                    id: "plugins.create.oauth.pkceSupport.infoLabel",
                                    defaultMessage: "About PKCE support",
                                    description:
                                      "Accessible label for the information popover beside the PKCE support checkbox in advanced OAuth settings for custom MCP app creation.",
                                  }),
                                  color: "ghostTertiary",
                                  size: "inline",
                                  children: (0, i.jsx)(b.ehD, {}),
                                }),
                              }),
                              (0, i.jsx)(B.hl, {
                                children: (0, i.jsx)(h.A, {
                                  id: "plugins.create.oauth.pkceSupport.description",
                                  defaultMessage:
                                    "MCP requires the authorization server to support PKCE with S256. Select this only if your server supports it. This setting cannot add server support; OAuth sign-in may fail if it’s unsupported.",
                                  description:
                                    "Information popover for the manual PKCE checkbox in custom MCP app creation. Explains that selecting the checkbox declares existing server support, cannot enable support on the server, and may lead to failed OAuth sign-in if the declaration is incorrect. Keep MCP, OAuth, PKCE, and S256 as protocol names.",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                })),
            (eR[122] = eq),
            (eR[123] = ez),
            (eR[124] = eT),
            (eR[125] = eg))
          : (eg = eR[125]),
        eR[126] === Symbol.for("react.memo_cache_sentinel")
          ? ((em = (0, i.jsx)(M.X.Header, {
              size: "compact",
              spacing: "compact",
              title: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.oidcTitle",
                defaultMessage: "OpenID support",
                description: "Section title for OpenID Connect fields.",
              }),
              subtitle: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.oidcSectionDescription",
                defaultMessage:
                  "OpenID Connect (OIDC) lets ChatGPT fetch the authenticated user's email for authorization domain claiming.",
                description: "Helper text shown under the OpenID support section title.",
              }),
            })),
            (eR[126] = em))
          : (em = eR[126]),
        eR[127] !== eL || eR[128] !== eT.config.oidc_configuration_url
          ? ((ef = eL || !eT.config.oidc_configuration_url?.trim()),
            (eR[127] = eL),
            (eR[128] = eT.config.oidc_configuration_url),
            (eR[129] = ef))
          : (ef = eR[129]),
        eR[130] !== eT.config.oidc_configuration_url || eR[131] !== eT.oidcEnabled
          ? ((ex = !!eT.config.oidc_configuration_url?.trim() && eT.oidcEnabled),
            (eR[130] = eT.config.oidc_configuration_url),
            (eR[131] = eT.oidcEnabled),
            (eR[132] = ex))
          : (ex = eR[132]),
        eR[133] !== ez || eR[134] !== eT
          ? ((e_ = (e) => ez({ ...eT, oidcEnabled: e })), (eR[133] = ez), (eR[134] = eT), (eR[135] = e_))
          : (e_ = eR[135]),
        eR[136] !== ef || eR[137] !== ex || eR[138] !== e_
          ? ((ev = (0, i.jsx)(L.S, { disabled: ef, checked: ex, onCheckedChange: e_ })),
            (eR[136] = ef),
            (eR[137] = ex),
            (eR[138] = e_),
            (eR[139] = ev))
          : (ev = eR[139]),
        eR[140] === Symbol.for("react.memo_cache_sentinel")
          ? ((eb = (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.oidcEnabled",
              defaultMessage: "OIDC enabled",
              description:
                "Checkbox to enable OpenID Connect profile support for a custom MCP app. Requires an OIDC configuration URL.",
            })),
            (eR[140] = eb))
          : (eb = eR[140]),
        eR[141] !== ev
          ? ((eC = (0, i.jsxs)("label", { className: "relative flex items-center gap-2", children: [ev, eb] })),
            (eR[141] = ev),
            (eR[142] = eC))
          : (eC = eR[142]),
        eR[143] !== eT.config.oidc_configuration_url
          ? ((ey = eT.config.oidc_configuration_url?.trim()
              ? (0, i.jsx)("p", {
                  className: "text-xs text-secondary",
                  children: (0, i.jsx)(h.A, {
                    id: "plugins.create.oauth.oidcEnabledDescription",
                    defaultMessage: "If enabled, ChatGPT will try to request the OpenID scopes listed below.",
                    description: "Helper text explaining why enabling OIDC is useful in the advanced settings panel.",
                  }),
                })
              : null),
            (eR[143] = eT.config.oidc_configuration_url),
            (eR[144] = ey))
          : (ey = eR[144]),
        eR[145] !== eT.config.oidc_configuration_url || eR[146] !== eT.discovered
          ? ((eM =
              !eT.config.oidc_configuration_url?.trim() && eT.discovered
                ? (0, i.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, i.jsx)(h.A, {
                      id: "plugins.create.oauth.oidcUnavailableDescription",
                      defaultMessage:
                        "This server did not advertise an OIDC configuration URL, so OpenID support is unavailable.",
                      description:
                        "Helper text shown when OIDC cannot be enabled because the config URL is unavailable.",
                    }),
                  })
                : null),
            (eR[145] = eT.config.oidc_configuration_url),
            (eR[146] = eT.discovered),
            (eR[147] = eM))
          : (eM = eR[147]),
        eR[148] === Symbol.for("react.memo_cache_sentinel")
          ? ((ej = [
              "oidc_configuration_url",
              (0, i.jsx)(
                h.A,
                {
                  id: "plugins.create.oauth.oidcConfig",
                  defaultMessage: "OIDC configuration URL",
                  description: "Editable OpenID Connect discovery document URL in custom MCP app creation.",
                },
                "config",
              ),
            ]),
            (eR[148] = ej))
          : (ej = eR[148]),
        eR[149] === Symbol.for("react.memo_cache_sentinel")
          ? ((eA = [
              ej,
              [
                "oidc_userinfo_endpoint",
                (0, i.jsx)(
                  h.A,
                  {
                    id: "plugins.create.oauth.oidcUserinfo",
                    defaultMessage: "OIDC userinfo endpoint",
                    description: "Editable OpenID Connect user profile endpoint in custom MCP app creation.",
                  },
                  "userinfo",
                ),
              ],
            ]),
            (eR[149] = eA))
          : (eA = eR[149]),
        eR[150] !== ez || eR[151] !== eF || eR[152] !== eT
          ? ((ew = eA.map((e) => {
              let [t, a] = e
              return (0, i.jsxs)(
                "label",
                {
                  className: "flex flex-col gap-1",
                  children: [
                    a,
                    (0, i.jsx)(C.pd, {
                      placeholder: eF,
                      type: "url",
                      value: eT.config[t] ?? "",
                      onChange: (e) => ez({ ...eT, config: { ...eT.config, [t]: e.target.value } }),
                    }),
                  ],
                },
                t,
              )
            })),
            (eR[150] = ez),
            (eR[151] = eF),
            (eR[152] = eT),
            (eR[153] = ew))
          : (ew = eR[153]),
        eR[154] === Symbol.for("react.memo_cache_sentinel")
          ? ((eP = (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.oidcScopes",
              defaultMessage: "OIDC scopes supported",
              description:
                "Editable OpenID Connect scopes for a custom MCP app. Accepts one scope per line or comma-separated scopes.",
            })),
            (eR[154] = eP))
          : (eP = eR[154]),
        eR[155] !== ez || eR[156] !== eT
          ? ((ek = (e) => ez({ ...eT, oidcScopes: e.target.value })), (eR[155] = ez), (eR[156] = eT), (eR[157] = ek))
          : (ek = eR[157]),
        eR[158] !== eH || eR[159] !== ek || eR[160] !== eT.oidcScopes
          ? ((eS = (0, i.jsxs)("label", {
              className: "flex flex-col gap-1",
              children: [eP, (0, i.jsx)(C.TM, { rows: 3, placeholder: eH, value: eT.oidcScopes, onChange: ek })],
            })),
            (eR[158] = eH),
            (eR[159] = ek),
            (eR[160] = eT.oidcScopes),
            (eR[161] = eS))
          : (eS = eR[161]),
        eR[162] !== eC || eR[163] !== ey || eR[164] !== eM || eR[165] !== ew || eR[166] !== eS
          ? ((eD = (0, i.jsx)(j.t, {
              variant: "form",
              dividers: !1,
              children: (0, i.jsxs)("div", {
                className: "flex flex-col gap-3 p-4",
                children: [em, eC, ey, eM, ew, eS],
              }),
            })),
            (eR[162] = eC),
            (eR[163] = ey),
            (eR[164] = eM),
            (eR[165] = ew),
            (eR[166] = eS),
            (eR[167] = eD))
          : (eD = eR[167]),
        eR[168] !== eL || eR[169] !== q || eR[170] !== er || eR[171] !== eh || eR[172] !== eg || eR[173] !== eD
          ? ((eO = (0, i.jsxs)("fieldset", {
              disabled: eL,
              className: "flex min-w-0 flex-col gap-4 text-sm",
              children: [q, er, eh, eg, eD],
            })),
            (eR[168] = eL),
            (eR[169] = q),
            (eR[170] = er),
            (eR[171] = eh),
            (eR[172] = eg),
            (eR[173] = eD),
            (eR[174] = eO))
          : (eO = eR[174]),
        eO
      )
    }
    function W(e) {
      return (0, i.jsx)(z.G, {
        href: "https://developers.openai.com/apps-sdk/build/auth/",
        openTarget: "external-browser",
        initiator: "open_in_browser_bridge",
        children: e,
      })
    }
    function Z(e) {
      return (0, i.jsx)(z.G, {
        href: "https://developers.openai.com/apps-sdk/reference/#tool-descriptor-parameters",
        openTarget: "external-browser",
        initiator: "open_in_browser_bridge",
        children: e,
      })
    }
    function Y(e) {
      return (0, i.jsx)(z.G, {
        href: "https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization#client-registration-approaches",
        openTarget: "external-browser",
        initiator: "open_in_browser_bridge",
        children: e,
      })
    }
    function V(e) {
      let t,
        a,
        S,
        D,
        O,
        T,
        L,
        z,
        H,
        F,
        G,
        B,
        $,
        J,
        W,
        Z,
        Y,
        V,
        Q,
        ee,
        et,
        ea,
        ei,
        en,
        er,
        es,
        eo,
        el,
        ec,
        ed,
        eu,
        ep,
        eh,
        eg,
        em,
        ef,
        ex,
        e_ = (0, n.c)(192),
        {
          accountId: ev,
          initialMode: eb,
          canUploadArchive: eC,
          canCreateMcpApp: ey,
          onClose: eM,
          onArchiveCreated: ej,
          onAppCreated: eA,
          onAppConnected: ew,
        } = e,
        eP = (0, p.A)(),
        ek = (0, A.Fj)("73506792"),
        eS = E.H.parse(ek.value.max_archive_admission_bytes),
        eD = (0, A.Zj)("3463396747"),
        eO = (0, A.Zj)("2496729599"),
        eR = c.iwv,
        eE = (0, l.Ul)(m.tT),
        [eI, eU] = (0, d.useState)(eb),
        [eN, eT] = (0, d.useState)(null),
        [eL, ez] = (0, d.useState)(!1),
        [eK, eq] = (0, d.useState)(""),
        [eH, eF] = (0, d.useState)(""),
        [eG, eB] = (0, d.useState)("url"),
        [e$, eJ] = (0, d.useState)(""),
        [eX, eW] = (0, d.useState)(""),
        [eZ, eY] = (0, d.useState)("OAUTH")
      eD || "API_KEY" !== eZ || eY("OAUTH")
      let [eV, eQ] = (0, d.useState)("BEARER"),
        [e1, e0] = (0, d.useState)(""),
        [e2, e4] = (0, d.useState)(!1),
        [e3, e5] = (0, d.useState)(null),
        e6 = (0, d.useId)(),
        [e7, e9] = (0, d.useState)(null),
        [e8, te] = (0, d.useState)(null),
        [tt, ta] = (0, d.useState)(!1),
        [ti, tn] = (0, d.useState)(null)
      e_[0] !== ev || e_[1] !== eG || e_[2] !== eX || e_[3] !== e$
        ? ((t = JSON.stringify([ev, eG, "url" === eG ? e$.trim() : eX.trim()])),
          (e_[0] = ev),
          (e_[1] = eG),
          (e_[2] = eX),
          (e_[3] = e$),
          (e_[4] = t))
        : (t = e_[4])
      let tr = t,
        ts = (0, U.cz)(eG, e$, eX),
        to = "OAUTH" === eZ || "MIXED" === eZ,
        {
          data: tl,
          isFetching: tc,
          isError: td,
          refetch: tu,
        } = (0, r.I)({
          queryKey: ["plugins", "mcp-oauth-config", ev, ts],
          enabled: "mcp" === eI && to && e2 && null != ts,
          queryFn: (e) => {
            let { signal: t } = e
            if (null == ts) throw new U.rw("invalid-target")
            return (0, U.BG)(ev, ts, t)
          },
          staleTime: P.D.FIVE_MINUTES,
          retry: !1,
          refetchOnWindowFocus: !1,
        })
      e_[5] !== tr || e_[6] !== tl || e_[7] !== e7
        ? ((a = e7?.key === tr ? e7.value : (0, U.rX)(tl ?? null)),
          (e_[5] = tr),
          (e_[6] = tl),
          (e_[7] = e7),
          (e_[8] = a))
        : (a = e_[8])
      let tp = a,
        th = e3 === tr && (void 0 !== tl || td || e7?.key === tr),
        tg = null != ts && "mcp_url" in ts ? new URL(ts.mcp_url).origin : null
      e_[9] !== ev || e_[10] !== tg
        ? ((S = ["plugins", "mcp-oauth-client", ev, tg]), (e_[9] = ev), (e_[10] = tg), (e_[11] = S))
        : (S = e_[11])
      let tm = "mcp" === eI && to && null != tg
      ;(e_[12] !== ev || e_[13] !== tg
        ? ((D = (e) => {
            let { signal: t } = e
            return null != tg && (0, U.$K)(ev, tg, t)
          }),
          (e_[12] = ev),
          (e_[13] = tg),
          (e_[14] = D))
        : (D = e_[14]),
        e_[15] !== S || e_[16] !== tm || e_[17] !== D
          ? ((O = {
              queryKey: S,
              enabled: tm,
              queryFn: D,
              staleTime: P.D.FIVE_MINUTES,
              retry: !1,
              refetchOnWindowFocus: !1,
            }),
            (e_[15] = S),
            (e_[16] = tm),
            (e_[17] = D),
            (e_[18] = O))
          : (O = e_[18]))
      let { data: tf, isFetching: tx } = (0, r.I)(O)
      e_[19] !== tx ||
      e_[20] !== eG ||
      e_[21] !== th ||
      e_[22] !== tf ||
      e_[23] !== eO ||
      e_[24] !== to ||
      e_[25] !== tp
        ? ((T =
            to &&
            th &&
            "USER_DEFINED" === (0, U.u_)(tp.config, tp.clientMode) &&
            !tp.clientId.trim() &&
            (!!tp.clientSecret.trim() ||
              (eO && "private_key_jwt" === tp.tokenAuthMethod) ||
              tx ||
              !1 === tf ||
              "tunnel" === eG)),
          (e_[19] = tx),
          (e_[20] = eG),
          (e_[21] = th),
          (e_[22] = tf),
          (e_[23] = eO),
          (e_[24] = to),
          (e_[25] = tp),
          (e_[26] = T))
        : (T = e_[26])
      let t_ = T,
        tv = ti === tr,
        [tb, tC] = (0, d.useState)(null)
      e_[27] === Symbol.for("react.memo_cache_sentinel") ? ((L = { hostId: eR }), (e_[27] = L)) : (L = e_[27])
      let { handleAppConnectOAuthStarted: ty, handleAppConnected: tM } = (0, g.t)(L),
        tj = (0, s.n)({
          mutationFn: () => {
            if (null == eN) throw Error("Choose a plugin archive")
            return (0, k.v1)(ev, eN, eS)
          },
          onSuccess: ej,
        })
      ;(e_[28] !== ev ||
      e_[29] !== eV ||
      e_[30] !== eZ ||
      e_[31] !== eG ||
      e_[32] !== eH ||
      e_[33] !== th ||
      e_[34] !== tf ||
      e_[35] !== e1 ||
      e_[36] !== e8 ||
      e_[37] !== eO ||
      e_[38] !== eK ||
      e_[39] !== tp ||
      e_[40] !== eX ||
      e_[41] !== e$
        ? ((z = () => {
            let e = (0, U.cz)(eG, e$, eX)
            if (null == e) throw new U.rw("invalid-target")
            return (0, U.Qq)({
              allowPrivateKeyJwt: eO,
              accountId: ev,
              target: e,
              name: eK,
              description: eH,
              icon: e8,
              authentication: eZ,
              apiKeyHeader: eV,
              customHeaderName: e1,
              oauthSettings: th ? tp : void 0,
              hasPreconfiguredOAuthClient: tf,
            })
          }),
          (e_[28] = ev),
          (e_[29] = eV),
          (e_[30] = eZ),
          (e_[31] = eG),
          (e_[32] = eH),
          (e_[33] = th),
          (e_[34] = tf),
          (e_[35] = e1),
          (e_[36] = e8),
          (e_[37] = eO),
          (e_[38] = eK),
          (e_[39] = tp),
          (e_[40] = eX),
          (e_[41] = e$),
          (e_[42] = z))
        : (z = e_[42]),
        e_[43] !== eA
          ? ((H = async (e) => {
              ;(tC(e), await eA(e))
            }),
            (e_[43] = eA),
            (e_[44] = H))
          : (H = e_[44]),
        e_[45] !== z || e_[46] !== H
          ? ((F = { mutationFn: z, onSuccess: H }), (e_[45] = z), (e_[46] = H), (e_[47] = F))
          : (F = e_[47]))
      let tA = (0, s.n)(F),
        tw = tj.isPending || tA.isPending
      e_[48] === Symbol.for("react.memo_cache_sentinel") ? ((G = () => ez(!0)), (e_[48] = G)) : (G = e_[48])
      let {
          getRootProps: tP,
          getInputProps: tk,
          inputRef: tS,
          isDragActive: tD,
          open: tO,
        } = (0, u.V)({
          multiple: !1,
          noClick: !0,
          noKeyboard: !0,
          disabled: tw || !eC,
          accept: { "application/zip": [".zip"], "application/gzip": [".tar.gz", ".tgz"] },
          onDrop: (e, t) => {
            if (!tR.current?.isConnected || tR.current.disabled) return
            let a = e[0],
              i = t.length > 0 || null == a || null != (0, k.QZ)(a, eS)
            ;(ez(i), eT(i ? null : a), tj.reset())
          },
          onError: G,
        }),
        tR = tS
      e_[49] !== ev ? ((B = ["plugins", "mcp-tunnels", ev]), (e_[49] = ev), (e_[50] = B)) : (B = e_[50])
      let tE = "mcp" === eI && "tunnel" === eG
      ;(e_[51] !== ev ? (($ = () => (0, U.ev)(ev)), (e_[51] = ev), (e_[52] = $)) : ($ = e_[52]),
        e_[53] !== B || e_[54] !== tE || e_[55] !== $
          ? ((J = { queryKey: B, enabled: tE, queryFn: $, staleTime: P.D.ONE_MINUTE }),
            (e_[53] = B),
            (e_[54] = tE),
            (e_[55] = $),
            (e_[56] = J))
          : (J = e_[56]))
      let { data: tI, isError: tU, refetch: tN } = (0, r.I)(J)
      e_[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = (e, t) => {
            let a = e[0],
              i = t.length > 0 || null == a || !(0, U.DS)(a)
            ;(ta(i), te(i ? null : a))
          }),
          (e_[57] = W))
        : (W = e_[57])
      let tT = W
      ;(e_[58] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = { "image/png": [".png"] }), (e_[58] = Z))
        : (Z = e_[58]),
        e_[59] === Symbol.for("react.memo_cache_sentinel") ? ((Y = () => ta(!0)), (e_[59] = Y)) : (Y = e_[59]))
      let {
          getRootProps: tL,
          getInputProps: tz,
          inputRef: tK,
          open: tq,
        } = (0, u.V)({
          multiple: !1,
          noClick: !0,
          noKeyboard: !0,
          disabled: tw,
          accept: Z,
          onDrop: (e, t) => {
            tH.current?.isConnected && !tH.current?.disabled && tT(e, t)
          },
          onError: Y,
        }),
        tH = tK
      if (eE !== ev) return null
      if (null != tb) {
        let e,
          t,
          a,
          n,
          r,
          s = tb.logo_url ?? null,
          o = tb.logo_url_dark ?? null
        return (
          e_[60] !== tb.description || e_[61] !== tb.id || e_[62] !== tb.name || e_[63] !== s || e_[64] !== o
            ? ((e = (0, f.w)({
                id: tb.id,
                name: tb.name,
                description: tb.description,
                iconUrl: s,
                iconUrlDark: o,
                distributionChannel: null,
                installUrl: null,
                pluginDisplayNames: [],
                toolSummaries: null,
              })),
              (e_[60] = tb.description),
              (e_[61] = tb.id),
              (e_[62] = tb.name),
              (e_[63] = s),
              (e_[64] = o),
              (e_[65] = e))
            : (e = e_[65]),
          e_[66] !== ev || e_[67] !== eE
            ? ((t = async () => eE === ev), (e_[66] = ev), (e_[67] = eE), (e_[68] = t))
            : (t = e_[68]),
          e_[69] !== tb.id || e_[70] !== tM || e_[71] !== ew
            ? ((a = async () => {
                ;(tM(tb.id), await ew())
              }),
              (e_[69] = tb.id),
              (e_[70] = tM),
              (e_[71] = ew),
              (e_[72] = a))
            : (a = e_[72]),
          e_[73] !== eM
            ? ((n = (e) => {
                e || eM()
              }),
              (e_[73] = eM),
              (e_[74] = n))
            : (n = e_[74]),
          e_[75] !== ty || e_[76] !== e || e_[77] !== t || e_[78] !== a || e_[79] !== n
            ? ((r = (0, i.jsx)(y.Z, {
                oauthReferrer: "plugin_create",
                app: e,
                hostId: eR,
                allowBrowserFallback: !0,
                beforeConnect: t,
                onOAuthStarted: ty,
                onConnected: a,
                onOpenChange: n,
              })),
              (e_[75] = ty),
              (e_[76] = e),
              (e_[77] = t),
              (e_[78] = a),
              (e_[79] = n),
              (e_[80] = r))
            : (r = e_[80]),
          r
        )
      }
      let tF = null != ts
      e_[81] !== th || e_[82] !== to || e_[83] !== tp
        ? ((V =
            to &&
            th &&
            (!tp.config.authorization_url.trim() ||
              !tp.config.token_url.trim() ||
              null == (0, U.cz)("url", tp.config.authorization_url, "") ||
              null == (0, U.cz)("url", tp.config.token_url, ""))),
          (e_[81] = th),
          (e_[82] = to),
          (e_[83] = tp),
          (e_[84] = V))
        : (V = e_[84])
      let tG = V,
        tB = "archive" === eI ? tj.error : tA.error,
        t$ = "mcp" === eI && to && e2 && null != ts,
        tJ = _.lG,
        tX = (t$ && "xxxwideTall") || ("mcp" === eI ? "wide" : "large")
      e_[85] !== tw || e_[86] !== eM
        ? ((Q = (e) => {
            e || tw || eM()
          }),
          (e_[85] = tw),
          (e_[86] = eM),
          (e_[87] = Q))
        : (Q = e_[87])
      let tW = "mcp" === eI ? "top" : "centered",
        tZ = !tw
      e_[88] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = { "aria-describedby": void 0 }), (e_[88] = ee))
        : (ee = e_[88])
      let tY = v.R4,
        tV = (t$ && "full") || ("archive" === eI ? "viewport" : "topPositioned")
      ;(e_[89] !== eV ||
      e_[90] !== tA ||
      e_[91] !== eN ||
      e_[92] !== tj ||
      e_[93] !== eZ ||
      e_[94] !== ey ||
      e_[95] !== eC ||
      e_[96] !== tc ||
      e_[97] !== e1 ||
      e_[98] !== t_ ||
      e_[99] !== tG ||
      e_[100] !== tw ||
      e_[101] !== eI ||
      e_[102] !== eK ||
      e_[103] !== tv ||
      e_[104] !== tF
        ? ((et = (e) => {
            ;(e.preventDefault(),
              !tw &&
                ("archive" === eI && null != eN && eC
                  ? tj.mutate()
                  : "mcp" === eI &&
                    ey &&
                    tv &&
                    tF &&
                    eK.trim() &&
                    !tG &&
                    !t_ &&
                    !tc &&
                    ("API_KEY" !== eZ || "CUSTOM_HEADER" !== eV || e1.trim()) &&
                    tA.mutate()))
          }),
          (e_[89] = eV),
          (e_[90] = tA),
          (e_[91] = eN),
          (e_[92] = tj),
          (e_[93] = eZ),
          (e_[94] = ey),
          (e_[95] = eC),
          (e_[96] = tc),
          (e_[97] = e1),
          (e_[98] = t_),
          (e_[99] = tG),
          (e_[100] = tw),
          (e_[101] = eI),
          (e_[102] = eK),
          (e_[103] = tv),
          (e_[104] = tF),
          (e_[105] = et))
        : (et = e_[105]),
        e_[106] !== eI
          ? ((ea = (0, i.jsx)(v.OO, {
              children: (0, i.jsx)(_.L3, {
                className: "heading-dialog font-semibold select-none",
                children:
                  "mcp" === eI
                    ? (0, i.jsx)(h.A, {
                        id: "plugins.create.mcpTitle",
                        defaultMessage: "Add custom MCP server",
                        description: "Title of the custom MCP server creation dialog",
                      })
                    : (0, i.jsx)(h.A, {
                        id: "plugins.create.title",
                        defaultMessage: "New Plugin",
                        description: "Title of the plugin creation dialog",
                      }),
              }),
            })),
            (e_[106] = eI),
            (e_[107] = ea))
          : (ea = e_[107]))
      let tQ = t$ && "flex-1 overflow-y-auto md:flex md:gap-6 md:overflow-hidden"
      e_[108] !== tQ ? ((ei = (0, o.A)("min-h-0 pt-3", tQ)), (e_[108] = tQ), (e_[109] = ei)) : (ei = e_[109])
      let t1 = t$ && "md:flex md:min-h-0 md:flex-1 md:flex-col"
      e_[110] !== t1 ? ((en = (0, o.A)("min-w-0", t1)), (e_[110] = t1), (e_[111] = en)) : (en = e_[111])
      let t0 = t$ && "md:flex-1 md:overflow-y-auto"
      e_[112] !== t0 ? ((er = (0, o.A)("min-h-0", t0)), (e_[112] = t0), (e_[113] = er)) : (er = e_[113])
      let t2 =
        "archive" === eI
          ? (0, i.jsxs)(v.OO, {
              className: "gap-4",
              spacing: "large",
              children: [
                (0, i.jsxs)("div", {
                  ...tP({
                    className: (0, o.A)(
                      "flex min-h-48 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-primary-outline px-4 py-8 text-center text-sm select-none",
                      tD ? "bg-codex-drop-overlay/80" : "bg-surface",
                    ),
                  }),
                  children: [
                    (0, i.jsx)("input", { ...tk({ hidden: !0, name: "plugin-archive" }) }),
                    null == eN
                      ? (0, i.jsx)(b._Ui, { className: "text-secondary" })
                      : (0, i.jsx)(b.o_G, { className: "text-secondary" }),
                    (0, i.jsxs)("div", {
                      className: "flex w-full min-w-0 flex-col gap-1",
                      children: [
                        null != eN
                          ? (0, i.jsx)("span", {
                              className: "w-full truncate font-semibold select-text",
                              children: eN.name,
                            })
                          : null,
                        null == eN && tD
                          ? (0, i.jsx)(h.A, {
                              id: "plugins.create.dropArchive",
                              defaultMessage: "Drop the plugin here…",
                              description:
                                "Prompt in the new plugin dialog while a user drags a local plugin archive over the drop area",
                            })
                          : null,
                        null != eN || tD
                          ? null
                          : (0, i.jsx)("span", {
                              className: "font-medium",
                              children: (0, i.jsx)(h.A, {
                                id: "plugins.create.archiveUploadPrompt",
                                defaultMessage: "Drag and drop your plugin here, or <upload>click to upload</upload>",
                                description:
                                  "Prompt in the new plugin dialog before an archive is selected. The upload tag is a clickable link that opens the local file picker.",
                                values: {
                                  upload: (e) =>
                                    (0, i.jsx)("button", {
                                      className:
                                        "cursor-interaction border-0 bg-transparent p-0 text-link-primary hover:underline disabled:cursor-default disabled:text-secondary disabled:no-underline",
                                      type: "button",
                                      disabled: tw || !eC,
                                      onClick: tO,
                                      children: e,
                                    }),
                                },
                              }),
                            }),
                        (0, i.jsx)("span", {
                          className: "text-secondary",
                          children: (0, i.jsx)(h.A, {
                            id: "plugins.create.archiveFormats",
                            defaultMessage: "Only .tar.gz, .tgz, and .zip archives are supported",
                            description:
                              "Helper text in the new plugin upload dialog listing the supported local archive file extensions",
                          }),
                        }),
                        (0, i.jsx)("span", {
                          className: "text-secondary",
                          children: (0, i.jsx)(h.A, {
                            id: "plugins.create.archiveLimitConfigured",
                            defaultMessage: "Maximum size: {sizeLimit}",
                            description:
                              "Size limit for plugin archives. sizeLimit is the formatted maximum size of the compressed archive, such as 100 MB.",
                            values: { sizeLimit: (0, w.z)(eS, eP) },
                          }),
                        }),
                      ],
                    }),
                    null != eN
                      ? (0, i.jsx)(x.$, {
                          type: "button",
                          color: "outlineGhost",
                          size: "dialogAction",
                          disabled: tw || !eC,
                          onClick: tO,
                          children: (0, i.jsx)(h.A, {
                            id: "plugins.create.chooseArchive",
                            defaultMessage: "Choose file",
                            description: "Open the file chooser for a plugin archive",
                          }),
                        })
                      : null,
                  ],
                }),
                eL
                  ? (0, i.jsx)("span", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, i.jsx)(h.A, {
                        id: "plugins.create.invalidArchiveWithLimit",
                        defaultMessage: "Choose a .zip, .tar.gz, or .tgz file no larger than {sizeLimit}",
                        description:
                          "Error for an invalid plugin archive. sizeLimit is the formatted maximum size of the compressed archive, such as 100 MB.",
                        values: { sizeLimit: (0, w.z)(eS, eP) },
                      }),
                    })
                  : null,
              ],
            })
          : (0, i.jsxs)(v.OO, {
              className: "gap-4 text-sm",
              children: [
                (0, i.jsxs)("div", {
                  ...tL({ className: "flex items-center gap-3" }),
                  children: [
                    (0, i.jsx)("input", { ...tz({ hidden: !0, name: "app-icon" }) }),
                    null,
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(x.$, {
                          color: "secondary",
                          onClick: tq,
                          disabled: tw,
                          children: (0, i.jsx)(h.A, {
                            id: "plugins.create.icon",
                            defaultMessage: "Choose icon",
                            description: "Select an optional PNG icon for a new MCP app",
                          }),
                        }),
                        (0, i.jsx)("span", {
                          className: "text-secondary",
                          children:
                            e8?.name ??
                            (0, i.jsx)(h.A, {
                              id: "plugins.create.iconHelp",
                              defaultMessage: "Optional PNG, up to 10 KB",
                              description: "MCP app icon format and size limit",
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                tt
                  ? (0, i.jsx)("span", {
                      role: "alert",
                      className: "text-danger",
                      children: (0, i.jsx)(h.A, {
                        id: "plugins.create.iconError",
                        defaultMessage: "Choose a PNG file no larger than 10 KB",
                        description: "MCP app icon validation error",
                      }),
                    })
                  : null,
                (0, i.jsxs)("label", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, i.jsx)(h.A, {
                      id: "plugins.create.name",
                      defaultMessage: "Name",
                      description: "Name of the MCP app",
                    }),
                    (0, i.jsx)(C.pd, {
                      required: !0,
                      disabled: tw,
                      placeholder: eP.formatMessage({
                        id: "plugins.create.namePlaceholder",
                        defaultMessage: "Custom Tool",
                        description: "Example name for a new custom MCP app.",
                      }),
                      value: eK,
                      onChange: (e) => eq(e.target.value),
                    }),
                  ],
                }),
                (0, i.jsxs)("label", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, i.jsx)(h.A, {
                      id: "plugins.create.description",
                      defaultMessage: "Description (optional)",
                      description: "Description of the MCP app",
                    }),
                    (0, i.jsx)(C.TM, {
                      disabled: tw,
                      variant: "compact",
                      autoResize: !0,
                      rows: 1,
                      placeholder: eP.formatMessage({
                        id: "plugins.create.descriptionPlaceholder",
                        defaultMessage: "Explain what it does in a few words",
                        description: "Placeholder asking for a short description of a custom MCP app.",
                      }),
                      value: eH,
                      onChange: (e) => eF(e.target.value),
                    }),
                  ],
                }),
                (0, i.jsx)(K, {
                  connection: eG,
                  isPending: tw,
                  onChange: (e) => {
                    ;(eB(e), e4(!1), e9(null), e5(null), tn(null))
                  },
                  children:
                    "url" === eG
                      ? (0, i.jsx)(C.pd, {
                          type: "url",
                          required: !0,
                          "aria-label": eP.formatMessage({
                            id: "plugins.create.serverUrl",
                            defaultMessage: "Server URL",
                            description: "Connect an MCP app using a server URL",
                          }),
                          value: e$,
                          disabled: tw,
                          placeholder: "https://example.com/mcp",
                          "aria-invalid": e$.length > 0 && !tF,
                          onChange: (e) => {
                            ;(eJ(e.target.value), e4(!1), e9(null), e5(null), tn(null))
                          },
                        })
                      : (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(C.pd, {
                              required: !0,
                              "aria-label": eP.formatMessage({
                                id: "plugins.create.tunnelId",
                                defaultMessage: "Tunnel ID",
                                description: "Identifier of the secure tunnel for the new MCP app",
                              }),
                              value: eX,
                              disabled: tw,
                              placeholder: "tunnel_...",
                              "aria-invalid": eX.length > 0 && !tF,
                              onChange: (e) => {
                                ;(eW(e.target.value), e4(!1), e9(null), e5(null), tn(null))
                              },
                            }),
                            tI?.length
                              ? (0, i.jsx)("div", {
                                  className: "flex flex-wrap gap-2",
                                  children: tI.map((e) =>
                                    (0, i.jsx)(
                                      x.$,
                                      {
                                        color: "secondary",
                                        onClick: () => {
                                          ;(eW(e.id), e4(!1), e9(null), e5(null), tn(null))
                                        },
                                        children: e.name || e.id,
                                      },
                                      e.id,
                                    ),
                                  ),
                                })
                              : null,
                            tU
                              ? (0, i.jsx)(x.$, {
                                  color: "secondary",
                                  onClick: () => void tN(),
                                  children: (0, i.jsx)(h.A, {
                                    id: "plugins.create.retryTunnels",
                                    defaultMessage: "Retry loading tunnels",
                                    description: "Retry fetching available MCP tunnels",
                                  }),
                                })
                              : null,
                          ],
                        }),
                }),
                (0, i.jsxs)("label", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, i.jsx)(h.A, {
                      id: "plugins.create.authentication",
                      defaultMessage: "Authentication",
                      description: "Authentication option for the MCP app",
                    }),
                    (0, i.jsxs)("select", {
                      className:
                        "h-9 rounded-md border border-primary-outline bg-primary-soft px-2.5 text-sm text-default",
                      value: eZ,
                      disabled: tw,
                      onChange: (e) => {
                        let t = e.target.value
                        ;("OAUTH" === t || "API_KEY" === t || "NONE" === t || "MIXED" === t) && eY(t)
                      },
                      children: [
                        (0, i.jsx)("option", {
                          value: "OAUTH",
                          children: eP.formatMessage({
                            id: "plugins.create.authOauth",
                            defaultMessage: "OAuth",
                            description: "OAuth authentication for an MCP app",
                          }),
                        }),
                        eD
                          ? (0, i.jsx)("option", {
                              value: "API_KEY",
                              children: eP.formatMessage({
                                id: "plugins.create.authApiKey",
                                defaultMessage: "API key",
                                description: "API key authentication for an MCP app",
                              }),
                            })
                          : null,
                        (0, i.jsx)("option", {
                          value: "NONE",
                          children: eP.formatMessage({
                            id: "plugins.create.authNone",
                            defaultMessage: "No authentication",
                            description: "An MCP app without authentication",
                          }),
                        }),
                        (0, i.jsx)("option", {
                          value: "MIXED",
                          children: eP.formatMessage({
                            id: "plugins.create.authMixed",
                            defaultMessage: "OAuth or no authentication",
                            description: "An MCP app with optional OAuth authentication",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                "API_KEY" === eZ
                  ? (0, i.jsxs)("label", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, i.jsx)(h.A, {
                          id: "plugins.create.apiKeyHeader",
                          defaultMessage: "API key header",
                          description: "Header type used to send an MCP app API key",
                        }),
                        (0, i.jsxs)("select", {
                          className:
                            "h-9 rounded-md border border-primary-outline bg-primary-soft px-2.5 text-sm text-default",
                          value: eV,
                          disabled: tw,
                          onChange: (e) => {
                            let t = e.target.value
                            ;("BEARER" === t || "BASIC" === t || "CUSTOM_HEADER" === t) && eQ(t)
                          },
                          children: [
                            (0, i.jsx)("option", {
                              value: "BEARER",
                              children: eP.formatMessage({
                                id: "plugins.create.headerBearer",
                                defaultMessage: "Bearer",
                                description: "Bearer header for an MCP API key",
                              }),
                            }),
                            (0, i.jsx)("option", {
                              value: "BASIC",
                              children: eP.formatMessage({
                                id: "plugins.create.headerBasic",
                                defaultMessage: "Basic",
                                description: "Basic header for an MCP API key",
                              }),
                            }),
                            (0, i.jsx)("option", {
                              value: "CUSTOM_HEADER",
                              children: eP.formatMessage({
                                id: "plugins.create.headerCustom",
                                defaultMessage: "Custom header",
                                description: "Custom header for an MCP API key",
                              }),
                            }),
                          ],
                        }),
                        "CUSTOM_HEADER" === eV
                          ? (0, i.jsx)(C.pd, {
                              required: !0,
                              disabled: tw,
                              value: e1,
                              onChange: (e) => e0(e.target.value),
                              placeholder: "X-API-Key",
                            })
                          : null,
                      ],
                    })
                  : null,
                to
                  ? (0, i.jsxs)(x.$, {
                      className: "justify-between text-start",
                      color: "outline",
                      size: "surveyCard",
                      radius: "large",
                      "aria-labelledby": `${e6}-trigger`,
                      "aria-describedby": `${e6}-description`,
                      "aria-expanded": e2,
                      "aria-controls": e6,
                      disabled: tw || !tF,
                      onClick: () => {
                        ;(e4(!e2), e5(tr))
                      },
                      children: [
                        (0, i.jsxs)("span", {
                          className: "flex min-w-0 flex-col gap-1",
                          children: [
                            (0, i.jsx)("span", {
                              id: `${e6}-trigger`,
                              className: "font-medium",
                              children: (0, i.jsx)(h.A, {
                                id: "plugins.create.advancedOauth",
                                defaultMessage: "Advanced OAuth settings",
                                description: "Expand advanced OAuth settings for the MCP app",
                              }),
                            }),
                            (0, i.jsx)("span", {
                              id: `${e6}-description`,
                              className: "text-xs text-secondary",
                              children: (0, i.jsx)(h.A, {
                                id: "plugins.create.oauth.advancedDescription",
                                defaultMessage:
                                  "Review discovered OAuth settings, or enter them manually, then choose a client setup method and configure default scopes",
                                description:
                                  "Helper text on the button that opens the advanced OAuth side panel when creating a custom MCP app.",
                              }),
                            }),
                          ],
                        }),
                        e2 ? (0, i.jsx)(b.Aq_, {}) : (0, i.jsx)(b.uM3, {}),
                      ],
                    })
                  : null,
                (0, i.jsx)(q, { trusted: tv, isPending: tw, onTrustedChange: (e) => tn(e ? tr : null) }),
              ],
            })
      ;(e_[114] !== tB || e_[115] !== eI
        ? ((es =
            null != tB
              ? (0, i.jsx)(v.OO, {
                  children: (0, i.jsx)("span", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: "archive" === eI ? (0, i.jsx)(R, { error: tB }) : (0, i.jsx)(N, { error: tB }),
                  }),
                })
              : null),
          (e_[114] = tB),
          (e_[115] = eI),
          (e_[116] = es))
        : (es = e_[116]),
        e_[117] !== er || e_[118] !== t2 || e_[119] !== es
          ? ((eo = (0, i.jsxs)("div", { className: er, children: [t2, es] })),
            (e_[117] = er),
            (e_[118] = t2),
            (e_[119] = es),
            (e_[120] = eo))
          : (eo = e_[120]))
      let t4 = "archive" === eI ? "large" : "default",
        t3 = "archive" === eI ? "dialogAction" : void 0
      return (
        e_[121] !== eV ||
        e_[122] !== eN ||
        e_[123] !== eZ ||
        e_[124] !== ey ||
        e_[125] !== eC ||
        e_[126] !== tc ||
        e_[127] !== e1 ||
        e_[128] !== t_ ||
        e_[129] !== tG ||
        e_[130] !== tw ||
        e_[131] !== eI ||
        e_[132] !== eK ||
        e_[133] !== tv ||
        e_[134] !== tF
          ? ((el =
              tw ||
              ("archive" === eI
                ? !eN || !eC
                : !ey ||
                  !eK.trim() ||
                  !tF ||
                  !tv ||
                  tG ||
                  t_ ||
                  tc ||
                  ("API_KEY" === eZ && "CUSTOM_HEADER" === eV && !e1.trim()))),
            (e_[121] = eV),
            (e_[122] = eN),
            (e_[123] = eZ),
            (e_[124] = ey),
            (e_[125] = eC),
            (e_[126] = tc),
            (e_[127] = e1),
            (e_[128] = t_),
            (e_[129] = tG),
            (e_[130] = tw),
            (e_[131] = eI),
            (e_[132] = eK),
            (e_[133] = tv),
            (e_[134] = tF),
            (e_[135] = el))
          : (el = e_[135]),
        e_[136] !== eI
          ? ((ec =
              "archive" === eI
                ? (0, i.jsx)(h.A, {
                    id: "plugins.create.addPlugin",
                    defaultMessage: "Add plugin",
                    description: "Create a new plugin from the selected archive",
                  })
                : (0, i.jsx)(h.A, {
                    id: "plugins.create.createApp",
                    defaultMessage: "Create as a plugin",
                    description: "Create the new MCP app",
                  })),
            (e_[136] = eI),
            (e_[137] = ec))
          : (ec = e_[137]),
        e_[138] !== tw || e_[139] !== t3 || e_[140] !== el || e_[141] !== ec
          ? ((ed = (0, i.jsx)(x.$, {
              type: "submit",
              color: "primary",
              size: t3,
              loading: tw,
              disabled: el,
              children: ec,
            })),
            (e_[138] = tw),
            (e_[139] = t3),
            (e_[140] = el),
            (e_[141] = ec),
            (e_[142] = ed))
          : (ed = e_[142]),
        e_[143] !== ey ||
        e_[144] !== eC ||
        e_[145] !== tw ||
        e_[146] !== eI ||
        e_[147] !== eM ||
        e_[148] !== eU ||
        e_[149] !== ed
          ? ((eu = (0, i.jsx)(I, {
              mode: eI,
              canCreateMcpApp: ey,
              canUploadArchive: eC,
              isPending: tw,
              onModeChange: eU,
              onClose: eM,
              submitButton: ed,
            })),
            (e_[143] = ey),
            (e_[144] = eC),
            (e_[145] = tw),
            (e_[146] = eI),
            (e_[147] = eM),
            (e_[148] = eU),
            (e_[149] = ed),
            (e_[150] = eu))
          : (eu = e_[150]),
        e_[151] !== t4 || e_[152] !== eu
          ? ((ep = (0, i.jsx)(v.OO, { spacing: t4, children: eu })), (e_[151] = t4), (e_[152] = eu), (e_[153] = ep))
          : (ep = e_[153]),
        e_[154] !== en || e_[155] !== eo || e_[156] !== ep
          ? ((eh = (0, i.jsxs)("div", { className: en, children: [eo, ep] })),
            (e_[154] = en),
            (e_[155] = eo),
            (e_[156] = ep),
            (e_[157] = eh))
          : (eh = e_[157]),
        e_[158] !== ev ||
        e_[159] !== e6 ||
        e_[160] !== tr ||
        e_[161] !== tl ||
        e_[162] !== tc ||
        e_[163] !== tf ||
        e_[164] !== tw ||
        e_[165] !== eO ||
        e_[166] !== td ||
        e_[167] !== tp ||
        e_[168] !== tu ||
        e_[169] !== e9 ||
        e_[170] !== t$ ||
        e_[171] !== ts
          ? ((eg = t$
              ? (0, i.jsx)("aside", {
                  id: e6,
                  className: "min-w-0 md:min-h-0 md:flex-1 md:overflow-y-auto",
                  children: (0, i.jsx)(j.t, {
                    variant: "muted",
                    dividers: !1,
                    children: (0, i.jsxs)("div", {
                      className: "flex flex-col gap-4 p-4",
                      children: [
                        (0, i.jsx)(M.X.Header, {
                          size: "compact",
                          title: (0, i.jsx)(h.A, {
                            id: "plugins.create.oauth.panelTitle",
                            defaultMessage: "OAuth advanced settings",
                            description: "Title for the OAuth advanced settings side panel.",
                          }),
                          subtitle: (0, i.jsx)(h.A, {
                            id: "plugins.create.oauth.panelDescription",
                            defaultMessage:
                              "Review the discovered OAuth settings, choose how ChatGPT should obtain an OAuth client, and configure default scopes before you create the connector.",
                            description:
                              "Helper text explaining that the OAuth advanced settings were populated from the MCP server.",
                          }),
                        }),
                        tc
                          ? (0, i.jsx)("p", {
                              role: "status",
                              children: (0, i.jsx)(h.A, {
                                id: "plugins.create.oauth.loading",
                                defaultMessage: "Discovering OAuth settings…",
                                description: "Loading status while reading a custom MCP server's OAuth metadata.",
                              }),
                            })
                          : null,
                        !tc && (td || null == tl)
                          ? (0, i.jsxs)("div", {
                              role: "alert",
                              className: "flex flex-col gap-2",
                              children: [
                                (0, i.jsx)(h.A, {
                                  id: "plugins.create.oauth.discoveryFailed",
                                  defaultMessage:
                                    "Couldn’t discover OAuth settings. Check the server URL and retry, or enter the settings manually",
                                  description:
                                    "Explains that custom MCP OAuth discovery failed and manual configuration remains available.",
                                }),
                                (0, i.jsx)(x.$, {
                                  color: "ghost",
                                  onClick: () => {
                                    ;(e9(null), tu())
                                  },
                                  children: (0, i.jsx)(h.A, {
                                    id: "plugins.create.oauth.retryDiscovery",
                                    defaultMessage: "Retry discovery",
                                    description: "Button to reload OAuth metadata for the custom MCP server.",
                                  }),
                                }),
                              ],
                            })
                          : null,
                        (0, i.jsx)(X, {
                          allowPrivateKeyJwt: eO,
                          accountId: ev,
                          target: ts,
                          hasPreconfiguredOAuthClient: tf,
                          value: tp,
                          disabled: tw || tc,
                          onChange: (e) => e9({ key: tr, value: e }),
                        }),
                      ],
                    }),
                  }),
                })
              : null),
            (e_[158] = ev),
            (e_[159] = e6),
            (e_[160] = tr),
            (e_[161] = tl),
            (e_[162] = tc),
            (e_[163] = tf),
            (e_[164] = tw),
            (e_[165] = eO),
            (e_[166] = td),
            (e_[167] = tp),
            (e_[168] = tu),
            (e_[169] = e9),
            (e_[170] = t$),
            (e_[171] = ts),
            (e_[172] = eg))
          : (eg = e_[172]),
        e_[173] !== ei || e_[174] !== eh || e_[175] !== eg
          ? ((em = (0, i.jsxs)("div", { className: ei, children: [eh, eg] })),
            (e_[173] = ei),
            (e_[174] = eh),
            (e_[175] = eg),
            (e_[176] = em))
          : (em = e_[176]),
        e_[177] !== tY || e_[178] !== tV || e_[179] !== et || e_[180] !== ea || e_[181] !== em
          ? ((ef = (0, i.jsxs)(tY, { as: "form", size: tV, onSubmit: et, children: [ea, em] })),
            (e_[177] = tY),
            (e_[178] = tV),
            (e_[179] = et),
            (e_[180] = ea),
            (e_[181] = em),
            (e_[182] = ef))
          : (ef = e_[182]),
        e_[183] !== tJ ||
        e_[184] !== tw ||
        e_[185] !== tX ||
        e_[186] !== Q ||
        e_[187] !== tW ||
        e_[188] !== tZ ||
        e_[189] !== ee ||
        e_[190] !== ef
          ? ((ex = (0, i.jsx)(tJ, {
              open: !0,
              size: tX,
              onOpenChange: Q,
              contentPosition: tW,
              showDialogClose: tZ,
              shouldIgnoreClickOutside: tw,
              contentProps: ee,
              children: ef,
            })),
            (e_[183] = tJ),
            (e_[184] = tw),
            (e_[185] = tX),
            (e_[186] = Q),
            (e_[187] = tW),
            (e_[188] = tZ),
            (e_[189] = ee),
            (e_[190] = ef),
            (e_[191] = ex))
          : (ex = e_[191]),
        ex
      )
    }
  },
  OwuR(e, t, a) {
    var i = a("ASxG"),
      n = a("rGp2"),
      r = a("HFSu"),
      s = a("eShZ")
    class o extends Error {
      code
      constructor(e) {
        ;(super(e), (this.code = e))
      }
    }
    let l = (e) => ({ [n.ok]: (0, n.MR)(), "ChatGPT-Account-Id": e })
    function c(e, t, a) {
      if ("tunnel" === e) {
        let e = a.trim()
        return /^tunnel_(?:[a-z0-9]{4}_)?[a-z0-9]{32}$/.test(e) ? { tunnel_id: e } : null
      }
      let i = t.trim()
      if (!/^https?:\/\/[^/?#\s@\\]+(?:[/?#]|$)/i.test(i) || /[\s\\]|\p{Cc}/u.test(i)) return null
      try {
        let e = new URL(i)
        return ("http:" !== e.protocol && "https:" !== e.protocol) || !e.hostname || e.username || e.password
          ? null
          : { mcp_url: i }
      } catch {
        return null
      }
    }
    function d(e) {
      return e.size <= 10240 && ("image/png" === e.type.toLowerCase() || e.name.toLowerCase().endsWith(".png"))
    }
    async function u(e, t, a) {
      let i = await r.CodexRequest.safePost("/aip/connectors/mcp/oauth_config", {
        surface: "plugin_management",
        additionalHeaders: l(e),
        requestBody: t,
        expectedErrorStatuses: [400, 401, 403, 404, 413, 422, 424, 429],
        signal: a,
      }).catch((e) => {
        if (e instanceof s.fk && 404 === e.status) return null
        throw e
      })
      return i?.oauth_config ?? null
    }
    function p(e, t) {
      return "USER_DEFINED" === t ||
        ("DCR" === t && e?.registration_url?.trim()) ||
        ("CIMD" === t && e?.client_id_metadata_document_supported)
        ? t
        : e?.client_id_metadata_document_supported
          ? "CIMD"
          : e?.registration_url?.trim()
            ? "DCR"
            : "USER_DEFINED"
    }
    function h(e, t = !1) {
      return [
        ...new Set(
          [
            ...(e.config.token_endpoint_auth_methods_supported ?? []),
            "none",
            "client_secret_post",
            "client_secret_basic",
            ...(t && !e.discovered ? ["private_key_jwt"] : []),
          ]
            .map((e) => e.trim())
            .filter(Boolean),
        ),
      ]
        .filter((e) => t || "private_key_jwt" !== e)
        .filter(
          (a) =>
            !e.clientSecret.trim() ||
            "none" === a ||
            "client_secret_post" === a ||
            "client_secret_basic" === a ||
            (t && "private_key_jwt" === a),
        )
        .sort((e, t) => ("none" === e ? -1 : "none" === t ? 1 : e.localeCompare(t)))
    }
    function g(e, t = !1) {
      let a = h(e, t)
      return "private_key_jwt" === e.tokenAuthMethod && a.includes("private_key_jwt")
        ? "private_key_jwt"
        : e.clientSecret.trim()
          ? "client_secret_basic" === e.tokenAuthMethod
            ? "client_secret_basic"
            : "client_secret_post"
          : a.includes(e.tokenAuthMethod)
            ? e.tokenAuthMethod
            : "none"
    }
    async function m(e, t, a) {
      let { oauth_clients: i } = await r.CodexRequest.safeGet("/aip/connectors/oauth_clients", {
        surface: "plugin_management",
        additionalHeaders: l(e),
        parameters: { query: { service: t } },
        signal: a,
      })
      return !!i?.length
    }
    function f(e) {
      return [
        ...new Set(
          e
            .split(/\r?\n|,/)
            .map((e) => e.trim())
            .filter(Boolean),
        ),
      ]
    }
    a.d(
      t,
      {},
      {
        $K: m,
        BG: u,
        DS: d,
        Lx: g,
        Qq: async function (e) {
          if (null != e.icon && !d(e.icon)) throw new o("invalid-icon")
          let t = { supported_auth: [] }
          if (
            (("NONE" === e.authentication || "MIXED" === e.authentication) && t.supported_auth?.push({ type: "NONE" }),
            "API_KEY" === e.authentication &&
              t.supported_auth?.push({
                type: "API_KEY",
                header_scheme:
                  "CUSTOM_HEADER" === e.apiKeyHeader
                    ? { type: "CUSTOM_HEADER", header_name: e.customHeaderName.trim() }
                    : { type: e.apiKeyHeader },
              }),
            "OAUTH" === e.authentication || "MIXED" === e.authentication)
          ) {
            let a = e.oauthSettings,
              i = a?.supportsPkceS256 && !a.config.pkce_methods?.length,
              n =
                null == a
                  ? await u(e.accountId, e.target)
                  : {
                      ...a.config,
                      pkce_required: !!i || a.config.pkce_required,
                      pkce_methods: i ? ["S256"] : a.config.pkce_methods,
                      authorization_url: a.config.authorization_url.trim(),
                      token_url: a.config.token_url.trim(),
                      registration_url: a.config.registration_url?.trim() || null,
                      authorization_server_base: a.config.authorization_server_base?.trim() || null,
                      authorization_response_iss_parameter_supported:
                        !0 === a.config.authorization_response_iss_parameter_supported
                          ? !!a.config.authorization_server_base?.trim()
                          : a.config.authorization_response_iss_parameter_supported,
                      resource: a.config.resource?.trim() || null,
                      base_scopes: f(a.baseScopes),
                      oidc_configuration_url: a.config.oidc_configuration_url?.trim() || null,
                      oidc_userinfo_endpoint: a.config.oidc_userinfo_endpoint?.trim() || null,
                      oidc_scopes_supported: f(a.oidcScopes),
                      token_endpoint_auth_methods_supported: a.discovered
                        ? a.config.token_endpoint_auth_methods_supported
                        : [a.tokenAuthMethod],
                      supports_domain_restriction: !1,
                    }
            if (null == n) throw new o("oauth-unavailable")
            if (!n.authorization_url || !n.token_url) throw new o("invalid-oauth-endpoints")
            for (let e of [
              n.authorization_url,
              n.token_url,
              n.registration_url,
              n.authorization_server_base,
              n.oidc_configuration_url,
              n.oidc_userinfo_endpoint,
            ])
              if (e && null == c("url", e, "")) throw new o("invalid-oauth-url")
            t.supported_auth?.push(n)
            let r = p(n, a?.clientMode)
            if ("USER_DEFINED" === r) {
              let i = a ? g(a, e.allowPrivateKeyJwt) : "none",
                n = e.allowPrivateKeyJwt && "private_key_jwt" === i
              if (n && !a?.privateKeyPem.trim()) throw new o("oauth-private-key-required")
              if (a?.clientId.trim())
                t.oauth_client_params = {
                  client_id: a.clientId.trim(),
                  client_secret: n
                    ? JSON.stringify({
                        private_key_pem: a.privateKeyPem.trim(),
                        private_key_jwt_kid: a.privateKeyJwtKid.trim() || void 0,
                      })
                    : a.clientSecret.trim(),
                  token_endpoint_auth_method: (function (e) {
                    switch (e) {
                      case "none":
                      case "client_secret_post":
                      case "client_secret_basic":
                      case "private_key_jwt":
                        return e
                      default:
                        return
                    }
                  })(i),
                }
              else {
                if (n || a?.clientSecret.trim()) throw new o("oauth-client-id-required")
                let t = "mcp_url" in e.target ? new URL(e.target.mcp_url).origin : null
                if (!(e.hasPreconfiguredOAuthClient ?? (null != t && (await m(e.accountId, t)))))
                  throw new o("oauth-client-id-required")
              }
            }
            if (null != a) {
              ;((t.use_cimd = "USER_DEFINED" === r ? void 0 : "CIMD" === r),
                (t.oidc_enabled = !!n.oidc_configuration_url && a.oidcEnabled))
              let e = f(a.scopes)
              t.default_scopes = a.discovered ? e.filter((e) => n.scopes_supported?.includes(e)) : e
            }
          }
          let a = e.icon,
            i =
              null == a
                ? null
                : await new Promise((e, t) => {
                    let i = new FileReader()
                    ;((i.onload = () => ("string" == typeof i.result ? e(i.result) : t(new o("icon-read-failed")))),
                      (i.onerror = () => t(new o("icon-read-failed"))),
                      i.readAsDataURL(a))
                  }),
            { connector: n } = await r.CodexRequest.safePost("/aip/connectors/mcp", {
              surface: "plugin_management",
              additionalHeaders: l(e.accountId),
              requestBody: {
                name: e.name.trim(),
                description: e.description.trim(),
                ...e.target,
                logo_url: i,
                auth_request: t,
              },
              expectedErrorStatuses: [400, 401, 403, 409, 413, 422, 424, 429],
            })
          return n
        },
        UK: f,
        Xw: function (e, t) {
          let a = new URL(e),
            i = "http:" === a.protocol || "https:" === a.protocol ? a.origin : "https://chatgpt.com"
          return {
            redirect: new URL(
              null == t ? "/connector_platform_oauth_redirect" : `/connector/oauth/${encodeURIComponent(t)}`,
              i,
            ).href,
            metadata: new URL(null == t ? "/oauth/client.json" : `/oauth/${encodeURIComponent(t)}/client.json`, i).href,
          }
        },
        Yr: function (e) {
          let t
          if (e instanceof o) return e.code
          if (!(e instanceof s.fk)) return null
          if ("network" === e.errorKind) return "network-error"
          if ("tunnel_client_network_access_denied" === e.errorCode) return "tunnel-network-denied"
          try {
            t = i.object({ detail: i.unknown() }).parse(JSON.parse(e.message)).detail
          } catch {}
          let a = i.union([i.string(), i.object({ message: i.string() }).transform((e) => e.message)]).safeParse(t).data
          if (403 === e.status && "Developer mode is required" === a) return "developer-mode-required"
          if (409 === e.status && null != a && /^Connector with name '[\s\S]*' already exists$/.test(a))
            return "name-already-exists"
          if (
            400 === e.status &&
            null != a &&
            ("Failed to resolve OAuth client" === a ||
              /^The server \S+ doesn't support (usable CIMD or RFC 7591 Dynamic Client Registration|RFC 7591 Dynamic Client Registration)$/.test(
                a,
              ))
          )
            return "oauth-registration-failed"
          let n = i
            .object({
              type: i.literal("mcp_error"),
              kind: i.enum(["http", "network", "json_rpc", "invalid_response"]),
              upstream_status: i.number().int().min(100).max(599).nullish(),
              upstream_error_code: i.string().nullish(),
            })
            .safeParse(t)
          if (424 === e.status && n.success) {
            switch (n.data.upstream_error_code) {
              case "tunnel_client_network_access_denied":
                return "tunnel-network-denied"
              case "tunnel_client_not_seen":
              case "tunnel_client_not_connected":
                return "tunnel-unavailable"
            }
            if ("network" === n.data.kind) return "server-unreachable"
            if ("http" === n.data.kind || "invalid_response" === n.data.kind) {
              switch (n.data.upstream_status) {
                case 401:
                case 403:
                  return "server-auth-rejected"
                case 404:
                  return "server-not-found"
                case 413:
                  return "request-too-large"
                case 429:
                  return "rate-limited"
              }
              if (null != n.data.upstream_status && n.data.upstream_status >= 500) return "service-unavailable"
            }
            return "invalid-server-response"
          }
          switch (e.status) {
            case 400:
            case 422:
              return "invalid-configuration"
            case 401:
              return "sign-in-required"
            case 403:
              return "custom-app-not-allowed"
            case 413:
              return "request-too-large"
            case 429:
              return "rate-limited"
          }
          return e.status >= 500 && e.status <= 599 ? "service-unavailable" : null
        },
        cK: h,
        cz: c,
        ev: async function (e) {
          return (
            (
              await r.CodexRequest.safeGet("/aip/connectors/mcp/tunnels", {
                surface: "plugin_management",
                additionalHeaders: l(e),
              })
            ).tunnels ?? []
          )
        },
        rX: function (e) {
          let t = p(e),
            a = (e?.token_endpoint_auth_methods_supported ?? [])
              .map((e) => e.trim())
              .filter(Boolean)
              .sort((e, t) => e.localeCompare(t))
          return {
            config: e ?? { type: "OAUTH", authorization_url: "", token_url: "" },
            discovered: null != e,
            supportsPkceS256: !1,
            clientMode: t,
            clientId: "",
            clientSecret: "",
            privateKeyPem: "",
            privateKeyJwtKid: "",
            tokenAuthMethod:
              "USER_DEFINED" === t
                ? "none"
                : (["none", "client_secret_post", "client_secret_basic"].find((e) => a.includes(e)) ?? a[0] ?? "none"),
            scopes: (e?.scopes_supported ?? []).join("\n"),
            baseScopes: (e?.base_scopes ?? []).join("\n"),
            oidcScopes: (e?.oidc_scopes_supported ?? []).join("\n"),
            oidcEnabled: !!e?.oidc_configuration_url,
          }
        },
        rw: o,
        u_: p,
      },
    )
  },
  ARVD(e, t, a) {
    a.d(
      t,
      {},
      {
        z: function (e, t) {
          if (!Number.isFinite(e) || e <= 0)
            return t.formatNumber(0, { style: "unit", unit: "byte", unitDisplay: "long" })
          if (e < 1024) return t.formatNumber(e, { style: "unit", unit: "byte", unitDisplay: "long" })
          let a = ["kilobyte", "megabyte", "gigabyte", "terabyte"],
            i = e / 1024,
            n = 0
          for (; i >= 1024 && n < a.length - 1;) ((i /= 1024), (n += 1))
          return t.formatNumber(i, { maximumFractionDigits: 1, style: "unit", unit: a[n], unitDisplay: "short" })
        },
      },
    )
  },
}
//# sourceMappingURL=819365.7e67588602.js.map
