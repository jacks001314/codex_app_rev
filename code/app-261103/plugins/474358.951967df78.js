export const __rspack_esm_ids = [474358]
export const __webpack_modules__ = {
  OoiI(e, n, t) {
    var i = t("HFSu"),
      a = t("rGp2"),
      s = t("o6hs")
    t.d(
      n,
      {},
      {
        O: async function (e, n = {}) {
          await i.CodexRequest.safeDelete("/aip/connectors/links/{link_id}", {
            surface: "settings",
            parameters: { path: { link_id: e } },
            expectedIdentity: n.expectedIdentity,
            additionalHeaders: { [s.ok]: n.productSku ?? (0, a.MR)() },
          })
        },
        a: async function (e, n) {
          await i.CodexRequest.safeDelete("/aip/connectors/links", {
            surface: "plugin_details",
            expectedIdentity: n,
            requestBody: { connector_id: e },
            additionalHeaders: { [s.ok]: (0, a.MR)(), "ChatGPT-Account-Id": n.accountId },
          })
        },
      },
    )
  },
  jHtb(e, n, t) {
    t.d(n, { J: () => d })
    var i = t("ABep"),
      a = t("QosV"),
      s = t("on57"),
      o = t("zd8w"),
      r = t("rS3J"),
      l = t("cWXs"),
      c = t("AdJ5")
    function d(e) {
      let n,
        t,
        o,
        d,
        p,
        m,
        h = (0, a.c)(28),
        {
          text: g,
          ref: f,
          className: x,
          components: y,
          directives: k,
          externalLinkContextMenuConversationId: b,
          markdownClassName: I,
          cwd: w,
          hostId: v,
          hasSerializedParagraphs: A,
          pluginMentionPresentation: j,
          renderMath: S,
          textStyle: C,
          variant: N,
        } = e,
        M = void 0 !== A && A,
        _ = void 0 === N ? "default" : N
      ;(h[0] !== x ? ((n = (0, s.A)("text-size-chat whitespace-pre-wrap", x)), (h[0] = x), (h[1] = n)) : (n = h[1]),
        h[2] !== M || h[3] !== I || h[4] !== _
          ? ((t = (0, s.A)(
              "[&_ol]:!ps-6 [&_ul]:!ps-6",
              "user-message" === _
                ? (0, s.A)("rich-text-user-turn", !M && "[&>p]:!m-0 [&>p+p]:!mt-5")
                : "[&_li+li]:!mt-0 [&_li>ol]:!mt-0 [&_li>p+p]:!mt-0 [&_li>ul]:!mt-0 [&_p]:!m-0 [&_p+p]:!mt-5",
              "compact" === _ &&
                "![--markdown-font-size:var(--text-sm)] ![--markdown-line-height:var(--leading-relaxed)] !text-secondary",
              I,
            )),
            (h[2] = M),
            (h[3] = I),
            (h[4] = _),
            (h[5] = t))
          : (t = h[5]))
      let E = "user-message" === _ && M ? u : void 0,
        R = null != b
      return (
        h[6] !== C || h[7] !== _
          ? ((o = C ?? ("user-message" === _ ? { tone: "user-message" } : void 0)), (h[6] = C), (h[7] = _), (h[8] = o))
          : (o = h[8]),
        h[9] !== g ? ((d = (0, r.L0)(g)), (h[9] = g), (h[10] = d)) : (d = h[10]),
        h[11] !== y ||
        h[12] !== w ||
        h[13] !== k ||
        h[14] !== b ||
        h[15] !== v ||
        h[16] !== j ||
        h[17] !== S ||
        h[18] !== t ||
        h[19] !== E ||
        h[20] !== R ||
        h[21] !== o ||
        h[22] !== d
          ? ((p = (0, i.jsx)(l.Markdown, {
              className: t,
              components: y,
              conversationId: b,
              cwd: w,
              directives: k,
              extensions: c.b,
              hostId: v,
              pluginMentionPresentation: j,
              renderMath: S,
              renderRoot: E,
              isBrowserEnabled: R,
              repairOrderedLists: !1,
              textStyle: o,
              children: d,
            })),
            (h[11] = y),
            (h[12] = w),
            (h[13] = k),
            (h[14] = b),
            (h[15] = v),
            (h[16] = j),
            (h[17] = S),
            (h[18] = t),
            (h[19] = E),
            (h[20] = R),
            (h[21] = o),
            (h[22] = d),
            (h[23] = p))
          : (p = h[23]),
        h[24] !== f || h[25] !== n || h[26] !== p
          ? ((m = (0, i.jsx)("div", { ref: f, className: n, children: p })),
            (h[24] = f),
            (h[25] = n),
            (h[26] = p),
            (h[27] = m))
          : (m = h[27]),
        m
      )
    }
    function u(e, n) {
      let t = e.every((e) => "paragraph" === e.type || "space" === e.type),
        a = [],
        s = 0
      for (let r = 0; r < e.length; r++) {
        let l = e[r]
        if ("space" === l.type) continue
        let c = e[r + 1],
          d = c?.type === "space" ? r + 2 : r + 1
        if (d >= e.length) continue
        let u =
            (l.raw.match(/\n+$/)?.[0].length ?? 0) + (c?.type === "space" ? (c.raw.match(/\n+$/)?.[0].length ?? 0) : 0),
          p = t ? Math.max(0, u - 1) : Math.ceil(Math.max(0, u - 2) / 2)
        0 !== p &&
          (a.push(
            (0, i.jsxs)(
              o.Fragment,
              {
                children: [
                  n(e.slice(s, r + 1)),
                  (0, i.jsx)("span", {
                    className: "block whitespace-pre-wrap",
                    "data-markdown-copy": "blank-lines",
                    children: "\n".repeat(p),
                  }),
                ],
              },
              r,
            ),
          ),
          (s = d))
      }
      return (a.push((0, i.jsx)(o.Fragment, { children: n(e.slice(s)) }, "end")), a)
    }
  },
  AdJ5(e, n, t) {
    var i = t("lsky"),
      a = t("EULo"),
      s = t("MX6A"),
      o = t("ABl9")
    let r = [
      {
        extensions: [
          {
            name: "sitesPluginMention",
            level: "inline",
            start: (e) => l(e),
            tokenizer(e) {
              if (!this.lexer.state.inLink && 0 === l(e))
                return {
                  type: "link",
                  raw: "$sites",
                  href: o.ic,
                  title: null,
                  text: "Sites",
                  tokens: [{ type: "text", raw: "Sites", text: "Sites" }],
                }
            },
          },
          {
            name: "userMessageImage",
            level: "inline",
            start: (e) => e.indexOf("!["),
            tokenizer(e) {
              var n, t
              if (!e.startsWith("![")) return
              let a = this.lexer.options.tokenizer
              if (null == a) return
              let s = i._F.prototype.link.call(a, e) ?? i._F.prototype.reflink.call(a, e, this.lexer.tokens.links)
              return s?.type === "image"
                ? ((n = s),
                  (t = c(this.lexer, s.text)),
                  {
                    type: "text",
                    raw: n.raw,
                    text: `!${n.text}`,
                    tokens: [
                      { type: "text", raw: "!", text: "!" },
                      { type: "link", raw: n.raw.slice(1), href: n.href, title: n.title, text: n.text, tokens: t },
                    ],
                  })
                : void 0
            },
          },
          {
            name: "composerLink",
            level: "inline",
            start(e) {
              let n = e.indexOf("[")
              if (-1 === n) return
              let t = e[n - 1]
              return ":" === t || "!" === t ? n - 1 : n
            },
            tokenizer(e) {
              if (this.lexer.state.inLink) return this.lexer.options.tokenizer?.escape(e)
              if (e.startsWith(":[") && (0, a.ex)(e, 1)?.start === 1) {
                let n = e[0]
                return { type: "text", raw: n, text: n }
              }
              if (!e.startsWith("[")) return
              let n = this.lexer.options.tokenizer,
                t = null == n ? void 0 : i._F.prototype.link.call(n, e)
              if (t?.type === "link" && null != t.title) return t
              let o = (0, a.ex)(e, 0)
              if (o?.start === 0) {
                let n = (0, s.Nb)(o.label)
                return {
                  type: "link",
                  raw: e.slice(0, o.end),
                  href: (0, a.gh)(o.path),
                  title: null,
                  text: n,
                  tokens: c(this.lexer, o.label),
                }
              }
              let r = e.split("\n", 1)[0]
              if (r.includes("](")) return { type: "text", raw: r, text: r }
            },
          },
        ],
      },
    ]
    function l(e) {
      let n = e.matchAll(o.sm).next().value
      return null == n ? void 0 : n.index + n[1].length
    }
    function c(e, n) {
      let t = e.state.inLink
      e.state.inLink = !0
      try {
        return e.inlineTokens(n)
      } finally {
        e.state.inLink = t
      }
    }
    t.d(n, {}, { b: r })
  },
  SJFU(e, n, t) {
    let i = (0, t("Qgfj").YK)({
        browserExtensionDescription: {
          id: "plugins.installModal.browserExtension.description",
          defaultMessage: "Install this extension to connect ChatGPT to your browser",
          description: "Description for the required Chromium browser extension in the plugin finish setup modal",
        },
        browserExtensionName: {
          id: "plugins.browserExtension.name",
          defaultMessage: "ChatGPT browser extension",
          description: "Name of the ChatGPT extension for a Chromium browser",
        },
        chromeBrowserExtensionDescription: {
          id: "plugins.installModal.codexChrome.description",
          defaultMessage: "Install this extension in Chrome to connect ChatGPT to your browser",
          description: "Description for the required Chrome browser extension in the plugin finish setup modal",
        },
        chromeBrowserExtensionName: {
          id: "plugins.browserExtension.chrome.name",
          defaultMessage: "ChatGPT for Chrome",
          description: "Name of the ChatGPT extension for Chrome",
        },
        edgeBrowserExtensionName: {
          id: "plugins.browserExtension.edge.name",
          defaultMessage: "ChatGPT for Edge",
          description: "Name of the ChatGPT extension for Edge",
        },
        edgeBrowserExtensionDescription: {
          id: "plugins.installModal.edgeBrowserExtension.description",
          defaultMessage: "Install this extension in Edge to connect ChatGPT to your browser",
          description: "Description for the required Edge browser extension in the plugin finish setup modal",
        },
      }),
      a = {
        chrome: { description: i.chromeBrowserExtensionDescription, name: i.chromeBrowserExtensionName },
        edge: { description: i.edgeBrowserExtensionDescription, name: i.edgeBrowserExtensionName },
      }
    t.d(
      n,
      {},
      {
        b: function (e) {
          return a[e]?.name ?? i.browserExtensionName
        },
        i: function (e) {
          return a[e]?.description ?? i.browserExtensionDescription
        },
      },
    )
  },
  L8Xn(e, n, t) {
    let i = (0, t("Qgfj").YK)({
      noAccountIdentity: {
        id: "plugins.detail.accounts.noAccountIdentity",
        defaultMessage: "{connectorName} (no account linked)",
        description:
          "Account identity in a connected app's account rows and settings, rename, and reconnect dialogs. Shown for a connection with auth type NONE and no provider email, name, or nickname. connectorName is the non-empty app display name or connector name. The parenthetical describes this connection's current state; it does not mean the app never supports sign-in. Short plain-text label; preserve app brand names.",
      },
      accountIdentityFallback: {
        id: "plugins.detail.accounts.accountIdentityFallback",
        defaultMessage: "Account",
        description:
          "Last-resort account identity in a connected app's account rows and settings, rename, and reconnect dialogs when no provider identity, app name, or valid account-holder name is available. Custom link names appear separately below this short plain-text identity.",
      },
      personalizedAccountIdentityFallback: {
        id: "plugins.detail.accounts.personalizedAccountIdentityFallback",
        defaultMessage: "{userName}'s {appName} account",
        description:
          "Fallback identity in a connected app's account rows and settings, rename, and reconnect dialogs when the current user directly owns the link and it has no provider email, name, or nickname. userName is the user's non-empty ChatGPT first name, or full name when the first name is unavailable; it is not the provider account name. appName is the non-empty canonical app display name or connector name, such as Figma. Custom link names appear separately. Short plain-text label; preserve app brand names.",
      },
      holderAccountIdentityFallback: {
        id: "plugins.detail.accounts.holderAccountIdentityFallback",
        defaultMessage: "{userName}'s account",
        description:
          "Fallback identity in a connected app's account rows and settings, rename, and reconnect dialogs when the current user directly owns the link and no provider identity or app name is available. userName is the non-empty ChatGPT first name, or full name when the first name is unavailable; it is not the provider account name. Custom link names appear separately below this short plain-text identity.",
      },
      appAccountIdentityFallback: {
        id: "plugins.detail.accounts.appAccountIdentityFallback",
        defaultMessage: "{appName} account",
        description:
          "Fallback identity in a connected app's account rows and settings, rename, and reconnect dialogs when no provider identity or valid account-holder name is available. Shared, other-user, and unknown-owner links use this owner-neutral label. appName is the non-empty canonical app display name or connector name, such as Figma. Custom link names appear separately below this short plain-text identity. Preserve app brand names.",
      },
    })
    t.d(n, {}, { $: i })
  },
  h2u4(e, n, t) {
    var i = t("ABep"),
      a = t("QosV"),
      s = t("slpy"),
      o = t("Wf1j"),
      r = t("oyxz"),
      l = t("FvYa"),
      c = t("ygO2"),
      d = t("Ot7V"),
      u = t("aQvR"),
      p = t("pie7"),
      m = t("t9Ku"),
      h = t("Jqpj")
    function g(e) {
      let n,
        t,
        s,
        o,
        l,
        p,
        m = (0, a.c)(17),
        { href: h, onManageApps: g } = e
      m[0] !== h ? ((n = h.startsWith("/")), (m[0] = h), (m[1] = n)) : (n = m[1])
      let f = n
      return (
        m[2] !== h || m[3] !== f ? ((t = f ? { to: h } : { href: h }), (m[2] = h), (m[3] = f), (m[4] = t)) : (t = m[4]),
        m[5] !== h || m[6] !== f || m[7] !== g
          ? ((s = (e) => {
              ;(e.stopPropagation(),
                f ||
                  (g?.(),
                  (0, d.PQ)({
                    event: e,
                    initiator: "open_in_browser_bridge",
                    href: h,
                    openTarget: "external-browser",
                  })))
            }),
            (m[5] = h),
            (m[6] = f),
            (m[7] = g),
            (m[8] = s))
          : (s = m[8]),
        m[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(r.A, {
              id: "plugins.detail.template.manageOnWeb",
              defaultMessage: "Manage app",
              description: "Open ChatGPT web to set up, reconnect, add, or remove connections for this app template",
            })),
            (m[9] = o))
          : (o = m[9]),
        m[10] !== h || m[11] !== f
          ? ((l = f ? null : (0, i.jsx)(u.g, { className: "icon-xs", href: h, openTarget: "external-browser" })),
            (m[10] = h),
            (m[11] = f),
            (m[12] = l))
          : (l = m[12]),
        m[13] !== t || m[14] !== s || m[15] !== l
          ? ((p = (0, i.jsxs)(c.z, { ...t, color: "secondary", size: "toolbar", onClick: s, children: [o, l] })),
            (m[13] = t),
            (m[14] = s),
            (m[15] = l),
            (m[16] = p))
          : (p = m[16]),
        p
      )
    }
    t.d(
      n,
      {},
      {
        D: function (e) {
          let n,
            t,
            r,
            c,
            d,
            u,
            f = (0, a.c)(19),
            { template: x, managementUrl: y, onManageApps: k } = e,
            b = (0, o.A)()
          f[0] !== b
            ? ((n = b.formatMessage({
                id: "plugins.detail.includes.disabledByAdminBadge",
                defaultMessage: "Disabled by admin",
                description:
                  "Tooltip label shown on an included app or app template row when it is disabled by admin on the plugin detail page",
              })),
              (f[0] = b),
              (f[1] = n))
            : (n = f[1])
          let I = n,
            w = null == y ? "opacity-60" : void 0
          return (
            f[2] !== I || f[3] !== y || f[4] !== k
              ? ((t =
                  null != y
                    ? (0, i.jsx)(g, { href: y, onManageApps: k })
                    : (0, i.jsx)("span", {
                        className: "flex h-7 w-7 shrink-0 items-center justify-center text-secondary",
                        children: (0, i.jsx)(s.m, {
                          content: I,
                          children: (0, i.jsx)("span", {
                            role: "img",
                            "aria-label": I,
                            children: (0, i.jsx)(m.A, { className: "icon-sm shrink-0" }),
                          }),
                        }),
                      })),
                (f[2] = I),
                (f[3] = y),
                (f[4] = k),
                (f[5] = t))
              : (t = f[5]),
            f[6] !== x.description
              ? ((r = x.description ?? (0, i.jsx)("span", { "aria-hidden": !0 })), (f[6] = x.description), (f[7] = r))
              : (r = f[7]),
            f[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, i.jsx)(p.A, { className: "icon-sm text-secondary" })), (f[8] = c))
              : (c = f[8]),
            f[9] !== x.logoUrl || f[10] !== x.logoUrlDark || f[11] !== x.name
              ? ((d = (0, i.jsx)(l.R, {
                  alt: x.name,
                  className: "icon-md",
                  logoDarkUrl: x.logoUrlDark,
                  logoUrl: x.logoUrl,
                  fallback: c,
                })),
                (f[9] = x.logoUrl),
                (f[10] = x.logoUrlDark),
                (f[11] = x.name),
                (f[12] = d))
              : (d = f[12]),
            f[13] !== w || f[14] !== t || f[15] !== r || f[16] !== d || f[17] !== x.name
              ? ((u = (0, i.jsx)(h.D, {
                  className: w,
                  actions: t,
                  actionsPlacement: "center",
                  description: r,
                  descriptionClassName: "line-clamp-1",
                  icon: d,
                  iconContainerVariant: "outline",
                  presentation: "row",
                  title: x.name,
                })),
                (f[13] = w),
                (f[14] = t),
                (f[15] = r),
                (f[16] = d),
                (f[17] = x.name),
                (f[18] = u))
              : (u = f[18]),
            u
          )
        },
        u: g,
      },
    )
  },
  EF5T(e, n, t) {
    t.d(n, { VU: () => X })
    var i = t("ABep"),
      a = t("QosV"),
      s = t("GUV3"),
      o = t("ECyk"),
      r = t("xv9C"),
      l = t("T0Rc"),
      c = t("irkb"),
      d = t("xSOA"),
      u = t("zTeN"),
      p = t("zd8w"),
      m = t("Qgfj"),
      h = t("oyxz"),
      g = t("Wf1j"),
      f = t("HZfM"),
      x = t("rGp2"),
      y = t("JAom"),
      k = t("hOO0"),
      b = t("HUHI"),
      I = t("OoiI"),
      w = t("uc7r"),
      v = t("OiCI"),
      A = t("EOo5"),
      j = t("YitN"),
      S = t("tvcH"),
      C = t("OAko"),
      N = t("LhhH"),
      M = t("ygO2"),
      _ = t("OXR4"),
      E = t("JNtf"),
      R = t("mUDD"),
      F = t("bqtn"),
      O = t("HOLv"),
      $ = t("GO7r"),
      T = t("zLIa"),
      P = t("SGsN"),
      D = t("sLlu"),
      z = t("OWtl"),
      U = t("BSnr"),
      q = t("I7Ou"),
      B = t("AWNZ"),
      L = t("ZEx5"),
      Q = t("rvFo"),
      G = t("HFSu"),
      K = t("Zpwo"),
      H = t("L8Xn"),
      V = t("MX3C"),
      W = t("WU1E"),
      J = t("ueue")
    let Z = (0, m.YK)({
      accountActions: {
        id: "plugins.detail.accounts.actions",
        defaultMessage: "Actions for {accountName}",
        description:
          "Accessible name of the menu containing rename, reconnect, and disconnect actions for one connected provider account; accountName is its provider identity",
      },
      cancel: {
        id: "plugins.detail.accounts.cancel",
        defaultMessage: "Cancel",
        description:
          "Secondary button that closes a connected-account rename or reconnect confirmation dialog without saving",
      },
      disconnect: {
        id: "plugins.detail.accounts.disconnect",
        defaultMessage: "Disconnect",
        description:
          "Destructive menu action that disconnects only the selected provider account while preserving sibling accounts and the installed plugin",
      },
      disconnectError: {
        id: "plugins.detail.accounts.disconnectError",
        defaultMessage: "Couldn't disconnect account",
        description: "Error toast shown when disconnecting one specific connected provider account fails",
      },
      disconnectSuccess: {
        id: "plugins.detail.accounts.disconnectSuccess",
        defaultMessage: "Account disconnected",
        description:
          "Success toast shown after one connected provider account is removed without uninstalling its plugin",
      },
      government: {
        id: "plugins.detail.accounts.suggestion.government",
        defaultMessage: "Government",
        description: "Suggested editable nickname for a newly added government provider account",
      },
      loading: {
        id: "plugins.detail.accounts.loading",
        defaultMessage: "Loading connected accounts…",
        description: "Accessible loading label while provider accounts for the current plugin are being retrieved",
      },
      loadingError: {
        id: "plugins.detail.accounts.loadingError",
        defaultMessage: "Couldn't load connected accounts",
        description: "Error shown when the accessible provider accounts for the current plugin cannot be retrieved",
      },
      nickname: {
        id: "plugins.detail.accounts.nickname",
        defaultMessage: "Nickname",
        description: "Visible label for the optional user-authored nickname of one connected provider account",
      },
      nicknamePlaceholder: {
        id: "plugins.detail.accounts.nicknamePlaceholder",
        defaultMessage: "Add a nickname",
        description:
          "Placeholder for the optional nickname field used to distinguish one connected provider account from its siblings",
      },
      nicknameRequired: {
        id: "plugins.detail.accounts.nicknameRequired",
        defaultMessage: "Enter an account nickname",
        description:
          "Inline validation error shown when a user tries to save an empty or whitespace-only account name from the rename-only account dialog",
      },
      nicknameTooLong: {
        id: "plugins.detail.accounts.nicknameTooLong",
        defaultMessage: "Nickname must be 64 characters or fewer",
        description:
          "Inline validation error shown when a connected account nickname contains more than 64 Unicode characters",
      },
      personal: {
        id: "plugins.detail.accounts.suggestion.personal",
        defaultMessage: "Personal",
        description: "Suggested editable nickname for a newly added personal provider account",
      },
      reconnect: {
        id: "plugins.detail.accounts.reconnect",
        defaultMessage: "Reconnect",
        description:
          "Account-row menu or inline action that reauthenticates the specific connected provider account without reconnecting sibling accounts",
      },
      reconnectAccount: {
        id: "plugins.detail.accounts.reconnectAccount",
        defaultMessage: "Reconnect {accountName}",
        description:
          "Accessible name for the inline reconnect action on one provider account; accountName is its provider identity",
      },
      reconnectFirst: {
        id: "plugins.detail.accounts.reconnectFirst",
        defaultMessage: "Reconnect your existing account first",
        description:
          "Confirmation-dialog heading shown when adding another OAuth account requires refreshing the selected existing account's missing provider identity first",
      },
      reconnectFirstDescription: {
        id: "plugins.detail.accounts.reconnectFirstDescription",
        defaultMessage: "To add another account, first reconnect {accountName}",
        description:
          "Confirmation-dialog explanation before adding a provider account when the existing OAuth account lacks a provider profile identifier; accountName identifies the exact account to reconnect",
      },
      reconnectRequired: {
        id: "plugins.detail.accounts.reconnectRequired",
        defaultMessage: "Authentication update required",
        description: "Screen-reader-only status announcing that a particular provider account needs reauthentication",
      },
      refreshError: {
        id: "plugins.detail.accounts.refreshError",
        defaultMessage: "Account updated, but couldn't refresh accounts",
        description:
          "Error toast shown when an exact-account mutation succeeded but refreshing the remaining connected-account inventory failed",
      },
      rename: {
        id: "plugins.detail.accounts.rename",
        defaultMessage: "Rename account",
        description:
          "Account-row menu action and dialog title for changing the user-authored nickname of one provider account",
      },
      retry: {
        id: "plugins.detail.accounts.retry",
        defaultMessage: "Try again",
        description: "Button that retries loading connected accounts after an inventory or refresh request failed",
      },
      save: {
        id: "plugins.detail.accounts.save",
        defaultMessage: "Save",
        description: "Primary action that saves one connected account's nickname",
      },
      renameSaveError: {
        id: "plugins.detail.accounts.saveError",
        defaultMessage: "Couldn't rename account",
        description: "Error toast shown when renaming one connected provider account fails",
      },
      renameSaveSuccess: {
        id: "plugins.detail.accounts.saveSuccess",
        defaultMessage: "Account renamed",
        description: "Success toast shown after one connected account is renamed",
      },
      school: {
        id: "plugins.detail.accounts.suggestion.school",
        defaultMessage: "School",
        description: "Suggested editable nickname for a newly added school provider account",
      },
      selectAccount: {
        id: "plugins.detail.accounts.selectAccount",
        defaultMessage: "Select {accountName}",
        description:
          "Accessible name for selecting one provider account on a plugin detail page; accountName is its provider identity",
      },
      work: {
        id: "plugins.detail.accounts.suggestion.work",
        defaultMessage: "Work",
        description: "Suggested editable nickname for a newly added work provider account",
      },
    })
    function X(e) {
      let n,
        t,
        s,
        o,
        r,
        c = (0, a.c)(24),
        {
          accountContext: d,
          accountRowAction: u,
          app: p,
          connector: m,
          hostId: g,
          isMultiLinkEligible: f,
          variant: y,
        } = e,
        { authMethod: b, isLoading: I } = (0, A.As)(),
        w = "chatgpt" === b || "chatgptAuthTokens" === b
      c[0] !== p.id ? ((n = (0, x.rJ)(p.id)), (c[0] = p.id), (c[1] = n)) : (n = c[1])
      let v = w && !!d.accountId && !!d.userId && null == m && null == f
      c[2] !== n || c[3] !== v
        ? ((t = { ...n, enabled: v, retry: !1, staleTime: Q.D.FIVE_MINUTES }), (c[2] = n), (c[3] = v), (c[4] = t))
        : (t = c[4])
      let { data: S, isError: C, refetch: N } = (0, l.I)(t)
      c[5] === Symbol.for("react.memo_cache_sentinel") ? ((s = { enabled: !1 }), (c[5] = s)) : (s = c[5])
      let { isError: _, refetch: E } = (0, j.r)(s),
        R = (!d.accountId || !d.userId) && _,
        F = m ?? S,
        O = (null == m && C) || R
      if (!I && !w) return null
      if (null == f && (null == F || O)) {
        let e
        return (
          c[6] !== R || c[7] !== O || c[8] !== N || c[9] !== E
            ? ((e = (0, i.jsx)(L.t, {
                children: O
                  ? (0, i.jsx)(B.ic, {
                      label: (0, i.jsx)(h.A, { ...Z.loadingError }),
                      control: (0, i.jsx)(M.$, {
                        color: "ghost",
                        onClick: () => void (R ? E() : N()),
                        children: (0, i.jsx)(h.A, { ...Z.retry }),
                      }),
                    })
                  : (0, i.jsx)(q.u, { children: (0, i.jsx)(h.A, { ...Z.loading }) }),
              })),
              (c[6] = R),
              (c[7] = O),
              (c[8] = N),
              (c[9] = E),
              (c[10] = e))
            : (e = c[10]),
          e
        )
      }
      c[11] !== p.id || c[12] !== F || c[13] !== f
        ? ((o = f ?? (0, k.aW)(p.id, F)), (c[11] = p.id), (c[12] = F), (c[13] = f), (c[14] = o))
        : (o = c[14])
      let $ = o
      if (!$ && "settings" !== y) return null
      let T = `${g}:${d.userId}:${d.accountId}:${p.id}`
      return (
        c[15] !== d ||
        c[16] !== u ||
        c[17] !== p ||
        c[18] !== $ ||
        c[19] !== g ||
        c[20] !== m ||
        c[21] !== T ||
        c[22] !== y
          ? ((r = (0, i.jsx)(
              Y,
              {
                accountContext: d,
                accountRowAction: u,
                app: p,
                canConnectAnotherAccount: $,
                connector: m,
                hostId: g,
                variant: y,
              },
              T,
            )),
            (c[15] = d),
            (c[16] = u),
            (c[17] = p),
            (c[18] = $),
            (c[19] = g),
            (c[20] = m),
            (c[21] = T),
            (c[22] = y),
            (c[23] = r))
          : (r = c[23]),
        r
      )
    }
    function Y(e) {
      let n,
        t,
        s,
        o,
        r,
        m,
        N,
        _,
        F,
        O,
        $,
        T,
        U,
        q,
        B,
        L,
        G,
        X,
        Y,
        el,
        ec,
        ed,
        eu,
        ep,
        em,
        eh,
        eg,
        ef,
        ex,
        ey,
        ek,
        eb,
        eI,
        ew,
        ev,
        eA,
        ej,
        eS = (0, a.c)(123),
        {
          accountContext: eC,
          accountRowAction: eN,
          app: eM,
          canConnectAnotherAccount: e_,
          connector: eE,
          hostId: eR,
          variant: eF,
        } = e,
        eO = (0, u.gh)(z.u),
        e$ = (0, g.A)(),
        eT = eC.accountId ?? null,
        eP = eC.userId ?? null
      eS[0] !== eT || eS[1] !== eP
        ? ((n = { accountId: eT, userId: eP }), (eS[0] = eT), (eS[1] = eP), (eS[2] = n))
        : (n = eS[2])
      let { data: eD } = (0, u._U)(S.chatGptCurrentUserQuery$, n),
        { nameAtLogin: ez } = (0, A.As)()
      eS[3] === Symbol.for("react.memo_cache_sentinel") ? ((t = { preview: !1 }), (eS[3] = t)) : (t = eS[3])
      let { data: eU } = (0, C.YL)(void 0, t),
        eq = eD?.first_name?.trim() || (null == eD ? ez?.trim() : eD.name?.trim()),
        eB = (function (e, n, t) {
          if (null != e && e.id === n) return "personal" === e.structure ? (t ?? void 0) : (e.account_user_id ?? void 0)
        })(eU, eC.accountId, eC.userId),
        eL = (0, f.zy)(),
        eQ = (0, f.Zp)(),
        eG = (0, p.useRef)(null),
        eK = (0, p.useRef)(null),
        eH = (0, c.jE)()
      eS[4] !== eM.id ? ((s = (0, k.$)(eM.id)), (eS[4] = eM.id), (eS[5] = s)) : (s = eS[5])
      let eV = s
      eS[6] !== eM.id ? ((o = (0, x.rJ)(eM.id)), (eS[6] = eM.id), (eS[7] = o)) : (o = eS[7])
      let eW = null == eE && !!eC.userId && !!eC.accountId
      eS[8] !== o || eS[9] !== eW
        ? ((r = { ...o, enabled: eW, retry: !1, staleTime: Q.D.FIVE_MINUTES }), (eS[8] = o), (eS[9] = eW), (eS[10] = r))
        : (r = eS[10])
      let { data: eJ, isPending: eZ, isError: eX, isSuccess: eY, refetch: e0 } = (0, l.I)(r),
        e1 = eE ?? eJ,
        e2 = eC.accountId ?? null,
        e3 = eC.userId ?? null,
        e4 = e1?.id ?? eM.id
      eS[11] !== e3 || eS[12] !== e4 || eS[13] !== e2
        ? ((m = { accountId: e2, userId: e3, appId: e4 }), (eS[11] = e3), (eS[12] = e4), (eS[13] = e2), (eS[14] = m))
        : (m = eS[14])
      let e5 = m,
        e7 = (0, u._U)(V.C5, e5),
        e6 = null == eC.selection ? e7 : eC.selection.linkId
      eS[15] !== eC.accountId || eS[16] !== eC.selection || eS[17] !== eO || eS[18] !== e5
        ? ((N = (e) => {
            eO.get(v.Sk) === (eC.accountId ?? null) && (eC.selection?.onChange(e), (0, V.i_)(eO, e5, e))
          }),
          (eS[15] = eC.accountId),
          (eS[16] = eC.selection),
          (eS[17] = eO),
          (eS[18] = e5),
          (eS[19] = N))
        : (N = eS[19])
      let e8 = N,
        [e9, ne] = (0, p.useState)(null),
        [nn, nt] = (0, p.useState)(null)
      ;(eS[20] !== eC.accountId || eS[21] !== eC.userId || eS[22] !== eM.id || eS[23] !== eR || eS[24] !== eO
        ? ((_ = () => () => {
            null != eK.current &&
              ((0, y.gJ)(eO, { accountId: eC.accountId, appId: eM.id, hostId: eR, userId: eC.userId }, eK.current),
              (eK.current = null))
          }),
          (F = [eO, eC.accountId, eC.userId, eM.id, eR]),
          (eS[20] = eC.accountId),
          (eS[21] = eC.userId),
          (eS[22] = eM.id),
          (eS[23] = eR),
          (eS[24] = eO),
          (eS[25] = _),
          (eS[26] = F))
        : ((_ = eS[25]), (F = eS[26])),
        (0, p.useEffect)(_, F),
        eS[27] !== eC.accountId || eS[28] !== eC.userId
          ? ((O = (0, w.dZ)({ accountId: eC.accountId, userId: eC.userId })),
            (eS[27] = eC.accountId),
            (eS[28] = eC.userId),
            (eS[29] = O))
          : (O = eS[29]))
      let ni = O,
        { data: na, isPending: ns, isError: no, isSuccess: nr, refetch: nl } = (0, l.I)(ni)
      eS[30] === Symbol.for("react.memo_cache_sentinel") ? (($ = { enabled: !1 }), (eS[30] = $)) : ($ = eS[30])
      let { isError: nc, refetch: nd } = (0, j.r)($),
        nu = (!eC.accountId || !eC.userId) && nc,
        np = null == na ? void 0 : (0, V.Tm)(na, eM.id)
      if (eS[31] !== eC.accountId || eS[32] !== eC.userId || eS[33] !== eM.id) {
        let e = (0, b.qS)(eM.id)
        ;((q = l.I),
          (T = e),
          (U = [...e.queryKey, eC.accountId ?? "", eC.userId ?? ""]),
          (eS[31] = eC.accountId),
          (eS[32] = eC.userId),
          (eS[33] = eM.id),
          (eS[34] = T),
          (eS[35] = U),
          (eS[36] = q))
      } else ((T = eS[34]), (U = eS[35]), (q = eS[36]))
      let nm = "settings" === eF && !e_ && np?.length === 1 && !np[0]?.owner_profile?.email?.trim()
      eS[37] !== T || eS[38] !== U || eS[39] !== nm
        ? ((B = { ...T, queryKey: U, staleTime: Q.D.FIVE_MINUTES, enabled: nm }),
          (eS[37] = T),
          (eS[38] = U),
          (eS[39] = nm),
          (eS[40] = B))
        : (B = eS[40])
      let { data: nh } = q(B),
        ng = np?.map((e) =>
          e.owner_profile?.email?.trim() || nh?.id !== e.id || null == nh.owner_profile
            ? e
            : { ...e, owner_profile: { ...nh.owner_profile, ...e.owner_profile, email: nh.owner_profile.email } },
        )
      eS[41] !== eV || eS[42] !== ni.queryKey
        ? ((L = [...ni.queryKey, "pending-account-rename", eV]), (eS[41] = eV), (eS[42] = ni.queryKey), (eS[43] = L))
        : (L = eS[43])
      let nf = L
      eS[44] !== nf
        ? ((G = { enabled: !1, queryFn: ea, queryKey: nf, staleTime: Q.D.INFINITE }), (eS[44] = nf), (eS[45] = G))
        : (G = eS[45])
      let { data: nx } = (0, l.I)(G),
        ny = null == nx ? void 0 : ng?.find((e) => e.id === nx.linkId),
        nk = ny ?? ng?.find((e) => e.id === e6) ?? ng?.find(ei) ?? ng?.[0],
        nb = ng?.find((e) => e.id === e9) ?? ny
      eS[46] !== eM.id || eS[47] !== eH || eS[48] !== ni.queryKey
        ? ((X = (e, n) => {
            ;(eH.setQueryData(ni.queryKey, (t) => t?.map((t) => (t.id === e ? n(t) : t))),
              eH.setQueryData((0, b.qS)(eM.id).queryKey, (t) => (t?.id === e ? n(t) : (t ?? null))))
          }),
          (eS[46] = eM.id),
          (eS[47] = eH),
          (eS[48] = ni.queryKey),
          (eS[49] = X))
        : (X = eS[49])
      let nI = X
      ;(eS[50] !== eV
        ? ((Y = async (e) => {
            if ("HIDDEN" === e.visibility || e.id.startsWith("implicit_link::") || (0, k.$)(e.connector_id) !== eV)
              throw Error("Cannot disconnect an inaccessible connector account")
            await (0, I.O)(e.id)
          }),
          (eS[50] = eV),
          (eS[51] = Y))
        : (Y = eS[51]),
        eS[52] !== e$ || eS[53] !== eO
          ? ((el = () => {
              eO.get(P.Id).danger(e$.formatMessage(Z.disconnectError), {
                errorAnalytics: { toastId: "pluginConnectedAccounts.onError.disconnectError" },
              })
            }),
            (eS[52] = e$),
            (eS[53] = eO),
            (eS[54] = el))
          : (el = eS[54]))
      let nw = (0, d.n)({
        mutationFn: Y,
        onSuccess: (e, n) => {
          eH.setQueryData(ni.queryKey, (e) => e?.filter((e) => e.id !== n.id))
          let t = ng?.filter((e) => e.id !== n.id)
          ;(nk?.id === n.id && e8(t?.find(et)?.id ?? t?.[0]?.id ?? null),
            eH.setQueryData((0, b.qS)(eM.id).queryKey, (e) => (e?.id === n.id ? (t?.[0] ?? null) : (e ?? null))),
            eO.get(P.Id).success(e$.formatMessage(Z.disconnectSuccess)),
            Promise.all([
              (0, D.y)(eH, J.qw),
              eH.refetchQueries({ exact: !0, queryKey: ni.queryKey, type: "active" }, { throwOnError: !0 }),
              ...(t?.length === 0 ? [eC.onLastAccountDisconnected()] : []),
            ]).catch(() => {
              eO.get(P.Id).danger(e$.formatMessage(Z.refreshError), {
                errorAnalytics: { toastId: "pluginConnectedAccounts.onSuccess.refreshError" },
              })
            }))
        },
        onError: el,
      })
      ;(eS[55] !== e$ || eS[56] !== nf || eS[57] !== eH || eS[58] !== eO || eS[59] !== e8 || eS[60] !== nI
        ? ((ec = (e) => {
            let { link: n, name: t } = e
            ;(nI(n.id, (e) => ({ ...e, name: t })),
              eH.setQueryData(nf, null),
              e8(n.id),
              ne(null),
              eO.get(P.Id).success(e$.formatMessage(Z.renameSaveSuccess)))
          }),
          (eS[55] = e$),
          (eS[56] = nf),
          (eS[57] = eH),
          (eS[58] = eO),
          (eS[59] = e8),
          (eS[60] = nI),
          (eS[61] = ec))
        : (ec = eS[61]),
        eS[62] !== e$ || eS[63] !== eO
          ? ((ed = () => {
              eO.get(P.Id).danger(e$.formatMessage(Z.renameSaveError), {
                errorAnalytics: { toastId: "pluginConnectedAccounts.onError.renameSaveError" },
              })
            }),
            (eS[62] = e$),
            (eS[63] = eO),
            (eS[64] = ed))
          : (ed = eS[64]),
        eS[65] !== ec || eS[66] !== ed
          ? ((eu = { mutationFn: en, onSuccess: ec, onError: ed }), (eS[65] = ec), (eS[66] = ed), (eS[67] = eu))
          : (eu = eS[67]))
      let nv = (0, d.n)(eu),
        nA = ng?.find((e) =>
          eC.pendingConnection?.appId === eM.id
            ? "reauth" === eC.pendingConnection.kind && eC.pendingConnection.linkId === e.id
            : eC.isAppConnectPending(eM.id, { kind: "apps-tab", reauthLinkId: e.id }),
        )?.id
      eS[68] !== eC || eS[69] !== eM.id
        ? ((ep = eC.isAppConnectPending(eM.id, { kind: "apps-tab" })), (eS[68] = eC), (eS[69] = eM.id), (eS[70] = ep))
        : (ep = eS[70])
      let nj = ep,
        nS = null == nA && nj
      eS[71] !== eC || eS[72] !== eM.id || eS[73] !== nj || eS[74] !== nA
        ? ((em =
            null != nA ||
            nj ||
            (eC.pendingConnection?.appId === eM.id && "add" === eC.pendingConnection.kind) ||
            (eC.isAppConnectPending(eM.id) && !eC.isAppReauthPending(eM.id))),
          (eS[71] = eC),
          (eS[72] = eM.id),
          (eS[73] = nj),
          (eS[74] = nA),
          (eS[75] = em))
        : (em = eS[75])
      let nC = em
      eS[76] !== eC ||
      eS[77] !== np ||
      eS[78] !== eM ||
      eS[79] !== e1?.supports_oauth_owner_profile_id ||
      eS[80] !== eR ||
      eS[81] !== ng ||
      eS[82] !== eO ||
      eS[83] !== nk
        ? ((eh = (e, n) => {
            let t = (0, y.rz)(eO, { accountId: eC.accountId, appId: eM.id, hostId: eR, userId: eC.userId }, n),
              i = t?.resumeTarget.addAccountAttempt
            eK.current = i?.id ?? null
            let a = e ?? t?.appConnectOptions,
              s =
                nk?.auth_type !== "OAUTH" || nk.owner_profile?.id?.trim() || i?.reauthenticatedLinkIds.includes(nk.id)
                  ? ng?.find(
                      (e) =>
                        "OAUTH" === e.auth_type &&
                        !e.owner_profile?.id?.trim() &&
                        !i?.reauthenticatedLinkIds.includes(e.id),
                    )
                  : nk
            if (null != s && e1?.supports_oauth_owner_profile_id !== !1) {
              if (null == eC.userId) return
              let e = i ?? {
                id: crypto.randomUUID(),
                userId: eC.userId,
                expiresAt: Date.now() + 18e5,
                reauthenticatedLinkIds: [],
              }
              ;((eK.current = e.id), nt({ link: s, appConnectOptions: a, addAccountAttempt: e }))
              return
            }
            return eC.onConnectAccount(eM, {
              appId: eM.id,
              kind: "add",
              appConnectOptions: a,
              addAccountAttempt: i,
              hasExistingAccount: null != np && np.length > 0,
            })
          }),
          (eS[76] = eC),
          (eS[77] = np),
          (eS[78] = eM),
          (eS[79] = e1?.supports_oauth_owner_profile_id),
          (eS[80] = eR),
          (eS[81] = ng),
          (eS[82] = eO),
          (eS[83] = nk),
          (eS[84] = eh))
        : (eh = eS[84])
      let nN = eh,
        nM = !1 !== eC.canConnectAccounts,
        n_ =
          e_ &&
          nM &&
          eC.isConnectorSetupReady &&
          nr &&
          (null != eE || eY) &&
          null != e1 &&
          "DISABLED_BY_ADMIN" !== e1.status &&
          (ng?.length ?? 0) > 0 &&
          !nw.isPending &&
          (!nC || nS)
      eS[85] !== eC.accountId ||
      eS[86] !== eC.userId ||
      eS[87] !== eM.id ||
      eS[88] !== nN ||
      eS[89] !== eR ||
      eS[90] !== e$ ||
      eS[91] !== eL ||
      eS[92] !== eQ ||
      eS[93] !== eO
        ? ((eg = () =>
            (0, W.q)({
              scope: eO,
              accountId: eC.accountId,
              userId: eC.userId,
              connectorId: eM.id,
              location: eL,
              navigate: eQ,
              handledKey: eG,
              canResumeAttempt: (e) =>
                null != (0, y.rz)(eO, { accountId: eC.accountId, appId: eM.id, hostId: eR, userId: eC.userId }, e),
              intl: e$,
              onSetup: nN,
            })),
          (eS[85] = eC.accountId),
          (eS[86] = eC.userId),
          (eS[87] = eM.id),
          (eS[88] = nN),
          (eS[89] = eR),
          (eS[90] = e$),
          (eS[91] = eL),
          (eS[92] = eQ),
          (eS[93] = eO),
          (eS[94] = eg))
        : (eg = eS[94])
      let nE = (0, p.useEffectEvent)(eg)
      if (
        (eS[95] !== n_ || eS[96] !== nE
          ? ((ef = () => {
              n_ && nE()
            }),
            (eS[95] = n_),
            (eS[96] = nE),
            (eS[97] = ef))
          : (ef = eS[97]),
        eS[98] !== eC.accountId || eS[99] !== eC.userId || eS[100] !== n_ || eS[101] !== eL
          ? ((ex = [n_, eL, eC.accountId, eC.userId]),
            (eS[98] = eC.accountId),
            (eS[99] = eC.userId),
            (eS[100] = n_),
            (eS[101] = eL),
            (eS[102] = ex))
          : (ex = eS[102]),
        (0, p.useEffect)(ef, ex),
        "settings" === eF && null != e1 && null != ng)
      ) {
        let e = (0, x.NT)(e1)
        if (("NONE" === e || "API_KEY" === e) && !ng.some(ee)) return null
      }
      let nR = eM.name.trim() || e1?.name?.trim()
      if (null != nn) {
        let e = nn.link,
          n = (0, K.zC)(e, eq, eB)
        null == (ey = (0, K.nA)(e)) &&
          (ey =
            "NONE" === e.auth_type && nR
              ? e$.formatMessage(H.$.noAccountIdentity, { connectorName: nR })
              : n && nR
                ? e$.formatMessage(H.$.personalizedAccountIdentityFallback, { userName: n, appName: nR })
                : n
                  ? e$.formatMessage(H.$.holderAccountIdentityFallback, { userName: n })
                  : nR
                    ? e$.formatMessage(H.$.appAccountIdentityFallback, { appName: nR })
                    : e$.formatMessage(H.$.accountIdentityFallback))
      }
      return (
        eS[103] !== eC || eS[104] !== e5.appId
          ? ((ek = (0, i.jsx)(es, { accountContext: eC, appId: e5.appId })),
            (eS[103] = eC),
            (eS[104] = e5.appId),
            (eS[105] = ek))
          : (ek = eS[105]),
        eS[106] !== nN
          ? ((eb = () => {
              nN()
            }),
            (eS[106] = nN),
            (eS[107] = eb))
          : (eb = eS[107]),
        eS[108] !== nw || eS[109] !== e8
          ? ((eI = (e) => {
              ;(e8(e.id), nw.mutate(e))
            }),
            (eS[108] = nw),
            (eS[109] = e8),
            (eS[110] = eI))
          : (eI = eS[110]),
        eS[111] !== eC || eS[112] !== eM
          ? ((ew = (e) => {
              eC.onConnectAccount(eM, { appId: eM.id, kind: "reauth", linkId: e.id })
            }),
            (eS[111] = eC),
            (eS[112] = eM),
            (eS[113] = ew))
          : (ew = eS[113]),
        eS[114] !== nu || eS[115] !== nl || eS[116] !== nd || eS[117] !== e0 || eS[118] !== eE
          ? ((ev = () => {
              nu ? nd() : Promise.all([nl(), null == eE ? e0() : void 0])
            }),
            (eS[114] = nu),
            (eS[115] = nl),
            (eS[116] = nd),
            (eS[117] = e0),
            (eS[118] = eE),
            (eS[119] = ev))
          : (ev = eS[119]),
        eS[120] !== e8
          ? ((eA = (e) => e8(e.id)),
            (ej = (e) => {
              ;(e8(e.id), ne(e.id))
            }),
            (eS[120] = e8),
            (eS[121] = eA),
            (eS[122] = ej))
          : ((eA = eS[121]), (ej = eS[122])),
        (0, i.jsxs)(i.Fragment, {
          children: [
            ek,
            (0, i.jsx)(eo, {
              accountRowAction: eN,
              app: eM,
              variant: eF,
              canConnectAnotherAccount: e_,
              canRetryConnection: nS,
              canConnectAccounts: nM,
              defaultAccountName: e1?.name,
              userName: eq,
              userId: eB,
              disconnectingLinkId: nw.isPending ? nw.variables?.id : void 0,
              hasError: no || (null == eE && eX) || nu,
              isConnectionPending: nC,
              isLoading: (ns || (null == eE && eZ)) && !nu,
              links: null == e1 && ng?.length !== 0 ? void 0 : ng,
              pendingReauthLinkId: nA,
              selectedLinkId: nk?.id,
              onConnectAnother: eb,
              onDisconnect: eI,
              onReconnect: ew,
              onRetry: ev,
              onSelect: eA,
              onRename: ej,
            }),
            null == nb || null == e1
              ? null
              : (0, i.jsx)(
                  er,
                  {
                    connectorName: eM.name,
                    defaultAccountName: e1.name,
                    userName: eq,
                    userId: eB,
                    isSaving: nv.isPending,
                    link: nb,
                    suggestedAccountName: null == e9 ? nx?.suggestedAccountName : void 0,
                    onClose: () => {
                      ;(eH.setQueryData(nf, null), e8(nb.id), ne(null))
                    },
                    onSave: (e) => {
                      nv.mutate({ link: nb, name: e })
                    },
                  },
                  nb.id,
                ),
            nM && null != nn
              ? (0, i.jsx)(E.lG, {
                  open: !0,
                  contentProps: { "aria-describedby": void 0 },
                  onOpenChange: (e) => {
                    e ||
                      ((0, y.gJ)(
                        eO,
                        { accountId: eC.accountId, appId: eM.id, hostId: eR, userId: eC.userId },
                        nn.addAccountAttempt.id,
                      ),
                      nt(null))
                  },
                  children: (0, i.jsxs)(R.R4, {
                    as: "form",
                    onSubmit: (e) => {
                      ;(e.preventDefault(),
                        nM &&
                          (eC.onConnectAccount(eM, {
                            appId: eM.id,
                            kind: "reauth",
                            linkId: nn.link.id,
                            appConnectOptions: nn.appConnectOptions,
                            addAccountAttempt: nn.addAccountAttempt,
                          }),
                          nt(null)))
                    },
                    children: [
                      (0, i.jsx)(R.OO, {
                        children: (0, i.jsx)(R.c7, {
                          title: (0, i.jsx)(E.L3, { children: (0, i.jsx)(h.A, { ...Z.reconnectFirst }) }),
                          subtitle: e$.formatMessage(Z.reconnectFirstDescription, { accountName: ey }),
                        }),
                      }),
                      (0, i.jsx)(R.OO, {
                        children: (0, i.jsxs)(R.Es, {
                          children: [
                            (0, i.jsx)(M.$, {
                              color: "ghost",
                              onClick: () => {
                                ;((0, y.gJ)(
                                  eO,
                                  { accountId: eC.accountId, appId: eM.id, hostId: eR, userId: eC.userId },
                                  nn.addAccountAttempt.id,
                                ),
                                  nt(null))
                              },
                              children: (0, i.jsx)(h.A, { ...Z.cancel }),
                            }),
                            (0, i.jsx)(M.$, {
                              color: "primary",
                              type: "submit",
                              children: (0, i.jsx)(h.A, { ...Z.reconnect }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                })
              : null,
          ],
        })
      )
    }
    function ee(e) {
      return null != (0, x.H9)(e)
    }
    async function en(e) {
      let { link: n, name: t } = e
      return (
        await G.CodexRequest.safePatch("/ps/v2/links/{link_id}", {
          surface: "settings",
          parameters: { path: { link_id: n.id } },
          requestBody: { name: t },
          additionalHeaders: (0, w.GR)(),
        }),
        { link: n, name: t }
      )
    }
    function et(e) {
      return "REAUTH_REQUIRED" !== e.auth_status
    }
    function ei(e) {
      return "REAUTH_REQUIRED" !== e.auth_status
    }
    function ea() {
      return null
    }
    function es(e) {
      let n,
        t,
        i = (0, a.c)(8),
        { accountContext: s, appId: o } = e,
        r = (0, u.gh)(z.u),
        l = (0, u.Ul)(v.Sk),
        c = s.accountId ?? null,
        d = s.userId ?? null,
        m = s.selection?.linkId
      return (
        i[0] !== c || i[1] !== l || i[2] !== o || i[3] !== m || i[4] !== r || i[5] !== d
          ? ((n = () => {
              void 0 !== m && l === c && (0, V.i_)(r, { accountId: c, userId: d, appId: o }, m)
            }),
            (t = [r, l, c, d, o, m]),
            (i[0] = c),
            (i[1] = l),
            (i[2] = o),
            (i[3] = m),
            (i[4] = r),
            (i[5] = d),
            (i[6] = n),
            (i[7] = t))
          : ((n = i[6]), (t = i[7])),
        (0, p.useLayoutEffect)(n, t),
        null
      )
    }
    function eo(e) {
      let n,
        t,
        l,
        c,
        d,
        u,
        m,
        f = (0, a.c)(33),
        {
          accountRowAction: y,
          app: b,
          variant: I,
          canConnectAnotherAccount: w,
          canRetryConnection: v,
          canConnectAccounts: A,
          defaultAccountName: j,
          userName: S,
          userId: C,
          disconnectingLinkId: E,
          hasError: R,
          isConnectionPending: T,
          isLoading: P,
          links: D,
          pendingReauthLinkId: z,
          selectedLinkId: Q,
          onConnectAnother: G,
          onDisconnect: V,
          onReconnect: W,
          onRename: J,
          onRetry: X,
          onSelect: Y,
        } = e,
        ee = void 0 === w || w,
        en = void 0 !== v && v,
        et = void 0 === A || A,
        ei = void 0 !== T && T,
        ea = (0, g.A)(),
        es = b.name.trim() || j?.trim(),
        eo = (0, p.useId)(),
        er = (D?.length ?? 0) > 1
      f[0] !== R || f[1] !== D || f[2] !== X
        ? ((n =
            R && null == D
              ? (0, i.jsx)(B.ic, {
                  label: (0, i.jsx)(h.A, { ...Z.loadingError }),
                  control: (0, i.jsx)(M.$, { color: "ghost", onClick: X, children: (0, i.jsx)(h.A, { ...Z.retry }) }),
                })
              : null),
          (f[0] = R),
          (f[1] = D),
          (f[2] = X),
          (f[3] = n))
        : (n = f[3])
      let el = n
      if (D?.length === 0) return null
      if (null == D && !b.isAccessible) {
        let e
        return (
          f[4] !== el
            ? ((e = null == el ? null : (0, i.jsx)(L.t, { children: el })), (f[4] = el), (f[5] = e))
            : (e = f[5]),
          e
        )
      }
      f[6] !== ee || f[7] !== er
        ? ((t =
            ee || er
              ? (0, i.jsx)(h.A, {
                  id: "plugins.detail.accounts.title",
                  defaultMessage: "Connected accounts",
                  description:
                    "Section heading above provider accounts connected to one app on a Codex plugin detail page",
                })
              : (0, i.jsx)(h.A, {
                  id: "plugins.detail.accounts.singleTitle",
                  defaultMessage: "Connected account",
                  description:
                    "Section heading for the connected provider account of an app that does not support connecting multiple accounts",
                })),
          (f[6] = ee),
          (f[7] = er),
          (f[8] = t))
        : (t = f[8])
      let ec = t,
        ed = L.t
      f[9] !== P || f[10] !== D
        ? ((l = P && null == D ? (0, i.jsx)(q.u, { children: (0, i.jsx)(h.A, { ...Z.loading }) }) : null),
          (f[9] = P),
          (f[10] = D),
          (f[11] = l))
        : (l = f[11])
      let eu = D?.map((e) => {
        let n = (0, K.zC)(e, S, C),
          t = (0, K.nA)(e)
        null == t &&
          (t =
            "NONE" === e.auth_type && es
              ? ea.formatMessage(H.$.noAccountIdentity, { connectorName: es })
              : n && es
                ? ea.formatMessage(H.$.personalizedAccountIdentityFallback, { userName: n, appName: es })
                : n
                  ? ea.formatMessage(H.$.holderAccountIdentityFallback, { userName: n })
                  : es
                    ? ea.formatMessage(H.$.appAccountIdentityFallback, { appName: es })
                    : ea.formatMessage(H.$.accountIdentityFallback))
        let a = (0, K.Dr)(e, b.name, j),
          o = null != (0, x.H9)(e),
          l = "REAUTH_REQUIRED" === e.auth_status,
          c = z === e.id,
          d = E === e.id,
          u = `${eo}-${e.id}`,
          p = l ? `${u}-warning` : void 0,
          m = null == a || a === t ? void 0 : `${u}-nickname`,
          g = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("span", { className: "truncate text-default", children: t }),
              null == a || a === t
                ? null
                : (0, i.jsx)("span", { id: m, className: "truncate text-sm text-secondary", children: a }),
              l
                ? (0, i.jsx)("span", {
                    className: "sr-only",
                    id: p,
                    children: (0, i.jsx)(h.A, { ...Z.reconnectRequired }),
                  })
                : null,
            ],
          }),
          f = (0, i.jsx)(N.e, { alt: "", name: t, size: "md", src: e.owner_profile?.picture ?? null }),
          k = (0, i.jsxs)(i.Fragment, {
            children: [
              et && (l || c) && o
                ? (0, i.jsx)(M.$, {
                    id: `${u}-reconnect`,
                    "aria-labelledby": null == m ? void 0 : `${u}-reconnect ${m}`,
                    "aria-label": ea.formatMessage(Z.reconnectAccount, { accountName: t }),
                    color: "settings" === I ? "outline" : "ghost",
                    size: "settings" === I ? "toolbar" : "default",
                    disabled: null != E || (ei && !c),
                    onClick: () => W(e),
                    children: (0, i.jsx)(h.A, { ...Z.reconnect }),
                  })
                : null,
              (0, i.jsxs)(F.Ab, {
                align: "end",
                contentWidth: "xs",
                triggerButton: (0, i.jsx)(M.$, {
                  id: `${u}-actions`,
                  "aria-labelledby": null == m ? void 0 : `${u}-actions ${m}`,
                  "aria-busy": d,
                  "aria-label": ea.formatMessage(Z.accountActions, { accountName: t }),
                  color: "ghost",
                  disabled: null != E || c || ei,
                  loading: d,
                  size: "icon",
                  children: (0, i.jsx)($.l0Y, {}),
                }),
                children: [
                  ee
                    ? (0, i.jsx)(F.ms.Item, {
                        leftIconAsset: s.h,
                        onSelect: () => J(e),
                        children: (0, i.jsx)(h.A, { ...Z.rename }),
                      })
                    : null,
                  et && o
                    ? (0, i.jsxs)(F.ms.Item, {
                        onSelect: () => W(e),
                        children: [
                          (0, i.jsx)(F.ms.ItemIcon, { size: "xs", children: (0, i.jsx)($._7Q, {}) }),
                          (0, i.jsx)(h.A, { ...Z.reconnect }),
                        ],
                      })
                    : null,
                  (0, i.jsx)(F.ms.Item, {
                    leftIconAsset: r.Q,
                    tone: "danger",
                    onSelect: () => V(e),
                    children: (0, i.jsx)(h.A, { ...Z.disconnect }),
                  }),
                ],
              }),
            ],
          }),
          w = null != E || c || ei
        return "rename" === y && ee && !w
          ? (0, i.jsx)(
              B.kG,
              {
                actions: k,
                ariaLabel: ea.formatMessage(
                  {
                    id: "plugins.detail.accounts.renameAccountRow",
                    defaultMessage: "Rename {accountName}{hasNickname, select, true { ({nickname})} other {}}",
                    description:
                      "Accessible name of a connected-account row that opens its nickname editor; accountName is the provider identity and nickname is an optional user-defined account label",
                  },
                  { accountName: t, hasNickname: null != m, nickname: a ?? "" },
                ),
                edgeRounding: "surface",
                icon: f,
                label: (0, i.jsx)("span", { className: "flex min-w-0 flex-col", children: g }),
                onClick: () => J(e),
              },
              e.id,
            )
          : (0, i.jsx)(
              B.ic,
              {
                controlSizing: "content",
                icon: f,
                label: er
                  ? (0, i.jsx)("button", {
                      id: `${u}-select`,
                      "aria-describedby": p,
                      "aria-labelledby": null == m ? void 0 : `${u}-select ${m}`,
                      "aria-label": ea.formatMessage(Z.selectAccount, { accountName: t }),
                      "aria-pressed": Q === e.id,
                      className: "flex max-w-full min-w-0 cursor-interaction flex-col text-start",
                      disabled: w,
                      onClick: () => Y(e),
                      type: "button",
                      children: g,
                    })
                  : (0, i.jsx)("div", {
                      id: `${u}-identity`,
                      "aria-describedby": p,
                      "aria-labelledby": null == m ? void 0 : `${u}-identity ${m}`,
                      "aria-label": t,
                      className: "flex min-w-0 flex-col",
                      role: "group",
                      children: g,
                    }),
                control: k,
              },
              e.id,
            )
      })
      ;(f[12] !== et || f[13] !== ee || f[14] !== en || f[15] !== E || f[16] !== ei || f[17] !== D || f[18] !== G
        ? ((c =
            null != D && et && ee
              ? (0, i.jsx)(B.kG, {
                  disabled: null != E || (ei && !en),
                  edgeRounding: "surface",
                  icon: (0, i.jsx)("span", {
                    className:
                      "flex size-9 items-center justify-center rounded-full bg-surface-secondary text-secondary",
                    children: (0, i.jsx)(O.I, { "aria-hidden": !1, asset: o.f }),
                  }),
                  label: (0, i.jsx)(h.A, {
                    id: "plugins.detail.accounts.connectAnother",
                    defaultMessage: "Connect another account",
                    description:
                      "Action that connects an additional provider account to the same app while preserving all existing accounts",
                  }),
                  onClick: G,
                })
              : null),
          (f[12] = et),
          (f[13] = ee),
          (f[14] = en),
          (f[15] = E),
          (f[16] = ei),
          (f[17] = D),
          (f[18] = G),
          (f[19] = c))
        : (c = f[19]),
        f[20] !== ed || f[21] !== el || f[22] !== l || f[23] !== eu || f[24] !== c
          ? ((d = (0, i.jsxs)(ed, { children: [l, el, eu, c] })),
            (f[20] = ed),
            (f[21] = el),
            (f[22] = l),
            (f[23] = eu),
            (f[24] = c),
            (f[25] = d))
          : (d = f[25]))
      let ep = d
      f[26] !== b.id ? ((u = (0, k.$)(b.id)), (f[26] = b.id), (f[27] = u)) : (u = f[27])
      let em = `plugin-connected-accounts-${u}`
      return (
        f[28] !== ep || f[29] !== em || f[30] !== ec || f[31] !== I
          ? ((m =
              "settings" === I
                ? (0, i.jsxs)(U.X, { id: em, children: [(0, i.jsx)(U.X.Header, { title: ec }), ep] })
                : (0, i.jsx)(_.J, { id: em, title: ec, children: ep })),
            (f[28] = ep),
            (f[29] = em),
            (f[30] = ec),
            (f[31] = I),
            (f[32] = m))
          : (m = f[32]),
        m
      )
    }
    function er(e) {
      let n,
        t,
        s,
        o,
        r,
        l,
        c,
        d,
        u,
        m,
        f,
        x,
        y,
        k,
        b,
        I,
        w,
        v,
        A,
        j,
        S,
        C,
        N,
        _,
        F,
        O = (0, a.c)(74),
        {
          connectorName: $,
          defaultAccountName: P,
          userName: D,
          userId: z,
          isSaving: q,
          link: B,
          suggestedAccountName: L,
          onClose: Q,
          onSave: G,
        } = e,
        V = (0, g.A)()
      if (O[0] !== $ || O[1] !== P || O[2] !== V || O[3] !== B || O[4] !== z || O[5] !== D) {
        let e,
          t = $.trim() || P?.trim(),
          i = (0, K.zC)(B, D, z)
        if ((O[7] !== B ? ((e = (0, K.nA)(B)), (O[7] = B), (O[8] = e)) : (e = O[8]), null == (n = e)))
          if ("NONE" === B.auth_type && t) n = V.formatMessage(H.$.noAccountIdentity, { connectorName: t })
          else if (i && t) n = V.formatMessage(H.$.personalizedAccountIdentityFallback, { userName: i, appName: t })
          else if (i) n = V.formatMessage(H.$.holderAccountIdentityFallback, { userName: i })
          else if (t) n = V.formatMessage(H.$.appAccountIdentityFallback, { appName: t })
          else {
            let e
            ;(O[9] !== V ? ((e = V.formatMessage(H.$.accountIdentityFallback)), (O[9] = V), (O[10] = e)) : (e = O[10]),
              (n = e))
          }
        ;((O[0] = $), (O[1] = P), (O[2] = V), (O[3] = B), (O[4] = z), (O[5] = D), (O[6] = n))
      } else n = O[6]
      let W = (0, p.useId)()
      O[11] !== $ || O[12] !== P || O[13] !== V || O[14] !== B || O[15] !== L
        ? ((t = (0, K.Dr)(B, $, P) ?? ""),
          (s = p.useState),
          (o = t.trim().length > 0 || null == L ? t : V.formatMessage(Z[L])),
          (O[11] = $),
          (O[12] = P),
          (O[13] = V),
          (O[14] = B),
          (O[15] = L),
          (O[16] = t),
          (O[17] = s),
          (O[18] = o))
        : ((t = O[16]), (s = O[17]), (o = O[18]))
      let [J, X] = s(o),
        [Y, ee] = (0, p.useState)(null)
      O[19] !== J ? ((r = J.trim()), (O[19] = J), (O[20] = r)) : (r = O[20])
      let en = r
      O[21] !== t || O[22] !== q || O[23] !== B || O[24] !== en
        ? ((l = !q && en !== t && en !== B.name.trim()),
          (O[21] = t),
          (O[22] = q),
          (O[23] = B),
          (O[24] = en),
          (O[25] = l))
        : (l = O[25])
      let et = l
      ;(O[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { "aria-describedby": void 0 }), (O[26] = c))
        : (c = O[26]),
        O[27] !== q || O[28] !== Q
          ? ((d = (e) => {
              e || q || Q()
            }),
            (O[27] = q),
            (O[28] = Q),
            (O[29] = d))
          : (d = O[29]),
        O[30] !== et || O[31] !== G || O[32] !== en
          ? ((u = (e) => {
              if ((e.preventDefault(), et)) {
                if (!en) return void ee("required")
                if (Array.from(en).length > 64) return void ee("too-long")
                ;(ee(null), G(en))
              }
            }),
            (O[30] = et),
            (O[31] = G),
            (O[32] = en),
            (O[33] = u))
          : (u = O[33]),
        O[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)(E.L3, { children: (0, i.jsx)(h.A, { ...Z.rename }) })), (O[34] = m))
          : (m = O[34]),
        O[35] !== n
          ? ((f = (0, i.jsx)(R.OO, { children: (0, i.jsx)(R.c7, { title: m, subtitle: n, subtitleSize: "base" }) })),
            (O[35] = n),
            (O[36] = f))
          : (f = O[36]),
        O[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, i.jsx)(h.A, { ...Z.nickname })), (O[37] = x))
          : (x = O[37]),
        O[38] !== W
          ? ((y = (0, i.jsx)(U.X.Header, {
              size: "base",
              spacing: "compact",
              title: (0, i.jsx)("label", { className: "select-none", htmlFor: W, children: x }),
            })),
            (O[38] = W),
            (O[39] = y))
          : (y = O[39]))
      let ei = null != Y
      ;(O[40] !== V ? ((k = V.formatMessage(Z.nicknamePlaceholder)), (O[40] = V), (O[41] = k)) : (k = O[41]),
        O[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (e) => {
              ;(X(e.target.value), ee(null))
            }),
            (O[42] = b))
          : (b = O[42]),
        O[43] !== W || O[44] !== q || O[45] !== J || O[46] !== ei || O[47] !== k
          ? ((I = (0, i.jsx)(T.pd, {
              id: W,
              "aria-invalid": ei,
              autoFocus: !0,
              disabled: q,
              name: "plugin-account-nickname",
              placeholder: k,
              value: J,
              onChange: b,
            })),
            (O[43] = W),
            (O[44] = q),
            (O[45] = J),
            (O[46] = ei),
            (O[47] = k),
            (O[48] = I))
          : (I = O[48]),
        O[49] !== Y
          ? ((w =
              null != Y
                ? (0, i.jsx)("span", {
                    className: "mt-2 text-sm text-danger",
                    role: "alert",
                    children:
                      "required" === Y
                        ? (0, i.jsx)(h.A, { ...Z.nicknameRequired })
                        : (0, i.jsx)(h.A, { ...Z.nicknameTooLong }),
                  })
                : null),
            (O[49] = Y),
            (O[50] = w))
          : (w = O[50]),
        O[51] !== y || O[52] !== I || O[53] !== w
          ? ((v = (0, i.jsxs)(R.OO, { children: [y, I, w] })), (O[51] = y), (O[52] = I), (O[53] = w), (O[54] = v))
          : (v = O[54]),
        O[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)(h.A, { ...Z.cancel })), (O[55] = A))
          : (A = O[55]),
        O[56] !== q || O[57] !== Q
          ? ((j = (0, i.jsx)(M.$, { color: "ghost", disabled: q, onClick: Q, children: A })),
            (O[56] = q),
            (O[57] = Q),
            (O[58] = j))
          : (j = O[58]))
      let ea = !et
      return (
        O[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsx)(h.A, { ...Z.save })), (O[59] = S))
          : (S = O[59]),
        O[60] !== q || O[61] !== ea
          ? ((C = (0, i.jsx)(M.$, { color: "primary", disabled: ea, loading: q, type: "submit", children: S })),
            (O[60] = q),
            (O[61] = ea),
            (O[62] = C))
          : (C = O[62]),
        O[63] !== j || O[64] !== C
          ? ((N = (0, i.jsxs)(R.OO, {
              children: [null, (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(R.Es, { children: [j, C] }) })],
            })),
            (O[63] = j),
            (O[64] = C),
            (O[65] = N))
          : (N = O[65]),
        O[66] !== v || O[67] !== N || O[68] !== u || O[69] !== f
          ? ((_ = (0, i.jsxs)(R.R4, { as: "form", onSubmit: u, children: [f, v, N] })),
            (O[66] = v),
            (O[67] = N),
            (O[68] = u),
            (O[69] = f),
            (O[70] = _))
          : (_ = O[70]),
        O[71] !== _ || O[72] !== d
          ? ((F = (0, i.jsx)(E.lG, { open: !0, contentProps: c, onOpenChange: d, children: _ })),
            (O[71] = _),
            (O[72] = d),
            (O[73] = F))
          : (F = O[73]),
        F
      )
    }
  },
  WU1E(e, n, t) {
    var i = t("ASxG"),
      a = t("rGp2"),
      s = t("o6hs"),
      o = t("hOO0"),
      r = t("SGsN"),
      l = t("nlNF")
    let c = i
      .object({
        connectorSetup: i.object({
          accountId: i.string().min(1),
          userId: i.string().min(1),
          connectorId: i.string().min(1),
          options: s.Vn.optional(),
          addAccountAttemptId: i.uuid().optional(),
          installationKey: i.string().min(1).optional(),
        }),
      })
      .loose()
    function d({ scope: e, navigate: n, setup: t }) {
      let i = e.get(l.x2),
        a = c.safeParse(i?.state)
      null != i &&
        a.success &&
        a.data.connectorSetup.installationKey === t.installationKey &&
        n(i, {
          replace: !0,
          state: {
            ...i.state,
            connectorSetup: {
              accountId: t.accountId,
              userId: t.userId,
              connectorId: t.connectorId,
              options: t.options,
            },
          },
        })
    }
    t.d(
      n,
      {},
      {
        q: async function ({
          scope: e,
          accountId: n,
          userId: t,
          connectorId: i,
          location: s,
          navigate: l,
          handledKey: u,
          canResumeAttempt: p,
          intl: m,
          onInstall: h,
          onSetup: g,
          continueSetupAfterInstall: f,
        }) {
          if (u.current === s.key) return
          let x = c.safeParse(s.state)
          if (
            !x.success ||
            (null != x.data.connectorSetup.addAccountAttemptId && !p?.(x.data.connectorSetup.addAccountAttemptId)) ||
            null == g ||
            null == x.data.connectorSetup.addAccountAttemptId ||
            null != x.data.connectorSetup.installationKey ||
            x.data.connectorSetup.accountId !== n ||
            x.data.connectorSetup.userId !== t ||
            (0, o.$)(x.data.connectorSetup.connectorId) !== (0, o.$)(i)
          )
            return
          let y = f ? { ...x.data.connectorSetup, installationKey: s.key } : void 0
          try {
            if (
              null != h &&
              !h(
                f
                  ? () => {
                      null != y && d({ scope: e, navigate: l, setup: y })
                    }
                  : void 0,
                y,
                x.data.connectorSetup.options,
              )
            )
              return
            ;((u.current = s.key),
              l(s, { replace: !0, state: { ...s.state, connectorSetup: y } }),
              await g?.(x.data.connectorSetup.options, x.data.connectorSetup.addAccountAttemptId))
          } catch {
            e.get(r.Id).danger((0, a.S4)(m), {
              errorAnalytics: { toastId: "pluginConnectorSetup.startPluginConnectorSetup" },
            })
          }
        },
        t: d,
      },
    )
  },
  QHGm(e, n, t) {
    var i = t("ABep"),
      a = t("QosV"),
      s = t("jHtb"),
      o = t("NeS9"),
      r = t("Jqpj")
    t.d(
      n,
      {},
      {
        I: function (e) {
          let n,
            t,
            l,
            c,
            d,
            u,
            p,
            m = (0, a.c)(18),
            { hostId: h, scheduleLabel: g, template: f, onSetUpTemplate: x } = e
          return (
            m[0] !== h || m[1] !== f.prompt
              ? ((n = (0, i.jsx)(s.J, {
                  cwd: null,
                  hostId: h,
                  pluginMentionPresentation: "text",
                  text: f.prompt,
                  variant: "compact",
                })),
                (m[0] = h),
                (m[1] = f.prompt),
                (m[2] = n))
              : (n = m[2]),
            m[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)("span", {
                  className: "flex size-8 shrink-0 items-center justify-center",
                  children: (0, i.jsx)(o.A, { className: "icon-md text-secondary" }),
                })),
                (m[3] = t))
              : (t = m[3]),
            m[4] !== f.name
              ? ((l = (0, i.jsx)("span", { className: "min-w-0 truncate", children: f.name })),
                (m[4] = f.name),
                (m[5] = l))
              : (l = m[5]),
            m[6] !== g
              ? ((c = (0, i.jsx)("span", { className: "shrink-0 text-secondary", children: g })),
                (m[6] = g),
                (m[7] = c))
              : (c = m[7]),
            m[8] !== l || m[9] !== c
              ? ((d = (0, i.jsxs)("span", { className: "flex min-w-0 items-baseline gap-2", children: [l, c] })),
                (m[8] = l),
                (m[9] = c),
                (m[10] = d))
              : (d = m[10]),
            m[11] !== x || m[12] !== f
              ? ((u = () => {
                  x(f)
                }),
                (m[11] = x),
                (m[12] = f),
                (m[13] = u))
              : (u = m[13]),
            m[14] !== n || m[15] !== d || m[16] !== u
              ? ((p = (0, i.jsx)(r.D, {
                  className: "group",
                  description: n,
                  descriptionClassName: "line-clamp-1",
                  icon: t,
                  iconContainer: !1,
                  presentation: "row",
                  title: d,
                  onClick: u,
                })),
                (m[14] = n),
                (m[15] = d),
                (m[16] = u),
                (m[17] = p))
              : (p = m[17]),
            p
          )
        },
      },
    )
  },
  X86b(e, n, t) {
    var i = t("ABep"),
      a = t("QosV"),
      s = t("zd8w"),
      o = t("oyxz"),
      r = t("mIfQ")
    function l(e) {
      return e
    }
    function c(e) {
      return e.label
    }
    function d(e) {
      return (0, i.jsx)(
        "span",
        {
          className:
            "-ms-2 flex size-4 items-center justify-center overflow-hidden rounded-sm border border-default bg-surface first:ms-0",
          children: e.icon,
        },
        e.key,
      )
    }
    t.d(
      n,
      {},
      {
        R: function (e) {
          let n,
            t,
            u,
            p = (0, a.c)(8),
            { children: m, previewItems: h } = e
          p[0] !== m ? ((n = s.Children.toArray(m)), (p[0] = m), (p[1] = n)) : (n = p[1])
          let g = n
          return (
            p[2] !== h || p[3] !== g
              ? ((t = (e) => {
                  let { hiddenItems: n, isExpanded: t, onToggle: a } = e,
                    s = h?.slice(g.length - n.length)
                  return (0, i.jsxs)(r.s, {
                    className: "gap-3",
                    isExpanded: t,
                    onClick: a,
                    children: [
                      null != s
                        ? (0, i.jsx)("span", {
                            "aria-hidden": !0,
                            className: "flex h-10 w-8 shrink-0 items-center",
                            children: s.slice(0, 3).map(d),
                          })
                        : null,
                      (0, i.jsx)(o.A, {
                        id: "plugins.detail.includes.showMore",
                        defaultMessage:
                          "{hasNames, select, true {See {itemNames}{remainingCount, plural, =0 {} other {, and # more}}} other {Show {count, number} more}}",
                        description:
                          "Button label that expands a long list of included plugin resources, optionally previewing the next item names",
                        values: {
                          count: n.length,
                          hasNames: null != s,
                          itemNames: s?.slice(0, 2).map(c).join(", "),
                          remainingCount: Math.max(n.length - 2, 0),
                        },
                      }),
                    ],
                  })
                }),
                (p[2] = h),
                (p[3] = g),
                (p[4] = t))
              : (t = p[4]),
            p[5] !== g || p[6] !== t
              ? ((u = (0, i.jsx)(r.Q, { items: g, visibleItemLimit: 5, renderExpandRow: t, children: l })),
                (p[5] = g),
                (p[6] = t),
                (p[7] = u))
              : (u = p[7]),
            u
          )
        },
      },
    )
  },
  ijQK(e, n, t) {
    var i = t("ABep"),
      a = t("QosV"),
      s = t("lSoT"),
      o = t("zTeN"),
      r = t("Wf1j"),
      l = t("oyxz"),
      c = t("FvYa"),
      d = t("ygO2"),
      u = t("OXR4"),
      p = t("Ot7V"),
      m = t("HOLv"),
      h = t("SGsN"),
      g = t("GaA7"),
      f = t("OWtl"),
      x = t("AWNZ"),
      y = t("ZEx5"),
      k = t("SJFU")
    t.d(
      n,
      {},
      {
        s: function (e) {
          let n,
            t,
            b,
            I,
            w = (0, a.c)(12),
            { plugin: v, browserExtensions: A } = e
          w[0] !== A ? ((n = void 0 === A ? [] : A), (w[0] = A), (w[1] = n)) : (n = w[1])
          let j = n,
            S = (0, o.gh)(f.u),
            C = (0, r.A)()
          if (!v.summary.installed || 0 === j.length) return null
          if (
            (w[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)(l.A, {
                  id: "plugins.detail.setup",
                  defaultMessage: "Setup",
                  description: "Section title for browser extensions that need to be set up on the plugin detail page",
                })),
                (w[2] = t))
              : (t = w[2]),
            w[3] !== j || w[4] !== C || w[5] !== S)
          ) {
            let e
            ;(w[7] !== C || w[8] !== S
              ? ((e = (e) =>
                  (0, i.jsx)(
                    x.ic,
                    {
                      icon: (0, i.jsx)(c.R, {
                        alt: C.formatMessage((0, k.b)(e.browserFamily)),
                        className: "size-10",
                        fallback: (0, i.jsx)(m.I, { className: "text-secondary", "aria-hidden": !1, asset: s.B }),
                        logoUrl: e.iconUrl,
                      }),
                      label: (0, i.jsx)(l.A, { ...(0, k.b)(e.browserFamily) }),
                      description: (0, i.jsx)(l.A, { ...(0, k.i)(e.browserFamily) }),
                      control: (0, i.jsx)(d.z, {
                        href: e.storeUrl ?? void 0,
                        color: "primary",
                        size: "medium",
                        className: "min-w-24 shrink-0 justify-center",
                        disabled: null == e.storeUrl,
                        onClick: (n) => {
                          if (null == e.storeUrl || 0 !== n.button || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey)
                            return
                          let t = g.appServices?.chromiumBrowser?.openUrl({
                            browserFamily: e.browserFamily,
                            url: e.storeUrl,
                          })
                          if (null != t) {
                            ;(n.preventDefault(),
                              t.catch(() => {
                                S.get(h.Id).danger(
                                  (0, i.jsx)(l.A, {
                                    id: "settings.computerUse.browser.openExtensionStoreError",
                                    defaultMessage: "Unable to open browser extension page",
                                    description:
                                      "Toast shown when the app fails to open a Chromium browser extension install destination",
                                  }),
                                  { errorAnalytics: { toastId: "plugins.detail.setup.openBrowserExtensionError" } },
                                )
                              }))
                            return
                          }
                          ;(0, p.PQ)({
                            event: n,
                            href: e.storeUrl,
                            initiator: "open_in_browser_bridge",
                            openTarget: "external-browser",
                          })
                        },
                        children: (0, i.jsx)(l.A, {
                          id: "plugins.detail.setup.openBrowserExtension",
                          defaultMessage: "Open",
                          description:
                            "Button label for opening a browser extension setup URL from the plugin detail page",
                        }),
                      }),
                    },
                    e.browserFamily,
                  )),
                (w[7] = C),
                (w[8] = S),
                (w[9] = e))
              : (e = w[9]),
              (b = j.map(e)),
              (w[3] = j),
              (w[4] = C),
              (w[5] = S),
              (w[6] = b))
          } else b = w[6]
          return (
            w[10] !== b
              ? ((I = (0, i.jsx)(u.J, {
                  id: "plugin-setup",
                  title: t,
                  children: (0, i.jsx)(y.t, { className: "overflow-hidden", children: b }),
                })),
                (w[10] = b),
                (w[11] = I))
              : (I = w[11]),
            I
          )
        },
      },
    )
  },
  cRci(e, n, t) {
    var i = t("ABep"),
      a = t("QosV"),
      s = t("slpy"),
      o = t("on57"),
      r = t("HJEB"),
      l = t("SqAt"),
      c = t("zd8w"),
      d = t("oyxz"),
      u = t("EOo5"),
      p = t("OAko"),
      m = t("ygO2"),
      h = t("OXR4"),
      g = t("Jqpj"),
      f = t("Reum"),
      x = t("AWNZ"),
      y = t("MQKw"),
      k = t("axh8"),
      b = t("xBcA"),
      I = t("n4fT"),
      w = t("hobO"),
      v = t("SaEY"),
      A = t("UwQs"),
      j = t("YjEp"),
      S = t("X86b")
    function C(e) {
      return { kind: "unavailable", pluginSkill: e }
    }
    function N(e) {
      return { kind: "installed", ...e }
    }
    function M(e) {
      let n = "installed" === e.kind ? e.installedSkill : e.pluginSkill
      return {
        icon: O({ className: "icon-xs text-secondary", iconSkill: _(e), semanticSkill: n }),
        key: `${e.kind}-${n.path ?? n.name}`,
        label: $(n),
      }
    }
    function _(e) {
      return (e.kind, e.pluginSkill)
    }
    function E(e) {
      let n,
        t,
        o,
        r,
        c,
        m,
        h,
        f = (0, a.c)(37),
        { hostId: k, plugin: b, skill: j, presentation: S, canPreview: C } = e,
        { accountId: N, userId: M } = (0, u.As)()
      f[0] === Symbol.for("react.memo_cache_sentinel") ? ((n = { preview: !1 }), (f[0] = n)) : (n = f[0])
      let { data: _ } = (0, p.YL)(void 0, n),
        E = null != M && _?.id === N && _?.structure === "workspace"
      f[1] !== j ? ((t = $(j)), (f[1] = j), (f[2] = t)) : (t = f[2])
      let T = t
      f[3] !== j ? ((o = (0, y.a)(j)), (f[3] = j), (f[4] = o)) : (o = f[4])
      let P = o
      f[5] !== j
        ? ((r = O({ className: "icon-md text-secondary", size: 24, iconSkill: j, semanticSkill: j })),
          (f[5] = j),
          (f[6] = r))
        : (r = f[6])
      let D = r
      f[7] !== D
        ? ((c = (0, i.jsx)("span", { className: "flex size-8 shrink-0 items-center justify-center", children: D })),
          (f[7] = D),
          (f[8] = c))
        : (c = f[8])
      let z = c
      if ((0, v.Ei)(b.summary)) {
        let e, n, t
        ;(f[9] !== E
          ? ((e = E
              ? (0, i.jsx)(d.A, {
                  id: "plugins.detail.skills.disabledByAdmin",
                  defaultMessage: "This skill can’t be viewed because the plugin is disabled by your workspace admin",
                  description:
                    "Tooltip on a disabled skill row in plugin details explaining that workspace admin restrictions prevent viewing its instructions",
                })
              : (0, i.jsx)(d.A, {
                  id: "plugins.detail.skills.pluginUnavailable",
                  defaultMessage: "This skill can’t be viewed because the plugin is unavailable",
                  description:
                    "Tooltip shown when a personal-account or signed-out visitor hovers or focuses a disabled skill on the plugin details page. Explains why the skill's instructions cannot be opened without attributing the restriction to a workspace administrator. Use a neutral explanatory tone; the tooltip can wrap and has no final period.",
                })),
            (f[9] = E),
            (f[10] = e))
          : (e = f[10]),
          f[11] !== b.summary.disabledReason || f[12] !== e
            ? ((n = (0, i.jsx)(A.z, { disabledReason: b.summary.disabledReason, children: e })),
              (f[11] = b.summary.disabledReason),
              (f[12] = e),
              (f[13] = n))
            : (n = f[13]))
        let a = n
        return (
          f[14] !== z || f[15] !== P || f[16] !== a || f[17] !== S || f[18] !== T
            ? ((t =
                "settings" === S
                  ? (0, i.jsx)(s.m, {
                      content: a,
                      children: (0, i.jsx)(x.kG, {
                        disabled: !0,
                        edgeRounding: "surface",
                        label: T,
                        description: P,
                        onClick: F,
                      }),
                    })
                  : (0, i.jsx)(g.D, {
                      contentClassName: "opacity-60",
                      disabled: !0,
                      icon: z,
                      iconContainer: !1,
                      title: T,
                      description: P,
                      descriptionClassName: "line-clamp-1",
                      presentation: "row",
                      tooltip: a,
                    })),
              (f[14] = z),
              (f[15] = P),
              (f[16] = a),
              (f[17] = S),
              (f[18] = T),
              (f[19] = t))
            : (t = f[19]),
          t
        )
      }
      f[20] !== k || f[21] !== b || f[22] !== S || f[23] !== j.name || f[24] !== j.path || f[25] !== T
        ? ((m = (e) => {
            var n, t
            let { isOpen: a } = e
            return (0, i.jsxs)(i.Fragment, {
              children: [
                "settings" !== S
                  ? (0, i.jsx)("h2", {
                      className: "flex min-h-7 items-center gap-1.5 text-lg leading-6 font-medium select-none",
                      children: (0, i.jsx)(d.A, {
                        id: "plugins.skillDetails.skill.heading",
                        defaultMessage: "Skill",
                        description:
                          "Short section heading above the instructions block in the skill preview modal opened from a plugin page. Identifies the skill's instructions separately from any supporting reference files listed below.",
                      }),
                    })
                  : null,
                (0, i.jsx)(w.FG, {
                  hostId: k,
                  isOpen: a,
                  remotePluginSkill:
                    ((n = b),
                    (t = j.name),
                    "remote" !== n.summary.source.type
                      ? null
                      : {
                          remoteMarketplaceName: n.marketplaceName,
                          remotePluginId: (0, l.SB)(n.summary),
                          skillName: t,
                        }),
                  remotePluginVersion: b.summary.version,
                  skillPath: j.path,
                  titleText: T,
                  presentation: "settings" === S ? "contents" : "preview",
                }),
              ],
            })
          }),
          (f[20] = k),
          (f[21] = b),
          (f[22] = S),
          (f[23] = j.name),
          (f[24] = j.path),
          (f[25] = T),
          (f[26] = m))
        : (m = f[26])
      let U = "settings" === S ? j.description : P,
        q = "settings" === S ? void 0 : R
      return (
        f[27] !== C ||
        f[28] !== z ||
        f[29] !== P ||
        f[30] !== S ||
        f[31] !== j.name ||
        f[32] !== m ||
        f[33] !== U ||
        f[34] !== q ||
        f[35] !== T
          ? ((h = (0, i.jsx)(I.C, {
              canPreview: C,
              cardDescription: P,
              cardIcon: z,
              cardIconContainer: !1,
              cardTitle: T,
              modalBody: m,
              modalDescription: U,
              modalFooter: q,
              modalIconShape: "rounded",
              modalTitle: T,
              modalTitleText: T,
              modalName: j.name,
              presentation: S,
            })),
            (f[27] = C),
            (f[28] = z),
            (f[29] = P),
            (f[30] = S),
            (f[31] = j.name),
            (f[32] = m),
            (f[33] = U),
            (f[34] = q),
            (f[35] = T),
            (f[36] = h))
          : (h = f[36]),
        h
      )
    }
    function R(e) {
      let { closePreview: n } = e
      return (0, i.jsx)("div", {
        className: "flex w-full justify-end",
        children: (0, i.jsx)(m.$, {
          color: "primary",
          size: "toolbar",
          onClick: n,
          children: (0, i.jsx)(d.A, { id: "common.close", defaultMessage: "Close", description: "Close button label" }),
        }),
      })
    }
    function F() {}
    function O({ className: e, iconSkill: n, semanticSkill: t, size: i }) {
      let a = (0, k.h)(null, {
        iconSmall: n.interface?.iconSmall,
        iconLarge: n.interface?.iconLarge,
        basePath: n.path,
        alt: $(t),
        fallbackName: n.name,
        fallbackDescription: (0, y.a)(n),
        smallOnly: !0,
        fallbackSize: i,
        fallbackClassName: "text-secondary rounded-2xs",
      })
      return (0, c.createElement)(a, (0, k.d8)(a, (0, o.A)(e, "rounded-2xs"), "text-secondary rounded-2xs"))
    }
    function $(e) {
      let n = e.interface?.displayName?.trim()
      if (n) return n
      let t = e.name.split(":").pop()
      return (0, r.l)(t || e.name)
    }
    t.d(
      n,
      {},
      {
        j: function (e) {
          let n,
            t,
            s = (0, a.c)(10),
            {
              hostId: o,
              hideCardActions: r,
              plugin: l,
              installedSkills: c,
              unavailableSkills: u,
              presentation: p,
              onSkillsUpdated: m,
            } = e,
            g = void 0 !== r && r,
            x = void 0 === p ? "row" : p,
            y = (0, j.Ie)(o, l.summary)
          if (
            s[0] !== y ||
            s[1] !== g ||
            s[2] !== o ||
            s[3] !== c ||
            s[4] !== m ||
            s[5] !== l ||
            s[6] !== x ||
            s[7] !== u
          ) {
            t = Symbol.for("react.early_return_sentinel")
            e: {
              let e = [...c.map(N), ...u.map(C)]
              if (0 === e.length) {
                t = null
                break e
              }
              let a = e.map((e) =>
                "installed" !== e.kind || (0, v.Ei)(l.summary)
                  ? (0, i.jsx)(
                      E,
                      { hostId: o, plugin: l, skill: e.pluginSkill, presentation: x, canPreview: y },
                      `skill-${e.pluginSkill.path ?? e.pluginSkill.name}`,
                    )
                  : (0, i.jsx)(
                      b.A,
                      {
                        cardIcon: (0, i.jsx)("span", {
                          className: "flex size-8 shrink-0 items-center justify-center",
                          children: O({
                            className: "icon-md text-secondary",
                            size: 24,
                            iconSkill: _(e),
                            semanticSkill: e.installedSkill,
                          }),
                        }),
                        cardIconContainer: !1,
                        displayName: $(e.installedSkill),
                        canPreview: y,
                        hideCardActions: g,
                        hostId: o,
                        installedStateAction: "toggle",
                        modalIconShape: "rounded",
                        onSkillsUpdated: m,
                        presentation: x,
                        scopeBadges: [],
                        showModalUninstall: !1,
                        skill: e.installedSkill,
                        toggleOnly: !0,
                      },
                      `installed-skill-${e.installedSkill.path}`,
                    ),
              )
              n =
                "settings" === x
                  ? (0, i.jsx)(f.U, { children: a })
                  : (0, i.jsx)(h.J, {
                      disableContentInlineInset: !0,
                      count: e.length,
                      title: (0, i.jsx)(d.A, {
                        id: "plugins.detail.includes.skills.title",
                        defaultMessage: "Skills",
                        description: "Title for included skills on the plugin detail page",
                      }),
                      children: (0, i.jsx)(S.R, { previewItems: e.map(M), children: a }),
                    })
            }
            ;((s[0] = y),
              (s[1] = g),
              (s[2] = o),
              (s[3] = c),
              (s[4] = m),
              (s[5] = l),
              (s[6] = x),
              (s[7] = u),
              (s[8] = n),
              (s[9] = t))
          } else ((n = s[8]), (t = s[9]))
          return t !== Symbol.for("react.early_return_sentinel") ? t : n
        },
      },
    )
  },
  Reum(e, n, t) {
    var i = t("ABep"),
      a = t("QosV"),
      s = t("oyxz"),
      o = t("BSnr"),
      r = t("ZEx5")
    t.d(
      n,
      {},
      {
        U: function (e) {
          let n,
            t,
            l = (0, a.c)(3),
            { children: c } = e
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, i.jsx)(o.X.Header, {
                  title: (0, i.jsx)(s.A, {
                    id: "browserPluginSettings.skills",
                    defaultMessage: "Skills",
                    description: "Skills included in an installed plugin",
                  }),
                })),
                (l[0] = n))
              : (n = l[0]),
            l[1] !== c
              ? ((t = (0, i.jsxs)(o.X, { children: [n, (0, i.jsx)(r.t, { children: c })] })), (l[1] = c), (l[2] = t))
              : (t = l[2]),
            t
          )
        },
      },
    )
  },
  vNmV(e, n, t) {
    let i = ["plugin", "user", "admin", "project", "sessionFlags", "unknown"],
      a = "__unknown__"
    function s(e, n, t) {
      let i = new Set(n),
        a = [
          ...i,
          ...Array.from(new Set(e))
            .filter((e) => !i.has(e))
            .sort((e, n) => e.localeCompare(n)),
        ]
      return (null == t || a.includes(t) || a.push(t), a)
    }
    function o(e) {
      return "untrusted" === e.trustStatus || "modified" === e.trustStatus
    }
    function r(e) {
      switch (e) {
        case "plugin":
          return "plugin"
        case "user":
          return "user"
        case "system":
        case "mdm":
        case "cloudRequirements":
        case "cloudManagedConfig":
        case "legacyManagedConfigFile":
        case "legacyManagedConfigMdm":
          return "admin"
        case "project":
          return "project"
        case "sessionFlags":
          return "sessionFlags"
        case "unknown":
          return "unknown"
      }
    }
    function l(e) {
      let n = e.hooks.filter((e) => "project" === r(e.source))
      return 0 === n.length ? null : { ...e, hooks: n }
    }
    function c(e, n) {
      let t = e.flatMap((e) => e.hooks.filter((e) => r(e.source) === n)),
        i = "unknown" === n ? e.filter(p) : []
      return 0 === t.length && 0 === i.length ? null : d(e, t, i)
    }
    function d(e, n, t = []) {
      let i = u(n),
        a = new Set(i.map((e) => e.key)),
        s = [...e.filter((e) => e.hooks.some((e) => a.has(e.key))), ...t]
      return {
        cwd: "",
        hooks: i,
        warnings: Array.from(new Set(s.flatMap((e) => e.warnings))),
        errors: (function (e) {
          let n = new Map()
          for (let t of e) n.set(`${t.path}:${t.message}`, t)
          return Array.from(n.values())
        })(s.flatMap((e) => e.errors)),
      }
    }
    function u(e) {
      let n = new Map()
      for (let t of e) n.has(t.key) || n.set(t.key, t)
      return Array.from(n.values())
    }
    function p(e) {
      return 0 === e.hooks.length && (e.warnings.length > 0 || e.errors.length > 0)
    }
    function m(e) {
      return "managed" === e.trustStatus || (e.enabled && "trusted" === e.trustStatus)
    }
    t.d(
      n,
      {},
      {
        Ab: function (e, n) {
          if (null == n) return []
          let t = new Set(n.hooks.map((e) => e.key))
          return u(
            e?.flatMap((e) =>
              e.hooks.filter((e) => "plugin" === e.source && e.pluginId === n.summary.id && t.has(e.key) && o(e)),
            ) ?? [],
          )
        },
        ED: function (e, n) {
          return e
            .filter((e) => e.eventName === n)
            .sort((e, n) => (e.displayOrder < n.displayOrder ? -1 : +(e.displayOrder > n.displayOrder)))
        },
        LX: function (e) {
          if (0 === e.length) return null
          let n = new Set(e.map(r))
          return 1 !== n.size ? null : (n.values().next().value ?? null)
        },
        ON: function (e) {
          return { issueCount: e.warnings.length + e.errors.length, needsReview: e.hooks.filter(o).length }
        },
        Pf: a,
        RS: function (e, n, t) {
          if (null == e || !e.summary.installed || 0 === e.hooks.length) return
          let i = s(n, t, null)
          return 0 === i.length ? void 0 : i
        },
        Y8: o,
        nh: function (e) {
          let n = []
          for (let t of i) {
            let i = (function (e, n) {
              switch (n) {
                case "project": {
                  let t = e.map(l).filter((e) => null != e)
                  if (0 === t.length) return null
                  return { id: n, projectEntries: t }
                }
                case "plugin": {
                  let t = c(e, n),
                    i = (function (e) {
                      let n = new Map()
                      for (let t of e)
                        for (let e of t.hooks) {
                          if ("plugin" !== r(e.source)) continue
                          let t = n.get(e.pluginId)
                          null == t ? n.set(e.pluginId, [e]) : t.push(e)
                        }
                      return Array.from(n.entries())
                        .sort(([e], [n]) => (null == e ? 1 : null == n ? -1 : e.localeCompare(n)))
                        .map(([n, t]) => ({ pluginId: n, entry: d(e, t) }))
                    })(e)
                  if (null == t || 0 === i.length) return null
                  return { id: n, entry: t, pluginEntries: i }
                }
                case "user":
                case "admin":
                case "sessionFlags":
                case "unknown": {
                  let t = c(e, n)
                  if (null == t) return null
                  return { id: n, entry: t }
                }
              }
            })(e, t)
            null != i && n.push(i)
          }
          return n
        },
        ni: s,
        p4: function (e, n) {
          if (null == n) return null
          let t = e.find((e) => e.id === n.source)
          return null == t
            ? null
            : "project" === n.source
              ? "project" !== t.id
                ? null
                : (t.projectEntries.find((e) => e.cwd === n.projectRoot) ?? null)
              : "plugin" === n.source
                ? "plugin" !== t.id
                  ? null
                  : void 0 === n.pluginId
                    ? t.entry
                    : (t.pluginEntries.find((e) => e.pluginId === n.pluginId)?.entry ?? null)
                : t.id !== n.source
                  ? null
                  : t.entry
        },
        rb: function (e) {
          return Array.from(new Set(e.map((e) => e.eventName)), (n) => {
            let t = e.filter((e) => e.eventName === n)
            return { eventName: n, active: t.filter(m).length, installed: t.length, needsReview: t.filter(o).length }
          })
        },
        vf: r,
        zC: function ({ pluginId: e, source: n, projectRoot: t, projectRoots: i }) {
          let s = (function (e) {
            switch (e) {
              case "plugin":
              case "user":
              case "admin":
              case "project":
              case "sessionFlags":
              case "unknown":
                return e
              default:
                return null
            }
          })(n)
          return ("project" === s || (null == s && null == n)) && null != t && i?.includes(t) === !0
            ? { source: "project", projectRoot: t }
            : null == s || "project" === s
              ? null
              : "plugin" === s
                ? null == e
                  ? { source: "plugin" }
                  : e === a
                    ? { source: "plugin", pluginId: null }
                    : { source: "plugin", pluginId: e }
                : { source: s }
        },
      },
    )
  },
  AN2V(e, n, t) {
    var i = t("vNmV")
    let a = "hooks-settings"
    function s({ hostId: e, pluginId: n, projectRoot: t, source: o }) {
      let r = new URLSearchParams()
      ;(null != e && r.set("hostId", e),
        null != o && r.set("source", o),
        null != o && null != t && r.set("projectRoot", t),
        "plugin" === o && void 0 !== n && r.set("pluginId", n ?? i.Pf))
      let l = r.toString()
      return "" === l ? a : `${a}?${l}`
    }
    t.d(
      n,
      {},
      {
        NZ: function ({ hostId: e, pluginId: n, projectRoot: t, source: i }) {
          return `/settings/${s({ hostId: e, pluginId: n, projectRoot: t, source: i })}`
        },
        Rf: s,
        mW: function (e, n, t) {
          if ((e.delete("hostId"), e.delete("pluginId"), e.delete("projectRoot"), e.delete("source"), null != t)) {
            if ((e.set("hostId", n), e.set("source", t.source), "project" === t.source))
              return void e.set("projectRoot", t.projectRoot)
            "plugin" === t.source && void 0 !== t.pluginId && e.set("pluginId", t.pluginId ?? i.Pf)
          }
        },
      },
    )
  },
  I7Ou(e, n, t) {
    var i = t("ABep"),
      a = t("QosV"),
      s = t("RNul"),
      o = t("AWNZ")
    t.d(
      n,
      {},
      {
        u: function (e) {
          let n,
            t,
            r = (0, a.c)(3),
            { children: l } = e
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, i.jsx)(s.y, { className: "icon-xs shrink-0 text-secondary" })), (r[0] = n))
              : (n = r[0]),
            r[1] !== l
              ? ((t = (0, i.jsx)("div", {
                  role: "status",
                  children: (0, i.jsx)(o.ic, {
                    label: (0, i.jsxs)("span", {
                      className: "flex items-center gap-2 font-normal text-secondary",
                      children: [n, (0, i.jsx)("span", { className: "text-balance", children: l })],
                    }),
                    control: null,
                  }),
                })),
                (r[1] = l),
                (r[2] = t))
              : (t = r[2]),
            t
          )
        },
      },
    )
  },
  lSoT(e, n, t) {
    let i = (0, t("nkTT").a)({
      name: "circle-grid-2x2-connect-light-28",
      canvas: {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        frame: { x: 0, y: 0, width: 28, height: 28 },
        inkBounds: { x: 3.203613, y: 3.250488, width: 21.592773, height: 21.499023 },
        visualBounds: { x: 3.203613, y: 3.250488, width: 21.592773, height: 21.499023 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.203613, y: 3.250488, width: 21.592773, height: 21.499023 },
        center: { x: 14, y: 14 },
        insets: { top: 3.250488, right: 3.203614, bottom: 3.250489, left: 3.203613 },
        anchors: { frame: { x: 14, y: 14 }, ink: { x: 14, y: 14 }, foreground: { x: 14, y: 14 } },
      },
      capabilities: ["icon"],
      body: '<path d="M20.1714 3.25049C22.7257 3.25049 24.7963 5.32121 24.7964 7.87549C24.7964 10.4298 22.7257 12.5005 20.1714 12.5005C19.1818 12.5005 18.2653 12.189 17.5132 11.6597L11.6509 17.522C12.1566 18.2635 12.4536 19.1593 12.4536 20.1245C12.4533 22.6786 10.3828 24.7495 7.82861 24.7495C5.2745 24.7495 3.20388 22.6786 3.20361 20.1245C3.20366 17.5703 5.27436 15.4996 7.82861 15.4995C8.81781 15.4995 9.73388 15.8104 10.4858 16.3394L16.3481 10.4771C15.8427 9.73572 15.5464 8.84039 15.5464 7.87549C15.5464 5.32123 17.6171 3.25053 20.1714 3.25049ZM7.82861 17.1597C6.19115 17.1597 4.86381 18.487 4.86377 20.1245C4.86403 21.7618 6.19129 23.0893 7.82861 23.0894C9.46597 23.0894 10.7932 21.7618 10.7935 20.1245C10.7934 18.487 9.46611 17.1597 7.82861 17.1597ZM20.1714 4.91064C18.5339 4.91069 17.2066 6.23803 17.2065 7.87549C17.2065 9.51299 18.5339 10.8403 20.1714 10.8403C21.8089 10.8403 23.1362 9.51301 23.1362 7.87549C23.1362 6.238 21.8089 4.91064 20.1714 4.91064Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M20.1714 15.4995C22.7257 15.4995 24.7963 17.5702 24.7964 20.1245C24.7961 22.6786 22.7255 24.7495 20.1714 24.7495C17.6173 24.7495 15.5467 22.6786 15.5464 20.1245C15.5464 17.5703 17.6171 15.4996 20.1714 15.4995ZM20.1714 17.1597C18.5339 17.1597 17.2066 18.487 17.2065 20.1245C17.2068 21.7618 18.5341 23.0893 20.1714 23.0894C21.8087 23.0894 23.136 21.7618 23.1362 20.1245C23.1362 18.487 21.8089 17.1597 20.1714 17.1597Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M7.82861 3.25049C10.3829 3.25049 12.4536 5.32121 12.4536 7.87549C12.4536 10.4298 10.3829 12.5005 7.82861 12.5005C5.27433 12.5004 3.20361 10.4298 3.20361 7.87549C3.20366 5.32123 5.27436 3.25053 7.82861 3.25049ZM7.82861 4.91064C6.19115 4.91069 4.86381 6.23803 4.86377 7.87549C4.86377 9.51299 6.19112 10.8403 7.82861 10.8403C9.46614 10.8403 10.7935 9.51301 10.7935 7.87549C10.7934 6.238 9.46611 4.91064 7.82861 4.91064Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    t.d(n, {}, { B: i })
  },
}
//# sourceMappingURL=474358.951967df78.js.map
