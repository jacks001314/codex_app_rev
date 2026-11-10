export const __rspack_esm_ids = [890583]
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
  fO5q(e, t, a) {
    a.d(t, { HostedPluginCreateDialog: () => eo })
    var i = a("ABep"),
      n = a("QosV"),
      s = a("T0Rc"),
      r = a("xSOA"),
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
      x = a("ygO2"),
      _ = a("JNtf"),
      v = a("mUDD"),
      b = a("GO7r"),
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
        { error: s } = e
      if (s instanceof D.fk) {
        if ("network" === s.errorKind) {
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
        if (429 === s.status) {
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
        if (s.status >= 500) {
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
        if (s.status >= 400 && s.status < 500) {
          let e
          a[3] !== s.message
            ? ((e = (function (e) {
                try {
                  return O.safeParse(JSON.parse(e)).data?.detail ?? null
                } catch {
                  return null
                }
              })(s.message)),
              (a[3] = s.message),
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
        s,
        r,
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
        ? ((s = ("archive" === c ? d : u)
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
          (l[7] = s))
        : (s = l[7])
      let C = "archive" === c ? "outlineGhost" : "ghost",
        y = "archive" === c ? "dialogAction" : void 0
      return (
        l[8] !== p || l[9] !== m || l[10] !== C || l[11] !== y
          ? ((r = (0, i.jsx)(x.$, { color: C, size: y, disabled: p, onClick: m, children: _ })),
            (l[8] = p),
            (l[9] = m),
            (l[10] = C),
            (l[11] = y),
            (l[12] = r))
          : (r = l[12]),
        l[13] !== f || l[14] !== s || l[15] !== r
          ? ((o = (0, i.jsxs)(i.Fragment, {
              children: [
                null,
                (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsxs)(v.Es, { className: "flex-wrap", children: [s, r, f] }),
                }),
              ],
            })),
            (l[13] = f),
            (l[14] = s),
            (l[15] = r),
            (l[16] = o))
          : (o = l[16]),
        o
      )
    }
    var U = a("rGp2"),
      N = a("HFSu")
    class T extends Error {
      code
      constructor(e) {
        ;(super(e), (this.code = e))
      }
    }
    let L = (e) => ({ [U.ok]: (0, U.MR)(), "ChatGPT-Account-Id": e })
    function z(e, t, a) {
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
    function K(e) {
      return e.size <= 10240 && ("image/png" === e.type.toLowerCase() || e.name.toLowerCase().endsWith(".png"))
    }
    async function q(e, t, a) {
      let i = await N.CodexRequest.safePost("/aip/connectors/mcp/oauth_config", {
        surface: "plugin_management",
        additionalHeaders: L(e),
        requestBody: t,
        expectedErrorStatuses: [400, 401, 403, 404, 413, 422, 424, 429],
        signal: a,
      }).catch((e) => {
        if (e instanceof D.fk && 404 === e.status) return null
        throw e
      })
      return i?.oauth_config ?? null
    }
    function H(e, t) {
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
    function F(e, t = !1) {
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
    function G(e, t = !1) {
      let a = F(e, t)
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
    async function B(e, t, a) {
      let { oauth_clients: i } = await N.CodexRequest.safeGet("/aip/connectors/oauth_clients", {
        surface: "plugin_management",
        additionalHeaders: L(e),
        parameters: { query: { service: t } },
        signal: a,
      })
      return !!i?.length
    }
    function $(e) {
      return [
        ...new Set(
          e
            .split(/\r?\n|,/)
            .map((e) => e.trim())
            .filter(Boolean),
        ),
      ]
    }
    function J(e) {
      let t = (0, n.c)(25),
        { error: a } = e
      switch (
        (function (e) {
          let t
          if (e instanceof T) return e.code
          if (!(e instanceof D.fk)) return null
          if ("network" === e.errorKind) return "network-error"
          if ("tunnel_client_network_access_denied" === e.errorCode) return "tunnel-network-denied"
          try {
            t = S.object({ detail: S.unknown() }).parse(JSON.parse(e.message)).detail
          } catch {}
          let a = S.union([S.string(), S.object({ message: S.string() }).transform((e) => e.message)]).safeParse(t).data
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
          let i = S.object({
            type: S.literal("mcp_error"),
            kind: S.enum(["http", "network", "json_rpc", "invalid_response"]),
            upstream_status: S.number().int().min(100).max(599).nullish(),
            upstream_error_code: S.string().nullish(),
          }).safeParse(t)
          if (424 === e.status && i.success) {
            switch (i.data.upstream_error_code) {
              case "tunnel_client_network_access_denied":
                return "tunnel-network-denied"
              case "tunnel_client_not_seen":
              case "tunnel_client_not_connected":
                return "tunnel-unavailable"
            }
            if ("network" === i.data.kind) return "server-unreachable"
            if ("http" === i.data.kind || "invalid_response" === i.data.kind) {
              switch (i.data.upstream_status) {
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
              if (null != i.data.upstream_status && i.data.upstream_status >= 500) return "service-unavailable"
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
        })(a)
      ) {
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
    var X = a("zKCW"),
      W = a("Xpvt"),
      Z = a("ZtSy")
    function V(e) {
      let t,
        a,
        s,
        r,
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
        ? ((s = (0, i.jsx)(h.A, {
            id: "plugins.create.tunnel",
            defaultMessage: "Tunnel",
            description: "Connect an MCP app using a secure tunnel",
          })),
          (m[2] = s))
        : (s = m[2])
      let y = s
      m[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, i.jsx)("legend", { className: "font-medium", children: b })), (m[3] = r))
        : (r = m[3])
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
                  children: (0, i.jsxs)("fieldset", { className: "flex flex-col gap-2", children: [r, u, f] }),
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
    function Y(e) {
      let t,
        a,
        s,
        r,
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
          ? ((s = (0, i.jsx)(b.Ko7, { className: "text-warning" })), (g[3] = s))
          : (s = g[3]),
        g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(X.l, {
              type: "warning",
              variant: "callout",
              layout: "inline",
              icon: s,
              content: (0, i.jsx)(h.A, {
                id: "plugins.create.riskNotice",
                defaultMessage: "Custom MCP servers introduce risk. <link>Learn more</link>",
                description:
                  "Warning above the consent checkbox in custom MCP app creation. The link opens documentation about MCP server risks and safety.",
                values: { link: Q },
              }),
            })),
            (g[4] = r))
          : (r = g[4]),
        g[5] !== v || g[6] !== f || g[7] !== x || g[8] !== m || g[9] !== _
          ? ((o = (0, i.jsx)(W.S, {
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
                r,
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
    function Q(e) {
      return (0, i.jsx)(Z.G, {
        href: "https://platform.openai.com/docs/mcp#risks-and-safety",
        openTarget: "external-browser",
        initiator: "open_in_browser_bridge",
        underline: "always",
        children: e,
      })
    }
    var ee = a("uuN8"),
      et = a("nzx4"),
      ea = a("aepO")
    function ei(e) {
      let t,
        a,
        r,
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
        T,
        L,
        z,
        K,
        q,
        B,
        J,
        Z,
        V,
        Y,
        Q,
        ei,
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
        eR,
        eE,
        eI,
        eU = (0, n.c)(175),
        {
          accountId: eN,
          target: eT,
          hasPreconfiguredOAuthClient: eL,
          allowPrivateKeyJwt: ez,
          value: eK,
          disabled: eq,
          onChange: eH,
        } = e,
        eF = void 0 !== ez && ez,
        eG = (0, p.A)()
      eU[0] !== eG
        ? ((t = eG.formatMessage({
            id: "plugins.create.oauth.listPlaceholder",
            defaultMessage: "One value per line or comma-separated",
            description:
              "Placeholder for scope list inputs in custom MCP app creation. Each scope can be separated by a newline or comma.",
          })),
          (eU[0] = eG),
          (eU[1] = t))
        : (t = eU[1])
      let eB = t
      eU[2] !== eG
        ? ((a = eG.formatMessage({
            id: "plugins.create.oauth.urlPlaceholder",
            defaultMessage: "https://example.com",
            description: "Example URL placeholder for OAuth and OpenID endpoint inputs in custom MCP app creation.",
          })),
          (eU[2] = eG),
          (eU[3] = a))
        : (a = eU[3])
      let e$ = a
      eU[4] !== eK.clientMode || eU[5] !== eK.config
        ? ((r = H(eK.config, eK.clientMode)), (eU[4] = eK.clientMode), (eU[5] = eK.config), (eU[6] = r))
        : (r = eU[6])
      let eJ = r
      eU[7] !== eF || eU[8] !== eK ? ((o = G(eK, eF)), (eU[7] = eF), (eU[8] = eK), (eU[9] = o)) : (o = eU[9])
      let eX = o,
        eW = eF && "private_key_jwt" === eX
      eU[10] !== eK.config.authorization_response_iss_parameter_supported ||
      eU[11] !== eK.config.authorization_server_base
        ? ((l =
            !0 === eK.config.authorization_response_iss_parameter_supported &&
            !!eK.config.authorization_server_base?.trim()),
          (eU[10] = eK.config.authorization_response_iss_parameter_supported),
          (eU[11] = eK.config.authorization_server_base),
          (eU[12] = l))
        : (l = eU[12])
      let eZ = l
      eU[13] !== eN || eU[14] !== eZ || eU[15] !== eT
        ? ((c = ["plugins", "mcp-oauth-callback", eN, eT, eZ]),
          (eU[13] = eN),
          (eU[14] = eZ),
          (eU[15] = eT),
          (eU[16] = c))
        : (c = eU[16])
      let eV = "DCR" !== eJ && !eq
      ;(eU[17] !== eN || eU[18] !== eZ || eU[19] !== eT
        ? ((d = async (e) => {
            var t
            let a,
              i,
              { signal: n } = e,
              [s, r] = await Promise.all([
                (0, U.Tj)(),
                eZ
                  ? null
                  : N.CodexRequest.safeGet("/aip/connectors/oauth/callback_id", {
                      surface: "plugin_management",
                      additionalHeaders: { [U.ok]: (0, U.MR)(), "ChatGPT-Account-Id": eN },
                      parameters: { query: eT },
                      signal: n,
                    }),
              ])
            return (
              (t = r?.callback_id ?? null),
              (i = "http:" === (a = new URL(s)).protocol || "https:" === a.protocol ? a.origin : "https://chatgpt.com"),
              {
                redirect: new URL(
                  null == t ? "/connector_platform_oauth_redirect" : `/connector/oauth/${encodeURIComponent(t)}`,
                  i,
                ).href,
                metadata: new URL(null == t ? "/oauth/client.json" : `/oauth/${encodeURIComponent(t)}/client.json`, i)
                  .href,
              }
            )
          }),
          (eU[17] = eN),
          (eU[18] = eZ),
          (eU[19] = eT),
          (eU[20] = d))
        : (d = eU[20]),
        eU[21] !== c || eU[22] !== eV || eU[23] !== d
          ? ((u = { queryKey: c, enabled: eV, staleTime: P.D.FIVE_MINUTES, retry: !1, queryFn: d }),
            (eU[21] = c),
            (eU[22] = eV),
            (eU[23] = d),
            (eU[24] = u))
          : (u = eU[24]))
      let { data: eY, isPending: eQ, isError: e1, refetch: e0 } = (0, s.I)(u)
      ;(eU[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, i.jsx)(M.X.Header, {
            size: "compact",
            spacing: "compact",
            title: (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.oauthClientSetupTitle",
              defaultMessage: "Client registration",
              description: "Section title for the OAuth client setup controls in the advanced settings panel.",
            }),
          })),
          (eU[25] = g))
        : (g = eU[25]),
        eU[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.oauthClientModeDescription",
                defaultMessage:
                  "Choose whether ChatGPT should use your client credentials, Dynamic Client Registration (DCR), or Client Identifier Metadata Document (CIMD). See the <link>MCP client registration approaches</link>.",
                description: "Helper text for the OAuth client setup method selector in the advanced settings panel.",
                values: { link: er },
              }),
            })),
            (eU[26] = m))
          : (m = eU[26]),
        eU[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.registrationMethod",
              defaultMessage: "Registration method",
              description: "Label for how an OAuth client is registered in the custom MCP app creation dialog.",
            })),
            (eU[27] = f))
          : (f = eU[27]),
        eU[28] !== eH || eU[29] !== eK
          ? ((_ = (e) => {
              let t = e.target.value
              ;("USER_DEFINED" === t || "DCR" === t || "CIMD" === t) && eH({ ...eK, clientMode: t })
            }),
            (eU[28] = eH),
            (eU[29] = eK),
            (eU[30] = _))
          : (_ = eU[30]),
        eU[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)("option", {
              value: "USER_DEFINED",
              children: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.userDefined",
                defaultMessage: "User-Defined OAuth Client",
                description:
                  "Registration option in custom MCP creation for entering existing OAuth client credentials.",
              }),
            })),
            (eU[31] = v))
          : (v = eU[31]),
        eU[32] !== eK.config.registration_url
          ? ((y = eK.config.registration_url?.trim()), (eU[32] = eK.config.registration_url), (eU[33] = y))
          : (y = eU[33]))
      let e2 = !y
      ;(eU[34] !== eK.config.registration_url
        ? ((A = eK.config.registration_url?.trim()
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
          (eU[34] = eK.config.registration_url),
          (eU[35] = A))
        : (A = eU[35]),
        eU[36] !== e2 || eU[37] !== A
          ? ((w = (0, i.jsx)("option", { value: "DCR", disabled: e2, children: A })),
            (eU[36] = e2),
            (eU[37] = A),
            (eU[38] = w))
          : (w = eU[38]))
      let e4 = !eK.config.client_id_metadata_document_supported
      return (
        eU[39] !== eK.config.client_id_metadata_document_supported
          ? ((k = eK.config.client_id_metadata_document_supported
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
            (eU[39] = eK.config.client_id_metadata_document_supported),
            (eU[40] = k))
          : (k = eU[40]),
        eU[41] !== e4 || eU[42] !== k
          ? ((S = (0, i.jsx)("option", { value: "CIMD", disabled: e4, children: k })),
            (eU[41] = e4),
            (eU[42] = k),
            (eU[43] = S))
          : (S = eU[43]),
        eU[44] !== eJ || eU[45] !== _ || eU[46] !== w || eU[47] !== S
          ? ((D = (0, i.jsxs)("label", {
              className: "flex flex-col gap-1",
              children: [
                f,
                (0, i.jsxs)("select", {
                  className: "h-9 rounded-md border border-primary-outline bg-primary-soft px-2.5 text-sm text-default",
                  value: eJ,
                  onChange: _,
                  children: [v, w, S],
                }),
              ],
            })),
            (eU[44] = eJ),
            (eU[45] = _),
            (eU[46] = w),
            (eU[47] = S),
            (eU[48] = D))
          : (D = eU[48]),
        eU[49] !== eJ
          ? ((O =
              "DCR" === eJ
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
            (eU[49] = eJ),
            (eU[50] = O))
          : (O = eU[50]),
        eU[51] !== eJ
          ? ((R =
              "CIMD" === eJ
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
            (eU[51] = eJ),
            (eU[52] = R))
          : (R = eU[52]),
        eU[53] !== eJ || eU[54] !== eL || eU[55] !== eW
          ? ((E =
              "USER_DEFINED" === eJ
                ? (0, i.jsx)("p", {
                    className: "text-xs text-secondary",
                    children:
                      eL && !eW
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
            (eU[53] = eJ),
            (eU[54] = eL),
            (eU[55] = eW),
            (eU[56] = E))
          : (E = eU[56]),
        eU[57] !== eK.config.registration_url || eU[58] !== eK.discovered
          ? ((I =
              eK.discovered && !eK.config.registration_url?.trim()
                ? (0, i.jsx)(X.l, {
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
            (eU[57] = eK.config.registration_url),
            (eU[58] = eK.discovered),
            (eU[59] = I))
          : (I = eU[59]),
        eU[60] !== eK.config.client_id_metadata_document_supported || eU[61] !== eK.discovered
          ? ((T =
              eK.discovered && !eK.config.client_id_metadata_document_supported
                ? (0, i.jsx)(X.l, {
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
            (eU[60] = eK.config.client_id_metadata_document_supported),
            (eU[61] = eK.discovered),
            (eU[62] = T))
          : (T = eU[62]),
        eU[63] !== eY ||
        eU[64] !== e1 ||
        eU[65] !== eQ ||
        eU[66] !== eJ ||
        eU[67] !== eq ||
        eU[68] !== eG ||
        eU[69] !== e0
          ? ((L =
              "DCR" !== eJ
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
                              eY?.redirect ??
                              (eQ
                                ? eG.formatMessage({
                                    id: "plugins.create.oauth.callbackLoading",
                                    defaultMessage: "Loading callback URL…",
                                    description:
                                      "Temporary text in the custom MCP creation form while the callback URL is loading. Copying is disabled until the URL is available.",
                                  })
                                : eG.formatMessage({
                                    id: "plugins.create.oauth.callbackUnavailable",
                                    defaultMessage: "Could not load callback URL",
                                    description:
                                      "Inline text in the custom MCP creation form when the callback URL could not be loaded. Users can retry loading it.",
                                  })),
                            trailingControl: (0, i.jsx)(ee.i, {
                              ariaLabel: eG.formatMessage({
                                id: "plugins.create.oauth.copyCallbackUrl",
                                defaultMessage: "Copy callback URL",
                                description:
                                  "Accessible label for copying the callback URL to register an OAuth client in custom MCP creation.",
                              }),
                              isDisabled: null == eY || eq,
                              onCopy: (e) => null != eY && (0, ea.E)(eY.redirect, e),
                            }),
                          }),
                        ],
                      }),
                      "CIMD" === eJ
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
                                  eY?.metadata ??
                                  (eQ
                                    ? eG.formatMessage({
                                        id: "plugins.create.oauth.cimdLoading",
                                        defaultMessage: "Loading CIMD URL…",
                                        description:
                                          "Temporary text in the custom MCP creation form while the CIMD URL is loading. Copying is disabled until the URL is available.",
                                      })
                                    : eG.formatMessage({
                                        id: "plugins.create.oauth.cimdUrlUnavailable",
                                        defaultMessage: "Could not load CIMD URL",
                                        description:
                                          "Inline text in the custom MCP creation form when the CIMD URL could not be loaded. Users can retry loading it.",
                                      })),
                                trailingControl: (0, i.jsx)(ee.i, {
                                  ariaLabel: eG.formatMessage({
                                    id: "plugins.create.oauth.copyCimdUrl",
                                    defaultMessage: "Copy CIMD URL",
                                    description:
                                      "Accessible label for copying the CIMD URL to register an OAuth client in custom MCP creation.",
                                  }),
                                  isDisabled: null == eY || eq,
                                  onCopy: (e) => null != eY && (0, ea.E)(eY.metadata, e),
                                }),
                              }),
                            ],
                          })
                        : null,
                      e1
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
                                onClick: () => void e0(),
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
            (eU[63] = eY),
            (eU[64] = e1),
            (eU[65] = eQ),
            (eU[66] = eJ),
            (eU[67] = eq),
            (eU[68] = eG),
            (eU[69] = e0),
            (eU[70] = L))
          : (L = eU[70]),
        eU[71] !== eF ||
        eU[72] !== eJ ||
        eU[73] !== eL ||
        eU[74] !== eG ||
        eU[75] !== eH ||
        eU[76] !== eX ||
        eU[77] !== eW ||
        eU[78] !== eK
          ? ((z =
              "USER_DEFINED" === eJ
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
                              eL && !eW
                                ? eG.formatMessage({
                                    id: "plugins.create.oauth.clientIdOptionalPlaceholder",
                                    defaultMessage: "OAuth Client ID (Optional)",
                                    description:
                                      "Client ID placeholder in custom MCP creation when OpenAI has a preconfigured client. Entering a client ID overrides those credentials.",
                                  })
                                : eG.formatMessage({
                                    id: "plugins.create.oauth.clientIdPlaceholder",
                                    defaultMessage: "OAuth Client ID",
                                    description:
                                      "Placeholder for the existing OAuth application client ID in custom MCP app creation.",
                                  }),
                            required: !1 === eL || eW || !!eK.clientSecret.trim(),
                            value: eK.clientId,
                            onChange: (e) => eH({ ...eK, clientId: e.target.value }),
                          }),
                        ],
                      }),
                      eW
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
                                placeholder: eG.formatMessage({
                                  id: "plugins.create.oauth.clientSecretPlaceholder",
                                  defaultMessage: "OAuth Client Secret (Optional)",
                                  description:
                                    "Placeholder for an optional OAuth application client secret in custom MCP app creation.",
                                }),
                                value: eK.clientSecret,
                                onChange: (e) => eH({ ...eK, clientSecret: e.target.value }),
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
                            value: eX,
                            onChange: (e) => {
                              eH({ ...eK, tokenAuthMethod: e.target.value })
                            },
                            children: F(eK, eF).map((e) =>
                              (0, i.jsx)(
                                "option",
                                { value: e, disabled: "none" === e && !!eK.clientSecret.trim(), children: e },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
                      eW
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
                                    value: eK.privateKeyPem,
                                    onChange: (e) => eH({ ...eK, privateKeyPem: e.target.value }),
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
                                    value: eK.privateKeyJwtKid,
                                    onChange: (e) => eH({ ...eK, privateKeyJwtKid: e.target.value }),
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null,
                    ],
                  })
                : null),
            (eU[71] = eF),
            (eU[72] = eJ),
            (eU[73] = eL),
            (eU[74] = eG),
            (eU[75] = eH),
            (eU[76] = eX),
            (eU[77] = eW),
            (eU[78] = eK),
            (eU[79] = z))
          : (z = eU[79]),
        eU[80] !== D ||
        eU[81] !== O ||
        eU[82] !== R ||
        eU[83] !== E ||
        eU[84] !== I ||
        eU[85] !== T ||
        eU[86] !== L ||
        eU[87] !== z
          ? ((K = (0, i.jsx)(j.t, {
              variant: "form",
              dividers: !1,
              children: (0, i.jsxs)("div", {
                className: "flex flex-col gap-3 p-4",
                children: [g, m, D, O, R, E, I, T, L, z],
              }),
            })),
            (eU[80] = D),
            (eU[81] = O),
            (eU[82] = R),
            (eU[83] = E),
            (eU[84] = I),
            (eU[85] = T),
            (eU[86] = L),
            (eU[87] = z),
            (eU[88] = K))
          : (K = eU[88]),
        eU[89] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.scopeTitle",
              defaultMessage: "Scopes",
              description: "Section title for OAuth scope fields.",
            })),
            (eU[89] = q))
          : (q = eU[89]),
        eU[90] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, i.jsx)(M.X.Header, {
              size: "compact",
              spacing: "compact",
              title: q,
              subtitle: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.scopeSectionDescription.additiveDefaults",
                defaultMessage:
                  "Base scopes are always requested. Today, if every selected tool defines OAuth scope tags, ChatGPT requests those tool scopes plus base scopes. Otherwise it requests the default scopes in addition. See the <link>Apps SDK tool descriptor docs</link>.",
                description:
                  "Helper text explaining how base scopes, tool scopes, and default scopes work together. Default scopes are added to known tool scopes and base scopes when any selected tool is missing scope information. Preserve the <link> tag, which links to the Apps SDK tool descriptor documentation.",
                values: { link: es },
              }),
            })),
            (eU[90] = B))
          : (B = eU[90]),
        eU[91] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = (0, i.jsx)("legend", {
              className: "font-medium",
              children: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.defaultScopes",
                defaultMessage: "Default scopes",
                description: "Section listing OAuth scopes requested by default when connecting a custom MCP app.",
              }),
            })),
            (eU[91] = J))
          : (J = eU[91]),
        eU[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, i.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.requestedScopesDescription",
                defaultMessage:
                  "Choose the default scopes ChatGPT requests when tool-level OAuth scope tags are not defined for every selected tool.",
                description:
                  "Helper text explaining how default scopes differ from tool-level scopes in the advanced settings panel.",
              }),
            })),
            (eU[92] = Z))
          : (Z = eU[92]),
        eU[93] !== eq || eU[94] !== eB || eU[95] !== eH || eU[96] !== eK
          ? ((V = (0, i.jsxs)("fieldset", {
              className: "flex flex-col gap-2",
              children: [
                J,
                Z,
                eK.discovered
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        [...new Set(eK.config.scopes_supported)].map((e) =>
                          (0, i.jsxs)(
                            "label",
                            {
                              className: "relative flex items-center gap-2",
                              children: [
                                (0, i.jsx)(W.S, {
                                  disabled: eq,
                                  checked: $(eK.scopes).includes(e),
                                  onCheckedChange: (t) =>
                                    eH({
                                      ...eK,
                                      scopes: (t ? [...$(eK.scopes), e] : $(eK.scopes).filter((t) => t !== e)).join(
                                        "\n",
                                      ),
                                    }),
                                }),
                                (0, i.jsx)("span", { className: "select-text", children: e }),
                              ],
                            },
                            e,
                          ),
                        ),
                        0 === (eK.config.scopes_supported ?? []).length
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
                          placeholder: eB,
                          value: eK.scopes,
                          onChange: (e) => eH({ ...eK, scopes: e.target.value }),
                        }),
                      ],
                    }),
              ],
            })),
            (eU[93] = eq),
            (eU[94] = eB),
            (eU[95] = eH),
            (eU[96] = eK),
            (eU[97] = V))
          : (V = eU[97]),
        eU[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((Y = (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.baseScopes",
              defaultMessage: "Base scopes",
              description:
                "Scopes always requested for a custom MCP app, separate from its selectable default scopes. Accepts one scope per line or comma-separated scopes.",
            })),
            (eU[98] = Y))
          : (Y = eU[98]),
        eU[99] !== eH || eU[100] !== eK
          ? ((Q = (e) => eH({ ...eK, baseScopes: e.target.value })), (eU[99] = eH), (eU[100] = eK), (eU[101] = Q))
          : (Q = eU[101]),
        eU[102] !== eB || eU[103] !== Q || eU[104] !== eK.baseScopes
          ? ((ei = (0, i.jsxs)("label", {
              className: "flex flex-col gap-1",
              children: [Y, (0, i.jsx)(C.TM, { rows: 3, placeholder: eB, value: eK.baseScopes, onChange: Q })],
            })),
            (eU[102] = eB),
            (eU[103] = Q),
            (eU[104] = eK.baseScopes),
            (eU[105] = ei))
          : (ei = eU[105]),
        eU[106] === Symbol.for("react.memo_cache_sentinel")
          ? ((eo = (0, i.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.baseScopesDescription",
                defaultMessage: "Scopes to request with every auth request, no matter which tools are chosen.",
                description: "Helper text explaining what OAuth base scopes mean in the advanced settings panel.",
              }),
            })),
            (eU[106] = eo))
          : (eo = eU[106]),
        eU[107] !== V || eU[108] !== ei
          ? ((el = (0, i.jsx)(j.t, {
              variant: "form",
              dividers: !1,
              children: (0, i.jsxs)("div", { className: "flex flex-col gap-3 p-4", children: [B, V, ei, eo] }),
            })),
            (eU[107] = V),
            (eU[108] = ei),
            (eU[109] = el))
          : (el = eU[109]),
        eU[110] === Symbol.for("react.memo_cache_sentinel")
          ? ((ec = (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.oauthEndpointsTitle",
              defaultMessage: "OAuth endpoints",
              description: "Section title for OAuth endpoint fields.",
            })),
            (eU[110] = ec))
          : (ec = eU[110]),
        eU[111] === Symbol.for("react.memo_cache_sentinel")
          ? ((ed = (0, i.jsx)(M.X.Header, {
              size: "compact",
              spacing: "compact",
              title: ec,
              subtitle: (0, i.jsx)(h.A, {
                id: "plugins.create.oauth.oauthEndpointsDescription",
                defaultMessage:
                  "These endpoints are discovered from the MCP server. If Registration URL is missing, Dynamic Client Registration will fail. See the <link>Apps SDK auth docs</link>.",
                description:
                  "Helper text explaining the OAuth endpoints section and the requirement for a registration URL when using Dynamic Client Registration.",
                values: { link: en },
              }),
            })),
            (eU[111] = ed))
          : (ed = eU[111]),
        eU[112] === Symbol.for("react.memo_cache_sentinel")
          ? ((eu = [
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
            (eU[112] = eu))
          : (eu = eU[112]),
        eU[113] === Symbol.for("react.memo_cache_sentinel")
          ? ((ep = [
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
            (eU[113] = ep))
          : (ep = eU[113]),
        eU[114] === Symbol.for("react.memo_cache_sentinel")
          ? ((eh = [
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
            (eU[114] = eh))
          : (eh = eU[114]),
        eU[115] === Symbol.for("react.memo_cache_sentinel")
          ? ((eg = [
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
            (eU[115] = eg))
          : (eg = eU[115]),
        eU[116] === Symbol.for("react.memo_cache_sentinel")
          ? ((em = [
              eu,
              ep,
              eh,
              eg,
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
            (eU[116] = em))
          : (em = eU[116]),
        eU[117] !== eG || eU[118] !== eH || eU[119] !== e$ || eU[120] !== eK
          ? ((ef = (0, i.jsx)(j.t, {
              variant: "form",
              dividers: !1,
              children: (0, i.jsxs)("div", {
                className: "flex flex-col gap-3 p-4",
                children: [
                  ed,
                  em.map((e) => {
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
                                ? eG.formatMessage({
                                    id: "plugins.create.oauth.resourcePlaceholder",
                                    defaultMessage: "urn:example:resource",
                                    description:
                                      "Example resource identifier placeholder in custom MCP OAuth settings. A resource may be a URI such as a URN.",
                                  })
                                : e$,
                            type: "resource" === t ? "text" : "url",
                            required: "authorization_url" === t || "token_url" === t,
                            value: eK.config[t] ?? "",
                            onChange: (e) => eH({ ...eK, config: { ...eK.config, [t]: e.target.value } }),
                          }),
                        ],
                      },
                      t,
                    )
                  }),
                ],
              }),
            })),
            (eU[117] = eG),
            (eU[118] = eH),
            (eU[119] = e$),
            (eU[120] = eK),
            (eU[121] = ef))
          : (ef = eU[121]),
        eU[122] !== eG || eU[123] !== eH || eU[124] !== eK
          ? ((ex = eK.config.pkce_methods?.length
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
                              (0, i.jsx)(W.S, {
                                checked: eK.supportsPkceS256,
                                onCheckedChange: (e) => eH({ ...eK, supportsPkceS256: !0 === e }),
                              }),
                              (0, i.jsx)(h.A, {
                                id: "plugins.create.oauth.pkceSupport.label",
                                defaultMessage: "Server supports PKCE (S256)",
                                description:
                                  "Checkbox in advanced OAuth settings for custom MCP app creation when discovery does not report PKCE methods. Selecting it declares that the server already supports PKCE with S256. Keep PKCE and S256 as protocol names.",
                              }),
                            ],
                          }),
                          (0, i.jsxs)(et.AM, {
                            children: [
                              (0, i.jsx)(et.Wv, {
                                asChild: !0,
                                children: (0, i.jsx)(x.$, {
                                  type: "button",
                                  "aria-label": eG.formatMessage({
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
                              (0, i.jsx)(et.hl, {
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
            (eU[122] = eG),
            (eU[123] = eH),
            (eU[124] = eK),
            (eU[125] = ex))
          : (ex = eU[125]),
        eU[126] === Symbol.for("react.memo_cache_sentinel")
          ? ((e_ = (0, i.jsx)(M.X.Header, {
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
            (eU[126] = e_))
          : (e_ = eU[126]),
        eU[127] !== eq || eU[128] !== eK.config.oidc_configuration_url
          ? ((ev = eq || !eK.config.oidc_configuration_url?.trim()),
            (eU[127] = eq),
            (eU[128] = eK.config.oidc_configuration_url),
            (eU[129] = ev))
          : (ev = eU[129]),
        eU[130] !== eK.config.oidc_configuration_url || eU[131] !== eK.oidcEnabled
          ? ((eb = !!eK.config.oidc_configuration_url?.trim() && eK.oidcEnabled),
            (eU[130] = eK.config.oidc_configuration_url),
            (eU[131] = eK.oidcEnabled),
            (eU[132] = eb))
          : (eb = eU[132]),
        eU[133] !== eH || eU[134] !== eK
          ? ((eC = (e) => eH({ ...eK, oidcEnabled: e })), (eU[133] = eH), (eU[134] = eK), (eU[135] = eC))
          : (eC = eU[135]),
        eU[136] !== ev || eU[137] !== eb || eU[138] !== eC
          ? ((ey = (0, i.jsx)(W.S, { disabled: ev, checked: eb, onCheckedChange: eC })),
            (eU[136] = ev),
            (eU[137] = eb),
            (eU[138] = eC),
            (eU[139] = ey))
          : (ey = eU[139]),
        eU[140] === Symbol.for("react.memo_cache_sentinel")
          ? ((eM = (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.oidcEnabled",
              defaultMessage: "OIDC enabled",
              description:
                "Checkbox to enable OpenID Connect profile support for a custom MCP app. Requires an OIDC configuration URL.",
            })),
            (eU[140] = eM))
          : (eM = eU[140]),
        eU[141] !== ey
          ? ((ej = (0, i.jsxs)("label", { className: "relative flex items-center gap-2", children: [ey, eM] })),
            (eU[141] = ey),
            (eU[142] = ej))
          : (ej = eU[142]),
        eU[143] !== eK.config.oidc_configuration_url
          ? ((eA = eK.config.oidc_configuration_url?.trim()
              ? (0, i.jsx)("p", {
                  className: "text-xs text-secondary",
                  children: (0, i.jsx)(h.A, {
                    id: "plugins.create.oauth.oidcEnabledDescription",
                    defaultMessage: "If enabled, ChatGPT will try to request the OpenID scopes listed below.",
                    description: "Helper text explaining why enabling OIDC is useful in the advanced settings panel.",
                  }),
                })
              : null),
            (eU[143] = eK.config.oidc_configuration_url),
            (eU[144] = eA))
          : (eA = eU[144]),
        eU[145] !== eK.config.oidc_configuration_url || eU[146] !== eK.discovered
          ? ((ew =
              !eK.config.oidc_configuration_url?.trim() && eK.discovered
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
            (eU[145] = eK.config.oidc_configuration_url),
            (eU[146] = eK.discovered),
            (eU[147] = ew))
          : (ew = eU[147]),
        eU[148] === Symbol.for("react.memo_cache_sentinel")
          ? ((eP = [
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
            (eU[148] = eP))
          : (eP = eU[148]),
        eU[149] === Symbol.for("react.memo_cache_sentinel")
          ? ((ek = [
              eP,
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
            (eU[149] = ek))
          : (ek = eU[149]),
        eU[150] !== eH || eU[151] !== e$ || eU[152] !== eK
          ? ((eS = ek.map((e) => {
              let [t, a] = e
              return (0, i.jsxs)(
                "label",
                {
                  className: "flex flex-col gap-1",
                  children: [
                    a,
                    (0, i.jsx)(C.pd, {
                      placeholder: e$,
                      type: "url",
                      value: eK.config[t] ?? "",
                      onChange: (e) => eH({ ...eK, config: { ...eK.config, [t]: e.target.value } }),
                    }),
                  ],
                },
                t,
              )
            })),
            (eU[150] = eH),
            (eU[151] = e$),
            (eU[152] = eK),
            (eU[153] = eS))
          : (eS = eU[153]),
        eU[154] === Symbol.for("react.memo_cache_sentinel")
          ? ((eD = (0, i.jsx)(h.A, {
              id: "plugins.create.oauth.oidcScopes",
              defaultMessage: "OIDC scopes supported",
              description:
                "Editable OpenID Connect scopes for a custom MCP app. Accepts one scope per line or comma-separated scopes.",
            })),
            (eU[154] = eD))
          : (eD = eU[154]),
        eU[155] !== eH || eU[156] !== eK
          ? ((eO = (e) => eH({ ...eK, oidcScopes: e.target.value })), (eU[155] = eH), (eU[156] = eK), (eU[157] = eO))
          : (eO = eU[157]),
        eU[158] !== eB || eU[159] !== eO || eU[160] !== eK.oidcScopes
          ? ((eR = (0, i.jsxs)("label", {
              className: "flex flex-col gap-1",
              children: [eD, (0, i.jsx)(C.TM, { rows: 3, placeholder: eB, value: eK.oidcScopes, onChange: eO })],
            })),
            (eU[158] = eB),
            (eU[159] = eO),
            (eU[160] = eK.oidcScopes),
            (eU[161] = eR))
          : (eR = eU[161]),
        eU[162] !== ej || eU[163] !== eA || eU[164] !== ew || eU[165] !== eS || eU[166] !== eR
          ? ((eE = (0, i.jsx)(j.t, {
              variant: "form",
              dividers: !1,
              children: (0, i.jsxs)("div", {
                className: "flex flex-col gap-3 p-4",
                children: [e_, ej, eA, ew, eS, eR],
              }),
            })),
            (eU[162] = ej),
            (eU[163] = eA),
            (eU[164] = ew),
            (eU[165] = eS),
            (eU[166] = eR),
            (eU[167] = eE))
          : (eE = eU[167]),
        eU[168] !== eq || eU[169] !== K || eU[170] !== el || eU[171] !== ef || eU[172] !== ex || eU[173] !== eE
          ? ((eI = (0, i.jsxs)("fieldset", {
              disabled: eq,
              className: "flex min-w-0 flex-col gap-4 text-sm",
              children: [K, el, ef, ex, eE],
            })),
            (eU[168] = eq),
            (eU[169] = K),
            (eU[170] = el),
            (eU[171] = ef),
            (eU[172] = ex),
            (eU[173] = eE),
            (eU[174] = eI))
          : (eI = eU[174]),
        eI
      )
    }
    function en(e) {
      return (0, i.jsx)(Z.G, {
        href: "https://developers.openai.com/apps-sdk/build/auth/",
        openTarget: "external-browser",
        initiator: "open_in_browser_bridge",
        children: e,
      })
    }
    function es(e) {
      return (0, i.jsx)(Z.G, {
        href: "https://developers.openai.com/apps-sdk/reference/#tool-descriptor-parameters",
        openTarget: "external-browser",
        initiator: "open_in_browser_bridge",
        children: e,
      })
    }
    function er(e) {
      return (0, i.jsx)(Z.G, {
        href: "https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization#client-registration-approaches",
        openTarget: "external-browser",
        initiator: "open_in_browser_bridge",
        children: e,
      })
    }
    function eo(e) {
      let t,
        a,
        S,
        D,
        O,
        U,
        F,
        X,
        W,
        Z,
        Q,
        ee,
        et,
        ea,
        en,
        es,
        er,
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
        eP = (0, n.c)(192),
        {
          accountId: ek,
          initialMode: eS,
          canUploadArchive: eD,
          canCreateMcpApp: eO,
          onClose: eR,
          onArchiveCreated: eE,
          onAppCreated: eI,
          onAppConnected: eU,
        } = e,
        eN = (0, p.A)(),
        eT = (0, A.Fj)("73506792"),
        eL = E.H.parse(eT.value.max_archive_admission_bytes),
        ez = (0, A.Zj)("3463396747"),
        eK = (0, A.Zj)("2496729599"),
        eq = c.iwv,
        eH = (0, l.Ul)(m.tT),
        [eF, eG] = (0, d.useState)(eS),
        [eB, e$] = (0, d.useState)(null),
        [eJ, eX] = (0, d.useState)(!1),
        [eW, eZ] = (0, d.useState)(""),
        [eV, eY] = (0, d.useState)(""),
        [eQ, e1] = (0, d.useState)("url"),
        [e0, e2] = (0, d.useState)(""),
        [e4, e3] = (0, d.useState)(""),
        [e5, e6] = (0, d.useState)("OAUTH")
      ez || "API_KEY" !== e5 || e6("OAUTH")
      let [e7, e9] = (0, d.useState)("BEARER"),
        [e8, te] = (0, d.useState)(""),
        [tt, ta] = (0, d.useState)(!1),
        [ti, tn] = (0, d.useState)(null),
        ts = (0, d.useId)(),
        [tr, to] = (0, d.useState)(null),
        [tl, tc] = (0, d.useState)(null),
        [td, tu] = (0, d.useState)(!1),
        [tp, th] = (0, d.useState)(null)
      eP[0] !== ek || eP[1] !== eQ || eP[2] !== e4 || eP[3] !== e0
        ? ((t = JSON.stringify([ek, eQ, "url" === eQ ? e0.trim() : e4.trim()])),
          (eP[0] = ek),
          (eP[1] = eQ),
          (eP[2] = e4),
          (eP[3] = e0),
          (eP[4] = t))
        : (t = eP[4])
      let tg = t,
        tm = z(eQ, e0, e4),
        tf = "OAUTH" === e5 || "MIXED" === e5,
        {
          data: tx,
          isFetching: t_,
          isError: tv,
          refetch: tb,
        } = (0, s.I)({
          queryKey: ["plugins", "mcp-oauth-config", ek, tm],
          enabled: "mcp" === eF && tf && tt && null != tm,
          queryFn: (e) => {
            let { signal: t } = e
            if (null == tm) throw new T("invalid-target")
            return q(ek, tm, t)
          },
          staleTime: P.D.FIVE_MINUTES,
          retry: !1,
          refetchOnWindowFocus: !1,
        })
      if (eP[5] !== tg || eP[6] !== tx || eP[7] !== tr) {
        var tC
        let e, t
        ;((a =
          tr?.key === tg
            ? tr.value
            : ((e = H((tC = tx ?? null))),
              (t = (tC?.token_endpoint_auth_methods_supported ?? [])
                .map((e) => e.trim())
                .filter(Boolean)
                .sort((e, t) => e.localeCompare(t))),
              {
                config: tC ?? { type: "OAUTH", authorization_url: "", token_url: "" },
                discovered: null != tC,
                supportsPkceS256: !1,
                clientMode: e,
                clientId: "",
                clientSecret: "",
                privateKeyPem: "",
                privateKeyJwtKid: "",
                tokenAuthMethod:
                  "USER_DEFINED" === e
                    ? "none"
                    : (["none", "client_secret_post", "client_secret_basic"].find((e) => t.includes(e)) ??
                      t[0] ??
                      "none"),
                scopes: (tC?.scopes_supported ?? []).join("\n"),
                baseScopes: (tC?.base_scopes ?? []).join("\n"),
                oidcScopes: (tC?.oidc_scopes_supported ?? []).join("\n"),
                oidcEnabled: !!tC?.oidc_configuration_url,
              })),
          (eP[5] = tg),
          (eP[6] = tx),
          (eP[7] = tr),
          (eP[8] = a))
      } else a = eP[8]
      let ty = a,
        tM = ti === tg && (void 0 !== tx || tv || tr?.key === tg),
        tj = null != tm && "mcp_url" in tm ? new URL(tm.mcp_url).origin : null
      eP[9] !== ek || eP[10] !== tj
        ? ((S = ["plugins", "mcp-oauth-client", ek, tj]), (eP[9] = ek), (eP[10] = tj), (eP[11] = S))
        : (S = eP[11])
      let tA = "mcp" === eF && tf && null != tj
      ;(eP[12] !== ek || eP[13] !== tj
        ? ((D = (e) => {
            let { signal: t } = e
            return null != tj && B(ek, tj, t)
          }),
          (eP[12] = ek),
          (eP[13] = tj),
          (eP[14] = D))
        : (D = eP[14]),
        eP[15] !== S || eP[16] !== tA || eP[17] !== D
          ? ((O = {
              queryKey: S,
              enabled: tA,
              queryFn: D,
              staleTime: P.D.FIVE_MINUTES,
              retry: !1,
              refetchOnWindowFocus: !1,
            }),
            (eP[15] = S),
            (eP[16] = tA),
            (eP[17] = D),
            (eP[18] = O))
          : (O = eP[18]))
      let { data: tw, isFetching: tP } = (0, s.I)(O)
      eP[19] !== tP ||
      eP[20] !== eQ ||
      eP[21] !== tM ||
      eP[22] !== tw ||
      eP[23] !== eK ||
      eP[24] !== tf ||
      eP[25] !== ty
        ? ((U =
            tf &&
            tM &&
            "USER_DEFINED" === H(ty.config, ty.clientMode) &&
            !ty.clientId.trim() &&
            (!!ty.clientSecret.trim() ||
              (eK && "private_key_jwt" === ty.tokenAuthMethod) ||
              tP ||
              !1 === tw ||
              "tunnel" === eQ)),
          (eP[19] = tP),
          (eP[20] = eQ),
          (eP[21] = tM),
          (eP[22] = tw),
          (eP[23] = eK),
          (eP[24] = tf),
          (eP[25] = ty),
          (eP[26] = U))
        : (U = eP[26])
      let tk = U,
        tS = tp === tg,
        [tD, tO] = (0, d.useState)(null)
      eP[27] === Symbol.for("react.memo_cache_sentinel") ? ((F = { hostId: eq }), (eP[27] = F)) : (F = eP[27])
      let { handleAppConnectOAuthStarted: tR, handleAppConnected: tE } = (0, g.t)(F),
        tI = (0, r.n)({
          mutationFn: () => {
            if (null == eB) throw Error("Choose a plugin archive")
            return (0, k.v1)(ek, eB, eL)
          },
          onSuccess: eE,
        })
      ;(eP[28] !== ek ||
      eP[29] !== e7 ||
      eP[30] !== e5 ||
      eP[31] !== eQ ||
      eP[32] !== eV ||
      eP[33] !== tM ||
      eP[34] !== tw ||
      eP[35] !== e8 ||
      eP[36] !== tl ||
      eP[37] !== eK ||
      eP[38] !== eW ||
      eP[39] !== ty ||
      eP[40] !== e4 ||
      eP[41] !== e0
        ? ((X = () => {
            let e = z(eQ, e0, e4)
            if (null == e) throw new T("invalid-target")
            return (async function (e) {
              if (null != e.icon && !K(e.icon)) throw new T("invalid-icon")
              let t = { supported_auth: [] }
              if (
                (("NONE" === e.authentication || "MIXED" === e.authentication) &&
                  t.supported_auth?.push({ type: "NONE" }),
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
                      ? await q(e.accountId, e.target)
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
                          base_scopes: $(a.baseScopes),
                          oidc_configuration_url: a.config.oidc_configuration_url?.trim() || null,
                          oidc_userinfo_endpoint: a.config.oidc_userinfo_endpoint?.trim() || null,
                          oidc_scopes_supported: $(a.oidcScopes),
                          token_endpoint_auth_methods_supported: a.discovered
                            ? a.config.token_endpoint_auth_methods_supported
                            : [a.tokenAuthMethod],
                          supports_domain_restriction: !1,
                        }
                if (null == n) throw new T("oauth-unavailable")
                if (!n.authorization_url || !n.token_url) throw new T("invalid-oauth-endpoints")
                for (let e of [
                  n.authorization_url,
                  n.token_url,
                  n.registration_url,
                  n.authorization_server_base,
                  n.oidc_configuration_url,
                  n.oidc_userinfo_endpoint,
                ])
                  if (e && null == z("url", e, "")) throw new T("invalid-oauth-url")
                t.supported_auth?.push(n)
                let s = H(n, a?.clientMode)
                if ("USER_DEFINED" === s) {
                  let i = a ? G(a, e.allowPrivateKeyJwt) : "none",
                    n = e.allowPrivateKeyJwt && "private_key_jwt" === i
                  if (n && !a?.privateKeyPem.trim()) throw new T("oauth-private-key-required")
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
                    if (n || a?.clientSecret.trim()) throw new T("oauth-client-id-required")
                    let t = "mcp_url" in e.target ? new URL(e.target.mcp_url).origin : null
                    if (!(e.hasPreconfiguredOAuthClient ?? (null != t && (await B(e.accountId, t)))))
                      throw new T("oauth-client-id-required")
                  }
                }
                if (null != a) {
                  ;((t.use_cimd = "USER_DEFINED" === s ? void 0 : "CIMD" === s),
                    (t.oidc_enabled = !!n.oidc_configuration_url && a.oidcEnabled))
                  let e = $(a.scopes)
                  t.default_scopes = a.discovered ? e.filter((e) => n.scopes_supported?.includes(e)) : e
                }
              }
              let a = e.icon,
                i =
                  null == a
                    ? null
                    : await new Promise((e, t) => {
                        let i = new FileReader()
                        ;((i.onload = () => ("string" == typeof i.result ? e(i.result) : t(new T("icon-read-failed")))),
                          (i.onerror = () => t(new T("icon-read-failed"))),
                          i.readAsDataURL(a))
                      }),
                { connector: n } = await N.CodexRequest.safePost("/aip/connectors/mcp", {
                  surface: "plugin_management",
                  additionalHeaders: L(e.accountId),
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
            })({
              allowPrivateKeyJwt: eK,
              accountId: ek,
              target: e,
              name: eW,
              description: eV,
              icon: tl,
              authentication: e5,
              apiKeyHeader: e7,
              customHeaderName: e8,
              oauthSettings: tM ? ty : void 0,
              hasPreconfiguredOAuthClient: tw,
            })
          }),
          (eP[28] = ek),
          (eP[29] = e7),
          (eP[30] = e5),
          (eP[31] = eQ),
          (eP[32] = eV),
          (eP[33] = tM),
          (eP[34] = tw),
          (eP[35] = e8),
          (eP[36] = tl),
          (eP[37] = eK),
          (eP[38] = eW),
          (eP[39] = ty),
          (eP[40] = e4),
          (eP[41] = e0),
          (eP[42] = X))
        : (X = eP[42]),
        eP[43] !== eI
          ? ((W = async (e) => {
              ;(tO(e), await eI(e))
            }),
            (eP[43] = eI),
            (eP[44] = W))
          : (W = eP[44]),
        eP[45] !== X || eP[46] !== W
          ? ((Z = { mutationFn: X, onSuccess: W }), (eP[45] = X), (eP[46] = W), (eP[47] = Z))
          : (Z = eP[47]))
      let tU = (0, r.n)(Z),
        tN = tI.isPending || tU.isPending
      eP[48] === Symbol.for("react.memo_cache_sentinel") ? ((Q = () => eX(!0)), (eP[48] = Q)) : (Q = eP[48])
      let {
          getRootProps: tT,
          getInputProps: tL,
          inputRef: tz,
          isDragActive: tK,
          open: tq,
        } = (0, u.V)({
          multiple: !1,
          noClick: !0,
          noKeyboard: !0,
          disabled: tN || !eD,
          accept: { "application/zip": [".zip"], "application/gzip": [".tar.gz", ".tgz"] },
          onDrop: (e, t) => {
            if (!tH.current?.isConnected || tH.current.disabled) return
            let a = e[0],
              i = t.length > 0 || null == a || null != (0, k.QZ)(a, eL)
            ;(eX(i), e$(i ? null : a), tI.reset())
          },
          onError: Q,
        }),
        tH = tz
      eP[49] !== ek ? ((ee = ["plugins", "mcp-tunnels", ek]), (eP[49] = ek), (eP[50] = ee)) : (ee = eP[50])
      let tF = "mcp" === eF && "tunnel" === eQ
      ;(eP[51] !== ek
        ? ((et = () =>
            (async function (e) {
              return (
                (
                  await N.CodexRequest.safeGet("/aip/connectors/mcp/tunnels", {
                    surface: "plugin_management",
                    additionalHeaders: L(e),
                  })
                ).tunnels ?? []
              )
            })(ek)),
          (eP[51] = ek),
          (eP[52] = et))
        : (et = eP[52]),
        eP[53] !== ee || eP[54] !== tF || eP[55] !== et
          ? ((ea = { queryKey: ee, enabled: tF, queryFn: et, staleTime: P.D.ONE_MINUTE }),
            (eP[53] = ee),
            (eP[54] = tF),
            (eP[55] = et),
            (eP[56] = ea))
          : (ea = eP[56]))
      let { data: tG, isError: tB, refetch: t$ } = (0, s.I)(ea)
      eP[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((en = (e, t) => {
            let a = e[0],
              i = t.length > 0 || null == a || !K(a)
            ;(tu(i), tc(i ? null : a))
          }),
          (eP[57] = en))
        : (en = eP[57])
      let tJ = en
      ;(eP[58] === Symbol.for("react.memo_cache_sentinel")
        ? ((es = { "image/png": [".png"] }), (eP[58] = es))
        : (es = eP[58]),
        eP[59] === Symbol.for("react.memo_cache_sentinel") ? ((er = () => tu(!0)), (eP[59] = er)) : (er = eP[59]))
      let {
          getRootProps: tX,
          getInputProps: tW,
          inputRef: tZ,
          open: tV,
        } = (0, u.V)({
          multiple: !1,
          noClick: !0,
          noKeyboard: !0,
          disabled: tN,
          accept: es,
          onDrop: (e, t) => {
            tY.current?.isConnected && !tY.current?.disabled && tJ(e, t)
          },
          onError: er,
        }),
        tY = tZ
      if (eH !== ek) return null
      if (null != tD) {
        let e,
          t,
          a,
          n,
          s,
          r = tD.logo_url ?? null,
          o = tD.logo_url_dark ?? null
        return (
          eP[60] !== tD.description || eP[61] !== tD.id || eP[62] !== tD.name || eP[63] !== r || eP[64] !== o
            ? ((e = (0, f.w)({
                id: tD.id,
                name: tD.name,
                description: tD.description,
                iconUrl: r,
                iconUrlDark: o,
                distributionChannel: null,
                installUrl: null,
                pluginDisplayNames: [],
                toolSummaries: null,
              })),
              (eP[60] = tD.description),
              (eP[61] = tD.id),
              (eP[62] = tD.name),
              (eP[63] = r),
              (eP[64] = o),
              (eP[65] = e))
            : (e = eP[65]),
          eP[66] !== ek || eP[67] !== eH
            ? ((t = async () => eH === ek), (eP[66] = ek), (eP[67] = eH), (eP[68] = t))
            : (t = eP[68]),
          eP[69] !== tD.id || eP[70] !== tE || eP[71] !== eU
            ? ((a = async () => {
                ;(tE(tD.id), await eU())
              }),
              (eP[69] = tD.id),
              (eP[70] = tE),
              (eP[71] = eU),
              (eP[72] = a))
            : (a = eP[72]),
          eP[73] !== eR
            ? ((n = (e) => {
                e || eR()
              }),
              (eP[73] = eR),
              (eP[74] = n))
            : (n = eP[74]),
          eP[75] !== tR || eP[76] !== e || eP[77] !== t || eP[78] !== a || eP[79] !== n
            ? ((s = (0, i.jsx)(y.Z, {
                oauthReferrer: "plugin_create",
                app: e,
                hostId: eq,
                allowBrowserFallback: !0,
                beforeConnect: t,
                onOAuthStarted: tR,
                onConnected: a,
                onOpenChange: n,
              })),
              (eP[75] = tR),
              (eP[76] = e),
              (eP[77] = t),
              (eP[78] = a),
              (eP[79] = n),
              (eP[80] = s))
            : (s = eP[80]),
          s
        )
      }
      let tQ = null != tm
      eP[81] !== tM || eP[82] !== tf || eP[83] !== ty
        ? ((eo =
            tf &&
            tM &&
            (!ty.config.authorization_url.trim() ||
              !ty.config.token_url.trim() ||
              null == z("url", ty.config.authorization_url, "") ||
              null == z("url", ty.config.token_url, ""))),
          (eP[81] = tM),
          (eP[82] = tf),
          (eP[83] = ty),
          (eP[84] = eo))
        : (eo = eP[84])
      let t1 = eo,
        t0 = "archive" === eF ? tI.error : tU.error,
        t2 = "mcp" === eF && tf && tt && null != tm,
        t4 = _.lG,
        t3 = (t2 && "xxxwideTall") || ("mcp" === eF ? "wide" : "large")
      eP[85] !== tN || eP[86] !== eR
        ? ((el = (e) => {
            e || tN || eR()
          }),
          (eP[85] = tN),
          (eP[86] = eR),
          (eP[87] = el))
        : (el = eP[87])
      let t5 = "mcp" === eF ? "top" : "centered",
        t6 = !tN
      eP[88] === Symbol.for("react.memo_cache_sentinel")
        ? ((ec = { "aria-describedby": void 0 }), (eP[88] = ec))
        : (ec = eP[88])
      let t7 = v.R4,
        t9 = (t2 && "full") || ("archive" === eF ? "viewport" : "topPositioned")
      ;(eP[89] !== e7 ||
      eP[90] !== tU ||
      eP[91] !== eB ||
      eP[92] !== tI ||
      eP[93] !== e5 ||
      eP[94] !== eO ||
      eP[95] !== eD ||
      eP[96] !== t_ ||
      eP[97] !== e8 ||
      eP[98] !== tk ||
      eP[99] !== t1 ||
      eP[100] !== tN ||
      eP[101] !== eF ||
      eP[102] !== eW ||
      eP[103] !== tS ||
      eP[104] !== tQ
        ? ((ed = (e) => {
            ;(e.preventDefault(),
              !tN &&
                ("archive" === eF && null != eB && eD
                  ? tI.mutate()
                  : "mcp" === eF &&
                    eO &&
                    tS &&
                    tQ &&
                    eW.trim() &&
                    !t1 &&
                    !tk &&
                    !t_ &&
                    ("API_KEY" !== e5 || "CUSTOM_HEADER" !== e7 || e8.trim()) &&
                    tU.mutate()))
          }),
          (eP[89] = e7),
          (eP[90] = tU),
          (eP[91] = eB),
          (eP[92] = tI),
          (eP[93] = e5),
          (eP[94] = eO),
          (eP[95] = eD),
          (eP[96] = t_),
          (eP[97] = e8),
          (eP[98] = tk),
          (eP[99] = t1),
          (eP[100] = tN),
          (eP[101] = eF),
          (eP[102] = eW),
          (eP[103] = tS),
          (eP[104] = tQ),
          (eP[105] = ed))
        : (ed = eP[105]),
        eP[106] !== eF
          ? ((eu = (0, i.jsx)(v.OO, {
              children: (0, i.jsx)(_.L3, {
                className: "heading-dialog font-semibold select-none",
                children:
                  "mcp" === eF
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
            (eP[106] = eF),
            (eP[107] = eu))
          : (eu = eP[107]))
      let t8 = t2 && "flex-1 overflow-y-auto md:flex md:gap-6 md:overflow-hidden"
      eP[108] !== t8 ? ((ep = (0, o.A)("min-h-0 pt-3", t8)), (eP[108] = t8), (eP[109] = ep)) : (ep = eP[109])
      let ae = t2 && "md:flex md:min-h-0 md:flex-1 md:flex-col"
      eP[110] !== ae ? ((eh = (0, o.A)("min-w-0", ae)), (eP[110] = ae), (eP[111] = eh)) : (eh = eP[111])
      let at = t2 && "md:flex-1 md:overflow-y-auto"
      eP[112] !== at ? ((eg = (0, o.A)("min-h-0", at)), (eP[112] = at), (eP[113] = eg)) : (eg = eP[113])
      let aa =
        "archive" === eF
          ? (0, i.jsxs)(v.OO, {
              className: "gap-4",
              spacing: "large",
              children: [
                (0, i.jsxs)("div", {
                  ...tT({
                    className: (0, o.A)(
                      "flex min-h-48 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-primary-outline px-4 py-8 text-center text-sm select-none",
                      tK ? "bg-codex-drop-overlay/80" : "bg-surface",
                    ),
                  }),
                  children: [
                    (0, i.jsx)("input", { ...tL({ hidden: !0, name: "plugin-archive" }) }),
                    null == eB
                      ? (0, i.jsx)(b._Ui, { className: "text-secondary" })
                      : (0, i.jsx)(b.o_G, { className: "text-secondary" }),
                    (0, i.jsxs)("div", {
                      className: "flex w-full min-w-0 flex-col gap-1",
                      children: [
                        null != eB
                          ? (0, i.jsx)("span", {
                              className: "w-full truncate font-semibold select-text",
                              children: eB.name,
                            })
                          : null,
                        null == eB && tK
                          ? (0, i.jsx)(h.A, {
                              id: "plugins.create.dropArchive",
                              defaultMessage: "Drop the plugin here…",
                              description:
                                "Prompt in the new plugin dialog while a user drags a local plugin archive over the drop area",
                            })
                          : null,
                        null != eB || tK
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
                                        "cursor-interaction border-0 bg-transparent p-0 text-info hover:underline disabled:cursor-default disabled:text-secondary disabled:no-underline",
                                      type: "button",
                                      disabled: tN || !eD,
                                      onClick: tq,
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
                            values: { sizeLimit: (0, w.z)(eL, eN) },
                          }),
                        }),
                      ],
                    }),
                    null != eB
                      ? (0, i.jsx)(x.$, {
                          type: "button",
                          color: "outlineGhost",
                          size: "dialogAction",
                          disabled: tN || !eD,
                          onClick: tq,
                          children: (0, i.jsx)(h.A, {
                            id: "plugins.create.chooseArchive",
                            defaultMessage: "Choose file",
                            description: "Open the file chooser for a plugin archive",
                          }),
                        })
                      : null,
                  ],
                }),
                eJ
                  ? (0, i.jsx)("span", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, i.jsx)(h.A, {
                        id: "plugins.create.invalidArchiveWithLimit",
                        defaultMessage: "Choose a .zip, .tar.gz, or .tgz file no larger than {sizeLimit}",
                        description:
                          "Error for an invalid plugin archive. sizeLimit is the formatted maximum size of the compressed archive, such as 100 MB.",
                        values: { sizeLimit: (0, w.z)(eL, eN) },
                      }),
                    })
                  : null,
              ],
            })
          : (0, i.jsxs)(v.OO, {
              className: "gap-4 text-sm",
              children: [
                (0, i.jsxs)("div", {
                  ...tX({ className: "flex items-center gap-3" }),
                  children: [
                    (0, i.jsx)("input", { ...tW({ hidden: !0, name: "app-icon" }) }),
                    null,
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(x.$, {
                          color: "secondary",
                          onClick: tV,
                          disabled: tN,
                          children: (0, i.jsx)(h.A, {
                            id: "plugins.create.icon",
                            defaultMessage: "Choose icon",
                            description: "Select an optional PNG icon for a new MCP app",
                          }),
                        }),
                        (0, i.jsx)("span", {
                          className: "text-secondary",
                          children:
                            tl?.name ??
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
                td
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
                      disabled: tN,
                      placeholder: eN.formatMessage({
                        id: "plugins.create.namePlaceholder",
                        defaultMessage: "Custom Tool",
                        description: "Example name for a new custom MCP app.",
                      }),
                      value: eW,
                      onChange: (e) => eZ(e.target.value),
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
                      disabled: tN,
                      variant: "compact",
                      autoResize: !0,
                      rows: 1,
                      placeholder: eN.formatMessage({
                        id: "plugins.create.descriptionPlaceholder",
                        defaultMessage: "Explain what it does in a few words",
                        description: "Placeholder asking for a short description of a custom MCP app.",
                      }),
                      value: eV,
                      onChange: (e) => eY(e.target.value),
                    }),
                  ],
                }),
                (0, i.jsx)(V, {
                  connection: eQ,
                  isPending: tN,
                  onChange: (e) => {
                    ;(e1(e), ta(!1), to(null), tn(null), th(null))
                  },
                  children:
                    "url" === eQ
                      ? (0, i.jsx)(C.pd, {
                          type: "url",
                          required: !0,
                          "aria-label": eN.formatMessage({
                            id: "plugins.create.serverUrl",
                            defaultMessage: "Server URL",
                            description: "Connect an MCP app using a server URL",
                          }),
                          value: e0,
                          disabled: tN,
                          placeholder: "https://example.com/mcp",
                          "aria-invalid": e0.length > 0 && !tQ,
                          onChange: (e) => {
                            ;(e2(e.target.value), ta(!1), to(null), tn(null), th(null))
                          },
                        })
                      : (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(C.pd, {
                              required: !0,
                              "aria-label": eN.formatMessage({
                                id: "plugins.create.tunnelId",
                                defaultMessage: "Tunnel ID",
                                description: "Identifier of the secure tunnel for the new MCP app",
                              }),
                              value: e4,
                              disabled: tN,
                              placeholder: "tunnel_...",
                              "aria-invalid": e4.length > 0 && !tQ,
                              onChange: (e) => {
                                ;(e3(e.target.value), ta(!1), to(null), tn(null), th(null))
                              },
                            }),
                            tG?.length
                              ? (0, i.jsx)("div", {
                                  className: "flex flex-wrap gap-2",
                                  children: tG.map((e) =>
                                    (0, i.jsx)(
                                      x.$,
                                      {
                                        color: "secondary",
                                        onClick: () => {
                                          ;(e3(e.id), ta(!1), to(null), tn(null), th(null))
                                        },
                                        children: e.name || e.id,
                                      },
                                      e.id,
                                    ),
                                  ),
                                })
                              : null,
                            tB
                              ? (0, i.jsx)(x.$, {
                                  color: "secondary",
                                  onClick: () => void t$(),
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
                      value: e5,
                      disabled: tN,
                      onChange: (e) => {
                        let t = e.target.value
                        ;("OAUTH" === t || "API_KEY" === t || "NONE" === t || "MIXED" === t) && e6(t)
                      },
                      children: [
                        (0, i.jsx)("option", {
                          value: "OAUTH",
                          children: eN.formatMessage({
                            id: "plugins.create.authOauth",
                            defaultMessage: "OAuth",
                            description: "OAuth authentication for an MCP app",
                          }),
                        }),
                        ez
                          ? (0, i.jsx)("option", {
                              value: "API_KEY",
                              children: eN.formatMessage({
                                id: "plugins.create.authApiKey",
                                defaultMessage: "API key",
                                description: "API key authentication for an MCP app",
                              }),
                            })
                          : null,
                        (0, i.jsx)("option", {
                          value: "NONE",
                          children: eN.formatMessage({
                            id: "plugins.create.authNone",
                            defaultMessage: "No authentication",
                            description: "An MCP app without authentication",
                          }),
                        }),
                        (0, i.jsx)("option", {
                          value: "MIXED",
                          children: eN.formatMessage({
                            id: "plugins.create.authMixed",
                            defaultMessage: "OAuth or no authentication",
                            description: "An MCP app with optional OAuth authentication",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                "API_KEY" === e5
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
                          value: e7,
                          disabled: tN,
                          onChange: (e) => {
                            let t = e.target.value
                            ;("BEARER" === t || "BASIC" === t || "CUSTOM_HEADER" === t) && e9(t)
                          },
                          children: [
                            (0, i.jsx)("option", {
                              value: "BEARER",
                              children: eN.formatMessage({
                                id: "plugins.create.headerBearer",
                                defaultMessage: "Bearer",
                                description: "Bearer header for an MCP API key",
                              }),
                            }),
                            (0, i.jsx)("option", {
                              value: "BASIC",
                              children: eN.formatMessage({
                                id: "plugins.create.headerBasic",
                                defaultMessage: "Basic",
                                description: "Basic header for an MCP API key",
                              }),
                            }),
                            (0, i.jsx)("option", {
                              value: "CUSTOM_HEADER",
                              children: eN.formatMessage({
                                id: "plugins.create.headerCustom",
                                defaultMessage: "Custom header",
                                description: "Custom header for an MCP API key",
                              }),
                            }),
                          ],
                        }),
                        "CUSTOM_HEADER" === e7
                          ? (0, i.jsx)(C.pd, {
                              required: !0,
                              disabled: tN,
                              value: e8,
                              onChange: (e) => te(e.target.value),
                              placeholder: "X-API-Key",
                            })
                          : null,
                      ],
                    })
                  : null,
                tf
                  ? (0, i.jsxs)(x.$, {
                      className: "justify-between text-start",
                      color: "outline",
                      size: "surveyCard",
                      radius: "large",
                      "aria-labelledby": `${ts}-trigger`,
                      "aria-describedby": `${ts}-description`,
                      "aria-expanded": tt,
                      "aria-controls": ts,
                      disabled: tN || !tQ,
                      onClick: () => {
                        ;(ta(!tt), tn(tg))
                      },
                      children: [
                        (0, i.jsxs)("span", {
                          className: "flex min-w-0 flex-col gap-1",
                          children: [
                            (0, i.jsx)("span", {
                              id: `${ts}-trigger`,
                              className: "font-medium",
                              children: (0, i.jsx)(h.A, {
                                id: "plugins.create.advancedOauth",
                                defaultMessage: "Advanced OAuth settings",
                                description: "Expand advanced OAuth settings for the MCP app",
                              }),
                            }),
                            (0, i.jsx)("span", {
                              id: `${ts}-description`,
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
                        tt ? (0, i.jsx)(b.Aq_, {}) : (0, i.jsx)(b.uM3, {}),
                      ],
                    })
                  : null,
                (0, i.jsx)(Y, { trusted: tS, isPending: tN, onTrustedChange: (e) => th(e ? tg : null) }),
              ],
            })
      ;(eP[114] !== t0 || eP[115] !== eF
        ? ((em =
            null != t0
              ? (0, i.jsx)(v.OO, {
                  children: (0, i.jsx)("span", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: "archive" === eF ? (0, i.jsx)(R, { error: t0 }) : (0, i.jsx)(J, { error: t0 }),
                  }),
                })
              : null),
          (eP[114] = t0),
          (eP[115] = eF),
          (eP[116] = em))
        : (em = eP[116]),
        eP[117] !== eg || eP[118] !== aa || eP[119] !== em
          ? ((ef = (0, i.jsxs)("div", { className: eg, children: [aa, em] })),
            (eP[117] = eg),
            (eP[118] = aa),
            (eP[119] = em),
            (eP[120] = ef))
          : (ef = eP[120]))
      let ai = "archive" === eF ? "large" : "default",
        an = "archive" === eF ? "dialogAction" : void 0
      return (
        eP[121] !== e7 ||
        eP[122] !== eB ||
        eP[123] !== e5 ||
        eP[124] !== eO ||
        eP[125] !== eD ||
        eP[126] !== t_ ||
        eP[127] !== e8 ||
        eP[128] !== tk ||
        eP[129] !== t1 ||
        eP[130] !== tN ||
        eP[131] !== eF ||
        eP[132] !== eW ||
        eP[133] !== tS ||
        eP[134] !== tQ
          ? ((ex =
              tN ||
              ("archive" === eF
                ? !eB || !eD
                : !eO ||
                  !eW.trim() ||
                  !tQ ||
                  !tS ||
                  t1 ||
                  tk ||
                  t_ ||
                  ("API_KEY" === e5 && "CUSTOM_HEADER" === e7 && !e8.trim()))),
            (eP[121] = e7),
            (eP[122] = eB),
            (eP[123] = e5),
            (eP[124] = eO),
            (eP[125] = eD),
            (eP[126] = t_),
            (eP[127] = e8),
            (eP[128] = tk),
            (eP[129] = t1),
            (eP[130] = tN),
            (eP[131] = eF),
            (eP[132] = eW),
            (eP[133] = tS),
            (eP[134] = tQ),
            (eP[135] = ex))
          : (ex = eP[135]),
        eP[136] !== eF
          ? ((e_ =
              "archive" === eF
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
            (eP[136] = eF),
            (eP[137] = e_))
          : (e_ = eP[137]),
        eP[138] !== tN || eP[139] !== an || eP[140] !== ex || eP[141] !== e_
          ? ((ev = (0, i.jsx)(x.$, {
              type: "submit",
              color: "primary",
              size: an,
              loading: tN,
              disabled: ex,
              children: e_,
            })),
            (eP[138] = tN),
            (eP[139] = an),
            (eP[140] = ex),
            (eP[141] = e_),
            (eP[142] = ev))
          : (ev = eP[142]),
        eP[143] !== eO ||
        eP[144] !== eD ||
        eP[145] !== tN ||
        eP[146] !== eF ||
        eP[147] !== eR ||
        eP[148] !== eG ||
        eP[149] !== ev
          ? ((eb = (0, i.jsx)(I, {
              mode: eF,
              canCreateMcpApp: eO,
              canUploadArchive: eD,
              isPending: tN,
              onModeChange: eG,
              onClose: eR,
              submitButton: ev,
            })),
            (eP[143] = eO),
            (eP[144] = eD),
            (eP[145] = tN),
            (eP[146] = eF),
            (eP[147] = eR),
            (eP[148] = eG),
            (eP[149] = ev),
            (eP[150] = eb))
          : (eb = eP[150]),
        eP[151] !== ai || eP[152] !== eb
          ? ((eC = (0, i.jsx)(v.OO, { spacing: ai, children: eb })), (eP[151] = ai), (eP[152] = eb), (eP[153] = eC))
          : (eC = eP[153]),
        eP[154] !== eh || eP[155] !== ef || eP[156] !== eC
          ? ((ey = (0, i.jsxs)("div", { className: eh, children: [ef, eC] })),
            (eP[154] = eh),
            (eP[155] = ef),
            (eP[156] = eC),
            (eP[157] = ey))
          : (ey = eP[157]),
        eP[158] !== ek ||
        eP[159] !== ts ||
        eP[160] !== tg ||
        eP[161] !== tx ||
        eP[162] !== t_ ||
        eP[163] !== tw ||
        eP[164] !== tN ||
        eP[165] !== eK ||
        eP[166] !== tv ||
        eP[167] !== ty ||
        eP[168] !== tb ||
        eP[169] !== to ||
        eP[170] !== t2 ||
        eP[171] !== tm
          ? ((eM = t2
              ? (0, i.jsx)("aside", {
                  id: ts,
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
                        t_
                          ? (0, i.jsx)("p", {
                              role: "status",
                              children: (0, i.jsx)(h.A, {
                                id: "plugins.create.oauth.loading",
                                defaultMessage: "Discovering OAuth settings…",
                                description: "Loading status while reading a custom MCP server's OAuth metadata.",
                              }),
                            })
                          : null,
                        !t_ && (tv || null == tx)
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
                                    ;(to(null), tb())
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
                        (0, i.jsx)(ei, {
                          allowPrivateKeyJwt: eK,
                          accountId: ek,
                          target: tm,
                          hasPreconfiguredOAuthClient: tw,
                          value: ty,
                          disabled: tN || t_,
                          onChange: (e) => to({ key: tg, value: e }),
                        }),
                      ],
                    }),
                  }),
                })
              : null),
            (eP[158] = ek),
            (eP[159] = ts),
            (eP[160] = tg),
            (eP[161] = tx),
            (eP[162] = t_),
            (eP[163] = tw),
            (eP[164] = tN),
            (eP[165] = eK),
            (eP[166] = tv),
            (eP[167] = ty),
            (eP[168] = tb),
            (eP[169] = to),
            (eP[170] = t2),
            (eP[171] = tm),
            (eP[172] = eM))
          : (eM = eP[172]),
        eP[173] !== ep || eP[174] !== ey || eP[175] !== eM
          ? ((ej = (0, i.jsxs)("div", { className: ep, children: [ey, eM] })),
            (eP[173] = ep),
            (eP[174] = ey),
            (eP[175] = eM),
            (eP[176] = ej))
          : (ej = eP[176]),
        eP[177] !== t7 || eP[178] !== t9 || eP[179] !== ed || eP[180] !== eu || eP[181] !== ej
          ? ((eA = (0, i.jsxs)(t7, { as: "form", size: t9, onSubmit: ed, children: [eu, ej] })),
            (eP[177] = t7),
            (eP[178] = t9),
            (eP[179] = ed),
            (eP[180] = eu),
            (eP[181] = ej),
            (eP[182] = eA))
          : (eA = eP[182]),
        eP[183] !== t4 ||
        eP[184] !== tN ||
        eP[185] !== t3 ||
        eP[186] !== el ||
        eP[187] !== t5 ||
        eP[188] !== t6 ||
        eP[189] !== ec ||
        eP[190] !== eA
          ? ((ew = (0, i.jsx)(t4, {
              open: !0,
              size: t3,
              onOpenChange: el,
              contentPosition: t5,
              showDialogClose: t6,
              shouldIgnoreClickOutside: tN,
              contentProps: ec,
              children: eA,
            })),
            (eP[183] = t4),
            (eP[184] = tN),
            (eP[185] = t3),
            (eP[186] = el),
            (eP[187] = t5),
            (eP[188] = t6),
            (eP[189] = ec),
            (eP[190] = eA),
            (eP[191] = ew))
          : (ew = eP[191]),
        ew
      )
    }
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
//# sourceMappingURL=890583.86cdb604a9.js.map
