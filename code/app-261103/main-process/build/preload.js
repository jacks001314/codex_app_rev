;(() => {
  "use strict"
  var e, t
  let r,
    o = require("electron")
  function n(e) {
    return (
      null != e &&
      "object" == typeof e &&
      "type" in e &&
      ("array-start" === e.type ||
        "object-start" === e.type ||
        "container-end" === e.type ||
        "string-end" === e.type ||
        ("string-start" === e.type
          ? "target" in e && ("key" === e.target || "value" === e.target)
          : "key" === e.type || "string-chunk" === e.type
            ? "value" in e && "string" == typeof e.value
            : "value" === e.type &&
              (!("value" in e) ||
                null == e.value ||
                "boolean" == typeof e.value ||
                "number" == typeof e.value ||
                "string" == typeof e.value)))
    )
  }
  ;(((t = e || (e = {}))[(t.Classic = 1)] = "Classic"),
    (t[(t.Protocol = 2)] = "Protocol"),
    (t[(t.Both = 3)] = "Both"),
    !(function (e = "sentry-ipc") {
      var t
      let r = {
        createUrl: (e) => `${t}://${e}/sentry_key`,
        urlMatches: function (e, t) {
          return e.startsWith(this.createUrl(t))
        },
        createKey: (e) => `${t}.${e}`,
        namespace: (t = e),
      }
      if (((window.__SENTRY_IPC__ = window.__SENTRY_IPC__ || {}), window.__SENTRY_IPC__[r.namespace]))
        console.log("Sentry Electron preload has already been run")
      else if (
        ((window.__SENTRY_IPC__[r.namespace] = {
          sendRendererStart: () => o.ipcRenderer.send(r.createKey("start")),
          sendScope: (e) => o.ipcRenderer.send(r.createKey("scope"), e),
          sendEnvelope: (e) => o.ipcRenderer.send(r.createKey("envelope"), e),
          sendStatus: (e) => o.ipcRenderer.send(r.createKey("status"), e),
          sendStructuredLog: (e) => o.ipcRenderer.send(r.createKey("structured-log"), e),
          sendMetric: (e) => o.ipcRenderer.send(r.createKey("metric"), e),
        }),
        o.contextBridge)
      )
        try {
          o.contextBridge.exposeInMainWorld("__SENTRY_IPC__", window.__SENTRY_IPC__)
        } catch (e) {}
    })())
  let d = "codex_desktop:git-worker-port"
  function i(e) {
    return `codex_desktop:worker:${e}:for-view`
  }
  let s = { darwin: "Mac OS", linux: "X11; Linux", win32: "Windows NT 10.0" },
    a = performance.timeOrigin,
    c = "electron",
    p = o.ipcRenderer.sendSync("codex_desktop:get-sentry-init-options"),
    l = o.ipcRenderer.sendSync("codex_desktop:get-build-flavor"),
    u = o.ipcRenderer.sendSync("codex_desktop:get-system-theme-variant"),
    g = new URL(window.location.href)
  if ("1" === g.searchParams.get("desktopSwitch")) {
    let e = o.ipcRenderer.sendSync("codex_desktop:take-initial-switch-status")
    ;(g.searchParams.delete("desktopSwitch"),
      window.history.replaceState(window.history.state, "", g),
      "string" == typeof e &&
        (function (e, t) {
          let r = () => {
            let r = e.querySelector("#root > .startup-loader"),
              o = r?.querySelector(".startup-loader__status")
            return (
              null != r &&
              null != o &&
              ((e.documentElement.dataset.desktopSwitchStatus = t),
              (o.textContent = t),
              (o.hidden = !1),
              r.querySelector(".startup-loader__logo")?.setAttribute("aria-hidden", "true"),
              r.removeAttribute("aria-hidden"),
              r.classList.add("startup-loader--switching"),
              !0)
            )
          }
          if (r()) return
          let o = new MutationObserver(() => {
            r() && o.disconnect()
          })
          ;(o.observe(e, { childList: !0, subtree: !0 }),
            e.addEventListener("DOMContentLoaded", () => o.disconnect(), { once: !0 }))
        })(document, e))
  }
  let w = document.documentElement
  if (null != w) w.dataset.theme = u
  else {
    let e = new MutationObserver(() => {
      let t = document.documentElement
      null != t && ((t.dataset.theme = u), e.disconnect())
    })
    e.observe(document, { childList: !0 })
  }
  let y = new Set()
  o.ipcRenderer.on("codex_desktop:system-theme-variant-updated", (e, t) => {
    ;((u = t),
      y.forEach((e) => {
        e()
      }))
  })
  let h = new Map(),
    m = new Map()
  ;(o.ipcRenderer.on("codex_desktop:message-for-view", (e, t) => {
    if (
      !(
        null != t &&
        "object" == typeof t &&
        "marker" in t &&
        "codex-host-chunked-message-v1" === t.marker &&
        "transferId" in t &&
        "string" == typeof t.transferId &&
        "sequence" in t &&
        "number" == typeof t.sequence &&
        Number.isSafeInteger(t.sequence) &&
        "kind" in t &&
        ("chunk" === t.kind
          ? "tokens" in t && Array.isArray(t.tokens) && t.tokens.every(n)
          : "start" === t.kind || "end" === t.kind)
      ) &&
      "remote-hosted-pip-content-layout-state-changed" === t.type
    )
      for (let [e, r] of f)
        r.threadID !== t.state.activeThreadID ||
          t.state.orderedPresentationIDs.includes(e) ||
          (r.decoder.close(), f.delete(e))
    window.dispatchEvent(new MessageEvent("message", { data: t }))
  }),
    o.ipcRenderer.on("codex_desktop:mcp-app-sandbox-host-message", (e, t) => {
      let r = window.location.origin
      "null" !== r && window.postMessage(t, r, e.ports)
    }))
  let f = new Map()
  ;(o.ipcRenderer.on("codex_desktop:remote-hosted-pip-video-frame", (e, t) => {
    if ("stopped" in t) {
      for (let [e, r] of f) r.threadID === t.threadID && (r.decoder.close(), f.delete(e))
      return
    }
    let r = t.presentationID,
      o = f.get(r)
    if (null == o) {
      if (!t.isKeyFrame || null == t.decoderConfiguration) return
      let e = new VideoDecoder({
        output: (e) => {
          let o = window.location.origin
          "null" === o
            ? e.close()
            : window.postMessage(
                { frame: e, presentationID: r, threadID: t.threadID, type: "remote-hosted-pip-video-frame" },
                o,
                [e],
              )
        },
        error: () => {
          let o = f.get(r)
          if (o?.decoder === e) {
            f.delete(r)
            let e = window.location.origin
            "null" !== e &&
              window.postMessage({ presentationID: r, threadID: t.threadID, type: "remote-hosted-pip-video-error" }, e)
          }
        },
      })
      ;(e.configure({
        codec: t.codec,
        description: t.decoderConfiguration,
        hardwareAcceleration: "prefer-hardware",
        optimizeForLatency: !0,
      }),
        (o = { configuration: t.decoderConfiguration, decoder: e, threadID: t.threadID }),
        f.set(r, o))
    } else
      t.isKeyFrame &&
        null != t.decoderConfiguration &&
        (o.configuration.length !== t.decoderConfiguration.length ||
          !o.configuration.every((e, r) => e === t.decoderConfiguration?.[r])) &&
        (o.decoder.reset(),
        o.decoder.configure({
          codec: t.codec,
          description: t.decoderConfiguration,
          hardwareAcceleration: "prefer-hardware",
          optimizeForLatency: !0,
        }),
        (o.configuration = t.decoderConfiguration))
    "configured" === o.decoder.state &&
      o.decoder.decode(
        new EncodedVideoChunk({ data: t.videoData, timestamp: t.timestamp, type: t.isKeyFrame ? "key" : "delta" }),
      )
  }),
    o.contextBridge.exposeInMainWorld("codexWindowType", c),
    o.contextBridge.exposeInMainWorld("electronBridge", {
      windowType: c,
      acknowledgeChunkedMessage: (e, t) => {
        o.ipcRenderer.send("codex_desktop:chunked-message-ack", e, t)
      },
      getPreloadStartedAtMs: () => a,
      sendMessageFromView: async (e) => {
        await o.ipcRenderer.invoke("codex_desktop:message-from-view", e)
      },
      getPathForFile: (e) => {
        let t = o.webUtils.getPathForFile(e)
        return t || null
      },
      startFileDrag: (e) => !0 === o.ipcRenderer.sendSync("codex_desktop:start-file-drag", e),
      startLinkDrag: (e) => {
        o.ipcRenderer.send("codex_desktop:start-link-drag", e)
      },
      connectGitWorker: (e) => o.ipcRenderer.invoke("codex_desktop:connect-git-worker", e),
      sendWorkerMessageFromView: async (e, t) => {
        await o.ipcRenderer.invoke(`codex_desktop:worker:${e}:from-view`, t)
      },
      subscribeToWorkerMessages: (e, t) => {
        let r = h.get(e)
        r || ((r = new Set()), h.set(e, r))
        let n = m.get(e)
        return (
          n ||
            ((n = (t, r) => {
              let o = h.get(e)
              o &&
                o.forEach((e) => {
                  e(r)
                })
            }),
            m.set(e, n),
            o.ipcRenderer.on(i(e), n)),
          r.add(t),
          () => {
            let r = h.get(e)
            if (!r || (r.delete(t), r.size > 0)) return
            h.delete(e)
            let n = m.get(e)
            ;(n && o.ipcRenderer.removeListener(i(e), n), m.delete(e))
          }
        )
      },
      showContextMenu: async (e, t) => o.ipcRenderer.invoke("codex_desktop:show-context-menu", e, t),
      getFastModeRolloutMetrics: async (e) => o.ipcRenderer.invoke("codex_desktop:get-fast-mode-rollout-metrics", e),
      getInitialSidebarBootstrap: () => (
        void 0 === r && (r = o.ipcRenderer.sendSync("codex_desktop:get-initial-sidebar-bootstrap")),
        r
      ),
      getSystemThemeVariant: () => u,
      subscribeToSystemThemeVariant: (e) => (
        y.add(e),
        () => {
          y.delete(e)
        }
      ),
      triggerSentryTestError: async () => {
        await o.ipcRenderer.invoke("codex_desktop:trigger-sentry-test")
      },
      getSentryInitOptions: () => p,
      getDesktopUserAgent: () =>
        (function ({ appVersion: e, platform: t = process.platform, arch: r = process.arch }) {
          let o = s[t] ?? t
          return `Codex Desktop/${e} (${o}; ${r})`
        })({ appVersion: p.appVersion }),
      getAppSessionId: () => p.codexAppSessionId,
      getBuildFlavor: () => l,
      isDeviceCheckSupported: () => "darwin" === process.platform && "arm64" === process.arch,
      isIntelMacBuild: () => "darwin" === process.platform && "x64" === process.arch,
    }),
    "u" > typeof window &&
      window.addEventListener("message", (e) => {
        if (e.source !== window || e.data?.type !== "connect-app-host") return
        let { port: t } = e.data
        o.ipcRenderer.postMessage("codex_desktop:connect-app-host", void 0, [t])
      }),
    o.ipcRenderer.on(d, (e, t) => {
      window.postMessage({ type: d, requestId: t.requestId, closed: t.closed }, window.location.origin, e.ports)
    }),
    (module.exports = {}))
})()
//# sourceMappingURL=preload.js.map
