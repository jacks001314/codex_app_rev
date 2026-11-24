;(() => {
  "use strict"
  var e, t
  let r = require("electron")
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
  function o(e) {
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
      let n = {
        createUrl: (e) => `${t}://${e}/sentry_key`,
        urlMatches: function (e, t) {
          return e.startsWith(this.createUrl(t))
        },
        createKey: (e) => `${t}.${e}`,
        namespace: (t = e),
      }
      if (((window.__SENTRY_IPC__ = window.__SENTRY_IPC__ || {}), window.__SENTRY_IPC__[n.namespace]))
        console.log("Sentry Electron preload has already been run")
      else if (
        ((window.__SENTRY_IPC__[n.namespace] = {
          sendRendererStart: () => r.ipcRenderer.send(n.createKey("start")),
          sendScope: (e) => r.ipcRenderer.send(n.createKey("scope"), e),
          sendEnvelope: (e) => r.ipcRenderer.send(n.createKey("envelope"), e),
          sendStatus: (e) => r.ipcRenderer.send(n.createKey("status"), e),
          sendStructuredLog: (e) => r.ipcRenderer.send(n.createKey("structured-log"), e),
          sendMetric: (e) => r.ipcRenderer.send(n.createKey("metric"), e),
        }),
        r.contextBridge)
      )
        try {
          r.contextBridge.exposeInMainWorld("__SENTRY_IPC__", window.__SENTRY_IPC__)
        } catch (e) {}
    })())
  let s = Symbol("unset")
  class i {
    transfers = new Map()
    receive(e) {
      if (!(
        null != e &&
        "object" == typeof e &&
        "marker" in e &&
        "codex-host-chunked-message-v1" === e.marker &&
        "transferId" in e &&
        "string" == typeof e.transferId &&
        "sequence" in e &&
        "number" == typeof e.sequence &&
        Number.isSafeInteger(e.sequence) &&
        "kind" in e &&
        ("chunk" === e.kind
          ? "tokens" in e && Array.isArray(e.tokens) && e.tokens.every(o)
          : "start" === e.kind || "end" === e.kind)
      ))
        return { type: "passthrough", message: e }
      if ("start" === e.kind) {
        this.transfers.clear()
        let t = { assembler: new a(), nextSequence: e.sequence + 1 }
        return (this.transfers.set(e.transferId, t), { type: "pending", acknowledgement: d(e) })
      }
      let t = this.transfers.get(e.transferId)
      return null == t || e.sequence !== t.nextSequence
        ? (this.transfers.delete(e.transferId), { type: "pending", acknowledgement: null })
        : ((t.nextSequence += 1), "chunk" === e.kind)
          ? (t.assembler.consume(e.tokens), { type: "pending", acknowledgement: d(e) })
          : (this.transfers.delete(e.transferId),
            { type: "complete", message: t.assembler.finish(), acknowledgement: d(e) })
    }
  }
  class a {
    stack = []
    root = s
    stringChunks = null
    stringTarget = null
    consume(e) {
      for (let t of e)
        switch (t.type) {
          case "array-start": {
            let e = []
            ;(this.saveValue(e), this.stack.push({ type: "array", value: e }))
            break
          }
          case "object-start": {
            let e = {}
            ;(this.saveValue(e), this.stack.push({ type: "object", value: e, key: null }))
            break
          }
          case "container-end":
            if (null == this.stack.pop()) throw Error("Chunked message contained an unmatched container end")
            break
          case "key":
            this.setKey(t.value)
            break
          case "value":
            this.saveValue(t.value)
            break
          case "string-start":
            if (null != this.stringChunks) throw Error("Chunked message contained nested string chunks")
            ;((this.stringChunks = []), (this.stringTarget = t.target))
            break
          case "string-chunk":
            if (null == this.stringChunks) throw Error("Chunked message string chunk had no start token")
            this.stringChunks.push(t.value)
            break
          case "string-end": {
            if (null == this.stringChunks || null == this.stringTarget)
              throw Error("Chunked message string end had no start token")
            let e = this.stringChunks.join(""),
              t = this.stringTarget
            ;((this.stringChunks = null), (this.stringTarget = null), "key" === t ? this.setKey(e) : this.saveValue(e))
          }
        }
    }
    finish() {
      if (this.root === s || this.stack.length > 0 || null != this.stringChunks)
        throw Error("Chunked message ended before its value was complete")
      return this.root
    }
    setKey(e) {
      let t = this.stack.at(-1)
      if (t?.type !== "object" || null != t.key) throw Error("Chunked message key was outside an object")
      t.key = e
    }
    saveValue(e) {
      let t = this.stack.at(-1)
      if (null == t) {
        if (this.root !== s) throw Error("Chunked message contained multiple root values")
        this.root = e
        return
      }
      if ("array" === t.type) return void t.value.push(e)
      if (null == t.key) throw Error("Chunked message object value had no key")
      ;(Object.defineProperty(t.value, t.key, { configurable: !0, enumerable: !0, value: e, writable: !0 }),
        (t.key = null))
    }
  }
  function d(e) {
    return { transferId: e.transferId, sequence: e.sequence }
  }
  let c = "codex-shared-texture-create",
    l = "codex_desktop:connect-app-server-manager",
    p = "codex_desktop:git-worker-port"
  function u(e) {
    return `codex_desktop:worker:${e}:for-view`
  }
  let g = { darwin: "Mac OS", linux: "X11; Linux", win32: "Windows NT 10.0" },
    h = performance.timeOrigin,
    f = "electron",
    k = "codex_desktop:message-from-view",
    { buildFlavor: y, sentryInitOptions: w } = r.ipcRenderer.sendSync("codex_desktop:get-preload-bootstrap-info")
  "darwin" === process.platform &&
    "prod" === y &&
    window.addEventListener("online", (e) => {
      e.isTrusted && r.ipcRenderer.send("codex_desktop:network-online")
    })
  let m = r.ipcRenderer.sendSync("codex_desktop:get-initial-window-appearance"),
    v = m.systemThemeVariant,
    x = new URL(window.location.href)
  if ("1" === x.searchParams.get("desktopSwitch")) {
    let e = r.ipcRenderer.sendSync("codex_desktop:take-initial-switch-status")
    ;(x.searchParams.delete("desktopSwitch"),
      window.history.replaceState(window.history.state, "", x),
      "string" == typeof e &&
        (function (e, t) {
          let r = () => {
            let r = e.querySelector("#root > .startup-loader"),
              n = r?.querySelector(".startup-loader__status"),
              o = r?.querySelector("svg")
            if (null == r || null == n || null == o) return !1
            ;((e.documentElement.dataset.desktopSwitchStatus = t), (n.textContent = t), (n.hidden = !1))
            let s = e.createElement("style")
            return (
              (s.textContent =
                "/* Paint the same surface before and after the workspace renderer is replaced. */\r\n.desktop-switch-loader {\r\n  position: fixed;\r\n  inset: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  color-scheme: light dark;\r\n  background: light-dark(#f9f9f9, #000);\r\n  color: color-mix(in srgb, CanvasText 65%, transparent);\r\n  font: 14px/20px system-ui;\r\n  -webkit-app-region: drag;\r\n}\r\n\r\n.desktop-switch-loader > svg {\r\n  width: 56px;\r\n  height: 56px;\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n  .desktop-switch-loader > svg:only-child {\r\n    animation: desktop-refresh-pulse 2.2s ease-in-out infinite;\r\n  }\r\n}\r\n\r\n@keyframes desktop-refresh-pulse {\r\n  0%,\r\n  100% {\r\n    opacity: 0.45;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n}\r\n"),
              o.removeAttribute("class"),
              o.setAttribute("aria-hidden", "true"),
              r.removeAttribute("aria-hidden"),
              r.classList.add("desktop-switch-loader"),
              r.replaceChildren(s, o, n),
              !0
            )
          }
          if (r()) return
          let n = new MutationObserver(() => {
            r() && n.disconnect()
          })
          ;(n.observe(e, { childList: !0, subtree: !0 }),
            e.addEventListener("DOMContentLoaded", () => n.disconnect(), { once: !0 }))
        })(document, e))
  }
  function b(e) {
    ;((e.dataset.codexWindowType = f),
      (e.dataset.theme = v),
      (e.dataset.codexOs = process.platform),
      (e.dataset.startupReducedMotion = m.reducedMotionPreference))
  }
  let _ = document.documentElement
  if (null != _) b(_)
  else {
    let e = new MutationObserver(() => {
      let t = document.documentElement
      null != t && (b(t), e.disconnect())
    })
    e.observe(document, { childList: !0 })
  }
  let S = new Set()
  ;(r.ipcRenderer.on("codex_desktop:startup-progress", (e, t) => {
    let r = document.querySelector(".startup-loader:not(.desktop-switch-loader) > .startup-loader__status")
    null != r && "string" == typeof t && ((r.textContent = t), (r.hidden = 0 === t.length))
  }),
    r.ipcRenderer.on("codex_desktop:system-theme-variant-updated", (e, t) => {
      ;((v = t),
        S.forEach((e) => {
          e()
        }))
    }))
  let R = new Map(),
    C = new Map(),
    I = r.ipcRenderer,
    M = {
      windowType: f,
      usesStagingWidgetSandbox: process.argv.includes("--codex-staging-widget-sandbox"),
      acknowledgeChunkedMessage: (e, t) => {
        r.ipcRenderer.send("codex_desktop:chunked-message-ack", e, t)
      },
      getPreloadStartedAtMs: () => h,
      sendMessageFromView:
        I.createAcknowledgedSender?.(k) ??
        (async (e) => {
          await r.ipcRenderer.invoke(k, e)
        }),
      getPathForFile: (e) => {
        let t = r.webUtils.getPathForFile(e)
        return t || null
      },
      ...("darwin" === process.platform && {
        readDraggedImage: (e) => {
          let t = r.ipcRenderer.sendSync("codex_desktop:read-dragged-image", e)
          return "object" == typeof t &&
            null != t &&
            "type" in t &&
            "string" == typeof t.type &&
            "bytes" in t &&
            t.bytes instanceof Uint8Array &&
            t.bytes.buffer instanceof ArrayBuffer
            ? t
            : null
        },
      }),
      startFileDrag: (e) => !0 === r.ipcRenderer.sendSync("codex_desktop:start-file-drag", e),
      startLinkDrag: (e) => {
        r.ipcRenderer.send("codex_desktop:start-link-drag", e)
      },
      connectGitWorker: (e) => r.ipcRenderer.invoke("codex_desktop:connect-git-worker", e),
      sendWorkerMessageFromView: async (e, t) => {
        await r.ipcRenderer.invoke(`codex_desktop:worker:${e}:from-view`, t)
      },
      subscribeToWorkerMessages: (e, t) => {
        let n = R.get(e)
        n || ((n = new Set()), R.set(e, n))
        let o = C.get(e)
        return (
          o ||
            ((o = (t, r) => {
              let n = R.get(e)
              n &&
                n.forEach((e) => {
                  e(r)
                })
            }),
            C.set(e, o),
            r.ipcRenderer.on(u(e), o)),
          n.add(t),
          () => {
            let n = R.get(e)
            if (!n || (n.delete(t), n.size > 0)) return
            R.delete(e)
            let o = C.get(e)
            ;(o && r.ipcRenderer.removeListener(u(e), o), C.delete(e))
          }
        )
      },
      showContextMenu: async (e, t) => r.ipcRenderer.invoke("codex_desktop:show-context-menu", e, t),
      getFastModeRolloutMetrics: async (e) => r.ipcRenderer.invoke("codex_desktop:get-fast-mode-rollout-metrics", e),
      getInitialSidebarBootstrap: () => r.ipcRenderer.sendSync("codex_desktop:get-initial-sidebar-bootstrap"),
      finishStartupScreen: () => r.ipcRenderer.send("startup-screen-dismissed"),
      initialReducedMotionPreference: m.reducedMotionPreference,
      initialOpaqueWindowSurfaceEnabled: m.opaqueWindowSurfaceEnabled,
      getSystemThemeVariant: () => v,
      subscribeToSystemThemeVariant: (e) => (
        S.add(e),
        () => {
          S.delete(e)
        }
      ),
      triggerSentryTestError: async () => {
        await r.ipcRenderer.invoke("codex_desktop:trigger-sentry-test")
      },
      getSentryInitOptions: () => w,
      getDesktopUserAgent: () =>
        (function ({ appVersion: e, platform: t = process.platform, arch: r = process.arch }) {
          let n = g[t] ?? t
          return `Codex Desktop/${e} (${n}; ${r})`
        })({ appVersion: w.appVersion }),
      getAppSessionId: () => w.codexAppSessionId,
      getBuildFlavor: () => y,
      isDeviceCheckSupported: () => "darwin" === process.platform && "arm64" === process.arch,
      isIntelMacBuild: () => "darwin" === process.platform && "x64" === process.arch,
    }
  function E(e) {
    window.dispatchEvent(new MessageEvent("message", { data: e, origin: window.location.origin, source: window }))
  }
  ;(r.ipcRenderer.on("codex_desktop:message-for-view", (e, t) => {
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
      for (let [e, r] of T)
        r.threadID !== t.state.activeThreadID ||
          t.state.orderedPresentationIDs.includes(e) ||
          (r.decoder.close(), T.delete(e))
    E(t)
  }),
    r.ipcRenderer.on("codex_desktop:app-server-window-port", ({ ports: [e] }) => {
      if (window.top !== window || null == e) return void e?.close()
      let t = new i()
      e.onmessage = ({ data: r }) => {
        let n = t.receive(r)
        ;("passthrough" !== n.type && null != n.acknowledgement && e.postMessage(n.acknowledgement),
          "pending" !== n.type && E(n.message))
      }
    }),
    window.top === window && r.ipcRenderer.send("codex_desktop:app-server-window-ready"),
    r.ipcRenderer.on("codex_desktop:mcp-app-sandbox-host-message", (e, t) => {
      let r = window.location.origin
      "null" !== r && window.postMessage(t, r, e.ports)
    }))
  let T = new Map()
  ;(r.ipcRenderer.on("codex_desktop:remote-hosted-pip-video-frame", (e, t) => {
    if ("stopped" in t) {
      for (let [e, r] of T) r.threadID === t.threadID && (r.decoder.close(), T.delete(e))
      return
    }
    let r = t.presentationID,
      n = T.get(r)
    if (null == n) {
      if (!t.isKeyFrame || null == t.decoderConfiguration) return
      let e = new VideoDecoder({
        output: (e) => {
          let n = window.location.origin
          "null" === n
            ? e.close()
            : window.postMessage(
                { frame: e, presentationID: r, threadID: t.threadID, type: "remote-hosted-pip-video-frame" },
                n,
                [e],
              )
        },
        error: () => {
          let n = T.get(r)
          if (n?.decoder === e) {
            T.delete(r)
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
        (n = { configuration: t.decoderConfiguration, decoder: e, threadID: t.threadID }),
        T.set(r, n))
    } else
      t.isKeyFrame &&
        null != t.decoderConfiguration &&
        (n.configuration.length !== t.decoderConfiguration.length ||
          !n.configuration.every((e, r) => e === t.decoderConfiguration?.[r])) &&
        (n.decoder.reset(),
        n.decoder.configure({
          codec: t.codec,
          description: t.decoderConfiguration,
          hardwareAcceleration: "prefer-hardware",
          optimizeForLatency: !0,
        }),
        (n.configuration = t.decoderConfiguration))
    "configured" === n.decoder.state &&
      n.decoder.decode(
        new EncodedVideoChunk({ data: t.videoData, timestamp: t.timestamp, type: t.isKeyFrame ? "key" : "delta" }),
      )
  }),
    r.contextBridge.exposeInMainWorld("codexWindowType", f),
    r.contextBridge.exposeInMainWorld("electronBridge", M),
    "u" > typeof window &&
      window.addEventListener("message", (e) => {
        if (e.source !== window) return
        if (e.data?.type === c && 1 === e.ports.length) return void r.ipcRenderer.postMessage(c, e.data, [e.ports[0]])
        if (e.data?.type === l && e.origin === window.location.origin && 1 === e.ports.length)
          return void r.ipcRenderer.postMessage(l, { hostId: e.data.hostId, generation: e.data.generation }, [
            e.ports[0],
          ])
        if (e.data?.type !== "connect-app-host") return
        let { port: t } = e.data
        r.ipcRenderer.postMessage("codex_desktop:connect-app-host", void 0, [t])
      }),
    r.ipcRenderer.on(p, (e, t) => {
      window.postMessage({ type: p, requestId: t.requestId, closed: t.closed }, window.location.origin, e.ports)
    }),
    (module.exports = {}))
})()
//# sourceMappingURL=preload.js.map
