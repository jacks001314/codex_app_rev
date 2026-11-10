const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./voice-dsp-b42ec6665abd.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./timing-signals-6301d26a3c55.js",
      "./contracts-96b363340ff1.js",
      "./preferences-c6a8f9117081.js",
      "./dsp-bd00ef6e2983.js",
      "./silero-vad-4867dddba460.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { OFt as t, kFt as n } from "./app-shared-2feb3d4c6fcc.js";
async function r() {
  return (
    await t(
      async () => {
        let { initializeVoiceDsp: e } = await import(`./voice-dsp-b42ec6665abd.js`);
        return { initializeVoiceDsp: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      import.meta.url,
    )
  ).initializeVoiceDsp();
}
async function i(e) {
  let { preloadSileroVoiceActivityDetector: n } = await t(
    async () => {
      let { preloadSileroVoiceActivityDetector: e } = await import(`./silero-vad-4867dddba460.js`);
      return { preloadSileroVoiceActivityDetector: e };
    },
    __vite__mapDeps([10, 1, 2, 3, 4, 5]),
    import.meta.url,
  );
  return n(e);
}
function a() {
  return (a = e(() => {
    n();
  }))();
}
a();
export { r as loadVoiceDsp, i as preloadSileroVoiceActivityDetector };
//# sourceMappingURL=entry-bc1dafa3b0f1.js.map
