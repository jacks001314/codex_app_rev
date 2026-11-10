require("./rolldown-runtime-CPUxUITh.js");
const e = require("./logger-CUwSCKgw.js");
require("./bootstrap-DvSEn4qy.js");
const t = require("./main-DkWgQSQe.js");
let n = require("node:fs/promises"),
  r = require("node:path"),
  i = require("node:util"),
  a = require("node:zlib");
var o = `Desktop content trace recording`,
  s = (0, i.promisify)(a.gzip),
  c = e.i(`content-tracing`);
async function l({
  tracePath: e,
  additionalTraceFiles: i,
  buildFlavor: a,
  buildNumber: c,
  appVersion: l,
  traceRecordingNote: d,
  recordingDurationMs: f,
  correlation: p,
  runtimeHealth: m,
  uploadFeedback: h,
}) {
  let g = `${e}.gz`,
    _ = i?.find((e) => e.endsWith(`.pftrace`)),
    v = _ ?? g,
    y = `${e}.metadata.json`,
    b = d?.trim() || null,
    x = null;
  try {
    let u = await (0, n.readFile)(e),
      d = _ == null ? await s(u) : null;
    await Promise.all([
      ...(d == null ? [] : [(0, n.writeFile)(g, d)]),
      (0, n.writeFile)(
        y,
        JSON.stringify(
          {
            classification: `trace-recording`,
            description: b,
            recordingDurationMs: f ?? null,
            correlation: p ?? null,
            runtimeHealth: m ?? null,
            trace: {
              filename: (0, r.basename)(_ ?? e),
              sizeBytes: u.byteLength,
              gzipSizeBytes: d?.byteLength ?? null,
            },
          },
          null,
          2,
        ),
      ),
    ]);
    let S = await t.t();
    return (
      (x = S?.archiveId ?? null),
      (
        await h({
          classification: `trace-recording`,
          reason: b ?? o,
          threadId: p?.conversationId ?? null,
          includeLogs: !0,
          extraLogFiles: [v, y, ...(i?.filter((e) => e !== _) ?? []), ...(S?.filePaths ?? [])],
          tags: {
            app_version: l,
            app_build: c ?? void 0,
            buildFlavor: a,
            trace_recording: `content-trace`,
            trace_filename: (0, r.basename)(v),
            platform: process.platform,
            recording_duration_ms: f == null ? void 0 : String(f),
            host_id: p?.hostId ?? void 0,
            window_id: p?.windowId == null ? void 0 : String(p.windowId),
            gpu_vendor: m?.gpuVendor ?? void 0,
            gpu_renderer: m?.gpuRenderer ?? void 0,
            hardware_acceleration:
              m == null ? void 0 : m.hardwareAccelerationEnabled ? `enabled` : `disabled`,
          },
        })
      ).threadId
    );
  } finally {
    await Promise.all([u(g), u(y), ...(x == null ? [] : [t.n(x)])]);
  }
}
async function u(e) {
  try {
    await (0, n.rm)(e, { force: !0 });
  } catch (t) {
    c().warning(`Failed to remove temporary trace upload file.`, {
      safe: {},
      sensitive: { error: t, path: e },
    });
  }
}
exports.uploadTraceRecording = l;
//# sourceMappingURL=upload-BQXfBozk.js.map
