const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./voice-dsp-818032a745b6.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./timing-signals-908971eb73de.js",
      "./contracts-96b363340ff1.js",
      "./preferences-d95b6577e820.js",
      "./dsp-2d6db1c0fccc.js",
      "./silero-vad-44f6d25a02b4.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { fPt as t, pPt as n } from "./app-shared-bbfeca5e5737.js";
async function r() {
  return (
    await t(
      async () => {
        let { initializeVoiceDsp: e } = await import(`./voice-dsp-818032a745b6.js`);
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
      let { preloadSileroVoiceActivityDetector: e } = await import(`./silero-vad-44f6d25a02b4.js`);
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
//# sourceMappingURL=entry-33afd49be636.js.map
