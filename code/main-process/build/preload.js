let e = require("electron");
var t;
(function (e) {
  ((e[(e.Classic = 1)] = `Classic`),
    (e[(e.Protocol = 2)] = `Protocol`),
    (e[(e.Both = 3)] = `Both`));
})((t ||= {}));
function n(e) {
  return {
    createUrl: (t) => `${e}://${t}/sentry_key`,
    urlMatches: function (e, t) {
      return e.startsWith(this.createUrl(t));
    },
    createKey: (t) => `${e}.${t}`,
    namespace: e,
  };
}
function r(t = `sentry-ipc`) {
  let r = n(t);
  if (((window.__SENTRY_IPC__ = window.__SENTRY_IPC__ || {}), window.__SENTRY_IPC__[r.namespace]))
    console.log(`Sentry Electron preload has already been run`);
  else {
    let t = {
      sendRendererStart: () => e.ipcRenderer.send(r.createKey(`start`)),
      sendScope: (t) => e.ipcRenderer.send(r.createKey(`scope`), t),
      sendEnvelope: (t) => e.ipcRenderer.send(r.createKey(`envelope`), t),
      sendStatus: (t) => e.ipcRenderer.send(r.createKey(`status`), t),
      sendStructuredLog: (t) => e.ipcRenderer.send(r.createKey(`structured-log`), t),
      sendMetric: (t) => e.ipcRenderer.send(r.createKey(`metric`), t),
    };
    if (((window.__SENTRY_IPC__[r.namespace] = t), e.contextBridge))
      try {
        e.contextBridge.exposeInMainWorld(`__SENTRY_IPC__`, window.__SENTRY_IPC__);
      } catch {}
  }
}
r();
function i(e) {
  return typeof e != `object` ||
    !e ||
    !(`marker` in e) ||
    e.marker !== `codex-host-chunked-message-v1` ||
    !(`transferId` in e) ||
    typeof e.transferId != `string` ||
    !(`sequence` in e) ||
    typeof e.sequence != `number` ||
    !Number.isSafeInteger(e.sequence) ||
    !(`kind` in e)
    ? !1
    : e.kind === `chunk`
      ? `tokens` in e && Array.isArray(e.tokens) && e.tokens.every(a)
      : e.kind === `start` || e.kind === `end`;
}
function a(e) {
  return typeof e != `object` || !e || !(`type` in e)
    ? !1
    : e.type === `array-start` ||
        e.type === `object-start` ||
        e.type === `container-end` ||
        e.type === `string-end`
      ? !0
      : e.type === `string-start`
        ? `target` in e && (e.target === `key` || e.target === `value`)
        : e.type === `key` || e.type === `string-chunk`
          ? `value` in e && typeof e.value == `string`
          : e.type === `value`
            ? `value` in e
              ? e.value == null ||
                typeof e.value == `boolean` ||
                typeof e.value == `number` ||
                typeof e.value == `string`
              : !0
            : !1;
}
var o = `codex_desktop:chunked-message-ack`,
  s = `codex_desktop:remote-hosted-pip-video-frame`,
  c = `codex_desktop:mcp-app-sandbox-host-message`,
  l = `codex_desktop:show-context-menu`,
  u = `codex_desktop:get-sentry-init-options`,
  d = `codex_desktop:get-build-flavor`,
  f = `codex_desktop:get-system-theme-variant`,
  p = `codex_desktop:get-initial-sidebar-bootstrap`,
  m = `codex_desktop:get-fast-mode-rollout-metrics`,
  h = `codex_desktop:system-theme-variant-updated`,
  g = `codex_desktop:trigger-sentry-test`,
  _ = `codex_desktop:connect-app-host`,
  v = `codex_desktop:start-file-drag`;
function y(e) {
  return `codex_desktop:worker:${e}:from-view`;
}
function b(e) {
  return `codex_desktop:worker:${e}:for-view`;
}
var x = { darwin: `Mac OS`, linux: `X11; Linux`, win32: `Windows NT 10.0` };
function S({ appVersion: e, platform: t = process.platform, arch: n = process.arch }) {
  return `Codex Desktop/${e} (${x[t] ?? t}; ${n})`;
}
var C = performance.timeOrigin,
  w = `electron`,
  T = `codex_desktop:message-from-view`,
  E = `codex_desktop:message-for-view`,
  D = e.ipcRenderer.sendSync(u),
  O = e.ipcRenderer.sendSync(d),
  k = e.ipcRenderer.sendSync(`codex_desktop:get-shared-object-snapshot`) ?? {},
  A = e.ipcRenderer.sendSync(f),
  j = A === `dark` ? `electron-dark` : `electron-light`,
  M = document.documentElement;
if (M != null) M.classList.add(j);
else {
  let e = new MutationObserver(() => {
    let t = document.documentElement;
    t != null && (t.classList.add(j), e.disconnect());
  });
  e.observe(document, { childList: !0 });
}
var N = () => A,
  P = new Set(),
  F;
