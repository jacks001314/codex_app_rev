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
    let n = a("ASxG").aig().int().positive().catch(0x6400000)
    a.d(t, {}, { H: n })
  },
  wmRG(e, t, a) {
    a.d(t, { HostedPluginCreateDialog: () => W })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("T0Rc"),
      r = a("xSOA"),
      l = a("on57"),
      o = a("qmMi"),
      c = a("DBCl"),
      u = a("zd8w"),
      d = a("SXgZ"),
      p = a("Wf1j"),
      h = a("oyxz"),
      g = a("yxN2"),
      m = a("OiCI"),
      f = a("bxoL"),
      _ = a("Sm6l"),
      x = a("JNtf"),
      v = a("mUDD"),
      j = a("bVeK"),
      y = a("zLIa"),
      b = a("ecE5"),
      M = a("BSnr"),
      C = a("ZEx5")
    a("kfGJ")
    var A = a("hZax"),
      S = a("ARVD"),
      w = a("rvFo"),
      k = a("d635"),
      D = a("ASxG"),
      N = a("eShZ")
    let R = D.Ikc({
      detail: D.KCZ([
        D.YjP().trim().min(1),
        D.Ikc({ message: D.YjP().trim().min(1) }).transform(({ message: e }) => e),
      ]),
    })
    function I(e) {
      let t,
        a = (0, s.c)(8),
        { error: i } = e
      if (i instanceof N.FetchError) {
        if ("network" === i.errorKind) {
          let e
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.archiveNetworkError",
                  defaultMessage: "Couldn't upload the plugin. Check your internet connection and try again.",
                })),
                (a[0] = e))
              : (e = a[0]),
            e
          )
        }
        if (429 === i.status) {
          let e
          return (
            a[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.archiveRateLimited",
                  defaultMessage: "Too many upload attempts. Wait a moment and try again.",
                })),
                (a[1] = e))
              : (e = a[1]),
            e
          )
        }
        if (i.status >= 500) {
          let e
          return (
            a[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.archiveServiceUnavailable",
                  defaultMessage:
                    "Couldn't add the plugin because the service is temporarily unavailable. Try again shortly.",
                })),
                (a[2] = e))
              : (e = a[2]),
            e
          )
        }
        if (i.status >= 400 && i.status < 500) {
          let e
          a[3] !== i.message
            ? ((e = (function (e) {
                try {
                  return R.safeParse(JSON.parse(e)).data?.detail ?? null
                } catch {
                  return null
                }
              })(i.message)),
              (a[3] = i.message),
              (a[4] = e))
            : (e = a[4])
          let t = e
          if (null != t) {
            let e
            return (
              a[5] !== t ? ((e = (0, n.jsx)(n.Fragment, { children: t })), (a[5] = t), (a[6] = e)) : (e = a[6]),
              e
            )
          }
        }
      }
      return (
        a[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(h.A, {
              id: "plugins.create.archiveFailedGeneric",
              defaultMessage: "Couldn't add plugin. Try again.",
            })),
            (a[7] = t))
          : (t = a[7]),
        t
      )
    }
    var E = a("sZSa")
    function U(e) {
      let t,
        a,
        i,
        r,
        l,
        o = (0, s.c)(17),
        {
          mode: c,
          canCreateMcpApp: u,
          canUploadArchive: d,
          isPending: p,
          onModeChange: g,
          onClose: m,
          submitButton: f,
        } = e
      o[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, n.jsx)(h.A, { id: "plugins.create.cancel", defaultMessage: "Cancel" })), (o[0] = t))
        : (t = o[0])
      let x = t
      o[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, n.jsx)(h.A, { id: "plugins.create.switchToMcp", defaultMessage: "Add custom MCP server" })),
          (o[1] = a))
        : (a = o[1])
      let j = a
      o[2] !== u || o[3] !== d || o[4] !== p || o[5] !== c || o[6] !== g
        ? ((i = ("archive" === c ? u : d)
            ? (0, n.jsx)(_.$, {
                className: "me-auto",
                color: "secondary",
                disabled: p,
                onClick: () => g("archive" === c ? "mcp" : "archive"),
                children:
                  "archive" === c
                    ? j
                    : (0, n.jsx)(h.A, {
                        id: "plugins.create.switchToArchive",
                        defaultMessage: "Upload plugin archive",
                      }),
              })
            : null),
          (o[2] = u),
          (o[3] = d),
          (o[4] = p),
          (o[5] = c),
          (o[6] = g),
          (o[7] = i))
        : (i = o[7])
      let y = "archive" === c ? "outlineGhost" : "ghost",
        b = "archive" === c ? "dialogAction" : void 0
      return (
        o[8] !== p || o[9] !== m || o[10] !== y || o[11] !== b
          ? ((r = (0, n.jsx)(_.$, { color: y, size: b, disabled: p, onClick: m, children: x })),
            (o[8] = p),
            (o[9] = m),
            (o[10] = y),
            (o[11] = b),
            (o[12] = r))
          : (r = o[12]),
        o[13] !== f || o[14] !== i || o[15] !== r
          ? ((l = (0, n.jsxs)(n.Fragment, {
              children: [
                null,
                (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsxs)(v.Es, { className: "flex-wrap", children: [i, r, f] }),
                }),
              ],
            })),
            (o[13] = f),
            (o[14] = i),
            (o[15] = r),
            (o[16] = l))
          : (l = o[16]),
        l
      )
    }
    var O = a("OwuR")
    function P(e) {
      let t = (0, s.c)(25),
        { error: a } = e
      switch ((0, O.Yr)(a)) {
        case "tunnel-network-denied": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(h.A, {
                  id: "chatgpt.connectors.network_access_denied",
                  defaultMessage:
                    "Access to this connection is restricted by your organization's network policy. Contact your administrator for help.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.tunnelUnavailable",
                  defaultMessage:
                    "The tunnel client isn't connected. Make sure tunnel-client is running with the correct tunnel ID and organization, then try again.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.serverUnreachable",
                  defaultMessage:
                    "Couldn't reach the MCP server. Check the server URL and network access. If you're using a tunnel, make sure tunnel-client is running and connected.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.serverNotFound",
                  defaultMessage:
                    "The MCP endpoint wasn't found. Check the server URL or tunnel ID. For tunnels, make sure tunnel-client is running and connected.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.serverAuthRejected",
                  defaultMessage:
                    "The MCP server denied access. Check your authentication settings and, if using a tunnel, its workspace access.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.invalidServerResponse",
                  defaultMessage:
                    "The server couldn't complete MCP setup. Check that the endpoint supports MCP and returns valid initialization and tool responses.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.oauthRegistrationFailed",
                  defaultMessage:
                    "Couldn't register an OAuth client. Check the server's registration support or enter your client details in Advanced OAuth settings.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.invalidConfiguration",
                  defaultMessage:
                    "Some app settings were rejected. Check the server URL or tunnel ID, icon, and authentication settings, then try again.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.requestTooLarge",
                  defaultMessage:
                    "The app setup request or server response is too large. Reduce the icon or MCP payload size, then try again.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.rateLimited",
                  defaultMessage:
                    "App setup was rate limited. Wait a moment before trying again. If you're using a tunnel, also check that its client is running and connected.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.serviceUnavailable",
                  defaultMessage: "A service needed to create the app is temporarily unavailable. Try again shortly.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.signInRequired",
                  defaultMessage:
                    "ChatGPT couldn't authorize this request. Refresh the page or sign in again, then retry.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.networkError",
                  defaultMessage: "Couldn't connect to ChatGPT. Check your internet connection and try again.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.developerModeRequired",
                  defaultMessage: "Enable Developer mode in ChatGPT settings before creating an MCP app",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.customAppNotAllowed",
                  defaultMessage:
                    "Custom apps aren't allowed in this context. Check your workspace permissions or security settings",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.invalidTarget",
                  defaultMessage: "Enter a valid server URL or tunnel ID",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.iconError",
                  defaultMessage: "Choose a PNG file no larger than 10 KB",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.oauthEndpointsRequired",
                  defaultMessage: "Enter both OAuth endpoints for manual setup",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.invalidOauthUrl",
                  defaultMessage: "Enter valid OAuth endpoint URLs",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.oauthUnavailable",
                  defaultMessage: "Couldn't discover OAuth settings. Check the server URL or enter settings manually",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.nameAlreadyExists",
                  defaultMessage: "An app with this name already exists. Choose another name",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.oauth.privateKeyRequired",
                  defaultMessage: "Enter a private key in PEM format",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.oauthClientIdRequired",
                  defaultMessage: "Enter an OAuth client ID in Advanced OAuth settings",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.iconReadFailed",
                  defaultMessage: "Couldn't read the icon. Choose another file.",
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
              ? ((e = (0, n.jsx)(h.A, {
                  id: "plugins.create.appFailedGeneric",
                  defaultMessage: "Couldn't create MCP app. Try again.",
                })),
                (t[24] = e))
              : (e = t[24]),
            e
          )
        }
      }
    }
    var T = a("MM0V"),
      z = a("Sezd"),
      K = a("ZtSy")
    function L(e) {
      let t,
        a,
        i,
        r,
        l,
        o,
        c,
        u,
        d,
        g,
        m = (0, s.c)(22),
        { children: f, connection: _, isPending: x, onChange: v } = e
      ;((0, p.A)(),
        m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(h.A, { id: "plugins.create.connection", defaultMessage: "Connection" })), (m[0] = t))
          : (t = m[0]))
      let j = t
      m[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, n.jsx)(h.A, { id: "plugins.create.serverUrl", defaultMessage: "Server URL" })), (m[1] = a))
        : (a = m[1])
      let y = a
      m[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, n.jsx)(h.A, { id: "plugins.create.tunnel", defaultMessage: "Tunnel" })), (m[2] = i))
        : (i = m[2])
      let b = i
      m[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, n.jsx)("legend", { className: "font-medium", children: j })), (m[3] = r))
        : (r = m[3])
      let M = "url" === _
      ;(m[4] !== v ? ((l = () => v("url")), (m[4] = v), (m[5] = l)) : (l = m[5]),
        m[6] !== x || m[7] !== M || m[8] !== l
          ? ((o = (0, n.jsxs)("label", {
              className: "flex items-center gap-1",
              children: [
                (0, n.jsx)("input", { type: "radio", name: "mcp-connection", disabled: x, checked: M, onChange: l }),
                y,
              ],
            })),
            (m[6] = x),
            (m[7] = M),
            (m[8] = l),
            (m[9] = o))
          : (o = m[9]))
      let C = "tunnel" === _
      return (
        m[10] !== v ? ((c = () => v("tunnel")), (m[10] = v), (m[11] = c)) : (c = m[11]),
        m[12] !== x || m[13] !== C || m[14] !== c
          ? ((u = (0, n.jsxs)("label", {
              className: "flex items-center gap-1",
              children: [
                (0, n.jsx)("input", { type: "radio", name: "mcp-connection", disabled: x, checked: C, onChange: c }),
                b,
              ],
            })),
            (m[12] = x),
            (m[13] = C),
            (m[14] = c),
            (m[15] = u))
          : (u = m[15]),
        m[16] !== u || m[17] !== o
          ? ((d = (0, n.jsxs)("div", { className: "flex gap-4", children: [o, u] })),
            (m[16] = u),
            (m[17] = o),
            (m[18] = d))
          : (d = m[18]),
        m[19] !== f || m[20] !== d
          ? ((g = (0, n.jsxs)(n.Fragment, {
              children: [
                null,
                (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsxs)("fieldset", { className: "flex flex-col gap-2", children: [r, d, f] }),
                }),
              ],
            })),
            (m[19] = f),
            (m[20] = d),
            (m[21] = g))
          : (g = m[21]),
        g
      )
    }
    function q(e) {
      let t,
        a,
        i,
        r,
        l,
        o,
        c,
        d,
        p,
        g = (0, s.c)(20),
        { trusted: m, isPending: f, onTrustedChange: _ } = e,
        x = (0, u.useId)(),
        v = (0, u.useId)()
      ;(g[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, n.jsx)(h.A, {
            id: "chatgpt.apps.custom.creation.risk.description",
            defaultMessage:
              "Only connect to MCP servers you trust. An untrusted server may access or steal information shared through app use, or trick ChatGPT into using tools in unintended ways, including changing or deleting data.",
          })),
          (g[0] = t))
        : (t = g[0]),
        g[1] !== x
          ? ((a = (0, n.jsx)("span", { id: x, className: "text-xs text-secondary", children: t })),
            (g[1] = x),
            (g[2] = a))
          : (a = g[2]))
      let y = a
      return (
        g[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)(j.Ko7, { className: "text-warning" })), (g[3] = i))
          : (i = g[3]),
        g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(T.l, {
              type: "warning",
              variant: "callout",
              layout: "inline",
              icon: i,
              content: (0, n.jsx)(h.A, {
                id: "plugins.create.riskNotice",
                defaultMessage: "Custom MCP servers introduce risk. <link>Learn more</link>",
                values: { link: F },
              }),
            })),
            (g[4] = r))
          : (r = g[4]),
        g[5] !== v || g[6] !== f || g[7] !== _ || g[8] !== m || g[9] !== x
          ? ((l = (0, n.jsx)(z.S, {
              "aria-labelledby": v,
              "aria-describedby": x,
              checked: m,
              disabled: f,
              onCheckedChange: _,
            })),
            (g[5] = v),
            (g[6] = f),
            (g[7] = _),
            (g[8] = m),
            (g[9] = x),
            (g[10] = l))
          : (l = g[10]),
        g[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(h.A, {
              id: "createCustomConnectorModal.acceptLabelTitle",
              defaultMessage: "I understand and want to continue",
            })),
            (g[11] = o))
          : (o = g[11]),
        g[12] !== v
          ? ((c = (0, n.jsx)("span", { id: v, className: "font-medium", children: o })), (g[12] = v), (g[13] = c))
          : (c = g[13]),
        g[14] !== c || g[15] !== y
          ? ((d = (0, n.jsxs)("span", { className: "flex min-w-0 flex-col gap-1", children: [c, y] })),
            (g[14] = c),
            (g[15] = y),
            (g[16] = d))
          : (d = g[16]),
        g[17] !== l || g[18] !== d
          ? ((p = (0, n.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                r,
                (0, n.jsx)(C.t, {
                  variant: "form",
                  dividers: !1,
                  children: (0, n.jsxs)("label", {
                    className: "relative flex items-center gap-3 p-4",
                    children: [l, d],
                  }),
                }),
              ],
            })),
            (g[17] = l),
            (g[18] = d),
            (g[19] = p))
          : (p = g[19]),
        p
      )
    }
    function F(e) {
      return (0, n.jsx)(K.G, {
        href: "https://platform.openai.com/docs/mcp#risks-and-safety",
        openTarget: "external-browser",
        initiator: "open_in_browser_bridge",
        underline: "always",
        children: e,
      })
    }
    var G = a("rGp2"),
      H = a("uuN8"),
      B = a("nzx4"),
      $ = a("aepO"),
      J = a("kK7d")
    function X(e) {
      let t,
        a,
        r,
        l,
        o,
        c,
        u,
        d,
        g,
        m,
        f,
        x,
        v,
        b,
        A,
        S,
        k,
        D,
        N,
        R,
        I,
        E,
        U,
        P,
        K,
        L,
        q,
        F,
        X,
        W,
        Q,
        ee,
        et,
        ea,
        en,
        es,
        ei,
        er,
        el,
        eo,
        ec,
        eu,
        ed,
        ep,
        eh,
        eg,
        em,
        ef,
        e_,
        ex,
        ev,
        ej,
        ey,
        eb,
        eM,
        eC,
        eA,
        eS,
        ew,
        ek,
        eD,
        eN,
        eR,
        eI = (0, s.c)(175),
        {
          accountId: eE,
          target: eU,
          hasPreconfiguredOAuthClient: eO,
          allowPrivateKeyJwt: eP,
          value: eT,
          disabled: ez,
          onChange: eK,
        } = e,
        eL = void 0 !== eP && eP,
        eq = (0, p.A)()
      eI[0] !== eq
        ? ((t = eq.formatMessage({
            id: "plugins.create.oauth.listPlaceholder",
            defaultMessage: "One value per line or comma-separated",
          })),
          (eI[0] = eq),
          (eI[1] = t))
        : (t = eI[1])
      let eF = t
      eI[2] !== eq
        ? ((a = eq.formatMessage({ id: "plugins.create.oauth.urlPlaceholder", defaultMessage: "https://example.com" })),
          (eI[2] = eq),
          (eI[3] = a))
        : (a = eI[3])
      let eG = a
      eI[4] !== eT.clientMode || eI[5] !== eT.config
        ? ((r = (0, O.u_)(eT.config, eT.clientMode)), (eI[4] = eT.clientMode), (eI[5] = eT.config), (eI[6] = r))
        : (r = eI[6])
      let eH = r
      eI[7] !== eL || eI[8] !== eT ? ((l = (0, O.Lx)(eT, eL)), (eI[7] = eL), (eI[8] = eT), (eI[9] = l)) : (l = eI[9])
      let eB = l,
        e$ = eL && "private_key_jwt" === eB
      eI[10] !== eT.config.authorization_response_iss_parameter_supported ||
      eI[11] !== eT.config.authorization_server_base
        ? ((o =
            !0 === eT.config.authorization_response_iss_parameter_supported &&
            !!eT.config.authorization_server_base?.trim()),
          (eI[10] = eT.config.authorization_response_iss_parameter_supported),
          (eI[11] = eT.config.authorization_server_base),
          (eI[12] = o))
        : (o = eI[12])
      let eJ = o
      eI[13] !== eE || eI[14] !== eJ || eI[15] !== eU
        ? ((c = ["plugins", "mcp-oauth-callback", eE, eU, eJ]),
          (eI[13] = eE),
          (eI[14] = eJ),
          (eI[15] = eU),
          (eI[16] = c))
        : (c = eI[16])
      let eX = "DCR" !== eH && !ez
      ;(eI[17] !== eE || eI[18] !== eJ || eI[19] !== eU
        ? ((u = async (e) => {
            let { signal: t } = e,
              [a, n] = await Promise.all([
                (0, G.Tj)(),
                eJ
                  ? null
                  : J.CodexRequest.safeGet("/aip/connectors/oauth/callback_id", {
                      surface: "plugin_management",
                      additionalHeaders: { [G.ok]: (0, G.MR)(), "ChatGPT-Account-Id": eE },
                      parameters: { query: eU },
                      signal: t,
                    }),
              ])
            return (0, O.Xw)(a, n?.callback_id ?? null)
          }),
          (eI[17] = eE),
          (eI[18] = eJ),
          (eI[19] = eU),
          (eI[20] = u))
        : (u = eI[20]),
        eI[21] !== c || eI[22] !== eX || eI[23] !== u
          ? ((d = { queryKey: c, enabled: eX, staleTime: w.D.FIVE_MINUTES, retry: !1, queryFn: u }),
            (eI[21] = c),
            (eI[22] = eX),
            (eI[23] = u),
            (eI[24] = d))
          : (d = eI[24]))
      let { data: eY, isPending: eZ, isError: eV, refetch: eW } = (0, i.I)(d)
      ;(eI[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, n.jsx)(M.X.Header, {
            size: "compact",
            spacing: "compact",
            title: (0, n.jsx)(h.A, {
              id: "plugins.create.oauth.oauthClientSetupTitle",
              defaultMessage: "Client registration",
            }),
          })),
          (eI[25] = g))
        : (g = eI[25]),
        eI[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, n.jsx)(h.A, {
                id: "plugins.create.oauth.oauthClientModeDescription",
                defaultMessage:
                  "Choose whether ChatGPT should use your client credentials, Dynamic Client Registration (DCR), or Client Identifier Metadata Document (CIMD). See the <link>MCP client registration approaches</link>.",
                values: { link: V },
              }),
            })),
            (eI[26] = m))
          : (m = eI[26]),
        eI[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)(h.A, {
              id: "plugins.create.oauth.registrationMethod",
              defaultMessage: "Registration method",
            })),
            (eI[27] = f))
          : (f = eI[27]),
        eI[28] !== eK || eI[29] !== eT
          ? ((x = (e) => {
              let t = e.target.value
              ;("USER_DEFINED" === t || "DCR" === t || "CIMD" === t) && eK({ ...eT, clientMode: t })
            }),
            (eI[28] = eK),
            (eI[29] = eT),
            (eI[30] = x))
          : (x = eI[30]),
        eI[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, n.jsx)("option", {
              value: "USER_DEFINED",
              children: (0, n.jsx)(h.A, {
                id: "plugins.create.oauth.userDefined",
                defaultMessage: "User-Defined OAuth Client",
              }),
            })),
            (eI[31] = v))
          : (v = eI[31]),
        eI[32] !== eT.config.registration_url
          ? ((b = eT.config.registration_url?.trim()), (eI[32] = eT.config.registration_url), (eI[33] = b))
          : (b = eI[33]))
      let eQ = !b
      ;(eI[34] !== eT.config.registration_url
        ? ((A = eT.config.registration_url?.trim()
            ? (0, n.jsx)(h.A, { id: "plugins.create.oauth.dcr", defaultMessage: "Dynamic Client Registration (DCR)" })
            : (0, n.jsx)(h.A, {
                id: "plugins.create.oauth.dcrUnavailable",
                defaultMessage: "Dynamic Client Registration (DCR) (Unavailable)",
              })),
          (eI[34] = eT.config.registration_url),
          (eI[35] = A))
        : (A = eI[35]),
        eI[36] !== eQ || eI[37] !== A
          ? ((S = (0, n.jsx)("option", { value: "DCR", disabled: eQ, children: A })),
            (eI[36] = eQ),
            (eI[37] = A),
            (eI[38] = S))
          : (S = eI[38]))
      let e1 = !eT.config.client_id_metadata_document_supported
      return (
        eI[39] !== eT.config.client_id_metadata_document_supported
          ? ((k = eT.config.client_id_metadata_document_supported
              ? (0, n.jsx)(h.A, {
                  id: "plugins.create.oauth.cimd",
                  defaultMessage: "Client Identifier Metadata Document (CIMD)",
                })
              : (0, n.jsx)(h.A, {
                  id: "plugins.create.oauth.cimdRegistrationUnavailable",
                  defaultMessage: "Client Identifier Metadata Document (CIMD) (Unavailable)",
                })),
            (eI[39] = eT.config.client_id_metadata_document_supported),
            (eI[40] = k))
          : (k = eI[40]),
        eI[41] !== e1 || eI[42] !== k
          ? ((D = (0, n.jsx)("option", { value: "CIMD", disabled: e1, children: k })),
            (eI[41] = e1),
            (eI[42] = k),
            (eI[43] = D))
          : (D = eI[43]),
        eI[44] !== eH || eI[45] !== x || eI[46] !== S || eI[47] !== D
          ? ((N = (0, n.jsxs)("label", {
              className: "flex flex-col gap-1",
              children: [
                f,
                (0, n.jsxs)("select", {
                  className: "h-9 rounded-md border border-primary-outline bg-primary-soft px-2.5 text-sm text-default",
                  value: eH,
                  onChange: x,
                  children: [v, S, D],
                }),
              ],
            })),
            (eI[44] = eH),
            (eI[45] = x),
            (eI[46] = S),
            (eI[47] = D),
            (eI[48] = N))
          : (N = eI[48]),
        eI[49] !== eH
          ? ((R =
              "DCR" === eH
                ? (0, n.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, n.jsx)(h.A, {
                      id: "plugins.create.oauth.oauthClientModeDcrDescription",
                      defaultMessage:
                        "ChatGPT will dynamically register an OAuth client using the Registration URL in the OAuth endpoints section.",
                    }),
                  })
                : null),
            (eI[49] = eH),
            (eI[50] = R))
          : (R = eI[50]),
        eI[51] !== eH
          ? ((I =
              "CIMD" === eH
                ? (0, n.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, n.jsx)(h.A, {
                      id: "plugins.create.oauth.oauthClientModeCimdDescription",
                      defaultMessage:
                        "ChatGPT will use a Client Identifier Metadata Document instead of manually entered client credentials.",
                    }),
                  })
                : null),
            (eI[51] = eH),
            (eI[52] = I))
          : (I = eI[52]),
        eI[53] !== eH || eI[54] !== eO || eI[55] !== e$
          ? ((E =
              "USER_DEFINED" === eH
                ? (0, n.jsx)("p", {
                    className: "text-xs text-secondary",
                    children:
                      eO && !e$
                        ? (0, n.jsx)(h.A, {
                            id: "plugins.create.oauth.preconfiguredClientDescription",
                            defaultMessage:
                              "OpenAI already has a preconfigured OAuth client for this MCP server. Leave the client ID empty to use it, or enter your own client credentials to override it.",
                          })
                        : (0, n.jsx)(h.A, {
                            id: "plugins.create.oauth.oauthClientModeUserDefinedDescription",
                            defaultMessage: "Use your own OAuth client credentials for this connector",
                          }),
                  })
                : null),
            (eI[53] = eH),
            (eI[54] = eO),
            (eI[55] = e$),
            (eI[56] = E))
          : (E = eI[56]),
        eI[57] !== eT.config.registration_url || eI[58] !== eT.discovered
          ? ((U =
              eT.discovered && !eT.config.registration_url?.trim()
                ? (0, n.jsx)(T.l, {
                    type: "warning",
                    variant: "callout",
                    density: "compact",
                    content: (0, n.jsx)(h.A, {
                      id: "plugins.create.oauth.oauthClientModeDcrUnavailableDescription",
                      defaultMessage:
                        "DCR is unavailable until a Registration URL is present in the OAuth endpoints section below.",
                    }),
                  })
                : null),
            (eI[57] = eT.config.registration_url),
            (eI[58] = eT.discovered),
            (eI[59] = U))
          : (U = eI[59]),
        eI[60] !== eT.config.client_id_metadata_document_supported || eI[61] !== eT.discovered
          ? ((P =
              eT.discovered && !eT.config.client_id_metadata_document_supported
                ? (0, n.jsx)(T.l, {
                    type: "warning",
                    variant: "callout",
                    density: "compact",
                    content: (0, n.jsx)(h.A, {
                      id: "plugins.create.oauth.oauthClientModeCimdUnavailableDescription",
                      defaultMessage: "CIMD is unavailable because the server did not advertise CIMD support.",
                    }),
                  })
                : null),
            (eI[60] = eT.config.client_id_metadata_document_supported),
            (eI[61] = eT.discovered),
            (eI[62] = P))
          : (P = eI[62]),
        eI[63] !== eY ||
        eI[64] !== eV ||
        eI[65] !== eZ ||
        eI[66] !== eH ||
        eI[67] !== ez ||
        eI[68] !== eq ||
        eI[69] !== eW
          ? ((K =
              "DCR" !== eH
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)("label", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, n.jsx)(h.A, { id: "plugins.create.oauth.callbackUrl", defaultMessage: "Callback URL" }),
                          (0, n.jsx)(y.pd, {
                            readOnly: !0,
                            value:
                              eY?.redirect ??
                              (eZ
                                ? eq.formatMessage({
                                    id: "plugins.create.oauth.callbackLoading",
                                    defaultMessage: "Loading callback URL\u2026",
                                  })
                                : eq.formatMessage({
                                    id: "plugins.create.oauth.callbackUnavailable",
                                    defaultMessage: "Could not load callback URL",
                                  })),
                            trailingControl: (0, n.jsx)(H.i, {
                              ariaLabel: eq.formatMessage({
                                id: "plugins.create.oauth.copyCallbackUrl",
                                defaultMessage: "Copy callback URL",
                              }),
                              isDisabled: null == eY || ez,
                              onCopy: (e) => null != eY && (0, $.lW)(eY.redirect, e),
                            }),
                          }),
                        ],
                      }),
                      "CIMD" === eH
                        ? (0, n.jsxs)("label", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, n.jsx)(h.A, {
                                id: "plugins.create.oauth.cimdUrl",
                                defaultMessage: "CIMD client metadata URL",
                              }),
                              (0, n.jsx)(y.pd, {
                                readOnly: !0,
                                value:
                                  eY?.metadata ??
                                  (eZ
                                    ? eq.formatMessage({
                                        id: "plugins.create.oauth.cimdLoading",
                                        defaultMessage: "Loading CIMD URL\u2026",
                                      })
                                    : eq.formatMessage({
                                        id: "plugins.create.oauth.cimdUrlUnavailable",
                                        defaultMessage: "Could not load CIMD URL",
                                      })),
                                trailingControl: (0, n.jsx)(H.i, {
                                  ariaLabel: eq.formatMessage({
                                    id: "plugins.create.oauth.copyCimdUrl",
                                    defaultMessage: "Copy CIMD URL",
                                  }),
                                  isDisabled: null == eY || ez,
                                  onCopy: (e) => null != eY && (0, $.lW)(eY.metadata, e),
                                }),
                              }),
                            ],
                          })
                        : null,
                      eV
                        ? (0, n.jsxs)("div", {
                            role: "alert",
                            className: "flex flex-col gap-1 text-danger",
                            children: [
                              (0, n.jsx)(h.A, {
                                id: "plugins.create.oauth.callbackFailed",
                                defaultMessage: "Couldn\u2019t load the callback URL",
                              }),
                              (0, n.jsx)(_.$, {
                                color: "ghost",
                                onClick: () => void eW(),
                                children: (0, n.jsx)(h.A, {
                                  id: "plugins.create.oauth.retryCallback",
                                  defaultMessage: "Retry",
                                }),
                              }),
                            ],
                          })
                        : null,
                    ],
                  })
                : null),
            (eI[63] = eY),
            (eI[64] = eV),
            (eI[65] = eZ),
            (eI[66] = eH),
            (eI[67] = ez),
            (eI[68] = eq),
            (eI[69] = eW),
            (eI[70] = K))
          : (K = eI[70]),
        eI[71] !== eL ||
        eI[72] !== eH ||
        eI[73] !== eO ||
        eI[74] !== eq ||
        eI[75] !== eK ||
        eI[76] !== eB ||
        eI[77] !== e$ ||
        eI[78] !== eT
          ? ((L =
              "USER_DEFINED" === eH
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)("label", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, n.jsx)(h.A, {
                            id: "plugins.create.oauth.clientIdLabel",
                            defaultMessage: "OAuth client ID",
                          }),
                          (0, n.jsx)(y.pd, {
                            autoComplete: "off",
                            placeholder:
                              eO && !e$
                                ? eq.formatMessage({
                                    id: "plugins.create.oauth.clientIdOptionalPlaceholder",
                                    defaultMessage: "OAuth Client ID (Optional)",
                                  })
                                : eq.formatMessage({
                                    id: "plugins.create.oauth.clientIdPlaceholder",
                                    defaultMessage: "OAuth Client ID",
                                  }),
                            required: !1 === eO || e$ || !!eT.clientSecret.trim(),
                            value: eT.clientId,
                            onChange: (e) => eK({ ...eT, clientId: e.target.value }),
                          }),
                        ],
                      }),
                      e$
                        ? null
                        : (0, n.jsxs)("label", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, n.jsx)(h.A, {
                                id: "plugins.create.oauth.clientSecretLabel",
                                defaultMessage: "OAuth client secret",
                              }),
                              (0, n.jsx)(y.pd, {
                                type: "password",
                                autoComplete: "off",
                                placeholder: eq.formatMessage({
                                  id: "plugins.create.oauth.clientSecretPlaceholder",
                                  defaultMessage: "OAuth Client Secret (Optional)",
                                }),
                                value: eT.clientSecret,
                                onChange: (e) => eK({ ...eT, clientSecret: e.target.value }),
                              }),
                            ],
                          }),
                      (0, n.jsxs)("label", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, n.jsx)(h.A, {
                            id: "plugins.create.oauth.tokenAuthMethod",
                            defaultMessage: "Token endpoint auth method",
                          }),
                          (0, n.jsx)("select", {
                            className:
                              "h-9 rounded-md border border-primary-outline bg-primary-soft px-2.5 text-sm text-default",
                            value: eB,
                            onChange: (e) => {
                              eK({ ...eT, tokenAuthMethod: e.target.value })
                            },
                            children: (0, O.cK)(eT, eL).map((e) =>
                              (0, n.jsx)(
                                "option",
                                { value: e, disabled: "none" === e && !!eT.clientSecret.trim(), children: e },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
                      e$
                        ? (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsxs)("label", {
                                className: "flex flex-col gap-1",
                                children: [
                                  (0, n.jsx)(h.A, {
                                    id: "plugins.create.oauth.privateKeyPemLabel",
                                    defaultMessage: "Private key (PEM)",
                                  }),
                                  (0, n.jsx)(y.TM, {
                                    autoComplete: "off",
                                    spellCheck: !1,
                                    "data-dd-privacy": "mask",
                                    required: !0,
                                    rows: 3,
                                    value: eT.privateKeyPem,
                                    onChange: (e) => eK({ ...eT, privateKeyPem: e.target.value }),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("label", {
                                className: "flex flex-col gap-1",
                                children: [
                                  (0, n.jsx)(h.A, {
                                    id: "plugins.create.oauth.privateKeyJwtKidLabel",
                                    defaultMessage: "Key ID (optional)",
                                  }),
                                  (0, n.jsx)(y.pd, {
                                    autoComplete: "off",
                                    value: eT.privateKeyJwtKid,
                                    onChange: (e) => eK({ ...eT, privateKeyJwtKid: e.target.value }),
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null,
                    ],
                  })
                : null),
            (eI[71] = eL),
            (eI[72] = eH),
            (eI[73] = eO),
            (eI[74] = eq),
            (eI[75] = eK),
            (eI[76] = eB),
            (eI[77] = e$),
            (eI[78] = eT),
            (eI[79] = L))
          : (L = eI[79]),
        eI[80] !== N ||
        eI[81] !== R ||
        eI[82] !== I ||
        eI[83] !== E ||
        eI[84] !== U ||
        eI[85] !== P ||
        eI[86] !== K ||
        eI[87] !== L
          ? ((q = (0, n.jsx)(C.t, {
              variant: "form",
              dividers: !1,
              children: (0, n.jsxs)("div", {
                className: "flex flex-col gap-3 p-4",
                children: [g, m, N, R, I, E, U, P, K, L],
              }),
            })),
            (eI[80] = N),
            (eI[81] = R),
            (eI[82] = I),
            (eI[83] = E),
            (eI[84] = U),
            (eI[85] = P),
            (eI[86] = K),
            (eI[87] = L),
            (eI[88] = q))
          : (q = eI[88]),
        eI[89] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, n.jsx)(h.A, { id: "plugins.create.oauth.scopeTitle", defaultMessage: "Scopes" })), (eI[89] = F))
          : (F = eI[89]),
        eI[90] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = (0, n.jsx)(M.X.Header, {
              size: "compact",
              spacing: "compact",
              title: F,
              subtitle: (0, n.jsx)(h.A, {
                id: "plugins.create.oauth.scopeSectionDescription.additiveDefaults",
                defaultMessage:
                  "Base scopes are always requested. Today, if every selected tool defines OAuth scope tags, ChatGPT requests those tool scopes plus base scopes. Otherwise it requests the default scopes in addition. See the <link>Apps SDK tool descriptor docs</link>.",
                values: { link: Z },
              }),
            })),
            (eI[90] = X))
          : (X = eI[90]),
        eI[91] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = (0, n.jsx)("legend", {
              className: "font-medium",
              children: (0, n.jsx)(h.A, { id: "plugins.create.oauth.defaultScopes", defaultMessage: "Default scopes" }),
            })),
            (eI[91] = W))
          : (W = eI[91]),
        eI[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = (0, n.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, n.jsx)(h.A, {
                id: "plugins.create.oauth.requestedScopesDescription",
                defaultMessage:
                  "Choose the default scopes ChatGPT requests when tool-level OAuth scope tags are not defined for every selected tool.",
              }),
            })),
            (eI[92] = Q))
          : (Q = eI[92]),
        eI[93] !== ez || eI[94] !== eF || eI[95] !== eK || eI[96] !== eT
          ? ((ee = (0, n.jsxs)("fieldset", {
              className: "flex flex-col gap-2",
              children: [
                W,
                Q,
                eT.discovered
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        [...new Set(eT.config.scopes_supported)].map((e) =>
                          (0, n.jsxs)(
                            "label",
                            {
                              className: "relative flex items-center gap-2",
                              children: [
                                (0, n.jsx)(z.S, {
                                  disabled: ez,
                                  checked: (0, O.UK)(eT.scopes).includes(e),
                                  onCheckedChange: (t) =>
                                    eK({
                                      ...eT,
                                      scopes: (t
                                        ? [...(0, O.UK)(eT.scopes), e]
                                        : (0, O.UK)(eT.scopes).filter((t) => t !== e)
                                      ).join("\n"),
                                    }),
                                }),
                                (0, n.jsx)("span", { className: "select-text", children: e }),
                              ],
                            },
                            e,
                          ),
                        ),
                        0 === (eT.config.scopes_supported ?? []).length
                          ? (0, n.jsx)("p", {
                              className: "text-sm text-secondary",
                              children: (0, n.jsx)(h.A, {
                                id: "plugins.create.oauth.noScopes",
                                defaultMessage:
                                  "The discovered OAuth config did not advertise supported scopes to choose from.",
                              }),
                            })
                          : null,
                      ],
                    })
                  : (0, n.jsxs)("label", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, n.jsx)(h.A, {
                          id: "plugins.create.scopes",
                          defaultMessage: "Scopes (optional, one per line)",
                        }),
                        (0, n.jsx)(y.TM, {
                          rows: 3,
                          placeholder: eF,
                          value: eT.scopes,
                          onChange: (e) => eK({ ...eT, scopes: e.target.value }),
                        }),
                      ],
                    }),
              ],
            })),
            (eI[93] = ez),
            (eI[94] = eF),
            (eI[95] = eK),
            (eI[96] = eT),
            (eI[97] = ee))
          : (ee = eI[97]),
        eI[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((et = (0, n.jsx)(h.A, { id: "plugins.create.oauth.baseScopes", defaultMessage: "Base scopes" })),
            (eI[98] = et))
          : (et = eI[98]),
        eI[99] !== eK || eI[100] !== eT
          ? ((ea = (e) => eK({ ...eT, baseScopes: e.target.value })), (eI[99] = eK), (eI[100] = eT), (eI[101] = ea))
          : (ea = eI[101]),
        eI[102] !== eF || eI[103] !== ea || eI[104] !== eT.baseScopes
          ? ((en = (0, n.jsxs)("label", {
              className: "flex flex-col gap-1",
              children: [et, (0, n.jsx)(y.TM, { rows: 3, placeholder: eF, value: eT.baseScopes, onChange: ea })],
            })),
            (eI[102] = eF),
            (eI[103] = ea),
            (eI[104] = eT.baseScopes),
            (eI[105] = en))
          : (en = eI[105]),
        eI[106] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (0, n.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, n.jsx)(h.A, {
                id: "plugins.create.oauth.baseScopesDescription",
                defaultMessage: "Scopes to request with every auth request, no matter which tools are chosen.",
              }),
            })),
            (eI[106] = es))
          : (es = eI[106]),
        eI[107] !== ee || eI[108] !== en
          ? ((ei = (0, n.jsx)(C.t, {
              variant: "form",
              dividers: !1,
              children: (0, n.jsxs)("div", { className: "flex flex-col gap-3 p-4", children: [X, ee, en, es] }),
            })),
            (eI[107] = ee),
            (eI[108] = en),
            (eI[109] = ei))
          : (ei = eI[109]),
        eI[110] === Symbol.for("react.memo_cache_sentinel")
          ? ((er = (0, n.jsx)(h.A, {
              id: "plugins.create.oauth.oauthEndpointsTitle",
              defaultMessage: "OAuth endpoints",
            })),
            (eI[110] = er))
          : (er = eI[110]),
        eI[111] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = (0, n.jsx)(M.X.Header, {
              size: "compact",
              spacing: "compact",
              title: er,
              subtitle: (0, n.jsx)(h.A, {
                id: "plugins.create.oauth.oauthEndpointsDescription",
                defaultMessage:
                  "These endpoints are discovered from the MCP server. If Registration URL is missing, Dynamic Client Registration will fail. See the <link>Apps SDK auth docs</link>.",
                values: { link: Y },
              }),
            })),
            (eI[111] = el))
          : (el = eI[111]),
        eI[112] === Symbol.for("react.memo_cache_sentinel")
          ? ((eo = [
              "authorization_url",
              (0, n.jsx)(h.A, { id: "plugins.create.oauth.authorizationUrlLabel", defaultMessage: "Auth URL" }, "auth"),
            ]),
            (eI[112] = eo))
          : (eo = eI[112]),
        eI[113] === Symbol.for("react.memo_cache_sentinel")
          ? ((ec = [
              "token_url",
              (0, n.jsx)(h.A, { id: "plugins.create.oauth.tokenUrlLabel", defaultMessage: "Token URL" }, "token"),
            ]),
            (eI[113] = ec))
          : (ec = eI[113]),
        eI[114] === Symbol.for("react.memo_cache_sentinel")
          ? ((eu = [
              "registration_url",
              (0, n.jsx)(
                h.A,
                { id: "plugins.create.oauth.registrationUrl", defaultMessage: "Registration URL" },
                "registration",
              ),
            ]),
            (eI[114] = eu))
          : (eu = eI[114]),
        eI[115] === Symbol.for("react.memo_cache_sentinel")
          ? ((ed = [
              "authorization_server_base",
              (0, n.jsx)(
                h.A,
                { id: "plugins.create.oauth.issuer", defaultMessage: "Authorization server base" },
                "issuer",
              ),
            ]),
            (eI[115] = ed))
          : (ed = eI[115]),
        eI[116] === Symbol.for("react.memo_cache_sentinel")
          ? ((ep = [
              eo,
              ec,
              eu,
              ed,
              [
                "resource",
                (0, n.jsx)(h.A, { id: "plugins.create.oauth.resource", defaultMessage: "Resource" }, "resource"),
              ],
            ]),
            (eI[116] = ep))
          : (ep = eI[116]),
        eI[117] !== eq || eI[118] !== eK || eI[119] !== eG || eI[120] !== eT
          ? ((eh = (0, n.jsx)(C.t, {
              variant: "form",
              dividers: !1,
              children: (0, n.jsxs)("div", {
                className: "flex flex-col gap-3 p-4",
                children: [
                  el,
                  ep.map((e) => {
                    let [t, a] = e
                    return (0, n.jsxs)(
                      "label",
                      {
                        className: "flex flex-col gap-1",
                        children: [
                          a,
                          (0, n.jsx)(y.pd, {
                            placeholder:
                              "resource" === t
                                ? eq.formatMessage({
                                    id: "plugins.create.oauth.resourcePlaceholder",
                                    defaultMessage: "urn:example:resource",
                                  })
                                : eG,
                            type: "resource" === t ? "text" : "url",
                            required: "authorization_url" === t || "token_url" === t,
                            value: eT.config[t] ?? "",
                            onChange: (e) => eK({ ...eT, config: { ...eT.config, [t]: e.target.value } }),
                          }),
                        ],
                      },
                      t,
                    )
                  }),
                ],
              }),
            })),
            (eI[117] = eq),
            (eI[118] = eK),
            (eI[119] = eG),
            (eI[120] = eT),
            (eI[121] = eh))
          : (eh = eI[121]),
        eI[122] !== eq || eI[123] !== eK || eI[124] !== eT
          ? ((eg = eT.config.pkce_methods?.length
              ? null
              : (0, n.jsx)(C.t, {
                  variant: "form",
                  dividers: !1,
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-col gap-3 p-4",
                    children: [
                      (0, n.jsx)(M.X.Header, {
                        size: "compact",
                        spacing: "compact",
                        title: (0, n.jsx)(h.A, { id: "plugins.create.oauth.pkceTitle", defaultMessage: "PKCE" }),
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, n.jsxs)("label", {
                            className: "relative flex items-center gap-2 select-none",
                            children: [
                              (0, n.jsx)(z.S, {
                                checked: eT.supportsPkceS256,
                                onCheckedChange: (e) => eK({ ...eT, supportsPkceS256: !0 === e }),
                              }),
                              (0, n.jsx)(h.A, {
                                id: "plugins.create.oauth.pkceSupport.label",
                                defaultMessage: "Server supports PKCE (S256)",
                              }),
                            ],
                          }),
                          (0, n.jsxs)(B.AM, {
                            children: [
                              (0, n.jsx)(B.Wv, {
                                asChild: !0,
                                children: (0, n.jsx)(_.$, {
                                  type: "button",
                                  "aria-label": eq.formatMessage({
                                    id: "plugins.create.oauth.pkceSupport.infoLabel",
                                    defaultMessage: "About PKCE support",
                                  }),
                                  color: "ghostTertiary",
                                  size: "inline",
                                  children: (0, n.jsx)(j.ehD, {}),
                                }),
                              }),
                              (0, n.jsx)(B.hl, {
                                children: (0, n.jsx)(h.A, {
                                  id: "plugins.create.oauth.pkceSupport.description",
                                  defaultMessage:
                                    "MCP requires the authorization server to support PKCE with S256. Select this only if your server supports it. This setting cannot add server support; OAuth sign-in may fail if it\u2019s unsupported.",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                })),
            (eI[122] = eq),
            (eI[123] = eK),
            (eI[124] = eT),
            (eI[125] = eg))
          : (eg = eI[125]),
        eI[126] === Symbol.for("react.memo_cache_sentinel")
          ? ((em = (0, n.jsx)(M.X.Header, {
              size: "compact",
              spacing: "compact",
              title: (0, n.jsx)(h.A, { id: "plugins.create.oauth.oidcTitle", defaultMessage: "OpenID support" }),
              subtitle: (0, n.jsx)(h.A, {
                id: "plugins.create.oauth.oidcSectionDescription",
                defaultMessage:
                  "OpenID Connect (OIDC) lets ChatGPT fetch the authenticated user's email for authorization domain claiming.",
              }),
            })),
            (eI[126] = em))
          : (em = eI[126]),
        eI[127] !== ez || eI[128] !== eT.config.oidc_configuration_url
          ? ((ef = ez || !eT.config.oidc_configuration_url?.trim()),
            (eI[127] = ez),
            (eI[128] = eT.config.oidc_configuration_url),
            (eI[129] = ef))
          : (ef = eI[129]),
        eI[130] !== eT.config.oidc_configuration_url || eI[131] !== eT.oidcEnabled
          ? ((e_ = !!eT.config.oidc_configuration_url?.trim() && eT.oidcEnabled),
            (eI[130] = eT.config.oidc_configuration_url),
            (eI[131] = eT.oidcEnabled),
            (eI[132] = e_))
          : (e_ = eI[132]),
        eI[133] !== eK || eI[134] !== eT
          ? ((ex = (e) => eK({ ...eT, oidcEnabled: e })), (eI[133] = eK), (eI[134] = eT), (eI[135] = ex))
          : (ex = eI[135]),
        eI[136] !== ef || eI[137] !== e_ || eI[138] !== ex
          ? ((ev = (0, n.jsx)(z.S, { disabled: ef, checked: e_, onCheckedChange: ex })),
            (eI[136] = ef),
            (eI[137] = e_),
            (eI[138] = ex),
            (eI[139] = ev))
          : (ev = eI[139]),
        eI[140] === Symbol.for("react.memo_cache_sentinel")
          ? ((ej = (0, n.jsx)(h.A, { id: "plugins.create.oauth.oidcEnabled", defaultMessage: "OIDC enabled" })),
            (eI[140] = ej))
          : (ej = eI[140]),
        eI[141] !== ev
          ? ((ey = (0, n.jsxs)("label", { className: "relative flex items-center gap-2", children: [ev, ej] })),
            (eI[141] = ev),
            (eI[142] = ey))
          : (ey = eI[142]),
        eI[143] !== eT.config.oidc_configuration_url
          ? ((eb = eT.config.oidc_configuration_url?.trim()
              ? (0, n.jsx)("p", {
                  className: "text-xs text-secondary",
                  children: (0, n.jsx)(h.A, {
                    id: "plugins.create.oauth.oidcEnabledDescription",
                    defaultMessage: "If enabled, ChatGPT will try to request the OpenID scopes listed below.",
                  }),
                })
              : null),
            (eI[143] = eT.config.oidc_configuration_url),
            (eI[144] = eb))
          : (eb = eI[144]),
        eI[145] !== eT.config.oidc_configuration_url || eI[146] !== eT.discovered
          ? ((eM =
              !eT.config.oidc_configuration_url?.trim() && eT.discovered
                ? (0, n.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, n.jsx)(h.A, {
                      id: "plugins.create.oauth.oidcUnavailableDescription",
                      defaultMessage:
                        "This server did not advertise an OIDC configuration URL, so OpenID support is unavailable.",
                    }),
                  })
                : null),
            (eI[145] = eT.config.oidc_configuration_url),
            (eI[146] = eT.discovered),
            (eI[147] = eM))
          : (eM = eI[147]),
        eI[148] === Symbol.for("react.memo_cache_sentinel")
          ? ((eC = [
              "oidc_configuration_url",
              (0, n.jsx)(
                h.A,
                { id: "plugins.create.oauth.oidcConfig", defaultMessage: "OIDC configuration URL" },
                "config",
              ),
            ]),
            (eI[148] = eC))
          : (eC = eI[148]),
        eI[149] === Symbol.for("react.memo_cache_sentinel")
          ? ((eA = [
              eC,
              [
                "oidc_userinfo_endpoint",
                (0, n.jsx)(
                  h.A,
                  { id: "plugins.create.oauth.oidcUserinfo", defaultMessage: "OIDC userinfo endpoint" },
                  "userinfo",
                ),
              ],
            ]),
            (eI[149] = eA))
          : (eA = eI[149]),
        eI[150] !== eK || eI[151] !== eG || eI[152] !== eT
          ? ((eS = eA.map((e) => {
              let [t, a] = e
              return (0, n.jsxs)(
                "label",
                {
                  className: "flex flex-col gap-1",
                  children: [
                    a,
                    (0, n.jsx)(y.pd, {
                      placeholder: eG,
                      type: "url",
                      value: eT.config[t] ?? "",
                      onChange: (e) => eK({ ...eT, config: { ...eT.config, [t]: e.target.value } }),
                    }),
                  ],
                },
                t,
              )
            })),
            (eI[150] = eK),
            (eI[151] = eG),
            (eI[152] = eT),
            (eI[153] = eS))
          : (eS = eI[153]),
        eI[154] === Symbol.for("react.memo_cache_sentinel")
          ? ((ew = (0, n.jsx)(h.A, { id: "plugins.create.oauth.oidcScopes", defaultMessage: "OIDC scopes supported" })),
            (eI[154] = ew))
          : (ew = eI[154]),
        eI[155] !== eK || eI[156] !== eT
          ? ((ek = (e) => eK({ ...eT, oidcScopes: e.target.value })), (eI[155] = eK), (eI[156] = eT), (eI[157] = ek))
          : (ek = eI[157]),
        eI[158] !== eF || eI[159] !== ek || eI[160] !== eT.oidcScopes
          ? ((eD = (0, n.jsxs)("label", {
              className: "flex flex-col gap-1",
              children: [ew, (0, n.jsx)(y.TM, { rows: 3, placeholder: eF, value: eT.oidcScopes, onChange: ek })],
            })),
            (eI[158] = eF),
            (eI[159] = ek),
            (eI[160] = eT.oidcScopes),
            (eI[161] = eD))
          : (eD = eI[161]),
        eI[162] !== ey || eI[163] !== eb || eI[164] !== eM || eI[165] !== eS || eI[166] !== eD
          ? ((eN = (0, n.jsx)(C.t, {
              variant: "form",
              dividers: !1,
              children: (0, n.jsxs)("div", {
                className: "flex flex-col gap-3 p-4",
                children: [em, ey, eb, eM, eS, eD],
              }),
            })),
            (eI[162] = ey),
            (eI[163] = eb),
            (eI[164] = eM),
            (eI[165] = eS),
            (eI[166] = eD),
            (eI[167] = eN))
          : (eN = eI[167]),
        eI[168] !== ez || eI[169] !== q || eI[170] !== ei || eI[171] !== eh || eI[172] !== eg || eI[173] !== eN
          ? ((eR = (0, n.jsxs)("fieldset", {
              disabled: ez,
              className: "flex min-w-0 flex-col gap-4 text-sm",
              children: [q, ei, eh, eg, eN],
            })),
            (eI[168] = ez),
            (eI[169] = q),
            (eI[170] = ei),
            (eI[171] = eh),
            (eI[172] = eg),
            (eI[173] = eN),
            (eI[174] = eR))
          : (eR = eI[174]),
        eR
      )
    }
    function Y(e) {
      return (0, n.jsx)(K.G, {
        href: "https://developers.openai.com/apps-sdk/build/auth/",
        openTarget: "external-browser",
        initiator: "open_in_browser_bridge",
        children: e,
      })
    }
    function Z(e) {
      return (0, n.jsx)(K.G, {
        href: "https://developers.openai.com/apps-sdk/reference/#tool-descriptor-parameters",
        openTarget: "external-browser",
        initiator: "open_in_browser_bridge",
        children: e,
      })
    }
    function V(e) {
      return (0, n.jsx)(K.G, {
        href: "https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization#client-registration-approaches",
        openTarget: "external-browser",
        initiator: "open_in_browser_bridge",
        children: e,
      })
    }
    function W(e) {
      let t,
        a,
        D,
        N,
        R,
        T,
        z,
        K,
        F,
        G,
        H,
        B,
        $,
        J,
        Y,
        Z,
        V,
        W,
        Q,
        ee,
        et,
        ea,
        en,
        es,
        ei,
        er,
        el,
        eo,
        ec,
        eu,
        ed,
        ep,
        eh,
        eg,
        em,
        ef,
        e_,
        ex = (0, s.c)(192),
        {
          accountId: ev,
          initialMode: ej,
          canUploadArchive: ey,
          canCreateMcpApp: eb,
          onClose: eM,
          onArchiveCreated: eC,
          onAppCreated: eA,
          onAppConnected: eS,
        } = e,
        ew = (0, p.A)(),
        ek = (0, A.Fj)("73506792"),
        eD = E.H.parse(ek.value.max_archive_admission_bytes),
        eN = (0, A.Zj)("3463396747"),
        eR = (0, A.Zj)("2496729599"),
        eI = c.iwv,
        eE = (0, o.Ul)(m.tT),
        [eU, eO] = (0, u.useState)(ej),
        [eP, eT] = (0, u.useState)(null),
        [ez, eK] = (0, u.useState)(!1),
        [eL, eq] = (0, u.useState)(""),
        [eF, eG] = (0, u.useState)(""),
        [eH, eB] = (0, u.useState)("url"),
        [e$, eJ] = (0, u.useState)(""),
        [eX, eY] = (0, u.useState)(""),
        [eZ, eV] = (0, u.useState)("OAUTH")
      eN || "API_KEY" !== eZ || eV("OAUTH")
      let [eW, eQ] = (0, u.useState)("BEARER"),
        [e1, e0] = (0, u.useState)(""),
        [e2, e4] = (0, u.useState)(!1),
        [e3, e5] = (0, u.useState)(null),
        e6 = (0, u.useId)(),
        [e7, e9] = (0, u.useState)(null),
        [e8, te] = (0, u.useState)(null),
        [tt, ta] = (0, u.useState)(!1),
        [tn, ts] = (0, u.useState)(null)
      ex[0] !== ev || ex[1] !== eH || ex[2] !== eX || ex[3] !== e$
        ? ((t = JSON.stringify([ev, eH, "url" === eH ? e$.trim() : eX.trim()])),
          (ex[0] = ev),
          (ex[1] = eH),
          (ex[2] = eX),
          (ex[3] = e$),
          (ex[4] = t))
        : (t = ex[4])
      let ti = t,
        tr = (0, O.cz)(eH, e$, eX),
        tl = "OAUTH" === eZ || "MIXED" === eZ,
        {
          data: to,
          isFetching: tc,
          isError: tu,
          refetch: td,
        } = (0, i.I)({
          queryKey: ["plugins", "mcp-oauth-config", ev, tr],
          enabled: "mcp" === eU && tl && e2 && null != tr,
          queryFn: (e) => {
            let { signal: t } = e
            if (null == tr) throw new O.rw("invalid-target")
            return (0, O.BG)(ev, tr, t)
          },
          staleTime: w.D.FIVE_MINUTES,
          retry: !1,
          refetchOnWindowFocus: !1,
        })
      ex[5] !== ti || ex[6] !== to || ex[7] !== e7
        ? ((a = e7?.key === ti ? e7.value : (0, O.rX)(to ?? null)),
          (ex[5] = ti),
          (ex[6] = to),
          (ex[7] = e7),
          (ex[8] = a))
        : (a = ex[8])
      let tp = a,
        th = e3 === ti && (void 0 !== to || tu || e7?.key === ti),
        tg = null != tr && "mcp_url" in tr ? new URL(tr.mcp_url).origin : null
      ex[9] !== ev || ex[10] !== tg
        ? ((D = ["plugins", "mcp-oauth-client", ev, tg]), (ex[9] = ev), (ex[10] = tg), (ex[11] = D))
        : (D = ex[11])
      let tm = "mcp" === eU && tl && null != tg
      ;(ex[12] !== ev || ex[13] !== tg
        ? ((N = (e) => {
            let { signal: t } = e
            return null != tg && (0, O.$K)(ev, tg, t)
          }),
          (ex[12] = ev),
          (ex[13] = tg),
          (ex[14] = N))
        : (N = ex[14]),
        ex[15] !== D || ex[16] !== tm || ex[17] !== N
          ? ((R = {
              queryKey: D,
              enabled: tm,
              queryFn: N,
              staleTime: w.D.FIVE_MINUTES,
              retry: !1,
              refetchOnWindowFocus: !1,
            }),
            (ex[15] = D),
            (ex[16] = tm),
            (ex[17] = N),
            (ex[18] = R))
          : (R = ex[18]))
      let { data: tf, isFetching: t_ } = (0, i.I)(R)
      ex[19] !== t_ ||
      ex[20] !== eH ||
      ex[21] !== th ||
      ex[22] !== tf ||
      ex[23] !== eR ||
      ex[24] !== tl ||
      ex[25] !== tp
        ? ((T =
            tl &&
            th &&
            "USER_DEFINED" === (0, O.u_)(tp.config, tp.clientMode) &&
            !tp.clientId.trim() &&
            (!!tp.clientSecret.trim() ||
              (eR && "private_key_jwt" === tp.tokenAuthMethod) ||
              t_ ||
              !1 === tf ||
              "tunnel" === eH)),
          (ex[19] = t_),
          (ex[20] = eH),
          (ex[21] = th),
          (ex[22] = tf),
          (ex[23] = eR),
          (ex[24] = tl),
          (ex[25] = tp),
          (ex[26] = T))
        : (T = ex[26])
      let tx = T,
        tv = tn === ti,
        [tj, ty] = (0, u.useState)(null)
      ex[27] === Symbol.for("react.memo_cache_sentinel") ? ((z = { hostId: eI }), (ex[27] = z)) : (z = ex[27])
      let { handleAppConnectOAuthStarted: tb, handleAppConnected: tM } = (0, g.t)(z),
        tC = (0, r.n)({
          mutationFn: () => {
            if (null == eP) throw Error("Choose a plugin archive")
            return (0, k.v1)(ev, eP, eD)
          },
          onSuccess: eC,
        })
      ;(ex[28] !== ev ||
      ex[29] !== eW ||
      ex[30] !== eZ ||
      ex[31] !== eH ||
      ex[32] !== eF ||
      ex[33] !== th ||
      ex[34] !== tf ||
      ex[35] !== e1 ||
      ex[36] !== e8 ||
      ex[37] !== eR ||
      ex[38] !== eL ||
      ex[39] !== tp ||
      ex[40] !== eX ||
      ex[41] !== e$
        ? ((K = () => {
            let e = (0, O.cz)(eH, e$, eX)
            if (null == e) throw new O.rw("invalid-target")
            return (0, O.Qq)({
              allowPrivateKeyJwt: eR,
              accountId: ev,
              target: e,
              name: eL,
              description: eF,
              icon: e8,
              authentication: eZ,
              apiKeyHeader: eW,
              customHeaderName: e1,
              oauthSettings: th ? tp : void 0,
              hasPreconfiguredOAuthClient: tf,
            })
          }),
          (ex[28] = ev),
          (ex[29] = eW),
          (ex[30] = eZ),
          (ex[31] = eH),
          (ex[32] = eF),
          (ex[33] = th),
          (ex[34] = tf),
          (ex[35] = e1),
          (ex[36] = e8),
          (ex[37] = eR),
          (ex[38] = eL),
          (ex[39] = tp),
          (ex[40] = eX),
          (ex[41] = e$),
          (ex[42] = K))
        : (K = ex[42]),
        ex[43] !== eA
          ? ((F = async (e) => {
              ;(ty(e), await eA(e))
            }),
            (ex[43] = eA),
            (ex[44] = F))
          : (F = ex[44]),
        ex[45] !== K || ex[46] !== F
          ? ((G = { mutationFn: K, onSuccess: F }), (ex[45] = K), (ex[46] = F), (ex[47] = G))
          : (G = ex[47]))
      let tA = (0, r.n)(G),
        tS = tC.isPending || tA.isPending
      ex[48] === Symbol.for("react.memo_cache_sentinel") ? ((H = () => eK(!0)), (ex[48] = H)) : (H = ex[48])
      let {
          getRootProps: tw,
          getInputProps: tk,
          inputRef: tD,
          isDragActive: tN,
          open: tR,
        } = (0, d.V)({
          multiple: !1,
          noClick: !0,
          noKeyboard: !0,
          disabled: tS || !ey,
          accept: { "application/zip": [".zip"], "application/gzip": [".tar.gz", ".tgz"] },
          onDrop: (e, t) => {
            if (!tI.current?.isConnected || tI.current.disabled) return
            let a = e[0],
              n = t.length > 0 || null == a || null != (0, k.QZ)(a, eD)
            ;(eK(n), eT(n ? null : a), tC.reset())
          },
          onError: H,
        }),
        tI = tD
      ex[49] !== ev ? ((B = ["plugins", "mcp-tunnels", ev]), (ex[49] = ev), (ex[50] = B)) : (B = ex[50])
      let tE = "mcp" === eU && "tunnel" === eH
      ;(ex[51] !== ev ? (($ = () => (0, O.ev)(ev)), (ex[51] = ev), (ex[52] = $)) : ($ = ex[52]),
        ex[53] !== B || ex[54] !== tE || ex[55] !== $
          ? ((J = { queryKey: B, enabled: tE, queryFn: $, staleTime: w.D.ONE_MINUTE }),
            (ex[53] = B),
            (ex[54] = tE),
            (ex[55] = $),
            (ex[56] = J))
          : (J = ex[56]))
      let { data: tU, isError: tO, refetch: tP } = (0, i.I)(J)
      ex[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = (e, t) => {
            let a = e[0],
              n = t.length > 0 || null == a || !(0, O.DS)(a)
            ;(ta(n), te(n ? null : a))
          }),
          (ex[57] = Y))
        : (Y = ex[57])
      let tT = Y
      ;(ex[58] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = { "image/png": [".png"] }), (ex[58] = Z))
        : (Z = ex[58]),
        ex[59] === Symbol.for("react.memo_cache_sentinel") ? ((V = () => ta(!0)), (ex[59] = V)) : (V = ex[59]))
      let {
          getRootProps: tz,
          getInputProps: tK,
          inputRef: tL,
          open: tq,
        } = (0, d.V)({
          multiple: !1,
          noClick: !0,
          noKeyboard: !0,
          disabled: tS,
          accept: Z,
          onDrop: (e, t) => {
            tF.current?.isConnected && !tF.current?.disabled && tT(e, t)
          },
          onError: V,
        }),
        tF = tL
      if (eE !== ev) return null
      if (null != tj) {
        let e,
          t,
          a,
          s,
          i,
          r = tj.logo_url ?? null,
          l = tj.logo_url_dark ?? null
        return (
          ex[60] !== tj.description || ex[61] !== tj.id || ex[62] !== tj.name || ex[63] !== r || ex[64] !== l
            ? ((e = (0, f.w)({
                id: tj.id,
                name: tj.name,
                description: tj.description,
                iconUrl: r,
                iconUrlDark: l,
                distributionChannel: null,
                installUrl: null,
                pluginDisplayNames: [],
                toolSummaries: null,
              })),
              (ex[60] = tj.description),
              (ex[61] = tj.id),
              (ex[62] = tj.name),
              (ex[63] = r),
              (ex[64] = l),
              (ex[65] = e))
            : (e = ex[65]),
          ex[66] !== ev || ex[67] !== eE
            ? ((t = async () => eE === ev), (ex[66] = ev), (ex[67] = eE), (ex[68] = t))
            : (t = ex[68]),
          ex[69] !== tj.id || ex[70] !== tM || ex[71] !== eS
            ? ((a = async () => {
                ;(tM(tj.id), await eS())
              }),
              (ex[69] = tj.id),
              (ex[70] = tM),
              (ex[71] = eS),
              (ex[72] = a))
            : (a = ex[72]),
          ex[73] !== eM
            ? ((s = (e) => {
                e || eM()
              }),
              (ex[73] = eM),
              (ex[74] = s))
            : (s = ex[74]),
          ex[75] !== tb || ex[76] !== e || ex[77] !== t || ex[78] !== a || ex[79] !== s
            ? ((i = (0, n.jsx)(b.Z, {
                oauthReferrer: "plugin_create",
                app: e,
                hostId: eI,
                allowBrowserFallback: !0,
                beforeConnect: t,
                onOAuthStarted: tb,
                onConnected: a,
                onOpenChange: s,
              })),
              (ex[75] = tb),
              (ex[76] = e),
              (ex[77] = t),
              (ex[78] = a),
              (ex[79] = s),
              (ex[80] = i))
            : (i = ex[80]),
          i
        )
      }
      let tG = null != tr
      ex[81] !== th || ex[82] !== tl || ex[83] !== tp
        ? ((W =
            tl &&
            th &&
            (!tp.config.authorization_url.trim() ||
              !tp.config.token_url.trim() ||
              null == (0, O.cz)("url", tp.config.authorization_url, "") ||
              null == (0, O.cz)("url", tp.config.token_url, ""))),
          (ex[81] = th),
          (ex[82] = tl),
          (ex[83] = tp),
          (ex[84] = W))
        : (W = ex[84])
      let tH = W,
        tB = "archive" === eU ? tC.error : tA.error,
        t$ = "mcp" === eU && tl && e2 && null != tr,
        tJ = x.lG,
        tX = (t$ && "xxxwideTall") || ("mcp" === eU ? "wide" : "large")
      ex[85] !== tS || ex[86] !== eM
        ? ((Q = (e) => {
            e || tS || eM()
          }),
          (ex[85] = tS),
          (ex[86] = eM),
          (ex[87] = Q))
        : (Q = ex[87])
      let tY = "mcp" === eU ? "top" : "centered",
        tZ = !tS
      ex[88] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = { "aria-describedby": void 0 }), (ex[88] = ee))
        : (ee = ex[88])
      let tV = v.R4,
        tW = (t$ && "full") || ("archive" === eU ? "viewport" : "topPositioned")
      ;(ex[89] !== eW ||
      ex[90] !== tA ||
      ex[91] !== eP ||
      ex[92] !== tC ||
      ex[93] !== eZ ||
      ex[94] !== eb ||
      ex[95] !== ey ||
      ex[96] !== tc ||
      ex[97] !== e1 ||
      ex[98] !== tx ||
      ex[99] !== tH ||
      ex[100] !== tS ||
      ex[101] !== eU ||
      ex[102] !== eL ||
      ex[103] !== tv ||
      ex[104] !== tG
        ? ((et = (e) => {
            ;(e.preventDefault(),
              !tS &&
                ("archive" === eU && null != eP && ey
                  ? tC.mutate()
                  : "mcp" === eU &&
                    eb &&
                    tv &&
                    tG &&
                    eL.trim() &&
                    !tH &&
                    !tx &&
                    !tc &&
                    ("API_KEY" !== eZ || "CUSTOM_HEADER" !== eW || e1.trim()) &&
                    tA.mutate()))
          }),
          (ex[89] = eW),
          (ex[90] = tA),
          (ex[91] = eP),
          (ex[92] = tC),
          (ex[93] = eZ),
          (ex[94] = eb),
          (ex[95] = ey),
          (ex[96] = tc),
          (ex[97] = e1),
          (ex[98] = tx),
          (ex[99] = tH),
          (ex[100] = tS),
          (ex[101] = eU),
          (ex[102] = eL),
          (ex[103] = tv),
          (ex[104] = tG),
          (ex[105] = et))
        : (et = ex[105]),
        ex[106] !== eU
          ? ((ea = (0, n.jsx)(v.OO, {
              children: (0, n.jsx)(x.L3, {
                className: "heading-dialog font-semibold select-none",
                children:
                  "mcp" === eU
                    ? (0, n.jsx)(h.A, { id: "plugins.create.mcpTitle", defaultMessage: "Add custom MCP server" })
                    : (0, n.jsx)(h.A, { id: "plugins.create.title", defaultMessage: "New Plugin" }),
              }),
            })),
            (ex[106] = eU),
            (ex[107] = ea))
          : (ea = ex[107]))
      let tQ = t$ && "min-h-0 flex-1 overflow-y-auto md:flex md:gap-6 md:overflow-hidden"
      ex[108] !== tQ ? ((en = (0, l.A)("pt-3", tQ)), (ex[108] = tQ), (ex[109] = en)) : (en = ex[109])
      let t1 = t$ && "md:flex md:min-h-0 md:flex-1 md:flex-col"
      ex[110] !== t1 ? ((es = (0, l.A)("min-w-0", t1)), (ex[110] = t1), (ex[111] = es)) : (es = ex[111])
      let t0 = t$ && "md:flex-1 md:overflow-y-auto"
      ex[112] !== t0 ? ((ei = (0, l.A)("min-h-0", t0)), (ex[112] = t0), (ex[113] = ei)) : (ei = ex[113])
      let t2 =
        "archive" === eU
          ? (0, n.jsxs)(v.OO, {
              className: "gap-4",
              spacing: "large",
              children: [
                (0, n.jsxs)("div", {
                  ...tw({
                    className: (0, l.A)(
                      "flex min-h-48 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-primary-outline px-4 py-8 text-center text-sm select-none",
                      tN ? "bg-codex-drop-overlay/80" : "bg-surface",
                    ),
                  }),
                  children: [
                    (0, n.jsx)("input", { ...tk({ hidden: !0, name: "plugin-archive" }) }),
                    null == eP
                      ? (0, n.jsx)(j._Ui, { className: "text-secondary" })
                      : (0, n.jsx)(j.o_G, { className: "text-secondary" }),
                    (0, n.jsxs)("div", {
                      className: "flex w-full min-w-0 flex-col gap-1",
                      children: [
                        null != eP
                          ? (0, n.jsx)("span", {
                              className: "w-full truncate font-semibold select-text",
                              children: eP.name,
                            })
                          : null,
                        null == eP && tN
                          ? (0, n.jsx)(h.A, {
                              id: "plugins.create.dropArchive",
                              defaultMessage: "Drop the plugin here\u2026",
                            })
                          : null,
                        null != eP || tN
                          ? null
                          : (0, n.jsx)("span", {
                              className: "font-medium",
                              children: (0, n.jsx)(h.A, {
                                id: "plugins.create.archiveUploadPrompt",
                                defaultMessage: "Drag and drop your plugin here, or <upload>click to upload</upload>",
                                values: {
                                  upload: (e) =>
                                    (0, n.jsx)("button", {
                                      className:
                                        "cursor-interaction border-0 bg-transparent p-0 text-link-primary hover:underline disabled:cursor-default disabled:text-secondary disabled:no-underline",
                                      type: "button",
                                      disabled: tS || !ey,
                                      onClick: tR,
                                      children: e,
                                    }),
                                },
                              }),
                            }),
                        (0, n.jsx)("span", {
                          className: "text-secondary",
                          children: (0, n.jsx)(h.A, {
                            id: "plugins.create.archiveFormats",
                            defaultMessage: "Only .tar.gz, .tgz, and .zip archives are supported",
                          }),
                        }),
                        (0, n.jsx)("span", {
                          className: "text-secondary",
                          children: (0, n.jsx)(h.A, {
                            id: "plugins.create.archiveLimitConfigured",
                            defaultMessage: "Maximum size: {sizeLimit}",
                            values: { sizeLimit: (0, S.z)(eD, ew) },
                          }),
                        }),
                      ],
                    }),
                    null != eP
                      ? (0, n.jsx)(_.$, {
                          type: "button",
                          color: "outlineGhost",
                          size: "dialogAction",
                          disabled: tS || !ey,
                          onClick: tR,
                          children: (0, n.jsx)(h.A, {
                            id: "plugins.create.chooseArchive",
                            defaultMessage: "Choose file",
                          }),
                        })
                      : null,
                  ],
                }),
                ez
                  ? (0, n.jsx)("span", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, n.jsx)(h.A, {
                        id: "plugins.create.invalidArchiveWithLimit",
                        defaultMessage: "Choose a .zip, .tar.gz, or .tgz file no larger than {sizeLimit}",
                        values: { sizeLimit: (0, S.z)(eD, ew) },
                      }),
                    })
                  : null,
              ],
            })
          : (0, n.jsxs)(v.OO, {
              className: "gap-4 text-sm",
              children: [
                (0, n.jsxs)("div", {
                  ...tz({ className: "flex items-center gap-3" }),
                  children: [
                    (0, n.jsx)("input", { ...tK({ hidden: !0, name: "app-icon" }) }),
                    null,
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(_.$, {
                          color: "secondary",
                          onClick: tq,
                          disabled: tS,
                          children: (0, n.jsx)(h.A, { id: "plugins.create.icon", defaultMessage: "Choose icon" }),
                        }),
                        (0, n.jsx)("span", {
                          className: "text-secondary",
                          children:
                            e8?.name ??
                            (0, n.jsx)(h.A, {
                              id: "plugins.create.iconHelp",
                              defaultMessage: "Optional PNG, up to 10 KB",
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                tt
                  ? (0, n.jsx)("span", {
                      role: "alert",
                      className: "text-danger",
                      children: (0, n.jsx)(h.A, {
                        id: "plugins.create.iconError",
                        defaultMessage: "Choose a PNG file no larger than 10 KB",
                      }),
                    })
                  : null,
                (0, n.jsxs)("label", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, n.jsx)(h.A, { id: "plugins.create.name", defaultMessage: "Name" }),
                    (0, n.jsx)(y.pd, {
                      required: !0,
                      disabled: tS,
                      placeholder: ew.formatMessage({
                        id: "plugins.create.namePlaceholder",
                        defaultMessage: "Custom Tool",
                      }),
                      value: eL,
                      onChange: (e) => eq(e.target.value),
                    }),
                  ],
                }),
                (0, n.jsxs)("label", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, n.jsx)(h.A, { id: "plugins.create.description", defaultMessage: "Description (optional)" }),
                    (0, n.jsx)(y.TM, {
                      disabled: tS,
                      variant: "compact",
                      autoResize: !0,
                      rows: 1,
                      placeholder: ew.formatMessage({
                        id: "plugins.create.descriptionPlaceholder",
                        defaultMessage: "Explain what it does in a few words",
                      }),
                      value: eF,
                      onChange: (e) => eG(e.target.value),
                    }),
                  ],
                }),
                (0, n.jsx)(L, {
                  connection: eH,
                  isPending: tS,
                  onChange: (e) => {
                    ;(eB(e), e4(!1), e9(null), e5(null), ts(null))
                  },
                  children:
                    "url" === eH
                      ? (0, n.jsx)(y.pd, {
                          type: "url",
                          required: !0,
                          "aria-label": ew.formatMessage({
                            id: "plugins.create.serverUrl",
                            defaultMessage: "Server URL",
                          }),
                          value: e$,
                          disabled: tS,
                          placeholder: "https://example.com/mcp",
                          "aria-invalid": e$.length > 0 && !tG,
                          onChange: (e) => {
                            ;(eJ(e.target.value), e4(!1), e9(null), e5(null), ts(null))
                          },
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(y.pd, {
                              required: !0,
                              "aria-label": ew.formatMessage({
                                id: "plugins.create.tunnelId",
                                defaultMessage: "Tunnel ID",
                              }),
                              value: eX,
                              disabled: tS,
                              placeholder: "tunnel_...",
                              "aria-invalid": eX.length > 0 && !tG,
                              onChange: (e) => {
                                ;(eY(e.target.value), e4(!1), e9(null), e5(null), ts(null))
                              },
                            }),
                            tU?.length
                              ? (0, n.jsx)("div", {
                                  className: "flex flex-wrap gap-2",
                                  children: tU.map((e) =>
                                    (0, n.jsx)(
                                      _.$,
                                      {
                                        color: "secondary",
                                        onClick: () => {
                                          ;(eY(e.id), e4(!1), e9(null), e5(null), ts(null))
                                        },
                                        children: e.name || e.id,
                                      },
                                      e.id,
                                    ),
                                  ),
                                })
                              : null,
                            tO
                              ? (0, n.jsx)(_.$, {
                                  color: "secondary",
                                  onClick: () => void tP(),
                                  children: (0, n.jsx)(h.A, {
                                    id: "plugins.create.retryTunnels",
                                    defaultMessage: "Retry loading tunnels",
                                  }),
                                })
                              : null,
                          ],
                        }),
                }),
                (0, n.jsxs)("label", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, n.jsx)(h.A, { id: "plugins.create.authentication", defaultMessage: "Authentication" }),
                    (0, n.jsxs)("select", {
                      className:
                        "h-9 rounded-md border border-primary-outline bg-primary-soft px-2.5 text-sm text-default",
                      value: eZ,
                      disabled: tS,
                      onChange: (e) => {
                        let t = e.target.value
                        ;("OAUTH" === t || "API_KEY" === t || "NONE" === t || "MIXED" === t) && eV(t)
                      },
                      children: [
                        (0, n.jsx)("option", {
                          value: "OAUTH",
                          children: ew.formatMessage({ id: "plugins.create.authOauth", defaultMessage: "OAuth" }),
                        }),
                        eN
                          ? (0, n.jsx)("option", {
                              value: "API_KEY",
                              children: ew.formatMessage({
                                id: "plugins.create.authApiKey",
                                defaultMessage: "API key",
                              }),
                            })
                          : null,
                        (0, n.jsx)("option", {
                          value: "NONE",
                          children: ew.formatMessage({
                            id: "plugins.create.authNone",
                            defaultMessage: "No authentication",
                          }),
                        }),
                        (0, n.jsx)("option", {
                          value: "MIXED",
                          children: ew.formatMessage({
                            id: "plugins.create.authMixed",
                            defaultMessage: "OAuth or no authentication",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                "API_KEY" === eZ
                  ? (0, n.jsxs)("label", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, n.jsx)(h.A, { id: "plugins.create.apiKeyHeader", defaultMessage: "API key header" }),
                        (0, n.jsxs)("select", {
                          className:
                            "h-9 rounded-md border border-primary-outline bg-primary-soft px-2.5 text-sm text-default",
                          value: eW,
                          disabled: tS,
                          onChange: (e) => {
                            let t = e.target.value
                            ;("BEARER" === t || "BASIC" === t || "CUSTOM_HEADER" === t) && eQ(t)
                          },
                          children: [
                            (0, n.jsx)("option", {
                              value: "BEARER",
                              children: ew.formatMessage({
                                id: "plugins.create.headerBearer",
                                defaultMessage: "Bearer",
                              }),
                            }),
                            (0, n.jsx)("option", {
                              value: "BASIC",
                              children: ew.formatMessage({ id: "plugins.create.headerBasic", defaultMessage: "Basic" }),
                            }),
                            (0, n.jsx)("option", {
                              value: "CUSTOM_HEADER",
                              children: ew.formatMessage({
                                id: "plugins.create.headerCustom",
                                defaultMessage: "Custom header",
                              }),
                            }),
                          ],
                        }),
                        "CUSTOM_HEADER" === eW
                          ? (0, n.jsx)(y.pd, {
                              required: !0,
                              disabled: tS,
                              value: e1,
                              onChange: (e) => e0(e.target.value),
                              placeholder: "X-API-Key",
                            })
                          : null,
                      ],
                    })
                  : null,
                tl
                  ? (0, n.jsxs)(_.$, {
                      className: "justify-between text-start",
                      color: "outline",
                      size: "surveyCard",
                      radius: "large",
                      "aria-labelledby": `${e6}-trigger`,
                      "aria-describedby": `${e6}-description`,
                      "aria-expanded": e2,
                      "aria-controls": e6,
                      disabled: tS || !tG,
                      onClick: () => {
                        ;(e4(!e2), e5(ti))
                      },
                      children: [
                        (0, n.jsxs)("span", {
                          className: "flex min-w-0 flex-col gap-1",
                          children: [
                            (0, n.jsx)("span", {
                              id: `${e6}-trigger`,
                              className: "font-medium",
                              children: (0, n.jsx)(h.A, {
                                id: "plugins.create.advancedOauth",
                                defaultMessage: "Advanced OAuth settings",
                              }),
                            }),
                            (0, n.jsx)("span", {
                              id: `${e6}-description`,
                              className: "text-xs text-secondary",
                              children: (0, n.jsx)(h.A, {
                                id: "plugins.create.oauth.advancedDescription",
                                defaultMessage:
                                  "Review discovered OAuth settings, or enter them manually, then choose a client setup method and configure default scopes",
                              }),
                            }),
                          ],
                        }),
                        e2 ? (0, n.jsx)(j.Aq_, {}) : (0, n.jsx)(j.uM3, {}),
                      ],
                    })
                  : null,
                (0, n.jsx)(q, { trusted: tv, isPending: tS, onTrustedChange: (e) => ts(e ? ti : null) }),
              ],
            })
      ;(ex[114] !== tB || ex[115] !== eU
        ? ((er =
            null != tB
              ? (0, n.jsx)(v.OO, {
                  children: (0, n.jsx)("span", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: "archive" === eU ? (0, n.jsx)(I, { error: tB }) : (0, n.jsx)(P, { error: tB }),
                  }),
                })
              : null),
          (ex[114] = tB),
          (ex[115] = eU),
          (ex[116] = er))
        : (er = ex[116]),
        ex[117] !== ei || ex[118] !== t2 || ex[119] !== er
          ? ((el = (0, n.jsxs)("div", { className: ei, children: [t2, er] })),
            (ex[117] = ei),
            (ex[118] = t2),
            (ex[119] = er),
            (ex[120] = el))
          : (el = ex[120]))
      let t4 = "archive" === eU ? "large" : "default",
        t3 = "archive" === eU ? "dialogAction" : void 0
      return (
        ex[121] !== eW ||
        ex[122] !== eP ||
        ex[123] !== eZ ||
        ex[124] !== eb ||
        ex[125] !== ey ||
        ex[126] !== tc ||
        ex[127] !== e1 ||
        ex[128] !== tx ||
        ex[129] !== tH ||
        ex[130] !== tS ||
        ex[131] !== eU ||
        ex[132] !== eL ||
        ex[133] !== tv ||
        ex[134] !== tG
          ? ((eo =
              tS ||
              ("archive" === eU
                ? !eP || !ey
                : !eb ||
                  !eL.trim() ||
                  !tG ||
                  !tv ||
                  tH ||
                  tx ||
                  tc ||
                  ("API_KEY" === eZ && "CUSTOM_HEADER" === eW && !e1.trim()))),
            (ex[121] = eW),
            (ex[122] = eP),
            (ex[123] = eZ),
            (ex[124] = eb),
            (ex[125] = ey),
            (ex[126] = tc),
            (ex[127] = e1),
            (ex[128] = tx),
            (ex[129] = tH),
            (ex[130] = tS),
            (ex[131] = eU),
            (ex[132] = eL),
            (ex[133] = tv),
            (ex[134] = tG),
            (ex[135] = eo))
          : (eo = ex[135]),
        ex[136] !== eU
          ? ((ec =
              "archive" === eU
                ? (0, n.jsx)(h.A, { id: "plugins.create.addPlugin", defaultMessage: "Add plugin" })
                : (0, n.jsx)(h.A, { id: "plugins.create.createApp", defaultMessage: "Create as a plugin" })),
            (ex[136] = eU),
            (ex[137] = ec))
          : (ec = ex[137]),
        ex[138] !== tS || ex[139] !== t3 || ex[140] !== eo || ex[141] !== ec
          ? ((eu = (0, n.jsx)(_.$, {
              type: "submit",
              color: "primary",
              size: t3,
              loading: tS,
              disabled: eo,
              children: ec,
            })),
            (ex[138] = tS),
            (ex[139] = t3),
            (ex[140] = eo),
            (ex[141] = ec),
            (ex[142] = eu))
          : (eu = ex[142]),
        ex[143] !== eb ||
        ex[144] !== ey ||
        ex[145] !== tS ||
        ex[146] !== eU ||
        ex[147] !== eM ||
        ex[148] !== eO ||
        ex[149] !== eu
          ? ((ed = (0, n.jsx)(U, {
              mode: eU,
              canCreateMcpApp: eb,
              canUploadArchive: ey,
              isPending: tS,
              onModeChange: eO,
              onClose: eM,
              submitButton: eu,
            })),
            (ex[143] = eb),
            (ex[144] = ey),
            (ex[145] = tS),
            (ex[146] = eU),
            (ex[147] = eM),
            (ex[148] = eO),
            (ex[149] = eu),
            (ex[150] = ed))
          : (ed = ex[150]),
        ex[151] !== t4 || ex[152] !== ed
          ? ((ep = (0, n.jsx)(v.OO, { spacing: t4, children: ed })), (ex[151] = t4), (ex[152] = ed), (ex[153] = ep))
          : (ep = ex[153]),
        ex[154] !== es || ex[155] !== el || ex[156] !== ep
          ? ((eh = (0, n.jsxs)("div", { className: es, children: [el, ep] })),
            (ex[154] = es),
            (ex[155] = el),
            (ex[156] = ep),
            (ex[157] = eh))
          : (eh = ex[157]),
        ex[158] !== ev ||
        ex[159] !== e6 ||
        ex[160] !== ti ||
        ex[161] !== to ||
        ex[162] !== tc ||
        ex[163] !== tf ||
        ex[164] !== tS ||
        ex[165] !== eR ||
        ex[166] !== tu ||
        ex[167] !== tp ||
        ex[168] !== td ||
        ex[169] !== e9 ||
        ex[170] !== t$ ||
        ex[171] !== tr
          ? ((eg = t$
              ? (0, n.jsx)("aside", {
                  id: e6,
                  className: "min-w-0 md:min-h-0 md:flex-1 md:overflow-y-auto",
                  children: (0, n.jsx)(C.t, {
                    variant: "muted",
                    dividers: !1,
                    children: (0, n.jsxs)("div", {
                      className: "flex flex-col gap-4 p-4",
                      children: [
                        (0, n.jsx)(M.X.Header, {
                          size: "compact",
                          title: (0, n.jsx)(h.A, {
                            id: "plugins.create.oauth.panelTitle",
                            defaultMessage: "OAuth advanced settings",
                          }),
                          subtitle: (0, n.jsx)(h.A, {
                            id: "plugins.create.oauth.panelDescription",
                            defaultMessage:
                              "Review the discovered OAuth settings, choose how ChatGPT should obtain an OAuth client, and configure default scopes before you create the connector.",
                          }),
                        }),
                        tc
                          ? (0, n.jsx)("p", {
                              role: "status",
                              children: (0, n.jsx)(h.A, {
                                id: "plugins.create.oauth.loading",
                                defaultMessage: "Discovering OAuth settings\u2026",
                              }),
                            })
                          : null,
                        !tc && (tu || null == to)
                          ? (0, n.jsxs)("div", {
                              role: "alert",
                              className: "flex flex-col gap-2",
                              children: [
                                (0, n.jsx)(h.A, {
                                  id: "plugins.create.oauth.discoveryFailed",
                                  defaultMessage:
                                    "Couldn\u2019t discover OAuth settings. Check the server URL and retry, or enter the settings manually",
                                }),
                                (0, n.jsx)(_.$, {
                                  color: "ghost",
                                  onClick: () => {
                                    ;(e9(null), td())
                                  },
                                  children: (0, n.jsx)(h.A, {
                                    id: "plugins.create.oauth.retryDiscovery",
                                    defaultMessage: "Retry discovery",
                                  }),
                                }),
                              ],
                            })
                          : null,
                        (0, n.jsx)(X, {
                          allowPrivateKeyJwt: eR,
                          accountId: ev,
                          target: tr,
                          hasPreconfiguredOAuthClient: tf,
                          value: tp,
                          disabled: tS || tc,
                          onChange: (e) => e9({ key: ti, value: e }),
                        }),
                      ],
                    }),
                  }),
                })
              : null),
            (ex[158] = ev),
            (ex[159] = e6),
            (ex[160] = ti),
            (ex[161] = to),
            (ex[162] = tc),
            (ex[163] = tf),
            (ex[164] = tS),
            (ex[165] = eR),
            (ex[166] = tu),
            (ex[167] = tp),
            (ex[168] = td),
            (ex[169] = e9),
            (ex[170] = t$),
            (ex[171] = tr),
            (ex[172] = eg))
          : (eg = ex[172]),
        ex[173] !== en || ex[174] !== eh || ex[175] !== eg
          ? ((em = (0, n.jsxs)("div", { className: en, children: [eh, eg] })),
            (ex[173] = en),
            (ex[174] = eh),
            (ex[175] = eg),
            (ex[176] = em))
          : (em = ex[176]),
        ex[177] !== tV || ex[178] !== tW || ex[179] !== et || ex[180] !== ea || ex[181] !== em
          ? ((ef = (0, n.jsxs)(tV, { as: "form", size: tW, onSubmit: et, children: [ea, em] })),
            (ex[177] = tV),
            (ex[178] = tW),
            (ex[179] = et),
            (ex[180] = ea),
            (ex[181] = em),
            (ex[182] = ef))
          : (ef = ex[182]),
        ex[183] !== tJ ||
        ex[184] !== tS ||
        ex[185] !== tX ||
        ex[186] !== Q ||
        ex[187] !== tY ||
        ex[188] !== tZ ||
        ex[189] !== ee ||
        ex[190] !== ef
          ? ((e_ = (0, n.jsx)(tJ, {
              open: !0,
              size: tX,
              onOpenChange: Q,
              contentPosition: tY,
              showDialogClose: tZ,
              shouldIgnoreClickOutside: tS,
              contentProps: ee,
              children: ef,
            })),
            (ex[183] = tJ),
            (ex[184] = tS),
            (ex[185] = tX),
            (ex[186] = Q),
            (ex[187] = tY),
            (ex[188] = tZ),
            (ex[189] = ee),
            (ex[190] = ef),
            (ex[191] = e_))
          : (e_ = ex[191]),
        e_
      )
    }
  },
  OwuR(e, t, a) {
    var n = a("ASxG"),
      s = a("rGp2"),
      i = a("kK7d"),
      r = a("eShZ")
    class l extends Error {
      code
      constructor(e) {
        ;(super(e), (this.code = e))
      }
    }
    let o = (e) => ({ [s.ok]: (0, s.MR)(), "ChatGPT-Account-Id": e })
    function c(e, t, a) {
      if ("tunnel" === e) {
        let e = a.trim()
        return /^tunnel_(?:[a-z0-9]{4}_)?[a-z0-9]{32}$/.test(e) ? { tunnel_id: e } : null
      }
      let n = t.trim()
      if (!/^https?:\/\/[^/?#\s@\\]+(?:[/?#]|$)/i.test(n) || /[\s\\]|\p{Cc}/u.test(n)) return null
      try {
        let e = new URL(n)
        return ("http:" !== e.protocol && "https:" !== e.protocol) || !e.hostname || e.username || e.password
          ? null
          : { mcp_url: n }
      } catch {
        return null
      }
    }
    function u(e) {
      return e.size <= 10240 && ("image/png" === e.type.toLowerCase() || e.name.toLowerCase().endsWith(".png"))
    }
    async function d(e, t, a) {
      let n = await i.CodexRequest.safePost("/aip/connectors/mcp/oauth_config", {
        surface: "plugin_management",
        additionalHeaders: o(e),
        requestBody: t,
        expectedErrorStatuses: [400, 401, 403, 404, 413, 422, 424, 429],
        signal: a,
      }).catch((e) => {
        if (e instanceof r.FetchError && 404 === e.status) return null
        throw e
      })
      return n?.oauth_config ?? null
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
      let { oauth_clients: n } = await i.CodexRequest.safeGet("/aip/connectors/oauth_clients", {
        surface: "plugin_management",
        additionalHeaders: o(e),
        parameters: { query: { service: t } },
        signal: a,
      })
      return !!n?.length
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
        BG: d,
        DS: u,
        Lx: g,
        Qq: async function (e) {
          if (null != e.icon && !u(e.icon)) throw new l("invalid-icon")
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
              n = a?.supportsPkceS256 && !a.config.pkce_methods?.length,
              s =
                null == a
                  ? await d(e.accountId, e.target)
                  : {
                      ...a.config,
                      pkce_required: !!n || a.config.pkce_required,
                      pkce_methods: n ? ["S256"] : a.config.pkce_methods,
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
            if (null == s) throw new l("oauth-unavailable")
            if (!s.authorization_url || !s.token_url) throw new l("invalid-oauth-endpoints")
            for (let e of [
              s.authorization_url,
              s.token_url,
              s.registration_url,
              s.authorization_server_base,
              s.oidc_configuration_url,
              s.oidc_userinfo_endpoint,
            ])
              if (e && null == c("url", e, "")) throw new l("invalid-oauth-url")
            t.supported_auth?.push(s)
            let i = p(s, a?.clientMode)
            if ("USER_DEFINED" === i) {
              let n = a ? g(a, e.allowPrivateKeyJwt) : "none",
                s = e.allowPrivateKeyJwt && "private_key_jwt" === n
              if (s && !a?.privateKeyPem.trim()) throw new l("oauth-private-key-required")
              if (a?.clientId.trim())
                t.oauth_client_params = {
                  client_id: a.clientId.trim(),
                  client_secret: s
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
                  })(n),
                }
              else {
                if (s || a?.clientSecret.trim()) throw new l("oauth-client-id-required")
                let t = "mcp_url" in e.target ? new URL(e.target.mcp_url).origin : null
                if (!(e.hasPreconfiguredOAuthClient ?? (null != t && (await m(e.accountId, t)))))
                  throw new l("oauth-client-id-required")
              }
            }
            if (null != a) {
              ;((t.use_cimd = "USER_DEFINED" === i ? void 0 : "CIMD" === i),
                (t.oidc_enabled = !!s.oidc_configuration_url && a.oidcEnabled))
              let e = f(a.scopes)
              t.default_scopes = a.discovered ? e.filter((e) => s.scopes_supported?.includes(e)) : e
            }
          }
          let a = e.icon,
            n =
              null == a
                ? null
                : await new Promise((e, t) => {
                    let n = new FileReader()
                    ;((n.onload = () => ("string" == typeof n.result ? e(n.result) : t(new l("icon-read-failed")))),
                      (n.onerror = () => t(new l("icon-read-failed"))),
                      n.readAsDataURL(a))
                  }),
            { connector: s } = await i.CodexRequest.safePost("/aip/connectors/mcp", {
              surface: "plugin_management",
              additionalHeaders: o(e.accountId),
              requestBody: {
                name: e.name.trim(),
                description: e.description.trim(),
                ...e.target,
                logo_url: n,
                auth_request: t,
              },
              expectedErrorStatuses: [400, 401, 403, 409, 413, 422, 424, 429],
            })
          return s
        },
        UK: f,
        Xw: function (e, t) {
          let a = new URL(e),
            n = "http:" === a.protocol || "https:" === a.protocol ? a.origin : "https://chatgpt.com"
          return {
            redirect: new URL(
              null == t ? "/connector_platform_oauth_redirect" : `/connector/oauth/${encodeURIComponent(t)}`,
              n,
            ).href,
            metadata: new URL(null == t ? "/oauth/client.json" : `/oauth/${encodeURIComponent(t)}/client.json`, n).href,
          }
        },
        Yr: function (e) {
          let t
          if (e instanceof l) return e.code
          if (!(e instanceof r.FetchError)) return null
          if ("network" === e.errorKind) return "network-error"
          if ("tunnel_client_network_access_denied" === e.errorCode) return "tunnel-network-denied"
          try {
            t = n.Ikc({ detail: n.L5J() }).parse(JSON.parse(e.message)).detail
          } catch {}
          let a = n.KCZ([n.YjP(), n.Ikc({ message: n.YjP() }).transform((e) => e.message)]).safeParse(t).data
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
          let s = n
            .Ikc({
              type: n.euz("mcp_error"),
              kind: n.k5n(["http", "network", "json_rpc", "invalid_response"]),
              upstream_status: n.aig().int().min(100).max(599).nullish(),
              upstream_error_code: n.YjP().nullish(),
            })
            .safeParse(t)
          if (424 === e.status && s.success) {
            switch (s.data.upstream_error_code) {
              case "tunnel_client_network_access_denied":
                return "tunnel-network-denied"
              case "tunnel_client_not_seen":
              case "tunnel_client_not_connected":
                return "tunnel-unavailable"
            }
            if ("network" === s.data.kind) return "server-unreachable"
            if ("http" === s.data.kind || "invalid_response" === s.data.kind) {
              switch (s.data.upstream_status) {
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
              if (null != s.data.upstream_status && s.data.upstream_status >= 500) return "service-unavailable"
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
              await i.CodexRequest.safeGet("/aip/connectors/mcp/tunnels", {
                surface: "plugin_management",
                additionalHeaders: o(e),
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
        rw: l,
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
            n = e / 1024,
            s = 0
          for (; n >= 1024 && s < a.length - 1;) ((n /= 1024), (s += 1))
          return t.formatNumber(n, { maximumFractionDigits: 1, style: "unit", unit: a[s], unitDisplay: "short" })
        },
      },
    )
  },
}
//# sourceMappingURL=819365.8f30b55acf.js.map
