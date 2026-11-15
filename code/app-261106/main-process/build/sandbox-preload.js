;(() => {
  "use strict"
  let e = require("electron"),
    t = [
      "navigate",
      "notifyMcpAppsHostContext",
      "notifyMcpAppsToolCancelled",
      "notifyMcpAppsToolInput",
      "notifyMcpAppsToolResult",
      "requestMcpAppsResourceTeardown",
      "runWidgetCode",
      "setAdditionalGlobals",
      "setSafeArea",
      "setTheme",
      "setWidgetData",
      "setWidgetView",
    ],
    n = [
      ...t,
      "applyAutofillCandidate",
      "getCurrentPath",
      "notifyMcpAppsMcpNotification",
      "prepareEnvironment",
      "runUserCode",
      "screenshot",
      "stop",
    ]
  function o(e) {
    if (null == e) return null
    try {
      return new URL(e)
    } catch {
      return null
    }
  }
  let r = !1
  function l(e) {
    return null != e && "object" == typeof e && "function" == typeof e.postMessage && "function" == typeof e.start
  }
  ;(window.addEventListener("message", (i) => {
    let a = null != i.data && "object" == typeof i.data ? i.data.type : void 0
    if (
      i.source !== window ||
      (function (e, { requireSkybridge: t = !1, allowStaging: n } = {}) {
        let r = (function (e, { allowStaging: t } = {}) {
          let n = o(e)
          return null == n ||
            ("https:" !== n.protocol && "codex-sandbox:" !== n.protocol) ||
            "" !== n.port ||
            "" !== n.username ||
            "" !== n.password ||
            !(function (e, { allowStaging: t = !1 } = {}) {
              let n = ["web-sandbox.oaiusercontent.com"]
              return (
                t && n.push("staging-web-sandbox.oaiusercontent.com"),
                n.some((t) => e === t || e.endsWith(`.${t}`))
              )
            })(n.hostname, { allowStaging: t })
            ? null
            : n
        })(e, { allowStaging: n })
        return null == r || (t && ("/" !== r.pathname || "skybridge" !== r.searchParams.get("app")))
          ? null
          : `${r.protocol}//${r.host}`
      })(window.location.href, { requireSkybridge: !0 }) !== window.location.origin ||
      null == i.data ||
      "object" != typeof i.data ||
      "init" !== a
    )
      return
    let s = i.data.ports,
      u = i.data.replyPort
    if (null == s || "object" != typeof s || !l(u) || r) return
    let p = (function (e) {
      let t = o(e)
      if (null == t || 0 === t.hash.length) return null
      let n = new URLSearchParams(t.hash.slice(1)).get("initId")
      return null != n && /^[A-Za-z0-9_-]{1,128}$/.test(n) ? n : null
    })(window.location.href)
    if (null == p) return
    let c = n.filter((e) => l(Reflect.get(s, e)))
    if (t.filter((e) => !l(Reflect.get(s, e))).length > 0) return
    let d = [...c],
      f = d.map((e) =>
        (function (e, t) {
          let n = Reflect.get(e, t)
          if (!l(n)) throw Error(`Missing required MCP sandbox frame port: ${t}`)
          return n
        })(s, e),
      )
    ;((r = !0),
      e.ipcRenderer.postMessage(
        "codex_desktop:mcp-app-sandbox-guest-message",
        { origin: window.location.origin, initId: p, portNames: d, type: "init" },
        [...f, u],
      ))
  }),
    (module.exports = {}))
})()
//# sourceMappingURL=sandbox-preload.js.map