e.ipcRenderer.on(h, (e, t) => {
  ((A = t),
    P.forEach((e) => {
      e();
    }));
});
function I(e, t) {
  if (t === void 0) {
    delete k[e];
    return;
  }
  k[e] = t;
}
var L = new Map(),
  R = new Map(),
  z = {
    windowType: w,
    acknowledgeChunkedMessage: (t, n) => {
      e.ipcRenderer.send(o, t, n);
    },
    getPreloadStartedAtMs: () => C,
    sendMessageFromView: async (t) => {
      (t.type === `shared-object-set` && I(t.key, t.value), await e.ipcRenderer.invoke(T, t));
    },
    getPathForFile: (t) => e.webUtils.getPathForFile(t) || null,
    startFileDrag: (t) => e.ipcRenderer.sendSync(v, t) === !0,
    sendWorkerMessageFromView: async (t, n) => {
      await e.ipcRenderer.invoke(y(t), n);
    },
    subscribeToWorkerMessages: (t, n) => {
      let r = L.get(t);
      r || ((r = new Set()), L.set(t, r));
      let i = R.get(t);
      return (
        i ||
          ((i = (e, n) => {
            let r = L.get(t);
            r &&
              r.forEach((e) => {
                e(n);
              });
          }),
          R.set(t, i),
          e.ipcRenderer.on(b(t), i)),
        r.add(n),
        () => {
          let r = L.get(t);
          if (!r || (r.delete(n), r.size > 0)) return;
          L.delete(t);
          let i = R.get(t);
          (i && e.ipcRenderer.removeListener(b(t), i), R.delete(t));
        }
      );
    },
    showContextMenu: async (t) => e.ipcRenderer.invoke(l, t),
    getFastModeRolloutMetrics: async (t) => e.ipcRenderer.invoke(m, t),
    getSharedObjectSnapshotValue: (e) => k[e],
    getInitialSidebarBootstrap: () => (F === void 0 && (F = e.ipcRenderer.sendSync(p)), F),
    getSystemThemeVariant: N,
    subscribeToSystemThemeVariant: (e) => (
      P.add(e),
      () => {
        P.delete(e);
      }
    ),
    triggerSentryTestError: async () => {
      await e.ipcRenderer.invoke(g);
    },
    getSentryInitOptions: () => D,
    getDesktopUserAgent: () => S({ appVersion: D.appVersion }),
    getAppSessionId: () => D.codexAppSessionId,
    getBuildFlavor: () => O,
    isDeviceCheckSupported: () => process.platform === `darwin` && process.arch === `arm64`,
    isIntelMacBuild: () => process.platform === `darwin` && process.arch === `x64`,
  };
(e.ipcRenderer.on(E, (e, t) => {
  if (!i(t)) {
    let e = t;
    if (e.type === `shared-object-updated`) I(e.key, e.value);
    else if (e.type === `remote-hosted-pip-content-layout-state-changed`)
      for (let [t, n] of B)
        n.threadID === e.state.activeThreadID &&
          !e.state.orderedPresentationIDs.includes(t) &&
          (n.decoder.close(), B.delete(t));
  }
  window.dispatchEvent(new MessageEvent(`message`, { data: t }));
}),
  e.ipcRenderer.on(c, (e, t) => {
    let n = window.location.origin;
    n !== `null` && window.postMessage(t, n, e.ports);
  }));
var B = new Map();
(e.ipcRenderer.on(s, (e, t) => {
  if (`stopped` in t) {
    for (let [e, n] of B) n.threadID === t.threadID && (n.decoder.close(), B.delete(e));
    return;
  }
  let n = t.presentationID,
    r = B.get(n);
  if (r == null) {
    if (!t.isKeyFrame || t.decoderConfiguration == null) return;
    let e = new VideoDecoder({
      output: (e) => {
        let r = window.location.origin;
        if (r === `null`) {
          e.close();
          return;
        }
        window.postMessage(
          {
            frame: e,
            presentationID: n,
            threadID: t.threadID,
            type: `remote-hosted-pip-video-frame`,
          },
          r,
          [e],
        );
      },
      error: () => {
        if (B.get(n)?.decoder === e) {
          B.delete(n);
          let e = window.location.origin;
          e !== `null` &&
            window.postMessage(
              { presentationID: n, threadID: t.threadID, type: `remote-hosted-pip-video-error` },
              e,
            );
        }
      },
    });
    (e.configure({
      codec: t.codec,
      description: t.decoderConfiguration,
      hardwareAcceleration: `prefer-hardware`,
      optimizeForLatency: !0,
    }),
      (r = { configuration: t.decoderConfiguration, decoder: e, threadID: t.threadID }),
      B.set(n, r));
  } else
    t.isKeyFrame &&
      t.decoderConfiguration != null &&
      (r.configuration.length !== t.decoderConfiguration.length ||
        !r.configuration.every((e, n) => e === t.decoderConfiguration?.[n])) &&
      (r.decoder.reset(),
      r.decoder.configure({
        codec: t.codec,
        description: t.decoderConfiguration,
        hardwareAcceleration: `prefer-hardware`,
        optimizeForLatency: !0,
      }),
      (r.configuration = t.decoderConfiguration));
  r.decoder.state === `configured` &&
    r.decoder.decode(
      new EncodedVideoChunk({
        data: t.videoData,
        timestamp: t.timestamp,
        type: t.isKeyFrame ? `key` : `delta`,
      }),
    );
}),
  e.contextBridge.exposeInMainWorld(`codexWindowType`, w),
  e.contextBridge.exposeInMainWorld(`electronBridge`, z),
  typeof window < `u` &&
    window.addEventListener(`message`, (t) => {
      if (t.source !== window || t.data?.type !== `connect-app-host`) return;
      let { port: n } = t.data;
      e.ipcRenderer.postMessage(_, void 0, [n]);
    }));
//# sourceMappingURL=preload.js.map
