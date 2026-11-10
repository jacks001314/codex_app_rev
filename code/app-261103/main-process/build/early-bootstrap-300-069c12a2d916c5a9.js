"use strict"
;((exports.ids = [300]),
  (exports.modules = {
    13367(e, i, r) {
      var a = r(42524),
        t = r(86697),
        n = r(37418),
        l = r(24627),
        o = r(4745),
        d = r(59558)
      let c = (0, n.promisify)(l.gzip),
        s = (0, o.vB9)("content-tracing")
      async function u(e) {
        try {
          await (0, a.rm)(e, { force: !0 })
        } catch (i) {
          s().warning("Failed to remove temporary trace upload file.", { safe: {}, sensitive: { error: i, path: e } })
        }
      }
      r.d(
        i,
        {},
        {
          uploadTraceRecording: async function ({
            tracePath: e,
            additionalTraceFiles: i,
            buildFlavor: r,
            buildNumber: n,
            appVersion: l,
            traceRecordingNote: o,
            recordingDurationMs: s,
            correlation: g,
            runtimeHealth: p,
            rendererProfile: f,
            uploadFeedback: w,
          }) {
            let m = `${e}.gz`,
              v = i?.find((e) => e.endsWith(".pftrace")),
              h = v ?? m,
              y = `${e}.metadata.json`,
              _ = o?.trim() || null,
              b = null
            try {
              let o = await (0, a.readFile)(e),
                u = null == v ? await c(o) : null
              await Promise.all([
                ...(null == u ? [] : [(0, a.writeFile)(m, u)]),
                (0, a.writeFile)(
                  y,
                  JSON.stringify(
                    {
                      classification: "trace-recording",
                      description: _,
                      recordingDurationMs: s ?? null,
                      correlation: g ?? null,
                      runtimeHealth: p ?? null,
                      ...{},
                      trace: {
                        filename: (0, t.basename)(v ?? e),
                        sizeBytes: o.byteLength,
                        gzipSizeBytes: u?.byteLength ?? null,
                      },
                    },
                    null,
                    2,
                  ),
                ),
              ])
              let f = await (0, d.q$)()
              return (
                (b = f?.archiveId ?? null),
                (
                  await w({
                    classification: "trace-recording",
                    reason: _ ?? "Desktop content trace recording",
                    threadId: g?.conversationId ?? null,
                    includeLogs: !0,
                    extraLogFiles: [h, y, ...(i?.filter((e) => e !== v) ?? []), ...(f?.filePaths ?? [])],
                    tags: {
                      app_version: l,
                      app_build: n ?? void 0,
                      buildFlavor: r,
                      trace_recording: "content-trace",
                      trace_filename: (0, t.basename)(h),
                      platform: process.platform,
                      recording_duration_ms: null == s ? void 0 : String(s),
                      host_id: g?.hostId ?? void 0,
                      window_id: g?.windowId == null ? void 0 : String(g.windowId),
                      gpu_vendor: p?.gpuVendor ?? void 0,
                      gpu_renderer: p?.gpuRenderer ?? void 0,
                      hardware_acceleration:
                        null == p ? void 0 : p.hardwareAccelerationEnabled ? "enabled" : "disabled",
                    },
                  })
                ).threadId
              )
            } finally {
              await Promise.all([u(m), u(y), ...(null == b ? [] : [(0, d.NT)(b)])])
            }
          },
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-300-069c12a2d916c5a9.js.map
